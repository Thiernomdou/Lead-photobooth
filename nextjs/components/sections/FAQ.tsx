'use client'

import { useState } from 'react'

const FAQS = [
  {
    q: 'Quelle est la zone de livraison ?',
    a: "Nous livrons et installons le photobooth sur toute la métropole de Lyon et jusqu'à 30 km aux alentours (Villeurbanne, Vénissieux, Bron, Décines, Caluire, etc.). Au-delà, contactez-nous pour un devis personnalisé.",
  },
  {
    q: 'Quel est le délai minimum pour réserver ?',
    a: "Nous recommandons de réserver au minimum 3 semaines à l'avance, surtout en haute saison (juin-septembre, décembre). Nous faisons notre possible pour les demandes de dernière minute — contactez-nous pour vérifier les disponibilités.",
  },
  {
    q: 'Combien de personnes peuvent utiliser le photobooth simultanément ?',
    a: "Notre photobooth peut accueillir jusqu'à 8 à 10 personnes sur une même photo selon le modèle. Pour les grands événements ou l'extérieur, nous proposons des solutions adaptées.",
  },
  {
    q: 'Le photobooth fonctionne-t-il en extérieur ?',
    a: "Oui, sous certaines conditions météo. L'équipement doit être à l'abri du vent, de la pluie et de la lumière solaire directe. Un espace minimum de 3 m × 3 m est nécessaire. Nous évaluons chaque situation au cas par cas.",
  },
  {
    q: 'Les photos sont-elles imprimées sur place ?',
    a: "Oui, selon la formule choisie. L'impression est instantanée (8-12 secondes) en format 10×15 cm ou bande de 3 photos. Nous utilisons de l'encre sublimation professionnelle, résistante à l'eau, qui dure plusieurs dizaines d'années.",
  },
  {
    q: 'Peut-on personnaliser les impressions avec notre logo ou les prénoms des mariés ?',
    a: "Absolument. Chaque impression peut être personnalisée avec le texte de votre choix, votre logo, un cadre graphique et les couleurs de votre événement. Nos designers préparent un bon à tirer que vous validez avant la soirée.",
  },
  {
    q: "Y a-t-il un animateur pendant toute la durée de l'événement ?",
    a: "Oui, toutes nos formules incluent un animateur professionnel présent du début à la fin. Il installe le matériel, accueille vos invités, les aide à prendre les meilleures photos et veille au bon déroulement.",
  },
  {
    q: "Comment fonctionne le paiement et l'annulation ?",
    a: "Un acompte de 30 % est demandé à la réservation pour bloquer votre date, le solde est réglé 7 jours avant l'événement. En cas d'annulation à plus de 30 jours, l'acompte est remboursé intégralement. Consultez nos CGV pour les détails.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">Vous avez des questions ?</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-4">
              FAQ
            </h2>
            <p className="text-gray-600">
              Toutes les réponses à vos questions sur la location de photobooth à Lyon.
            </p>
          </div>

          <dl className="space-y-2">
            {FAQS.map((faq, i) => {
              const isOpen = open === i
              const id = `faq-answer-${i}`

              return (
                <div key={i} className="bg-white border border-gray-200">
                  <dt>
                    <button
                      aria-expanded={isOpen}
                      aria-controls={id}
                      className="w-full flex items-center justify-between px-6 py-5 text-left
                                 hover:bg-gray-50 transition-colors focus-visible:outline-none
                                 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold-400"
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span className="font-semibold text-gray-900 pr-6">{faq.q}</span>
                      <svg
                        aria-hidden
                        className={`w-5 h-5 text-gold-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </dt>
                  <dd
                    id={id}
                    role="region"
                    aria-hidden={!isOpen}
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-80' : 'max-h-0'}`}
                  >
                    <p className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.a}</p>
                  </dd>
                </div>
              )
            })}
          </dl>

          <p className="text-center text-gray-500 text-sm mt-10">
            Pas trouvé votre réponse ?{' '}
            <a href="#contact" className="text-gold-500 font-semibold hover:underline">
              Contactez-nous →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
