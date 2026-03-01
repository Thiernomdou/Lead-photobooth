export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Ambient glow */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gold-400/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gold-400/8 blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/30 px-4 py-2 mb-10">
          <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
          <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
            Lyon &amp; Agglomération — Livraison incluse
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
          Location{' '}
          <span className="text-gold-400">Photobooth</span>
          <br />
          à Lyon
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed">
          Transformez vos événements en souvenirs inoubliables.
          Photobooth premium pour mariages, anniversaires et soirées d&apos;entreprise.
        </p>

        <p className="text-sm text-gray-500 mb-10 tracking-wide">
          ✓ Animateur inclus &nbsp;·&nbsp; ✓ Photos illimitées &nbsp;·&nbsp;
          ✓ Personnalisation incluse &nbsp;·&nbsp; ✓ Devis gratuit en 24h
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary text-base !px-10 !py-5">
            Obtenir mon devis gratuit
          </a>
          <a href="#galerie" className="btn-outline text-base !px-10 !py-5">
            Voir la galerie
          </a>
        </div>

        {/* Engagement */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
            Devis gratuit en 24h — Sans engagement
          </p>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
