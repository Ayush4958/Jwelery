"use client"
import { useState } from "react"

export default function CardsGrid() {
  const cards = [
    {
      id: 1,
      image: "/hand_excell.jpg",
      title: "Artisan Craftsmanship",
      subtitle: "Each piece is meticulously handcrafted by master artisans with decades of experience, ensuring unparalleled quality and attention to detail",
    },
    {
      id: 2,
      image: "/prem_mat.jpg",
      title: "Finest Materials",
      subtitle: "We source only ethically-sourced precious metals and conflict-free gemstones, certified for authenticity and quality.",
    },
    {
      id: 3,
      image: "/cust_des.jpg",
      title: "Bespoke Creations",
      subtitle: "Bring your vision to life with our custom design service. Work directly with our designers to create a one-of-a-kind masterpiece.",
    },
    {
      id: 4,
      image: "/exp_cons.jpg",
      title: "Personal Consultation",
      subtitle: "Our jewelry experts are available for one-on-one consultations to help you find or design the perfect piece.",
    },
    {
      id: 5,
      image: "/sec_shop.jpg",
      title: "Safe & Secure",
      subtitle: "Shop with confidence using our encrypted payment system and enjoy fully insured shipping to your doorstep.",
    },
    {
      id: 6,
      image: "/eas_ret.jpg",
      title: "30-Day Returns",
      subtitle: "Not completely satisfied? Enjoy hassle-free returns within 30 days with full refund, no questions asked.",
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text text-transparent drop-shadow-2xl animate-fade-in">
            Our Distinguished Features
          </h1>
          <p className="text-amber-100/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            Experience excellence in every detail of your jewelry journey
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <DirectionAwareHover 
              key={card.id} 
              imageUrl={card.image} 
              className="h-64 sm:h-72"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-2 sm:space-y-3 text-left p-4">
                <p className="font-bold text-xl sm:text-2xl text-white drop-shadow-lg">{card.title}</p>
                <p className="font-normal text-xs sm:text-sm text-gray-200 line-clamp-3">{card.subtitle}</p>
              </div>
            </DirectionAwareHover>
          ))}
        </div>
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
          100% { transform: translate(var(--tx, 50px), var(--ty, -100px)) scale(1); opacity: 0; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
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
          --tx: ${Math.random() * 200 - 100}px;
          --ty: ${Math.random() * -200}px;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </main>
  )
}

function DirectionAwareHover({ imageUrl, children, className = "", style = {} }) {
  const [direction, setDirection] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = (e:any) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    if (Math.abs(x - centerX) > Math.abs(y - centerY)) {
      setDirection(x > centerX ? "right" : "left")
    } else {
      setDirection(y > centerY ? "bottom" : "top")
    }
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl ${className} cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="Feature"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Overlay with content */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-500 flex items-end ${
          isHovered
            ? direction === "top"
              ? "translate-y-0"
              : direction === "bottom"
              ? "translate-y-0"
              : direction === "left"
              ? "translate-x-0"
              : "translate-x-0"
            : direction === "top"
            ? "-translate-y-full"
            : direction === "bottom"
            ? "translate-y-full"
            : direction === "left"
            ? "-translate-x-full"
            : "translate-x-full"
        }`}
      >
        {/* Animated Border Glow */}
        <div className="absolute inset-0 border-2 border-yellow-400/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {children}
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-400/60 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-400/60 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  )
}