/**
 * components/seo/SchemaOrg.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Composant server-side pour injecter les schemas JSON-LD dans le <head>.
 *
 * Usage:
 *   // Homepage
 *   <SchemaOrg page="home" faq={FAQ_LYON} />
 *
 *   // Hub Lyon
 *   <SchemaOrg page="lyon" faq={FAQ_LYON} breadcrumbs={[...]} />
 *
 *   // Page service
 *   <SchemaOrg page="service"
 *     serviceName="Photobooth Mariage Lyon"
 *     serviceDescription="..."
 *     serviceUrl="https://photobooth-evenement.fr/lyon/mariage/"
 *     serviceOffers={OFFERS_MARIAGE}
 *     faq={FAQ_MARIAGE}
 *     breadcrumbs={[...]}
 *   />
 *
 *   // Page blog
 *   <SchemaOrg page="blog"
 *     article={{ headline, description, datePublished, ... }}
 *     articleUrl="https://photobooth-evenement.fr/blog/prix-location-photobooth/"
 *     breadcrumbs={[...]}
 *   />
 */

import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
  reviewSchemas,
  faqPageSchema,
  breadcrumbSchema,
  servicePageSchema,
  articleSchema,
  type FaqItem,
  type BreadcrumbItem,
  type ArticleData,
  type OfferData,
} from '@/lib/schemas'

// ─── Types ────────────────────────────────────────────────────────────────────

type PageType = 'home' | 'lyon' | 'service' | 'blog'

interface SchemaOrgProps {
  page: PageType

  // FAQ — toutes les pages locales
  faq?: FaqItem[]

  // Fil d'Ariane — toutes les pages sauf homepage
  breadcrumbs?: BreadcrumbItem[]

  // Pages service (/lyon/mariage/, /lyon/anniversaire/, etc.)
  serviceName?:        string
  serviceDescription?: string
  serviceUrl?:         string
  serviceOffers?:      OfferData[]

  // Pages blog
  article?:    ArticleData
  articleUrl?: string
}

// ─── Helper ───────────────────────────────────────────────────────────────────

function Ld({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ─── Composant principal ──────────────────────────────────────────────────────

export default function SchemaOrg({
  page,
  faq,
  breadcrumbs,
  serviceName,
  serviceDescription,
  serviceUrl,
  serviceOffers,
  article,
  articleUrl,
}: SchemaOrgProps) {
  return (
    <>
      {/* ── Homepage : Organization + WebSite + LocalBusiness ── */}
      {page === 'home' && (
        <>
          <Ld schema={organizationSchema()} />
          <Ld schema={websiteSchema()} />
          <Ld schema={localBusinessSchema()} />
        </>
      )}

      {/* ── Hub Lyon : LocalBusiness + Reviews individuels ── */}
      {page === 'lyon' && (
        <>
          <Ld schema={localBusinessSchema()} />
          {reviewSchemas().map((r, i) => (
            <Ld key={i} schema={r} />
          ))}
        </>
      )}

      {/* ── Pages service : Service + OfferCatalog ── */}
      {page === 'service' &&
        serviceName &&
        serviceDescription &&
        serviceUrl &&
        serviceOffers && (
          <Ld
            schema={servicePageSchema(
              serviceName,
              serviceDescription,
              serviceUrl,
              serviceOffers,
            )}
          />
        )}

      {/* ── Pages blog : Article ── */}
      {page === 'blog' && article && articleUrl && (
        <Ld schema={articleSchema(article, articleUrl)} />
      )}

      {/* ── FAQPage : toutes les pages qui en ont une ── */}
      {faq && faq.length > 0 && <Ld schema={faqPageSchema(faq)} />}

      {/* ── BreadcrumbList : toutes les pages sauf homepage ── */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Ld schema={breadcrumbSchema(breadcrumbs)} />
      )}
    </>
  )
}

// ─── Presets d'offres exportés pour chaque page service ──────────────────────
// Importer directement dans les page.tsx correspondants

export const OFFERS_MARIAGE: OfferData[] = [
  {
    name:          'Formule Essentiel — Mariage',
    price:         '299',
    priceCurrency: 'EUR',
    taxIncluded:   true,
    description:   'Photobooth mariage 3h, animateur dédié, impressions illimitées, cadre photo personnalisé',
  },
  {
    name:          'Formule Premium — Mariage',
    price:         '449',
    priceCurrency: 'EUR',
    taxIncluded:   true,
    description:   'Photobooth mariage 5h, fond personnalisé, accessoires premium, galerie numérique 30 jours',
  },
  {
    name:          'Formule Excellence — Mariage',
    price:         null,
    priceCurrency: 'EUR',
    taxIncluded:   true,
    description:   'Sur devis — miroir interactif, personnalisation complète, mariages premium',
  },
]

export const OFFERS_ANNIVERSAIRE: OfferData[] = [
  {
    name:          'Formule Mini — Anniversaire',
    price:         '249',
    priceCurrency: 'EUR',
    taxIncluded:   true,
    description:   'Photobooth anniversaire 2h, animateur, impressions illimitées',
  },
  {
    name:          'Formule Fête — Anniversaire',
    price:         '299',
    priceCurrency: 'EUR',
    taxIncluded:   true,
    description:   'Photobooth anniversaire 3h, cadre personnalisé avec prénom et âge',
  },
  {
    name:          'Formule Grande Soirée — Anniversaire',
    price:         '449',
    priceCurrency: 'EUR',
    taxIncluded:   true,
    description:   'Photobooth anniversaire 5h, fond personnalisé, accessoires premium, galerie numérique',
  },
]

export const OFFERS_ENTREPRISE: OfferData[] = [
  {
    name:          'Formule Séminaire',
    price:         '449',
    priceCurrency: 'EUR',
    taxIncluded:   false,
    description:   'Photobooth séminaire 4h HT, branding entreprise, galerie sécurisée',
  },
  {
    name:          'Formule Corporate',
    price:         '649',
    priceCurrency: 'EUR',
    taxIncluded:   false,
    description:   'Photobooth corporate 5-6h HT, charte graphique complète, collecte emails RGPD',
  },
  {
    name:          'Formule Excellence / Salon',
    price:         null,
    priceCurrency: 'EUR',
    taxIncluded:   false,
    description:   'Sur devis — miroir interactif, multi-jours, stands Eurexpo Lyon',
  },
]

export const OFFERS_PAS_CHER: OfferData[] = [
  {
    name:          'Formule Essentiel',
    price:         '249',
    priceCurrency: 'EUR',
    taxIncluded:   true,
    description:   'La formule la plus accessible — photobooth 2h avec animateur et impressions illimitées',
  },
  {
    name:          'Formule Premium',
    price:         '449',
    priceCurrency: 'EUR',
    taxIncluded:   true,
    description:   'Meilleur rapport qualité/prix — 5h avec fond personnalisé et accessoires premium',
  },
]
