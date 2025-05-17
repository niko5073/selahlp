import { FeaturesSectionWithBentoGrid } from "@/components/blocks/feature-section-with-bento-grid";

export function SolutionSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-40 overflow-hidden">
      {/* Remove the full-section pink-purple gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-pink-500 via-purple-500 to-transparent" /> */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      
      <div className="@container mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-5xl md:text-6xl font-semibold lg:text-7xl">Stay focused on building</h2>
          <p className="mt-6 text-xl text-zinc-300">Infra should make sense, match your code, and never break when you need it.</p>
        </div>
      </div>
      <FeaturesSectionWithBentoGrid />
    </section>
  );
} 