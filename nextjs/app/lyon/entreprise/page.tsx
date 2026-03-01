import Link                           from 'next/link'
import SchemaOrg, { OFFERS_ENTREPRISE } from '@/components/seo/SchemaOrg'
import FAQAccordion                   from '@/components/sections/FAQAccordion'
import ContactForm                    from '@/components/forms/ContactForm'
import { METADATA_PRESETS }           from '@/lib/metadata'
import { FAQ_ENTREPRISE, type FaqItem } from '@/lib/schemas'

const BASE     = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://photobooth-evenement.fr'
const PAGE_URL = `${BASE}/lyon/entreprise/`

export const metadata = METADATA_PRESETS.entreprise

const BREADCRUMBS = [
  { name: 'Accueil',    item: `${BASE}/` },
  { name: 'Lyon',       item: `${BASE}/lyon/` },
  { name: 'Entreprise', item: PAGE_URL },
]

// ─── Données ─────────────────────────────────────────────────────────────────

const STATS = [
  { value: 'RGPD',  label: 'collecte conforme'          },
  { value: '30 km', label: 'zone de livraison gratuite'  },
  { value: '24h',   label: 'devis gratuit garanti'       },
]

const APPLICATIONS = [
  {
    h3:    "Soirée d'entreprise et gala",
    emoji: '🥂',
    body:  "Soirée annuelle, gala de fin d'année, cérémonie de remise de prix — le photobooth brandé transforme votre événement RH en moment mémorable. Vos collaborateurs repartent avec une photo aux couleurs de votre entreprise : un souvenir qui renforce le sentiment d'appartenance bien après la soirée.",
    tags:  ["Gala annuel", "Soirée RH", "Remise de prix", "Fête de fin d'année"],
  },
  {
    h3:    'Séminaire et team building',
    emoji: '🤝',
    body:  "Le photobooth est l'animation team building la plus universelle qui soit : elle fonctionne pour tous les profils, sans exclure les introvertis ou les réfractaires aux activités sportives. Une photo de groupe devant le photobooth brandé, c'est un moment de cohésion authentique — et un contenu LinkedIn qui génère de l'engagement.",
    tags:  ['Séminaire', 'Team building', 'Cohésion équipe', 'Formation'],
  },
  {
    h3:    'Salon, stand et événement commercial',
    emoji: '🏢',
    body:  "Sur un stand à Eurexpo ou au Palais des Congrès de Lyon, le photobooth est un aimant à visiteurs. Il crée une animation visible de loin, incite les personnes à s'arrêter, et permet de collecter des emails qualifiés avec consentement RGPD. Disponible en configuration multi-jours pour les salons de plusieurs journées.",
    tags:  ['Eurexpo Lyon', 'Palais des Congrès', 'Stand salon', 'Collecte leads'],
  },
  {
    h3:    'Lancement de produit',
    emoji: '🚀',
    body:  "Un lancement de produit, c'est une opportunité marketing unique. Le photobooth brandé aux couleurs de votre nouveau produit génère du contenu utilisateur (UGC) naturel et immédiat. Cadre photo avec le nom du produit, fond thématique, hashtag intégré à l'écran de partage — chaque invité devient ambassadeur de votre lancement.",
    tags:  ['Lancement produit', 'Brand activation', 'Presse & influenceurs', 'UGC'],
  },
]

const PERSO_ITEMS = [
  {
    label: 'Cadre photo',
    desc:  "Couleurs, typographie, logo et slogan de votre marque. Bon à tirer validé 72h avant.",
  },
  {
    label: 'Fond vinyle',
    desc:  "Fond imprimé haute résolution aux couleurs de votre charte ou du thème de l'événement.",
  },
  {
    label: 'Interface tactile',
    desc:  "Écrans d'accueil et de remerciement personnalisés — votre identité visuelle sur tout le dispositif.",
  },
  {
    label: "Collecte d'emails RGPD",
    desc:  "Formulaire de consentement intégré avant chaque prise de vue. Export CSV sous 48h.",
  },
  {
    label: 'Galerie sécurisée',
    desc:  "Galerie protégée par mot de passe, accessible uniquement à vos collaborateurs ou clients.",
  },
  {
    label: 'Bon de commande & facturation HT',
    desc:  "Devis, bon de commande signé et facture avec TVA pour vos services comptables.",
  },
]

