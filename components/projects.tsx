'use client'

import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Cloud-Native FinTech',
    subtitle: 'Enterprise financial dashboard with AI',
    description:
      'Enterprise-grade financial dashboard with microservices architecture and AI-powered loan classification model. Real-time data processing with sophisticated risk assessment.',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tech: ['React.js', 'Java', 'Spring Boot', 'REST APIs', 'PostgreSQL'],
    tags: ['Microservices', 'AI/ML', 'Finance'],
  },
  {
    title: 'AI-Powered EdTech Game',
    subtitle: 'Learning platform with generative AI',
    description:
      'Interactive learning platform generating quiz questions from uploaded PDFs using generative AI. Built for engaging STEM education with adaptive difficulty.',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tech: ['Unity', 'C#', 'Python', 'Flask', 'MongoDB', 'Generative AI'],
    tags: ['EdTech', 'Gaming', 'AI'],
  },
  {
    title: 'Oracle Admin Platform',
    subtitle: 'Database management for enterprises',
    description:
      'Reactive UI for database operations including backup/restore, performance monitoring, and system management. Built with modern full-stack architecture.',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tech: ['React.js', 'Spring', 'Oracle DB', 'PL/SQL', 'Docker'],
    tags: ['Database', 'DevOps', 'Enterprise'],
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
              {/* Image section with gradient */}
              <div
                className="relative h-56 overflow-hidden bg-gradient-to-br"
                style={{ background: project.image }}
              >
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
                  <button className="flex-1 group/btn px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/40 text-sm font-display uppercase tracking-wide">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </button>
                  <button className="flex-1 group/btn px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 border border-border hover:border-cyan-500/30 text-sm font-display uppercase tracking-wide">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
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
