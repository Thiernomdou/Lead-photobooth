'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface Lead {
  id:          string
  created_at:  string
  event_type:  string | null
  date:        string | null
  venue:       string | null
  guest_count: string | null
  duration:    string | null
  model:       string | null
  options:     string | null
  budget:      string | null
  prenom:      string
  nom:         string
  email:       string
  telephone:   string
  source:      string | null
  message:     string | null
  status:      string | null
}

// ─── Constantes ─────────────────────────────────────────────────────────────

const STATUS: Record<string, { label: string; badge: string }> = {
  nouveau:       { label: 'Nouveau',            badge: 'bg-yellow-50 text-yellow-800 border-yellow-300'  },
  envoye:        { label: 'Envoyé prestataire', badge: 'bg-blue-50 text-blue-800 border-blue-300'        },
  converti:      { label: 'Converti',           badge: 'bg-green-50 text-green-800 border-green-300'     },
  non_interesse: { label: 'Non intéressé',      badge: 'bg-red-50 text-red-800 border-red-300'           },
}

const PRESTATAIRES = [
  'Mon Joli Selfie',
  'Funborne',
  'Instants 360',
  'Bobox Lyon',
  'Selfizee',
  'Photobooth Agency',
  'Josepho',
  'Allez Une Dernière',
]

const PRICE_PER_LEAD = 50

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmt(iso: string) {
  return new Date(iso).toLocaleString('fr-FR', {
    day: '2-digit', month: '2-digit', year: '2-digit',
    hour: '2-digit', minute: '2-digit',
  })
}

function isThisMonth(iso: string) {
  const d = new Date(iso), n = new Date()
  return d.getMonth() === n.getMonth() && d.getFullYear() === n.getFullYear()
}

function isToday(iso: string) {
  return new Date(iso).toDateString() === new Date().toDateString()
}

function monthLabel(key: string) {
  return new Date(key + '-01').toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })
}

// ─── Composant principal ─────────────────────────────────────────────────────

