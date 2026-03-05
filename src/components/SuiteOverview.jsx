import { Sparkles } from 'lucide-react'

export default function SuiteOverview() {
  return (
    <section id="features" className="py-16 sm:py-24 relative overflow-hidden section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-primary/10 border-primary/20 mb-5">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-widest">
              A Complete Trading System
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 font-[family-name:var(--font-display)]">
            Three Indicators. One Clear Workflow. One Informed Plan.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Most traders stack 5-6 indicators and still second-guess every entry. Nexus Algo replaces the noise
            with a structured signal-to-strategy-to-confirmation workflow that helps you read the market, build a
            directional bias, and confirm your plan before you trade.
          </p>
        </div>
      </div>
    </section>
  )
}
