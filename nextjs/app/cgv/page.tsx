import Link from 'next/link'
import { METADATA_PRESETS } from '@/lib/metadata'

export const metadata = METADATA_PRESETS.cgv

// ─── Données prestataire ──────────────────────────────────────────────────────
// ⚠ À compléter avec les informations juridiques réelles avant mise en ligne

const PRESTATAIRE = {
  nom:    'Location Photobooth',
  siret:  '[À COMPLÉTER — 14 chiffres]',
  siege:  'Lyon (69000) — Auvergne-Rhône-Alpes, France',
  email:  'contact@location-photobooth.fr',
  tel:    '06 65 42 07 93',
}

// ─── Composants ──────────────────────────────────────────────────────────────

function PageHeader() {
  return (
    <header className="bg-gray-50 border-b border-gray-200">
      <div className="container-max py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Fil d'ariane" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-gray-400">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-gray-600 font-medium" aria-current="page">
                Conditions Générales de Vente
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Conditions Générales de Vente
          </h1>

          <p className="text-sm text-gray-400">
            Applicables à l&apos;ensemble des prestations de location de photobooth
            proposées par {PRESTATAIRE.nom}.
            Dernière mise à jour&nbsp;:{' '}
            <time dateTime="2026-02-27">27 février 2026</time>.
          </p>

          {/* Sommaire rapide */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { href: '#reservations',     label: 'Réservation'         },
              { href: '#tarifs',           label: 'Tarifs'              },
              { href: '#annulation',       label: 'Annulation'          },
              { href: '#responsabilites',  label: 'Responsabilités'     },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-gray-500 border border-gray-200 bg-white px-3 py-2
                           hover:border-gold-400/50 hover:text-gold-600 transition-colors text-center"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

function Article({
  num,
  id,
  title,
  children,
}: {
  num:      number
  id?:      string
  title:    string
  children: React.ReactNode
}) {
  return (
    <article
      id={id}
      className="mb-10 pb-10 border-b border-gray-100 last:border-0 scroll-mt-20"
    >
      <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-baseline gap-3">
        <span className="text-gold-400 font-mono text-sm shrink-0">
          Art. {String(num).padStart(2, '0')}
        </span>
        {title}
      </h2>
      <div className="space-y-3 text-gray-600 leading-relaxed text-sm">
        {children}
      </div>
    </article>
  )
}

function Hl({ children }: { children: React.ReactNode }) {
  return <strong className="text-gray-900 font-semibold">{children}</strong>
}

function PageContent() {
  return (
    <div className="bg-white">
      <div className="container-max py-16">
        <div className="max-w-3xl mx-auto">

          {/* Préambule */}
          <div className="bg-gold-400/8 border border-gold-400/30 p-5 mb-12 text-sm text-gray-700 leading-relaxed">
            Les présentes Conditions Générales de Vente (CGV) s&apos;appliquent à toute
            commande de prestation de location de photobooth passée auprès de{' '}
            <Hl>{PRESTATAIRE.nom}</Hl> (ci-après &ldquo;le Prestataire&rdquo;)
            par tout client particulier ou professionnel (ci-après &ldquo;le Client&rdquo;).
            Toute commande implique l&apos;acceptation sans réserve des présentes CGV.
          </div>

          {/* ── Article 1 ─────────────────────────────────────────────── */}
          <Article num={1} title="Objet">
            <p>
              Les présentes CGV ont pour objet de définir les droits et obligations
              des parties dans le cadre de la location de matériel photobooth
              avec animateur, proposée par le Prestataire pour des événements
              privés et professionnels (mariages, anniversaires, séminaires,
              soirées d&apos;entreprise, salons et tout autre événement festif ou
              commercial) dans Lyon et la métropole lyonnaise.
            </p>
          </Article>

          {/* ── Article 2 ─────────────────────────────────────────────── */}
          <Article num={2} title="Identification du prestataire">
            <dl className="space-y-2">
              {[
                ['Raison sociale', PRESTATAIRE.nom   ],
                ['SIRET',          PRESTATAIRE.siret  ],
                ['Siège social',   PRESTATAIRE.siege  ],
                ['E-mail',         PRESTATAIRE.email  ],
                ['Téléphone',      PRESTATAIRE.tel    ],
              ].map(([label, val]) => (
                <div key={String(label)} className="flex flex-col sm:flex-row sm:gap-6">
                  <dt className="text-gray-500 shrink-0 sm:w-36">{label}</dt>
                  <dd className="text-gray-900 font-medium">{val}</dd>
                </div>
              ))}
            </dl>
          </Article>

          {/* ── Article 3 ─────────────────────────────────────────────── */}
          <Article num={3} title="Acceptation des CGV">
            <p>
              Le Client reconnaît avoir pris connaissance des présentes CGV
              avant toute commande. La signature du devis ou du bon de commande
              vaut acceptation pleine et entière des présentes CGV, sans restriction
              ni réserve. Les CGV en vigueur au jour de la commande sont celles
              applicables à la prestation.
            </p>
            <p>
              Pour les clients professionnels, les présentes CGV prévalent sur
              toute clause contraire figurant dans leurs propres conditions générales
              d&apos;achat, sauf accord écrit préalable du Prestataire.
            </p>
          </Article>

          {/* ── Article 4 ─────────────────────────────────────────────── */}
          <Article num={4} title="Description des prestations">
            <p>
              Le Prestataire propose la location de photobooth (photobooth ouvert,
              cabine fermée ou miroir interactif selon la formule choisie) comprenant,
              sauf mention contraire au devis&nbsp;:
            </p>
            <ul className="space-y-2 mt-2">
              {[
                "La livraison, l'installation et le démontage du matériel au lieu de l'événement ;",
                "La présence d'un animateur professionnel pendant toute la durée de la prestation ;",
                "Les impressions photos illimitées par sublimation thermique (format 10×15 cm ou bande selon la formule) ;",
                "La mise à disposition d'un assortiment d'accessoires photos (props) ;",
                "La personnalisation du cadre photo (prénoms, date, thème) validée par bon à tirer (BAT) ;",
                "La mise en ligne d'une galerie numérique accessible pendant 30 jours après l'événement.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold-400 shrink-0 mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Les prestations optionnelles (fond vinyle personnalisé imprimé,
              collecte d&apos;e-mails RGPD, galerie protégée, branding complet)
              font l&apos;objet d&apos;une tarification spécifique mentionnée au devis.
            </p>
          </Article>

          {/* ── Article 5 — Réservation ───────────────────────────────── */}
          <Article num={5} id="reservations" title="Réservation et confirmation">
            <p>
              Toute réservation donne lieu à l&apos;établissement d&apos;un devis
              personnalisé, valable <Hl>15 jours calendaires</Hl> à compter
              de sa date d&apos;émission. Passé ce délai, le Prestataire ne peut
              garantir la disponibilité à la date demandée ni le maintien
              des tarifs indiqués.
            </p>
            <p>
              La réservation est définitivement confirmée par la réunion de
              deux conditions cumulatives&nbsp;:
            </p>
            <ol className="space-y-2 mt-1 list-none">
              {[
                "Le retour du devis signé (ou du bon de commande signé pour les clients professionnels) ;",
                "Le versement de l'acompte de 30 % du montant total TTC (voir Article 8).",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-gold-400/15 text-gold-500 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p>
              Aucune date n&apos;est bloquée sans réception de ces deux éléments.
              En cas de demandes simultanées pour la même date, la priorité est
              donnée au Client ayant réglé l&apos;acompte en premier.
            </p>
          </Article>

          {/* ── Article 6 — Tarifs ────────────────────────────────────── */}
          <Article num={6} id="tarifs" title="Tarifs">
            <p>
              Les tarifs applicables sont ceux figurant au devis accepté par
              le Client. Ils sont exprimés&nbsp;:
            </p>
            <ul className="space-y-1 mt-1">
              <li className="flex items-start gap-2">
                <span className="text-gold-400 shrink-0">—</span>
                <span>
                  <Hl>Toutes taxes comprises (TTC)</Hl> pour les clients particuliers.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-400 shrink-0">—</span>
                <span>
                  <Hl>Hors taxes (HT) avec TVA applicable</Hl> pour les clients
                  professionnels (facture conforme aux obligations fiscales).
                </span>
              </li>
            </ul>
            <p>
              Les tarifs comprennent la livraison et l&apos;installation pour tout
              événement situé dans un rayon de <Hl>30 km autour de Lyon</Hl>.
              Au-delà, des frais kilométriques de <Hl>0,50 € par km supplémentaire</Hl>{' '}
              (distance aller) s&apos;appliquent et sont mentionnés au devis.
            </p>
            <p>
              Le Prestataire se réserve le droit de modifier ses tarifs à tout moment.
              Seuls les tarifs figurant au devis signé sont opposables
              au titre de la prestation concernée.
            </p>
          </Article>

          {/* ── Article 7 — Modalités de paiement ────────────────────── */}
          <Article num={7} title="Modalités de paiement">
            <p>
              Les modes de paiement acceptés sont les suivants&nbsp;:
              virement bancaire (IBAN communiqué sur le devis),
              chèque à l&apos;ordre de {PRESTATAIRE.nom}, ou espèces (dans la limite
              légale en vigueur).
            </p>
            <p>
              Le paiement par carte bancaire n&apos;est pas proposé, sauf accord
              préalable du Prestataire dans des conditions particulières.
            </p>
            <p>
              Tout retard de paiement au-delà des échéances prévues entraîne
              de plein droit, sans mise en demeure préalable, l&apos;application
              d&apos;intérêts de retard au taux légal en vigueur, majoré de
              3 points, ainsi qu&apos;une indemnité forfaitaire pour frais
              de recouvrement de <Hl>40 € HT</Hl> (pour les clients professionnels,
              conformément à l&apos;article L.441-10 du Code de commerce).
            </p>
          </Article>

          {/* ── Article 8 — Acompte ───────────────────────────────────── */}
          <Article num={8} title="Acompte et solde">
            <p>
              Un acompte de <Hl>30 % du montant total TTC</Hl> est exigé pour
              confirmer la réservation. Cet acompte est déduit du montant
              total lors de la facturation finale.
            </p>
            <p>
              Le <Hl>solde est dû au plus tard 7 jours calendaires</Hl> avant
              la date de la prestation. À défaut de règlement du solde
              dans ce délai, le Prestataire se réserve le droit de ne pas
              effectuer la prestation, l&apos;acompte versé restant acquis
              à titre d&apos;indemnité.
            </p>
            <p>
              Pour les clients professionnels disposant d&apos;un bon de commande,
              la facturation suit le processus&nbsp;: devis → bon de commande
              signé → acompte (30&nbsp;%) → BAT validé → prestation → facture soldée.
              La facture finale avec TVA est émise au terme de la prestation.
            </p>
          </Article>

          {/* ── Article 9 — Annulation ────────────────────────────────── */}
          <Article num={9} id="annulation" title="Annulation et report">
            <p>
              Toute annulation doit être notifiée par écrit (e-mail ou
              courrier recommandé) à l&apos;adresse {PRESTATAIRE.email}.
              La date de réception de l&apos;écrit fait foi.
              Les conditions d&apos;annulation sont les suivantes&nbsp;:
            </p>

            <div className="overflow-x-auto mt-3">
              <table className="w-full text-xs border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="text-left px-3 py-2 font-semibold text-gray-700">
                      Délai avant la prestation
                    </th>
                    <th className="text-left px-3 py-2 font-semibold text-gray-700">
                      Conséquences financières
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      delai:       'Plus de 60 jours',
                      consequence: "Acompte intégralement remboursé, ou report sans frais sur une date disponible.",
                    },
                    {
                      delai:       'Entre 30 et 60 jours',
                      consequence: "Acompte conservé par le Prestataire à titre d'indemnité d'immobilisation.",
                    },
                    {
                      delai:       'Entre 8 et 30 jours',
                      consequence: "50 % du montant total TTC exigible, déduction faite de l'acompte déjà versé.",
                    },
                    {
                      delai:       '7 jours ou moins',
                      consequence: "100 % du montant total TTC exigible, la prestation étant réputée réalisée.",
                    },
                  ].map((row) => (
                    <tr key={row.delai}>
                      <td className="px-3 py-2 font-medium text-gray-900 align-top whitespace-nowrap">
                        {row.delai}
                      </td>
                      <td className="px-3 py-2 text-gray-600">{row.consequence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              <Hl>Report de date</Hl>&nbsp;: le Client peut demander le report
              de la prestation sur une nouvelle date, sous réserve de disponibilité
              du Prestataire. Un seul report est accepté sans frais si la demande
              est formulée plus de 30 jours avant la date initiale.
              Tout report au-delà de ce délai est soumis à la grille d&apos;annulation
              ci-dessus, l&apos;acompte pouvant être transféré sur la nouvelle date.
            </p>

            <p>
              <Hl>Annulation par le Prestataire</Hl>&nbsp;: en cas d&apos;annulation
              à l&apos;initiative du Prestataire pour une raison autre que la force
              majeure (voir Article 15), le Client est remboursé intégralement
              de l&apos;acompte versé, et le Prestataire s&apos;engage à rechercher
              une solution de remplacement équivalente.
            </p>
          </Article>

          {/* ── Article 10 — Obligations du prestataire ──────────────── */}
          <Article num={10} title="Obligations du prestataire">
            <p>Le Prestataire s&apos;engage à&nbsp;:</p>
            <ul className="space-y-2 mt-1">
              {[
                "Livrer et installer le matériel dans les délais convenus, au minimum 1 heure avant le début de la prestation ;",
                "Fournir un matériel en parfait état de fonctionnement, contrôlé avant chaque événement ;",
                "Assurer la présence d'un animateur professionnel pendant toute la durée de la prestation ;",
                "Maintenir une astreinte téléphonique le jour de l'événement de 9 h à minuit ;",
                "Remettre au Client la galerie numérique dans un délai de 48 heures après la prestation ;",
                "Respecter la confidentialité des données personnelles collectées (voir Article 18).",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold-400 shrink-0 mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Le Prestataire est soumis à une obligation de <Hl>moyens</Hl> et non
              de résultat s&apos;agissant des conditions de prise de vue,
              lesquelles dépendent notamment de l&apos;éclairage ambiant,
              du comportement des invités et des conditions d&apos;accès au lieu.
            </p>
          </Article>

          {/* ── Article 11 — Obligations du client ───────────────────── */}
          <Article num={11} title="Obligations du client">
            <p>Le Client s&apos;engage à&nbsp;:</p>
            <ul className="space-y-2 mt-1">
              {[
                "Communiquer au Prestataire toutes les informations nécessaires (adresse précise, interlocuteur sur place, horaires d'accès, contraintes techniques) au moins 7 jours avant l'événement ;",
                "Assurer l'accès du lieu à l'équipe du Prestataire pour l'installation (au moins 1 heure avant le début) et le démontage (30 à 45 minutes après la fin) ;",
                "Mettre à disposition une prise de courant 220 V / 10 A (minimum) à moins de 5 mètres de l'emplacement du photobooth ;",
                "Prévoir un espace dégagé conforme aux exigences techniques (voir Article 12) ;",
                "Informer les invités que des photographies seront prises et que leur image peut être utilisée dans le cadre du service (galerie numérique, portfolio) ;",
                "Régler le solde dans les délais prévus à l'Article 8.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold-400 shrink-0 mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Article>

          {/* ── Article 12 — Conditions techniques ───────────────────── */}
          <Article num={12} title="Conditions techniques d'accueil">
            <p>
              Pour garantir la qualité de la prestation, le Client doit
              s&apos;assurer que le lieu de l&apos;événement répond aux exigences
              techniques minimales suivantes&nbsp;:
            </p>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-xs border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="text-left px-3 py-2 font-semibold text-gray-700">Paramètre</th>
                    <th className="text-left px-3 py-2 font-semibold text-gray-700">Exigence minimale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { param: 'Alimentation électrique', req: '220 V / 10 A, prise murale standard à moins de 5 m' },
                    { param: 'Surface au sol (photobooth ouvert)', req: '3 m × 3 m minimum dégagée' },
                    { param: 'Surface au sol (cabine fermée)', req: '2 m × 2,5 m minimum' },
                    { param: 'Hauteur sous plafond', req: '2,5 m minimum (fond inclus)' },
                    { param: 'Température ambiante', req: 'Entre 5 °C et 40 °C' },
                    { param: 'Utilisation en extérieur', req: "Obligatoirement sous structure couverte (barnum, tente, auvent). Vent ≤ 50 km/h. Non applicable pour la cabine fermée et le miroir." },
                  ].map((row) => (
                    <tr key={row.param}>
                      <td className="px-3 py-2 font-medium text-gray-900 align-top whitespace-nowrap">
                        {row.param}
                      </td>
                      <td className="px-3 py-2 text-gray-600">{row.req}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Si les conditions techniques ne sont pas réunies lors de l&apos;arrivée
              du Prestataire, ce dernier se réserve le droit de refuser
              l&apos;installation sans remboursement de l&apos;acompte si le Client
              n&apos;a pas signalé les contraintes préalablement.
            </p>
          </Article>

          {/* ── Article 13 — BAT ──────────────────────────────────────── */}
          <Article num={13} title="Personnalisation et bon à tirer (BAT)">
            <p>
              La personnalisation du cadre photo (prénoms, date, logo, couleurs)
              est réalisée par le Prestataire selon les éléments communiqués
              par le Client. Un <Hl>bon à tirer (BAT)</Hl> est transmis au Client
              par e-mail dans les 72 heures précédant l&apos;événement.
            </p>
            <p>
              Le Client dispose d&apos;un délai de <Hl>48 heures avant la prestation</Hl>{' '}
              pour valider le BAT ou demander des modifications. Passé ce délai
              sans retour du Client, le BAT est réputé approuvé et la personnalisation
              produite ne pourra pas faire l&apos;objet d&apos;une réclamation.
            </p>
            <p>
              Le Client est seul responsable de l&apos;exactitude des informations
              transmises (orthographe des prénoms, date, logo). Toute correction
              demandée après validation du BAT ou après impression entraîne
              des frais supplémentaires.
            </p>
            <p>
              Le Client garantit détenir les droits nécessaires sur tout élément
              graphique (logo, police, image) qu&apos;il transmet au Prestataire
              pour la personnalisation.
            </p>
          </Article>

          {/* ── Article 14 — Galerie numérique ───────────────────────── */}
          <Article num={14} title="Galerie numérique">
            <p>
              L&apos;ensemble des photographies prises pendant la prestation
              est mis en ligne sur une galerie numérique privée dans un délai
              de <Hl>48 heures</Hl> suivant la fin de la prestation. Le lien
              d&apos;accès (QR code et URL) est communiqué au Client par e-mail.
            </p>
            <p>
              La galerie est accessible pendant <Hl>30 jours</Hl> à compter
              de sa mise en ligne. Passé ce délai, les photos sont supprimées
              des serveurs du Prestataire sauf demande écrite de prolongation
              dans ce délai. Le Prestataire ne peut être tenu responsable
              des photos non téléchargées dans ce délai.
            </p>
            <p>
              Les photos sont fournies en haute résolution pour un usage
              personnel du Client et de ses invités. Toute utilisation
              commerciale des photographies est soumise à un accord écrit
              préalable du Prestataire.
            </p>
          </Article>

          {/* ── Article 15 — Responsabilités ─────────────────────────── */}
          <Article num={15} id="responsabilites" title="Responsabilités et assurance">
            <p>
              <Hl>Responsabilité du Prestataire&nbsp;:</Hl>{' '}
              Le Prestataire est assuré en responsabilité civile professionnelle
              pour l&apos;exercice de son activité. Sa responsabilité est limitée
              au montant de la prestation facturée. Le Prestataire ne saurait
              être tenu responsable des dommages indirects (perte de chance,
              préjudice moral) liés à un dysfonctionnement du matériel.
            </p>
            <p>
              <Hl>Responsabilité du Client&nbsp;:</Hl>{' '}
              Le Client est responsable des dommages causés au matériel du Prestataire
              par les invités ou par un défaut du lieu d&apos;accueil (humidité,
              chute, vandalisme). En cas de dommage, les frais de réparation
              ou de remplacement du matériel endommagé seront facturés au Client
              sur la base du coût réel, avec un minimum de&nbsp;:
            </p>
            <ul className="space-y-1 mt-1">
              {[
                '1 500 € pour une imprimante à sublimation thermique ;',
                '800 € pour un écran tactile ou une caméra ;',
                '200 € pour un fond en tissu ou vinyle.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gray-400 shrink-0 mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Le Prestataire ne répond pas des dommages subis par les invités
              lors de leur passage au photobooth, ceux-ci relevant de la
              responsabilité civile du Client en sa qualité d&apos;organisateur
              de l&apos;événement.
            </p>
          </Article>

          {/* ── Article 16 — Force majeure ────────────────────────────── */}
          <Article num={16} title="Force majeure">
            <p>
              Ni le Prestataire ni le Client ne peut être tenu responsable
              de l&apos;inexécution ou du retard dans l&apos;exécution de ses obligations
              contractuelles lorsque cette inexécution ou ce retard résulte
              d&apos;un cas de force majeure au sens de l&apos;article 1218 du Code civil&nbsp;:
              événement imprévisible, irrésistible et extérieur à la partie
              qui l&apos;invoque (catastrophe naturelle, grève générale, pandémie,
              décision gouvernementale, incendie, inondation, etc.).
            </p>
            <p>
              La partie invoquant la force majeure doit en informer l&apos;autre partie
              dans les plus brefs délais par tout moyen. Les parties conviennent
              de rechercher de bonne foi une solution amiable (report, prestation
              alternative). À défaut d&apos;accord dans un délai de 15 jours,
              chaque partie peut résilier le contrat de plein droit,
              sans pénalité&nbsp;; les sommes versées sont remboursées au Client
              à hauteur des prestations non réalisées.
            </p>
          </Article>

          {/* ── Article 17 — Droits sur les photos ───────────────────── */}
          <Article num={17} title="Droits sur les photographies">
            <p>
              Les photographies prises lors de la prestation appartiennent
              au Client et à ses invités. Le Prestataire ne revendique aucun
              droit de propriété sur ces images.
            </p>
            <p>
              Toutefois, sauf opposition expresse et écrite du Client formulée
              avant la prestation, le Prestataire se réserve le droit d&apos;utiliser
              un nombre limité de photographies (sans visage identifiable
              ou avec consentement explicite des personnes concernées)
              à des fins de communication commerciale&nbsp;: portfolio,
              réseaux sociaux, site internet, plaquettes commerciales.
            </p>
            <p>
              Toute demande de suppression d&apos;une image utilisée à des fins
              commerciales par le Prestataire doit être adressée par écrit
              à {PRESTATAIRE.email}. Le Prestataire s&apos;engage à retirer
              le contenu concerné dans un délai de 7 jours ouvrés.
            </p>
          </Article>

          {/* ── Article 18 — Données personnelles ────────────────────── */}
          <Article num={18} title="Données personnelles">
            <p>
              Les données personnelles collectées dans le cadre des présentes
              CGV (nom, prénom, e-mail, téléphone, données de facturation)
              sont traitées conformément à la politique de protection
              des données du Prestataire, détaillée dans les{' '}
              <Link href="/mentions-legales/#donnees-personnelles" className="text-gold-600 hover:underline">
                mentions légales du site
              </Link>.
            </p>
            <p>
              Ces données sont utilisées exclusivement pour la gestion
              de la relation commerciale, l&apos;exécution des prestations
              et les obligations légales et comptables. Elles ne sont
              pas cédées à des tiers à des fins commerciales.
            </p>
          </Article>

          {/* ── Article 19 — Médiation ────────────────────────────────── */}
          <Article num={19} title="Médiation et règlement des litiges">
            <p>
              En cas de litige, le Client est invité à contacter le Prestataire
              en priorité par e-mail à{' '}
              <a href={`mailto:${PRESTATAIRE.email}`} className="text-gold-600 hover:underline">
                {PRESTATAIRE.email}
              </a>{' '}
              afin de trouver une solution amiable. Le Prestataire s&apos;engage
              à répondre dans un délai de <Hl>15 jours ouvrés</Hl>.
            </p>
            <p>
              Conformément aux articles L.616-1 et R.616-1 du Code de la consommation,
              le Prestataire adhère à un service de médiation de la consommation.
              Tout Client consommateur peut recourir gratuitement à ce médiateur
              en cas de litige non résolu amiablement dans un délai de 60 jours.
              Les coordonnées du médiateur compétent seront communiquées
              au Client sur demande ou au bas de chaque facture.
            </p>
            <p>
              La plateforme européenne de règlement des litiges en ligne (RLL)
              est accessible à l&apos;adresse&nbsp;:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-600 hover:underline break-all"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </Article>

          {/* ── Article 20 — Droit applicable ────────────────────────── */}
          <Article num={20} title="Droit applicable et juridiction compétente">
            <p>
              Les présentes CGV sont régies par le droit français.
              En cas de litige non résolu par voie amiable ou de médiation,
              et pour les clients professionnels uniquement, la juridiction
              compétente est celle du ressort du siège social du Prestataire,
              sauf disposition légale contraire.
            </p>
            <p>
              Pour les clients consommateurs, les règles de compétence territoriale
              prévues par le Code de procédure civile et le Code de la consommation
              s&apos;appliquent.
            </p>
          </Article>

          {/* Pied de page CGV */}
          <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Consultez également nos{' '}
              <Link href="/mentions-legales/" className="text-gold-600 font-semibold hover:underline">
                Mentions légales →
              </Link>
            </p>
            <Link
              href="/"
              className="text-sm text-gray-400 hover:text-gold-500 transition-colors"
            >
              ← Retour à l&apos;accueil
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CGVPage() {
  return (
    <main>
      <PageHeader />
      <PageContent />
    </main>
  )
}
