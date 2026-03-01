import { MetadataRoute } from 'next'

/**
 * sitemap.ts — 11 pages Phase 1
 * Priorities : homepage 1.0 → hub Lyon 0.95 → sous-pages 0.85-0.90 → blog 0.75-0.80 → légales 0.10
 * Les ancres #section (SPA) sont intentionnellement exclues — Google ne les indexe pas séparément.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://photobooth-evenement.fr'
  const now  = new Date()

  return [
    // ── Tier 1 : pages piliers ─────────────────────────────────────────────
    { url: `${base}/`,          lastModified: now, changeFrequency: 'weekly',  priority: 1.0  },
    { url: `${base}/lyon/`,     lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },

    // ── Tier 2 : sous-pages Lyon ───────────────────────────────────────────
    { url: `${base}/lyon/mariage/`,      lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: `${base}/lyon/anniversaire/`, lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: `${base}/lyon/entreprise/`,   lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: `${base}/lyon/pas-cher/`,     lastModified: now, changeFrequency: 'monthly', priority: 0.85 },

    // ── Tier 3 : articles blog ─────────────────────────────────────────────
    { url: `${base}/blog/prix-location-photobooth/`,      lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
    { url: `${base}/blog/idees-animations-mariage-lyon/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/photobooth-ouvert-ferme/`,       lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

    // ── Tier 4 : légales (noindex mais présentes pour cohérence) ──────────
    { url: `${base}/mentions-legales/`, lastModified: now, changeFrequency: 'yearly', priority: 0.10 },
    { url: `${base}/cgv/`,             lastModified: now, changeFrequency: 'yearly', priority: 0.10 },
  ]
}
