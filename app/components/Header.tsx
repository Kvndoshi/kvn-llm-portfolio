'use client'

import { useEffect, useState } from 'react'

export default function Header() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const googleColors = ['#4285F4', '#EA4335', '#FBBC04', '#34A853']
  const title = 'KVN LLM'
  
  return (
    <header className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] px-4">
      <div 
        className={`transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-6 float-animation">
          {title.split('').map((char, index) => {
            const color = googleColors[index % googleColors.length]
            return (
              <span
                key={index}
                className="inline-block transition-all duration-300 hover:scale-110"
                style={{
                  color: color,
                  textShadow: `0 0 20px ${color}, 0 0 40px ${color}`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            )
          })}
        </h1>
        
        {/* Subtitle */}
        <div className="text-center">
          <p 
            className="text-xl md:text-2xl text-gray-300 mb-2"
            style={{
              animationDelay: '0.5s'
            }}
          >
            <span className="text-google-blue">AI</span>-Powered Portfolio
          </p>
          <p 
            className="text-sm md:text-base text-gray-400 font-light"
            style={{
              animationDelay: '0.7s'
            }}
          >
            &lt; Knowledge Graph • Machine Learning • Innovation /&gt;
          </p>
        </div>
        
        {/* Animated Underline */}
        <div className="mt-8 flex justify-center gap-2">
          {googleColors.map((color, index) => (
            <div
              key={index}
              className="h-1 w-12 md:w-16 rounded-full"
              style={{
                backgroundColor: color,
                animation: `fadeInUp 1s ease-out ${0.9 + index * 0.1}s forwards`,
                opacity: 0
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 transition-all duration-1000 delay-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
          <svg 
            className="w-6 h-6 text-google-blue" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </header>
  )
}

