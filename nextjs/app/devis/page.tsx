import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import QuoteForm from '@/components/forms/QuoteForm'

export const metadata: Metadata = buildMetadata({
  title:       'Devis Photobooth Gratuit Lyon — Réponse en 24h',
  description: "Demandez votre devis photobooth gratuit pour Lyon et agglomération. Mariage, anniversaire, événement entreprise. Réponse personnalisée en moins de 24h.",
  path:        '/devis/',
})

const FORMULES = [
  { name: 'Essentiel', price: 'À partir de 249 €', desc: '2h · Impressions illimitées · Animateur' },
  { name: 'Premium',   price: 'À partir de 449 €', desc: '5h · Fond personnalisé · Props premium'  },
  { name: 'Corporate', price: 'Sur devis',          desc: 'Branding · Multi-jours · Collecte leads' },
]

export default function DevisPage() {
  return (
    <main>
      <section className="bg-black section-padding pt-36">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* ── Panneau gauche : contenu de confiance ─────────────────── */}
            <div className="lg:sticky lg:top-28">
              <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
                100 % Gratuit &middot; Sans engagement
              </span>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-6">
                Votre devis photobooth<br />
                <span className="text-gold-400">en 24h chrono</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Mariage, anniversaire, soirée d&apos;entreprise à Lyon et agglomération.
                Décrivez votre événement, nous vous préparons une offre sur-mesure.
              </p>

              <ul className="space-y-5 mb-10">
                {[
                  ['⚡', 'Réponse garantie sous 24h',     'Du lundi au samedi, 9h–19h'],
                  ['🎯', 'Devis 100 % personnalisé',       'Adapté à votre date, lieu et budget'],
                  ['🔒', 'Aucun engagement à la demande',  'Acompte uniquement à la confirmation'],
                  ['📞', 'Aussi joignable par téléphone',  '06 65 42 07 93'],
                ].map(([icon, title, sub]) => (
                  <li key={String(title)} className="flex items-start gap-3">
                    <span className="text-xl mt-0.5 shrink-0" aria-hidden>{icon}</span>
                    <div>
                      <p className="text-white font-medium text-sm">{String(title)}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{String(sub)}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href="tel:+33665420793"
                className="inline-flex items-center gap-3 text-gold-400 font-semibold text-lg hover:text-gold-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 65 42 07 93
              </a>

              {/* Formules indicatives */}
              <div className="mt-10">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">
                  Formules indicatives
                </p>
                <div className="space-y-2">
                  {FORMULES.map((f) => (
                    <div
                      key={f.name}
                      className="flex items-center justify-between border border-white/10 px-4 py-3"
                    >
                      <div>
                        <p className="text-white text-sm font-medium">{f.name}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{f.desc}</p>
                      </div>
                      <span className="text-gold-400 font-semibold text-sm shrink-0 ml-4">
                        {f.price}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/lyon/pas-cher/"
                  className="inline-flex items-center gap-1 text-xs text-gold-500 hover:text-gold-400 transition-colors mt-3"
                >
                  Voir le détail complet des tarifs →
                </Link>
              </div>

              {/* Maillage */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">
                  Explorer nos prestations
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { href: '/lyon/mariage/',      label: 'Photobooth Mariage'      },
                    { href: '/lyon/anniversaire/', label: 'Photobooth Anniversaire'  },
                    { href: '/lyon/entreprise/',   label: 'Photobooth Entreprise'    },
                    { href: '/lyon/',              label: 'Hub Lyon'                 },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-xs border border-white/20 text-gray-400 px-3 py-1.5
                                 hover:border-gold-400/50 hover:text-gold-400 transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Panneau droit : formulaire multi-step ─────────────────── */}
            <div className="bg-white p-8 md:p-10">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
                Décrivez votre projet
              </h2>
              <QuoteForm />
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
