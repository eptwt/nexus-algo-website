import { Play } from 'lucide-react'

export default function VSL() {
  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl overflow-hidden bg-card border border-border/40 shadow-2xl">
          {/* Video placeholder */}
          <div className="aspect-video bg-[#131722] flex items-center justify-center relative group cursor-pointer">
            {/* Play button */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
            </div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            {/* Label */}
            <p className="absolute bottom-4 left-0 right-0 text-center text-sm text-white/70 font-medium">
              Watch: How Nexus Algo Helps You Read the Market
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
