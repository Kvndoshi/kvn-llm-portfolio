'use client'

import { useEffect, useRef, useState } from 'react'

interface AboutSectionProps {
  title?: string
  description?: string
  highlights?: string[]
}

export default function AboutSection({ 
  title = "About Me",
  description = "I'm Kevin, an AI enthusiast passionate about building intelligent systems. This portfolio showcases my journey in machine learning, knowledge graphs, and innovative AI solutions.",
  highlights = [
    "🤖 AI & Machine Learning",
    "🧠 Knowledge Graphs",
    "💡 Innovative Solutions",
    "🚀 Continuous Learning"
  ]
}: AboutSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div 
        className={`max-w-4xl w-full transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Main Card */}
        <div className="glass p-8 md:p-12 hover-lift">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{title}</span>
          </h2>
          
          {/* Divider */}
          <div className="flex gap-2 mb-8">
            <div className="h-1 w-20 bg-google-blue rounded-full"></div>
            <div className="h-1 w-12 bg-google-red rounded-full"></div>
            <div className="h-1 w-16 bg-google-yellow rounded-full"></div>
            <div className="h-1 w-8 bg-google-green rounded-full"></div>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            {description}
          </p>
          
          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass p-4 hover-lift border-l-4 transition-all duration-300"
                style={{
                  borderLeftColor: ['#4285F4', '#EA4335', '#FBBC04', '#34A853'][index % 4],
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <p className="text-sm md:text-base text-gray-200">{highlight}</p>
              </div>
            ))}
          </div>
          
          {/* Call to Action - Placeholder for future features */}
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <button 
              className="glass px-6 py-3 hover-lift border-google-blue border-2 transition-all duration-300 hover:bg-google-blue hover:bg-opacity-20"
              disabled
              title="Coming Soon"
            >
              <span className="text-google-blue font-semibold">Ask the LLM</span>
            </button>
            <button 
              className="glass px-6 py-3 hover-lift border-google-green border-2 transition-all duration-300 hover:bg-google-green hover:bg-opacity-20"
              disabled
              title="Coming Soon"
            >
              <span className="text-google-green font-semibold">Explore Knowledge Graph</span>
            </button>
          </div>
          
          {/* Coming Soon Badge */}
          <p className="text-center mt-4 text-xs text-gray-500 italic">
            * LLM and Knowledge Graph features coming soon
          </p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-google-blue rounded-lg opacity-20 -z-10"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-google-red rounded-lg opacity-20 -z-10"></div>
      </div>
    </section>
  )
}

