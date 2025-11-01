"use client"
import { useEffect, useState } from "react"

interface Testimonial {
  quote: string
  name: string
  title: string
}

interface InfiniteMovingCardsProps {
  items: Testimonial[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
}

function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
}: InfiniteMovingCardsProps) {
  const [start, setStart] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    setStart(true)
  }, [])

  const getSpeed = () => {
    switch (speed) {
      case "fast":
        return "20s"
      case "normal":
        return "40s"
      case "slow":
        return "60s"
      default:
        return "40s"
    }
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex gap-4 sm:gap-6 ${
          start ? "animate-scroll" : ""
        } ${pauseOnHover && isHovered ? "pause-animation" : ""}`}
        style={{
          animationDirection: direction === "left" ? "normal" : "reverse",
          animationDuration: getSpeed(),
        }}
      >
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="group relative flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] h-[320px] sm:h-[340px] rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-white via-amber-50/50 to-orange-50/50 backdrop-blur-sm border-2 border-amber-200/60 shadow-xl hover:shadow-2xl hover:scale-105 hover:border-amber-300 transition-all duration-500 flex flex-col"
            onMouseEnter={() => !pauseOnHover && setIsHovered(false)}
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/0 via-orange-400/0 to-yellow-400/0 group-hover:from-amber-400/20 group-hover:via-orange-400/20 group-hover:to-yellow-400/20 transition-all duration-500"></div>

            <div className="relative z-10 flex-1 flex flex-col">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-auto italic line-clamp-6 flex-1">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-3 border-t border-amber-200 pt-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-md">
                  {item.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-amber-900 text-sm sm:text-base truncate">{item.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">{item.title}</p>
                </div>
              </div>
            </div>

            {/* Corner Decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-300/20 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-300/20 to-transparent rounded-tr-full"></div>
          </div>
        ))}
      </div>

      {/* Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll linear infinite;
          width: max-content;
        }

        /* Added pause-animation class to stop animation on hover */
        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="min-h-screen relative flex flex-col antialiased items-center justify-center overflow-hidden p-4 sm:p-8">
      {/* Animated 3D Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-950 to-orange-950">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(251,191,36,0.3),transparent_50%)] animate-pulse-slow"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.25),transparent_50%)] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(234,88,12,0.2),transparent_50%)] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* 3D Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-float-3d"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-yellow-500/15 to-amber-500/15 rounded-full blur-3xl animate-float-3d" style={{ animationDelay: '2s', animationDuration: '20s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-float-3d" style={{ animationDelay: '4s', animationDuration: '25s' }}></div>
        </div>

        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.05)_1px,transparent_1px)] bg-[size:80px_80px] animate-grid-move"></div>

        {/* Diagonal Light Streaks */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-amber-400/30 to-transparent transform -skew-x-12 animate-streak"></div>
          <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-transparent via-orange-400/20 to-transparent transform -skew-x-12 animate-streak" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-yellow-400/25 to-transparent transform -skew-x-12 animate-streak" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Particle Effect */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/60 rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text text-transparent drop-shadow-lg">
          Voices of Elegance
        </h1>
        <p className="text-center text-amber-100/90 mb-12 sm:mb-16 text-base sm:text-lg md:text-xl px-4">
          Authentic experiences from people who chose timeless elegance.
        </p>

        <InfiniteMovingCards items={testimonials} direction="right" speed="normal" pauseOnHover={true} />
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        
        @keyframes float-3d {
          0%, 100% { 
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          33% { 
            transform: translate3d(30px, -30px, 20px) rotate(120deg);
          }
          66% { 
            transform: translate3d(-20px, 20px, -20px) rotate(240deg);
          }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 80px); }
        }
        
        @keyframes streak {
          0% { transform: translateX(-100vw) skewX(-12deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100vw) skewX(-12deg); opacity: 0; }
        }
        
        @keyframes particle {
          0% { transform: translate(0, 0) scale(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translate(50px, -100px) scale(1); opacity: 0; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-float-3d {
          animation: float-3d 15s ease-in-out infinite;
        }
        
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
        
        .animate-streak {
          animation: streak 8s linear infinite;
        }
        
        .animate-particle {
          animation: particle linear infinite;
        }
        
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll linear infinite;
          width: max-content;
        }

        /* Added pause-animation class to stop animation on hover */
        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

const testimonials = [
  {
    quote:
      "Absolutely stunning craftsmanship! My bracelet feels elegant and luxurious — I receive compliments every time I wear it.",
    name: "Sophia Mehra",
    title: "Customer",
  },
  {
    quote:
      "The necklace I ordered exceeded my expectations. The shine, the finish — it's truly premium. Worth every penny!",
    name: "Arjun Kapoor",
    title: "Customer",
  },
  {
    quote:
      "Exceptional service and beautiful jewellery. My diamond earrings came perfectly packaged and look even better in person.",
    name: "Nisha Sharma",
    title: "Customer",
  },
  {
    quote:
      "Timeless and classy. The ring I purchased has become a part of my everyday wear — feels special every time I look at it.",
    name: "Rohan Patil",
    title: "Customer",
  },
  {
    quote:
      "I gifted the bracelet to my wife and she loved it! The detailing is so fine and delicate — truly luxurious.",
    name: "Vikram Singh",
    title: "Customer",
  },
  {
    quote: "I've never seen jewellery this elegant. The pearl earrings are lightweight yet look absolutely royal.",
    name: "Ananya Verma",
    title: "Customer",
  },
  {
    quote: "From ordering to delivery, everything was smooth. The ring fits perfectly and sparkles beautifully.",
    name: "Karan Joshi",
    title: "Customer",
  },
  {
    quote: "The craftsmanship is outstanding. You can tell each piece is made with care and precision.",
    name: "Riya Kapoor",
    title: "Customer",
  },
  {
    quote: "I loved the packaging, presentation, and the product! Amazing luxury experience at great value.",
    name: "Devansh Mehta",
    title: "Customer",
  },
  {
    quote: "The gold necklace I bought feels like a piece of art — subtle, elegant, and incredibly well-designed.",
    name: "Meera Chauhan",
    title: "Customer",
  },
]