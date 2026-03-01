import Link                       from 'next/link'
import SchemaOrg, { OFFERS_MARIAGE } from '@/components/seo/SchemaOrg'
import FAQAccordion               from '@/components/sections/FAQAccordion'
import ContactForm                from '@/components/forms/ContactForm'
import { METADATA_PRESETS }       from '@/lib/metadata'
import { FAQ_MARIAGE, type FaqItem } from '@/lib/schemas'

const BASE     = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://location-photobooth.fr'
const PAGE_URL = `${BASE}/lyon/mariage/`

export const metadata = METADATA_PRESETS.mariage

const BREADCRUMBS = [
  { name: 'Accueil', item: `${BASE}/` },
  { name: 'Lyon',    item: `${BASE}/lyon/` },
  { name: 'Mariage', item: PAGE_URL },
]

// ─── Données ─────────────────────────────────────────────────────────────────

const STATS = [
  { value: '72h',   label: 'bon à tirer validé'        },
  { value: '30 km', label: 'zone de livraison gratuite' },
  { value: '24h',   label: 'devis gratuit garanti'      },
]

const INCLUS = [
  {
    h3:   'Impressions photos illimitées',
    body: "Notre imprimante à sublimation thermique produit une photo 10×15 cm en moins de 10 secondes — et c'est illimité pendant toute la durée de la prestation. Pas de compteur, pas de surprise. L'encre sublimation garantit une qualité labo, résistante à l'eau et aux UV, qui traverse les décennies.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 17H7a4 4 0 01-4-4v-4a4 4 0 014-4h10a4 4 0 014 4v4a4 4 0 01-4 4zm-4 0v4m0 0H9m4 0h4" />
      </svg>
    ),
  },
  {
    h3:   'Accessoires et props inclus',
    body: "Notre malette compte plus de 50 props soigneusement entretenus : couronnes de fleurs, cadres en carton, panneaux Just Married, chapeaux, moustaches, lunettes fantaisie... Pour chaque mariage, nous sélectionnons les accessoires les plus adaptés à votre thème et les disposons sur une table dédiée.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    h3:   'Fond personnalisé aux couleurs de votre mariage',
    body: "Un fond en tissu ou vinyle assorti à vos couleurs transforme chaque photo en souvenir élégant. Sequins dorés pour un mariage glamour, fond floral pour un mariage champêtre, blanc ivoire pour un mariage épuré... Nous proposons un catalogue de fonds, ou commandons le vôtre sur mesure — bon à tirer validé ensemble avant le grand jour.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    h3:   'Technicien dédié sur place',
    body: "Un animateur professionnel est présent du début à la fin : installation 1h avant vos invités, accueil chaleureux, mise en confiance des timides, gestion technique, recharge de papier et d'encre en silence, rangement discret après la prestation. Il ne disparaît jamais — vous n'avez pas à vous en préoccuper.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
]

const LIEUX = [
  { name: 'Villa Florentine',              ville: 'Lyon 5e',                  style: 'Hôtel de charme, vue panoramique Fourvière' },
  { name: 'Sofitel Lyon Bellecour',        ville: 'Lyon 2e',                  style: 'Palace 5★ en cœur de ville' },
  { name: 'Château de Bagnols',           ville: 'Beaujolais',               style: 'Château médiéval classé Monument Historique' },
  { name: 'Domaine de Valpré',            ville: 'Écully',                   style: 'Domaine de verdure à 10 min de Lyon' },
  { name: 'Château de la Tour de Salvagny', ville: 'La Tour-de-Salvagny',   style: 'Château du XVIIe avec parc et dépendances' },
  { name: 'Abbaye de Collonges',          ville: 'Collonges-au-Mont-d\'Or', style: 'Cadre historique au bord de Saône' },
  { name: 'Espace Tête d\'Or',            ville: 'Lyon 6e',                  style: 'Salles modulables face au parc' },
  { name: 'Domaine du Grand Montmirail',  ville: 'Drôme Provençale',        style: 'Domaine viticole avec mas provençal' },
]


