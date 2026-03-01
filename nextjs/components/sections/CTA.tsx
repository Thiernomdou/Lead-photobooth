const TRUST = [
  { icon: '🔒', label: 'Paiement sécurisé' },
  { icon: '⚡', label: 'Réponse en 24h'    },
  { icon: '⭐', label: '4.9/5 · 127 avis'  },
  { icon: '🚚', label: 'Livraison incluse'  },
]

export default function CTA() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-gold-400/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-gold-400/8 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
          Prêt à créer des souvenirs ?
        </span>

        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
          Réservez votre photobooth
          <br />
          <span className="text-gold-400">à Lyon dès maintenant</span>
        </h2>

        <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
          Devis gratuit et personnalisé en moins de 24h.
          Disponibilité vérifiée immédiatement.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#contact" className="btn-primary text-base !px-10 !py-5">
            Obtenir mon devis gratuit
          </a>
          <a href="tel:+33665420793" className="btn-outline text-base !px-10 !py-5">
            📞 Appeler directement
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10">
          {TRUST.map(({ icon, label }) => (
            <div key={label} className="text-center">
              <span className="text-3xl" aria-hidden>{icon}</span>
              <p className="text-gray-400 text-sm mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
