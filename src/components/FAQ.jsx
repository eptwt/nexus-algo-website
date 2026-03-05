import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'Does Nexus Algo work on the free version of TradingView?',
    a: 'Yes! Nexus Algo works on all TradingView plans, including the free version. You can add all three indicators to your chart regardless of your TradingView subscription tier.',
  },
  {
    q: 'What markets and timeframes does it support?',
    a: 'Nexus Algo works on all markets available on TradingView — Forex, Crypto, Stocks, Futures, Indices, and Commodities. It supports all timeframes from 1-minute to monthly charts.',
  },
  {
    q: 'Do the signals repaint?',
    a: 'No. Once a signal is confirmed and printed on a closed candle, it will not move or disappear. Nexus Algo signals are generated on candle close to ensure reliability.',
  },
  {
    q: "What's included in the 7-day trial?",
    a: 'Full access to everything — all 3 indicators (PRO, Oscillator, News Ghost), all 7 named trading strategies, the Discord community, strategy guides, and all alert conditions. No features are locked during the trial.',
  },
  {
    q: 'How do I add Nexus Algo to my TradingView charts?',
    a: "After subscribing, you'll receive instant access via TradingView's invite-only indicator system. We'll send you setup instructions and a quick-start guide immediately after purchase.",
  },
  {
    q: 'Can I cancel my subscription anytime?',
    a: 'Absolutely. You can cancel at any time from your account dashboard. If you cancel within the first 7 days, you receive a full refund — no questions asked.',
  },
  {
    q: 'Is the News Ghost included with all plans?',
    a: 'Yes. Every plan includes full access to all three indicators: Nexus Algo PRO, the Oscillator, and News Ghost. There are no feature tiers or locked indicators.',
  },
  {
    q: 'Should I trade every signal that appears on my chart?',
    a: "No — and that's the point of the tiered system. Signals give you directional bias, but you should pair them with a named strategy and confirm with the Oscillator before entering a trade. The workflow helps you filter setups.",
  },
  {
    q: 'What are the named strategies and how do I use them?',
    a: 'Named strategies are predefined trade setups with clear entry, stop, and target rules. Examples include The Ribbon Ride (trend continuation), The OB Bounce (order block entry), and The Confluence Stack (max-conviction setup). Each strategy guide walks you through when and how to use it.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-16 sm:py-24 relative overflow-hidden section-divider">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-primary/10 border-primary/20 mb-5">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-widest">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight font-[family-name:var(--font-display)]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`bg-card border rounded-lg px-4 transition-all ${
                  isOpen ? 'border-primary/40' : 'border-border/50 hover:border-primary/30'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex flex-1 items-center justify-between w-full font-medium py-4 text-left"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
