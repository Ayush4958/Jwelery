import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import HeroButtons from "@/components/ui/hero-button";
import Feedback from '../components/feedback'
import Features from '../components/features'
import { Jewelry3DLogo } from "../components/logo"

export default function Hero() {
  return (
    <>
      <div className="relative flex min-h-screen w-full items-center justify-between overflow-hidden bg-accent-foreground px-6 sm:px-8 lg:px-16">
        <BackgroundRippleEffect rows={16} />
        
        {/* Left Side - Content */}
        <div className="max-w-xl mt-20 lg:max-w-2xl z-10">
          {/* Heading */}
          <h2 className="relative text-left text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-7xl dark:text-neutral-100">
            Jwellery Website <br /> <span className="text-yellow-400"> at your Service </span>
          </h2>

          {/* Descriptive text */}
          <p className="relative mt-6 text-left text-sm font-normal text-white/90 sm:text-base lg:text-lg dark:text-neutral-500">
            Discover exquisite handcrafted jewellery that embodies luxury, sophistication, and eternal beauty. Handcrafted luxury jewelry for the extraordinary moments in your life.
            Experience the perfect blend of traditional craftsmanship and contemporary design in our exclusive collections.
            Each piece tells a unique story, meticulously crafted to become a cherished part of your personal journey.
          </p>

          {/* Buttons Group */}
          <div className="mt-8 sm:mt-10 lg:mt-12">
            <HeroButtons />
          </div>
        </div>

        {/* Right Side - Logo (moved closer to content) */}
        <div className="hidden lg:flex items-center justify-start z-10 ml-0 mr-15">
          <Jewelry3DLogo />
        </div>
      </div>


{/* Fetures */}
<div className="items-center text-center">
      <Features />
</div>

{/* Feedback  */}
<div>
      <Feedback />
</div>


  
    </>
  );
}