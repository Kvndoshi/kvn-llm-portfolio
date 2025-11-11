'use client'

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(66, 133, 244, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(66, 133, 244, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridPulse 4s ease-in-out infinite'
        }}
      />
      
      {/* Gradient Overlays */}
      <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(66, 133, 244, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(234, 67, 53, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(52, 168, 83, 0.1) 0%, transparent 60%)
          `
        }}
      />
      
      {/* Animated Gradient Spots */}
      <div 
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'linear-gradient(135deg, #4285F4, #34A853)',
          top: '10%',
          left: '10%',
          animation: 'float 8s ease-in-out infinite'
        }}
      />
      
      <div 
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'linear-gradient(135deg, #EA4335, #FBBC04)',
          bottom: '10%',
          right: '10%',
          animation: 'float 10s ease-in-out infinite reverse'
        }}
      />
      
      {/* Scanline Effect */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
        }}
      />
    </div>
  )
}

