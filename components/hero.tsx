'use client'

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Initialize particles
    const initialParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 1.5 + 0.5,
    }))
    setParticles(initialParticles)

    // Animation loop - slower, more organic movement
    const interval = setInterval(() => {
      setParticles(prev =>
        prev.map(p => ({
          ...p,
          x: (p.x + p.vx + 100) % 100,
          y: (p.y + p.vy + 100) % 100,
        }))
      )
    }, 80)

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-48">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden bg-background">
        {/* Gradient mesh blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-600/15 dark:bg-cyan-600/15 rounded-full blur-3xl animate-gradient-mesh opacity-50" />
        <div className="absolute top-1/3 right-20 w-80 h-80 bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-gradient-mesh opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl animate-gradient-mesh opacity-30" style={{ animationDelay: '2s' }} />

        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" /%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.3"/%3E%3C/svg%3E")',
          backgroundSize: '200px 200px'
        }} />
      </div>

      {/* Animated particles - slower and more organic */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute bg-cyan-400/30 rounded-full blur-sm"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              boxShadow: '0 0 15px rgba(0, 212, 255, 0.4)',
              pointerEvents: 'none',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Main headline - Giant typography */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="font-display font-bold text-7xl sm:text-8xl lg:text-9xl text-foreground leading-none text-balance" style={{ letterSpacing: '-0.02em' }}>
              Samir Taous
            </h1>

            <div className="space-y-4 max-w-3xl">
              <p className="font-display font-bold text-3xl sm:text-4xl text-cyan-400 leading-tight text-balance">
                Full-Stack Developer & AI Specialist
              </p>
              <p className="font-body text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                I build production-ready applications with React, Spring Boot, and Python. Specialized in AI integration, microservices architecture, and scalable databases.
              </p>
            </div>
          </div>

          {/* Availability badge with pulse animation */}
          <div className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="relative">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-glow" />
            </div>
            <span className="font-body text-sm text-muted-foreground">Available for freelance projects</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-full transition-all duration-300 glow-hover flex items-center justify-center gap-2 text-lg font-display uppercase tracking-wide"
            >
              See My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-transparent border-2 border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 font-bold rounded-full transition-all duration-300 font-display uppercase tracking-wide text-lg"
            >
              Let's Talk
            </button>
          </div>

          {/* Stats - staggered reveal */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 pt-16 max-w-2xl">
            <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <p className="font-display font-bold text-5xl sm:text-6xl text-cyan-400">5+</p>
              <p className="font-body text-muted-foreground">Years Experience</p>
            </div>
            <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <p className="font-display font-bold text-5xl sm:text-6xl text-cyan-400">15+</p>
              <p className="font-body text-muted-foreground">Projects Shipped</p>
            </div>
            <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <p className="font-display font-bold text-5xl sm:text-6xl text-cyan-400">2</p>
              <p className="font-body text-muted-foreground">Languages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
