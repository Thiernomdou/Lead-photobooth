import Link from 'next/link'
import SchemaOrg from '@/components/seo/SchemaOrg'
import ContactForm from '@/components/forms/ContactForm'
import { METADATA_PRESETS } from '@/lib/metadata'

const BASE     = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://photobooth-evenement.fr'
const PAGE_URL = `${BASE}/blog/prix-location-photobooth/`

export const metadata = METADATA_PRESETS.blogPrix

const BREADCRUMBS = [
  { name: 'Accueil',                       item: `${BASE}/` },
  { name: 'Blog',                          item: `${BASE}/blog/` },
  { name: 'Prix location photobooth 2026', item: PAGE_URL },
]

const ARTICLE = {
  headline:      'Prix location photobooth 2026 : le guide complet des tarifs',
  description:   "Quel budget prévoir pour louer un photobooth ? Tarifs détaillés par type d'événement, durée et options. Comparatif complet 2026.",
  datePublished: '2026-02-27T08:00:00+01:00',
  dateModified:  '2026-02-27T08:00:00+01:00',
  image:         `${BASE}/images/blog/og-prix-photobooth.jpg`,
  section:       "Guide d'achat",
  keywords:      'prix location photobooth, tarif photobooth, budget mariage photobooth, combien coûte un photobooth',
}

// ─── Données ──────────────────────────────────────────────────────────────────

const TOC = [
  { id: 'prix-moyen',       label: 'Prix moyen en France'                      },
  { id: 'facteurs',         label: 'Les facteurs qui font varier le tarif'     },
  { id: 'tableau',          label: 'Tableau comparatif par type d\'événement'  },
  { id: 'tarifs-lyon',      label: 'Prix photobooth à Lyon'                    },
  { id: 'pieges',           label: "Les pièges à éviter"                       },
  { id: 'rapport-qualite',  label: 'Obtenir le meilleur rapport qualité/prix'  },
]

const COMPARISON_ROWS = [
  {
    event:    'Pot de départ / cocktail',
    duration: '2 heures',
    market:   '150 – 250 €',
    lyon:     'dès 249 € TTC',
  },
  {
    event:    'Anniversaire (30–60 invités)',
    duration: '2 – 3 heures',
    market:   '200 – 350 €',
    lyon:     'dès 249 € TTC',
  },
  {
    event:    'Anniversaire soirée (80–150 invités)',
    duration: '4 – 5 heures',
    market:   '300 – 500 €',
    lyon:     'dès 449 € TTC',
  },
  {
    event:    'Mariage — vin d\'honneur seul',
    duration: '3 heures',
    market:   '280 – 420 €',
    lyon:     'dès 299 € TTC',
  },
  {
    event:    'Mariage complet (vin d\'honneur + soirée)',
    duration: '5 – 6 heures',
    market:   '420 – 700 €',
    lyon:     'dès 449 € TTC',
  },
  {
    event:    "Séminaire / soirée d'entreprise",
    duration: '4 – 5 heures',
    market:   '450 – 750 €',
    lyon:     'dès 449 € HT',
  },
  {
    event:    'Salon / congrès (multi-jours)',
    duration: '2 jours et +',
    market:   '800 – 2 000 €',
    lyon:     'Sur devis',
  },
]

// ─── Composants ──────────────────────────────────────────────────────────────

