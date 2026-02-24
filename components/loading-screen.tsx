'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setIsVisible(false)
      }, 500) // Fade out duration
    }, 2500) // Show for 2.5 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        isAnimating ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 animate-pulse">
          Samir Taous
        </h1>
        
        {/* Loading animation */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  )
}