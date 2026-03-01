import Link                          from 'next/link'
import SchemaOrg, { OFFERS_ANNIVERSAIRE } from '@/components/seo/SchemaOrg'
import FAQAccordion                  from '@/components/sections/FAQAccordion'
import ContactForm                   from '@/components/forms/ContactForm'
import { METADATA_PRESETS }          from '@/lib/metadata'
import { FAQ_LYON, type FaqItem }    from '@/lib/schemas'

const BASE     = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://photobooth-evenement.fr'
const PAGE_URL = `${BASE}/lyon/anniversaire/`

export const metadata = METADATA_PRESETS.anniversaire

const BREADCRUMBS = [
  { name: 'Accueil',      item: `${BASE}/` },
  { name: 'Lyon',         item: `${BASE}/lyon/` },
  { name: 'Anniversaire', item: PAGE_URL },
]

// ─── Données ─────────────────────────────────────────────────────────────────

const STATS = [
  { value: 'dès 2h', label: 'durée minimale'            },
  { value: '30 km',  label: 'zone de livraison gratuite' },
  { value: '24h',    label: 'devis gratuit garanti'      },
]

const FORMATS = [
  {
    h3:    'Anniversaire adulte — 18, 30, 40, 50 ans...',
    emoji: '🥂',
    body:  "De l'anniversaire surprise entre amis à la grande célébration en famille, le photobooth adulte fonctionne pour tous les styles. Cadre personnalisé avec le prénom et l'âge fêté, props festifs sélectionnés selon l'ambiance (glamour, rock, années 80, rétro...) — chaque groupe crée ses propres photos cultes. Pour les anniversaires ronds (30, 40, 50 ans), nos accessoires thématiques font systématiquement l'unanimité.",
    tags:  ['18 ans', '30 ans', '40 ans', '50 ans', '60 ans', 'Retraite'],
  },
  {
    h3:    'Anniversaire enfant et ado',
    emoji: '🎈',
    body:  "Le photobooth enfant, c'est l'attraction qui électrise un goûter d'anniversaire. Notre setup est adapté : le photobooth est réglé à hauteur des enfants, les props sont colorés et kid-friendly (couronnes, lunettes rondes, panneaux drôles), et notre animateur sait capter l'énergie des petits comme des ados. Les parents récupèrent leur photo, les enfants repartent avec un souvenir — tout le monde est ravi.",
    tags:  ['3 à 10 ans', '10 à 15 ans', '16 à 18 ans', 'Goûter', 'Soirée ado'],
  },
  {
    h3:    'Soirée privée et garden party',
    emoji: '🌿',
    body:  "Pool party en été, soirée déguisée en hiver, garden party au printemps — le photobooth ouvert s'adapte à tous les formats de soirée privée. Installé sous un barnum ou en intérieur, il crée un coin animation autonome que vos invités fréquentent librement tout au long de la soirée. La galerie partagée sous 48h permet à tous de retrouver leurs photos le lendemain matin.",
    tags:  ['Garden party', 'Pool party', 'Soirée déguisée', 'Soirée surprise', 'Barbecue'],
  },
]

