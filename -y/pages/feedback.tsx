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
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#6B6B47] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#6B6B47] to-transparent z-10 pointer-events-none"></div>

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
      {/* Animated Gradient Background - Olive/Brown Tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6B6B47] via-[#7A7A52] to-[#8B8B5C] animate-gradient-shift"></div>

      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-600/20 to-yellow-700/20 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-600/20 to-amber-700/20 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-orange-600/20 to-yellow-600/20 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-500/60 rounded-full animate-float"></div>
        <div className="absolute top-3/4 left-3/4 w-3 h-3 bg-orange-500/60 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-yellow-500/60 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-amber-600/60 rounded-full animate-float animation-delay-3000"></div>
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
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 8s infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
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
