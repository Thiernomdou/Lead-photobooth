import Link from 'next/link'
import { METADATA_PRESETS } from '@/lib/metadata'

export const metadata = METADATA_PRESETS.mentionsLegales

// ─── Données éditeur ──────────────────────────────────────────────────────────
// ⚠ À compléter avec les informations juridiques réelles avant mise en ligne

const EDITEUR = {
  nom:          'Location Photobooth',
  forme:        'Micro-entreprise',
  siret:        '[À COMPLÉTER — 14 chiffres]',
  siege:        'Lyon (69000) — Auvergne-Rhône-Alpes, France',
  tel:          '06 65 42 07 93',
  email:        'contact.kivio@gmail.com',
  directeur:    '[Prénom NOM du responsable]',
}

const HEBERGEUR = {
  nom:     'Vercel Inc.',
  adresse: '340 Pine Street, Suite 701 — San Francisco, CA 94104, États-Unis',
  site:    'https://vercel.com',
  contact: 'https://vercel.com/legal/privacy-policy',
}

// ─── Composants ──────────────────────────────────────────────────────────────

function PageHeader() {
  return (
    <header className="bg-gray-50 border-b border-gray-200">
      <div className="container-max py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Fil d'ariane" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-gray-400">
              <li><Link href="/" className="hover:text-gold-400 transition-colors">Accueil</Link></li>
              <li aria-hidden>/</li>
              <li className="text-gray-600 font-medium" aria-current="page">Mentions légales</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Mentions légales
          </h1>
          <p className="text-sm text-gray-400">
            Conformément à la loi n°&nbsp;2004-575 du 21&nbsp;juin&nbsp;2004
            pour la confiance dans l&apos;économie numérique (LCEN).
            Dernière mise à jour&nbsp;:{' '}
            <time dateTime="2026-02-27">27 février 2026</time>.
          </p>
        </div>
      </div>
    </header>
  )
}

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-5 pb-3 border-b border-gray-200">
        {title}
      </h2>
      <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
        {children}
      </div>
    </section>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-6">
      <dt className="text-gray-500 font-medium shrink-0 sm:w-44">{label}</dt>
      <dd className="text-gray-900">{value}</dd>
    </div>
  )
}

