# SEO Technique — Checklist d'Implémentation Next.js
**location-photobooth.fr | Phase 1 Lyon | Février 2026**

---

## STATUT GLOBAL

| Catégorie | Statut |
|-----------|--------|
| Schema.org JSON-LD | ✅ Implémenté |
| Open Graph + Twitter Card | ✅ Implémenté |
| Canonicals | ✅ Implémenté |
| Sitemap.xml | ✅ Implémenté |
| Robots.txt | ✅ Implémenté |
| HTTPS + HSTS | ✅ next.config.ts |
| Redirections www → non-www | ✅ next.config.ts |
| Routes Next.js (11 pages) | ✅ Créées |
| Variables d'environnement | ✅ .env.local |
| Google My Business | ⏳ Manuel |
| Images OG (1200×630) | ⏳ À créer |
| Backlinks locaux | ⏳ Campagne à lancer |
| Contenu HTML des pages | ⏳ À rédiger |

---

## 1. SCHEMA.ORG — RÉFÉRENCE COMPLÈTE

### Fichier : `nextjs/lib/schemas.ts`
### Composant : `nextjs/components/seo/SchemaOrg.tsx`

### Matrice schemas par page

| Page | Organization | WebSite | LocalBusiness | Service + Offers | FAQPage | BreadcrumbList | Article | Review + AggregateRating |
|------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| `/` | ✅ | ✅ | ✅ | — | ✅ | — | — | ✅ (inline LB) |
| `/lyon/` | — | — | ✅ | — | ✅ | ✅ | — | ✅ individuels |
| `/lyon/mariage/` | — | — | ref `@id` | ✅ | ✅ | ✅ | — | — |
| `/lyon/anniversaire/` | — | — | ref `@id` | ✅ | ✅ | ✅ | — | — |
| `/lyon/entreprise/` | — | — | ref `@id` | ✅ | ✅ | ✅ | — | — |
| `/lyon/pas-cher/` | — | — | ref `@id` | ✅ | ✅ | ✅ | — | — |
| `/blog/*` | — | — | — | — | — | ✅ | ✅ | — |

### Usage dans les page.tsx

```tsx
// Homepage (/)
<SchemaOrg page="home" faq={FAQ_LYON} />

// Hub Lyon (/lyon/)
<SchemaOrg page="lyon" faq={FAQ_LYON} breadcrumbs={BREADCRUMBS} />

// Pages service
<SchemaOrg
  page="service"
  serviceName="Location Photobooth Mariage Lyon"
  serviceDescription="..."
  serviceUrl={PAGE_URL}
  serviceOffers={OFFERS_MARIAGE}
  faq={FAQ_MARIAGE}
  breadcrumbs={BREADCRUMBS}
/>

// Articles blog
<SchemaOrg page="blog" article={ARTICLE} articleUrl={PAGE_URL} breadcrumbs={BREADCRUMBS} />
```

### LocalBusiness — Champs critiques à vérifier

```jsonc
{
  "telephone": "+33665420793",          // ← Vérifier le numéro réel
  "email": "contact@location-photobooth.fr",
  "address": {
    "addressLocality": "Lyon",
    "postalCode": "69000"               // ← Préciser le bon arrondissement
  },
  "geo": {
    "latitude": "45.764043",            // ← Vérifier coordonnées exactes bureau/local
    "longitude": "4.835659"
  },
  "priceRange": "€€",
  "aggregateRating": {
    "ratingValue": "4.9",
    "reviewCount": "127"               // ← Mettre à jour avec le vrai nombre d'avis Google
  }
}
```

### Reviews — Règle CRITIQUE Google

> **Ne jamais inventer des avis.** Les avis dans `lib/schemas.ts` doivent correspondre
> à des avis réels publiés sur Google My Business.
> Utiliser `publisher: { "@type": "Organization", "name": "Google" }` = certifie la source.
> Si pas d'avis réels → supprimer le tableau `REVIEW_DATA` et retirer `review` + `aggregateRating` du LocalBusiness.

---

## 2. OPEN GRAPH & TWITTER CARD

### Fichier : `nextjs/lib/metadata.ts`

### Dimensions images OG requises

```
/public/images/
├── og-home.jpg          1200×630px  (homepage nationale)
├── og-lyon.jpg          1200×630px  (hub Lyon)
├── og-mariage.jpg       1200×630px  (mariage)
├── og-anniversaire.jpg  1200×630px  (anniversaire)
├── og-entreprise.jpg    1200×630px  (entreprise)
├── og-tarifs.jpg        1200×630px  (pas cher)
├── og-default.jpg       1200×630px  (fallback)
└── blog/
    ├── og-prix-photobooth.jpg     1200×630px
    ├── og-animations-mariage.jpg  1200×630px
    └── og-ouvert-ferme.jpg        1200×630px
```

