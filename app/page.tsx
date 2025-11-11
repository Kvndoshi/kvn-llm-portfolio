import GridBackground from './components/GridBackground'
import Header from './components/Header'
import AboutSection from './components/AboutSection'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Layer */}
      <GridBackground />
      
      {/* Content Layer */}
      <div className="relative z-10">
        {/* Hero Section with KVN LLM Title */}
        <Header />
        
        {/* About Section */}
        <AboutSection 
          title="About Me"
          description="I'm Kevin, an AI enthusiast passionate about building intelligent systems. This portfolio showcases my journey in machine learning, knowledge graphs, and innovative AI solutions. Currently building an LLM-powered portfolio that can answer questions about my work and experience."
          highlights={[
            "🤖 AI & Machine Learning",
            "🧠 Knowledge Graphs & RAG",
            "💡 Full-Stack Development",
            "🚀 Continuous Innovation"
          ]}
        />
        
        {/* Footer */}
        <footer className="relative z-10 py-8 text-center text-gray-500 text-sm border-t border-gray-800">
          <p>© 2024 Kevin | KVN LLM Portfolio</p>
          <p className="mt-2 text-xs">
            Built with Next.js • Deployed on Vercel
          </p>
        </footer>
      </div>
    </main>
  )
}