function ArticleHeader() {
  return (
    <header className="bg-gray-50 border-b border-gray-200">
      <div className="container-max py-16 md:py-20">
        <div className="max-w-3xl mx-auto">

          {/* Fil d'Ariane */}
          <nav aria-label="Fil d'ariane" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
              <li><Link href="/" className="hover:text-gold-400 transition-colors">Accueil</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/blog/" className="hover:text-gold-400 transition-colors">Blog</Link></li>
              <li aria-hidden>/</li>
              <li className="text-gold-400 font-medium" aria-current="page">Prix photobooth 2026</li>
            </ol>
          </nav>

          {/* Catégorie */}
          <span className="inline-block bg-gold-400/10 border border-gold-400/30 text-gold-400
                           text-xs font-bold tracking-widest uppercase px-3 py-1 mb-6">
            Guide d&apos;achat
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-[1.1] mb-6">
            Prix location photobooth 2026 : le guide complet des tarifs
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Quel budget prévoir pour louer un photobooth ? Tarifs détaillés par type d&apos;événement,
            facteurs qui font varier le prix, comparatif complet et pièges à éviter.
          </p>

          {/* Meta article */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 border-t border-gray-200 pt-6">
            <span>
              Publié le{' '}
              <time dateTime="2026-02-27" className="text-gray-600 font-medium">
                27 février 2026
              </time>
            </span>
            <span aria-hidden>·</span>
            <span>Temps de lecture : <strong className="text-gray-600">8 min</strong></span>
            <span aria-hidden>·</span>
            <span>Par <strong className="text-gray-600">L&apos;équipe Location Photobooth</strong></span>
          </div>
        </div>
      </div>
    </header>
  )
}

function ArticleBody() {
  return (
    <div className="bg-white">
      <div className="container-max py-16">
        <div className="max-w-3xl mx-auto">

          {/* Table des matières */}
          <nav
            aria-label="Table des matières"
            className="bg-gray-50 border border-gray-200 p-6 mb-14"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
              Dans cet article
            </p>
            <ol className="space-y-2">
              {TOC.map((item, i) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="text-gold-400 font-bold text-sm shrink-0 w-4">{i + 1}.</span>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-gray-600 hover:text-gold-500 hover:underline transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ── 1. Prix moyen France ─────────────────────────────────────── */}
          <section id="prix-moyen" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Quel est le prix moyen de location d&apos;un photobooth en France ?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              En 2026, le prix d&apos;une location de photobooth en France oscille entre
              <strong className="text-gray-900"> 150 € et 900 €</strong> selon le type
              de dispositif, la durée et les prestations incluses. Une fourchette large
              qui mérite d&apos;être décryptée.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Le marché se divise en trois segments distincts, qui ne s&apos;adressent pas
              aux mêmes besoins et ne délivrent pas la même qualité :
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  segment: 'Segment entrée de gamme',
                  range:   '100 – 220 € TTC',
                  desc:    "Borne selfie ou iPad sur trépied, livrée sans animateur. L'hôte gère lui-même l'appareil. Impression souvent en option payante ou absente. Qualité photo variable.",
                },
                {
                  segment: 'Segment intermédiaire (standard marché)',
                  range:   '250 – 500 € TTC',
                  desc:    "Photobooth ouvert ou compact avec animateur professionnel, impressions illimitées par sublimation thermique, accessoires et cadre personnalisé inclus. Le bon rapport qualité/prix.",
                },
                {
                  segment: 'Segment premium',
                  range:   '500 – 900 € TTC et +',
                  desc:    "Miroir interactif XXL, cabine fermée vintage, photobooth 360°, personnalisation intégrale (fond vinyle, interface, enseigne lumineuse). Pour les événements haut de gamme.",
                },
              ].map((s) => (
                <div key={s.segment} className="border-l-2 border-gold-400 pl-5">
                  <p className="font-semibold text-gray-900 mb-1">
                    {s.segment}{' '}
                    <span className="text-gold-500 font-bold">{s.range}</span>
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed">
              La majorité des locations pour des mariages, anniversaires ou événements
              d&apos;entreprise se situe dans le segment intermédiaire.
              C&apos;est dans cette fourchette que vous trouverez le meilleur équilibre
              entre qualité de prestation et accessibilité budgétaire.
            </p>
          </section>

          {/* ── 2. Facteurs ──────────────────────────────────────────────── */}
          <section id="facteurs" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Les facteurs qui font varier le tarif
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10">
              Comprendre ce qui influence le prix vous permettra de comparer des offres
              à périmètre équivalent — et d&apos;éviter les mauvaises surprises.
            </p>

            {/* H3: Durée */}
            <div className="mb-10">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                La durée de location
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                C&apos;est le premier levier de prix. Plus la prestation est longue,
                plus le tarif est élevé — mais avec un effet dégressif : la 5e heure
                coûte proportionnellement moins que la 2e.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Durée</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Prix indicatif (marché France)</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Idéal pour</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { duration: '2 heures',     price: '150 – 280 €',  ideal: "Cocktail, pot de départ, goûter d'anniversaire" },
                      { duration: '3 heures',     price: '220 – 380 €',  ideal: "Vin d'honneur seul, anniversaire 40–80 invités" },
                      { duration: '4 heures',     price: '280 – 480 €',  ideal: 'Anniversaire soirée, séminaire, soirée entreprise' },
                      { duration: '5 – 6 heures', price: '380 – 650 €',  ideal: 'Mariage complet, gala annuel, soirée longue' },
                    ].map((row) => (
                      <tr key={row.duration} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">{row.duration}</td>
                        <td className="px-4 py-3 text-gray-600">{row.price}</td>
                        <td className="px-4 py-3 text-gray-500">{row.ideal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* H3: Type de photobooth */}
            <div className="mb-10">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Le type de photobooth (ouvert / fermé / miroir)
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tous les photobooths ne se ressemblent pas. Le type de dispositif
                a une incidence directe sur le prix et l&apos;expérience proposée à
                vos invités.
              </p>
              <div className="space-y-4">
                {[
                  {
                    type:  'Photobooth ouvert',
                    surcharge: 'Tarif de référence',
                    desc:  "Structure légère ouverte : accueille 2 à 8 personnes simultanément, installation rapide, grande flexibilité de placement. Le choix le plus répandu et le plus accessible.",
                  },
                  {
                    type:  'Cabine fermée vintage',
                    surcharge: '+20 à +30 %',
                    desc:  "La cabine iconique des années 90, revisitée. Accueille 2 à 4 personnes dans un espace intimiste. Format photo en bande 3 ou 4 images. Apporte une touche rétro authentique.",
                  },
                  {
                    type:  'Miroir interactif XXL',
                    surcharge: '+40 à +60 %',
                    desc:  "Grand miroir tactile (180 cm) avec interface animée, effets visuels et impression 10×15 cm. Format très impactant visuellement — idéal pour les événements premium ou les mariages haut de gamme.",
                  },
                  {
                    type:  'Photobooth 360°',
                    surcharge: '+60 à +100 %',
                    desc:  "Plateforme rotative avec bras et caméra — crée des vidéos slow motion 360°. Très prisé lors des lancements de produits et des soirées d'entreprise branchées. Partage immédiat par QR code.",
                  },
                ].map((item) => (
                  <div key={item.type} className="flex gap-4 p-4 border border-gray-200">
                    <div className="shrink-0">
                      <span className="inline-block bg-gold-400/10 text-gold-500 text-xs font-bold px-2 py-0.5">
                        {item.surcharge}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{item.type}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* H3: Options */}
            <div className="mb-10">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Les options (impression, GIF, cadre personnalisé...)
              </h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Certains éléments sont inclus dans la plupart des offres sérieuses,
                d&apos;autres constituent des options payantes. Voici un aperçu du marché :
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Option</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Coût additionnel moyen</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Chez nous</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { option: 'Animateur professionnel',    market: '0 ou +80–150 €',    us: 'Inclus systématiquement' },
                      { option: 'Impressions illimitées',     market: '0 ou +50–120 €',    us: 'Inclus systématiquement' },
                      { option: 'Cadre photo personnalisé',   market: '0 ou +20–50 €',     us: 'Inclus (toutes formules)' },
                      { option: 'Accessoires (50+ props)',    market: '0 ou +30–80 €',     us: 'Inclus' },
                      { option: 'Galerie numérique 30 jours', market: '0 ou +40–80 €',    us: 'Inclus' },
                      { option: 'GIF animé / Boomerang',     market: '+50–100 €',          us: 'Sur devis' },
                      { option: 'Fond vinyle imprimé',        market: '+80–200 €',          us: 'Sur devis' },
                      { option: "Collecte d'e-mails RGPD",   market: '+60–120 €',          us: 'Option corporate' },
                    ].map((row) => (
                      <tr key={row.option} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">{row.option}</td>
                        <td className="px-4 py-3 text-gray-600">{row.market}</td>
                        <td className="px-4 py-3 text-gold-600 font-medium">{row.us}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-3 italic">
                * Données marché indicatives — mars 2026.
              </p>
            </div>

            {/* H3: Frais de déplacement */}
            <div className="mb-6">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Les frais de déplacement et d&apos;installation
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                L&apos;installation et le déplacement représentent un poste souvent
                mal valorisé — ou volontairement caché — dans les offres low cost.
                En pratique, chaque prestation nécessite 1h à 1h30 d&apos;installation
                et 30 à 45 minutes de démontage.
              </p>
              <div className="bg-gray-50 border border-gray-200 p-5 text-sm">
                <p className="font-semibold text-gray-900 mb-3">Frais de déplacement pratiqués sur le marché :</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Moins de 30 km (zone locale)</span>
                    <span className="font-medium text-gray-900">Gratuit ou 0–50 €</span>
                  </li>
                  <li className="flex justify-between border-t border-gray-200 pt-2">
                    <span>30 à 60 km</span>
                    <span className="font-medium text-gray-900">50 – 150 €</span>
                  </li>
                  <li className="flex justify-between border-t border-gray-200 pt-2">
                    <span>60 à 100 km</span>
                    <span className="font-medium text-gray-900">100 – 250 €</span>
                  </li>
                  <li className="flex justify-between border-t border-gray-200 pt-2">
                    <span>Au-delà de 100 km</span>
                    <span className="font-medium text-gray-900">200 € + hébergement</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4 text-sm">
                Pour Lyon et toute la métropole lyonnaise (30 km),
                la livraison et l&apos;installation sont incluses sans surcoût.
              </p>
            </div>
          </section>

          {/* ── 3. Tableau comparatif ────────────────────────────────────── */}
          <section id="tableau" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Tableau comparatif des prix par type d&apos;événement
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Pour vous aider à budgéter rapidement, voici les prix du marché et nos
              tarifs lyonnais pour chaque type d&apos;événement.
              Les prix marché s&apos;entendent avec animateur et impressions incluses
              (segment intermédiaire), en région lyonnaise.
            </p>

            <div className="overflow-x-auto rounded border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold">Type d&apos;événement</th>
                    <th className="text-left px-5 py-4 font-semibold">Durée idéale</th>
                    <th className="text-left px-5 py-4 font-semibold">Prix marché</th>
                    <th className="text-left px-5 py-4 font-semibold text-gold-400">Nos tarifs Lyon</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={row.event} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-5 py-4 font-medium text-gray-900">{row.event}</td>
                      <td className="px-5 py-4 text-gray-600">{row.duration}</td>
                      <td className="px-5 py-4 text-gray-600">{row.market}</td>
                      <td className="px-5 py-4 font-bold text-gold-600">{row.lyon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3 italic">
              Tarifs TTC sauf mention HT. Prix marché : données indicatives segment intermédiaire, mars 2026.
            </p>
          </section>

          {/* CTA mid-article */}
          <div className="my-14 bg-gold-400/8 border border-gold-400/30 p-8 text-center">
            <p className="text-xs font-bold tracking-widest uppercase text-gold-400 mb-2">
              Devis gratuit en 24h
            </p>
            <p className="text-xl font-serif font-bold text-gray-900 mb-2">
              Vous avez une idée de date et de lieu ?
            </p>
            <p className="text-gray-600 text-sm mb-6">
              Recevez un devis détaillé, tout inclus, sans engagement.
              Nos tarifs sont transparents — ce que vous voyez est ce que vous payez.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/lyon/pas-cher/" className="btn-primary text-sm !px-8 !py-4">
                Voir les formules &amp; tarifs
              </Link>
              <Link href="/lyon/" className="btn-outline text-sm !px-8 !py-4">
                Découvrir nos prestations Lyon
              </Link>
            </div>
          </div>

          {/* ── 4. Prix Lyon ─────────────────────────────────────────────── */}
          <section id="tarifs-lyon" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Prix photobooth à Lyon : les tarifs locaux
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Lyon est une grande métropole avec un marché événementiel actif.
              Les tarifs pratiqués localement se situent dans la moyenne nationale,
              avec une légère prime sur les lieux de réception haut de gamme
              (Presqu&apos;île, châteaux du Beaujolais, grands hôtels du centre).
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Nos formules à Lyon se positionnent dans le segment intermédiaire,
              avec une politique de <strong className="text-gray-900">prix transparents</strong> :
              ce qui est affiché inclut systématiquement l&apos;animateur,
              les impressions illimitées, le cadre personnalisé et la galerie numérique.
              Aucun coût additionnel pour la livraison dans Lyon et la métropole (30 km).
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  name:  'Formule Essentiel',
                  price: '249 € TTC',
                  sub:   '2 à 3 heures',
                  href:  '/lyon/pas-cher/',
                },
                {
                  name:  'Formule Premium',
                  price: '449 € TTC',
                  sub:   '4 à 5 heures',
                  href:  '/lyon/pas-cher/',
                },
                {
                  name:  'Formule Corporate',
                  price: 'Sur devis HT',
                  sub:   'Sur mesure',
                  href:  '/lyon/entreprise/',
                },
              ].map((f) => (
                <Link
                  key={f.name}
                  href={f.href}
                  className="group border border-gray-200 p-5 hover:border-gold-400/50 transition-colors"
                >
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">{f.sub}</p>
                  <p className="font-serif font-bold text-gray-900 text-lg mb-1 group-hover:text-gold-500 transition-colors">
                    {f.name}
                  </p>
                  <p className="text-gold-500 font-bold">{f.price}</p>
                </Link>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed text-sm">
              Des tarifs spécifiques existent pour les mariages (+options vin d&apos;honneur) et
              les entreprises (facturation HT, bon de commande). Consultez nos pages dédiées
              pour le détail complet des prestations incluses.
            </p>
          </section>

          {/* ── 5. Pièges ────────────────────────────────────────────────── */}
          <section id="pieges" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Les pièges à éviter avec les offres &ldquo;pas chères&rdquo;
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Une offre à 150 € peut sembler attractive — jusqu&apos;à ce que vous lisiez
              les conditions. Voici les cinq pièges les plus courants dans les offres
              de location de photobooth à bas prix.
            </p>

            <div className="space-y-6">
              {[
                {
                  num:   '01',
                  title: 'Le photobooth livré sans animateur',
                  body:  "La borne est déposée chez vous, vous êtes livré à vous-même. En cas de bourrage papier, de panne ou d'invité perdu devant l'écran, personne ne gère. Résultat : vous passez votre soirée à jouer au technicien. Vérifiez toujours que le prestataire inclut un animateur présent du début à la fin.",
                },
                {
                  num:   '02',
                  title: "Les impressions comptées ou plafonnées",
                  body:  "Certaines offres affichent 'impressions comprises' mais plafonnent à 50 ou 100 photos pour la soirée. Au-delà, des frais s'appliquent au tarif par photo (parfois 1 à 2 € l'unité). Pour 100 invités sur 4 heures, vous atteignez facilement 200 à 300 impressions. Exigez 'impressions illimitées' par écrit.",
                },
                {
                  num:   '03',
                  title: "La qualité d'impression non précisée",
                  body:  "Il existe deux technologies d'impression : la thermique papier (images qui jaunissent en quelques mois, sensibles à la chaleur) et la sublimation thermique (qualité labo, résistante à l'eau et aux UV pendant des décennies). Le prix affiché ne fait pas toujours la distinction. Demandez explicitement.",
                },
                {
                  num:   '04',
                  title: 'Les frais cachés hors devis',
                  body:  "Frais de carburant, frais d'installation, surcoût heures de nuit, frais de parking, supplément week-end... Certains prestataires affichent un prix attractif et font apparaître ces lignes sur la facture finale. Demandez systématiquement un devis «tout inclus» mentionnant explicitement ce qui est compris.",
                },
                {
                  num:   '05',
                  title: "L'absence de SAV le jour J",
                  body:  "Votre événement est dans 2 heures, l'animateur n'arrive pas, la machine ne démarre pas. Avez-vous un numéro direct joignable ? Certains prestataires bon marché ne sont disponibles qu'en semaine ou ne répondent pas le samedi soir. Vérifiez l'existence d'une astreinte téléphonique le jour de l'événement.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-5 items-start">
                  <div className="w-10 h-10 bg-gray-900 text-gold-400 font-bold text-sm flex items-center
                                  justify-center shrink-0 font-mono">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 6. Rapport qualité/prix ──────────────────────────────────── */}
          <section id="rapport-qualite" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Comment obtenir le meilleur rapport qualité/prix ?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Le meilleur prix n&apos;est pas le plus bas — c&apos;est celui qui correspond
              au mieux à vos besoins, sans payer pour ce dont vous n&apos;avez pas besoin.
              Voici cinq réflexes pour faire le bon choix.
            </p>

            <ol className="space-y-8">
              {[
                {
                  step:  'Comparez le prix réel, tout inclus',
                  body:  "Avant de comparer deux devis, ramenez-les au même périmètre : animateur inclus ou non ? Impressions illimitées ou plafonnées ? Déplacement inclus ? Un devis à 200 € sans animateur et un devis à 300 € avec animateur ne se comparent pas directement — le second est souvent moins cher en coût réel.",
                },
                {
                  step:  "Adaptez la durée à votre événement",
                  body:  "Ne réservez pas 5 heures si votre soirée dure 3 heures. Mais attention à l'inverse : une durée trop courte frustre les invités qui n'ont pas eu le temps de passer. Règle : 1 heure de photobooth pour 25 à 30 invités, avec un minimum de 2 heures.",
                },
                {
                  step:  'Vérifiez les avis Google Business',
                  body:  "Les avis Google sont votre meilleure source d'information — surtout les plus récents. Regardez la note globale, la régularité dans le temps et la qualité des réponses du prestataire aux avis négatifs. Une note de 4,8 sur 80+ avis vaut mieux qu'un 5,0 sur 12 avis.",
                },
                {
                  step:  'Réservez suffisamment tôt',
                  body:  "Les meilleurs prestataires se réservent 2 à 4 mois à l'avance en haute saison (mai à septembre). Une réservation tardive vous expose à deux risques : indisponibilité de votre prestataire de premier choix, ou acceptation d'une offre de dernière minute à un tarif gonflé.",
                },
                {
                  step:  'Demandez à voir des exemples de cadres photo',
                  body:  "La qualité visuelle du cadre photo personnalisé est révélatrice du niveau de service. Un prestataire sérieux a des exemples à vous montrer immédiatement. Des cadres pixelisés, mal centrés ou génériques signalent une prestation médiocre — quel que soit le prix affiché.",
                },
              ].map((item, i) => (
                <li key={item.step} className="flex gap-5 items-start">
                  <div className="w-9 h-9 border-2 border-gold-400 text-gold-400 font-bold text-sm
                                  flex items-center justify-center shrink-0 rounded-full">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">{item.step}</p>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Conclusion */}
          <section className="mb-10">
            <div className="bg-gray-50 border border-gray-200 p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                En résumé : quel budget prévoir pour votre photobooth ?
              </h2>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Pour un petit événement de 2–3 heures (pot, goûter, cocktail) : comptez 180 à 300 € TTC.",
                  "Pour un anniversaire soirée ou un vin d'honneur seul (3–4h) : 250 à 450 € TTC.",
                  "Pour un mariage complet ou une soirée d'entreprise (5–6h) : 400 à 700 € TTC.",
                  "Pour un salon professionnel multi-jours ou un photobooth miroir premium : demandez un devis sur mesure.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="text-gold-400 font-bold shrink-0">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm leading-relaxed mt-5">
                Exigez toujours un devis détaillé mentionnant explicitement ce qui est inclus.
                Un bon prestataire n&apos;a rien à cacher dans ses conditions tarifaires.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function RelatedLinks() {
  return (
    <section className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">
            Articles et pages liés
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href:   '/lyon/pas-cher/',
                label:  'Nos formules photobooth Lyon — tarifs transparents',
                type:   'Page service',
              },
              {
                href:   '/lyon/',
                label:  'Location photobooth Lyon — toutes nos prestations',
                type:   'Hub local',
              },
              {
                href:   '/lyon/mariage/',
                label:  'Photobooth mariage Lyon — formules &amp; tarifs',
                type:   'Page service',
              },
              {
                href:   '/blog/photobooth-ouvert-ferme/',
                label:  'Photobooth ouvert ou fermé — lequel choisir ?',
                type:   'Guide',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-start gap-3 bg-white border border-gray-200 p-4
                           hover:border-gold-400/50 transition-colors"
              >
                <span className="text-gold-400 text-lg shrink-0 mt-0.5">→</span>
                <div>
                  <p className="text-xs text-gray-400 mb-1">{link.type}</p>
                  <p
                    className="text-sm font-semibold text-gray-900 group-hover:text-gold-600 transition-colors"
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaFinal() {
  return (
    <section className="bg-black section-padding">
      <div className="container-max">
        <div className="max-w-xl mx-auto text-center mb-12">
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Devis gratuit — réponse sous 24h
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3 mb-4">
            Prêt à réserver votre photobooth à Lyon ?
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Indiquez-nous la date, le lieu et le type d&apos;événement.
            Nous vous adressons un devis tout inclus, sans surprise.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPrixPage() {
  return (
    <>
      <SchemaOrg
        page="blog"
        article={ARTICLE}
        articleUrl={PAGE_URL}
        breadcrumbs={BREADCRUMBS}
      />

      <main>
        <ArticleHeader />
        <ArticleBody />
        <RelatedLinks />
        <CtaFinal />
      </main>
    </>
  )
}
