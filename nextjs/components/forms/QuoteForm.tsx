'use client'

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

const EVENT_TYPES: { label: EventType }[] = [
  { label: 'Mariage'            },
  { label: 'Anniversaire'       },
  { label: 'Soirée entreprise'  },
  { label: 'Remise de diplômes' },
  { label: 'Autre'              },
]

const BOOTH_MODELS: { label: BoothModel; desc: string; tag: string }[] = [
  { label: 'Borne Classique', tag: 'Essentiel',   desc: 'Photo HD · Impressions illimitées · Fond inclus' },
  { label: 'Borne Premium',   tag: 'Populaire',   desc: 'LED · GIFs animés · Fond personnalisé · Animateur' },
  { label: 'Vidéo 360°',      tag: 'Spectaculaire', desc: 'Vidéo 360° · Slow-motion · Partage instantané' },
]

const OPTIONS_LIST = [
  'Impression photos instantanée',
  'Fond personnalisé',
  "Livre d'or digital",
  'Animateur dédié',
  'Partage réseaux sociaux',
]

const BUDGETS: Budget[]          = ['Je ne sais pas encore', 'Moins de 500€', '500-800€', 'Plus de 800€']
const GUEST_COUNTS: GuestCount[] = ['Moins de 50', '50-100', '100-200', 'Plus de 200']
const DURATIONS: Duration[]      = ['2h', '3h', '4h', 'Soirée complète']
const SOURCES                    = ['Google', "Recommandation d'un proche", 'Réseaux sociaux', 'Autre']

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

// ─── Progress Steps ────────────────────────────────────────────────────────