function PageContent() {
  return (
    <div className="bg-white">
      <div className="container-max py-16">
        <div className="max-w-3xl mx-auto">

          {/* 1. Éditeur */}
          <Section id="editeur" title="1. Éditeur du site">
            <p>
              Le site <strong className="text-gray-900">photobooth-evenement.fr</strong> est édité par&nbsp;:
            </p>
            <dl className="space-y-3 bg-gray-50 border border-gray-200 p-5 mt-2">
              <Row label="Raison sociale"         value={EDITEUR.nom}       />
              <Row label="Forme juridique"         value={EDITEUR.forme}     />
              <Row label="SIRET"                   value={EDITEUR.siret}     />
              <Row label="Siège social"            value={EDITEUR.siege}     />
              <Row label="Téléphone"               value={EDITEUR.tel}       />
              <Row label="E-mail de contact"       value={EDITEUR.email}     />
            </dl>
          </Section>

          {/* 2. Directeur de la publication */}
          <Section id="directeur" title="2. Directeur de la publication">
            <p>
              Le directeur de la publication est{' '}
              <strong className="text-gray-900">{EDITEUR.directeur}</strong>,
              responsable éditorial du site photobooth-evenement.fr.
            </p>
            <p>
              Pour toute question relative au contenu du site, vous pouvez le contacter
              à l&apos;adresse suivante&nbsp;:{' '}
              <a
                href={`mailto:${EDITEUR.email}`}
                className="text-gold-600 hover:underline font-medium"
              >
                {EDITEUR.email}
              </a>
            </p>
          </Section>

          {/* 3. Hébergement */}
          <Section id="hebergement" title="3. Hébergement">
            <p>
              Le site photobooth-evenement.fr est hébergé par&nbsp;:
            </p>
            <dl className="space-y-3 bg-gray-50 border border-gray-200 p-5 mt-2">
              <Row label="Hébergeur"   value={HEBERGEUR.nom}     />
              <Row label="Adresse"     value={HEBERGEUR.adresse} />
            </dl>
            <p>
              Politique de confidentialité de l&apos;hébergeur&nbsp;:{' '}
              <a
                href={HEBERGEUR.contact}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-600 hover:underline"
              >
                {HEBERGEUR.contact}
              </a>
            </p>
          </Section>

          {/* 4. Propriété intellectuelle */}
          <Section id="propriete" title="4. Propriété intellectuelle">
            <p>
              L&apos;ensemble du contenu de ce site — textes, photographies,
              illustrations, logos, icônes, mise en page — est la propriété exclusive
              de <strong className="text-gray-900">Location Photobooth</strong> ou
              de ses partenaires, et est protégé par les lois françaises et internationales
              relatives à la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation
              ou exploitation de tout ou partie des contenus du site, par quelque procédé
              que ce soit, est strictement interdite sans autorisation préalable et écrite
              de Location Photobooth.
            </p>
            <p>
              Les marques et logos figurant sur le site sont des marques déposées.
              Toute reproduction non autorisée de ces marques constitue une contrefaçon
              passible de poursuites judiciaires.
            </p>
            <p>
              En revanche, les liens hypertextes pointant vers le site
              photobooth-evenement.fr sont autorisés sans demande préalable,
              sous réserve de ne pas nuire à l&apos;image de la marque.
            </p>
          </Section>

          {/* 5. Données personnelles */}
          <Section id="donnees-personnelles" title="5. Données personnelles et RGPD">
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD —
              Règlement UE 2016/679) et à la loi Informatique et Libertés modifiée,
              vous disposez de droits sur vos données personnelles.
            </p>

            <div className="space-y-6 mt-2">

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Responsable du traitement
                </h3>
                <p>
                  Le responsable du traitement des données est{' '}
                  <strong className="text-gray-900">{EDITEUR.directeur}</strong>,
                  joignable à l&apos;adresse{' '}
                  <a href={`mailto:${EDITEUR.email}`} className="text-gold-600 hover:underline">
                    {EDITEUR.email}
                  </a>.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Données collectées et finalités
                </h3>
                <p className="mb-3">
                  Les données personnelles collectées sur ce site le sont
                  exclusivement via le formulaire de contact et dans le cadre
                  de nos prestations. Les traitements mis en œuvre sont les suivants&nbsp;:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100 border-b border-gray-200">
                        <th className="text-left px-3 py-2 font-semibold text-gray-700">Donnée</th>
                        <th className="text-left px-3 py-2 font-semibold text-gray-700">Finalité</th>
                        <th className="text-left px-3 py-2 font-semibold text-gray-700">Base légale</th>
                        <th className="text-left px-3 py-2 font-semibold text-gray-700">Durée de conservation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        {
                          donnee:    'Nom, prénom, e-mail, téléphone',
                          finalite:  'Répondre aux demandes de devis et gérer la relation client',
                          base:      'Intérêt légitime / Exécution contractuelle',
                          duree:     '3 ans après le dernier contact',
                        },
                        {
                          donnee:    'E-mail (collecte lors de la prestation)',
                          finalite:  'Envoi de la galerie numérique après l\'événement',
                          base:      'Consentement explicite',
                          duree:     '30 jours après l\'événement',
                        },
                        {
                          donnee:    'Données de facturation',
                          finalite:  'Obligations comptables et fiscales',
                          base:      'Obligation légale',
                          duree:     '10 ans (durée légale)',
                        },
                      ].map((row) => (
                        <tr key={row.donnee}>
                          <td className="px-3 py-2 text-gray-700">{row.donnee}</td>
                          <td className="px-3 py-2 text-gray-600">{row.finalite}</td>
                          <td className="px-3 py-2 text-gray-600">{row.base}</td>
                          <td className="px-3 py-2 text-gray-600">{row.duree}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Destinataires des données
                </h3>
                <p>
                  Vos données personnelles ne sont pas vendues, louées ni cédées
                  à des tiers. Elles peuvent être transmises à des sous-traitants
                  techniques (hébergeur, outil d&apos;envoi d&apos;e-mails) dans le cadre
                  strict de nos obligations contractuelles, sous couvert d&apos;un accord
                  de confidentialité.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Vos droits
                </h3>
                <p className="mb-3">
                  Conformément au RGPD, vous disposez des droits suivants concernant
                  vos données personnelles&nbsp;:
                </p>
                <ul className="space-y-2">
                  {[
                    ['Droit d\'accès',       "Obtenir une copie des données vous concernant que nous détenons."],
                    ['Droit de rectification', "Corriger toute donnée inexacte ou incomplète."],
                    ['Droit à l\'effacement', "Demander la suppression de vos données, sous réserve de nos obligations légales."],
                    ['Droit à la limitation', "Limiter le traitement de vos données dans certaines circonstances."],
                    ['Droit à la portabilité', "Recevoir vos données dans un format structuré et lisible par machine."],
                    ['Droit d\'opposition',   "Vous opposer au traitement de vos données pour des motifs légitimes."],
                  ].map(([droit, desc]) => (
                    <li key={String(droit)} className="flex items-start gap-2">
                      <span className="text-gold-400 shrink-0 font-bold mt-0.5">→</span>
                      <span>
                        <strong className="text-gray-800">{droit}&nbsp;: </strong>
                        {desc}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, adressez votre demande par e-mail à{' '}
                  <a href={`mailto:${EDITEUR.email}`} className="text-gold-600 hover:underline font-medium">
                    {EDITEUR.email}
                  </a>{' '}
                  en indiquant votre nom, prénom et, si possible, une copie d&apos;une
                  pièce d&apos;identité. Nous vous répondrons dans un délai de 30&nbsp;jours.
                </p>
                <p className="mt-3">
                  Si vous estimez que vos droits ne sont pas respectés, vous disposez
                  du droit d&apos;introduire une réclamation auprès de la{' '}
                  <a
                    href="https://www.cnil.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-600 hover:underline"
                  >
                    Commission Nationale de l&apos;Informatique et des Libertés (CNIL)
                  </a>.
                </p>
              </div>
            </div>
          </Section>

          {/* 6. Cookies */}
          <Section id="cookies" title="6. Cookies">
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal
              (ordinateur, tablette ou smartphone) lors de la visite d&apos;un site web.
            </p>

            <div className="space-y-5 mt-2">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cookies strictement nécessaires</h3>
                <p>
                  Ces cookies sont indispensables au fonctionnement du site
                  (session, sécurité). Ils ne peuvent pas être désactivés
                  et ne nécessitent pas votre consentement.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cookies analytiques</h3>
                <p>
                  Si des outils de mesure d&apos;audience sont déployés sur ce site,
                  ils peuvent déposer des cookies pour mesurer la fréquentation
                  (nombre de visites, pages consultées, durée de session).
                  Ces cookies sont anonymisés et ne permettent pas d&apos;identifier
                  les visiteurs individuellement. Votre consentement est recueilli
                  avant tout dépôt.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Gestion de vos préférences</h3>
                <p>
                  Vous pouvez à tout moment paramétrer votre navigateur pour
                  accepter ou refuser les cookies. Ce paramétrage peut modifier
                  votre expérience de navigation. Les principaux navigateurs
                  permettent de gérer les cookies via leurs paramètres
                  (Outils&nbsp;→ Options, ou Paramètres&nbsp;→ Confidentialité).
                </p>
              </div>
            </div>
          </Section>

          {/* 7. Limitation de responsabilité */}
          <Section id="responsabilite" title="7. Limitation de responsabilité">
            <p>
              Location Photobooth s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour
              des informations diffusées sur ce site. Toutefois, nous ne pouvons
              garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations
              mises à disposition.
            </p>
            <p>
              Location Photobooth décline toute responsabilité pour&nbsp;:
            </p>
            <ul className="space-y-2 mt-2">
              {[
                "Toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site.",
                "Tout dommage résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations diffusées.",
                "Tout préjudice indirect, quelle qu'en soit la cause, consécutif à l'accès ou à l'utilisation du site.",
                "La disponibilité continue du site — des interruptions pour maintenance ou incident technique peuvent survenir.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gray-300 shrink-0 mt-0.5">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Le site peut contenir des liens hypertextes vers des sites tiers.
              Location Photobooth n&apos;exerce aucun contrôle sur ces sites et
              n&apos;en est pas responsable.
            </p>
          </Section>

          {/* 8. Droit applicable */}
          <Section id="droit" title="8. Droit applicable et juridiction compétente">
            <p>
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige relatif à l&apos;interprétation ou à l&apos;exécution
              des présentes, les tribunaux français seront seuls compétents.
            </p>
            <p>
              Toute réclamation amiable peut être adressée à&nbsp;:{' '}
              <a href={`mailto:${EDITEUR.email}`} className="text-gold-600 hover:underline font-medium">
                {EDITEUR.email}
              </a>
            </p>
          </Section>

          {/* Lien vers CGV */}
          <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Consultez également nos{' '}
              <Link href="/cgv/" className="text-gold-600 font-semibold hover:underline">
                Conditions Générales de Vente →
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

export default function MentionsLegalesPage() {
  return (
    <main>
      <PageHeader />
      <PageContent />
    </main>
  )
}
