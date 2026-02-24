'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if page is still loading
    const checkLoadingState = () => {
      if (document.readyState === 'complete') {
        setIsLoading(false)
        return
      }
      setIsVisible(true)
    }

    // Initial check
    checkLoadingState()

    // Listen for load events
    const handleLoad = () => {
      setIsLoading(false)
    }

    const handleReadyStateChange = () => {
      if (document.readyState === 'complete') {
        setIsLoading(false)
      }
    }

    window.addEventListener('load', handleLoad)
    document.addEventListener('readystatechange', handleReadyStateChange)

    // Fallback timer - hide after 3 seconds max
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      window.removeEventListener('load', handleLoad)
      document.removeEventListener('readystatechange', handleReadyStateChange)
      clearTimeout(fallbackTimer)
    }
  }, [])

  useEffect(() => {
    if (!isLoading && isVisible) {
      // Start fade out animation
      setIsAnimating(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 500) // Fade out duration

      return () => clearTimeout(timer)
    }
  }, [isLoading, isVisible])

  // Don't show loading screen if page is already loaded
  if (!isLoading && !isVisible) return null
  if (!isLoading && !isAnimating) return null

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        isAnimating ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
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