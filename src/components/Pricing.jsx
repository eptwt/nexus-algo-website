import { Zap, Lock, Check, CircleCheckBig } from 'lucide-react'

const plans = [
  {
    name: 'Monthly Plan',
    price: '$49',
    period: 'per month',
    originalPrice: '$79.99',
    featured: false,
    cta: 'Start 7-Day Risk-Free Trial',
    features: [
      'Full access to all 3 indicators',
      '7 named trading strategies',
      'Multi-timeframe dashboard',
      'All alert conditions',
      'Private Discord community',
      'Strategy guides & education',
    ],
  },
  {
    name: 'Quarterly Plan',
    price: '$97',
    period: 'per quarter',
    originalPrice: '$149.99',
    featured: true,
    badge: 'Most Popular',
    savings: 'Save 35%',
    cta: 'Start 7-Day Risk-Free Trial',
    features: [
      'Everything in Monthly',
      'Priority support',
      'Early access to new features',
      'Extended strategy library',
      'Trade review sessions',
      'Exclusive setups channel',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 relative overflow-hidden section-divider">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-primary/10 border-primary/20 mb-5">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-widest">
              Simple Pricing
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 font-[family-name:var(--font-display)]">
            Try It Risk-Free
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Full refund within 7 days, no questions asked. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl ${
                plan.featured
                  ? 'bg-card border-2 border-primary/50 shadow-lg shadow-primary/10'
                  : 'bg-card/50 border border-border/50'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-6 z-10">
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-success text-white shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-8">
                <div className="inline-flex px-3 py-1 rounded-full border border-primary/30 bg-primary/10 mb-4">
                  <span className="text-sm text-primary font-medium">{plan.name}</span>
                </div>

                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-2xl text-muted-foreground/60 line-through">{plan.originalPrice}</span>
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.savings && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-success/20 text-success">
                      {plan.savings}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-6">{plan.period}</p>

                <a
                  href="#"
                  className="w-full rounded-full border border-white/20 text-sm font-medium text-[#f8fafc] hover:scale-105 hover:shadow-[0_0_30px_rgba(173,43,238,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, rgb(173, 43, 238), rgb(245, 61, 245), rgb(238, 43, 173))',
                    padding: '12px 24px',
                    fontFamily: 'Inter',
                  }}
                >
                  <Zap className="w-5 h-5" />
                  {plan.cta}
                </a>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CircleCheckBig className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-center gap-2 mt-6 text-xs text-muted-foreground">
                  <Lock className="w-3 h-3" />
                  <span>Instant Access</span>
                  <span className="text-muted-foreground/30">|</span>
                  <span>Cancel Any Time</span>
                  <span className="text-muted-foreground/30">|</span>
                  <span>7-Day Money Back</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
