import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Discord', href: 'https://discord.gg/nexusalgo', external: true },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.png" alt="Nexus Algo" className="w-12 h-12 object-contain" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
<a
            href="#pricing"
            className="rounded-full px-5 h-9 inline-flex items-center text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg, hsl(280 85% 55%), hsl(300 90% 60%), hsl(320 85% 55%))' }}
          >
            Get Nexus Algo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden rounded-md h-10 w-10 flex items-center justify-center hover:bg-accent transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/40 px-4 pb-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setMobileOpen(false)}
            className="mt-2 w-full rounded-full py-3 inline-flex items-center justify-center text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, hsl(280 85% 55%), hsl(300 90% 60%), hsl(320 85% 55%))' }}
          >
            Get Nexus Algo
          </a>
        </div>
      )}
    </nav>
  )
}
