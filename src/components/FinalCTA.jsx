import { Zap } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden section-divider">
      {/* Purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] bg-primary/12 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-8 font-[family-name:var(--font-display)]">
          Your next trade is waiting...{' '}
          <span className="text-gradient">don't let it slip away.</span>
        </h2>

        <a
          href="#pricing"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-sm font-medium text-[#f8fafc] hover:scale-105 hover:shadow-[0_0_30px_rgba(173,43,238,0.4)] transition-all duration-300"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgb(173, 43, 238), rgb(245, 61, 245), rgb(238, 43, 173))',
            padding: '12px 24px',
            fontFamily: 'Inter',
          }}
        >
          <Zap className="w-5 h-5" />
          Get Nexus Algo
        </a>
      </div>
    </section>
  )
}
