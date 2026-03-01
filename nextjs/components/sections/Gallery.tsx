/**
 * Gallery — placeholders visuels.
 * Pour utiliser vos vraies photos :
 *   1. Déposez-les dans /public/images/gallery/
 *   2. Remplacez chaque <div className="placeholder"> par :
 *      <Image src="/images/gallery/nom.jpg" alt="..." fill className="object-cover" />
 *   3. Supprimez les placeholders et importez Image depuis 'next/image'
 */

const ITEMS = [
  { id: 1, alt: 'Photobooth mariage Lyon — couple',            aspect: 'aspect-[3/4]'  },
  { id: 2, alt: "Soirée d'entreprise Lyon — animation photo", aspect: 'aspect-[4/3]'  },
  { id: 3, alt: 'Anniversaire 30 ans Lyon — props festifs',   aspect: 'aspect-[3/4]'  },
  { id: 4, alt: 'Mariage champêtre — photobooth décoré',      aspect: 'aspect-[4/3]'  },
  { id: 5, alt: 'Séminaire Lyon — photobooth brandé',         aspect: 'aspect-square'  },
  { id: 6, alt: 'Baby shower — photobooth rose',              aspect: 'aspect-[3/4]'  },
]

const GRAYS = ['bg-gray-800', 'bg-gray-700', 'bg-gray-900', 'bg-gray-800', 'bg-gray-700', 'bg-zinc-900']

export default function Gallery() {
  return (
    <section id="galerie" className="section-padding bg-black">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">Notre travail</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-4">
            Galerie
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Quelques moments capturés lors de nos événements à Lyon.
            Chaque fête est unique — la vôtre le sera aussi.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {ITEMS.map((item, i) => (
            <div
              key={item.id}
              className={`relative overflow-hidden group cursor-pointer ${item.aspect} ${GRAYS[i]}`}
            >
              {/* ↓ Placeholder — remplacez par <Image> quand vous avez les photos */}
              <div className="w-full h-full flex flex-col items-center justify-center p-4">
                <svg
                  className="w-10 h-10 text-gold-400/25 mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-xs text-gray-600 text-center leading-snug">{item.alt}</p>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 bg-gold-400/20 opacity-0 group-hover:opacity-100
                            transition-opacity duration-300 flex items-center justify-center"
              >
                <svg className="w-8 h-8 text-white drop-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          Ajoutez vos photos dans{' '}
          <code className="text-gold-400/70 bg-white/5 px-1 py-0.5 rounded">
            public/images/gallery/
          </code>{' '}
          puis mettez à jour{' '}
          <code className="text-gold-400/70 bg-white/5 px-1 py-0.5 rounded">
            components/sections/Gallery.tsx
          </code>
        </p>

        <div className="text-center mt-10">
          <a href="#contact" className="btn-outline">
            Réserver pour mon événement
          </a>
        </div>
      </div>
    </section>
  )
}