const ROI_ITEMS = [
  {
    metric: '×3',
    label:  'portée organique',
    desc:   "Chaque photo partagée sur LinkedIn ou Instagram étend la portée de votre événement bien au-delà des personnes présentes dans la salle.",
  },
  {
    metric: '100%',
    label:  'opt-in RGPD',
    desc:   "Les emails collectés le sont avec consentement explicite — des leads qualifiés directement intégrables à votre CRM ou Mailchimp.",
  },
  {
    metric: '87%',
    label:  'mémorabilité',
    desc:   "Les événements avec animation photo sont davantage cités par les collaborateurs lors des enquêtes de satisfaction RH.",
  },
  {
    metric: '0 €',
    label:  'contenu photo supplémentaire',
    desc:   "Votre photobooth génère des centaines de photos brandées sans budget photo additionnel — un actif réutilisable pour vos réseaux et vos présentations.",
  },
  {
    metric: '50+',
    label:  'emails collectés/heure',
    desc:   "Sur un stand salon actif, notre module de collecte permet de constituer une base de prospects qualifiés à un coût par lead imbattable.",
  },
  {
    metric: '48h',
    label:  'livraison des données',
    desc:   "Fichier CSV des emails collectés, galerie complète des photos et statistiques de l'événement livrés sous 48h après la prestation.",
  },
]


const FORMULES = [
  {
    name:        'Séminaire',
    tag:         '50 à 150 personnes',
    duration:    '4 heures',
    highlighted: false,
    desc:        "Pour les séminaires, journées de formation et soirées d'équipe jusqu'à 150 collaborateurs.",
    features: [
      'Photobooth ouvert + animateur dédié',
      'Branding : cadre aux couleurs de votre marque',
      'Impressions illimitées 10×15 cm',
      'Galerie sécurisée par mot de passe',
      'Facturation professionnelle avec TVA',
      'Bon de commande sur demande',
    ],
  },
  {
    name:        'Corporate',
    tag:         '150 à 400 personnes',
    duration:    '5 à 6 heures',
    highlighted: true,
    desc:        "Notre formule entreprise la plus complète : charte graphique intégrale, collecte emails et galerie brandée.",
    features: [
      'Tout Séminaire +',
      'Fond vinyle aux couleurs de votre marque',
      'Interface tactile personnalisée',
      "Collecte d'emails RGPD (export CSV)",
      'Galerie sécurisée brandée',
      'Statistiques post-événement',
    ],
  },
  {
    name:        'Excellence / Salon',
    tag:         'Stands & grands événements',
    duration:    'Sur mesure',
    highlighted: false,
    desc:        "Pour les stands multi-jours, salons professionnels et événements corporate premium avec miroir interactif.",
    features: [
      'Miroir interactif ou photobooth fermé',
      'Configuration multi-jours',
      'Double animateur disponible',
      'Collecte leads haute capacité',
      'Rapport analytics complet',
      'Coordination logistique stand',
    ],
  },
]

const FAQ_DISPLAY: FaqItem[] = [
  ...FAQ_ENTREPRISE,
  {
    question: "Le photobooth peut-il fonctionner sur plusieurs jours pour un salon ?",
    answer:   "Oui, notre formule Excellence / Salon est spécifiquement conçue pour les participations multi-jours à Eurexpo Lyon ou au Palais des Congrès. Le matériel reste en place entre les journées, l'animateur intervient chaque jour. Un devis spécifique est établi selon le nombre de jours et le volume attendu.",
  },
  {
    question: "Quel est le délai pour recevoir un devis et un bon de commande ?",
    answer:   "Nous adressons le devis sous 24 heures ouvrées à réception de votre demande. Le bon de commande est émis dans les 48 heures suivant la validation du devis. Pour les commandes urgentes (événement dans moins de 2 semaines), contactez-nous directement par téléphone pour un traitement prioritaire.",
  },
]

