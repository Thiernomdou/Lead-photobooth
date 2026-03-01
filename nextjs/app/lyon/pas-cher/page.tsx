import Link                          from 'next/link'
import SchemaOrg, { OFFERS_PAS_CHER } from '@/components/seo/SchemaOrg'
import FAQAccordion                   from '@/components/sections/FAQAccordion'
import ContactForm                    from '@/components/forms/ContactForm'
import { METADATA_PRESETS }           from '@/lib/metadata'
import { type FaqItem }               from '@/lib/schemas'

const BASE     = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://photobooth-evenement.fr'
const PAGE_URL = `${BASE}/lyon/pas-cher/`

export const metadata = METADATA_PRESETS.pasCher

const BREADCRUMBS = [
  { name: 'Accueil',            item: `${BASE}/` },
  { name: 'Lyon',               item: `${BASE}/lyon/` },
  { name: 'Tarifs pas chers',   item: PAGE_URL },
]

// ─── Données ──────────────────────────────────────────────────────────────────

const STATS = [
  { value: 'Devis',  label: 'gratuit sous 24h'    },
  { value: '0 €',    label: 'de frais cachés'      },
  { value: '100%',   label: 'tarif personnalisé'   },
]

const FORMULES = [
  {
    name:        'Formule Essentiel',
    tag:         'Petite soirée',
    duration:    '2 à 3 heures',
    highlighted: false,
    features: [
      'Photobooth ouvert',
      'Animateur inclus',
      'Impressions illimitées 10×15 cm',
      'Accessoires photos',
      'Cadre personnalisé (prénom + date)',
      'Galerie numérique 48h',
    ],
    cta: 'Demander un devis Essentiel',
    ideal: "Goûter d'anniversaire, cocktail, pot de départ, séminaire court",
  },
  {
    name:        'Formule Premium',
    tag:         'Plus populaire',
    duration:    '4 à 5 heures',
    highlighted: true,
    features: [
      'Photobooth ouvert',
      'Animateur inclus',
      'Impressions illimitées 10×15 cm',
      'Accessoires photos premium (50+ props)',
      'Cadre personnalisé aux couleurs de votre événement',
      'Galerie numérique 30 jours',
      'QR code partage personnalisé',
      'Livre d\'or numérique',
    ],
    cta: 'Demander un devis Premium',
    ideal: "Mariage, anniversaire 30/40/50 ans, soirée d'entreprise, gala",
  },
  {
    name:        'Formule Corporate',
    tag:         'Sur mesure',
    duration:    'Sur mesure',
    highlighted: false,
    features: [
      'Photobooth ouvert ou miroir interactif',
      'Animateur ou technicien dédié',
      'Collecte d\'e-mails RGPD en option',
      'Branding complet (cadre + fond vinyle + interface)',
      'Galerie protégée par mot de passe',
      'Multi-jours pour salons et congrès',
      'Facturation HT avec TVA',
    ],
    cta: "Demander un devis Corporate",
    ideal: "Salon Eurexpo, séminaire annuel, lancement de produit, stand commercial",
  },
]

const INCLUS_ITEMS = [
  {
    label: 'Livraison & installation',
    desc:  "Livraison gratuite dans Lyon et la métropole lyonnaise (30 km). Montage et démontage compris.",
  },
  {
    label: 'Animateur professionnel',
    desc:  "Un animateur est présent du début à la fin : installation, animation, gestion technique et rangement.",
  },
  {
    label: 'Impressions illimitées',
    desc:  "Chaque photo est imprimée en 10 secondes par sublimation thermique — qualité labo, résistante à l'eau.",
  },
  {
    label: 'Personnalisation du cadre',
    desc:  "Cadre photo avec vos prénoms, date et thème. Bon à tirer validé 72h avant l'événement.",
  },
  {
    label: 'Accessoires photos inclus',
    desc:  "Malette de 50+ props : chapeaux, lunettes, panneaux, déguisements — adaptés à votre thème.",
  },
  {
    label: 'Galerie numérique',
    desc:  "Toutes les photos en haute résolution accessibles via un lien QR code personnalisé sous 48h.",
  },
]