function StepBar({ step }: { step: 1 | 2 | 3 }) {
  const steps = [
    { n: 1, label: 'Événement' },
    { n: 2, label: 'Formule'   },
    { n: 3, label: 'Contact'   },
  ]
  return (
    <div className="flex items-center mb-10">
      {steps.map(({ n, label }, i) => (
        <div key={n} className="flex items-center flex-1 last:flex-none">
          <div className="flex flex-col items-center gap-1.5">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              n < step  ? 'bg-gold-400 text-black' :
              n === step ? 'bg-black text-white ring-2 ring-gold-400 ring-offset-2' :
                           'bg-gray-100 text-gray-400'
            }`}>
              {n < step ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : n}
            </div>
            <span className={`text-xs font-medium hidden sm:block ${
              n <= step ? 'text-gray-800' : 'text-gray-400'
            }`}>{label}</span>
          </div>
          {i < steps.length - 1 && (
            <div className="flex-1 h-px mx-3 mb-4 transition-all duration-500" style={{
              background: step > n ? '#C9A84C' : '#e5e7eb'
            }} />
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Chip sélectionnable ───────────────────────────────────────────────────

function Chip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${
        selected
          ? 'bg-black text-white border-black shadow-sm'
          : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900'
      }`}
    >
      {label}
    </button>
  )
}

// ─── Input field ───────────────────────────────────────────────────────────

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-gray-700">
        {label}{required && <span className="text-gold-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

const inputCls = "w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 focus:bg-white transition-all"

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
      setErrMsg('Une erreur est survenue. Veuillez réessayer ou nous appeler directement.')
    }
  }

  // ── Succès ──────────────────────────────────────────────────────────────

  if (status === 'success') {
    return (
      <div className="py-10 text-center">
        <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center mx-auto mb-6">
          <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
          Demande reçue
        </h3>
        <p className="text-gray-500 leading-relaxed mb-1">
          Merci {s3.prenom}. Votre devis est en préparation.
        </p>
        <p className="text-gray-500 leading-relaxed mb-8">
          Vous le recevrez sous 24h à <span className="font-medium text-gray-900">{s3.email}</span>.
        </p>
        <div className="border-t border-gray-100 pt-8">
          <a href="tel:+33665420793" className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Nous appeler — 06 65 42 07 93
          </a>
          <p className="text-xs text-gray-400 mt-3">Lun–Sam · 9h–19h</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <StepBar step={step} />

      {/* ══ Étape 1 ══════════════════════════════════════════════════════════ */}
      {step === 1 && (
        <div className="space-y-7">

          <Field label="Type d'événement" required>
            <div className="flex flex-wrap gap-2 pt-0.5">
              {EVENT_TYPES.map(({ label }) => (
                <Chip
                  key={label}
                  label={label}
                  selected={s1.eventType === label}
                  onClick={() => setS1(p => ({ ...p, eventType: label }))}
                />
              ))}
            </div>
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Date de l'événement" required>
              <input
                type="date" min={minDate} value={s1.date}
                onChange={e => setS1(p => ({ ...p, date: e.target.value }))}
                className={inputCls}
              />
            </Field>
            <Field label="Lieu">
              <input
                type="text" placeholder="Salle, ville ou quartier"
                value={s1.venue}
                onChange={e => setS1(p => ({ ...p, venue: e.target.value }))}
                className={inputCls}
              />
            </Field>
          </div>

          <Field label="Nombre d'invités estimé">
            <div className="flex flex-wrap gap-2 pt-0.5">
              {GUEST_COUNTS.map(g => (
                <Chip key={g} label={g} selected={s1.guestCount === g} onClick={() => setS1(p => ({ ...p, guestCount: g }))} />
              ))}
            </div>
          </Field>

          <Field label="Durée souhaitée">
            <div className="flex flex-wrap gap-2 pt-0.5">
              {DURATIONS.map(d => (
                <Chip key={d} label={d} selected={s1.duration === d} onClick={() => setS1(p => ({ ...p, duration: d }))} />
              ))}
            </div>
          </Field>

          <div className="pt-2 space-y-2">
            <button
              type="button"
              disabled={!step1Valid}
              onClick={() => setStep(2)}
              className={`w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                step1Valid ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              Continuer
            </button>
            {!step1Valid && (
              <p className="text-xs text-gray-400 text-center">Sélectionnez un type et une date pour continuer</p>
            )}
          </div>
        </div>
      )}

      {/* ══ Étape 2 ══════════════════════════════════════════════════════════ */}
      {step === 2 && (
        <div className="space-y-7">

          <Field label="Modèle de photobooth" required>
            <div className="space-y-2 pt-0.5">
              {BOOTH_MODELS.map(({ label, desc, tag }) => (
                <button
                  key={label} type="button"
                  onClick={() => setS2(p => ({ ...p, model: label }))}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl border text-left transition-all duration-200 ${
                    s2.model === label
                      ? 'border-black bg-gray-50 shadow-sm'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{label}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      tag === 'Populaire' ? 'bg-gold-400/20 text-gold-700' : 'bg-gray-100 text-gray-500'
                    }`}>{tag}</span>
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                      s2.model === label ? 'border-black bg-black' : 'border-gray-300'
                    }`}>
                      {s2.model === label && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Field>

          <Field label="Options souhaitées">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
              {OPTIONS_LIST.map((label) => {
                const checked = s2.options.includes(label)
                return (
                  <button
                    key={label} type="button"
                    onClick={() => toggleOption(label)}
                    className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border text-left text-sm transition-all duration-200 ${
                      checked
                        ? 'border-black bg-gray-50 text-gray-900'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all ${
                      checked ? 'bg-black border-black' : 'border-gray-300'
                    }`}>
                      {checked && (
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="font-medium leading-tight">{label}</span>
                  </button>
                )
              })}
            </div>
          </Field>

          <Field label="Budget approximatif" required>
            <div className="flex flex-wrap gap-2 pt-0.5">
              {BUDGETS.map(b => (
                <Chip key={b} label={b} selected={s2.budget === b} onClick={() => setS2(p => ({ ...p, budget: b }))} />
              ))}
            </div>
          </Field>

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setStep(1)}
              className="flex-1 py-3.5 rounded-xl border-2 border-gray-200 text-gray-700 text-sm font-semibold hover:border-gray-400 transition-colors">
              Retour
            </button>
            <button
              type="button"
              disabled={!step2Valid}
              onClick={() => setStep(3)}
              className={`flex-[2] py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                step2Valid ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              Continuer
            </button>
          </div>
        </div>
      )}

      {/* ══ Étape 3 ══════════════════════════════════════════════════════════ */}
      {step === 3 && (
        <div className="space-y-5">

          {/* Récapitulatif */}
          <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 text-sm space-y-1">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-2">Récapitulatif</p>
            <p className="text-gray-700">
              <span className="font-medium">Événement :</span>{' '}
              {s1.eventType || '—'}{s1.date ? ` · ${formatDate(s1.date)}` : ''}{s1.venue ? ` · ${s1.venue}` : ''}
            </p>
            {s1.guestCount && <p className="text-gray-700"><span className="font-medium">Invités :</span> {s1.guestCount}</p>}
            {s1.duration   && <p className="text-gray-700"><span className="font-medium">Durée :</span> {s1.duration}</p>}
            <p className="text-gray-700"><span className="font-medium">Formule :</span> {s2.model || '—'}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Prénom" required>
              <input type="text" placeholder="Marie" value={s3.prenom}
                onChange={e => setS3(p => ({ ...p, prenom: e.target.value }))} className={inputCls} />
            </Field>
            <Field label="Nom" required>
              <input type="text" placeholder="Dupont" value={s3.nom}
                onChange={e => setS3(p => ({ ...p, nom: e.target.value }))} className={inputCls} />
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Email" required>
              <input type="email" placeholder="marie@exemple.fr" value={s3.email}
                onChange={e => setS3(p => ({ ...p, email: e.target.value }))} className={inputCls} />
            </Field>
            <Field label="Téléphone" required>
              <input type="tel" placeholder="06 00 00 00 00" value={s3.telephone}
                onChange={e => setS3(p => ({ ...p, telephone: e.target.value }))} className={inputCls} />
            </Field>
          </div>

          <Field label="Comment nous avez-vous trouvé ?">
            <select value={s3.source} onChange={e => setS3(p => ({ ...p, source: e.target.value }))} className={inputCls}>
              <option value="">Sélectionner…</option>
              {SOURCES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </Field>

          <Field label="Message complémentaire">
            <textarea rows={3} placeholder="Précisions, demandes particulières…"
              value={s3.message} onChange={e => setS3(p => ({ ...p, message: e.target.value }))}
              className={`${inputCls} resize-none`} />
          </Field>

          {status === 'error' && (
            <div role="alert" className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-red-600 text-sm">
              <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {errMsg}
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setStep(2)}
              className="flex-1 py-3.5 rounded-xl border-2 border-gray-200 text-gray-700 text-sm font-semibold hover:border-gray-400 transition-colors">
              Retour
            </button>
            <button
              type="submit"
              disabled={!step3Valid || status === 'loading'}
              className={`flex-[2] py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all flex items-center justify-center gap-2 ${
                step3Valid && status !== 'loading' ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
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
              ) : 'Recevoir mon devis →'}
            </button>
          </div>

          <p className="text-xs text-gray-400 text-center">Réponse sous 24h · Données confidentielles</p>
        </div>
      )}
    </form>
  )
}
