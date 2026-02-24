'use client'
import { useEffect, useState, useCallback } from 'react'

export default function ScrollController() {
  const [currentSection, setCurrentSection] = useState(0)
  const sectionNames = ['Hero', 'Services', 'Projects', 'Experience', 'Tech', 'About', 'Contact']

  const scrollToSection = useCallback((index: number) => {
    const sections = document.querySelectorAll('section')
    if (sections[index]) {
      const originalScrollBehavior = document.documentElement.style.scrollBehavior
      const originalScrollSnapType = document.documentElement.style.scrollSnapType
      document.documentElement.style.scrollBehavior = 'smooth'
      document.documentElement.style.scrollSnapType = 'none'

      const targetElement = sections[index] as HTMLElement
      const targetPosition = targetElement.offsetTop
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })

      setTimeout(() => {
        document.documentElement.style.scrollBehavior = originalScrollBehavior
        document.documentElement.style.scrollSnapType = originalScrollSnapType || 'y proximity'
      }, 1000)
    }
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const sectionRatios = new Map<Element, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        // Update ratios for sections in this batch
        entries.forEach((entry) => {
          sectionRatios.set(entry.target, entry.intersectionRatio)
        })

        // Find the section with the highest ratio across ALL sections
        let maxRatio = 0
        let activeSection = 0

        sectionRatios.forEach((ratio, el) => {
          if (ratio > maxRatio) {
            maxRatio = ratio
            const index = Array.from(sections).indexOf(el as HTMLElement)
            if (index !== -1) activeSection = index
          }
        })

        if (maxRatio > 0.1) {
          setCurrentSection(activeSection)
        }
      },
      {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: '0px 0px 0px 0px'
      }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const detectionPoint = scrollPosition + windowHeight / 2

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        const sectionTop = scrollPosition + rect.top
        const sectionBottom = sectionTop + rect.height

        if (detectionPoint >= sectionTop && detectionPoint < sectionBottom) {
          setCurrentSection(index)
        }
      })
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      const totalSections = sections.length
      let targetSection = currentSection

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault()
          targetSection = Math.min(totalSections - 1, currentSection + 1)
          break
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          targetSection = Math.max(0, currentSection - 1)
          break
        case 'Home':
          e.preventDefault()
          targetSection = 0
          break
        case 'End':
          e.preventDefault()
          targetSection = totalSections - 1
          break
        case ' ':
          e.preventDefault()
          targetSection = Math.min(totalSections - 1, currentSection + 1)
          break
      }

      if (targetSection !== currentSection) {
        scrollToSection(targetSection)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', handleScroll, { passive: true })

    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [currentSection, scrollToSection])

  return (
    <>
      {/* Section indicators - left side */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {sectionNames.map((name, index) => (
          <div key={index} className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection(index)}>
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSection === index
                  ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50 scale-150'
                  : 'bg-black/30 dark:bg-white/30 hover:bg-cyan-400/60 hover:scale-125'
                }`}
              aria-label={`Go to ${name} section`}
            />
            <span
              className={`text-xs font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 ${currentSection === index ? 'text-cyan-400' : 'text-black/60 dark:text-white/60'
                }`}
            >
              {name}
            </span>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-white/10 z-50">
        <div
          className="h-full bg-cyan-400 transition-all duration-300"
          style={{ width: `${((currentSection + 1) / sectionNames.length) * 100}%` }}
        />
      </div>

      {/* Keyboard hint - only show on first section */}
      {currentSection === 0 && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 text-white/40 text-xs flex items-center gap-2 animate-pulse">
          Use ↑↓ or Space to navigate
        </div>
      )}
    </>
  )
}