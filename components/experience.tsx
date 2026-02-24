'use client'

export default function Experience() {
  const experiences = [
    {
      company: 'STG Telematics',
      role: 'Full-Stack Developer',
      period: 'Jun – Sep 2025',
      description: 'Developed Odoo modules for fleet management and AI-powered transport optimization using Gemini API.',
      achievements: [
        'Engineered custom Odoo modules for logistics optimization',
        'Integrated Gemini API for intelligent route planning',
        'Improved delivery efficiency by 25%',
      ],
    },
    {
      company: 'Sportpresse',
      role: 'Web Developer',
      period: 'Jan – Mar 2025',
      description: 'Maintained and optimized web platform for premium football news and sports content.',
      achievements: [
        'Enhanced page load performance by 40%',
        'Implemented caching strategies and CDN optimization',
        'Maintained uptime of 99.9%',
      ],
    },
  ]

  return (
    <section id="experience" className="py-48 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-24">
          <h2 className="font-display font-bold text-5xl sm:text-6xl text-foreground text-balance">Professional Experience</h2>
          <p className="font-body text-xl text-muted-foreground leading-relaxed">
            Work history of impactful projects and technical leadership.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group relative">
              {/* Timeline line and dot */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 to-transparent" />
              <div className="absolute left-[-11px] top-6 w-5 h-5 bg-background border-2 border-cyan-500 rounded-full group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-shadow" />

              {/* Content */}
              <div className="pl-8 space-y-4 group-hover:translate-x-2 transition-transform duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-foreground group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="font-body text-cyan-400 font-semibold text-sm">{exp.company}</p>
                  </div>
                  <span className="font-body text-muted-foreground text-sm bg-secondary px-4 py-1.5 rounded-full w-fit border border-border">
                    {exp.period}
                  </span>
                </div>

                <p className="font-body text-muted-foreground leading-relaxed text-sm">{exp.description}</p>

                {/* Achievements */}
                <ul className="space-y-2 pt-3 border-t border-border">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-muted-foreground text-sm">
                      <span className="text-cyan-400 mt-0.5 flex-shrink-0">→</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
