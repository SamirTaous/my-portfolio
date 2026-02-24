'use client'
import { useEffect, useState, useCallback } from 'react'

export default function ScrollController() {
  const [currentSection, setCurrentSection] = useState(0)
  const sectionNames = ['Hero', 'Services', 'Projects', 'Experience', 'Tech', 'About', 'Contact', 'Footer']

  const scrollToSection = useCallback((index: number, isWheelTriggered = false) => {
    const sections = document.querySelectorAll('section')
    const footer = document.querySelector('footer')
    const allElements = [...Array.from(sections)]
    if (footer) allElements.push(footer)

    if (allElements[index]) {
      const targetElement = allElements[index] as HTMLElement
      let targetPosition = targetElement.offsetTop

      // Special handling for footer - ensure we can scroll to the very bottom
      if (index === allElements.length - 1 && footer) {
        const documentHeight = document.documentElement.scrollHeight
        const windowHeight = window.innerHeight
        targetPosition = Math.max(targetPosition, documentHeight - windowHeight)
      }

      if (isWheelTriggered) {
        // For wheel-triggered scrolling, use a more controlled approach
        const startPosition = window.scrollY
        const distance = targetPosition - startPosition
        const duration = 800 // Smooth animation duration
        let startTime: number | null = null

        // Temporarily disable scroll snap during animation
        document.documentElement.style.scrollSnapType = 'none'
        document.body.style.scrollSnapType = 'none'

        const animateScroll = (currentTime: number) => {
          if (startTime === null) startTime = currentTime
          const timeElapsed = currentTime - startTime
          const progress = Math.min(timeElapsed / duration, 1)

          // Easing function for smooth animation
          const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
          const easedProgress = easeInOutCubic(progress)

          window.scrollTo(0, startPosition + distance * easedProgress)

          if (progress < 1) {
            requestAnimationFrame(animateScroll)
          } else {
            // Re-enable scroll snap after animation
            setTimeout(() => {
              document.documentElement.style.scrollSnapType = 'y proximity'
              document.body.style.scrollSnapType = 'y proximity'
            }, 100)
          }
        }

        requestAnimationFrame(animateScroll)
      } else {
        // For keyboard and click navigation, use the original method
        const originalScrollBehavior = document.documentElement.style.scrollBehavior
        const originalScrollSnapType = document.documentElement.style.scrollSnapType
        document.documentElement.style.scrollBehavior = 'smooth'
        document.documentElement.style.scrollSnapType = 'none'

        window.scrollTo({ top: targetPosition, behavior: 'smooth' })

        setTimeout(() => {
          document.documentElement.style.scrollBehavior = originalScrollBehavior
          document.documentElement.style.scrollSnapType = originalScrollSnapType || 'y proximity'
        }, 1000)
      }
    }
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const footer = document.querySelector('footer')
    const allElements = [...Array.from(sections)]
    if (footer) allElements.push(footer)

    const sectionRatios = new Map<Element, number>()
    let isScrolling = false
    let scrollTimeout: NodeJS.Timeout

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
            const index = allElements.indexOf(el as HTMLElement)
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

    allElements.forEach((element) => {
      if (element) observer.observe(element)
    })

    const handleScroll = () => {
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

    const handleWheel = (e: WheelEvent) => {
      // Don't interfere if user is scrolling within form elements
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      // Prevent multiple rapid wheel events
      if (isScrolling) {
        e.preventDefault()
        return
      }

      const currentSectionElement = allElements[currentSection]
      if (!currentSectionElement) return

      const rect = currentSectionElement.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const scrollPosition = window.scrollY
      const documentHeight = document.documentElement.scrollHeight

      // More lenient boundary detection
      const atTop = rect.top >= -50 // Increased tolerance
      const atBottom = rect.bottom <= windowHeight + 50 // Increased tolerance
      
      // Special case for Contact section (index 6) to Footer (index 7)
      const isContactSection = currentSection === 6
      const isFooter = currentSection === allElements.length - 1
      const atPageBottom = scrollPosition + windowHeight >= documentHeight - 50

      // Only handle section jumping if we're at section boundaries
      if (e.deltaY > 0) {
        // Scrolling down
        let shouldJump = false
        
        if (isContactSection) {
          // Special handling for Contact -> Footer transition
          // Be more aggressive about detecting when we can jump to footer
          shouldJump = rect.bottom <= windowHeight + 100 // More lenient for contact
        } else if (isFooter) {
          // For footer, only jump if not at page bottom
          shouldJump = atBottom && !atPageBottom
        } else {
          // For other sections, use normal detection
          shouldJump = atBottom
        }
        
        if (shouldJump) {
          const nextSection = Math.min(allElements.length - 1, currentSection + 1)
          if (nextSection !== currentSection) {
            e.preventDefault()
            isScrolling = true
            scrollToSection(nextSection, true)

            clearTimeout(scrollTimeout)
            scrollTimeout = setTimeout(() => {
              isScrolling = false
            }, 1000)
          }
        }
      } else if (e.deltaY < 0 && atTop) {
        // Scrolling up and at top of section
        const prevSection = Math.max(0, currentSection - 1)
        if (prevSection !== currentSection) {
          e.preventDefault()
          isScrolling = true
          scrollToSection(prevSection, true)

          clearTimeout(scrollTimeout)
          scrollTimeout = setTimeout(() => {
            isScrolling = false
          }, 1000)
        }
      }
      // If not at boundaries, allow normal scrolling within the section
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      // Prevent multiple rapid key events
      if (isScrolling) {
        e.preventDefault()
        return
      }

      const totalSections = allElements.length
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
        isScrolling = true
        scrollToSection(targetSection, true) // Use wheel-triggered animation for keyboard too
        
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          isScrolling = false
        }, 1000)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('wheel', handleWheel, { passive: false })

    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleWheel)
      clearTimeout(scrollTimeout)
    }
  }, [currentSection, scrollToSection])

  return (
    <>
      {/* Section indicators - hidden on mobile, visible on desktop */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
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

      {/* Mobile section indicator - minimal dots at bottom */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {sectionNames.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${currentSection === index
              ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50 scale-125'
              : 'bg-white/30 hover:bg-cyan-400/60'
              }`}
            onClick={() => scrollToSection(index)}
            aria-label={`Go to ${sectionNames[index]} section`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-white/10 z-50">
        <div
          className="h-full bg-cyan-400 transition-all duration-300"
          style={{ width: `${((currentSection + 1) / sectionNames.length) * 100}%` }}
        />
      </div>

      {/* Keyboard hint - only show on desktop and first section */}
      {currentSection === 0 && (
        <div className="hidden lg:block fixed bottom-8 left-1/2 -translate-x-1/2 z-50 text-white/40 text-xs flex items-center gap-2 animate-pulse">
          Use ↑↓ or Space to navigate
        </div>
      )}
    </>
  )
}