'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-dark-text mb-6">
            Your Cloud Agent,{' '}
            <span className="text-primary">Simplified</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-muted mb-8 max-w-3xl mx-auto">
            Selah helps you manage and optimize your cloud infrastructure with intelligent automation and real-time insights.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              Get Started
            </button>
            <button className="border border-dark-muted text-dark-text px-8 py-3 rounded-lg font-semibold hover:bg-dark-card transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 