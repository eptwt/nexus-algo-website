import {
  ChartColumnBig,
  TrendingUp,
  Brain,
  Target,
  Search,
  Lightbulb,
} from 'lucide-react'

const features = [
  {
    label: 'Main Chart Overlay',
    icon: ChartColumnBig,
    headline: 'Your Entire Market Read - One Indicator',
    description:
      'Nexus Algo PRO replaces the patchwork of tools cluttering your chart. Trend direction, signal tiers, order blocks, fair value gaps, liquidity sweeps, market structure breaks, and auto-calculated TP/SL levels - all in a single overlay that adapts to what the market is actually doing.',
    bullets: [
      'Trend Ribbon with gradient candle coloring shows conviction at a glance',
      '3-tier signal system (BUY → STRONG → PREMIUM) gives you context, not just arrows',
      'Smart Money Concepts built in - order blocks, FVGs, liquidity sweeps, BOS/CHoCH',
    ],
    color: 'primary',
  },
  {
    label: 'Confirmation Pane',
    icon: TrendingUp,
    headline: 'Now You Know If the Signal Is Real',
    description:
      "Signals without confirmation are just decoration. The Oscillator sits below your chart and answers the one question that matters: is there actual momentum, volume, and RSI behind this move? Dynamic zones shift with the trend so you stop getting faked out by static overbought/oversold levels that don't account for market context.",
    bullets: [
      'RSI with dynamic zones - thresholds shift based on trend direction',
      'Momentum histogram shows acceleration vs. deceleration in real time',
      'Volume delta estimation reveals whether buyers or sellers are in control',
    ],
    color: 'teal',
  },
  {
    label: 'Event Overlay',
    icon: Brain,
    headline: 'See What Happened Last Time - Before It Happens Again',
    description:
      "NFP, CPI, FOMC - these events move markets in minutes. Instead of guessing, Nexus Algo projects ghost candles from up to 6 previous events directly onto your current chart. You see the actual historical price action, normalized to today's price level, so you can plan entries, stops, and targets around what the data says - not what Twitter thinks.",
    bullets: [
      'Ghost candles from previous events rendered at current price with fading opacity',
      'Average path line shows consensus direction and magnitude of typical moves',
      'Stats dashboard with bull bias %, average move size, max up/down, and countdown',
    ],
    color: 'purple',
  },
  {
    label: 'Directional Bias Engine',
    icon: Target,
    headline: 'Not All Signals Are Created Equal',
    description:
      "Most indicators give you one signal and wish you luck. Nexus Algo's tiered conviction system gives you context on how strongly conditions align. A basic BUY means the trend is favorable. A STRONG BUY means volume and RSI support the bias. A PREMIUM BUY means structure, momentum, and higher timeframes all agree. Signals tell you where to look - pair them with Nexus Algo's named strategies to build your actual trade plan.",
    bullets: [
      'BUY/SELL for directional bias in trending conditions',
      'STRONG signals add volume and RSI confirmation',
      'PREMIUM signals require multi-timeframe alignment and structural confluence',
    ],
    color: 'amber',
  },
  {
    label: 'Institutional Footprints',
    icon: Search,
    headline: 'See Where the Big Players Are Positioned',
    description:
      'Retail traders need 4-5 separate indicators to map order blocks, fair value gaps, liquidity sweeps, and market structure. Nexus Algo integrates all of it into one overlay - with volume-ranked order blocks that tell you which zones actually matter, mitigation tracking that keeps context on screen, and confluence detection that highlights where multiple institutional concepts stack.',
    bullets: [
      'Order blocks with LOUD / HIGH / Soft volume ranking',
      'Fair value gaps with auto-extension and noise filtering',
      'Liquidity sweep detection with ATR-scaled wick rejection',
    ],
    color: 'rose',
  },
  {
    label: 'Real-Time Intelligence',
    icon: Lightbulb,
    headline: '14 Data Points. One Glance. Complete Clarity.',
    description:
      "No more flipping between timeframes to piece together a bias. The dashboard gives you trend direction across 4 timeframes, live RSI, ATR, volume, signal counts, structure bias, trailing stop status, session bias, R:R ratio, and confluence zone count - all updating in real time. It's the command center that turns scattered information into a single, informed view of the market.",
    bullets: [
      '4-timeframe trend confluence scoring',
      'Live R:R calculation and trailing stop status',
      'Session bias engine detects Asia range breakout direction',
    ],
    color: 'sky',
  },
]

