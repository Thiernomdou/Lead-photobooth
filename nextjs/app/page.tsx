import type { Metadata }  from 'next'
import Link               from 'next/link'
import Image              from 'next/image'
import QuoteForm          from '@/components/forms/QuoteForm'
import FAQAccordion       from '@/components/sections/FAQAccordion'
import SchemaOrg          from '@/components/seo/SchemaOrg'
import { buildMetadata }  from '@/lib/metadata'
import type { FaqItem }   from '@/lib/schemas'

// ─── SEO ──────────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title:       'Location Photobooth Lyon | Devis Gratuit 24h — Mariage, Anniversaire, Entreprise',
  description: 'Location photobooth à Lyon avec animateur inclus. Mariage, anniversaire, soirée entreprise. Livraison gratuite 30 km. Impression instantanée. Devis en 24h ✓',
  path:        '/',
  ogImage:     '/images/og-home.jpg',
  ogImageAlt:  'Location Photobooth Lyon — Devis Gratuit en 24h',
})

// ─── FAQ (8 questions SEO) ────────────────────────────────────────────────────

const FAQ_HOME: FaqItem[] = [
  {
    question: 'Combien coûte la location d\'un photobooth à Lyon ?',
    answer:   'Nos tarifs varient selon la durée, les options et le type d\'événement. Tous nos tarifs incluent la livraison, l\'installation, l\'animateur et les impressions illimitées. Aucun frais caché. Devis gratuit et personnalisé sous 24h.',
  },
  {
    question: 'Quelle est la différence entre un photobooth et une borne selfie ?',
    answer:   'Un photobooth professionnel est un équipement complet avec appareil photo reflex haute résolution, éclairage studio intégré, imprimante à sublimation thermique et logiciel dédié. Une borne selfie désigne souvent un simple iPad sur pied sans impression. Nos photobooths garantissent une qualité photo labo, des impressions en 10 secondes et une présence animateur — sans comparaison avec les bornes selfie basiques.',
  },
  {
    question: 'La livraison est-elle incluse dans le prix à Lyon ?',
    answer:   'Oui, la livraison et l\'installation sont incluses sans supplément dans un rayon de 30 km autour de Lyon : Villeurbanne, Caluire-et-Cuire, Bron, Vénissieux, Décines, Saint-Priest, Écully, Tassin, Oullins, Francheville et toute la métropole lyonnaise. Au-delà, 0,50 €/km supplémentaire.',
  },
  {
    question: 'Combien de temps à l\'avance faut-il réserver le photobooth ?',
    answer:   'Nous conseillons de réserver minimum 2 à 3 semaines à l\'avance. En haute saison (mai à octobre), les week-ends sont très demandés et se réservent souvent 2 à 4 mois en avance. Vérifiez la disponibilité de votre date dès maintenant via notre formulaire — réponse garantie sous 24h.',
  },
  {
    question: 'Le photobooth fonctionne-t-il en intérieur et en extérieur ?',
    answer:   'Notre borne photo classique et la borne premium fonctionnent en intérieur comme en extérieur (sous structure couverte : barnum, tente, pergola). Une prise 220V accessible est nécessaire. La vidéo 360° est recommandée uniquement en intérieur. L\'animateur s\'assure des conditions optimales d\'installation.',
  },
  {
    question: 'Peut-on personnaliser le photobooth aux couleurs de son mariage ?',
    answer:   'Oui, la personnalisation est incluse dans toutes nos formules : cadre photo avec vos prénoms, date et thème ; choix du fond (uni, sequins ou vinyle personnalisé selon la formule) ; couleurs et typo de l\'interface adaptées à votre charte. Nous vous envoyons un bon à tirer (BAT) à valider 72h avant l\'événement.',
  },
  {
    question: 'Combien de photos peut-on prendre pendant la soirée ?',
    answer:   'Les impressions sont illimitées pendant toute la durée de la prestation — aucun plafond de prints. En pratique, une soirée de 4h avec 150 invités génère entre 300 et 600 photos imprimées. Chaque photo est aussi disponible en numérique via QR code, et une galerie en ligne est accessible 30 jours après l\'événement.',
  },
  {
    question: 'Proposez-vous un animateur pour gérer le photobooth ?',
    answer:   'Oui, un animateur professionnel est inclus dans toutes nos formules : il installe le photobooth 1h avant vos invités, guide et encourage les participants, gère la technique en temps réel et range le matériel en fin de soirée. Vous n\'avez rien à gérer le jour J.',
  },
]

