"use client"

{/* <svg
  width={width}
  height={height}
  // viewBox="0 0 200 200"
  className={`absolute top-0 left-0 transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}` } > </svg> */}
{/* Main Logo SVG with 3D Transform */}


import { useState } from "react"

interface Jewelry3DLogoProps {
  width?: number
  height?: number
}

export default function Jewelry3DLogo({ width = 350, height = 350 }: Jewelry3DLogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Calculate orbit radius based on logo size
  const orbitRadius = Math.min(width, height) * 0.28

  return (
    <div 
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        position: 'relative',
        zIndex: 1
      }}
    >
      {/* Outer Glow Effect */}
      <div className={`absolute inset-0 rounded-full transition-all duration-700 ${
        isHovered 
          ? 'blur-3xl bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 scale-150 opacity-80' 
          : 'blur-2xl bg-amber-500/30 scale-100 opacity-40'
      }`}></div>

      {/* Rotating Ring Effects */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        isHovered ? 'animate-spin-slow' : ''
      }`}>
        <div className="absolute inset-0 border-2 border-amber-400/40 rounded-full" 
          style={{ 
            transform: 'rotateX(70deg) rotateZ(0deg)',
            transformStyle: 'preserve-3d'
          }}
        ></div>
      </div>

      <div className={`absolute inset-0 transition-all duration-1000 ${
        isHovered ? 'animate-spin-reverse' : ''
      }`}>
        <div className="absolute inset-0 border-2 border-orange-400/40 rounded-full" 
          style={{ 
            transform: 'rotateY(70deg) rotateZ(0deg)',
            transformStyle: 'preserve-3d'
          }}
        ></div>
      </div>

      {/* Main Logo SVG with 3D Transform */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 200"
        className={`absolute top-0 left-0 transition-all duration-700 ${
          isHovered 
            ? 'scale-110' 
            : 'scale-100'
        }`}
        style={{
          filter: isHovered 
            ? 'drop-shadow(0 0 30px rgba(251,191,36,0.8)) drop-shadow(0 0 60px rgba(251,191,36,0.4))' 
            : 'drop-shadow(0 0 10px rgba(251,191,36,0.3))',
          transform: isHovered 
            ? 'perspective(1000px) rotateX(15deg) rotateY(15deg)' 
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
          transformStyle: 'preserve-3d',
          zIndex: 10,
          position: 'absolute'
        }}
      >
        {/* Diamond Shape that morphs on hover */}
        <g className={`transition-all duration-700 ${isHovered ? 'animate-pulse-glow' : ''}`}>
          {/* Top triangle */}
          <path
            d={isHovered 
              ? "M 100 30 L 140 70 L 60 70 Z"
              : "M 100 40 L 130 70 L 70 70 Z"
            }
            fill="url(#gradient1)"
            stroke="url(#stroke-gradient)"
            strokeWidth="2"
            className="transition-all duration-700"
            style={{
              transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)',
              transformStyle: 'preserve-3d',
            }}
          />
          
          {/* Middle section */}
          <path
            d={isHovered
              ? "M 60 70 L 100 100 L 140 70 L 150 80 L 100 130 L 50 80 Z"
              : "M 70 70 L 100 90 L 130 70 L 140 80 L 100 120 L 60 80 Z"
            }
            fill="url(#gradient2)"
            stroke="url(#stroke-gradient)"
            strokeWidth="2"
            className="transition-all duration-700"
            style={{
              transform: isHovered ? 'translateZ(10px)' : 'translateZ(0px)',
              transformStyle: 'preserve-3d',
            }}
          />
          
          {/* Bottom triangle */}
          <path
            d={isHovered
              ? "M 50 80 L 100 130 L 150 80 L 100 170 Z"
              : "M 60 80 L 100 120 L 140 80 L 100 160 Z"
            }
            fill="url(#gradient3)"
            stroke="url(#stroke-gradient)"
            strokeWidth="2"
            className="transition-all duration-700"
            style={{
              transform: isHovered ? 'translateZ(5px)' : 'translateZ(0px)',
              transformStyle: 'preserve-3d',
            }}
          />

          {/* Inner sparkle lines */}
          <line x1="100" y1={isHovered ? "30" : "40"} x2="100" y2={isHovered ? "170" : "160"} 
            stroke="url(#sparkle-gradient)" 
            strokeWidth={isHovered ? "3" : "2"} 
            className="transition-all duration-700"
            opacity={isHovered ? "1" : "0.6"}
          />
          <line x1={isHovered ? "60" : "70"} y1="70" x2={isHovered ? "140" : "130"} y2="70" 
            stroke="url(#sparkle-gradient)" 
            strokeWidth={isHovered ? "3" : "2"} 
            className="transition-all duration-700"
            opacity={isHovered ? "1" : "0.6"}
          />
        </g>

        {/* Rotating sparkles */}
        {isHovered && (
          <g className="animate-sparkle-rotate">
            <circle cx="100" cy="30" r="3" fill="#FCD34D" opacity="0.8">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="140" cy="100" r="3" fill="#FDE68A" opacity="0.8">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="60" cy="100" r="3" fill="#FEF3C7" opacity="0.8">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="170" r="3" fill="#FBBF24" opacity="0.8">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </g>
        )}

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isHovered ? "#FCD34D" : "#F59E0B"} />
            <stop offset="50%" stopColor={isHovered ? "#FBBF24" : "#D97706"} />
            <stop offset="100%" stopColor={isHovered ? "#FDE68A" : "#B45309"} />
          </linearGradient>
          
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isHovered ? "#FB923C" : "#EA580C"} />
            <stop offset="50%" stopColor={isHovered ? "#FDBA74" : "#C2410C"} />
            <stop offset="100%" stopColor={isHovered ? "#FED7AA" : "#9A3412"} />
          </linearGradient>
          
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isHovered ? "#F97316" : "#C2410C"} />
            <stop offset="50%" stopColor={isHovered ? "#FB923C" : "#9A3412"} />
            <stop offset="100%" stopColor={isHovered ? "#FDBA74" : "#7C2D12"} />
          </linearGradient>

          <linearGradient id="stroke-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isHovered ? "#FEF3C7" : "#FDE68A"} />
            <stop offset="100%" stopColor={isHovered ? "#FDE68A" : "#FCD34D"} />
          </linearGradient>

          <linearGradient id="sparkle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="50%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#FCD34D" />
          </linearGradient>
        </defs>
      </svg>

      {/* Orbiting particles - Always visible with dynamic radius */}
      <div 
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-amber-300 rounded-full" 
        style={{ 
          marginLeft: '-4px', 
          marginTop: '-4px',
          animation: `orbit-1 4s linear infinite`,
          '--orbit-radius': `${orbitRadius}px`
        } as React.CSSProperties & { '--orbit-radius': string }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-300 rounded-full" 
        style={{ 
          marginLeft: '-4px', 
          marginTop: '-4px',
          animation: `orbit-2 4s linear infinite`,
          '--orbit-radius': `${orbitRadius}px`
        } as React.CSSProperties & { '--orbit-radius': string }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-orange-300 rounded-full" 
        style={{ 
          marginLeft: '-4px', 
          marginTop: '-4px',
          animation: `orbit-3 4s linear infinite`,
          '--orbit-radius': `${orbitRadius}px`
        } as React.CSSProperties & { '--orbit-radius': string }}
      ></div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotateX(70deg) rotateZ(0deg); }
          to { transform: rotateX(70deg) rotateZ(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotateY(70deg) rotateZ(0deg); }
          to { transform: rotateY(70deg) rotateZ(-360deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        @keyframes sparkle-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbit-1 {
          0% { transform: rotate(0deg) translateX(${orbitRadius}px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(${orbitRadius}px) rotate(-360deg); }
        }

        @keyframes orbit-2 {
          0% { transform: rotate(120deg) translateX(${orbitRadius}px) rotate(-120deg); }
          100% { transform: rotate(480deg) translateX(${orbitRadius}px) rotate(-480deg); }
        }

        @keyframes orbit-3 {
          0% { transform: rotate(240deg) translateX(${orbitRadius}px) rotate(-240deg); }
          100% { transform: rotate(600deg) translateX(${orbitRadius}px) rotate(-600deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 4s linear infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-sparkle-rotate {
          animation: sparkle-rotate 3s linear infinite;
          transform-origin: center;
        }
      `}</style>
    </div>
  )
}