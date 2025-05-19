import { HeroSection } from "@/components/blocks/hero-section-1"
import { ProblemSection } from '@/components/blocks/problem-section'
import { SolutionSection } from "@/components/blocks/solution-section"
import Guide from '@/components/sections/Guide'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <Guide />
      <CTA />
      <Footer />
    </main>
  )
} 