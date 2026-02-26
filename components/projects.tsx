'use client'

import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'ASMAS — Digital Banking Platform',
    subtitle: 'Academic Project',
    description:
      'Full-stack banking dashboard featuring account management, transaction tracking, card controls with lock/freeze, loan management, and real-time financial analytics. Built with a live REST API backend.',
    image: '/fintech-platform.png',
    tech: ['React', 'Vite', 'Chakra UI', 'Framer Motion', 'Recharts', 'Node.js', 'Express.js', 'JWT'],
    tags: ['FinTech', 'Dashboard', 'Full-Stack'],
    liveUrl: 'https://fintech-dashboard-gray.vercel.app/',
    githubUrl: 'https://github.com/SamirTaous/fintech-dashboard',
  },
  {
    title: 'Café Bab Tanger — Restaurant Landing Page',
    subtitle: 'Concept Project',
    description:
      'Modern restaurant landing page for a fictional Moroccan café in Tangier. Features a full menu page with search and filtering, gallery, reviews, and reservation system.',
    image: '/cafe-concept.png',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    tags: ['Restaurant', 'Landing Page', 'Concept'],
    liveUrl: 'https://cafe-concept-page.vercel.app/',
    githubUrl: 'https://github.com/SamirTaous/cafe-concept-page',
  },
  {
    title: 'Oracle Admin Platform',
    subtitle: 'Database management for enterprises',
    description:
      'Reactive UI for database operations including backup/restore, performance monitoring, and system management. Built with modern full-stack architecture.',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tech: ['React.js', 'Spring', 'Oracle DB', 'PL/SQL', 'Docker'],
    tags: ['Database', 'DevOps', 'Enterprise'],
    liveUrl: null,
    githubUrl: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-48 px-4 sm:px-6 lg:px-8 bg-alternating-section-alt">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="space-y-6 mb-24">
          <h2 className="font-display font-bold text-5xl sm:text-6xl text-foreground text-balance">
            Featured Projects
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-xl leading-relaxed">
            Recent work showcasing modern architectures, AI integration, and scalable solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-cyan-500/50 transition-all duration-500 flex flex-col h-full hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Image section */}
              <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
                {project.image.startsWith('/') ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div
                    className="w-full h-full bg-gradient-to-br"
                    style={{ background: project.image }}
                  />
                )}
                
                {/* Overlay that dims on hover */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
                
                {/* Floating indicator */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
                  <ArrowUpRight className="w-5 h-5 text-cyan-400" />
                </div>
              </div>

              {/* Content section */}
              <div className="p-7 flex flex-col flex-grow space-y-5">
                {/* Title and subtitle */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl text-foreground group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground group-hover:text-muted-foreground transition-colors">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="font-body text-muted-foreground text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech stack - pill badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30 font-body hover:border-cyan-500/50 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Category tags */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="font-body text-xs text-muted-foreground group-hover:text-cyan-400 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-4">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/40 text-sm font-display uppercase tracking-wide"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 px-4 py-2 bg-gray-400 text-gray-600 font-bold rounded-lg cursor-not-allowed flex items-center justify-center gap-2 text-sm font-display uppercase tracking-wide opacity-50"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </button>
                  )}
                  
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 border border-border hover:border-cyan-500/30 text-sm font-display uppercase tracking-wide"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 px-4 py-2 bg-gray-400 text-gray-600 font-bold rounded-lg cursor-not-allowed flex items-center justify-center gap-2 border border-gray-400 text-sm font-display uppercase tracking-wide opacity-50"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more CTA */}
        <div className="mt-20 text-center">
          <button className="group inline-flex items-center gap-3 font-display font-bold text-lg text-foreground hover:text-cyan-400 transition-colors uppercase tracking-wide">
            View All Projects
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