### Checklist validation OG

- [ ] Tester chaque URL sur https://developers.facebook.com/tools/debug/
- [ ] Tester chaque URL sur https://cards-dev.twitter.com/validator
- [ ] Vérifier que les images sont accessibles sans authentification
- [ ] Confirmer le format JPEG (pas PNG) pour la performance
- [ ] Alt text descriptif avec le keyword principal

### Template title configuré dans layout.tsx

```tsx
title: {
  template: '%s | Location Photobooth',
  default: 'Location Photobooth France — Animation Photo pour vos Événements',
}
// Résultat : "Location Photobooth Lyon — Devis Gratuit | Location Photobooth"
```

---

## 3. GOOGLE MY BUSINESS (GMB)

### Catégories exactes à sélectionner

| Ordre | Catégorie | Priorité |
|-------|-----------|----------|
| Principal | **Société de location de matériel de fête** | OBLIGATOIRE |
| Secondaire 1 | **Service d'animation** | Haute |
| Secondaire 2 | **Photographe** | Moyenne |
| Secondaire 3 | **Service de location de matériel pour événement** | Moyenne |
| Secondaire 4 | **Organisateur de fêtes** | Optionnel |

### Description GMB optimisée (750 caractères max)

```
Location de photobooth à Lyon pour mariages, anniversaires et événements
d'entreprise. Animateur professionnel inclus, impressions photo illimitées
en 10 secondes, personnalisation du cadre aux couleurs de votre événement.

Livraison sur toute la métropole lyonnaise : Villeurbanne, Bron, Décines,
Caluire, Vénissieux, Écully, Tassin, Francheville, Oullins, Saint-Priest.

📸 Formules dès 249 € TTC · Devis gratuit sous 24h
✓ Disponible 7j/7 · ✓ Photobooth ouvert, fermé ou miroir interactif
```

### Attributs GMB à activer

- [x] Identifié en ligne
- [x] Devis en ligne disponible
- [x] Accessibilité fauteuil roulant (si applicable)
- [x] Service à la clientèle : FR
- [x] Zones desservies : Lyon + 14 communes métropole
- [x] Modes de paiement : Virement, Chèque, Espèces

### Publications GMB — Calendrier

| Fréquence | Type | Exemple |
|-----------|------|---------|
| Hebdomadaire | Photo événement | "Photobooth mariage samedi à Lyon 6e — magnifique Villa Florentine !" |
| Mensuel | Offre | "Réservez en mars, -10% sur formule Premium !" |
| Mensuel | Post informatif | "Comment choisir son photobooth pour un mariage ? Notre guide 2026" |

### Avis clients — Protocole de collecte

1. Envoyer un SMS/email post-événement avec lien direct Google Reviews
2. Répondre à 100% des avis sous 48h (positifs ET négatifs)
3. Ne jamais acheter d'avis (pénalité permanente)
4. Cible : ≥50 avis à 5.0 dans les 6 premiers mois

---

## 4. CANONICALS & REDIRECTIONS

### Règles actives dans next.config.ts

```
www.location-photobooth.fr/* → location-photobooth.fr/*  [301]
HTTP → HTTPS automatique (hébergeur/Vercel)
HSTS : max-age=63072000, includeSubDomains, preload
```

### Canonicals dans lib/metadata.ts

```tsx
// Chaque page via buildMetadata({ path: '/lyon/' })
alternates: { canonical: 'https://location-photobooth.fr/lyon/' }
```

### Règles canoniques à respecter

- [ ] Toujours avec trailing slash (uniformité)
- [ ] Jamais d'URLs dupliquées avec/sans paramètres UTM (filtrer dans next.config.ts)
- [ ] Pages noindex (/cgv/, /mentions-legales/) = canonical quand même (bonne pratique)
- [ ] Pas de canonical cross-domain sauf si syndication volontaire

### Redirections supplémentaires à ajouter dans next.config.ts

```tsx
// Si l'ancien site existait ou si des URLs sans trailing slash circulent :
{ source: '/lyon', destination: '/lyon/', permanent: true },
{ source: '/lyon/mariage', destination: '/lyon/mariage/', permanent: true },
// etc. — Ajouter pour chaque route si nécessaire
```

---

## 5. CHECKLIST TECHNIQUE — VITESSE & CORE WEB VITALS

### Images

- [ ] **Toutes les images** en `.webp` ou `.avif` (configuré dans next.config.ts ✅)
- [ ] Image hero : `priority` prop activé → `<Image src="..." priority />`
- [ ] Images above-the-fold : `loading="eager"`, below-the-fold : `loading="lazy"` (géré par Next.js)
- [ ] Taille max recommandée : hero 200Ko, cards 80Ko, OG 150Ko
- [ ] `alt` descriptif sur chaque image (keyword naturel)

