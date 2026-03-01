import Link from 'next/link'
import SchemaOrg from '@/components/seo/SchemaOrg'
import ContactForm from '@/components/forms/ContactForm'
import { METADATA_PRESETS } from '@/lib/metadata'

const BASE     = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://photobooth-evenement.fr'
const PAGE_URL = `${BASE}/blog/idees-animations-mariage-lyon/`

export const metadata = METADATA_PRESETS.blogAnimations

const BREADCRUMBS = [
  { name: 'Accueil',                               item: `${BASE}/` },
  { name: 'Blog',                                  item: `${BASE}/blog/` },
  { name: '10 idées animations mariage Lyon 2026', item: PAGE_URL },
]

const ARTICLE = {
  headline:      "10 idées d'animations originales pour un mariage à Lyon en 2026",
  description:   "Vin d'honneur, soirée dansante : 10 animations originales pour un mariage inoubliable à Lyon. Le photobooth en tête de liste !",
  datePublished: '2026-02-27T09:00:00+01:00',
  dateModified:  '2026-02-27T09:00:00+01:00',
  image:         `${BASE}/images/blog/og-animations-mariage.jpg`,
  section:       'Inspiration mariage',
  keywords:      'animations mariage lyon, idées mariage original, photobooth mariage lyon, vin honneur lyon',
}

// ─── Données ──────────────────────────────────────────────────────────────────

const TOC = [
  { id: 'photobooth',     label: '#1 — Le photobooth'                          },
  { id: 'quiz',           label: '#2 — Le quiz sur les mariés'                 },
  { id: 'livre-or',       label: "#3 — Le livre d'or photo interactif"         },
  { id: 'confessions',    label: '#4 — La cabine à confessions vidéo'          },
  { id: 'cocktails',      label: '#5 — Le bar à cocktails participatif'        },
  { id: 'jeux',           label: '#6 — Les jeux géants'                        },
  { id: 'photo-wall',     label: '#7 — Le photo wall personnalisé'             },
  { id: 'live',           label: "#8 — L'animation musicale live"              },
  { id: 'candy-bar',      label: '#9 — La candy bar'                           },
  { id: 'roue',           label: '#10 — La roue des cadeaux invités'           },
  { id: 'combiner',       label: 'Comment combiner ces animations ?'           },
]