// ─── Sous-composants ──────────────────────────────────────────────────────────

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
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full bg-gold-400/4 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-gold-400/6 blur-3xl" />
      </div>

      <nav
        aria-label="Fil d'ariane"
        className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <ol className="flex items-center gap-2 text-xs text-gray-500">
          <li><Link href="/" className="hover:text-gold-400 transition-colors">Accueil</Link></li>
          <li aria-hidden>/</li>
          <li><Link href="/lyon/" className="hover:text-gold-400 transition-colors">Lyon</Link></li>
          <li aria-hidden>/</li>
          <li className="text-gold-400 font-medium" aria-current="page">Entreprise</li>
        </ol>
      </nav>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-16">
        <div className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/30 px-4 py-2 mb-10">
          <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Corporate &amp; B2B — Séminaires, galas, salons à Lyon
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
          Photobooth{' '}
          <span className="text-gold-400">Entreprise</span>
          <br />
          Lyon
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed">
          L&apos;animation corporate qui marque les esprits.
          Branding complet aux couleurs de votre marque, collecte d&apos;e-mails RGPD,
          facturation professionnelle avec TVA.
        </p>

        <p className="text-sm text-gray-500 mb-10 tracking-wide">
          ✓ Bon de commande &amp; facture TVA &nbsp;·&nbsp; ✓ Branding aux couleurs de votre marque &nbsp;·&nbsp; ✓ Devis sous 24h
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary text-base !px-10 !py-5">
            Demander un devis entreprise
          </a>
          <a href="#formules" className="btn-outline text-base !px-10 !py-5">
            Voir les formules
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

