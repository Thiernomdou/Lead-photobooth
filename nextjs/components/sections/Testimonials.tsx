const TESTIMONIALS = [
  {
    initials: 'S',
    name:     'Sophie & Thomas M.',
    context:  'Mariage — Domaine de Valpré, Écully',
    rating:   5,
    text:     "Notre photobooth a été LA star de la soirée ! L'équipe a été parfaite du premier contact jusqu'au rangement. Les photos étaient superbes et nos invités adoraient. On recommande les yeux fermés.",
  },
  {
    initials: 'A',
    name:     'Aurélie F.',
    context:  'Anniversaire 40 ans — Lyon 6e',
    rating:   5,
    text:     "J'avais réservé pour les 40 ans de mon mari et c'était absolument parfait. L'installation était rapide, les accessoires de qualité et l'animateur vraiment sympa avec tous les invités. Merci !",
  },
  {
    initials: 'G',
    name:     'Direction RH — Groupe Seigneurie',
    context:  'Séminaire annuel — Eurexpo Lyon',
    rating:   5,
    text:     "Nous avons utilisé le photobooth brandé pour notre soirée de gala. Le rendu était impeccable, parfaitement aux couleurs de notre charte. La collecte emails a bien fonctionné. Contrat professionnel, je recommande.",
  },
  {
    initials: 'M',
    name:     'Manon & Julien B.',
    context:  'Mariage — Villa Florentine, Lyon 5e',
    rating:   5,
    text:     "Photobooth premium pris pour notre mariage à la Villa Florentine. Les photos imprimées sur place faisaient office de faire-part souvenir. L'album en ligne partagé avec toute la famille était une super idée.",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-gold-400" aria-label={`${count} étoiles sur 5`}>
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="avis" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">Ils nous font confiance</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-4">
            Avis clients
          </h2>
          <div className="flex items-center justify-center gap-1.5">
            <Stars count={5} />
            <span className="text-gray-600 ml-1 font-medium">4.9 / 5 — 127 avis vérifiés</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="bg-gray-50 border border-gray-200 p-8 relative"
            >
              {/* Quote decoration */}
              <span
                aria-hidden
                className="absolute top-5 right-7 text-7xl font-serif text-gold-400/15 leading-none select-none"
              >
                &ldquo;
              </span>

              <Stars count={t.rating} />

              <blockquote className="mt-4 mb-6 text-gray-700 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3">
                <div
                  className="w-10 h-10 bg-gold-400 text-black font-bold text-sm
                              flex items-center justify-center shrink-0"
                  aria-hidden
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.context}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