// ─── Données ───────────────────────────────────────────────────────────────────

const FORMULES = [
  {
    name:        'Essentielle',
    desc:        'Idéale pour anniversaires & petits événements',
    duration:    '3 heures',
    highlighted: false,
    features: [
      'Borne photo classique HD',
      'Photos illimitées',
      'Impression instantanée incluse',
      'Cadre photo personnalisé',
      'Galerie numérique 30 jours',
      'Livraison Lyon et agglo (30 km)',
    ],
    cta: 'Faire un devis gratuit',
  },
  {
    name:        'Premium',
    desc:        'Notre formule la plus populaire',
    duration:    '4 heures',
    highlighted: true,
    features: [
      'Borne photo premium LED',
      'Photos illimitées + GIFs animés',
      'Fond personnalisé inclus',
      'Livre d\'or digital',
      'Accessoires & props (50+)',
      'Animateur dédié',
      'Partage QR code instantané',
      'Livraison Lyon et agglo (30 km)',
    ],
    cta: 'Faire un devis gratuit',
  },
  {
    name:        '360°',
    desc:        'L\'animation la plus spectaculaire',
    duration:    '4 heures',
    highlighted: false,
    features: [
      'Vidéo booth 360° dernière génération',
      'Vidéos illimitées + effets slow-motion',
      'Personnalisation complète',
      'Animateur dédié',
      'Partage réseaux sociaux instantané',
      'Musique synchronisée',
      'Livraison Lyon et agglo (30 km)',
    ],
    cta: 'Faire un devis gratuit',
  },
]

const CITIES = [
  'Lyon', 'Villeurbanne', 'Caluire-et-Cuire', 'Bron',
  'Vénissieux', 'Décines', 'Saint-Priest', 'Écully',
  'Tassin', 'Oullins', 'Francheville', 'Meyzieu',
]

const AVIS = [
  {
    initials: 'S',
    name:     'Sophie M.',
    event:    'Mariage — Domaine de Valpré, Écully',
    date:     'Septembre 2025',
    text:     "Notre photobooth a été la star de la soirée ! L'animateur était parfait du montage au rangement. Les photos imprimées en 10 secondes ont émerveillé tous nos invités. On recommande les yeux fermés.",
  },
  {
    initials: 'A',
    name:     'Aurélie F.',
    event:    'Anniversaire 40 ans — Lyon 6e',
    date:     'Avril 2025',
    text:     "Location pour les 40 ans de mon mari. Installation rapide, accessoires de qualité et animateur très sympa. Le cadre personnalisé avec nos prénoms était magnifique. Merci !",
  },
  {
    initials: 'C',
    name:     'Camille & Romain',
    event:    'Mariage — Villa Florentine, Lyon 5e',
    date:     'Juillet 2025',
    text:     "Prestation irréprochable. La personnalisation du cadre était exactement dans nos couleurs ivoire et dorées. L'animateur est resté discret et professionnel toute la soirée. Parfait.",
  },
  {
    initials: 'N',
    name:     'Nathalie P.',
    event:    'Anniversaire 50 ans — Caluire',
    date:     'Octobre 2025',
    text:     "Photobooth pour mes 50 ans. Mes invités ont adoré, l'animation était parfaite et les impressions de très bonne qualité. Je recommande vivement sans hésitation !",
  },
  {
    initials: 'T',
    name:     'Thomas & Julie',
    event:    'Mariage — Château du Beaujolais',
    date:     'Juin 2025',
    text:     "Les photos imprimées sur place ont fait office de cadeaux souvenirs pour tous nos invités. La galerie partagée avec la famille était une excellente idée. Merci pour cette super prestation !",
  },
]

