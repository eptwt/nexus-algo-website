import { useState } from 'react'
import { ArrowLeft, ArrowRight, MessageSquare, CircleCheckBig } from 'lucide-react'

const testimonials = [
  {
    name: 'Jake M.',
    initials: 'JM',
    stars: 5,
    text: '"The tiered signal system changed how I approach every trade. Instead of blindly following arrows, I now understand the conviction behind each signal. PREMIUM setups are genuinely high-quality."',
  },
  {
    name: 'Sarah K.',
    initials: 'SK',
    stars: 5,
    text: '"I used to have 6 indicators cluttering my chart and still second-guessed myself. Nexus Algo replaced all of them. The workflow is so clean — signal, strategy, confirmation. Done."',
  },
  {
    name: 'Marcus T.',
    initials: 'MT',
    stars: 5,
    text: '"The News Ghost is unlike anything I\'ve seen. Being able to see how price reacted to previous NFP events directly on my chart gave me an edge I didn\'t know I was missing."',
  },
  {
    name: 'Alex R.',
    initials: 'AR',
    stars: 5,
    text: '"Smart Money Concepts built right into the overlay — no separate indicator needed. The volume-ranked order blocks actually tell you which zones matter. Game changer for my ICT-style trading."',
  },
  {
    name: 'David L.',
    initials: 'DL',
    stars: 4.5,
    text: '"The multi-timeframe dashboard alone is worth the subscription. 14 data points at a glance, no more flipping between charts. I can build my bias in seconds now."',
  },
  {
    name: 'Priya N.',
    initials: 'PN',
    stars: 5,
    text: '"Finally an indicator that respects my intelligence. No fake promises, no \'guaranteed profits\' — just a solid system that helps me make better decisions. The Discord community is incredibly helpful too."',
  },
]

function StarIcon({ filled = true }) {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill={filled ? '#00b67a' : '#00b67a50'}
      />
    </svg>
  )
}

export default function Testimonials() {
  const [page, setPage] = useState(0)
  const perPage = 2
  const totalPages = Math.ceil(testimonials.length / perPage)

  return (
    <section id="testimonials" className="py-16 sm:py-24 relative overflow-hidden section-divider">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-primary/10 border-primary/20 mb-5">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-widest">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 font-[family-name:var(--font-display)]">
            Trusted by Traders Who Demand More From Their Charts
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Real results from traders who stopped stacking indicators and started trading with a system.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {testimonials.slice(page * perPage, page * perPage + perPage).map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border/50 rounded-xl p-5 sm:p-6 flex flex-col h-full hover:border-[#00b67a]/30 transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} filled={i < Math.floor(t.stars)} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <div className="flex items-center gap-1">
                    <CircleCheckBig className="w-3 h-3 text-[#00b67a]" />
                    <span className="text-[#00b67a] text-xs font-medium">Verified on Trustpilot</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="rounded-full h-9 w-9 border border-border/50 bg-background hover:bg-accent flex items-center justify-center disabled:opacity-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === page ? 'w-5 h-2 bg-primary' : 'w-2 h-2 bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="rounded-full h-9 w-9 border border-border/50 bg-background hover:bg-accent flex items-center justify-center disabled:opacity-50 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