const RECAP_ROWS = [
  {
    num:     '#1',
    name:    'Photobooth',
    moment:  "Vin d'honneur + soirée",
    ease:    '★★★',
    budget:  'Dès 299 € TTC',
  },
  {
    num:     '#2',
    name:    'Quiz sur les mariés',
    moment:  'Repas',
    ease:    '★★★',
    budget:  '0 – 150 €',
  },
  {
    num:     '#3',
    name:    "Livre d'or photo",
    moment:  "Vin d'honneur + repas",
    ease:    '★★★',
    budget:  '30 – 80 €',
  },
  {
    num:     '#4',
    name:    'Confessions vidéo',
    moment:  "Vin d'honneur + soirée",
    ease:    '★★☆',
    budget:  '150 – 400 €',
  },
  {
    num:     '#5',
    name:    'Bar à cocktails',
    moment:  "Vin d'honneur",
    ease:    '★★☆',
    budget:  '200 – 500 €',
  },
  {
    num:     '#6',
    name:    'Jeux géants',
    moment:  "Vin d'honneur (extérieur)",
    ease:    '★★★',
    budget:  '0 – 200 € (location)',
  },
  {
    num:     '#7',
    name:    'Photo wall',
    moment:  "Vin d'honneur + soirée",
    ease:    '★★☆',
    budget:  '150 – 600 €',
  },
  {
    num:     '#8',
    name:    'Animation musicale live',
    moment:  "Vin d'honneur + cérémonie",
    ease:    '★☆☆',
    budget:  '400 – 1 500 €',
  },
  {
    num:     '#9',
    name:    'Candy bar',
    moment:  "Vin d'honneur + soirée",
    ease:    '★★☆',
    budget:  '150 – 500 €',
  },
  {
    num:     '#10',
    name:    'Roue des cadeaux',
    moment:  'Soirée (fin de repas)',
    ease:    '★★★',
    budget:  '50 – 200 €',
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
              <li className="text-gold-400 font-medium" aria-current="page">Animations mariage Lyon 2026</li>
            </ol>
          </nav>

          <span className="inline-block bg-gold-400/10 border border-gold-400/30 text-gold-400
                           text-xs font-bold tracking-widest uppercase px-3 py-1 mb-6">
            Inspiration mariage
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-[1.1] mb-6">
            10&nbsp;idées d&apos;animations originales pour un mariage à&nbsp;Lyon en&nbsp;2026
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Vin d&apos;honneur, repas de réception, soirée dansante&nbsp;: toutes les étapes
            de votre grand jour méritent une animation qui surprend et fédère.
            Notre sélection des meilleures idées, testées lors de mariages lyonnais.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 border-t border-gray-200 pt-6">
            <span>
              Publié le{' '}
              <time dateTime="2026-02-27" className="text-gray-600 font-medium">
                27 février 2026
              </time>
            </span>
            <span aria-hidden>·</span>
            <span>Temps de lecture : <strong className="text-gray-600">10 min</strong></span>
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
            Lyon regorge de lieux de réception d&apos;exception&nbsp;: châteaux du Beaujolais,
            domaines avec parc, hôtels de charme en Presqu&apos;île&hellip; Mais le cadre
            ne fait pas tout. Les mariages dont on parle encore des années plus tard
            sont ceux où les invités ont vécu quelque chose — ri, participé, été surpris.
            Ces 10 animations ont été sélectionnées pour leur impact, leur adaptabilité
            aux lieux lyonnais et leur rapport plaisir/investissement.
          </p>

          {/* ── #1 Photobooth ─────────────────────────────────────────────── */}
          <section id="photobooth" className="mb-14 scroll-mt-24">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-10 h-10 bg-gold-400 text-black font-bold text-sm flex items-center justify-center shrink-0 font-mono">
                01
              </span>
              <div>
                <span className="text-xs text-gold-500 font-semibold tracking-widest uppercase">Vin d&apos;honneur &amp; soirée</span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-tight">
                  Le photobooth&nbsp;: l&apos;incontournable des mariages lyonnais
                </h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Si une seule animation devait figurer dans votre programme, ce serait
              celle-là. Le photobooth s&apos;est imposé comme la référence absolue des
              mariages depuis une décennie, et pour de bonnes raisons&nbsp;: il
              fonctionne pour <em>tous</em> les profils d&apos;invités, du grand-père
              de 80 ans aux enfants de 7 ans, en passant par les amis les plus timides.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              La force du photobooth, c&apos;est le souvenir tangible qu&apos;il produit.
              Une photo imprimée en 10&nbsp;secondes, aux couleurs de votre mariage,
              avec vos prénoms et la date&nbsp;: chaque invité repart avec un souvenir
              unique en poche. À Lyon, les lieux comme la{' '}
              <strong className="text-gray-900">Villa Florentine</strong>, le{' '}
              <strong className="text-gray-900">Domaine de Valpré</strong> ou le{' '}
              <strong className="text-gray-900">Château de Bagnols</strong>{' '}
              sont parfaitement adaptés — que ce soit pour le vin d&apos;honneur
              en terrasse ou la salle de réception.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Notre recommandation&nbsp;: démarrez le photobooth dès le vin d&apos;honneur
              (l&apos;attente entre la cérémonie et le repas est le moment idéal)
              et maintenez-le actif pendant la soirée. Une formule 5&nbsp;heures
              couvre l&apos;ensemble du vin d&apos;honneur et de la soirée — soit
              la durée standard d&apos;un mariage lyonnais.
            </p>

            {/* CTA photobooth */}
            <div className="bg-gray-50 border border-gold-400/30 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">
                  Location photobooth mariage à Lyon
                </p>
                <p className="text-sm text-gray-500">
                  Impressions illimitées, animateur, cadre personnalisé —
                  formules dès 299&nbsp;€&nbsp;TTC.
                </p>
              </div>
              <Link href="/lyon/mariage/" className="btn-primary text-sm shrink-0">
                Voir les formules mariage →
              </Link>
            </div>
          </section>

          {/* ── #2 Quiz ───────────────────────────────────────────────────── */}
          <section id="quiz" className="mb-14 scroll-mt-24">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-10 h-10 bg-gray-900 text-gold-400 font-bold text-sm flex items-center justify-center shrink-0 font-mono">
                02
              </span>
              <div>
                <span className="text-xs text-gray-400 font-semibold tracking-widest uppercase">Repas de réception</span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-tight">
                  Le quiz sur les mariés
                </h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Classique indémodable, le quiz sur les mariés est l&apos;animation repas
              par excellence. Le principe&nbsp;: le MC ou le DJ pose une série de
              questions décalées sur le couple — &ldquo;Qui a demandé l&apos;autre en
              mariage&nbsp;?&rdquo;, &ldquo;Qui conduit le mieux&nbsp;?&rdquo;, &ldquo;Quel est
              le plat préféré de la mariée&nbsp;?&rdquo; — et les invités votent en
              levant une pancarte OUI/NON ou en répondant via leur smartphone.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              L&apos;avantage&nbsp;: pratiquement zéro coût si votre DJ ou MC anime
              le quiz lui-même. Les applications Kahoot et Mentimeter permettent
              de digitaliser le jeu facilement, avec des classements en direct
              qui créent une émulation sympathique entre tables.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Notre conseil&nbsp;: préparez 15 à 20 questions variées, dosez l&apos;humour
              sans être gênant, et assurez-vous que les mariés ont validé les
              questions à l&apos;avance. L&apos;animation idéale entre deux plats,
              pour un moment de cohésion qui touche toutes les générations.
            </p>
          </section>

          {/* ── #3 Livre d'or photo ───────────────────────────────────────── */}
          <section id="livre-or" className="mb-14 scroll-mt-24">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-10 h-10 bg-gray-900 text-gold-400 font-bold text-sm flex items-center justify-center shrink-0 font-mono">
                03
              </span>
              <div>
                <span className="text-xs text-gray-400 font-semibold tracking-widest uppercase">
                  Vin d&apos;honneur &amp; repas
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-tight">
                  Le livre d&apos;or photo interactif
                </h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Bien au-delà du livre d&apos;or traditionnel où chacun griffonne
              un &ldquo;félicitations et longue vie&rdquo;, le livre d&apos;or photo transforme
              chaque message en souvenir visuel. Le principe&nbsp;: chaque invité colle
              une impression photobooth ou un Polaroid sur une page dédiée,
              puis rédige un message à côté.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Combiné avec un photobooth, le livre d&apos;or photo devient naturel&nbsp;:
              l&apos;animateur propose systématiquement aux invités d&apos;inscrire
              un message après leur passage. Le résultat&nbsp;: un album unique,
              à mi-chemin entre le livre d&apos;or et l&apos;album photo,
              que les mariés feuillèteront pendant des décennies.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Pour les mariages sans photobooth, l&apos;option Polaroid fonctionne
              très bien&nbsp;: un appareil Fujifilm Instax, quelques films
              et un beau livre en cuir suffisent pour créer un souvenir
              authentique et chaleureux.
            </p>
          </section>

          {/* ── #4 Confessions vidéo ─────────────────────────────────────── */}
          <section id="confessions" className="mb-14 scroll-mt-24">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-10 h-10 bg-gray-900 text-gold-400 font-bold text-sm flex items-center justify-center shrink-0 font-mono">
                04
              </span>
              <div>
                <span className="text-xs text-gray-400 font-semibold tracking-widest uppercase">
                  Vin d&apos;honneur &amp; soirée
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-tight">
                  La cabine à confessions vidéo
                </h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Imaginez un coin intimiste — un fond tissu, deux spots de lumière
              douce, une caméra sur trépied — où chaque invité s&apos;installe
              seul ou en groupe pour enregistrer un message, une anecdote,
              un souhait ou un fou rire à destination des mariés.
              C&apos;est la cabine à confessions vidéo.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Le résultat&nbsp;: un film souvenir de 20 à 40 minutes, unique,
              que les mariés découvrent lors de leur premier anniversaire
              ou lors de la soirée de visionnage. Les confessions sont souvent
              les moments les plus émouvants — et les plus drôles — du mariage.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Plusieurs applications permettent de gérer cela en autonomie
              (Tribute, Kudoboard Vidéo), ou vous pouvez confier l&apos;animation
              à votre vidéaste qui monte le film directement. Comptez
              150 à 400&nbsp;€ selon la solution choisie.
            </p>
          </section>

          {/* ── #5 Bar à cocktails ───────────────────────────────────────── */}
          <section id="cocktails" className="mb-14 scroll-mt-24">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-10 h-10 bg-gray-900 text-gold-400 font-bold text-sm flex items-center justify-center shrink-0 font-mono">
                05
              </span>
              <div>
                <span className="text-xs text-gray-400 font-semibold tracking-widest uppercase">
                  Vin d&apos;honneur
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-tight">
                  Le bar à cocktails participatif
                </h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Plutôt que de servir les mêmes coupes de champagne à tout le monde,
              le bar à cocktails participatif transforme le vin d&apos;honneur
              en atelier. Un barman guide de petits groupes de 4 à 6 invités
              pour composer le &ldquo;cocktail signature des mariés&rdquo;
              — et chacun repart avec sa création.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              À Lyon, l&apos;option terroir s&apos;impose naturellement&nbsp;:
              cocktails à base de Beaujolais nouveau, de Côtes du Rhône
              ou de Chartreuse verte pour une touche régionale authentique.
              Les prestataires de bar éphémère se développent fortement
              sur la métropole lyonnaise.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Pour un vin d&apos;honneur de 80 à 120 invités, prévoyez
              un barman et un serveur assistant, avec un stand dédié.
              L&apos;animation dure idéalement 1h30 à 2h, en continu.
              Budget moyen&nbsp;: 300 à 600&nbsp;€ tout compris.
            </p>
          </section>

          {/* ── #6 Jeux géants ───────────────────────────────────────────── */}
          <section id="jeux" className="mb-14 scroll-mt-24">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-10 h-10 bg-gray-900 text-gold-400 font-bold text-sm flex items-center justify-center shrink-0 font-mono">
                06
              </span>
              <div>
                <span className="text-xs text-gray-400 font-semibold tracking-widest uppercase">
                  Vin d&apos;honneur — extérieur
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-tight">
                  Les jeux géants (Jenga, pétanque&hellip;)
                </h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Jenga géant, Molkky, pétanque, Kubb, jeu de quilles en bois&hellip;
              Les jeux de plein air XXL sont devenus incontournables pour
              les vins d&apos;honneur en extérieur. Ils créent des moments
              naturels de convivialité, brisent la glace entre familles
              et groupes d&apos;amis qui ne se connaissent pas,
              et se prêtent à de belles photos spontanées.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Les domaines lyonnais avec parc — Domaine de Valpré à Écully,
              Château de la Tour de Salvagny, Abbaye de Collonges —
              sont parfaitement adaptés. La météo lyonnaise de mai à
              septembre est généralement favorable, mais prévoyez toujours
              un plan B pour les salles en cas d&apos;orage soudain.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Avantage majeur&nbsp;: un set de jeux en bois peut être
              loué pour 80 à 200&nbsp;€ auprès de prestataires d&apos;animation.
              Certains couples achètent leur propre set (à partir de 60&nbsp;€)
              et le revendent après. Une animation au rapport coût/impact
              imbattable.
            </p>
          </section>

          {/* ── #7 Photo wall ────────────────────────────────────────────── */}
          <section id="photo-wall" className="mb-14 scroll-mt-24">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-10 h-10 bg-gray-900 text-gold-400 font-bold text-sm flex items-center justify-center shrink-0 font-mono">
                07
              </span>
              <div>
                <span className="text-xs text-gray-400 font-semibold tracking-widest uppercase">
                  Vin d&apos;honneur &amp; soirée
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-tight">
                  Le photo wall personnalisé
                </h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              À la différence du photobooth (qui imprime), le photo wall est
              un mur décoratif instagrammable devant lequel les invités posent
              spontanément pour des photos avec leurs propres smartphones.
              Il crée un point focal visuel fort dans la salle
              et génère un contenu partageable sur les réseaux sociaux.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Les formats les plus populaires à Lyon en 2026&nbsp;: le mur
              de fleurs séchées (pampas, eucalyptus, roses séchées)
              dans les tons beige et nude, le néon personnalisé avec les
              initiales des mariés sur fond noir, et le tableau en craie
              ardoise avec le message &ldquo;Bienvenue au mariage de&hellip;&rdquo;.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Des prestataires décorateurs événementiels lyonnais proposent
              la location de photo walls clés en main pour 150 à 600&nbsp;€
              selon la taille et la personnalisation. Autre option&nbsp;:
              le DIY — guirlandes lumineuses, cadres en bois et fleurs
              fraîches pour un rendu champêtre à moindre coût.
            </p>
          </section>

          {/* ── #8 Animation musicale live ───────────────────────────────── */}
          <section id="live" className="mb-14 scroll-mt-24">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-10 h-10 bg-gray-900 text-gold-400 font-bold text-sm flex items-center justify-center shrink-0 font-mono">
                08
              </span>
              <div>
                <span className="text-xs text-gray-400 font-semibold tracking-widest uppercase">
                  Vin d&apos;honneur &amp; cérémonie
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-tight">
                  L&apos;animation musicale live
                </h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Un groupe de jazz manouche pour le vin d&apos;honneur,
              un quartet à cordes pour la cérémonie laïque, un saxophoniste
              pour l&apos;entrée des mariés en salle&hellip; La musique live apporte
              une dimension émotionnelle que rien d&apos;autre ne peut reproduire.
              C&apos;est souvent le détail dont les invités parlent encore
              des mois après.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Lyon dispose d&apos;un vivier de musiciens événementiels excellent&nbsp;:
              jazz manouche à la Django Reinhardt, fanfare de rue pour
              une entrée décalée, groupes de reprises acoustiques
              pour le vin d&apos;honneur. Cherchez sur les plateformes
              comme GigSalad ou directement auprès des agences
              artistiques lyonnaises.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Budget indicatif&nbsp;: 400&nbsp;€ pour un duo acoustique (2h),
              700 à 1&nbsp;200&nbsp;€ pour un quartet jazz (3h vin d&apos;honneur),
              800 à 1&nbsp;500&nbsp;€ pour un groupe de reprises complet. Réservez
              impérativement 6 à 12 mois à l&apos;avance pour les week-ends
              de mai à septembre.
            </p>
          </section>

          {/* ── #9 Candy bar ─────────────────────────────────────────────── */}
          <section id="candy-bar" className="mb-14 scroll-mt-24">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-10 h-10 bg-gray-900 text-gold-400 font-bold text-sm flex items-center justify-center shrink-0 font-mono">
                09
              </span>
              <div>
                <span className="text-xs text-gray-400 font-semibold tracking-widest uppercase">
                  Vin d&apos;honneur &amp; soirée
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-tight">
                  La candy bar et sa mise en scène Instagram
                </h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Table de confiseries dans les couleurs du mariage&nbsp;:
              macarons, guimauves, bonbons vintages, cupcakes personnalisés,
              chocolats fins présentés dans des bocaux en verre&hellip;
              La candy bar est à la fois une animation visuelle,
              un espace de convivialité et un point Instagram
              que les invités ne manquent pas de photographier.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              À Lyon, une collaboration avec des artisans locaux
              rend la candy bar encore plus spéciale&nbsp;: chocolats
              Bernachon, macarons de la Presqu&apos;île, pralinés de
              la Maison Voisin&hellip; Ces produits du terroir lyonnais
              ajoutent une dimension locale et authentique
              que les invités apprécient particulièrement.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Prévoyez des sachets transparents personnalisés
              (prénom des mariés, date) pour que chaque invité
              emporte un souvenir gourmand. Budget moyen&nbsp;:
              150 à 300&nbsp;€ en DIY (produits achetés chez les artisans),
              ou 400 à 700&nbsp;€ en prestation clé en main (traiteur
              + décoration + service).
            </p>
          </section>

          {/* ── #10 Roue des cadeaux ─────────────────────────────────────── */}
          <section id="roue" className="mb-14 scroll-mt-24">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-10 h-10 bg-gray-900 text-gold-400 font-bold text-sm flex items-center justify-center shrink-0 font-mono">
                10
              </span>
              <div>
                <span className="text-xs text-gray-400 font-semibold tracking-widest uppercase">
                  Soirée — fin de repas
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-tight">
                  La roue des cadeaux invités
                </h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Entre le dessert et le gâteau de mariage, la roue des cadeaux
              (ou tombola animée) est idéale pour relancer l&apos;énergie
              de la salle. Chaque convive tire un numéro en entrant —
              ou reçoit un ticket pendant le repas — et le DJ fait tourner
              la roue entre deux morceaux.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Lots adaptés à un mariage lyonnais&nbsp;: bouteilles de
              Côtes du Rhône ou de Beaujolais, bons cadeaux dans
              des restaurants de la Presqu&apos;île, coffrets spa,
              objets personnalisés (cadre photo, mug gravé)
              ou même une nuit d&apos;hôtel en amoureux à Lyon.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Simple à organiser, zéro prestataire supplémentaire requis,
              très fédérateur. L&apos;astuce&nbsp;: prévoyez au moins un lot
              par table pour que personne ne reparte les mains vides.
              Budget moyen&nbsp;: 50 à 200&nbsp;€ de lots selon vos envies
              et le nombre d&apos;invités.
            </p>
          </section>

          {/* ── Tableau récap ─────────────────────────────────────────────── */}
          <div className="my-14 overflow-x-auto border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold w-6">#</th>
                  <th className="text-left px-4 py-3 font-semibold">Animation</th>
                  <th className="text-left px-4 py-3 font-semibold">Moment idéal</th>
                  <th className="text-left px-4 py-3 font-semibold">Facilité</th>
                  <th className="text-left px-4 py-3 font-semibold text-gold-400">Budget indicatif</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {RECAP_ROWS.map((row, i) => (
                  <tr key={row.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-gray-400 font-mono text-xs">{row.num}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.name}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{row.moment}</td>
                    <td className="px-4 py-3 text-gold-500 text-xs tracking-widest">{row.ease}</td>
                    <td className="px-4 py-3 font-semibold text-gray-700">{row.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Combiner les animations ──────────────────────────────────── */}
          <section id="combiner" className="mb-10 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Comment combiner ces animations pour un mariage parfait&nbsp;?
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              La tentation est grande de tout vouloir — mais trop d&apos;animations
              tue l&apos;animation. Les mariages les mieux rythmés combinent
              une <strong className="text-gray-900">animation de fond</strong> (qui dure toute la journée)
              avec <strong className="text-gray-900">deux ou trois animations ponctuelles</strong>
              (une par moment clé).
            </p>

            <div className="space-y-5 mb-8">
              {[
                {
                  moment: "Vin d'honneur (2 – 3 h)",
                  bg:     'bg-gold-400/8 border-gold-400/30',
                  items: [
                    "Photobooth ouvert démarré dès l'arrivée des invités",
                    'Jeux géants en extérieur (si jardin disponible)',
                    'Groupe de jazz ou duo acoustique en fond sonore',
                    'Bar à cocktails participatif (optionnel)',
                  ],
                },
                {
                  moment: 'Repas de réception (3 – 4 h)',
                  bg:     'bg-gray-50 border-gray-200',
                  items: [
                    'Quiz sur les mariés entre deux plats (20 – 30 min)',
                    'Cabine à confessions vidéo en libre accès (couloir ou entrée)',
                    'Photobooth actif en pause entre les plats',
                    'Candy bar accessible pour le dessert',
                  ],
                },
                {
                  moment: 'Soirée dansante (3 – 5 h)',
                  bg:     'bg-gray-50 border-gray-200',
                  items: [
                    'Photobooth continue — pics de fréquentation après 22h',
                    "Roue des cadeaux invités (entre 22h et 23h, avant la pièce montée)",
                    'Livre d\'or photo alimenté tout au long de la soirée',
                  ],
                },
              ].map((block) => (
                <div key={block.moment} className={`border p-5 ${block.bg}`}>
                  <p className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-3">
                    {block.moment}
                  </p>
                  <ul className="space-y-2">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-gold-400 shrink-0 mt-0.5">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              Budget total pour un programme complet (300 invités, mariage de 12h)&nbsp;:
              comptez entre <strong className="text-gray-900">800 et 2&nbsp;500&nbsp;€</strong> d&apos;animations
              hors DJ — soit moins de 10&nbsp;€ par invité pour une journée mémorable.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Une dernière règle d&apos;or&nbsp;: <strong className="text-gray-900">briefez vos prestataires ensemble</strong>.
              Le photographe doit savoir où est le photobooth, l&apos;animateur photobooth
              doit connaître le planning du repas, le DJ doit annoncer le quiz
              au bon moment. Une réunion de coordination 2 à 3 semaines avant
              le mariage suffit pour que tout s&apos;enchaîne fluidement.
            </p>
          </section>

          {/* Encadré conclusion */}
          <div className="bg-gray-50 border border-gray-200 p-8">
            <p className="font-serif font-bold text-gray-900 text-xl mb-4">
              En résumé — nos 3 recommandations essentielles
            </p>
            <ol className="space-y-4">
              {[
                "Réservez le photobooth en premier — c'est l'animation socle qui structure toute la journée et fonctionne pour tous les profils d'invités.",
                "Choisissez 2 animations ponctuelles maximum (quiz + jeux géants, ou confessions vidéo + candy bar) pour garder une progression narrative dans votre journée.",
                "Pensez à la coordination : confirmez le planning à tous vos prestataires 3 semaines avant le jour J.",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-7 h-7 bg-gold-400 text-black font-bold text-sm flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
                </li>
              ))}
            </ol>
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
                href:  '/lyon/mariage/',
                label: 'Photobooth mariage Lyon — formules &amp; tarifs',
                type:  'Page service',
              },
              {
                href:  '/lyon/',
                label: 'Location photobooth Lyon — toutes nos prestations',
                type:  'Hub local',
              },
              {
                href:  '/blog/prix-location-photobooth/',
                label: 'Prix location photobooth 2026 — guide complet',
                type:  'Guide tarifaire',
              },
              {
                href:  '/blog/photobooth-ouvert-ferme/',
                label: 'Photobooth ouvert ou fermé — lequel choisir ?',
                type:  'Guide pratique',
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
            Réservez l&apos;animation n°1
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3 mb-4">
            Réservez votre photobooth mariage à Lyon
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Impressions illimitées, animateur dédié, cadre personnalisé aux couleurs
            de votre mariage. Devis gratuit sous 24h.
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

export default function BlogAnimationsPage() {
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
