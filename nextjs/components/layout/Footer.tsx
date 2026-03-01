import Link from 'next/link'

const SERVICES = [
  { label: 'Photobooth Mariage',      href: '/lyon/mariage/'     },
  { label: 'Photobooth Anniversaire', href: '/lyon/anniversaire/' },
  { label: 'Photobooth Entreprise',   href: '/lyon/entreprise/'   },
  { label: 'Tarifs & Formules',       href: '/lyon/pas-cher/'     },
]

const INFO = [
  { label: 'Hub Lyon',       href: '/lyon/'   },
  { label: 'Notre blog',     href: '/blog/'   },
  { label: 'Devis gratuit',  href: '/devis/'  },
  { label: 'Mentions légales', href: '/mentions-legales/' },
]


export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <p className="text-2xl font-serif font-bold">
              <span className="text-white">Photo</span>
              <span className="text-gold-400">Booth</span>
              <span className="text-gray-500 text-sm font-sans font-normal ml-1">Lyon</span>
            </p>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Location de photobooth à Lyon et agglomération.
              Mariage, anniversaire, soirée d&apos;entreprise.
            </p>
            <p className="mt-4 text-sm text-gold-400 font-medium">
              Devis gratuit en 24h — Sans engagement
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informations</h3>
            <ul className="space-y-2">
              {INFO.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2">
                <svg className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Lyon et agglomération (30 km)
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact.kivio@gmail.com
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Réponse sous 24h
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Location Photobooth Lyon — Tous droits réservés
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/mentions-legales/" className="hover:text-gold-400 transition-colors">Mentions légales</Link>
            <Link href="/cgv/" className="hover:text-gold-400 transition-colors">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
