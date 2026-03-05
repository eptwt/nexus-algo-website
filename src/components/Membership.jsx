import { Gift, Check } from 'lucide-react'

const columns = [
  {
    title: 'Nexus Algo PRO',
    items: [
      'Trend Ribbon with Glow',
      '3-Tier Signal System (BUY → STRONG → PREMIUM)',
      'Auto TP/SL Levels',
      'Market Structure (BOS / CHoCH)',
      'Order Blocks with Volume Ranking',
      'Fair Value Gaps',
      'Liquidity Sweep Detection',
      'Trailing Stop',
      'Session Kill Zones',
      'Multi-Timeframe Dashboard',
      'Smart Money Divergence',
      '12 Alert Conditions',
    ],
  },
  {
    title: 'Nexus Algo Oscillator',
    items: [
      'RSI with Dynamic Zones',
      'Momentum Histogram',
      'Volume Delta Estimation',
      'RSI Divergence Detection',
      'Signal Sync with PRO',
    ],
  },
  {
    title: 'Nexus Algo News Ghost',
    items: [
      'Ghost Candle Replay (up to 6 events)',
      'Average Path Line',
      'Range Band (historical high/low envelope)',
      'Pre-Loaded Calendar 2024-2026',
      'Stats Dashboard',
      '2 Alert Types',
    ],
  },
  {
    title: 'Named Trading Strategies',
    items: [
      'The Ribbon Ride (trend continuation)',
      'The Structure Flip (CHoCH reversal)',
      'The OB Bounce (order block entry)',
      'The Sweep Sniper (liquidity trap)',
      'The Session Break (kill zone breakout)',
      'The Ghost Fade (news event counter-trade)',
      'The Confluence Stack (max-conviction setup)',
    ],
  },
  {
    title: 'Community & Education',
    items: [
      'Private Discord Community',
      'Strategy Guides with Entry/Exit Rules',
      'Setup Sharing & Trade Review Channels',
      'Direct Support from the Team',
    ],
  },
]

export default function Membership() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-primary/10 border-primary/20 mb-5">
            <Gift className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-widest">
              Everything You Get
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 font-[family-name:var(--font-display)]">
            One Membership. Your Complete Trading Toolkit.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {columns.map((col) => (
            <div
              key={col.title}
              className="bg-card border border-border/50 rounded-xl p-5 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-sm font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                    <span className="text-xs text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
