'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Problem = () => {
  const problems = [
    {
      title: 'Complex Infrastructure',
      description: 'Managing cloud resources across multiple providers and regions is increasingly complex.',
      icon: '🔧'
    },
    {
      title: 'Cost Management',
      description: 'Unpredictable cloud costs and difficulty in optimizing resource usage.',
      icon: '💰'
    },
    {
      title: 'Security Concerns',
      description: 'Keeping up with security best practices and compliance requirements.',
      icon: '🔒'
    }
  ]

  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-text mb-4">
            The Cloud Management Challenge
          </h2>
          <p className="text-xl text-dark-muted max-w-3xl mx-auto">
            Modern cloud infrastructure presents unique challenges that require intelligent solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-card p-8 rounded-xl"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-dark-text">{problem.title}</h3>
              <p className="text-dark-muted">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem 