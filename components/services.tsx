'use client'

import { useState } from 'react'
import { Code2, Zap, Database, Smartphone, Settings2, Brain } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Custom Web Applications',
    description: 'Production-ready web apps built with React, Next.js, Spring Boot, and modern full-stack architectures. Responsive, performant, scalable.',
    tech: ['React.js', 'Spring Boot', 'Next.js'],
  },
  {
    icon: Brain,
    title: 'AI Integration & Automation',
    description: 'Integrate cutting-edge LLMs and generative AI into your products. From Gemini API to custom ML pipelines and RAG systems.',
    tech: ['Gemini API', 'LLMs', 'Generative AI'],
  },
  {
    icon: Settings2,
    title: 'REST API Design',
    description: 'Scalable, well-documented APIs using Spring Boot, REST patterns, and microservices architecture. Built for reliability.',
    tech: ['Spring Boot', 'REST APIs', 'Microservices'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Interactive mobile games and applications built with Unity and C#. Engaging user experiences across platforms.',
    tech: ['Unity', 'C#', 'Game Development'],
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Optimize and architect databases for performance. Expert in PostgreSQL, MongoDB, Oracle, and cloud-native solutions.',
    tech: ['PostgreSQL', 'MongoDB', 'Oracle'],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Improve speed, scalability, and efficiency across your entire stack. Profiling, caching, DevOps optimization.',
    tech: ['Optimization', 'DevOps', 'Cloud'],
  },
]

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-48 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="space-y-6 mb-24">
          <h2 className="font-display font-bold text-5xl sm:text-6xl text-foreground text-balance">
            Services
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-xl leading-relaxed">
            Specialized in building intelligent, scalable applications that solve real problems.
          </p>
        </div>

        {/* Numbered list */}
        <div className="space-y-px">
          {services.map((service, idx) => {
            const Icon = service.icon
            const isExpanded = expandedIndex === idx

            return (
              <div key={idx}>
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full group"
                >
                  <div className="flex items-start gap-6 sm:gap-8 py-6 px-6 border-b border-border hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
                  >
                    {/* Number */}
                    <div className="font-display font-bold text-3xl sm:text-4xl text-cyan-500 group-hover:text-cyan-400 transition-colors flex-shrink-0 w-16 text-right">
                      {String(idx + 1).padStart(2, '0')}
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-left">
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      {isExpanded && (
                        <div className="mt-4 space-y-4 animate-fade-in-up">
                          <p className="font-body text-muted-foreground text-base leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.tech.map((t, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30 font-body"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Icon and chevron */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className={`w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all ${
                        isExpanded ? 'bg-cyan-500/20' : ''
                      }`}>
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        ↓
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
