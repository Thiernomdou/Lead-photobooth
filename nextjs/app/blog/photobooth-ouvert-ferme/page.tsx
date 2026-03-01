import Link from 'next/link'
import SchemaOrg from '@/components/seo/SchemaOrg'
import ContactForm from '@/components/forms/ContactForm'
import { METADATA_PRESETS } from '@/lib/metadata'

const BASE     = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://photobooth-evenement.fr'
const PAGE_URL = `${BASE}/blog/photobooth-ouvert-ferme/`

export const metadata = METADATA_PRESETS.blogOuvertFerme

const BREADCRUMBS = [
  { name: 'Accueil',                    item: `${BASE}/` },
  { name: 'Blog',                       item: `${BASE}/blog/` },
  { name: 'Photobooth ouvert ou fermé', item: PAGE_URL },
]

const ARTICLE = {
  headline:      'Photobooth ouvert ou fermé : le guide pour faire le bon choix',
  description:   "Photobooth ouvert ou cabine fermée ? Avantages, inconvénients, tableau comparatif. Le guide pour faire le bon choix selon votre événement.",
  datePublished: '2026-02-27T10:00:00+01:00',
  dateModified:  '2026-02-27T10:00:00+01:00',
  image:         `${BASE}/images/blog/og-ouvert-ferme.jpg`,
  section:       "Guide d'achat",
  keywords:      'photobooth ouvert fermé, différence photobooth, choisir photobooth, photobooth mariage',
}

// ─── Données ──────────────────────────────────────────────────────────────────

const TOC = [
  { id: 'ouvert',      label: "Qu'est-ce qu'un photobooth ouvert ?"              },
  { id: 'ferme',       label: "Qu'est-ce qu'une cabine photobooth fermée ?"      },
  { id: 'miroir',      label: 'Photobooth miroir : la troisième option tendance' },
  { id: 'comparatif',  label: 'Tableau comparatif : ouvert vs fermé vs miroir'   },
  { id: 'quel-format', label: 'Quel format pour quel événement ?'                },
  { id: 'budget',      label: 'Notre recommandation selon votre budget'          },
]

const COMPARATIF_ROWS = [
  {
    critere:  'Capacité simultanée',
    ouvert:   '2 à 8 personnes',
    ferme:    '2 à 4 personnes',
    miroir:   '2 à 4 personnes',
  },
  {
    critere:  'Surface au sol',
    ouvert:   '3 à 5 m²',
    ferme:    '2 à 3 m²',
    miroir:   '1,5 à 2 m²',
  },
  {
    critere:  'Format photo',
    ouvert:   '10×15 cm',
    ferme:    'Bande 3 ou 4 images',
    miroir:   '10×15 cm',
  },
  {
    critere:  'Intimité',
    ouvert:   '☆☆ Faible',
    ferme:    '★★ Forte',
    miroir:   '☆☆ Faible',
  },
  {
    critere:  'Utilisation extérieure',
    ouvert:   '✓ Possible',
    ferme:    '✗ Déconseillée',
    miroir:   '✗ Déconseillée',
  },
  {
    critere:  'Impact visuel',
    ouvert:   'Fort',
    ferme:    'Modéré',
    miroir:   'Très fort',
  },
  {
    critere:  'Délai impression',
    ouvert:   '8 – 12 secondes',
    ferme:    '8 – 12 secondes',
    miroir:   '10 – 15 secondes',
  },
  {
    critere:  'Prix moyen 4 h (marché)',
    ouvert:   '250 – 450 €',
    ferme:    '350 – 550 €',
    miroir:   '500 – 800 €',
  },
]

// ─── Composants ──────────────────────────────────────────────────────────────

