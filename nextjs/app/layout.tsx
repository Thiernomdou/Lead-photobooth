import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const sansFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://photobooth-evenement.fr'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Location Photobooth',
    default: 'Location Photobooth France — Animation Photo pour vos Événements',
  },
  description:
    "Louez un photobooth pour mariage, anniversaire ou événement d'entreprise. Livraison dans toute la France. Devis gratuit en 24h.",
  authors: [{ name: 'Location Photobooth' }],
  openGraph: {
    type:     'website',
    locale:   'fr_FR',
    url:      SITE_URL,
    siteName: 'Location Photobooth',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index:     true,
    follow:    true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sansFont.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
