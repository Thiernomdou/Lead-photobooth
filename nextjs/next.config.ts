import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  // Isole ce projet du workspace parent (évite le conflit avec /c/Photobooth/package-lock.json)
  outputFileTracingRoot: path.join(__dirname),

  // ── Images ──────────────────────────────────────────────────────────────────
  images: {
    formats:     ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes:  [16, 32, 64, 96, 128, 256],
    minimumCacheTTL: 86400, // 24h
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com'   },
      { protocol: 'https', hostname: 'plus.unsplash.com'   },
    ],
  },

  // ── Compression ─────────────────────────────────────────────────────────────
  compress: true,

  // ── En-têtes de sécurité & performance ──────────────────────────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Sécurité
          { key: 'X-Content-Type-Options',    value: 'nosniff' },
          { key: 'X-Frame-Options',           value: 'DENY' },
          { key: 'X-XSS-Protection',          value: '1; mode=block' },
          { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=()' },
          // HSTS (activer uniquement en prod avec HTTPS)
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
      {
        // Cache long pour les assets statiques
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Cache long pour les fonts (si servi localement)
        source: '/fonts/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },

  // ── Redirections www → non-www ──────────────────────────────────────────────
  async redirects() {
    return [
      {
        source:      '/:path*',
        has:         [{ type: 'host', value: 'www.location-photobooth.fr' }],
        destination: 'https://location-photobooth.fr/:path*',
        permanent:   true,  // 301
      },
    ]
  },
}

export default nextConfig