### Fonts

```tsx
// layout.tsx — Font Display Swap configuré ✅
const inter = Inter({ subsets: ['latin'], display: 'swap' })
```

- [ ] Précharger uniquement la font principale : `rel="preload"` automatique via Next.js
- [ ] Eviter plus de 2 familles de fonts
- [ ] Pas de Google Fonts en CDN externe en production (servir en local via Next.js Font ✅)

### Core Web Vitals — Objectifs

| Métrique | Objectif | Outil de mesure |
|----------|----------|-----------------|
| LCP (Largest Contentful Paint) | < 2.5s | PageSpeed Insights |
| INP (Interaction to Next Paint) | < 200ms | Chrome DevTools |
| CLS (Cumulative Layout Shift) | < 0.1 | PageSpeed Insights |
| TTFB (Time To First Byte) | < 800ms | WebPageTest |

### Scripts tiers — Règles

- [ ] Google Analytics / GTM : charger en `strategy="afterInteractive"`
- [ ] Pas de chat widget synchrone above-the-fold
- [ ] Pixel Meta : charger après consentement cookie

```tsx
// Exemple avec Next.js Script
import Script from 'next/script'
<Script src="https://..." strategy="afterInteractive" />
```

### Compression & Cache (next.config.ts ✅ configuré)

```
compress: true                           → Gzip/Brotli automatique
Cache-Control: immutable, 1an           → /images/*, /fonts/*
```

---

## 6. MOBILE & ACCESSIBILITÉ

- [ ] Viewport meta : automatique via Next.js
- [ ] Taille minimale boutons tactiles : 44×44px
- [ ] Pas de pop-up intrusif sur mobile (pénalité Google)
- [ ] Formulaire contact : labels visibles (pas juste placeholder)
- [ ] Contraste texte/fond : ratio ≥ 4.5:1 (WCAG AA)
- [ ] Structure H1→H2→H3 respectée par page (cf. SEO-ARCHITECTURE.md)
- [ ] Une seule balise `<h1>` par page

---

## 7. HTTPS & SÉCURITÉ

### Headers configurés dans next.config.ts ✅

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

### Actions post-déploiement

- [ ] Soumettre le domaine à https://hstspreload.org/ (après 30j de HSTS stables)
- [ ] Vérifier le certificat SSL sur https://www.ssllabs.com/ssltest/ → objectif grade A+
- [ ] Activer HTTPS sur l'hébergeur AVANT de mettre le HSTS en prod

---

## 8. SITEMAP & INDEXATION

### Sitemap.xml — 11 pages Phase 1 ✅

```
/ → priority 1.0, weekly
/lyon/ → priority 0.95, weekly
/lyon/mariage/ → priority 0.90, monthly
/lyon/anniversaire/ → priority 0.90, monthly
/lyon/entreprise/ → priority 0.90, monthly
/lyon/pas-cher/ → priority 0.85, monthly
/blog/prix-location-photobooth/ → priority 0.80, monthly
/blog/idees-animations-mariage-lyon/ → priority 0.75, monthly
/blog/photobooth-ouvert-ferme/ → priority 0.75, monthly
/mentions-legales/ → priority 0.10, yearly
/cgv/ → priority 0.10, yearly
```

### Actions Google Search Console

- [ ] Valider la propriété du site (DNS TXT ou balise HTML)
- [ ] Soumettre `https://location-photobooth.fr/sitemap.xml`
- [ ] Demander l'indexation manuelle des pages pilier : `/` et `/lyon/`
- [ ] Vérifier l'absence d'erreurs 404 dans les rapports
- [ ] Surveiller les Core Web Vitals dans la section "Expérience"

### Robots.txt ✅

```
Allow: / (tous crawlers standards)
Disallow: /api/, /_next/, /admin/
Disallow: / (GPTBot, ChatGPT-User, Google-Extended, CCBot, anthropic-ai)
Sitemap: https://location-photobooth.fr/sitemap.xml
```

---

## 9. STRATÉGIE BACKLINKS LOCAUX

### Tier 1 — Annuaires locaux (soumission gratuite, DA élevé)

| Site | URL de soumission | Catégorie |
|------|-------------------|-----------|
| PagesJaunes | pagesjaunes.fr/professionnels | Société de location événementielle |
| Google My Business | business.google.com | (déjà traité) |
| Yelp France | yelp.fr | Services événementiels |
| Tripadvisor | tripadvisor.fr/ListYourBusiness | Attractions / Activités |
| Mappy | mappy.com/poi/add | Loisirs Lyon |
| Le Petit Fils | — | Annuaire local Lyon |
| Lyon-Tourisme | rhone-alpes-tourisme.com | Activités Lyon |

