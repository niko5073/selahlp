"use client"

import { Button } from "@/components/ui/button"
import { Glow } from "@/components/ui/glow"
import { cn } from "@/lib/utils"

interface CTAProps {
  title: string
  action: {
    text: string
    href: string
    variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  }
  className?: string
}

export function CTASection({ title, action, className }: CTAProps) {
  return (
    <section className={cn("group relative overflow-hidden pt-16 pb-24 sm:pt-20 sm:pb-32", className)}>
      {/* Blob-style pink-purple glow, blended with footer */}
      <svg className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 z-0 w-[900px] h-[520px] blur-2xl opacity-50" viewBox="0 0 900 520" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="cta-blob-gradient" cx="50%" cy="50%" r="60%" fx="50%" fy="40%" gradientTransform="rotate(25)">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
            <stop offset="55%" stopColor="#a855f7" stopOpacity="0.18" />
            <stop offset="85%" stopColor="#a855f7" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="450" cy="260" rx="410" ry="210" fill="url(#cta-blob-gradient)" />
      </svg>
      <div className="relative z-10 mx-auto flex max-w-container flex-col items-center gap-12 text-center sm:gap-12">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter animate-appear text-white">
          {title}
        </h2>
        <Button 
          variant={action.variant || "default"} 
          size="lg" 
          className="animate-appear delay-100 px-12 py-4 text-xl h-14 min-w-[14rem] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          asChild
        >
          <a href={action.href}>{action.text}</a>
        </Button>
      </div>
    </section>
  )
}