/**
 * lib/metadata.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Factory de métadonnées Next.js 15 — OG complète, Twitter Card, robots, canonicals.
 * Chaque page.tsx exporte : export const metadata = METADATA_PRESETS.lyon
 */

import type { Metadata } from 'next'

const BASE             = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://location-photobooth.fr'
const OG_DEFAULT_IMAGE = `${BASE}/images/og-default.jpg`
const TWITTER_HANDLE   = '@PhotoboothLyon'

// ─── Types ────────────────────────────────────────────────────────────────────

interface BaseOptions {
  title:       string
  description: string
  path?:       string
  ogImage?:    string      // path relatif ('/images/og-lyon.jpg') ou URL absolue
  ogImageAlt?: string
  robots?:     'index' | 'noindex'
}

interface ArticleOptions extends BaseOptions {
  type:          'article'
  datePublished: string    // ISO 8601 ex: '2026-02-27T08:00:00+01:00'
  dateModified:  string
  section:       string
  tags?:         string[]
}

type MetadataOptions = BaseOptions | ArticleOptions

// ─── Builder ─────────────────────────────────────────────────────────────────

export function buildMetadata(opts: MetadataOptions): Metadata {
  const url     = `${BASE}${opts.path ?? ''}`
  const imgUrl  = opts.ogImage
    ? opts.ogImage.startsWith('http') ? opts.ogImage : `${BASE}${opts.ogImage}`
    : OG_DEFAULT_IMAGE
  const imgAlt  = opts.ogImageAlt ?? opts.title
  const noIndex = opts.robots === 'noindex'

  const base: Metadata = {
    title:       opts.title,
    description: opts.description,
    alternates:  { canonical: url },

    robots: noIndex
      ? { index: false, follow: true }
      : {
          index:     true,
          follow:    true,
          googleBot: {
            index:               true,
            follow:              true,
            'max-snippet':       -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
          },
        },

    openGraph: {
      title:       opts.title,
      description: opts.description,
      url,
      locale:      'fr_FR',
      siteName:    'Location Photobooth',
      type:        'website',
      images: [{ url: imgUrl, width: 1200, height: 630, alt: imgAlt, type: 'image/jpeg' }],
    },

    twitter: {
      card:        'summary_large_image',
      title:       opts.title,
      description: opts.description,
      images:      [imgUrl],
      site:        TWITTER_HANDLE,
      creator:     TWITTER_HANDLE,
    },
  }

  // Surcharge article
  if ('type' in opts && opts.type === 'article') {
    return {
      ...base,
      openGraph: {
        ...base.openGraph,
        type:          'article',
        publishedTime: opts.datePublished,
        modifiedTime:  opts.dateModified,
        section:       opts.section,
        tags:          opts.tags,
      },
    }
  }

  return base
}

// ─── Presets par page ─────────────────────────────────────────────────────────