// ─── Icônes ────────────────────────────────────────────────────────────────────

function CheckIcon({ className = 'w-4 h-4 text-gold-400 mt-0.5 shrink-0' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg className="w-5 h-5 text-gold-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

// ─── Sections ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-black pt-32 pb-20 section-padding">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Texte — colonne gauche */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Lyon &amp; Agglomération · Animateur inclus · Impression instantanée
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Location Photobooth Lyon<br />
              <span className="text-gold-400">Devis Gratuit en 24h</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
              Animez vos mariages, anniversaires et soirées d&apos;entreprise avec nos photobooths premium.
              Livraison et installation incluses dans toute l&apos;agglomération lyonnaise.
            </p>

            {/* Badges de réassurance */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              {[
                'Livraison & installation incluse',
                'Personnalisation offerte',
                'Devis gratuit sous 24h',
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2">
                  <CheckIcon className="w-4 h-4 text-gold-400 shrink-0" />
                  <span className="text-white text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>

            <a
              href="#devis"
              className="inline-block btn-primary text-base px-8 py-4"
            >
              Configurer mon photobooth →
            </a>
          </div>

          {/* Image — colonne droite */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-photobooth.png"
                alt="Groupe de personnes s'amusant avec un photobooth lors d'un événement à Lyon"
                width={700}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function FormSection() {
  return (
    <section id="devis" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Formulaire */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
                Configurateur de devis
              </span>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mt-2">
                Obtenez votre devis en 3 étapes
              </h2>
              <p className="text-gray-500 mt-2">
                Remplissez le formulaire et recevez une offre personnalisée sous 24h.
              </p>
            </div>
            <QuoteForm />
          </div>

          {/* Aside — Garanties */}
          <aside className="lg:col-span-2 space-y-6">
            <div className="bg-gray-50 p-6">
              <h3 className="font-serif font-bold text-gray-900 mb-4">Pourquoi nous choisir ?</h3>
              <ul className="space-y-4">
                {[
                  ['Réponse sous 24h garantie',         'Du lundi au samedi, 9h–19h'],
                  ['Devis 100 % gratuit & sans engagement', 'Aucune obligation de réservation'],
                  ['Animateur professionnel inclus',    'Présent du montage au rangement'],
                  ['Livraison gratuite 30 km',          'Lyon, Villeurbanne, Bron, Écully…'],
                  ['Impressions illimitées',            'Sublimation thermique, qualité labo'],
                ].map(([title, sub]) => (
                  <li key={title} className="flex gap-3">
                    <CheckIcon className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black p-6 text-white">
              <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-3">Contact direct</p>
              <p className="text-sm text-gray-300 mb-4">
                Vous préférez nous appeler ? Notre équipe répond du lundi au samedi.
              </p>
              <a
                href="tel:+33665420793"
                className="flex items-center gap-2 text-white font-semibold hover:text-gold-400 transition-colors"
              >
                <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 65 42 07 93
              </a>
            </div>
          </aside>
        </div>
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
            Tarifs transparents
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-4">
            Nos formules
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Tous les prix incluent la livraison, l&apos;installation et l&apos;animateur. Sans surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {FORMULES.map((f) => (
            <div
              key={f.name}
              className={`relative p-8 border-2 bg-white flex flex-col ${
                f.highlighted
                  ? 'border-gold-400 shadow-2xl md:-mt-4'
                  : 'border-gray-200 hover:border-gold-200 transition-colors'
              }`}
            >
              {f.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gold-400 text-black text-xs font-bold px-4 py-1 whitespace-nowrap">
                    LE PLUS POPULAIRE
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900">{f.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{f.desc}</p>
                <div className="mt-4">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">À partir de</p>
                </div>
                <p className="text-sm text-gold-500 font-medium mt-1">{f.duration}</p>
              </div>

              <ul className="relative mt-6 space-y-3 mb-8 flex-1">
                {f.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckIcon />
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#devis"
                className={f.highlighted ? 'btn-primary w-full text-center' : 'btn-outline w-full text-center'}
              >
                {f.cta}
              </a>
              <p className="text-center text-xs text-gray-400 mt-3">
                Tarif selon options — devis gratuit en 24h
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-10">
          Acompte 30 % à la réservation · Livraison gratuite 30 km Lyon
        </p>
      </div>
    </section>
  )
}

function Reassurance() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Zone de livraison */}
          <div>
            <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
              Zone d&apos;intervention
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-3 mb-4">
              Disponible sur Lyon<br />et agglomération
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Livraison et installation offertes dans un rayon de 30 km autour de Lyon.
              Au-delà, 0,50 €/km supplémentaire.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {CITIES.map((city) => (
                <div key={city} className="flex items-center gap-2 py-2 px-3 bg-gray-50 border border-gray-200">
                  <MapPinIcon />
                  <span className="text-sm text-gray-700 font-medium">{city}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Et toutes les communes de la Métropole de Lyon.
            </p>
          </div>

          {/* Avis clients */}
          <div>
            <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
              Ils nous ont fait confiance
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-3 mb-6">
              Ce que disent nos clients
            </h2>

            <div className="space-y-4">
              {AVIS.map((avis) => (
                <figure key={avis.name} className="bg-gray-50 border border-gray-200 p-5">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
                  </div>
                  <blockquote className="text-gray-700 text-sm leading-relaxed italic mb-4">
                    &ldquo;{avis.text}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gold-400 text-black font-bold text-sm flex items-center justify-center shrink-0">
                      {avis.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{avis.name}</p>
                      <p className="text-xs text-gray-500">{avis.event} · {avis.date}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MaillageInterne() {
  return (
    <section className="bg-gray-900 section-padding">
      <div className="container-max text-center">
        <p className="text-gray-400 text-sm mb-6">Découvrez nos prestations par type d&apos;événement</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/lyon/mariage/"      className="px-4 py-2 border border-gray-700 text-sm text-gray-300 hover:border-gold-400 hover:text-gold-400 transition-colors">Photobooth Mariage Lyon</Link>
          <Link href="/lyon/anniversaire/" className="px-4 py-2 border border-gray-700 text-sm text-gray-300 hover:border-gold-400 hover:text-gold-400 transition-colors">Photobooth Anniversaire Lyon</Link>
          <Link href="/lyon/entreprise/"   className="px-4 py-2 border border-gray-700 text-sm text-gray-300 hover:border-gold-400 hover:text-gold-400 transition-colors">Photobooth Entreprise Lyon</Link>
          <Link href="/lyon/pas-cher/"     className="px-4 py-2 border border-gray-700 text-sm text-gray-300 hover:border-gold-400 hover:text-gold-400 transition-colors">Tarifs &amp; Formules</Link>
          <Link href="/lyon/"              className="px-4 py-2 border border-gray-700 text-sm text-gray-300 hover:border-gold-400 hover:text-gold-400 transition-colors">Hub Lyon</Link>
        </div>
      </div>
    </section>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <SchemaOrg page="home" faq={FAQ_HOME} />
      <main>
        <Hero />
        <FormSection />
        <Formules />
        <Reassurance />
        <FAQAccordion
          title="Questions fréquentes"
          subtitle="Tout ce que vous devez savoir avant de réserver votre photobooth à Lyon."
          items={FAQ_HOME}
        />
        <MaillageInterne />
      </main>
    </>
  )
}
