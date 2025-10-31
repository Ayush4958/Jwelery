import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import HeroButtons from "@/components/ui/hero-button";
import Feedback from './feedback'
import Features from './features'

export default function Hero() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-[#323100fa]">
        <BackgroundRippleEffect rows={16} />
        <div className="mt-45 w-full">

          {/* Heading */}
          <h2 className="relative z-8 mx-auto max-w-[40rem] text-center text-2xl font-bold text-[#ffff] md:text-4xl lg:text-7xl dark:text-neutral-100">
            Jwellery Website <br /> <span className="text-[#ff0]"> at your Service </span>
          </h2>

          {/* Descriptive text */}
          <p className="relative z-10 mx-auto mt-11 max-w-[50rem] font-bold text-center text-[#ffffff] dark:text-neutral-500">
            Discover exquisite handcrafted jewellery that embodies luxury, sophistication, and eternal beauty. Handcrafted luxury jewelry for the extraordinary moments in your life.
            Experience the perfect blend of traditional craftsmanship and contemporary design in our exclusive collections.
            Each piece tells a unique story, meticulously crafted to become a cherished part of your personal journey.
          </p>
        </div>

        {/* Buttons Group */}
        <div className="flex justify-center items-center mt-12 z-10">
          <HeroButtons />
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