export const METADATA_PRESETS = {

  home: buildMetadata({
    title:       'Location Photobooth France — Animation Photo pour vos Événements',
    description: "Louez un photobooth pour mariage, anniversaire ou événement d'entreprise. Livraison dans toute la France. Devis gratuit en 24h ✓",
    path:        '/',
    ogImage:     '/images/og-home.jpg',
    ogImageAlt:  'Location Photobooth France — Animation photo pour tous vos événements',
  }),

  lyon: buildMetadata({
    title:       'Location Photobooth Lyon — Mariage, Anniversaire, Entreprise',
    description: "Location photobooth à Lyon avec animateur. Toute la métropole lyonnaise. Impressions illimitées, personnalisation complète. Devis gratuit sous 24h ✓",
    path:        '/lyon/',
    ogImage:     '/images/og-lyon.jpg',
    ogImageAlt:  'Location photobooth Lyon — Formules mariage, anniversaire, entreprise',
  }),

  mariage: buildMetadata({
    title:       'Photobooth Mariage Lyon — Animation Photo Cocktail & Soirée',
    description: "Photobooth mariage à Lyon : fond personnalisé, accessoires premium, animateur dédié. Formules de 299 € à 449 €. Devis mariage gratuit en 24h ✓",
    path:        '/lyon/mariage/',
    ogImage:     '/images/og-mariage.jpg',
    ogImageAlt:  "Photobooth mariage Lyon — Animation photo vin d'honneur et soirée",
  }),

  anniversaire: buildMetadata({
    title:       'Photobooth Anniversaire Lyon — Animation Pour Tous les Âges',
    description: "Location photobooth pour anniversaire à Lyon. 18 ans, 30, 40, 50 ans... Formules dès 249 €. Animateur, impressions illimitées, personnalisation inclus ✓",
    path:        '/lyon/anniversaire/',
    ogImage:     '/images/og-anniversaire.jpg',
    ogImageAlt:  'Photobooth anniversaire Lyon — Animation photo festive tous âges',
  }),

  entreprise: buildMetadata({
    title:       'Location Photobooth Entreprise Lyon — Animation Corporate & Team Building',
    description: "Dynamisez vos événements d'entreprise à Lyon avec notre photobooth. Séminaires, soirées corporate, salons. Personnalisation aux couleurs de votre marque ✓",
    path:        '/lyon/entreprise/',
    ogImage:     '/images/og-entreprise.jpg',
    ogImageAlt:  'Photobooth entreprise Lyon — Animation corporate et team building',
  }),

  pasCher: buildMetadata({
    title:       'Location Photobooth Pas Cher Lyon — Tarifs Clairs, Qualité Garantie',
    description: "Louez un photobooth à Lyon sans vous ruiner. Nos formules dès 249 €. Qualité pro, accessoires inclus, pas de frais cachés. Devis immédiat ✓",
    path:        '/lyon/pas-cher/',
    ogImage:     '/images/og-tarifs.jpg',
    ogImageAlt:  'Tarifs photobooth Lyon — Formules claires sans frais cachés',
  }),

  blogPrix: buildMetadata({
    title:         'Prix Location Photobooth 2026 : Combien Ça Coûte Vraiment ?',
    description:   "Quel budget prévoir pour louer un photobooth ? Tarifs détaillés par type d'événement, durée et options. Comparatif complet 2026.",
    path:          '/blog/prix-location-photobooth/',
    ogImage:       '/images/blog/og-prix-photobooth.jpg',
    ogImageAlt:    'Prix location photobooth 2026 — Guide complet des tarifs',
    type:          'article',
    datePublished: '2026-02-27T08:00:00+01:00',
    dateModified:  '2026-02-27T08:00:00+01:00',
    section:       "Guide d'achat",
    tags:          ['prix photobooth', 'tarif photobooth', 'budget mariage'],
  } as ArticleOptions),

  blogAnimations: buildMetadata({
    title:         "10 Idées d'Animations Originales pour votre Mariage à Lyon (2026)",
    description:   "Vin d'honneur, soirée dansante : 10 animations originales pour un mariage inoubliable à Lyon. Le photobooth en tête de liste !",
    path:          '/blog/idees-animations-mariage-lyon/',
    ogImage:       '/images/blog/og-animations-mariage.jpg',
    ogImageAlt:    '10 idées animations originales mariage Lyon 2026',
    type:          'article',
    datePublished: '2026-02-27T09:00:00+01:00',
    dateModified:  '2026-02-27T09:00:00+01:00',
    section:       'Inspiration mariage',
    tags:          ['animations mariage lyon', 'mariage lyon', "vin d'honneur"],
  } as ArticleOptions),

  blogOuvertFerme: buildMetadata({
    title:         'Photobooth Ouvert ou Fermé : Lequel Choisir pour votre Événement ?',
    description:   "Photobooth ouvert ou cabine fermée ? Avantages, inconvénients, tableau comparatif. Le guide pour faire le bon choix selon votre événement.",
    path:          '/blog/photobooth-ouvert-ferme/',
    ogImage:       '/images/blog/og-ouvert-ferme.jpg',
    ogImageAlt:    'Photobooth ouvert ou fermé — Guide comparatif 2026',
    type:          'article',
    datePublished: '2026-02-27T10:00:00+01:00',
    dateModified:  '2026-02-27T10:00:00+01:00',
    section:       "Guide d'achat",
    tags:          ['photobooth ouvert', 'cabine photobooth', 'miroir interactif'],
  } as ArticleOptions),

  mentionsLegales: buildMetadata({
    title:       'Mentions Légales — Location Photobooth',
    description: 'Mentions légales du site location-photobooth.fr : éditeur, hébergeur, données personnelles.',
    path:        '/mentions-legales/',
    robots:      'noindex',
  }),

  cgv: buildMetadata({
    title:       'Conditions Générales de Vente — Location Photobooth',
    description: 'Conditions générales de vente : tarifs, réservation, acompte, annulation, responsabilités.',
    path:        '/cgv/',
    robots:      'noindex',
  }),

} as const
