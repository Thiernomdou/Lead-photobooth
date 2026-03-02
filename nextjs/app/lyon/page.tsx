import Link           from 'next/link'
import SchemaOrg      from '@/components/seo/SchemaOrg'
import FAQAccordion   from '@/components/sections/FAQAccordion'
import ContactForm    from '@/components/forms/ContactForm'
import { METADATA_PRESETS } from '@/lib/metadata'
import { FAQ_LYON }         from '@/lib/schemas'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://photobooth-evenement.fr'

export const metadata = METADATA_PRESETS.lyon

const BREADCRUMBS = [
  { name: 'Accueil', item: `${BASE}/` },
  { name: 'Lyon',   item: `${BASE}/lyon/` },
]

// ─── Données ─────────────────────────────────────────────────────────────────

const STATS = [
  { value: '30 km',  label: 'zone de livraison gratuite' },
  { value: '24h',    label: 'délai de réponse garanti'   },
  { value: '10 sec', label: 'impression sur place'       },
]

const PRESTATIONS = [
  {
    href:        '/lyon/mariage/',
    emoji:       '💍',
    badge:       'Le plus demandé',
    h3:          'Photobooth mariage Lyon',
    desc:        "Votre mariage mérite une animation à la hauteur. Cadre personnalisé aux couleurs de votre thème, accessoires premium, animateur dédié — votre vin d'honneur et votre soirée ne ressembleront à aucun autre.",
    features:    ['Fond et cadre personnalisés', 'Accessoires premium inclus', 'Animateur dédié toute la soirée', "Galerie en ligne 30 jours"],
    cta:         'Découvrir la formule mariage',
  },
  {
    href:        '/lyon/anniversaire/',
    emoji:       '🎉',
    badge:       null,
    h3:          'Photobooth anniversaire Lyon',
    desc:        "Du 18 ans euphorique au 50 ans élégant, de l'anniversaire enfant à la garden party entre amis — notre photobooth s'adapte à l'ambiance de votre fête et crée des souvenirs qui durent toute une vie.",
    features:    ["Thème personnalisé selon l'âge", 'Props festifs et originaux', 'Partage QR code instantané', 'Impression en 10 secondes'],
    cta:         'Découvrir la formule anniversaire',
  },
  {
    href:        '/lyon/entreprise/',
    emoji:       '🏢',
    badge:       'B2B',
    h3:          'Photobooth entreprise Lyon',
    desc:        "Séminaire, soirée de gala, stand à Eurexpo, team building — notre photobooth branded renforce votre image de marque, fidélise vos collaborateurs et génère de l'engagement social naturel autour de votre événement.",
    features:    ['Branding aux couleurs de votre marque', 'Collecte emails RGPD compliant', 'Facturation professionnelle avec TVA', 'Disponible sur stands et salons'],
    cta:         'Découvrir la formule entreprise',
  },
  {
    href:        '/lyon/pas-cher/',
    emoji:       '💰',
    badge:       null,
    h3:          'Location photobooth pas cher Lyon',
    desc:        "Qualité professionnelle ne rime pas forcément avec tarif prohibitif. Nos formules d'entrée de gamme intègrent animateur, impressions illimitées et personnalisation — sans les frais cachés pratiqués par certains concurrents.",
    features:    ['Tarifs clairs et sans surprises', 'Animateur et impressions inclus', 'Personnalisation du cadre photo', 'Devis comparatif gratuit sous 24h'],
    cta:         'Voir nos tarifs transparents',
  },
]

const ATOUTS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title:   'Animateur professionnel inclus',
    desc:    "Un animateur dédié est présent du montage au rangement. Il installe le matériel, guide vos invités et veille au bon déroulement de l'animation pendant toute la durée de votre événement.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title:   'Impressions illimitées en 10 secondes',
    desc:    "Notre imprimante à sublimation thermique professionnelle produit une photo 10×15 cm en moins de 10 secondes. Qualité labo, résistante à l'eau, qui traverse les décennies.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title:   'Personnalisation complète',
    desc:    "Cadre photo aux couleurs de votre événement, fond vinyle sur mesure, interface tactile personnalisée — chaque détail est adapté à votre thème. Un bon à tirer est validé avec vous 72h avant.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title:   'Galerie numérique sous 48h',
    desc:    "Toutes les photos de l'événement sont mises en ligne dans une galerie privée accessible via QR code. Partageable avec tous vos invités pendant 30 jours minimum.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title:   'Matériel professionnel haute résolution',
    desc:    "Appareil photo reflex plein format, flash studio intégré, imprimante thermique sublimation — nous n'utilisons que du matériel professionnel pour garantir une qualité d'image irréprochable.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title:   'Devis sous 24h, réponse garantie',
    desc:    "Envoyez votre demande aujourd'hui, recevez un devis personnalisé demain. Disponibilité vérifiée immédiatement, acompte de 30 % pour bloquer votre date.",
  },
]