const VARIABLES = [
  {
    factor: 'Durée de la prestation',
    detail: "La durée est le premier facteur de prix. De 2h (petite soirée) à 6h+ (mariage complet), chaque heure supplémentaire est facturée selon un tarif dégressif.",
  },
  {
    factor: 'Distance de livraison',
    detail: "La livraison est gratuite jusqu'à 30 km de Lyon. Au-delà, un forfait kilométrique de 0,50 € par km supplémentaire s'applique.",
  },
  {
    factor: 'Option fond vinyle personnalisé',
    detail: "Un fond en tissu standard est inclus. Un fond vinyle imprimé haute définition à vos couleurs (logotype, motifs, photo) est disponible en option.",
  },
  {
    factor: 'Type de photobooth',
    detail: "Le photobooth ouvert (standard) est le plus accessible. Le miroir interactif XXL ou la cabine fermée vintage font partie des options premium.",
  },
  {
    factor: 'Multi-jours ou salon',
    detail: "Les prestations sur plusieurs jours consécutifs (salons, congrès) bénéficient d'un tarif négocié — contactez-nous pour un devis sur mesure.",
  },
]


const FAQ_TARIFS: FaqItem[] = [
  {
    question: 'Quel est le prix d\'un photobooth à Lyon ?',
    answer:   "Nos tarifs varient selon la durée, les options et votre type d'événement. Toutes nos formules incluent livraison, animateur, impressions illimitées et personnalisation — sans frais cachés. Demandez votre devis gratuit et personnalisé sous 24h.",
  },
  {
    question: 'Y a-t-il des frais cachés dans vos tarifs ?',
    answer:   "Non. Nos tarifs incluent systématiquement : la livraison dans Lyon et la métropole, l'installation, l'animateur professionnel, les impressions illimitées, les accessoires photos, la personnalisation du cadre et la galerie numérique. Le seul coût additionnel possible est le forfait kilométrique au-delà de 30 km (0,50 € par km supplémentaire).",
  },
  {
    question: 'Quelle formule choisir pour un mariage ?',
    answer:   "Pour un vin d'honneur seul (2 à 3h), la formule Essentiel est adaptée jusqu'à 100 invités. Pour un mariage complet couvrant le vin d'honneur et la soirée (4 à 5h), nous recommandons la formule Premium. Demandez votre devis gratuit pour obtenir un tarif adapté à votre date et votre lieu.",
  },
  {
    question: 'Peut-on louer un photobooth pour 2 heures seulement ?',
    answer:   "Oui, notre formule Essentiel est disponible à partir de 2 heures. Elle est idéale pour les événements courts : goûter d'anniversaire, cocktail professionnel, pot de départ ou vernissage. La durée minimum de facturation est de 2 heures.",
  },
  {
    question: 'La livraison à Lyon est-elle incluse dans le tarif ?',
    answer:   "Oui, la livraison et l'installation sont incluses dans le prix pour tout événement situé dans Lyon intra-muros et la métropole lyonnaise (30 km autour de Lyon). Au-delà, un forfait de 0,50 € par km supplémentaire s'applique.",
  },
  {
    question: 'Y a-t-il un acompte à la réservation ?',
    answer:   "Oui, un acompte de 30 % du montant total TTC est demandé pour confirmer votre réservation. Le solde est réglé 7 jours avant l'événement. Modes de règlement acceptés : virement bancaire, chèque ou espèces.",
  },
]

// ─── Utilitaires ──────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-gold-400" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95" />
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-gold-400/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-gold-400/6 blur-3xl" />
      </div>

      {/* Fil d'Ariane */}
      <nav
        aria-label="Fil d'ariane"
        className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <ol className="flex items-center gap-2 text-xs text-gray-500">
          <li><Link href="/" className="hover:text-gold-400 transition-colors">Accueil</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/lyon/" className="hover:text-gold-400 transition-colors">Lyon</Link></li>
          <li aria-hidden>/</li>
          <li className="text-gold-400 font-medium" aria-current="page">Tarifs</li>
        </ol>
      </nav>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-16">
        <div className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/30 px-4 py-2 mb-10">
          <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Tarifs clairs &amp; sans surprise — Lyon &amp; métropole
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
          Location Photobooth{' '}
          <span className="text-gold-400">Pas Cher</span>
          <br />
          Lyon
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed">
          Nos tarifs transparents, sans surprise.
          Qualité professionnelle, animateur inclus,
          impressions illimitées — devis gratuit sous 24h.
        </p>

        <p className="text-sm text-gray-500 mb-10 tracking-wide">
          ✓ Zéro frais caché &nbsp;·&nbsp; ✓ Livraison incluse Lyon &amp; métropole &nbsp;·&nbsp; ✓ Devis gratuit sous 24h
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary text-base !px-10 !py-5">
            Obtenir mon devis gratuit
          </a>
          <a href="#formules" className="btn-outline text-base !px-10 !py-5">
            Voir les formules &amp; tarifs
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto border-t border-white/10 pt-10">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-gold-400">{value}</p>
              <p className="text-xs text-gray-500 mt-1 tracking-wide uppercase">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