const FORMULES = [
  {
    name:        'Essentiel Mariage',
    tag:         'Vin d\'honneur',
    duration:    '3 heures',
    price:       '299 €',
    suffix:      'TTC',
    highlighted: false,
    desc:        "Idéal pour un vin d'honneur de 60 à 120 personnes. L'animateur installe le photobooth 1h avant vos invités et le range en fin de cocktail.",
    features: [
      'Photobooth ouvert + animateur',
      'Impressions illimitées 10×15 cm',
      'Cadre photo personnalisé (prénom, date)',
      'Accessoires sélectionnés mariage',
      'Galerie numérique 30 jours',
      'Livraison Lyon + agglomération',
    ],
  },
  {
    name:        'Premium Mariage',
    tag:         'Vin d\'honneur + soirée',
    duration:    '5 heures',
    price:       '449 €',
    suffix:      'TTC',
    highlighted: true,
    desc:        'Notre formule mariage la plus populaire. Couvre vin d\'honneur et début de soirée dansante, avec fond personnalisé aux couleurs du mariage.',
    features: [
      'Tout Essentiel +',
      'Fond vinyle aux couleurs du mariage',
      'Accessoires premium (50+ props)',
      'Album photo imprimé',
      'Partage QR code instantané',
      'BAT personnalisé à valider 72h avant',
    ],
  },
  {
    name:        'Excellence Mariage',
    tag:         'Mariage premium',
    duration:    'Sur mesure',
    price:       'Sur devis',
    suffix:      '',
    highlighted: false,
    desc:        "Pour les mariages premium et les galas. Miroir interactif, double animateur, personnalisation complète — un dispositif haut de gamme à la hauteur du lieu.",
    features: [
      'Miroir interactif ou cabine fermée',
      'Double animateur si besoin',
      'Branding complet (fond + interface)',
      'Vidéo récapitulative de la soirée',
      "Galerie numérique 60 jours",
      'Coordination avec votre wedding planner',
    ],
  },
]

const ETAPES = [
  {
    num:   '01',
    title: 'Envoyez votre demande',
    body:  "Remplissez le formulaire avec la date, le lieu de mariage et le nombre d'invités. Nous répondons sous 24h avec un devis personnalisé et une vérification de disponibilité.",
  },
  {
    num:   '02',
    title: 'Validez et bloquez votre date',
    body:  "À réception du devis signé et d'un acompte de 30 %, votre date est définitivement réservée. Le solde est dû 7 jours avant le mariage.",
  },
  {
    num:   '03',
    title: 'Validez le bon à tirer',
    body:  "72h avant votre mariage, nous vous envoyons le BAT du cadre photo personnalisé (prénoms, date, couleurs). Vous validez, on imprime — aucune surprise le jour J.",
  },
  {
    num:   '04',
    title: 'Profitez — on gère tout',
    body:  "Le jour J, notre animateur arrive 1h avant vos invités. Installation, animation, rechargement, rangement — vous ne pensez à rien. Galerie en ligne sous 48h.",
  },
]

