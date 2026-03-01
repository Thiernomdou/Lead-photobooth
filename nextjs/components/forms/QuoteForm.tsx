'use client'

/**
 * QuoteForm — Formulaire multi-step de simulation de devis
 * ─────────────────────────────────────────────────────────
 * Étape 1 : Votre événement
 * Étape 2 : Votre formule
 * Étape 3 : Vos coordonnées + récapitulatif + envoi Formspree
 *
 * ⚠️  Remplacez FORMSPREE_ID par votre ID formulaire :
 *     1. Créez un compte sur https://formspree.io (gratuit)
 *     2. Créez un nouveau formulaire → copiez l'ID (ex : "xyzabcde")
 *     3. Remplacez la valeur ci-dessous
 */

import { useState, useMemo } from 'react'

const API_ENDPOINT = '/api/devis'

// ─── Types ─────────────────────────────────────────────────────────────────

type EventType  = 'Mariage' | 'Anniversaire' | 'Soirée entreprise' | 'Remise de diplômes' | 'Autre'
type GuestCount = 'Moins de 50' | '50-100' | '100-200' | 'Plus de 200'
type Duration   = '2h' | '3h' | '4h' | 'Soirée complète'
type BoothModel = 'Borne Classique' | 'Borne Premium' | 'Vidéo 360°'
type Budget     = 'Je ne sais pas encore' | 'Moins de 500€' | '500-800€' | 'Plus de 800€'
type Status     = 'idle' | 'loading' | 'success' | 'error'

interface S1 { eventType: EventType | ''; date: string; venue: string; guestCount: GuestCount | ''; duration: Duration | '' }
interface S2 { model: BoothModel | ''; options: string[]; budget: Budget | '' }
interface S3 { prenom: string; nom: string; email: string; telephone: string; source: string; message: string }

// ─── Constantes ────────────────────────────────────────────────────────────

const EVENT_TYPES: { label: EventType; emoji: string }[] = [
  { label: 'Mariage',            emoji: '💍' },
  { label: 'Anniversaire',       emoji: '🎂' },
  { label: 'Soirée entreprise',  emoji: '🏢' },
  { label: 'Remise de diplômes', emoji: '🎓' },
  { label: 'Autre',              emoji: '🎉' },
]

const BOOTH_MODELS: { label: BoothModel; emoji: string; desc: string }[] = [
  { label: 'Borne Classique', emoji: '📸', desc: 'Borne photo HD, impressions illimitées, fond inclus' },
  { label: 'Borne Premium',   emoji: '✨', desc: 'Borne LED, GIFs animés, fond personnalisé, animateur dédié' },
  { label: 'Vidéo 360°',      emoji: '🌀', desc: 'Vidéo booth 360° dernière génération, effets slow-motion' },
]

const OPTIONS_LIST: { label: string; extra: string }[] = [
  { label: 'Impression photos instantanée',  extra: 'inclus'  },
  { label: 'Fond personnalisé',              extra: '+50 €'   },
  { label: 'Livre d\'or digital',            extra: '+80 €'   },
  { label: 'Animateur dédié',                extra: '+100 €'  },
  { label: 'Partage réseaux sociaux',        extra: 'inclus'  },
]

const BUDGETS: Budget[]      = ['Je ne sais pas encore', 'Moins de 500€', '500-800€', 'Plus de 800€']
const GUEST_COUNTS: GuestCount[] = ['Moins de 50', '50-100', '100-200', 'Plus de 200']
const DURATIONS: Duration[]   = ['2h', '3h', '4h', 'Soirée complète']
const SOURCES                 = ['Google', "Recommandation d'un proche", 'Réseaux sociaux', 'Autre']

// ─── Helpers ───────────────────────────────────────────────────────────────

function getMinDate(): string {
  const d = new Date()
  d.setDate(d.getDate() + 14)
  return d.toISOString().split('T')[0]
}

