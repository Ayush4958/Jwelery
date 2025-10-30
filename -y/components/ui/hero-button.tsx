"use client"

export default function HeroButtons() {
  return (
    <>
    <div className="flex flex-col z-10 sm:flex-row items-center justify-center gap-4 sm:gap-6">
        {/* Primary Button - Explore Collection with Gradient & Glow */}
        <button
          className="group relative px-10 py-4 font-semibold text-lg text-white bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 rounded-xl overflow-hidden transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_0_40px_rgba(245,158,11,0.6),0_0_60px_rgba(245,158,11,0.3)] active:scale-100"
          aria-label="Explore Collection"
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-[shimmer_1.5s_ease-in-out] translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></div>
          
          {/* Glow effect background */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
          
          <span className="relative z-10 flex items-center gap-2">
            Explore Collection
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

        {/* Secondary Button - Features with Border Glow */}
        <button
          className="group relative px-10 py-4 font-semibold text-lg text-amber-900 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-amber-300 overflow-hidden transition-all duration-500 ease-out hover:scale-105 hover:border-amber-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] active:scale-100"
          aria-label="Features"
          >
          {/* Animated background on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Subtle pulse effect */}
          <div className="absolute inset-0 rounded-xl bg-amber-200 opacity-0 group-hover:opacity-20 animate-pulse"></div>
          
          <span className="relative z-10 flex items-center gap-2">
            Features
            <svg 
              className="w-5 h-5 transform group-hover:rotate-90 transition-transform duration-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </span>
        </button>
      </div>

      <style jsx>{`
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
            }
            `}</style>
  </>
  )
}