// FAQ étendue : 4 questions schema + 3 questions complémentaires
const FAQ_DISPLAY: FaqItem[] = [
  ...FAQ_MARIAGE,
  {
    question: "Combien d'invités peuvent utiliser le photobooth simultanément ?",
    answer:   "Notre photobooth ouvert accueille confortablement 4 à 8 personnes sur une même photo — idéal pour les groupes familiaux et les tables d'amis. Sur la formule Excellence avec miroir interactif, jusqu'à 10 personnes peuvent poser ensemble.",
  },
  {
    question: 'Le photobooth peut-il fonctionner en extérieur pour un vin d\'honneur garden party ?',
    answer:   "Oui, notre photobooth ouvert est compatible avec une utilisation en extérieur sous une structure couverte (barnum, tente, pergola). Une prise 220V à proximité est nécessaire. Nous évaluons chaque lieu au cas par cas — contactez-nous avec les photos de votre espace.",
  },
  {
    question: 'Y a-t-il une galerie numérique partageable avec tous les invités ?',
    answer:   "Oui, toutes les formules incluent une galerie numérique en ligne accessible via un lien QR code personnalisé. Elle est mise en ligne dans les 48h suivant le mariage et reste disponible 30 jours (60 jours sur Excellence). Idéal pour que tante Marie de Bordeaux récupère ses photos !",
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
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gold-400/5 blur-3xl" />
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
          <li className="text-gold-400 font-medium" aria-current="page">Mariage</li>
        </ol>
      </nav>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-16">
        <div className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/30 px-4 py-2 mb-10">
          <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Vin d&apos;honneur &amp; soirée — Lyon &amp; métropole
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
          Photobooth{' '}
          <span className="text-gold-400">Mariage</span>
          <br />
          Lyon
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed">
          L&apos;animation photo qui enchante vos invités.
          Fond personnalisé, impressions illimitées, animateur dédié —
          du vin d&apos;honneur jusqu&apos;à la dernière danse.
        </p>

        <p className="text-sm text-gray-500 mb-10 tracking-wide">
          ✓ Formules dès 299 € TTC &nbsp;·&nbsp; ✓ Cadre personnalisé aux couleurs du mariage &nbsp;·&nbsp; ✓ Devis sous 24h
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary text-base !px-10 !py-5">
            Demander un devis mariage
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
            L&apos;animation qui fait l&apos;unanimité
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-8">
            Pourquoi un photobooth pour votre mariage à Lyon ?
          </h2>

          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              Le mariage, c&apos;est la journée dont vous rêvez depuis longtemps.
              Chaque détail compte — la robe, les fleurs, la musique, le menu.
              L&apos;animation photo devrait l&apos;être aussi. Le photobooth s&apos;est
              imposé comme{' '}
              <strong className="text-gray-900">l&apos;animation mariage de référence à Lyon</strong>{' '}
              pour une raison simple : il crée le souvenir tangible que ni le DJ
              ni le wedding planner ne peuvent offrir.
            </p>
            <p>
              Contrairement aux animations éphémères, le photobooth laisse une trace physique.
              Vos invités repartent avec une{' '}
              <strong className="text-gray-900">photo imprimée en 10 secondes</strong>,
              encadrée aux couleurs de votre mariage — un souvenir glissé dans le portefeuille
              ou épinglé sur le frigo pour des années. Et la galerie numérique partagée sous 48h
              prolonge le plaisir pour tous ceux qui n&apos;ont pas pu récupérer leur impression.
            </p>
            <p>
              À Lyon, les mariages se déroulent souvent en deux temps : le vin d&apos;honneur
              (3h) et la soirée dansante (4-5h). Notre photobooth peut couvrir l&apos;un,
              l&apos;autre, ou les deux. La plupart de nos mariés lyonnais optent pour la{' '}
              <strong className="text-gray-900">formule Premium 5h</strong> qui couvre
              vin d&apos;honneur et début de soirée — c&apos;est là où le photobooth
              crée le plus de magie.
            </p>
            <p>
              Ce qui fait notre différence ? Nous ne sommes pas un prestataire généraliste.
              Chaque mariage bénéficie d&apos;une préparation individualisée :
              coordination avec votre wedding planner ou responsable de salle,
              repérage des contraintes techniques du lieu (espace, électricité, luminosité),
              validation du bon à tirer ensemble. Depuis 2022, nous avons animé{' '}
              <strong className="text-gray-900">plus de 150 mariages</strong> dans toute
              la métropole lyonnaise — notre note de 4,9/5 en témoigne.
            </p>
          </div>

          {/* Chiffres inline */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { stat: '3h ou 5h',   label: 'Formules mariage' },
              { stat: '10 sec',     label: "Temps d'impression" },
              { stat: '50+ props',  label: 'Accessoires inclus' },
              { stat: '48h',        label: 'Galerie en ligne' },
            ].map(({ stat, label }) => (
              <div key={label} className="border border-gray-200 p-5 text-center hover:border-gold-400 transition-colors">
                <p className="text-3xl font-serif font-bold text-gold-400">{stat}</p>
                <p className="text-xs text-gray-500 mt-2 tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Inclus() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Tout compris, sans surprise
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-5">
            Ce qui est inclus dans notre formule mariage
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chaque élément est pensé pour que votre mariage soit parfait,
            sans que vous ayez à vous préoccuper du moindre détail technique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {INCLUS.map((item) => (
            <div
              key={item.h3}
              className="bg-white border border-gray-200 p-8
                         hover:border-gold-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-gold-400 mb-5">{item.icon}</div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{item.h3}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {/* Note personnalisation */}
        <div className="mt-12 max-w-3xl mx-auto bg-gold-400/5 border border-gold-400/20 p-8">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            La personnalisation, étape par étape
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Dès la réservation confirmée, nous vous envoyons notre questionnaire de personnalisation :
            prénoms des mariés, date, couleurs du mariage, style souhaité (romantique, moderne, champêtre...).
            Notre équipe crée le cadre photo sur mesure et vous soumet un{' '}
            <strong>bon à tirer (BAT) 72h avant le mariage</strong> — vous validez,
            et le cadre est prêt pour le jour J. Aucune surprise, aucun stress.
          </p>
        </div>
      </div>
    </section>
  )
}

function Lieux() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
                Nous connaissons vos salles
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-6">
                Nos lieux partenaires pour les mariages à Lyon
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Chaque salle de mariage a ses contraintes : hauteur sous plafond,
                  accès électrique, luminosité, configuration du cocktail.
                  Nous connaissons la plupart des lieux de réception lyonnais
                  et adaptons l&apos;installation en conséquence.
                </p>
                <p>
                  Votre lieu n&apos;est pas dans la liste ? Pas d&apos;inquiétude —
                  nous intervenons partout dans la métropole et dans un rayon
                  de 80 km autour de Lyon (Beaujolais, Ain, Isère, Drôme).
                  Envoyez-nous les photos de l&apos;espace et nous vous
                  conseillons sur l&apos;emplacement idéal du photobooth.
                </p>
              </div>
              <a href="#contact" className="btn-primary mt-8 inline-flex">
                Vérifier la disponibilité pour mon lieu
              </a>
            </div>

            <ul className="space-y-3">
              {LIEUX.map((lieu) => (
                <li
                  key={lieu.name}
                  className="flex items-start gap-4 p-4 border border-gray-200
                             hover:border-gold-400/50 transition-colors"
                >
                  <div className="w-8 h-8 bg-gold-400/10 border border-gold-400/30 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{lieu.name}</p>
                    <p className="text-xs text-gold-500 font-medium">{lieu.ville}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{lieu.style}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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
          Après chaque mariage, nous invitons nos clients à partager leur expérience.
          Les premiers témoignages arrivent prochainement.
        </p>
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
            Trois formules, un seul niveau d&apos;exigence
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-5">
            Tarifs photobooth mariage Lyon
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tous les tarifs incluent livraison, installation, démontage et animateur.
            Aucun frais caché.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {FORMULES.map((f) => (
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

              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">{f.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{f.desc}</p>

              <div className="mb-1">
                {f.price !== 'Sur devis' && (
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">À partir de</p>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-serif font-bold text-gray-900">{f.price}</span>
                  {f.suffix && <span className="text-gray-400 text-sm">{f.suffix}</span>}
                </div>
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
          Acompte 30 % à la réservation · Solde 7 jours avant le mariage ·{' '}
          <Link href="/lyon/pas-cher/" className="text-gold-500 hover:underline font-medium">
            Voir tous nos tarifs détaillés →
          </Link>
        </p>
      </div>
    </section>
  )
}

function Processus() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
              Simple et sans stress
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-4">
              Comment réserver votre photobooth mariage ?
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Quatre étapes, de la demande de devis jusqu&apos;au jour J —
              vous n&apos;avez qu&apos;à valider, on s&apos;occupe du reste.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {ETAPES.map((e) => (
              <div key={e.num} className="flex gap-6">
                <div className="shrink-0">
                  <span
                    className="w-12 h-12 bg-gold-400 text-black font-serif font-bold text-xl
                                flex items-center justify-center"
                  >
                    {e.num}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">{e.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{e.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="#contact" className="btn-primary text-base !px-10 !py-5">
              Commencer ma demande de devis
            </a>
          </div>
        </div>
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
              Guide inspiration
            </p>
            <p className="text-white text-xl font-serif font-bold">
              10 idées d&apos;animations originales pour un mariage à Lyon en 2026
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Le photobooth en tête — mais pas que. Découvrez quelles animations combiner pour un mariage parfait.
            </p>
          </div>
          <Link
            href="/blog/idees-animations-mariage-lyon/"
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
              Demandez votre devis photobooth mariage à Lyon
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Indiquez-nous votre date, votre lieu de mariage et vos attentes.
              Nous vérifions la disponibilité et vous répondons sous 24h avec un devis personnalisé.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                ['⚡', 'Réponse et devis sous 24h'],
                ['📅', 'Disponibilité vérifiée immédiatement'],
                ['🎨', 'Personnalisation incluse dès la formule Essentiel'],
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

            {/* Maillage interne */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">
                Autres prestations Lyon
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { href: '/lyon/',             label: 'Retour hub Lyon' },
                  { href: '/lyon/anniversaire/', label: 'Photobooth anniversaire' },
                  { href: '/lyon/entreprise/',   label: 'Photobooth entreprise' },
                  { href: '/lyon/pas-cher/',     label: 'Tarifs détaillés' },
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

export default function MariageLyonPage() {
  return (
    <>
      <SchemaOrg
        page="service"
        serviceName="Location Photobooth Mariage Lyon"
        serviceDescription="Location de photobooth pour mariage à Lyon. Animateur dédié, impressions illimitées, fond personnalisé. Formules de 299 € à 449 € TTC."
        serviceUrl={PAGE_URL}
        serviceOffers={OFFERS_MARIAGE}
        faq={FAQ_MARIAGE}
        breadcrumbs={BREADCRUMBS}
      />

      <main>
        <Hero />
        <Pourquoi />
        <Inclus />
        <Lieux />
        <Temoignages />
        <Formules />
        <Processus />
        <BlogLink />
        <FAQAccordion
          title="FAQ — Photobooth mariage Lyon"
          subtitle="Vos questions sur la location de photobooth pour mariage à Lyon."
          items={FAQ_DISPLAY}
        />
        <Contact />
      </main>
    </>
  )
}
