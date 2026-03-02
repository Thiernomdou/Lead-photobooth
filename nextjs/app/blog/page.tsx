import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata: Metadata = buildMetadata({
  title:       'Blog Photobooth Lyon — Guides, Conseils et Inspirations',
  description: "Guides pratiques, comparatifs et idées d'animations pour votre mariage, anniversaire ou événement d'entreprise à Lyon.",
  path:        '/blog/',
})

const ARTICLES = [
  {
    slug:    'prix-location-photobooth',
    tag:     "Guide d'achat",
    date:    '27 fév. 2026',
    lecture: '8 min',
    titre:   'Prix Location Photobooth 2026 : Combien Ça Coûte Vraiment ?',
    extrait: "Quel budget prévoir pour louer un photobooth ? Tarifs par type d'événement, durée, options et déplacements. Tableau comparatif complet pour faire le bon choix.",
    img:     '/images/blog/og-prix-photobooth.jpg',
    imgAlt:  'Tableau comparatif des prix de location photobooth',
  },
  {
    slug:    'idees-animations-mariage-lyon',
    tag:     'Inspiration mariage',
    date:    '27 fév. 2026',
    lecture: '10 min',
    titre:   "10 Idées d'Animations Originales pour votre Mariage à Lyon",
    extrait: "Photobooth, quiz, livre d'or digital, bar à cocktails… 10 animations pour un mariage inoubliable. Conseils timing, budget et combinaisons gagnantes.",
    img:     '/images/blog/og-animations-mariage.jpg',
    imgAlt:  "Idées animations originales pour mariage à Lyon",
  },
  {
    slug:    'photobooth-ouvert-ferme',
    tag:     "Guide d'achat",
    date:    '27 fév. 2026',
    lecture: '7 min',
    titre:   'Photobooth Ouvert ou Fermé : Lequel Choisir pour votre Événement ?',
    extrait: "Borne ouverte ou cabine fermée ? Avantages, inconvénients, tableau comparatif et recommandations selon votre type d'événement. Le guide pour décider en 5 minutes.",
    img:     '/images/blog/og-ouvert-ferme.jpg',
    imgAlt:  'Comparatif photobooth ouvert vs cabine fermée',
  },
]

function TagIcon() {
  return (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export default function BlogPage() {
  return (
    <main>

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="bg-black pt-32 pb-16 section-padding">
        <div className="container-max text-center">
          <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-4">
            Guides · Conseils · Inspirations
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            Le blog Photobooth Lyon
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tout ce qu&apos;il faut savoir pour choisir, budgéter et réussir
            votre animation photo — mariage, anniversaire ou événement d&apos;entreprise.
          </p>
        </div>
      </section>

      {/* ── Articles ──────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((a) => (
              <article key={a.slug} className="group flex flex-col border border-gray-100 hover:border-gold-200 transition-colors">

                {/* Image placeholder */}
                <div className="aspect-video bg-gray-100 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.img}
                    alt={a.imgAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1 text-gold-600 font-medium">
                      <TagIcon />
                      {a.tag}
                    </span>
                    <span className="flex items-center gap-1">
                      <ClockIcon />
                      {a.lecture}
                    </span>
                    <span>{a.date}</span>
                  </div>

                  {/* Titre */}
                  <h2 className="text-lg font-serif font-bold text-gray-900 mb-3 leading-snug group-hover:text-gold-600 transition-colors">
                    <Link href={`/blog/${a.slug}/`} className="after:absolute after:inset-0">
                      {a.titre}
                    </Link>
                  </h2>

                  {/* Extrait */}
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    {a.extrait}
                  </p>

                  {/* CTA */}
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <Link
                      href={`/blog/${a.slug}/`}
                      className="text-sm font-medium text-gold-600 hover:text-gold-500 transition-colors flex items-center gap-1"
                    >
                      Lire l&apos;article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA bas de page ───────────────────────────────────────────────────── */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Prêt à réserver votre photobooth ?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Devis gratuit en 24h pour Lyon et toute l&apos;agglomération.
            Aucun engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis/" className="btn-primary">
              Demander un devis gratuit
            </Link>
            <Link href="/lyon/" className="btn-outline">
              Découvrir nos formules
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
