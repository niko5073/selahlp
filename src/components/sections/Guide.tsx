'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Activity, DraftingCompass, Mail, Zap, AlertTriangle, Clock, HelpCircle, GitBranch, FileText, Rocket } from 'lucide-react'

const Guide = () => {
  const steps = [
    {
      number: '01',
      title: 'Connect Your Cloud',
      description: 'Link your cloud providers and grant necessary permissions to Selah.',
      icon: '🔌'
    },
    {
      number: '02',
      title: 'Set Your Goals',
      description: 'Define your optimization goals and preferences for cost, performance, and security.',
      icon: '🎯'
    },
    {
      number: '03',
      title: 'Let Selah Work',
      description: 'Watch as Selah automatically optimizes your infrastructure and provides insights.',
      icon: '⚡'
    },
    {
      number: '04',
      title: 'Monitor & Adjust',
      description: 'Review recommendations and adjust settings as needed through our intuitive dashboard.',
      icon: '📈'
    }
  ]

  return (
    <section className="bg-[#0a0a0a] py-40">
      <div className="mx-auto max-w-xl md:max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <h2 className="text-balance text-5xl md:text-6xl font-semibold lg:text-7xl mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Setup without the setup
              </h2>
              <p className="text-lg text-zinc-300/90 max-w-2xl mb-6 leading-relaxed">
                No wizards. No YAML bootcamps. Just a simple way to go from code to running infrastructure.
              </p>
            </div>
            <ul className="mt-8 divide-y border-y">
              <li className="grid grid-cols-[auto_1fr] gap-4 items-center py-5">
                <GitBranch className="size-6 mx-auto text-white" />
                <div>
                  <div className="font-semibold text-base">Point to your repo</div>
                  <div className="text-zinc-400 text-base">That's it. We read your code and figure out what it needs.</div>
                </div>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-4 items-center py-5">
                <FileText className="size-6 mx-auto text-white" />
                <div>
                  <div className="font-semibold text-base">Review the plan</div>
                  <div className="text-zinc-400 text-base">No magic boxes. Just a clear, editable blueprint that makes sense.</div>
                </div>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-4 items-center py-5">
                <Rocket className="size-6 mx-auto text-white" />
                <div>
                  <div className="font-semibold text-base">Ship with confidence</div>
                  <div className="text-zinc-400 text-base">Everything's ready to go. No tabs open for "how to IAM in 2025."</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="border-border/50 relative rounded-xl border p-6 lg:col-span-3 bg-[#18181b]/50 backdrop-blur-sm border-white/5 hover:border-white/10 transition-colors flex items-center h-full overflow-visible">
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[120%] blur-[90px] opacity-50 bg-[radial-gradient(ellipse_at_center,_rgba(236,72,153,0.35)_0%,_rgba(168,85,247,0.18)_50%,_rgba(236,72,153,0)_100%)] z-0" />
            <div className="relative rounded-2xl h-[420px] w-full flex items-center z-10">
              <div className="w-full h-full bg-[#18181b] rounded-xl shadow-lg p-6 flex flex-col justify-start">
                <div className="flex gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                </div>
                <pre className="text-white text-sm font-mono bg-transparent p-0 m-0 overflow-x-auto">
{`# selah.yaml
cloud: aws
region: us-east-1
services:
  - type: s3
    name: my-bucket
  - type: ec2
    instance_type: t3.micro
    count: 2`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide 