function Formules() {
  return (
    <section id="formules" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Transparence totale
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-4">
            Nos formules photobooth Lyon et leurs tarifs
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Trois formules claires, tout inclus. Pas de lignes en petits caractères,
            pas de surprises le jour J.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {FORMULES.map((f) => (
            <div
              key={f.name}
              className={`relative flex flex-col border ${
                f.highlighted
                  ? 'border-gold-400 shadow-xl shadow-gold-400/10'
                  : 'border-gray-200'
              }`}
            >
              {f.highlighted && (
                <div className="bg-gold-400 text-black text-xs font-bold tracking-widest uppercase text-center py-2">
                  {f.tag}
                </div>
              )}
              {!f.highlighted && (
                <div className="bg-gray-50 text-gray-500 text-xs font-semibold tracking-widest uppercase text-center py-2">
                  {f.tag}
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">{f.name}</h3>
                <p className="text-sm text-gray-500 mb-6">{f.duration}</p>

                <div className="mb-6">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">À partir de</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {f.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckIcon />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-gray-400 italic mb-6">
                  Idéal pour : {f.ideal}
                </p>

                <a
                  href="/devis/"
                  className={f.highlighted ? 'btn-primary text-center text-sm' : 'btn-outline text-center text-sm'}
                >
                  {f.cta}
                </a>
                <p className="text-center text-xs text-gray-400 mt-3">
                  Tarif selon options — devis gratuit en 24h
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Besoin d&apos;une formule sur mesure ?{' '}
          <a href="/devis/" className="text-gold-500 font-semibold hover:underline">
            Contactez-nous
          </a>{' '}
          — devis gratuit en moins de 24h.
        </p>
      </div>
    </section>
  )
}

function Inclus() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
              Zéro frais caché
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-4">
              Ce qui est inclus dans nos prix photobooth Lyon
            </h2>
            <p className="text-gray-500">
              Tout ce qui compte est déjà dans le tarif affiché.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {INCLUS_ITEMS.map((item) => (
              <div key={item.label} className="bg-white border border-gray-200 p-6">
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{item.label}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gold-400/10 border border-gold-400/30 p-6">
            <p className="text-gray-700 leading-relaxed text-sm">
              <strong className="text-gray-900">Ce qui n&apos;est pas inclus :</strong>{' '}
              Le forfait kilométrique au-delà de 30 km (0,50&nbsp;€ par km supplémentaire),
              les fonds vinyles personnalisés sur impression spéciale (devis sur demande),
              et les options corporate avancées (collecte e-mails RGPD, galerie protégée,
              branding complet). Tout est annoncé en amont — jamais de surprise.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Variables() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
              Pour budgéter juste
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-4">
              Ce qui peut faire varier le prix
            </h2>
            <p className="text-gray-500">
              Comprendre les facteurs de prix vous permet de choisir
              la formule exactement adaptée à votre événement et votre budget.
            </p>
          </div>

          <dl className="space-y-6">
            {VARIABLES.map((v, i) => (
              <div key={v.factor} className="flex gap-6 items-start">
                <div className="w-8 h-8 bg-gold-400/10 border border-gold-400/30 flex items-center justify-center shrink-0 text-gold-400 font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 mb-1">{v.factor}</dt>
                  <dd className="text-gray-600 leading-relaxed text-sm">{v.detail}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function PasLowCost() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
              Notre engagement qualité
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-4">
              Photobooth pas cher ≠ photobooth low cost
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Chez nous, &ldquo;pas cher&rdquo; signifie un prix juste pour une prestation professionnelle,
              pas une prestation dégradée vendue au rabais. La différence est fondamentale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border border-gray-200 overflow-hidden">
            {/* Colonne gauche — Low cost */}
            <div className="p-8 bg-white border-r border-gray-200">
              <h3 className="font-serif font-bold text-gray-500 text-xl mb-6 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 text-xs">✗</span>
                Offres low cost du marché
              </h3>
              <ul className="space-y-4 text-sm text-gray-500">
                {[
                  "Imprimante thermique basse qualité (photos qui s'effacent)",
                  "Pas d'animateur — machine livrée sans accompagnement",
                  "Cadre photo générique non personnalisé",
                  "Matériel vieillissant, pannes fréquentes",
                  "SAV inexistant le jour de l'événement",
                  "Galerie numérique absente ou payante en option",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gray-300 mt-0.5 shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne droite — Notre offre */}
            <div className="p-8 bg-white">
              <h3 className="font-serif font-bold text-gray-900 text-xl mb-6 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-400 flex items-center justify-center text-white text-xs">✓</span>
                Notre photobooth — qualité professionnelle
              </h3>
              <ul className="space-y-4 text-sm text-gray-700">
                {[
                  "Imprimante à sublimation thermique — qualité labo, résistante à l'eau",
                  "Animateur professionnel présent du début à la fin",
                  "Cadre photo personnalisé à votre événement (inclus)",
                  "Matériel récent, testé et entretenu entre chaque événement",
                  "Astreinte téléphonique le jour J de 9h à minuit",
                  "Galerie numérique 30 jours incluse dans toutes les formules",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Devis gratuit en 24h — Sans engagement.
            </p>
            <a href="#contact" className="btn-primary">
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Temoignages() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max text-center max-w-2xl mx-auto">
        <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
          Vos avis
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-3 mb-5">
          Ils nous font confiance
        </h2>
        <p className="text-gray-500 leading-relaxed">
          Après chaque événement, nous invitons nos clients à partager leur expérience.
          Les premiers témoignages arrivent prochainement.
        </p>
      </div>
    </section>
  )
}

function MaillageInterne() {
  return (
    <section className="section-padding bg-gray-900">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">
            Nos formules par type d&apos;événement
          </h2>
          <p className="text-gray-400 mb-8 text-sm">
            Chaque événement a ses spécificités. Consultez nos pages dédiées
            pour des conseils et tarifs adaptés à votre occasion.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href:  '/lyon/mariage/',
                label: 'Photobooth Mariage Lyon',
                desc:  'Formules 3h et 5h — devis gratuit',
              },
              {
                href:  '/lyon/anniversaire/',
                label: 'Photobooth Anniversaire Lyon',
                desc:  'Formules 2h à 5h — devis gratuit',
              },
              {
                href:  '/lyon/entreprise/',
                label: 'Photobooth Entreprise Lyon',
                desc:  'Formules corporate — devis gratuit',
              },
              {
                href:  '/lyon/',
                label: 'Location photobooth Lyon',
                desc:  'Hub — tous nos services à Lyon',
              },
              {
                href:  '/blog/prix-location-photobooth/',
                label: 'Guide des prix photobooth 2026',
                desc:  'Article comparatif — tous tarifs',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-white/5 border border-white/10 p-4 hover:border-gold-400/50
                           hover:bg-white/10 transition-all"
              >
                <p className="font-semibold text-white text-sm group-hover:text-gold-400 transition-colors">
                  {link.label}
                </p>
                <p className="text-xs text-gray-500 mt-1">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BlogLink() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container-max">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1">
            <p className="text-xs text-gold-400 font-semibold tracking-widest uppercase mb-2">
              Aller plus loin
            </p>
            <p className="font-serif font-bold text-gray-900 text-xl">
              Prix location photobooth 2026 : le guide complet des tarifs
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Facteurs qui font varier le prix, tableau comparatif par événement,
              pièges à éviter avec les offres pas chères.
            </p>
          </div>
          <Link
            href="/blog/prix-location-photobooth/"
            className="btn-outline text-sm whitespace-nowrap shrink-0"
          >
            Lire le guide →
          </Link>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <FAQAccordion
      title="FAQ — Tarifs photobooth Lyon"
      subtitle="Toutes les réponses à vos questions sur nos prix et modalités de réservation."
      items={FAQ_TARIFS}
    />
  )
}

function Contact() {
  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Devis gratuit &amp; sans engagement
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-4">
            Obtenir votre devis photobooth Lyon gratuit
          </h2>
          <p className="text-gray-400">
            Dites-nous la date, le lieu et le nombre d&apos;invités.
            Nous vous adressons un devis détaillé et sans surprise sous 24h.
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

export default function PasCherLyonPage() {
  return (
    <>
      <SchemaOrg
        page="service"
        serviceName="Location Photobooth Pas Cher Lyon"
        serviceDescription="Location de photobooth à Lyon sans vous ruiner. Qualité professionnelle, animateur inclus, impressions illimitées, zéro frais caché. Devis gratuit sous 24h."
        serviceUrl={PAGE_URL}
        serviceOffers={OFFERS_PAS_CHER}
        faq={FAQ_TARIFS}
        breadcrumbs={BREADCRUMBS}
      />

      <main>
        <Hero />
        <Formules />
        <Inclus />
        <Variables />
        <PasLowCost />
        <Temoignages />
        <MaillageInterne />
        <BlogLink />
        <FAQ />
        <Contact />
      </main>
    </>
  )
}
