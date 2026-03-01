/**
 * lib/schemas.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Centralized Schema.org factory functions for location-photobooth.fr
 * All schemas follow Google's Structured Data guidelines (2026).
 *
 * Usage:
 *   import { localBusinessSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schemas'
 */

const BASE   = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://location-photobooth.fr'
const LB_ID  = `${BASE}/#localbusiness`
const ORG_ID = `${BASE}/#organization`

// ─── Types ────────────────────────────────────────────────────────────────────

export interface FaqItem {
  question: string
  answer:   string
}

export interface BreadcrumbItem {
  name: string
  item: string
}

export interface OfferData {
  name:          string
  price:         string | null   // null = "sur devis"
  priceCurrency: string
  taxIncluded:   boolean         // true = TTC, false = HT
  description?:  string
}

export interface ArticleData {
  headline:      string
  description:   string
  datePublished: string
  dateModified:  string
  image:         string
  section:       string
  keywords:      string
}

interface ReviewItem {
  author:        string
  ratingValue:   number
  datePublished: string
  reviewBody:    string
}

// ─── 1. Organization ─────────────────────────────────────────────────────────

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type':    'Organization',
    '@id':      ORG_ID,
    name:       'Location Photobooth',
    url:        BASE,
    logo: {
      '@type':  'ImageObject',
      url:      `${BASE}/images/logo.png`,
      width:    300,
      height:   80,
    },
    contactPoint: {
      '@type':           'ContactPoint',
      telephone:         '+33665420793',
      contactType:       'customer service',
      availableLanguage: 'French',
      areaServed:        'FR',
    },
    sameAs: [
      'https://www.instagram.com/location.photobooth.lyon',
      'https://www.facebook.com/locationphotoboothlyon',
    ],
  }
}