function formatDate(iso: string): string {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

// ─── Progress Bar ──────────────────────────────────────────────────────────

function ProgressBar({ step }: { step: 1 | 2 | 3 }) {
  const labels = ['Votre événement', 'Votre formule', 'Vos coordonnées']
  const pct    = step === 1 ? 33 : step === 2 ? 66 : 100
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        {labels.map((label, i) => (
          <span key={label} className={`text-xs font-semibold ${i + 1 <= step ? 'text-gold-500' : 'text-gray-400'}`}>
            {label}
          </span>
        ))}
      </div>
      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gold-400 transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>
      <p className="text-right text-xs text-gray-400 mt-1">Étape {step} / 3</p>
    </div>
  )
}

// ─── Boutons partagés ──────────────────────────────────────────────────────

function BtnNext({ disabled, onClick, label = 'Étape suivante →' }: { disabled: boolean; onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`w-full py-3.5 font-semibold text-sm tracking-wide transition-all ${
        disabled ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'btn-primary'
      }`}
    >
      {label}
    </button>
  )
}

function BtnBack({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-1 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold text-sm hover:border-gray-400 transition-colors"
    >
      ← Retour
    </button>
  )
}

// ─── Composant principal ───────────────────────────────────────────────────

export default function QuoteForm() {
  const [step,   setStep]   = useState<1 | 2 | 3>(1)
  const [status, setStatus] = useState<Status>('idle')
  const [errMsg, setErrMsg] = useState('')

  const [s1, setS1] = useState<S1>({ eventType: '', date: '', venue: '', guestCount: '', duration: '' })
  const [s2, setS2] = useState<S2>({ model: '', options: [], budget: '' })
  const [s3, setS3] = useState<S3>({ prenom: '', nom: '', email: '', telephone: '', source: '', message: '' })

  const minDate    = useMemo(getMinDate, [])
  const step1Valid = s1.eventType !== '' && s1.date !== ''
  const step2Valid = s2.model !== '' && s2.budget !== ''
  const step3Valid = s3.prenom !== '' && s3.nom !== '' && s3.email !== '' && s3.telephone !== ''

  const toggleOption = (label: string) =>
    setS2(p => ({
      ...p,
      options: p.options.includes(label) ? p.options.filter(o => o !== label) : [...p.options, label],
    }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!step3Valid) return
    setStatus('loading')
    setErrMsg('')
    try {
      const res = await fetch(API_ENDPOINT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ ...s1, ...s2, ...s3 }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
      setErrMsg('Une erreur est survenue. Veuillez réessayer ou nous contacter directement par téléphone.')
    }
  }

  // ── Succès ──────────────────────────────────────────────────────────────

  if (status === 'success') {
    return (
      <div className="py-12 px-4">
        {/* Check vert */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 mb-6 mx-auto">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="text-2xl font-serif font-bold text-gray-900 text-center mb-4">
          Votre demande a bien été reçue ✓
        </h3>

        <p className="text-gray-600 text-center leading-relaxed mb-2">
          Merci {s3.prenom}&nbsp;! Votre devis personnalisé est en cours de préparation.
        </p>
        <p className="text-gray-600 text-center leading-relaxed mb-8">
          Vous le recevrez sous 24h à{' '}
          <span className="font-medium text-gray-900">{s3.email}</span>.
          Notre équipe peut aussi vous rappeler directement si vous préférez.
        </p>

        <div className="border-t border-gray-100 pt-8">
          <a
            href="tel:+33665420793"
            className="btn-primary w-full justify-center text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Recevoir un appel rapidement → 06 65 42 07 93
          </a>
          <p className="text-center text-xs text-gray-400 mt-3">
            Du lundi au samedi, 9h–19h
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ProgressBar step={step} />

      {/* ══ Étape 1 : Votre événement ══════════════════════════════════════ */}
      {step === 1 && (
        <div className="space-y-6">

          {/* Type d'événement */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">
              Type d&apos;événement <span className="text-gold-400">*</span>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {EVENT_TYPES.map(({ label, emoji }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setS1(p => ({ ...p, eventType: label }))}
                  className={`flex flex-col items-center gap-1.5 py-4 px-2 border-2 transition-all text-center ${
                    s1.eventType === label ? 'border-gold-400 bg-gold-400/5' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-2xl" aria-hidden>{emoji}</span>
                  <span className="text-xs font-medium text-gray-700 leading-tight">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Date + Lieu */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Date de l&apos;événement <span className="text-gold-400">*</span>
              </label>
              <input
                type="date" min={minDate} value={s1.date}
                onChange={e => setS1(p => ({ ...p, date: e.target.value }))}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Lieu de l&apos;événement
              </label>
              <input
                type="text" placeholder="Salle, adresse ou quartier"
                value={s1.venue}
                onChange={e => setS1(p => ({ ...p, venue: e.target.value }))}
                className="input-field"
              />
            </div>
          </div>

          {/* Nombre d'invités */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">Nombre d&apos;invités estimé</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {GUEST_COUNTS.map(g => (
                <button
                  key={g} type="button"
                  onClick={() => setS1(p => ({ ...p, guestCount: g }))}
                  className={`py-2.5 px-3 border-2 text-sm font-medium transition-all ${
                    s1.guestCount === g
                      ? 'border-gold-400 bg-gold-400/5 text-gray-900'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Durée */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">Durée souhaitée</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {DURATIONS.map(d => (
                <button
                  key={d} type="button"
                  onClick={() => setS1(p => ({ ...p, duration: d }))}
                  className={`py-2.5 px-3 border-2 text-sm font-medium transition-all ${
                    s1.duration === d
                      ? 'border-gold-400 bg-gold-400/5 text-gray-900'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <BtnNext disabled={!step1Valid} onClick={() => setStep(2)} />
            {!step1Valid && (
              <p className="text-xs text-gray-400 text-center">
                Sélectionnez un type d&apos;événement et une date pour continuer
              </p>
            )}
          </div>
        </div>
      )}

      {/* ══ Étape 2 : Votre formule ════════════════════════════════════════ */}
      {step === 2 && (
        <div className="space-y-6">

          {/* Modèle de photobooth */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">
              Modèle de photobooth <span className="text-gold-400">*</span>
            </p>
            <div className="space-y-3">
              {BOOTH_MODELS.map(({ label, emoji, desc }) => (
                <button
                  key={label} type="button"
                  onClick={() => setS2(p => ({ ...p, model: label }))}
                  className={`w-full flex items-center gap-4 p-4 border-2 text-left transition-all ${
                    s2.model === label ? 'border-gold-400 bg-gold-400/5' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-3xl shrink-0" aria-hidden>{emoji}</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm">{label}</p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-snug">{desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Options */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-3">Options souhaitées</p>
            <div className="space-y-2">
              {OPTIONS_LIST.map(({ label, extra }) => (
                <label
                  key={label}
                  className="flex items-center gap-3 p-3 border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={s2.options.includes(label)}
                    onChange={() => toggleOption(label)}
                    className="w-4 h-4 accent-amber-500 shrink-0"
                  />
                  <span className="text-sm text-gray-700 flex-1">{label}</span>
                  {extra === 'inclus' && (
                    <span className="text-xs font-semibold text-green-600 shrink-0">inclus</span>
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Votre budget approximatif <span className="text-gold-400">*</span>
            </label>
            <select
              value={s2.budget}
              onChange={e => setS2(p => ({ ...p, budget: e.target.value as Budget }))}
              className="input-field"
            >
              <option value="">Sélectionner…</option>
              {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>

          <div className="flex gap-3">
            <BtnBack onClick={() => setStep(1)} />
            <button
              type="button"
              disabled={!step2Valid}
              onClick={() => setStep(3)}
              className={`flex-[2] py-3.5 font-semibold text-sm tracking-wide transition-all ${
                step2Valid ? 'btn-primary' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Étape suivante →
            </button>
          </div>
        </div>
      )}

      {/* ══ Étape 3 : Vos coordonnées ══════════════════════════════════════ */}
      {step === 3 && (
        <div className="space-y-5">

          {/* Récapitulatif */}
          <div className="bg-gray-50 border border-gray-200 p-4 text-sm space-y-1.5">
            <p className="font-semibold text-gray-900 text-xs uppercase tracking-widest mb-2 text-gold-600">
              Récapitulatif
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Événement :</span>{' '}
              {s1.eventType || '—'}
              {s1.date ? ` le ${formatDate(s1.date)}` : ''}
              {s1.venue ? ` — ${s1.venue}` : ''}
            </p>
            {s1.guestCount && (
              <p className="text-gray-700">
                <span className="font-medium">Invités :</span> {s1.guestCount}
              </p>
            )}
            {s1.duration && (
              <p className="text-gray-700">
                <span className="font-medium">Durée :</span> {s1.duration}
              </p>
            )}
            <p className="text-gray-700">
              <span className="font-medium">Formule :</span> {s2.model || '—'}
            </p>
          </div>

          {/* Prénom + Nom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Prénom <span className="text-gold-400">*</span>
              </label>
              <input
                type="text" placeholder="Marie"
                value={s3.prenom}
                onChange={e => setS3(p => ({ ...p, prenom: e.target.value }))}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Nom <span className="text-gold-400">*</span>
              </label>
              <input
                type="text" placeholder="Dupont"
                value={s3.nom}
                onChange={e => setS3(p => ({ ...p, nom: e.target.value }))}
                className="input-field"
              />
            </div>
          </div>

          {/* Email + Téléphone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Email <span className="text-gold-400">*</span>
              </label>
              <input
                type="email" placeholder="marie@exemple.fr"
                value={s3.email}
                onChange={e => setS3(p => ({ ...p, email: e.target.value }))}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Téléphone <span className="text-gold-400">*</span>
              </label>
              <input
                type="tel" placeholder="06 00 00 00 00"
                value={s3.telephone}
                onChange={e => setS3(p => ({ ...p, telephone: e.target.value }))}
                className="input-field"
              />
            </div>
          </div>

          {/* Source */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Comment nous avez-vous trouvé ?
            </label>
            <select
              value={s3.source}
              onChange={e => setS3(p => ({ ...p, source: e.target.value }))}
              className="input-field"
            >
              <option value="">Sélectionner…</option>
              {SOURCES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Message complémentaire{' '}
              <span className="text-gray-400 font-normal">(optionnel)</span>
            </label>
            <textarea
              rows={3}
              placeholder="Précisions sur votre événement, demandes particulières…"
              value={s3.message}
              onChange={e => setS3(p => ({ ...p, message: e.target.value }))}
              className="input-field resize-none"
            />
          </div>

          {status === 'error' && (
            <div role="alert" className="bg-red-50 border border-red-200 px-4 py-3 text-red-700 text-sm">
              {errMsg}
            </div>
          )}

          <div className="flex gap-3">
            <BtnBack onClick={() => setStep(2)} />
            <button
              type="submit"
              disabled={!step3Valid || status === 'loading'}
              className={`flex-[2] py-3.5 font-semibold text-sm tracking-wide transition-all flex items-center justify-center gap-2 ${
                step3Valid && status !== 'loading' ? 'btn-primary' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Envoi en cours…
                </>
              ) : (
                'Recevoir mon devis personnalisé →'
              )}
            </button>
          </div>

          <p className="text-xs text-gray-400 text-center">
            Réponse garantie sous 24h · Vos données ne sont jamais revendues
          </p>
        </div>
      )}
    </form>
  )
}
