import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://location-photobooth.fr'

  return {
    rules: [
      {
        // Crawlers standards
        userAgent: '*',
        allow:     '/',
        disallow:  ['/api/', '/_next/', '/admin/'],
      },
      {
        // Bloquer les crawlers IA (contenu protégé)
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'CCBot', 'anthropic-ai'],
        disallow:  '/',
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host:    base,
  }
}