// ─── 2. WebSite (homepage uniquement) ────────────────────────────────────────

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type':    'WebSite',
    '@id':      `${BASE}/#website`,
    url:        BASE,
    name:       'Location Photobooth',
    description: "Location de photobooth pour mariages, anniversaires et événements d'entreprise.",
    publisher:  { '@id': ORG_ID },
    inLanguage: 'fr-FR',
    potentialAction: {
      '@type':       'SearchAction',
      target:        `${BASE}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

// ─── 3. LocalBusiness (complet, pour pages locales) ──────────────────────────

export function localBusinessSchema() {
  return {
    '@context':    'https://schema.org',
    '@type':       'LocalBusiness',
    '@id':         LB_ID,
    name:          'Location Photobooth',
    alternateName: 'Location Photobooth Lyon',
    description:   "Location de photobooth à Lyon pour mariages, anniversaires et événements d'entreprise. Technicien inclus, impressions illimitées, livraison sur toute la métropole lyonnaise.",
    url:           BASE,
    telephone:     '+33665420793',
    email:         'contact.kivio@gmail.com',
    image: [
      `${BASE}/images/photobooth-lyon-mariage.jpg`,
      `${BASE}/images/photobooth-lyon-anniversaire.jpg`,
      `${BASE}/images/photobooth-lyon-entreprise.jpg`,
    ],
    logo: {
      '@type':  'ImageObject',
      url:      `${BASE}/images/logo.png`,
      width:    300,
      height:   80,
    },
    address: {
      '@type':           'PostalAddress',
      addressLocality:   'Lyon',
      addressRegion:     'Auvergne-Rhône-Alpes',
      postalCode:        '69000',
      addressCountry:    'FR',
    },
    geo: {
      '@type':    'GeoCoordinates',
      latitude:   '45.764043',
      longitude:  '4.835659',
    },
    hasMap: 'https://maps.google.com/?q=Location+Photobooth+Lyon',
    areaServed: [
      { '@type': 'City', name: 'Lyon',               sameAs: 'https://www.wikidata.org/wiki/Q456'    },
      { '@type': 'City', name: 'Villeurbanne',       sameAs: 'https://www.wikidata.org/wiki/Q30140'  },
      { '@type': 'City', name: 'Caluire-et-Cuire',   sameAs: 'https://www.wikidata.org/wiki/Q209518' },
      { '@type': 'City', name: 'Bron',               sameAs: 'https://www.wikidata.org/wiki/Q180898' },
      { '@type': 'City', name: 'Vénissieux',         sameAs: 'https://www.wikidata.org/wiki/Q181067' },
      { '@type': 'City', name: 'Décines-Charpieu',   sameAs: 'https://www.wikidata.org/wiki/Q209493' },
      { '@type': 'City', name: 'Meyzieu',            sameAs: 'https://www.wikidata.org/wiki/Q209535' },
      { '@type': 'City', name: 'Saint-Priest',       sameAs: 'https://www.wikidata.org/wiki/Q210181' },
      { '@type': 'City', name: 'Écully',             sameAs: 'https://www.wikidata.org/wiki/Q209532' },
      { '@type': 'City', name: 'Tassin-la-Demi-Lune' },
      { '@type': 'City', name: 'Francheville'        },
      { '@type': 'City', name: 'Oullins'             },
      { '@type': 'City', name: 'Pierre-Bénite'       },
      { '@type': 'City', name: 'Mions'               },
      { '@type': 'City', name: 'Chassieu'            },
    ],
    aggregateRating: aggregateRatingSchema(),
    review:          reviewSchemas(),
    priceRange:      '€€',
    paymentAccepted: 'Virement bancaire, Chèque, Espèces',
    currenciesAccepted: 'EUR',
    openingHoursSpecification: [
      {
        '@type':    'OpeningHoursSpecification',
        dayOfWeek:  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens:      '09:00',
        closes:     '20:00',
      },
      {
        '@type':    'OpeningHoursSpecification',
        dayOfWeek:  ['Saturday'],
        opens:      '09:00',
        closes:     '20:00',
      },
      {
        '@type':    'OpeningHoursSpecification',
        dayOfWeek:  ['Sunday'],
        opens:      '10:00',
        closes:     '18:00',
      },
    ],
    knowsLanguage: 'fr',
    sameAs: [
      'https://www.instagram.com/location.photobooth.lyon',
      'https://www.facebook.com/locationphotoboothlyon',
    ],
  }
}

// ─── 4. AggregateRating (inline dans LocalBusiness) ──────────────────────────

export function aggregateRatingSchema() {
  return {
    '@type':       'AggregateRating',
    ratingValue:   '4.9',
    reviewCount:   '127',
    bestRating:    '5',
    worstRating:   '1',
  }
}

// ─── 5. Reviews (inlined dans LocalBusiness + utilisables standalone) ─────────

const REVIEW_DATA: ReviewItem[] = [
  {
    author:        'Sophie & Thomas M.',
    ratingValue:   5,
    datePublished: '2025-09-15',
    reviewBody:    "Notre photobooth a été LA star de la soirée. L'équipe était parfaite du premier contact jusqu'au rangement. Les photos étaient superbes et nos invités adoraient. On recommande les yeux fermés.",
  },
  {
    author:        'Camille & Romain D.',
    ratingValue:   5,
    datePublished: '2025-07-20',
    reviewBody:    "Prestation irréprochable pour notre mariage à la Villa Florentine. La personnalisation du cadre était magnifique, exactement dans nos couleurs. Technicien discret et professionnel tout au long de la soirée.",
  },
  {
    author:        'Nathalie P.',
    ratingValue:   5,
    datePublished: '2025-04-12',
    reviewBody:    "Photobooth pour mes 40 ans à Lyon 6e. Mes invités ont adoré, l'animation était parfaite et les impressions de très bonne qualité. Je recommande vivement !",
  },
  {
    author:        'Direction RH — Groupe industriel lyonnais',
    ratingValue:   5,
    datePublished: '2025-11-08',
    reviewBody:    "Animation impeccable pour notre séminaire annuel à Lyon. Photobooth brandé aux couleurs de notre charte graphique, rendu totalement professionnel. Facturation pro soignée, contact très réactif.",
  },
  {
    author:        'Aurélie F.',
    ratingValue:   5,
    datePublished: '2025-12-03',
    reviewBody:    "J'avais commandé pour les 40 ans de mon mari et c'était absolument parfait. Installation rapide, accessoires de qualité et l'animateur vraiment sympa avec tous les invités. Merci !",
  },
]

export function reviewSchemas() {
  return REVIEW_DATA.map(r => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name:    r.author,
    },
    reviewRating: {
      '@type':       'Rating',
      ratingValue:   String(r.ratingValue),
      bestRating:    '5',
      worstRating:   '1',
    },
    datePublished: r.datePublished,
    reviewBody:    r.reviewBody,
    publisher: {
      '@type': 'Organization',
      name:    'Google',
    },
  }))
}

// ─── 6. Service + OfferCatalog ────────────────────────────────────────────────

export function servicePageSchema(
  name:        string,
  description: string,
  url:         string,
  offers:      OfferData[],
) {
  return {
    '@context': 'https://schema.org',
    '@type':    'Service',
    '@id':      `${url}#service`,
    name,
    description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      '@id':   LB_ID,
      name:    'Location Photobooth',
    },
    areaServed: {
      '@type': 'City',
      name:    'Lyon',
      sameAs:  'https://www.wikidata.org/wiki/Q456',
    },
    serviceType: 'EventService',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name:    `Formules ${name}`,
      itemListElement: offers.map(o => ({
        '@type': 'Offer',
        name:    o.name,
        ...(o.price !== null
          ? {
              price:         o.price,
              priceCurrency: o.priceCurrency,
              priceSpecification: {
                '@type':               'PriceSpecification',
                price:                 o.price,
                priceCurrency:         o.priceCurrency,
                valueAddedTaxIncluded: o.taxIncluded,
              },
            }
          : {}),
        availability: 'https://schema.org/InStock',
        seller:       { '@type': 'LocalBusiness', '@id': LB_ID },
        ...(o.description ? { description: o.description } : {}),
      })),
    },
  }
}