export default function AdminDashboard({ leads: init }: { leads: Lead[] }) {
  const [leads,         setLeads]        = useState<Lead[]>(init)
  const [filterStatus,  setFilterStatus] = useState('')
  const [filterMonth,   setFilterMonth]  = useState('')
  const [filterType,    setFilterType]   = useState('')
  const [updatingId,    setUpdatingId]   = useState<string | null>(null)
  const [copiedId,      setCopiedId]     = useState<string | null>(null)
  const [paidMap,       setPaidMap]      = useState<Record<string, boolean>>({})
  const router = useRouter()

  // ── Stats ─────────────────────────────────────────────────────────────────
  const monthLeads  = useMemo(() => leads.filter(l => isThisMonth(l.created_at)), [leads])
  const todayCount  = useMemo(() => leads.filter(l => isToday(l.created_at)).length, [leads])
  const completeCount = useMemo(() => monthLeads.filter(l => l.model).length, [monthLeads])
  const incompCount   = useMemo(() => monthLeads.filter(l => !l.model).length, [monthLeads])
  const rate = monthLeads.length ? Math.round((completeCount / monthLeads.length) * 100) : 0

  // ── Options de filtre ────────────────────────────────────────────────────
  const months = useMemo(() => {
    const s = new Set<string>()
    leads.forEach(l => {
      const d = new Date(l.created_at)
      s.add(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`)
    })
    return Array.from(s).sort().reverse()
  }, [leads])

  const eventTypes = useMemo(() => {
    const s = new Set<string>()
    leads.forEach(l => { if (l.event_type) s.add(l.event_type) })
    return Array.from(s).sort()
  }, [leads])

  // ── Leads filtrés ────────────────────────────────────────────────────────
  const filtered = useMemo(() => leads.filter(l => {
    const st = l.status ?? 'nouveau'
    if (filterStatus && st !== filterStatus) return false
    if (filterMonth) {
      const d = new Date(l.created_at)
      const [y, m] = filterMonth.split('-').map(Number)
      if (d.getFullYear() !== y || d.getMonth() + 1 !== m) return false
    }
    if (filterType && l.event_type !== filterType) return false
    return true
  }), [leads, filterStatus, filterMonth, filterType])

  // ── Prestataires : leads envoyés ce mois ────────────────────────────────
  const sentThisMonth = monthLeads.filter(l => l.status === 'envoye').length

  // ── Actions ──────────────────────────────────────────────────────────────
  const updateStatus = async (id: string, status: string) => {
    setUpdatingId(id)
    await fetch('/api/admin/leads', {
      method:  'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ id, status }),
    })
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l))
    setUpdatingId(null)
  }

  const copyLead = (lead: Lead) => {
    const text = [
      `${lead.prenom} ${lead.nom}`,
      `📧 ${lead.email}`,
      `📞 ${lead.telephone}`,
      `🎉 ${lead.event_type ?? '—'} · ${lead.date ?? '—'}`,
      `📍 ${lead.venue ?? '—'}`,
      `👥 ${lead.guest_count ?? '—'} invités · ${lead.duration ?? '—'}`,
      `📸 ${lead.model ?? '—'}`,
      lead.budget  ? `💰 Budget : ${lead.budget}`   : '',
      lead.options ? `✅ Options : ${lead.options}` : '',
      lead.message ? `💬 ${lead.message}`            : '',
    ].filter(Boolean).join('\n')

    navigator.clipboard.writeText(text)
    setCopiedId(lead.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const exportCSV = () => {
    const headers = [
      'Date', 'Prénom', 'Nom', 'Email', 'Téléphone',
      'Événement', 'Date événement', 'Lieu', 'Invités', 'Durée',
      'Formule', 'Options', 'Budget', 'Source', 'Message', 'Statut',
    ]
    const rows = leads.map(l => [
      fmt(l.created_at),
      l.prenom, l.nom, l.email, l.telephone,
      l.event_type ?? '', l.date ?? '', l.venue ?? '',
      l.guest_count ?? '', l.duration ?? '',
      l.model ?? '', l.options ?? '', l.budget ?? '',
      l.source ?? '', l.message ?? '',
      STATUS[l.status ?? 'nouveau']?.label ?? (l.status ?? 'nouveau'),
    ])
    const csv = [headers, ...rows]
      .map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(','))
      .join('\n')
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' })
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href     = url
    a.download = `leads-photobooth-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const logout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' })
    window.location.href = '/admin/login'
  }

  // ── Rendu ────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Header ────────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-base font-serif font-bold text-gray-900">
              PhotoBooth <span className="text-gold-400">Admin</span>
            </h1>
            {todayCount > 0 && (
              <span className="bg-gold-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                {todayCount} aujourd&apos;hui
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.refresh()}
              className="text-xs text-gray-500 hover:text-gray-900 border border-gray-200 px-3 py-1.5 hover:border-gray-400 transition-colors"
            >
              ↻ Actualiser
            </button>
            <button
              onClick={logout}
              className="text-xs text-gray-500 hover:text-red-600 transition-colors"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* ── Stats ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {([
            { label: 'Leads ce mois',    value: monthLeads.length,  sub: 'total reçus',       color: 'text-gray-900'   },
            { label: 'Complets',         value: completeCount,       sub: 'formulaire terminé', color: 'text-green-600'  },
            { label: 'Incomplets',       value: incompCount,         sub: 'abandonnés',         color: 'text-orange-500' },
            { label: 'Taux complétion',  value: `${rate} %`,        sub: 'ce mois',            color: 'text-blue-600'   },
          ] as const).map(s => (
            <div key={s.label} className="bg-white border border-gray-200 p-5">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">{s.label}</p>
              <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* ── Tableau des leads ──────────────────────────────────────── */}
        <div className="bg-white border border-gray-200">

          {/* Barre de filtres */}
          <div className="p-4 border-b border-gray-100 flex flex-wrap items-center gap-2">
            <h2 className="text-sm font-semibold text-gray-900 mr-auto">
              Leads{filtered.length !== leads.length ? ` (${filtered.length} / ${leads.length})` : ` (${leads.length})`}
            </h2>

            <select
              value={filterStatus}
              onChange={e => setFilterStatus(e.target.value)}
              className="text-xs border border-gray-200 px-2 py-1.5 bg-white focus:outline-none focus:border-gray-400"
            >
              <option value="">Tous les statuts</option>
              {Object.entries(STATUS).map(([v, s]) => (
                <option key={v} value={v}>{s.label}</option>
              ))}
            </select>

            <select
              value={filterMonth}
              onChange={e => setFilterMonth(e.target.value)}
              className="text-xs border border-gray-200 px-2 py-1.5 bg-white focus:outline-none focus:border-gray-400"
            >
              <option value="">Tous les mois</option>
              {months.map(m => <option key={m} value={m}>{monthLabel(m)}</option>)}
            </select>

            <select
              value={filterType}
              onChange={e => setFilterType(e.target.value)}
              className="text-xs border border-gray-200 px-2 py-1.5 bg-white focus:outline-none focus:border-gray-400"
            >
              <option value="">Tous les types</option>
              {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
            </select>

            <button
              onClick={exportCSV}
              className="text-xs bg-gray-900 text-white px-3 py-1.5 hover:bg-gray-700 transition-colors"
            >
              ↓ CSV
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  {[
                    'Date',
                    'Contact',
                    'Événement',
                    'Date évent.',
                    'Formule',
                    'Budget',
                    'Source',
                    'Statut',
                    '',
                  ].map(h => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left font-semibold text-gray-400 uppercase tracking-wide whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="px-4 py-10 text-center text-gray-400">
                      Aucun lead correspondant aux filtres
                    </td>
                  </tr>
                ) : filtered.map(lead => {
                  const st     = lead.status ?? 'nouveau'
                  const stCfg  = STATUS[st] ?? STATUS.nouveau
                  return (
                    <tr key={lead.id} className="hover:bg-gray-50/70 transition-colors">

                      {/* Date */}
                      <td className="px-4 py-3 text-gray-400 whitespace-nowrap align-top">
                        {fmt(lead.created_at)}
                      </td>

                      {/* Contact */}
                      <td className="px-4 py-3 align-top min-w-[180px]">
                        <p className="font-semibold text-gray-900">
                          {lead.prenom} {lead.nom}
                        </p>
                        <p className="text-gray-500 mt-0.5">
                          <a href={`mailto:${lead.email}`} className="hover:text-gray-900">
                            {lead.email}
                          </a>
                        </p>
                        <p className="text-gray-500">
                          <a href={`tel:${lead.telephone}`} className="hover:text-gray-900">
                            {lead.telephone}
                          </a>
                        </p>
                      </td>

                      {/* Type événement */}
                      <td className="px-4 py-3 text-gray-700 whitespace-nowrap align-top">
                        {lead.event_type ?? '—'}
                      </td>

                      {/* Date événement */}
                      <td className="px-4 py-3 text-gray-700 whitespace-nowrap align-top">
                        {lead.date ?? '—'}
                      </td>

                      {/* Formule */}
                      <td className="px-4 py-3 text-gray-700 whitespace-nowrap align-top">
                        {lead.model ?? '—'}
                      </td>

                      {/* Budget */}
                      <td className="px-4 py-3 text-gray-700 whitespace-nowrap align-top">
                        {lead.budget ?? '—'}
                      </td>

                      {/* Source */}
                      <td className="px-4 py-3 text-gray-500 whitespace-nowrap align-top">
                        {lead.source ?? '—'}
                      </td>

                      {/* Statut */}
                      <td className="px-4 py-3 align-top">
                        <select
                          value={st}
                          disabled={updatingId === lead.id}
                          onChange={e => updateStatus(lead.id, e.target.value)}
                          className={`text-xs font-semibold border px-2 py-1 focus:outline-none cursor-pointer transition-colors ${stCfg.badge} ${updatingId === lead.id ? 'opacity-50' : ''}`}
                        >
                          {Object.entries(STATUS).map(([v, s]) => (
                            <option key={v} value={v}>{s.label}</option>
                          ))}
                        </select>
                      </td>

                      {/* Copier */}
                      <td className="px-4 py-3 align-top">
                        <button
                          onClick={() => copyLead(lead)}
                          title="Copier les infos contact"
                          className={`px-2 py-1 border text-xs transition-colors whitespace-nowrap ${
                            copiedId === lead.id
                              ? 'border-green-300 text-green-600 bg-green-50'
                              : 'border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-900'
                          }`}
                        >
                          {copiedId === lead.id ? '✓ Copié' : '⎘ Copier'}
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Prestataires ──────────────────────────────────────────── */}
        <div className="bg-white border border-gray-200">
          <div className="p-4 border-b border-gray-100">
            <h2 className="text-sm font-semibold text-gray-900">Prestataires</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Tarif : {PRICE_PER_LEAD} € / lead envoyé ·{' '}
              {sentThisMonth} lead{sentThisMonth > 1 ? 's' : ''} envoyé{sentThisMonth > 1 ? 's' : ''} ce mois
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  {['Prestataire', 'Téléphone', 'Leads envoyés (mois)', 'Montant dû', 'Paiement'].map(h => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left font-semibold text-gray-400 uppercase tracking-wide whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {PRESTATAIRES.map(name => {
                  const isPaid = paidMap[name] ?? false
                  return (
                    <tr key={name} className="hover:bg-gray-50/70">
                      <td className="px-4 py-3 font-medium text-gray-900">{name}</td>
                      <td className="px-4 py-3 text-gray-400">—</td>
                      <td className="px-4 py-3 text-gray-500">—</td>
                      <td className="px-4 py-3 text-gray-500">—</td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => setPaidMap(p => ({ ...p, [name]: !isPaid }))}
                          className={`text-xs font-semibold border px-2 py-1 transition-colors ${
                            isPaid
                              ? 'bg-green-50 text-green-700 border-green-300'
                              : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-400'
                          }`}
                        >
                          {isPaid ? '✓ Payé' : 'En attente'}
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p className="px-4 py-3 text-xs text-gray-400 border-t border-gray-100">
            💡 Les colonnes &ldquo;Leads envoyés&rdquo; et &ldquo;Montant dû&rdquo; seront calculées automatiquement
            dès qu&apos;un champ &ldquo;prestataire&rdquo; sera ajouté à la table leads.
          </p>
        </div>

      </main>
    </div>
  )
}
