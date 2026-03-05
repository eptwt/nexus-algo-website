import { UserPlus, CreditCard, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Create a TradingView Account',
    description:
      'Sign up for TradingView Essential or higher. If you already have an account, skip to step 2.',
  },
  {
    icon: CreditCard,
    number: '02',
    title: 'Get Your Nexus Algo Membership',
    description:
      "Choose your plan and connect your TradingView username. You'll receive instant access to all three indicators.",
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Start Trading',
    description:
      'Open TradingView, go to Indicators → Invite-Only Scripts, and add Nexus Algo PRO, Oscillator, and News Ghost to your chart.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden section-divider">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 font-[family-name:var(--font-display)]">
            Get Started in 3 Minutes
          </h2>
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
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