function MarketingTool() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Au-delà de l&apos;animation
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-8">
            Le photobooth, outil marketing événementiel incontournable
          </h2>

          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              Pendant longtemps, le photobooth était perçu comme une animation
              réservée aux mariages et soirées privées. Cette époque est révolue.
              Aujourd&apos;hui, les équipes marketing et RH des grandes entreprises lyonnaises
              l&apos;ont intégré à leur arsenal événementiel —{' '}
              <strong className="text-gray-900">et pour de bonnes raisons</strong>.
            </p>
            <p>
              Un photobooth brandé aux couleurs de votre entreprise est une machine
              à créer du contenu. Chaque photo imprimée devient un support de
              communication que le collaborateur ou le client emporte chez lui.
              Chaque partage sur LinkedIn ou Instagram amplifie votre message au-delà
              de la salle. Et avec notre module de{' '}
              <strong className="text-gray-900">collecte d&apos;e-mails RGPD</strong>,
              chaque participant devient un contact qualifié dans votre CRM.
            </p>
            <p>
              À Lyon, nous travaillons régulièrement avec des équipes RH et marketing
              de grands groupes industriels, de PME en croissance et de start-up pour
              leurs soirées de gala, séminaires, team buildings et participations à
              Eurexpo. Notre engagement : rigueur, ponctualité et discrétion sur chaque événement professionnel.
            </p>
          </div>

          {/* Logos de confiance textuels */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-5">
              Lieux où nous intervenons régulièrement
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                'Eurexpo Lyon',
                'Palais des Congrès de Lyon',
                'Sofitel Lyon Bellecour',
                'Radisson Blu Lyon',
                'Double Tree Hilton',
                'Hôtel des Marronniers',
                'Lyon Convention Centre',
                'Domaine de Lacroix-Laval',
              ].map((lieu) => (
                <span
                  key={lieu}
                  className="text-sm text-gray-600 border border-gray-200 px-3 py-1.5"
                >
                  {lieu}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Applications() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Séminaires · Galas · Salons · Lancements
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-5">
            Nos applications entreprise à Lyon
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Le photobooth corporate s&apos;adapte à tous les formats d&apos;événements professionnels,
            du séminaire interne au grand salon national.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {APPLICATIONS.map((a) => (
            <article
              key={a.h3}
              className="bg-white border border-gray-200 p-8
                         hover:border-gold-400 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-4xl mb-5 block" aria-hidden>{a.emoji}</span>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">{a.h3}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{a.body}</p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {a.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gold-400/10 text-gold-600 border border-gold-400/20 px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Personnalisation() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          {/* Texte gauche */}
          <div>
            <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
              Votre identité, notre priorité
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-6">
              Personnalisation aux couleurs de votre marque
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                La différence entre un photobooth grand public et un photobooth corporate,
                c&apos;est l&apos;intégration à votre identité visuelle. Nous ne superposons
                pas simplement votre logo sur un cadre générique —{' '}
                <strong className="text-gray-900">nous concevons un dispositif complet</strong>{' '}
                cohérent avec votre charte graphique, de l&apos;écran d&apos;accueil
                à l&apos;impression finale.
              </p>
              <p>
                Un bon à tirer (BAT) est soumis à votre équipe communication
                <strong className="text-gray-900"> au moins 72h avant l&apos;événement</strong>.
                Aucune surprise le jour J — le dispositif est exactement conforme
                à ce que vous avez validé.
              </p>
            </div>
            <a href="#contact" className="btn-primary mt-8 inline-flex">
              Demander un devis branding
            </a>
          </div>

          {/* Checklist droite */}
          <div className="space-y-4">
            {PERSO_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex gap-4 p-5 border border-gray-200 hover:border-gold-400/50 transition-colors"
              >
                <div className="w-8 h-8 bg-gold-400 text-black flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                  <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ROI() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Impact mesurable
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-5">
            ROI et bénéfices marketing du photobooth
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contrairement à la plupart des animations événementielles, le photobooth
            génère des résultats quantifiables au-delà du jour J.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ROI_ITEMS.map((item) => (
            <div
              key={item.label}
              className="bg-white border border-gray-200 p-8
                         hover:border-gold-400 hover:shadow-md transition-all duration-300"
            >
              <p className="text-4xl font-serif font-bold text-gold-400 mb-1">{item.metric}</p>
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                {item.label}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Temoignages() {
  return (
    <section id="avis" className="section-padding bg-white">
      <div className="container-max text-center max-w-2xl mx-auto">
        <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
          Références entreprise
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-3 mb-5">
          Ils nous font confiance
        </h2>
        <p className="text-gray-500 leading-relaxed">
          Après chaque événement professionnel, nous invitons nos clients à partager leur expérience.
          Les premiers témoignages arrivent prochainement.
        </p>
      </div>
    </section>
  )
}

function Formules() {
  return (
    <section id="formules" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Tarifs professionnels, transparents
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-5">
            Formules et tarifs photobooth entreprise Lyon
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tous les tarifs sont exprimés <strong>hors taxes (HT)</strong>.
            Facture avec TVA fournie. Bon de commande disponible sur demande.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {FORMULES.map((f) => (
            <div
              key={f.name}
              className={`relative p-8 border-2 flex flex-col ${
                f.highlighted
                  ? 'border-gold-400 shadow-2xl md:-mt-4 md:mb-4 bg-white'
                  : 'border-gray-200 bg-white hover:border-gold-200 transition-colors'
              }`}
            >
              {f.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gold-400 text-black text-xs font-bold px-4 py-1 whitespace-nowrap">
                    LA PLUS DEMANDÉE
                  </span>
                </div>
              )}

              <div className="mb-1">
                <span className="text-xs font-semibold text-gold-500 uppercase tracking-widest">
                  {f.tag}
                </span>
              </div>

              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                Formule {f.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{f.desc}</p>

              <div className="mb-1">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">À partir de</p>
              </div>
              <p className="text-sm text-gold-500 font-medium mb-6">{f.duration}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {f.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckIcon />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="/devis/"
                className={`${f.highlighted ? 'btn-primary' : 'btn-outline'} w-full text-center`}
              >
                Demander un devis
              </a>
              <p className="text-center text-xs text-gray-400 mt-3">
                Tarif selon options — devis gratuit en 24h
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-white border border-gray-200 p-6 text-sm text-gray-600">
          <p>
            <span className="font-semibold text-gray-900">Process de commande entreprise : </span>
            Demande de devis → devis sous 24h → bon de commande signé → acompte 30 % →
            BAT cadre photo 72h avant → prestation → solde → facture avec TVA sous 48h.
          </p>
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          <Link href="/lyon/pas-cher/" className="text-gold-500 hover:underline font-medium">
            Voir nos formules pour particuliers →
          </Link>
        </p>
      </div>
    </section>
  )
}

function BlogLink() {
  return (
    <aside className="bg-gray-900 py-12">
      <div className="container-max">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 max-w-4xl mx-auto">
          <div>
            <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-2">
              Guide technique
            </p>
            <p className="text-white text-xl font-serif font-bold">
              Photobooth ouvert ou fermé : lequel choisir pour votre événement ?
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Pour un stand salon ou un gala, quel format est le plus adapté ?
              Le guide comparatif complet.
            </p>
          </div>
          <Link
            href="/blog/photobooth-ouvert-ferme/"
            className="btn-outline shrink-0 !border-gold-400/50 !text-gold-400"
          >
            Lire le guide →
          </Link>
        </div>
      </div>
    </aside>
  )
}

function Contact() {
  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
              Devis professionnel — sous 24h
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-6">
              Demandez votre devis photobooth entreprise à Lyon
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Indiquez-nous la date, le lieu, le nombre de participants et vos exigences
              de branding. Devis et bon de commande sous 24h ouvrées.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                ['⚡', 'Devis sous 24h ouvrées'],
                ['📄', 'Bon de commande et facture TVA'],
                ['🎨', 'BAT cadre photo validé avant l\'événement'],
                ['📊', 'Rapport statistiques post-événement'],
              ].map(([icon, text]) => (
                <li key={String(text)} className="flex items-center gap-3 text-gray-300">
                  <span className="text-xl" aria-hidden>{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:+33665420793"
              className="inline-flex items-center gap-3 text-gold-400 font-semibold text-lg hover:text-gold-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              06 65 42 07 93
            </a>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">
                Autres prestations Lyon
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { href: '/lyon/',           label: 'Hub Lyon' },
                  { href: '/lyon/mariage/',   label: 'Photobooth mariage' },
                  { href: '/lyon/anniversaire/', label: 'Photobooth anniversaire' },
                  { href: '/lyon/pas-cher/',  label: 'Tarifs détaillés' },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-xs border border-white/20 text-gray-400 px-3 py-1.5
                               hover:border-gold-400/50 hover:text-gold-400 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function EntrepriseLyonPage() {
  return (
    <>
      <SchemaOrg
        page="service"
        serviceName="Location Photobooth Entreprise Lyon"
        serviceDescription="Location de photobooth pour événements d'entreprise à Lyon. Séminaires, soirées corporate, salons. Personnalisation aux couleurs de votre marque."
        serviceUrl={PAGE_URL}
        serviceOffers={OFFERS_ENTREPRISE}
        faq={FAQ_ENTREPRISE}
        breadcrumbs={BREADCRUMBS}
      />

      <main>
        <Hero />
        <MarketingTool />
        <Applications />
        <Personnalisation />
        <ROI />
        <Temoignages />
        <Formules />
        <BlogLink />
        <FAQAccordion
          title="FAQ — Photobooth événementiel entreprise Lyon"
          subtitle="Vos questions sur la location de photobooth pour événements professionnels."
          items={FAQ_DISPLAY}
        />
        <Contact />
      </main>
    </>
  )
}