function Check() {
  return (
    <svg className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

function Cross() {
  return (
    <svg className="w-4 h-4 text-gray-300 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function ProsCons({
  pros,
  cons,
}: {
  pros: string[]
  cons: string[]
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-0 border border-gray-200 overflow-hidden mt-6 mb-8">
      <div className="p-6 bg-white border-r border-gray-200">
        <p className="text-xs font-bold tracking-widest uppercase text-gold-400 mb-4">
          Avantages
        </p>
        <ul className="space-y-3">
          {pros.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
              <Check />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-gray-50">
        <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
          Inconvénients
        </p>
        <ul className="space-y-3">
          {cons.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-gray-500">
              <Cross />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

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
              <li className="text-gold-400 font-medium" aria-current="page">Photobooth ouvert ou fermé</li>
            </ol>
          </nav>

          <span className="inline-block bg-gold-400/10 border border-gold-400/30 text-gold-400
                           text-xs font-bold tracking-widest uppercase px-3 py-1 mb-6">
            Guide d&apos;achat
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-[1.1] mb-6">
            Photobooth ouvert ou&nbsp;fermé&nbsp;: le guide pour faire le bon&nbsp;choix
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Avantages, inconvénients, tableau comparatif complet et recommandations
            par type d&apos;événement. Tout ce qu&apos;il faut savoir avant de réserver.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 border-t border-gray-200 pt-6">
            <span>
              Publié le{' '}
              <time dateTime="2026-02-27" className="text-gray-600 font-medium">
                27 février 2026
              </time>
            </span>
            <span aria-hidden>·</span>
            <span>Temps de lecture : <strong className="text-gray-600">6 min</strong></span>
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
          <nav aria-label="Table des matières" className="bg-gray-50 border border-gray-200 p-6 mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
              Dans cet article
            </p>
            <ol className="space-y-2">
              {TOC.map((item, i) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="text-gold-400 font-bold text-sm shrink-0 w-5">{i + 1}.</span>
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

          {/* Intro */}
          <p className="text-gray-600 leading-relaxed text-lg mb-14">
            Ouvrir ou fermer&nbsp;? C&apos;est souvent la première question que se posent
            les futurs mariés et organisateurs d&apos;événements lorsqu&apos;ils cherchent
            à louer un photobooth. Derrière ce choix apparemment anodin se cachent
            des différences concrètes&nbsp;: capacité d&apos;accueil, intimité, format de photo,
            impact visuel et budget. Ce guide vous aide à trancher en fonction de
            votre événement, de votre lieu et de vos invités.
          </p>

          {/* ── 1. Photobooth ouvert ───────────────────────────────────── */}
          <section id="ouvert" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-5">
              Qu&apos;est-ce qu&apos;un photobooth ouvert&nbsp;?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Le photobooth ouvert est une structure sans parois&nbsp;: un fond (tissu,
              vinyle ou sequins), un éclairage professionnel et un appareil photo
              ou une caméra sur trépied. Les invités posent directement devant
              le fond, en pleine lumière, visibles de tous. C&apos;est le format
              le plus répandu sur le marché et celui que nous proposons
              en formule standard à Lyon.
            </p>

            <p className="text-gray-600 leading-relaxed mb-2">
              Il peut accueillir de 2 à 8 personnes simultanément selon la largeur
              du fond choisi (standard&nbsp;: 2&nbsp;m, large&nbsp;: 3&nbsp;m). Le débit est
              élevé&nbsp;: une photo toutes les 30 à 60 secondes en moyenne,
              ce qui permet de faire passer l&apos;intégralité des invités
              sur un événement de 3 à 4 heures.
            </p>

            <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-1">
              Avantages du photobooth ouvert
            </h3>
            <h3 className="text-xl font-serif font-bold text-gray-400 mb-0 sr-only">
              Inconvénients du photobooth ouvert
            </h3>

            <ProsCons
              pros={[
                "Grande capacité : jusqu'à 8 personnes simultanément",
                "Débit élevé — idéal pour les événements de 80 à 300 invités",
                "Visible de loin : crée une animation visuelle dans la salle",
                "Compatible extérieur sous structure couverte",
                "Installation rapide (45 à 60 min)",
                "Format photo standard 10×15 cm — qualité labo",
                "Prix généralement plus accessible que la cabine fermée",
              ]}
              cons={[
                "Aucune intimité — les photos se prennent sous le regard des autres",
                "Nécessite un espace dégagé (fond + recul minimum 2 m)",
                "Certains invités timides peuvent hésiter à s'y aventurer seuls",
                "L'ambiance peut être moins ludique que l'expérience cabine",
              ]}
            />
          </section>

          {/* ── 2. Photobooth fermé ────────────────────────────────────── */}
          <section id="ferme" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-5">
              Qu&apos;est-ce qu&apos;une cabine photobooth fermée&nbsp;?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              La cabine photobooth fermée est l&apos;héritière directe des
              Photomaton des centres commerciaux&nbsp;: quatre parois,
              un rideau ou une porte, et un espace confiné où 2 à 4 personnes
              s&apos;installent pour une série de 3 ou 4 prises automatiques.
              Le résultat est une bande de photos en noir et blanc ou couleur,
              format nostalgique et immédiatement reconnaissable.
            </p>

            <p className="text-gray-600 leading-relaxed mb-2">
              L&apos;intimité de la cabine encourage les invités à se lâcher
              davantage&nbsp;: grimaces, poses décalées, confessions chuchotées
              à l&apos;objectif. C&apos;est l&apos;expérience la plus complice
              et souvent la plus amusante — mais elle a ses limites.
            </p>

            <h3 className="text-xl font-serif font-bold text-gray-900 mt-8 mb-1">
              Avantages de la cabine photobooth
            </h3>
            <h3 className="text-xl font-serif font-bold text-gray-400 mb-0 sr-only">
              Inconvénients de la cabine photobooth
            </h3>

            <ProsCons
              pros={[
                "Intimité totale — les invités se libèrent sans regard extérieur",
                "Format bande iconique — souvenir authentique et reconnaissable",
                "Expérience ludique et complice, idéale en duo ou trio",
                "Empreinte au sol compacte (2 à 3 m²)",
                "Look vintage très apprécié pour les mariages champêtres et rétro",
              ]}
              cons={[
                "Capacité limitée : 2 à 4 personnes maximum",
                "Débit faible — avec 100 invités, la file d'attente peut être longue",
                "Inadaptée aux photos de groupe (tablées entières, familles nombreuses)",
                "Déconseillée en extérieur (humidité, vent)",
                "Tarif de location généralement plus élevé que l'ouvert",
              ]}
            />
          </section>

          {/* ── 3. Miroir interactif ───────────────────────────────────── */}
          <section id="miroir" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-5">
              Photobooth miroir&nbsp;: la troisième option tendance
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              À mi-chemin entre le photobooth ouvert et une installation artistique,
              le miroir interactif (ou &ldquo;magic mirror&rdquo;) est un grand miroir
              de 180&nbsp;cm de hauteur doté d&apos;un écran tactile intégré,
              d&apos;effets visuels animés et d&apos;une imprimante intégrée.
              Les invités se voient en direct dans le miroir, interagissent
              avec des emojis et des cadres animés avant de valider leur prise.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Son impact visuel est très fort&nbsp;: le miroir est impressionnant
              dans une salle de réception et attire naturellement les invités.
              Il imprime des photos 10×15&nbsp;cm de qualité équivalente au photobooth ouvert,
              mais l&apos;expérience est nettement plus premium.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Le miroir interactif est particulièrement adapté aux{' '}
              <strong className="text-gray-900">mariages haut de gamme</strong>,
              aux <strong className="text-gray-900">galas d&apos;entreprise</strong> et
              aux <strong className="text-gray-900">lancements de produits</strong>
              où l&apos;image et le prestige de l&apos;animation comptent autant
              que la photo elle-même. Comptez 500 à 800&nbsp;€ pour 4 heures
              contre 250 à 450&nbsp;€ pour un photobooth ouvert équivalent.
            </p>
          </section>

          {/* ── 4. Tableau comparatif ─────────────────────────────────── */}
          <section id="comparatif" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Tableau comparatif&nbsp;: ouvert vs&nbsp;fermé vs&nbsp;miroir
            </h2>

            <div className="overflow-x-auto border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="text-left px-5 py-4 font-semibold text-gray-300 w-1/4">Critère</th>
                    <th className="text-left px-5 py-4 font-semibold text-gold-400">Ouvert</th>
                    <th className="text-left px-5 py-4 font-semibold">Fermé (cabine)</th>
                    <th className="text-left px-5 py-4 font-semibold">Miroir interactif</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {COMPARATIF_ROWS.map((row, i) => (
                    <tr key={row.critere} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-5 py-3 font-medium text-gray-700">{row.critere}</td>
                      <td className="px-5 py-3 text-gold-600 font-medium">{row.ouvert}</td>
                      <td className="px-5 py-3 text-gray-600">{row.ferme}</td>
                      <td className="px-5 py-3 text-gray-600">{row.miroir}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-400 mt-3 italic">
              Données indicatives — mars 2026. Prix marché segment intermédiaire, animateur inclus.
            </p>
          </section>

          {/* ── 5. Quel format pour quel événement ────────────────────── */}
          <section id="quel-format" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Quel format pour quel événement&nbsp;?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Il n&apos;existe pas de format universel — le bon choix dépend
              du nombre d&apos;invités, du type de lieu, de l&apos;ambiance
              souhaitée et du budget disponible.
            </p>

            {/* H3 Mariage */}
            <div className="mb-10">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-2xl" aria-hidden>💍</span>
                Pour un mariage
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                <strong className="text-gray-900">Le photobooth ouvert est notre recommandation principale</strong>{' '}
                pour les mariages. La raison est simple&nbsp;: un mariage, c&apos;est
                en moyenne 80 à 200 invités sur 6 à 8 heures. La capacité et le débit
                du photobooth ouvert permettent de faire passer tous les invités
                plusieurs fois sans file d&apos;attente interminable.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Le photobooth ouvert permet aussi les photos de groupe — tablées entières,
                familles trois générations, cercles d&apos;amis — qui sont souvent les
                plus belles et les plus partagées. La cabine fermée exclut
                mécaniquement ces moments collectifs.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Exception&nbsp;: si votre mariage est intime (moins de 50 invités),
                dans un lieu confidentiel et à l&apos;ambiance très chic ou rétro,
                la cabine fermée ajoute une touche de caractère que l&apos;ouvert
                ne peut pas reproduire. Le miroir interactif est une excellente option
                pour un mariage premium dans un château ou un hôtel 5 étoiles lyonnais.
              </p>
            </div>

            {/* H3 Anniversaire */}
            <div className="mb-10">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-2xl" aria-hidden>🎂</span>
                Pour un anniversaire
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                Le choix dépend ici du nombre d&apos;invités et du lieu&nbsp;:
              </p>

              <ul className="space-y-4 mb-4">
                {[
                  {
                    context: 'Petit anniversaire (20 à 50 invités)',
                    reco:    "La cabine fermée fonctionne très bien — l'atmosphère est plus intime et festive. Le format bande de photos est apprécié de toutes les générations.",
                  },
                  {
                    context: 'Anniversaire soirée (60 à 150 invités)',
                    reco:    "Le photobooth ouvert s'impose pour assurer un débit suffisant et permettre les photos de groupe (les amis de longue date adorent poser ensemble).",
                  },
                  {
                    context: "Anniversaire d'enfant",
                    reco:    "Le photobooth ouvert est impératif — les enfants adorent poser en groupes nombreux et en mouvement. La cabine peut créer des tensions avec les files d'attente.",
                  },
                ].map((item) => (
                  <li key={item.context} className="flex items-start gap-3">
                    <span className="text-gold-400 shrink-0 mt-0.5 font-bold">→</span>
                    <div>
                      <span className="font-semibold text-gray-900">{item.context}&nbsp;:</span>{' '}
                      <span className="text-gray-600">{item.reco}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* H3 Entreprise */}
            <div className="mb-2">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-2xl" aria-hidden>🏢</span>
                Pour un événement d&apos;entreprise
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                En contexte professionnel, le photobooth ouvert est la norme&nbsp;:
                il permet de&nbsp;brandiser le fond aux couleurs de l&apos;entreprise,
                d&apos;imprimer un cadre photo avec le logo, et de gérer
                un flux élevé de collaborateurs ou de clients sur un stand
                ou lors d&apos;un séminaire.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Le miroir interactif se distingue pour les événements à forte
                dimension image&nbsp;: galas de fin d&apos;année, lancements de produit,
                stands à Eurexpo Lyon ou au Palais des Congrès. Son aspect
                premium renforce la perception de la marque.
              </p>

              <p className="text-gray-600 leading-relaxed">
                La cabine fermée est rarement recommandée en entreprise&nbsp;:
                trop intimiste pour un contexte professionnel, débit insuffisant
                pour les événements de 100 personnes et plus.
              </p>
            </div>
          </section>

          {/* ── 6. Recommandation budget ───────────────────────────────── */}
          <section id="budget" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Notre recommandation selon votre budget
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Le format et le budget sont liés&nbsp;: voici notre grille de lecture
              pour faire le meilleur choix selon votre enveloppe.
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  range:   'Moins de 300 €',
                  format:  'Photobooth ouvert',
                  detail:  "Le seul format accessible à ce budget avec un animateur inclus et des impressions illimitées. Idéal pour les événements de 2 à 3 heures (cocktail, pot de départ, goûter d'anniversaire).",
                  badge:   'Essentiel',
                },
                {
                  range:   '300 – 500 €',
                  format:  'Photobooth ouvert avec options',
                  detail:  "La zone du meilleur rapport qualité/prix. Fond personnalisé, accessoires premium, galerie numérique, durée de 4 à 5 heures. Couvre la grande majorité des mariages et anniversaires.",
                  badge:   'Recommandé',
                },
                {
                  range:   '500 – 700 €',
                  format:  'Cabine fermée vintage ou photobooth ouvert premium',
                  detail:  "La cabine fermée devient accessible, avec animateur et impressions illimitées. Photobooth ouvert sur 5 à 6 heures pour les mariages longs. Idéal pour les événements à ambiance intimiste ou rétro.",
                  badge:   'Confort',
                },
                {
                  range:   'Au-delà de 700 €',
                  format:  'Miroir interactif ou photobooth 360°',
                  detail:  "Le segment premium pour les événements où l'impact et l'image comptent autant que la prestation. Galas, lancements de produit, mariages dans les châteaux et hôtels lyonnais haut de gamme.",
                  badge:   'Premium',
                },
              ].map((item) => (
                <div key={item.range} className="flex gap-5 border border-gray-200 p-5">
                  <div className="shrink-0 text-right w-28">
                    <p className="font-bold text-gray-900 text-sm">{item.range}</p>
                    <span className="text-xs text-gray-400">{item.badge}</span>
                  </div>
                  <div className="border-l border-gray-200 pl-5">
                    <p className="font-semibold text-gold-600 mb-1">{item.format}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA mid-section */}
            <div className="bg-gray-50 border border-gold-400/30 p-6 flex flex-col sm:flex-row
                            items-start sm:items-center gap-5">
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">
                  Nos formules photobooth à Lyon — photobooth ouvert inclus
                </p>
                <p className="text-sm text-gray-500">
                  Animateur, impressions illimitées, cadre personnalisé.
                  Dès 249&nbsp;€&nbsp;TTC.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link href="/lyon/" className="btn-primary text-sm">
                  Voir les formules →
                </Link>
                <Link href="/lyon/mariage/" className="btn-outline text-sm">
                  Formules mariage
                </Link>
              </div>
            </div>
          </section>

          {/* Encadré récap */}
          <div className="bg-gray-50 border border-gray-200 p-8">
            <p className="font-serif font-bold text-gray-900 text-xl mb-5">
              En résumé — que choisir&nbsp;?
            </p>
            <dl className="space-y-4">
              {[
                {
                  q: 'Mariage ou anniversaire 80 invités et +',
                  a: "→ Photobooth ouvert (débit, groupes, extérieur possible).",
                },
                {
                  q: 'Soirée intime moins de 50 invités, ambiance rétro',
                  a: "→ Cabine fermée (intimité, format bande iconique).",
                },
                {
                  q: "Gala d'entreprise ou mariage premium",
                  a: "→ Miroir interactif (impact visuel, interface animée).",
                },
                {
                  q: 'Doute sur le format ? Budget limité ?',
                  a: "→ Photobooth ouvert — c'est le format le plus polyvalent et le plus accessible.",
                },
              ].map((item) => (
                <div key={item.q} className="flex items-start gap-3">
                  <span className="text-gold-400 shrink-0 font-bold mt-0.5">▸</span>
                  <div className="text-sm">
                    <dt className="font-semibold text-gray-900 inline">{item.q}&nbsp;</dt>
                    <dd className="text-gray-600 inline">{item.a}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
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
            Pages et articles liés
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href:  '/lyon/',
                label: 'Location photobooth Lyon — formules &amp; tarifs',
                type:  'Hub local',
              },
              {
                href:  '/lyon/mariage/',
                label: 'Photobooth mariage Lyon — guide complet',
                type:  'Page service',
              },
              {
                href:  '/blog/prix-location-photobooth/',
                label: 'Prix location photobooth 2026 — combien ça coûte ?',
                type:  'Guide tarifaire',
              },
              {
                href:  '/blog/idees-animations-mariage-lyon/',
                label: '10 idées d\'animations originales pour un mariage à Lyon',
                type:  'Inspiration',
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
            Photobooth ouvert — Lyon &amp; métropole
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3 mb-4">
            Demandez votre devis photobooth à Lyon
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Photobooth ouvert avec animateur, impressions illimitées et cadre
            personnalisé. Devis gratuit et détaillé sous 24h.
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

export default function BlogOuvertFermePage() {
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
