import { Card, CardContent, CardHeader } from '../ui/card'
import { AlertTriangle, Clock, HelpCircle } from 'lucide-react'
import { ReactNode } from 'react'

export function ProblemSection() {
    return (
        <section className="py-40 bg-[#0a0a0a]">
            <div className="@container mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-5xl md:text-6xl font-semibold lg:text-7xl">Infra is eating your time</h2>
                    <p className="mt-6 text-xl text-zinc-300">You're deep in blog posts, duct-taping YAML, and hoping nothing breaks in prod.</p>
                </div>
                <div className="mx-auto mt-16 grid max-w-7xl gap-12 *:text-center md:grid-cols-3">
                    <Card className="group shadow-black-950/5 bg-[#18181b]/50 p-10 rounded-xl backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors max-w-xl mx-auto">
                        <CardHeader className="pb-6">
                            <CardDecorator>
                                <AlertTriangle className="size-10 text-white" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-8 font-semibold text-2xl">Stack confusion</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-zinc-300">You're patching together Terraform from strangers on the internet.</p>
                        </CardContent>
                    </Card>
                    <Card className="group shadow-black-950/5 bg-[#18181b]/50 p-10 rounded-xl backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors max-w-xl mx-auto">
                        <CardHeader className="pb-6">
                            <CardDecorator>
                                <Clock className="size-10 text-white" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-8 font-semibold text-2xl">Wasted hours</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-zinc-300">Manually wiring buckets, roles, and VPCs every time configs change.</p>
                        </CardContent>
                    </Card>
                    <Card className="group shadow-black-950/5 bg-[#18181b]/50 p-10 rounded-xl backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors max-w-xl mx-auto">
                        <CardHeader className="pb-6">
                            <CardDecorator>
                                <HelpCircle className="size-10 text-white" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-8 font-semibold text-2xl">Deployment doubt</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-zinc-300">You push. You wait. You wonder if anything's actually secure or scalable.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 z-0 blur-[60px] opacity-40 bg-[radial-gradient(ellipse_at_center,_rgba(236,72,153,0.35)_0%,_rgba(168,85,247,0.18)_50%,_rgba(236,72,153,0)_100%)]" />
        <div className="absolute inset-0 [--border:#fff3] dark:[--border:#fff6] bg-[linear-gradient(to_right,var(--border)_1.5px,transparent_1px),linear-gradient(to_bottom,var(--border)_1.5px,transparent_1px)] bg-[size:20px_20px] opacity-30 z-10" />
        <div className="absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l z-20">{children}</div>
    </div>
) 