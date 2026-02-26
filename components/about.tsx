'use client'

export default function About() {
  return (
    <section id="about" className="py-48 px-4 sm:px-6 lg:px-8 bg-alternating-section-alt">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="font-display font-bold text-5xl sm:text-6xl text-foreground text-balance">About Me</h2>
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              Passionate about building intelligent, scalable software.
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Main bio */}
            <div className="space-y-8">
              <p className="font-body text-foreground leading-relaxed text-lg">
                I'm a full-stack developer who builds production-ready web and mobile applications for businesses of all sizes. Available for freelance projects and consulting work with local businesses in Tangier and remote clients worldwide.
              </p>

              <p className="font-body text-foreground leading-relaxed text-lg">
                With expertise spanning from modern web frameworks to scalable backend systems, I help businesses transform their ideas into elegant, user-focused digital solutions that drive growth.
              </p>

              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold text-lg mt-0.5">💬</span>
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">Languages</p>
                    <p className="font-body text-muted-foreground text-sm">English, French</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold text-lg mt-0.5">📍</span>
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">Based in</p>
                    <p className="font-body text-muted-foreground text-sm">Tangier, Morocco</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold text-lg mt-0.5">🌍</span>
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">Availability</p>
                    <p className="font-body text-muted-foreground text-sm">Remote work globally</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick facts */}
            <div className="space-y-6">
              <div className="p-7 rounded-xl border border-border bg-card hover:border-cyan-500/40 transition-all">
                <h3 className="font-display font-bold text-foreground mb-5 text-lg">Why work with me?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-lg">→</span>
                    <span className="font-body text-foreground text-sm">Production-focused mindset</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-lg">→</span>
                    <span className="font-body text-foreground text-sm">Full-stack expertise across web & mobile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-lg">→</span>
                    <span className="font-body text-foreground text-sm">Specialized in AI integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-lg">→</span>
                    <span className="font-body text-foreground text-sm">Proven track record with startups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-lg">→</span>
                    <span className="font-body text-foreground text-sm">Bilingual English & French</span>
                  </li>
                </ul>
              </div>

              <div className="p-7 rounded-xl border border-border bg-card hover:border-cyan-500/40 transition-all">
                <h3 className="font-display font-bold text-foreground mb-4 text-lg">What I'm passionate about</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Solving real business problems with clean, maintainable code. Creating user experiences that delight. Exploring the intersection of AI and software engineering. Mentoring other developers and sharing knowledge with the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
