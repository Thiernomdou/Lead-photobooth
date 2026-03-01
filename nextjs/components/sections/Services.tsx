const SERVICES = [
  {
    id:          'mariage',
    emoji:       '💍',
    title:       'Photobooth Mariage',
    subtitle:    'Le souvenir parfait de votre jour J',
    description: "Sublimez votre mariage avec un photobooth élégant et personnalisé aux couleurs de votre thème. Accessoires premium, impressions instantanées et galerie en ligne inclus.",
    features: [
      'Personnalisation aux couleurs du mariage',
      'Accessoires premium illimités',
      'Galerie photo en ligne 60 jours',
      'Animateur professionnel',
      'Impressions instantanées 10×15 cm',
    ],
    price: 'À partir de 299 €',
    badge: 'Le plus demandé',
  },
  {
    id:          'anniversaire',
    emoji:       '🎉',
    title:       'Photobooth Anniversaire',
    subtitle:    'Une fête mémorable pour tous les âges',
    description: "Du 18 ans au 50 ans, de l'anniversaire enfant à la retraite — nous adaptons notre setup à l'ambiance de votre fête pour créer des souvenirs uniques.",
    features: [
      'Thème personnalisé',
      'Props festifs et originaux',
      'Partage QR code instantané',
      'Galerie en ligne 30 jours',
      'Photomaton tactile',
    ],
    price: 'À partir de 249 €',
    badge: null,
  },
  {
    id:          'entreprise',
    emoji:       '🏢',
    title:       'Photobooth Entreprise',
    subtitle:    'Image de marque & team building',
    description: "Renforcez votre image lors de vos événements corporate. Logos, charte graphique, collecte de données RGPD — un outil marketing et RH puissant.",
    features: [
      "Branded aux couleurs de l'entreprise",
      'Collecte emails RGPD compliant',
      'Export CSV des données',
      'Contrat & bon de commande',
      'Disponible pour salons et stands',
    ],
    price: 'Sur devis',
    badge: 'B2B',
  },
]

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">Ce qu&apos;on propose</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-5">
            Un photobooth pour chaque événement
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trois offres pensées pour répondre à vos besoins, toutes livrées et installées
            à Lyon et dans l&apos;agglomération.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="relative bg-white border border-gray-200 p-8 flex flex-col
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {s.badge && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-gold-400 text-black text-xs font-bold px-3 py-1">
                    {s.badge}
                  </span>
                </div>
              )}

              <span className="text-4xl mb-5 block" aria-hidden>{s.emoji}</span>
              <h3 className="text-xl font-serif font-bold text-gray-900">{s.title}</h3>
              <p className="text-sm text-gold-500 font-medium mt-1 mb-4">{s.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{s.description}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                <span className="text-xl font-serif font-bold text-gray-900">{s.price}</span>
                <a href="#contact" className="btn-primary !px-5 !py-2.5 text-sm">
                  Devis gratuit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