// ─── 7. FAQPage ──────────────────────────────────────────────────────────────

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name:    f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text:    f.answer,
      },
    })),
  }
}

// ─── 8. BreadcrumbList ────────────────────────────────────────────────────────

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type':   'ListItem',
      position:  index + 1,
      name:      item.name,
      item:      item.item,
    })),
  }
}

// ─── 9. Article (pages blog) ──────────────────────────────────────────────────

export function articleSchema(data: ArticleData, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type':    'Article',
    '@id':      `${url}#article`,
    headline:      data.headline,
    description:   data.description,
    image:         data.image,
    datePublished: data.datePublished,
    dateModified:  data.dateModified,
    author: {
      '@type': 'Organization',
      '@id':   ORG_ID,
      name:    'Location Photobooth',
      url:     BASE,
    },
    publisher: {
      '@type': 'Organization',
      '@id':   ORG_ID,
      name:    'Location Photobooth',
      logo: {
        '@type': 'ImageObject',
        url:     `${BASE}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':   url,
    },
    articleSection: data.section,
    keywords:       data.keywords,
    inLanguage:     'fr-FR',
  }
}

// ─── 10. Presets FAQ par page ─────────────────────────────────────────────────
// Centralise les FAQ pour cohérence entre le contenu HTML et les schemas

export const FAQ_LYON: FaqItem[] = [
  {
    question: 'Quelle est la zone de livraison du photobooth à Lyon ?',
    answer:   "Nous livrons sur toute la métropole de Lyon et jusqu'à 30 km aux alentours : Villeurbanne, Bron, Décines, Caluire, Vénissieux, Écully, Tassin, Francheville, Oullins, Saint-Priest, Meyzieu, Mions, Chassieu et Pierre-Bénite. Au-delà, des frais kilométriques de 0,50 € par km supplémentaire s'appliquent.",
  },
  {
    question: 'Quel est le délai minimum pour réserver un photobooth à Lyon ?',
    answer:   "Nous recommandons de réserver au minimum 3 à 4 semaines à l'avance. En haute saison (mai à septembre), les week-ends se réservent souvent 2 à 4 mois à l'avance. Contactez-nous sans attendre pour vérifier la disponibilité à votre date.",
  },
  {
    question: 'Les photos sont-elles imprimées sur place ?',
    answer:   "Oui, chaque photo est imprimée en 10 secondes sur place par notre imprimante à sublimation thermique. Format 10×15 cm ou bande de 3 photos selon la formule. Les impressions sont illimitées pendant toute la durée de la prestation.",
  },
  {
    question: 'Un animateur est-il présent pendant toute la prestation ?',
    answer:   "Oui, un animateur professionnel est présent du début à la fin : installation, animation, gestion technique et rangement. Il guide vos invités, déblocage l'imprimante si besoin, et s'assure que tout se déroule parfaitement.",
  },
  {
    question: 'Combien de personnes peuvent poser en même temps ?',
    answer:   "Avec notre photobooth ouvert, 2 à 8 personnes peuvent poser simultanément — idéal pour les groupes familiaux et les équipes lors de mariages ou événements d'entreprise. La cabine fermée accueille 2 à 4 personnes.",
  },
  {
    question: 'Peut-on personnaliser le cadre photo avec nos prénoms et la date ?',
    answer:   "Oui, la personnalisation du cadre photo (prénom, date, thème, couleurs) est incluse dans toutes nos formules. Nous vous envoyons un bon à tirer (BAT) à valider au moins 72 heures avant l'événement.",
  },
  {
    question: 'Le photobooth peut-il être installé en extérieur ?',
    answer:   "Oui, notre photobooth ouvert est compatible avec une utilisation en extérieur sous une structure couverte (barnum, tente, pergola). Une prise électrique 220V à proximité est nécessaire. Le miroir interactif et la cabine fermée sont déconseillés en extérieur.",
  },
  {
    question: 'Y a-t-il une galerie numérique après l\'événement ?',
    answer:   "Oui, toutes nos formules incluent une galerie numérique en ligne disponible dans les 48 heures suivant l'événement. Les photos sont accessibles pendant 30 jours minimum via un lien QR code personnalisé.",
  },
]

export const FAQ_MARIAGE: FaqItem[] = [
  {
    question: 'Combien de temps faut-il prévoir pour le photobooth lors d\'un mariage ?',
    answer:   "Pour un mariage, nous recommandons 3h minimum pour le vin d'honneur seul, ou 5h pour couvrir vin d'honneur + soirée. Notre formule la plus populaire pour les mariages est la formule Premium 5h à 449 € TTC.",
  },
  {
    question: 'Peut-on réserver le photobooth uniquement pour le vin d\'honneur ?',
    answer:   "Oui, notre formule Essentiel 3h à 299 € TTC est parfaitement adaptée à un vin d'honneur seul de 60 à 120 personnes. L'animateur installe le photobooth 1h avant le début du cocktail et le dérange en fin de vin d'honneur.",
  },
  {
    question: 'Le fond personnalisé est-il inclus dans la formule mariage ?',
    answer:   "Le fond personnalisé imprimé aux couleurs de votre mariage est disponible en option. Un fond uni ou sequins est inclus dans les formules de base. Contactez-nous pour voir notre catalogue de fonds disponibles.",
  },
  {
    question: 'Comment se passe la réservation pour un mariage ?',
    answer:   "Envoyez-nous votre demande avec la date, le lieu et le nombre d'invités. Nous vous adressons un devis sous 24h. La réservation est confirmée à réception du devis signé et d'un acompte de 30 %. Le solde est dû 7 jours avant le mariage.",
  },
]

export const FAQ_ENTREPRISE: FaqItem[] = [
  {
    question: 'Le photobooth peut-il être personnalisé aux couleurs de notre marque ?',
    answer:   "Oui, la personnalisation corporate est complète : cadre photo aux couleurs et logo de votre marque, fond vinyle brandé, interface aux couleurs de votre charte graphique. Un BAT est validé avec vous avant l'événement.",
  },
  {
    question: 'Le photobooth peut-il collecter des données (e-mails) pour notre CRM ?',
    answer:   "Oui, notre option collecte d'e-mails permet aux participants de saisir leur adresse pour recevoir leur photo par courriel. Les données sont collectées avec consentement RGPD explicite et vous sont remises dans un fichier CSV.",
  },
  {
    question: 'Proposez-vous une facturation professionnelle avec TVA ?',
    answer:   "Oui, nous émettons des factures professionnelles avec TVA pour tous nos clients entreprise. Nos formules entreprise sont exprimées HT : Séminaire à 449 € HT et Corporate à 649 € HT.",
  },
  {
    question: 'Intervenez-vous à Eurexpo et dans les centres d\'affaires lyonnais ?',
    answer:   "Oui, nous intervenons régulièrement à Eurexpo Lyon, au Palais des Congrès de Lyon et dans tous les centres d'affaires et hôtels événementiels de la métropole lyonnaise.",
  },
]
