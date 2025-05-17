'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Solution = () => {
  const features = [
    {
      title: 'Intelligent Automation',
      description: 'Automate routine tasks and optimize resource allocation with AI-powered insights.',
      icon: '🤖'
    },
    {
      title: 'Cost Optimization',
      description: 'Real-time cost monitoring and automated optimization recommendations.',
      icon: '📊'
    },
    {
      title: 'Security First',
      description: 'Continuous security monitoring and automated compliance checks.',
      icon: '🛡️'
    },
    {
      title: 'Multi-Cloud Support',
      description: 'Seamlessly manage resources across AWS, Azure, and Google Cloud.',
      icon: '☁️'
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-text mb-4">
            Meet Selah, Your Cloud Agent
          </h2>
          <p className="text-xl text-dark-muted max-w-3xl mx-auto">
            A powerful solution that simplifies cloud management and helps you focus on what matters
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-bg p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-dark-text">{feature.title}</h3>
              <p className="text-dark-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solution 