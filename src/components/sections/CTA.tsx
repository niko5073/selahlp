import { CTASection } from "@/components/blocks/cta-with-glow"

export default function CTA() {
  return (
    <section id="cta" className="bg-[#0a0a0a] py-40 text-center">
      <CTASection
        title="Deploy infra, faster than ever"
        action={{
          text: "Try it free",
          href: "/docs",
          variant: "default"
        }}
      />
    </section>
  )
} 