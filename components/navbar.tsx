'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import ThemeToggle from './theme-toggle'

interface NavbarProps {
  isScrolled: boolean
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 pt-6 px-4">
      {/* Floating pill navbar - centered */}
      <div className="max-w-3xl mx-auto">
        <div
          className={`glass-adaptive rounded-full px-8 py-3 transition-all duration-300 ${
            isScrolled ? 'shadow-xl' : ''
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mr-auto">
              <div className="w-7 h-7 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black font-bold text-xs">S</span>
              </div>
              <span className="font-display font-bold text-foreground text-sm hidden sm:inline">Samir</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 flex-1 justify-center px-8">
              <button
                onClick={() => scrollToSection('services')}
                className="relative-underline text-muted-foreground hover:text-foreground transition-colors text-xs font-medium uppercase tracking-wider"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="relative-underline text-muted-foreground hover:text-foreground transition-colors text-xs font-medium uppercase tracking-wider"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="relative-underline text-muted-foreground hover:text-foreground transition-colors text-xs font-medium uppercase tracking-wider"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="relative-underline text-muted-foreground hover:text-foreground transition-colors text-xs font-medium uppercase tracking-wider"
              >
                About
              </button>
            </div>

            {/* CTA Button and Theme Toggle */}
            <div className="ml-auto hidden md:flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-1.5 bg-cyan-500 hover:bg-cyan-600 text-black font-bold text-xs rounded-full transition-all duration-300 glow-hover uppercase tracking-wider"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button and Theme Toggle */}
            <div className="md:hidden ml-4 flex items-center gap-2">
              <ThemeToggle />
              <button
                className="p-1"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="w-5 h-5 text-foreground" />
                ) : (
                  <Menu className="w-5 h-5 text-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-border flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-full transition-all text-sm"
              >
                Hire Me
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
