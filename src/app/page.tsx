import { HeroSection } from "@/components/blocks/hero-section-1"
import { ProblemSection } from '@/components/blocks/problem-section'
import { SolutionSection } from "@/components/blocks/solution-section"
import Guide from '@/components/sections/Guide'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-purple-900/80 via-70% to-[#0a0a0a] to-90%">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <Guide />
      <CTA />
      <Footer />
    </main>
  )
} 