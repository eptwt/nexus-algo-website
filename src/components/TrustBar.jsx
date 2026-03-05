export default function TrustBar() {
  const items = [
    'TradingView',
    'PineScript v6',
    'All Markets',
    'All Timeframes',
  ]

  return (
    <section className="py-8 section-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <span className="text-sm text-muted-foreground font-medium">Integrated with leading platforms</span>
          {items.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full border border-border/40 bg-secondary/30 text-sm font-medium text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
