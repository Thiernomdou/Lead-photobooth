'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { label: 'Lyon',       href: '/lyon/'            },
  { label: 'Mariage',    href: '/lyon/mariage/'     },
  { label: 'Entreprise', href: '/lyon/entreprise/'  },
  { label: 'Tarifs',     href: '/lyon/pas-cher/'    },
  { label: 'Blog',       href: '/blog/'             },
]

export default function Header() {
  const pathname  = usePathname()
  const isHome    = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    if (!isHome) return
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  // Sur la homepage, transparent jusqu'au scroll ; partout ailleurs toujours blanc
  const transparent = isHome && !scrolled
  const textColor   = transparent ? 'text-gray-200' : 'text-gray-700'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent ? 'bg-transparent py-5' : 'bg-white shadow-md py-3'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-serif font-bold tracking-tight">
          <span className={transparent ? 'text-white' : 'text-black'}>Photo</span>
          <span className="text-gold-400">Booth</span>
          <span className="text-sm font-sans font-normal ml-1 text-gray-400">Lyon</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {NAV.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors hover:text-gold-400 ${
                pathname === href ? 'text-gold-400' : textColor
              }`}
            >
              {label}
            </Link>
          ))}
          <Link href="/devis/" className="btn-primary !px-6 !py-3 text-sm">
            Devis gratuit Lyon
          </Link>
        </div>

        {/* Burger */}
        <button
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          <span className={`block space-y-1.5 ${transparent ? 'text-white' : 'text-black'}`}>
            <span className={`block w-6 h-0.5 bg-current transition-transform origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-transform origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-5 space-y-3">
            {NAV.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`block py-2 font-medium transition-colors hover:text-gold-400 ${
                  pathname === href ? 'text-gold-400' : 'text-gray-800'
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/devis/"
              className="btn-primary w-full text-center mt-2 block"
              onClick={() => setOpen(false)}
            >
              Devis gratuit Lyon
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