const PLUS = [
  {
    title: "Cadre à votre image",
    desc:  "Prénom, âge, date, couleurs — le cadre photo est personnalisé pour chaque anniversaire. Bon à tirer validé 72h avant.",
    icon:  (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Props adaptés à votre thème",
    desc:  "50+ accessoires sélectionnés selon l'âge et le style de la soirée. Couronne à paillettes, sash «40 ans», lunettes géantes...",
    icon:  (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Un animateur qui met l'ambiance",
    desc:  "Pas juste un technicien. Notre animateur invite, encourage les timides et crée des photos de groupe mémorables.",
    icon:  (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Souvenir imprimé en 10 secondes",
    desc:  "Chaque invité repart avec une photo imprimée sur place — un souvenir tangible que ni Instagram ni TikTok ne remplacent.",
    icon:  (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 17H7a4 4 0 01-4-4v-4a4 4 0 014-4h10a4 4 0 014 4v4a4 4 0 01-4 4zm-4 0v4m0 0H9m4 0h4" />
      </svg>
    ),
  },
  {
    title: "Partage QR code instantané",
    desc:  "Chaque photo est aussi accessible en numérique via QR code. Vos invités la partagent sur les réseaux en quelques secondes.",
    icon:  (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    title: "Installation en moins de 45 min",
    desc:  "Nous arrivons 1h avant vos invités. Pas de camion encombrant, pas de chaos — le photobooth est prêt avant le premier sonnerie.",
    icon:  (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]


const FORMULES_TARIF = [
  {
    name:        'Mini',
    tag:         'Jusqu\'à 60 invités',
    duration:    '2 heures',
    highlighted: false,
    desc:        "Idéal pour un goûter d'anniversaire ou une petite fête entre proches. L'essentiel sans le superflu.",
    features: [
      'Photobooth ouvert + animateur',
      'Impressions illimitées 10×15 cm',
      'Cadre photo avec prénom et âge',
      'Galerie numérique 30 jours',
      'Livraison Lyon centre',
    ],
  },
  {
    name:        'Fête',
    tag:         'Jusqu\'à 120 invités',
    duration:    '3 heures',
    highlighted: true,
    desc:        "Notre formule anniversaire la plus populaire. 3 heures pour couvrir l'apéritif et le repas — tout le monde passe au photobooth.",
    features: [
      'Tout Mini +',
      'Accessoires premium sélectionnés',
      'Cadre personnalisé avec thème',
      'Partage QR code instantané',
      'Livraison Grand Lyon incluse',
    ],
  },
  {
    name:        'Grande Soirée',
    tag:         '120+ invités',
    duration:    '5 heures',
    highlighted: false,
    desc:        "Pour les grandes soirées et les anniversaires ronds. Fond personnalisé, accessoires premium, galerie numérique incluse.",
    features: [
      'Tout Fête +',
      'Fond vinyle personnalisé',
      'Accessoires premium (50+ props)',
      'Album photo imprimé',
      "Galerie numérique 30 jours",
    ],
  },
]

// FAQ sélectionnée : questions les plus pertinentes pour un anniversaire
const FAQ_DISPLAY: FaqItem[] = [
  FAQ_LYON[1], // Délai minimum pour réserver
  FAQ_LYON[5], // Personnalisation cadre photo
  FAQ_LYON[2], // Photos imprimées sur place
  FAQ_LYON[4], // Combien de personnes
  FAQ_LYON[6], // Extérieur
  FAQ_LYON[7], // Galerie numérique
  {
    question: "Le photobooth est-il adapté aux enfants et aux tout-petits ?",
    answer:   "Oui, notre photobooth peut être configuré pour les enfants : hauteur ajustée, props kid-friendly sélectionnés, interface simplifiée. Notre animateur est habitué à travailler avec les enfants et sait créer une atmosphère ludique qui les met à l'aise. Pour les anniversaires enfants, nous recommandons la formule Mini ou Fête (2h ou 3h), parfaitement calibrée pour un goûter.",
  },
  {
    question: "Peut-on organiser un anniversaire surprise avec le photobooth ?",
    answer:   "Absolument ! Pour les anniversaires surprise, nous coordonnons l'installation avec l'organisateur (arrivée 45 min avant l'invité d'honneur, installation discrète). Le photobooth est prêt et camouflé derrière un paravent ou dans une pièce adjacente jusqu'au moment de la révélation. Contactez-nous pour les détails logistiques de votre soirée.",
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
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gold-400/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gold-400/8 blur-3xl" />
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
          <li className="text-gold-400 font-medium" aria-current="page">Anniversaire</li>
        </ol>
      </nav>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-16">
        <div className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/30 px-4 py-2 mb-10">
          <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            18, 30, 40, 50 ans&hellip; Tous les âges à Lyon
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
          Photobooth{' '}
          <span className="text-gold-400">Anniversaire</span>
          <br />
          Lyon
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed">
          L&apos;animation qui met le feu à votre soirée.
          Cadre à votre prénom et votre âge, props festifs, animateur dédié —
          des souvenirs imprimés en 10 secondes.
        </p>

        <p className="text-sm text-gray-500 mb-10 tracking-wide">
          ✓ Enfants, adultes, tous les âges &nbsp;·&nbsp; ✓ Animateur inclus &nbsp;·&nbsp; ✓ Devis gratuit sous 24h
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary text-base !px-10 !py-5">
            Demander un devis anniversaire
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

function Pourquoi() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            L&apos;animation fétiche de Lyon
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-8">
            Photobooth pour anniversaire : pourquoi ça cartonne à Lyon ?
          </h2>

          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              Un anniversaire, c&apos;est une occasion qu&apos;on ne peut pas rater.
              Que ce soit les 18 ans de votre fils, vos 40 ans entre amis ou la retraite
              d&apos;un collègue, il faut une animation qui{' '}
              <strong className="text-gray-900">marque les esprits</strong> et crée des souvenirs.
              Le photobooth est devenu, en quelques années, la réponse évidente à cette question à Lyon.
            </p>
            <p>
              Pourquoi ? Parce qu&apos;il déclenche quelque chose d&apos;universel : la joie de
              se déguiser, de poser avec des accessoires absurdes, de rire avec ses amis devant
              un appareil photo. Adultes comme enfants, timides comme extravertis — tout le monde
              finit par passer au photobooth.{' '}
              <strong className="text-gray-900">
                C&apos;est l&apos;animation qui brise la glace et fédère les groupes
              </strong>{' '}
              comme aucune autre.
            </p>
            <p>
              Et contrairement à une piste de danse vide à 21h ou un quiz que la moitié de la
              salle baille, le photobooth fonctionne dès la première minute. Nos invités
              l&apos;utilisent spontanément — l&apos;animateur n&apos;a pas à pousser quiconque.
              En deux heures, une moyenne de{' '}
              <strong className="text-gray-900">3 à 5 passages par invité</strong> — et autant de
              souvenirs imprimés qu&apos;ils emportent chez eux.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Formats() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Un setup pour chaque fête
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-5">
            Nos formules anniversaire photobooth Lyon
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Du goûter d&apos;anniversaire à la grande soirée, nous adaptons
            le setup, les props et le cadre photo à chaque type d&apos;événement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FORMATS.map((f) => (
            <article
              key={f.h3}
              className="bg-white border border-gray-200 p-8
                         hover:border-gold-400 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-5xl mb-5 block" aria-hidden>{f.emoji}</span>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">{f.h3}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{f.body}</p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {f.tags.map((tag) => (
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

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary text-base !px-10 !py-5">
            Demander un devis pour mon anniversaire
          </a>
        </div>
      </div>
    </section>
  )
}

function Plus() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Notre différence
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-5">
            Les + de notre service photobooth anniversaire
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLUS.map((p) => (
            <div
              key={p.title}
              className="flex gap-4 p-6 border border-gray-200
                         hover:border-gold-400/50 transition-colors"
            >
              <div className="text-gold-400 shrink-0 mt-0.5">{p.icon}</div>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">{p.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Temoignages() {
  return (
    <section id="avis" className="section-padding bg-gray-50">
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

function Tarifs() {
  return (
    <section id="formules" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Transparent, sans surprise
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-5">
            Tarifs location photobooth anniversaire Lyon
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Livraison, installation, animateur et démontage inclus dans tous les tarifs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {FORMULES_TARIF.map((f) => (
            <div
              key={f.name}
              className={`relative p-8 border-2 flex flex-col ${
                f.highlighted
                  ? 'border-gold-400 shadow-2xl md:-mt-4 md:mb-4'
                  : 'border-gray-200 hover:border-gold-200 transition-colors'
              }`}
            >
              {f.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gold-400 text-black text-xs font-bold px-4 py-1 whitespace-nowrap">
                    LA PLUS POPULAIRE
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

        <p className="text-center text-sm text-gray-400 mt-10">
          Acompte 30 % à la réservation · Solde 7 jours avant la fête ·{' '}
          <Link href="/lyon/pas-cher/" className="text-gold-500 hover:underline font-medium">
            Voir tous nos tarifs détaillés →
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
              Guide tarifs
            </p>
            <p className="text-white text-xl font-serif font-bold">
              Combien coûte un photobooth en 2026 ?
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Tous les facteurs qui font varier le prix — durée, options, déplacement, saison.
            </p>
          </div>
          <Link
            href="/blog/prix-location-photobooth/"
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
              Gratuit &amp; sans engagement
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-6">
              Demandez votre devis photobooth anniversaire à Lyon
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Indiquez-nous la date, le lieu, l&apos;âge fêté et le nombre d&apos;invités.
              Nous vérifions la disponibilité et vous répondons sous 24h.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                ['⚡', 'Réponse et devis sous 24h'],
                ['🎂', 'Cadre personnalisé avec prénom et âge'],
                ['🎁', 'Accessoires sélectionnés selon votre thème'],
                ['🔒', 'Acompte 30 % uniquement à la confirmation'],
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
                  { href: '/lyon/entreprise/', label: 'Photobooth entreprise' },
                  { href: '/lyon/pas-cher/',  label: 'Tarifs pas cher' },
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

export default function AnniversaireLyonPage() {
  return (
    <>
      <SchemaOrg
        page="service"
        serviceName="Location Photobooth Anniversaire Lyon"
        serviceDescription="Location de photobooth pour anniversaire à Lyon. 18, 30, 40, 50 ans... Animateur, impressions illimitées, personnalisation inclus. Devis gratuit sous 24h."
        serviceUrl={PAGE_URL}
        serviceOffers={OFFERS_ANNIVERSAIRE}
        faq={FAQ_LYON}
        breadcrumbs={BREADCRUMBS}
      />

      <main>
        <Hero />
        <Pourquoi />
        <Formats />
        <Plus />
        <Temoignages />
        <Tarifs />
        <BlogLink />
        <FAQAccordion
          title="FAQ — Photobooth anniversaire Lyon"
          subtitle="Vos questions sur la location de photobooth pour anniversaire à Lyon."
          items={FAQ_DISPLAY}
        />
        <Contact />
      </main>
    </>
  )
}