const colorMap = {
  primary: { bg: 'bg-primary/10', border: 'border-primary/20', text: 'text-primary' },
  teal: { bg: 'bg-teal-500/10', border: 'border-teal-500/20', text: 'text-teal-400' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400' },
  sky: { bg: 'bg-sky-500/10', border: 'border-sky-500/20', text: 'text-sky-400' },
}

function FeatureCard({ feature, index }) {
  const colors = colorMap[feature.color]
  const Icon = feature.icon
  const isReversed = index % 2 === 1

  return (
    <div className="relative rounded-2xl bg-secondary/30 border border-border/40 overflow-hidden">
      {/* Top glow line */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-50"
        style={{
          background:
            'linear-gradient(90deg, transparent 20%, hsl(280 85% 55% / 0.4) 50%, transparent 80%)',
        }}
      />

      <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 sm:gap-8 md:gap-16 p-4 sm:p-6 md:p-8`}>
        {/* Text content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${colors.bg} ${colors.border} mb-3 w-fit`}>
            <Icon className={`w-3.5 h-3.5 ${colors.text}`} />
            <span className={`text-xs font-medium ${colors.text}`}>{feature.label}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 tracking-tight">
            {feature.headline}
          </h3>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
            {feature.description}
          </p>

          <ul className="space-y-2">
            {feature.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className={`w-4 h-4 ${colors.text} mt-1 shrink-0`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <span className="text-sm text-muted-foreground">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chart mock */}
        <div className="flex-1">
          <ChartMock feature={feature} colors={colors} />
        </div>
      </div>
    </div>
  )
}

function ChartMock({ colors }) {
  const bars = Array.from({ length: 30 }, (_, i) => ({
    height: 20 + Math.random() * 60,
    top: 10 + Math.random() * 30,
    green: Math.random() > 0.4,
  }))

  return (
    <div className="bg-[#131722] rounded-xl border border-[#2a2e39] overflow-hidden h-[220px] sm:h-[260px] md:h-[300px] relative">
      {/* Grid lines */}
      <div className="absolute inset-0 grid-background opacity-30" />

      {/* Candles */}
      <div className="absolute inset-4 flex items-end gap-[2px]">
        {bars.map((bar, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${bar.height}%`,
              backgroundColor: bar.green ? 'rgb(0, 230, 118)' : 'rgb(255, 0, 0)',
              opacity: 0.7,
              marginTop: `${bar.top}%`,
            }}
          />
        ))}
      </div>

      {/* Signal label */}
      <div className="absolute top-4 right-4 px-2 py-1 rounded bg-[#00e676]/20 text-[#00e676] text-[10px] font-bold font-[family-name:var(--font-data)]">
        STRONG BUY
      </div>

      {/* Dashboard mini */}
      <div className="absolute bottom-3 right-3 bg-[#1e222d] border border-[#2a2e39] rounded-lg px-3 py-2">
        <div className="text-[9px] text-[#787b86] font-[family-name:var(--font-mono)]">
          <div className="flex justify-between gap-4">
            <span>Trend</span>
            <span className="text-[#00e676]">Bullish</span>
          </div>
          <div className="flex justify-between gap-4">
            <span>R:R</span>
            <span className="text-[#d1d4dc]">1:2.4</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FeatureCards() {
  return (
    <section className="pb-16 sm:pb-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        {features.map((feature, index) => (
          <FeatureCard key={feature.label} feature={feature} index={index} />
        ))}
      </div>
    </section>
  )
}
