'use client'

import { useState, type FormEvent } from 'react'

type Fields = {
  nom:            string
  email:          string
  telephone:      string
  typeEvenement:  string
  date:           string
  message:        string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const EVENT_TYPES = [
  'Mariage',
  "Soirée d'entreprise / Gala",
  'Anniversaire',
  'Séminaire / Team Building',
  'Salon / Stand',
  'Fête de famille',
  'Autre',
]

const INIT: Fields = { nom: '', email: '', telephone: '', typeEvenement: '', date: '', message: '' }

const today = new Date().toISOString().split('T')[0]

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(INIT)
  const [status, setStatus] = useState<Status>('idle')
  const [errMsg, setErrMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data.error ?? 'Erreur lors de l\'envoi.')

      setStatus('success')
      setFields(INIT)
    } catch (err) {
      setStatus('error')
      setErrMsg(err instanceof Error ? err.message : 'Une erreur est survenue. Veuillez réessayer.')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-400/10 mb-6">
          <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Message envoyé !</h3>
        <p className="text-gray-600 mb-8">
          Merci pour votre demande. Nous vous répondons sous 24h avec un devis personnalisé.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-primary">
          Envoyer une autre demande
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Nom + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1.5">
            Nom & Prénom <span className="text-gold-400">*</span>
          </label>
          <input
            id="nom" name="nom" type="text" required
            value={fields.nom} onChange={handleChange}
            placeholder="Marie Dupont"
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email <span className="text-gold-400">*</span>
          </label>
          <input
            id="email" name="email" type="email" required
            value={fields.email} onChange={handleChange}
            placeholder="marie@exemple.fr"
            className="input-field"
          />
        </div>
      </div>

      {/* Téléphone + Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Téléphone
          </label>
          <input
            id="telephone" name="telephone" type="tel"
            value={fields.telephone} onChange={handleChange}
            placeholder="06 00 00 00 00"
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="typeEvenement" className="block text-sm font-medium text-gray-700 mb-1.5">
            Type d&apos;événement
          </label>
          <select
            id="typeEvenement" name="typeEvenement"
            value={fields.typeEvenement} onChange={handleChange}
            className="input-field cursor-pointer"
          >
            <option value="">Sélectionner…</option>
            {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* Date */}
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1.5">
          Date de l&apos;événement
        </label>
        <input
          id="date" name="date" type="date"
          value={fields.date} onChange={handleChange}
          min={today}
          className="input-field"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message <span className="text-gold-400">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5}
          value={fields.message} onChange={handleChange}
          placeholder="Décrivez votre événement : lieu, nombre d'invités, vos attentes…"
          className="input-field resize-none"
        />
      </div>

      {/* Error */}
      {status === 'error' && (
        <div role="alert" className="bg-red-50 border border-red-200 px-4 py-3 text-red-700 text-sm">
          {errMsg}
        </div>
      )}

      {/* Submit */}
      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
        {status === 'loading' ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Envoi en cours…
          </>
        ) : (
          'Envoyer ma demande de devis'
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Réponse garantie sous 24h. Vos données ne sont jamais revendues.
      </p>
    </form>
  )
}
