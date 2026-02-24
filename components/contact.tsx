'use client'

import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real app, you'd send this to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-48 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-24">
          <h2 className="font-display font-bold text-5xl sm:text-6xl text-foreground text-balance">Have a project in mind?</h2>
          <p className="font-body text-xl text-muted-foreground leading-relaxed">
            Share your idea and let's create something remarkable together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Email */}
              <div className="group p-6 rounded-2xl border border-border hover:border-cyan-500/50 bg-card transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1 text-sm">Email</h3>
                    <a
                      href="mailto:samirtaous01@gmail.com"
                      className="font-body text-muted-foreground hover:text-cyan-400 transition-colors text-sm"
                    >
                      samirtaous01@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-foreground mb-4 text-sm">Connect with me</h3>
                <div className="flex gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-secondary border border-border hover:border-cyan-500/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group"
                  >
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-secondary border border-border hover:border-cyan-500/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Note */}
            <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
              <p className="font-body text-cyan-300 text-sm font-medium">✨ Available for freelance projects and full-time opportunities</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl border border-border bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block font-display font-bold text-foreground mb-3 text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border hover:border-cyan-500/30 focus:border-cyan-500 rounded-lg text-foreground placeholder-muted-foreground transition-colors focus:outline-none font-body"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-display font-bold text-foreground mb-3 text-sm">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border hover:border-cyan-500/30 focus:border-cyan-500 rounded-lg text-foreground placeholder-muted-foreground transition-colors focus:outline-none font-body"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-display font-bold text-foreground mb-3 text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-input border border-border hover:border-cyan-500/30 focus:border-cyan-500 rounded-lg text-foreground placeholder-muted-foreground transition-colors focus:outline-none resize-none font-body"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-bold font-display rounded-lg transition-all duration-300 glow-hover flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
              >
                <MessageSquare className="w-5 h-5" />
                Send Message
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm text-center font-body">
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