### Tier 2 — Sites mariage (backlinks haute valeur)

| Site | Action |
|------|--------|
| **Mariages.net** | Créer un profil prestataire (payant ~80€/mois — ROI excellent) |
| **Zankyou** | Profil prestataire gratuit + avis clients |
| **La Mariée en Colère** | Contacter le blog pour partenariat / article |
| **Les Mariés du Rhône** | Annuaire mariage local Lyon |
| **Inspiration mariage** | Guest post "photobooth pour mariage" |
| **HelloAsso** | Si vous participez à des salons du mariage |

### Tier 3 — Sites événementiels & corporate

| Site | Action |
|------|--------|
| **Eventseeker Lyon** | Profil prestataire |
| **Tendance Wedding** | Annuaire prestataires |
| **Lyon-Entreprises.fr** | Annuaire B2B lyonnais |
| **CCI Lyon Métropole** | Adhésion → backlink annuaire |
| **Club Affilié Lyon** | Réseaux pros locaux |

### Tier 4 — Content marketing (backlinks naturels)

| Action | Délai estimé |
|--------|-------------|
| Publier les 3 articles de blog → partager sur LinkedIn, Instagram | J+0 |
| Guest post sur un blog mariage Lyon (1 article/trimestre) | M+1 |
| Créer une infographie "Prix photobooth 2026" → soumettre aux blogs | M+2 |
| Participer aux salons du mariage Lyon → mentions presse | M+3 |
| Partenariat lieux de réception (Villa Florentine, Sofitel, château...) → échange de liens | M+2 |

### Lieux partenaires Lyon — Cibles pour échange de liens

```
Villa Florentine (Lyon 5e)
Château de Bagnols (Beaujolais)
Domaine du Grand Montmirail
Domaine de la Chapelle de Vatre
Espace Tête d'Or (Lyon 6e)
Hôtel Radisson Blu Lyon
Centre de congrès de Lyon (Eurexpo)
Palais des Congrès de Lyon
```

---

## 10. VARIABLES D'ENVIRONNEMENT

### `.env.local` (local dev)

```env
NEXT_PUBLIC_SITE_URL=https://location-photobooth.fr
```

### Vercel / hébergeur (production)

```
NEXT_PUBLIC_SITE_URL = https://location-photobooth.fr
```

> IMPORTANT : `NEXT_PUBLIC_` = exposé côté client. Ne jamais y mettre de secrets.

---

## 11. IMAGES OG MANQUANTES — BRIEF GRAPHIQUE

Créer 10 visuels 1200×630px :

```
Fond sombre (noir/anthracite) + overlay gradient gold
Texte centré :
  - Ligne 1 : titre court de la page (police Playfair Display Bold)
  - Ligne 2 : "location-photobooth.fr" (police Inter, taille réduite)
Logo en bas à droite
Photo photobooth en arrière-plan (floutée)
```

---

## 12. CHECKLIST LANCEMENT — DANS L'ORDRE

### Semaine 1 — Socle technique
- [x] Corriger le domaine dans layout.tsx (photobooth-evenement.fr → location-photobooth.fr)
- [x] Corriger canonical dans page.tsx
- [x] Brancher METADATA_PRESETS.home sur la homepage
- [x] Fixer `<SchemaOrg page="home" faq={FAQ_LYON} />`
- [x] Créer les 9 routes manquantes (pages shell)
- [x] Créer `.env.local`
- [ ] Créer les 10 images OG (1200×630)
- [ ] Vérifier le build Next.js : `npm run build`
- [ ] Tester les schemas sur https://search.google.com/test/rich-results

### Semaine 2 — Contenu & GMB
- [ ] Rédiger le contenu HTML de `/lyon/` (1500-2000 mots)
- [ ] Rédiger le contenu HTML de `/lyon/mariage/` (1200-1500 mots)
- [ ] Créer et optimiser la fiche Google My Business
- [ ] Soumettre les annuaires Tier 1

### Semaine 3-4 — Blog & backlinks
- [ ] Rédiger l'article `/blog/prix-location-photobooth/`
- [ ] Rédiger `/lyon/entreprise/` + `/lyon/anniversaire/`
- [ ] Créer profils sur Mariages.net et Zankyou
- [ ] Soumettre sitemap dans Google Search Console

### Mois 2
- [ ] Rédiger `/lyon/pas-cher/` + 2 articles de blog restants
- [ ] Lancer campagne backlinks Tier 2 (contacts blogs mariage)
- [ ] Premier bilan positionnement sur Search Console

---

*Document généré le 28/02/2026 — Ingénieur SEO Technique*
*Prochain audit : mai 2026*
