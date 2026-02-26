'use client'

import { useState } from 'react'
import { ShoppingCart, Globe, Rocket, Layers, Brain, Smartphone } from 'lucide-react'

const services = [
  {
    icon: ShoppingCart,
    title: 'E-commerce Store Development',
    description: 'Complete online stores with payment processing, inventory management, and customer accounts. Built for conversions and growth.',
    tech: ['Next.js', 'Stripe', 'PayPal', 'CMI'],
  },
  {
    icon: Globe,
    title: 'Business Website Design',
    description: 'Professional websites that showcase your business and attract customers. Fast, mobile-friendly, and search engine optimized.',
    tech: ['Next.js', 'Tailwind CSS', 'SEO', 'Vercel'],
  },
  {
    icon: Rocket,
    title: 'Landing Pages',
    description: 'High-converting landing pages for marketing campaigns, product launches, and lead generation. Optimized for maximum impact.',
    tech: ['React', 'Framer Motion', 'Analytics'],
  },
  {
    icon: Layers,
    title: 'SaaS Development',
    description: 'Build scalable web applications and software products from idea to launch. Complete development lifecycle management.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Add intelligent features and automation to existing products. Chatbots, content generation, and smart workflows.',
    tech: ['OpenAI API', 'Gemini API', 'LangChain', 'Python'],
  },
  {
    icon: Smartphone,
    title: 'Mobile-Friendly Development',
    description: 'Responsive designs that work perfectly on all devices. Mobile-first approach for optimal user experience.',
    tech: ['React Native', 'PWA', 'Responsive Design'],
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
            Professional web development services for businesses in Tangier and worldwide.
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
                  <div className="flex items-start gap-3 sm:gap-6 md:gap-8 py-6 px-3 sm:px-6 border-b border-border hover:border-cyan-500/30 transition-all duration-300 cursor-pointer"
                  >
                    {/* Number */}
                    <div className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-cyan-500 group-hover:text-cyan-400 transition-colors flex-shrink-0 w-8 sm:w-12 md:w-16 text-right">
                      {String(idx + 1).padStart(2, '0')}
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-left min-w-0">
                      <h3 className="font-display font-bold text-lg sm:text-2xl md:text-3xl text-foreground group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      {isExpanded && (
                        <div className="mt-4 space-y-4 animate-fade-in-up">
                          <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.tech.map((t, i) => (
                              <span
                                key={i}
                                className="px-2 sm:px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30 font-body"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Icon and chevron */}
                    <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all ${
                        isExpanded ? 'bg-cyan-500/20' : ''
                      }`}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                      </div>
                      <div className={`w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
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