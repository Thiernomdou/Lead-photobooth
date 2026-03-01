import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center section-padding">
      <div className="container-max text-center">

        {/* 404 */}
        <p className="text-[120px] sm:text-[160px] font-serif font-bold leading-none text-white/5 select-none">
          404
        </p>

        <div className="-mt-8 relative z-10">
          <p className="text-gold-400 text-sm font-medium uppercase tracking-widest mb-4">
            Page introuvable
          </p>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            Cette page n&apos;existe pas
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
            Le lien que vous avez suivi est peut-être incorrect ou la page a été déplacée.
          </p>

          {/* Liens utiles */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/" className="btn-primary">
              Retour à l&apos;accueil
            </Link>
            <Link href="/devis/" className="btn-outline">
              Demander un devis
            </Link>
          </div>

          {/* Navigation rapide */}
          <nav aria-label="Pages utiles">
            <p className="text-gray-500 text-sm mb-4">Pages populaires :</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'Photobooth Lyon',       href: '/lyon/'             },
                { label: 'Photobooth Mariage',     href: '/lyon/mariage/'     },
                { label: 'Photobooth Anniversaire', href: '/lyon/anniversaire/' },
                { label: 'Photobooth Entreprise',  href: '/lyon/entreprise/'   },
                { label: 'Tarifs',                 href: '/lyon/pas-cher/'     },
                { label: 'Blog',                   href: '/blog/'              },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="px-4 py-2 border border-gray-700 text-sm text-gray-400 hover:border-gold-400 hover:text-gold-400 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </div>

      </div>
    </main>
  )
}