const COMMUNES = [
  'Villeurbanne', 'Caluire-et-Cuire', 'Bron', 'Vénissieux',
  'Décines-Charpieu', 'Meyzieu', 'Saint-Priest', 'Écully',
  'Tassin-la-Demi-Lune', 'Francheville', 'Oullins', 'Pierre-Bénite',
  'Mions', 'Chassieu', 'Craponne', 'Grigny', 'Givors',
]

const FORMULES = [
  {
    name:        'Essentiel',
    duration:    '2 heures',
    highlighted: false,
    desc:        "Pour les vin d'honneur et petites soirées jusqu'à 80 personnes",
    features: [
      'Photobooth ouvert + animateur',
      'Impressions illimitées 10×15 cm',
      'Cadre photo personnalisé',
      'Galerie numérique 30 jours',
      'Livraison Lyon centre',
    ],
  },
  {
    name:        'Premium',
    duration:    '5 heures',
    highlighted: true,
    desc:        'La formule la plus populaire — mariages, anniversaires, soirées',
    features: [
      'Tout Essentiel +',
      'Accessoires premium (50+ props)',
      'Fond vinyle sur mesure inclus',
      'Album photo imprimé',
      'Partage QR code instantané',
      'Livraison Grand Lyon incluse',
    ],
  },
  {
    name:        'Excellence',
    duration:    'Sur mesure',
    highlighted: false,
    desc:        "Mariages premium, galas et grands événements d'entreprise",
    features: [
      'Tout Premium +',
      'Miroir interactif ou photobooth fermé',
      'Double animateur disponible',
      "Livre d'or numérique",
      "Vidéo récapitulative de l'événement",
      '24h avant',
    ],
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
      {/* Ambiance */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gold-400/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gold-400/8 blur-3xl" />
      </div>

      {/* Fil d'Ariane */}
      <nav
        aria-label="Fil d'ariane"
        className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <ol className="flex items-center gap-2 text-xs text-gray-500">
          <li><Link href="/" className="hover:text-gold-400 transition-colors">Accueil</Link></li>
          <li aria-hidden>/</li>
          <li className="text-gold-400 font-medium" aria-current="page">Lyon</li>
        </ol>
      </nav>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/30 px-4 py-2 mb-10">
          <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Métropole lyonnaise — Livraison incluse jusqu'à 30 km
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
          Location{' '}
          <span className="text-gold-400">Photobooth</span>
          <br />
          Lyon
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed">
          Animation photo pour vos mariages, anniversaires et événements d&apos;entreprise.
          Technicien sur place, impressions illimitées, personnalisation complète.
        </p>

        <p className="text-sm text-gray-500 mb-10 tracking-wide">
          ✓ Animateur inclus &nbsp;·&nbsp; ✓ Impressions illimitées &nbsp;·&nbsp;
          ✓ Cadre personnalisé &nbsp;·&nbsp; ✓ Devis gratuit en 24h
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary text-base !px-10 !py-5">
            Obtenir mon devis gratuit
          </a>
          <a href="#formules" className="btn-outline text-base !px-10 !py-5">
            Voir les formules
          </a>
        </div>

        {/* Stats */}
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

function Intro() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Depuis 2022 à Lyon
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-8">
            Photobooth Lyon : l&apos;animation qui fait l&apos;unanimité
          </h2>

          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
            <p>
              Le photobooth est devenu <strong className="text-gray-900">l&apos;animation incontournable
              des événements lyonnais</strong>. Mariage dans le Vieux-Lyon, anniversaire dans le
              6<sup>e</sup> arrondissement, séminaire à Eurexpo, vin d&apos;honneur au bord de Saône —
              partout dans la métropole, nos photobooths transforment un moment en souvenir tangible
              que vos invités gardent toute leur vie.
            </p>
            <p>
              Pourquoi un tel succès ? Parce que le photobooth réunit le meilleur des deux mondes :
              le plaisir <strong className="text-gray-900">immédiat de l&apos;impression sur place</strong>
              (en moins de 10 secondes) et la magie du{' '}
              <strong className="text-gray-900">partage numérique instantané</strong>. Chaque invité
              repart avec une photo souvenir personnalisée aux couleurs de votre événement — et la partage
              naturellement sur les réseaux sociaux, générant un rayonnement bien au-delà de la salle.
            </p>
            <p>
              Nous intervenons partout dans la métropole lyonnaise — de la Villa Florentine aux
              domaines du Beaujolais, en passant par les hôtels et centres de congrès professionnels.
              Notre engagement : une qualité de service irréprochable, du montage au rangement.
            </p>
          </div>

          {/* Points clés visuels */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { stat: '10 sec', label: "Temps d'impression" },
              { stat: '8 pers.', label: 'Par photo simultanée' },
              { stat: '30 km', label: 'Zone de livraison' },
            ].map(({ stat, label }) => (
              <div key={label} className="border border-gray-200 p-6 text-center hover:border-gold-400 transition-colors">
                <p className="text-4xl font-serif font-bold text-gold-400">{stat}</p>
                <p className="text-sm text-gray-500 mt-2 tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Prestations() {
  return (
    <section id="prestations" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Mariage · Anniversaire · Entreprise
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-5">
            Nos prestations photobooth à Lyon
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quatre offres adaptées à chaque type d&apos;événement, toutes livrées et installées
            par un animateur professionnel sur toute la métropole lyonnaise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRESTATIONS.map((p) => (
            <article
              key={p.href}
              className="relative bg-white border border-gray-200 p-8 flex flex-col
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {p.badge && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-gold-400 text-black text-xs font-bold px-3 py-1">
                    {p.badge}
                  </span>
                </div>
              )}

              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl shrink-0" aria-hidden>{p.emoji}</span>
                <div>
                  <h3 className="text-xl font-serif font-bold text-gray-900">{p.h3}</h3>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">{p.desc}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={p.href}
                className="btn-primary w-full text-center !justify-center mt-auto"
              >
                {p.cta} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ZoneLivraison() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Texte */}
          <div>
            <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
              Métropole de Lyon
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-6">
              Zone de livraison autour de Lyon
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Nous livrons et installons notre photobooth sur{' '}
                <strong className="text-gray-900">toute la métropole de Lyon</strong> et
                jusqu&apos;à <strong className="text-gray-900">30 km autour de Lyon</strong>,
                frais de déplacement inclus dans nos tarifs.
              </p>
              <p>
                Au-delà de 30 km — vers le Beaujolais, l&apos;Ain, l&apos;Isère ou la Loire —
                des frais kilométriques de{' '}
                <strong className="text-gray-900">0,50 € par km supplémentaire</strong> s&apos;appliquent.
                Contactez-nous pour un devis adapté à votre lieu.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gold-400/5 border border-gold-400/20">
              <p className="text-sm font-semibold text-gray-900 mb-1">Lieux emblématiques où nous intervenons :</p>
              <p className="text-sm text-gray-600">
                Villa Florentine · Sofitel Lyon Bellecour · Hôtel des Marronniers ·
                Château de Bagnols · Domaine du Grand Montmirail · Eurexpo Lyon ·
                Palais des Congrès · Espace Tête d&apos;Or · Château de la Tour de Salvagny
              </p>
            </div>
          </div>

          {/* Grille communes */}
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
              Communes desservies (livraison incluse)
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gold-400 text-black text-sm font-bold px-3 py-1.5">
                Lyon (1–9<sup>e</sup>)
              </span>
              {COMMUNES.map((c) => (
                <span
                  key={c}
                  className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 border border-gray-200"
                >
                  {c}
                </span>
              ))}
              <span className="bg-gray-50 text-gray-400 text-sm px-3 py-1.5 border border-dashed border-gray-300 italic">
                + toute la métropole
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Un doute sur votre lieu ?{' '}
              <a href="#contact" className="text-gold-500 font-semibold hover:underline">
                Contactez-nous →
              </a>{' '}
              nous vous confirmons la disponibilité sous 24h.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Atouts() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Notre différence
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-5">
            Pourquoi nous choisir pour votre photobooth à Lyon ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ce qui distingue notre service de location photobooth à Lyon,
            au-delà du matériel professionnel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ATOUTS.map((a) => (
            <div
              key={a.title}
              className="bg-white border border-gray-200 p-8
                         hover:border-gold-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-gold-400 mb-5">{a.icon}</div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-3">{a.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Avis inline */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              initials: 'S',
              name:     'Sophie & Thomas M.',
              context:  'Mariage — Domaine de Valpré, Écully',
              text:     "Notre photobooth a été LA star de la soirée ! L'équipe était parfaite du premier contact jusqu'au rangement. Les photos étaient superbes et nos invités adoraient. On recommande les yeux fermés.",
            },
            {
              initials: 'G',
              name:     'Direction RH — Groupe Seigneurie',
              context:  'Séminaire annuel — Eurexpo Lyon',
              text:     "Photobooth brandé aux couleurs de notre charte, rendu totalement professionnel. Facturation pro soignée, contact très réactif. Nous recommandons sans hésiter pour les événements B2B.",
            },
          ].map((t) => (
            <figure
              key={t.name}
              className="bg-white border border-gray-200 p-8 relative"
            >
              <span
                aria-hidden
                className="absolute top-5 right-7 text-7xl font-serif text-gold-400/15 leading-none select-none"
              >
                &ldquo;
              </span>
              <Stars count={5} />
              <blockquote className="mt-4 mb-6 text-gray-700 leading-relaxed italic text-sm">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div
                  className="w-10 h-10 bg-gold-400 text-black font-bold text-sm
                              flex items-center justify-center shrink-0"
                  aria-hidden
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.context}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
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
            Tarifs clairs et sans surprises
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-5">
            Nos tarifs photobooth Lyon
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tous les tarifs incluent la livraison, l&apos;installation, le démontage et l&apos;animateur.
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

              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-gray-900">{f.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{f.desc}</p>
                <div className="mt-4">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">À partir de</p>
                </div>
                <p className="text-sm text-gold-500 font-medium mt-1">{f.duration}</p>
              </div>

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
                className={f.highlighted ? 'btn-primary w-full text-center' : 'btn-outline w-full text-center'}
              >
                Demander un devis gratuit
              </a>
              <p className="text-center text-xs text-gray-400 mt-3">
                Tarif selon options — devis gratuit en 24h
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-10">
          Acompte 30 % à la réservation · Solde 7 jours avant l&apos;événement
          {' '}·{' '}
          <Link href="/lyon/pas-cher/" className="text-gold-500 hover:underline font-medium">
            Voir le détail de tous nos tarifs →
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
              Guide complet
            </p>
            <p className="text-white text-xl font-serif font-bold">
              Combien coûte un photobooth à Lyon en 2026 ?
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Tarifs détaillés, facteurs de variation, pièges à éviter — notre guide complet des prix.
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
          {/* Gauche */}
          <div>
            <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
              Gratuit &amp; sans engagement
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-6">
              Demandez votre devis photobooth à Lyon
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Décrivez votre événement et recevez un devis personnalisé sous 24h.
              Nous vérifions immédiatement notre disponibilité à votre date.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                ['⚡', 'Réponse garantie sous 24h'],
                ['🎯', 'Devis 100 % personnalisé'],
                ['🔒', 'Aucun engagement à la demande'],
                ['📞', 'Aussi disponible par téléphone'],
              ].map(([icon, text]) => (
                <li key={String(text)} className="flex items-center gap-3 text-gray-300">
                  <span className="text-xl" aria-hidden>{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* Téléphone */}
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

            {/* Liens maillage */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Explorer nos prestations</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { href: '/lyon/mariage/',      label: 'Photobooth mariage' },
                  { href: '/lyon/anniversaire/', label: 'Photobooth anniversaire' },
                  { href: '/lyon/entreprise/',   label: 'Photobooth entreprise' },
                  { href: '/lyon/pas-cher/',     label: 'Tarifs pas cher' },
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

          {/* Formulaire */}
          <div className="bg-white p-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function LyonPage() {
  return (
    <>
      <SchemaOrg
        page="lyon"
        faq={FAQ_LYON}
        breadcrumbs={BREADCRUMBS}
      />

      <main>
        <Hero />
        <Intro />
        <Prestations />
        <ZoneLivraison />
        <Atouts />
        <Formules />
        <BlogLink />
        <FAQAccordion
          title="FAQ — Location photobooth Lyon"
          subtitle="Toutes les réponses à vos questions sur la location de photobooth à Lyon."
          items={FAQ_LYON}
        />
        <Contact />
      </main>
    </>
  )
}
