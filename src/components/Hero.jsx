import { Zap, TrendingUp, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 pb-8 sm:pb-16">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[400px] bg-primary/12 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[250px] bg-primary/20 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Social proof badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-6 animate-fade-in"
          style={{ animationDelay: '0ms' }}
        >
          <TrendingUp className="w-4 h-4 text-primary" />
          <span className="text-xs sm:text-sm font-medium text-primary">
            Trusted by traders across Forex, Crypto, Futures & Stocks
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 font-[family-name:var(--font-display)] animate-scale-in"
          style={{ animationDelay: '0.1s' }}
        >
          The Trading System That{' '}
          <span className="text-gradient">Simplifies Your Entire Chart</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          3 indicators. 13+ features. One complete trading system — built for traders who want
          institutional-grade analysis without the clutter.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
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
            Try Nexus Algo Risk-Free for 7 Days
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-foreground border border-white/20 bg-white/10 hover:bg-white/15 backdrop-blur-sm hover:scale-105 transition-all duration-300"
          >
            <Shield className="w-4 h-4" />
            See How It Works
          </a>
        </div>

        {/* Trust indicators */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Instant Access
          </span>
          <span className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Cancel Any Time
          </span>
          <span className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            7-Day Money Back Guarantee
          </span>
        </div>
      </div>
    </section>
  )
}
