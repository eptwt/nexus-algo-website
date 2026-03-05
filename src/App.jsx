import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VSL from './components/VSL'
import TrustBar from './components/TrustBar'
import SuiteOverview from './components/SuiteOverview'
import FeatureCards from './components/FeatureCards'
import Workflow from './components/Workflow'
import Membership from './components/Membership'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CommunityCTA from './components/CommunityCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <VSL />
      <TrustBar />
      <SuiteOverview />
      <FeatureCards />
      <Workflow />
      <Membership />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CommunityCTA />
      <Footer />
    </div>
  )
}
