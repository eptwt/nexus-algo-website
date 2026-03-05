import { Zap, BookOpen, ChartColumnBig } from 'lucide-react'

const steps = [
  {
    icon: Zap,
    number: '01',
    title: 'Signal',
    subtitle: 'Identify Direction',
    description:
      'A signal fires on PRO and gives you directional bias. The tiered system tells you how strong the conditions are.',
  },
  {
    icon: BookOpen,
    number: '02',
    title: 'Strategy',
    subtitle: 'Build Your Plan',
    description:
      'Match the signal to a named strategy — The Structure Flip, The OB Bounce, The Confluence Stack — which gives you exact rules for entry, stop, and target.',
  },
  {
    icon: ChartColumnBig,
    number: '03',
    title: 'Confirmation',
    subtitle: 'Validate the Setup',
    description:
      'Check the Oscillator to confirm momentum, volume, and RSI support the trade. No more guessing if the setup has real order flow behind it.',
  },
]

export default function Workflow() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden section-divider">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 font-[family-name:var(--font-display)]">
            The Workflow That Replaces Guesswork
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Signal tells you where to look. Strategy tells you how to trade. Oscillator tells you whether the trade
            is backed by real order flow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className={`p-5 rounded-xl border transition-all duration-300 ${
                  i === 1
                    ? 'border-primary/30 bg-primary/5 hover:border-primary/50 hover:scale-[1.02]'
                    : 'border-border/50 bg-card hover:border-primary/30'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary/60 font-[family-name:var(--font-mono)]">
                    STEP {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-sm font-medium text-primary mb-2">{step.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
