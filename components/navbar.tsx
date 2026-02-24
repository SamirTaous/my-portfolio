'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import ThemeToggle from './theme-toggle'

interface NavbarProps {
  isScrolled: boolean
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)

  const navItems = [
    { name: 'Services', id: 'services', index: 1 },
    { name: 'Projects', id: 'projects', index: 2 },
    { name: 'Experience', id: 'experience', index: 3 },
    { name: 'Tech', id: 'tech-stack', index: 4 },
    { name: 'About', id: 'about', index: 5 },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const footer = document.querySelector('footer')
      const allElements = [...Array.from(sections)]
      if (footer) allElements.push(footer)

      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const detectionPoint = scrollPosition + windowHeight / 2

      // Special case: if we're near the bottom of the page, activate footer
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setCurrentSection(allElements.length - 1)
        return
      }

      allElements.forEach((element, index) => {
        if (!element) return
        const rect = element.getBoundingClientRect()
        const sectionTop = scrollPosition + rect.top
        const sectionBottom = sectionTop + rect.height

        if (detectionPoint >= sectionTop && detectionPoint < sectionBottom) {
          setCurrentSection(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const isActive = (index: number) => currentSection === index

  return (
    <nav className="fixed top-0 w-full z-50 pt-6 px-4">
      {/* Floating pill navbar - centered */}
      <div className="max-w-4xl mx-auto">
        <div
          className={`glass-adaptive rounded-full px-8 py-3 transition-all duration-300 ${isScrolled ? 'shadow-xl' : ''
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
            <div className="hidden md:flex items-center gap-6 flex-1 justify-center px-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative group transition-colors text-xs font-medium uppercase tracking-wider ${isActive(item.index)
                      ? 'text-cyan-400'
                      : 'text-muted-foreground hover:text-cyan-400'
                    }`}
                >
                  {item.name}
                  {/* Active underline */}
                  {isActive(item.index) && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 rounded-full" />
                  )}
                  {/* Hover underline */}
                  {!isActive(item.index) && (
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 rounded-full group-hover:w-full transition-all duration-300" />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button and Theme Toggle */}
            <div className="ml-auto hidden md:flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-5 py-1.5 font-bold text-xs rounded-full transition-all duration-300 glow-hover uppercase tracking-wider ${isActive(6)
                  ? 'bg-cyan-600 text-black'
                  : 'bg-cyan-500 hover:bg-cyan-600 text-black'
                  }`}
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
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left transition-colors text-sm font-medium ${isActive(item.index)
                      ? 'text-cyan-400'
                      : 'text-muted-foreground hover:text-cyan-400'
                    }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className={`w-full mt-2 px-4 py-2 font-bold rounded-full transition-all text-sm ${isActive(6)
                  ? 'bg-cyan-600 text-black'
                  : 'bg-cyan-500 hover:bg-cyan-600 text-black'
                  }`}
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
