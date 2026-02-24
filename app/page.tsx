'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import TechStack from '@/components/tech-stack'
import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <Services />
      <Projects />
      <Experience />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
