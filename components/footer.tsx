'use client'

import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Section */}
        <div className="space-y-16 pb-24">
          {/* Bold Statement */}
          <div className="space-y-8">
            <h3 className="font-display font-bold text-5xl sm:text-6xl text-foreground leading-tight text-balance">
              Let's build something
              <br />
              <span className="text-cyan-400">great together.</span>
            </h3>
            <p className="font-body text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Ready to start your next project? Let's connect and discuss how I can help bring your vision to life.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:samirtaous01@gmail.com"
              className="group px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-full transition-all duration-300 glow-hover flex items-center justify-center gap-2 text-lg font-display uppercase tracking-wide"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-transparent border-2 border-border hover:border-cyan-500 text-foreground hover:text-cyan-400 font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-lg font-display uppercase tracking-wide"
            >
              View Work
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border py-12 space-y-8">
          {/* Links and Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Social Links */}
            <div className="space-y-4">
              <p className="font-display font-bold text-foreground text-sm uppercase tracking-widest">Connect</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors font-body text-sm">
                    <Github className="w-4 h-4" />
                    GitHub
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="flex items-center gap-2 text-muted-foreground hover:text-cyan-400 transition-colors font-body text-sm">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-4">
              <p className="font-display font-bold text-foreground text-sm uppercase tracking-widest">Email</p>
              <a
                href="mailto:samirtaous01@gmail.com"
                className="group relative inline-block"
              >
                <div className="text-muted-foreground hover:text-cyan-400 transition-colors font-body text-sm">
                  samirtaous01@gmail.com
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            </div>

            {/* Location */}
            <div className="space-y-4">
              <p className="font-display font-bold text-foreground text-sm uppercase tracking-widest">Location</p>
              <p className="font-body text-muted-foreground text-sm">
                Tangier, Morocco
                <br />
                Available for remote work
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-muted-foreground text-sm">
            © {currentYear} Samir Taous. All rights reserved.
          </p>
          <p className="font-body text-muted-foreground text-sm">
            Crafted with precision and passion
          </p>
        </div>
      </div>
    </footer>
  )
}
