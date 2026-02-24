'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full bg-white/10 animate-pulse" />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20 transition-all duration-300 glow-hover border border-white/20 dark:border-white/20 backdrop-blur-sm group"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
      ) : (
        <Moon className="w-4 h-4 text-cyan-600 group-hover:text-cyan-700 transition-colors" />
      )}
    </button>
  )
}