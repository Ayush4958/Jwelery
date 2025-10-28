import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function Hero() {
  return (
    <div>
     <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden bg-[#323100fa]">
      <BackgroundRippleEffect rows={16} />
      <div className="mt-50 w-full">
        <h2 className="relative z-8 mx-auto max-w-xl text-center text-2xl font-bold text-[#ffff] md:text-4xl lg:text-7xl dark:text-neutral-100">
          Jwellery Website <br /> <span className="text-[#ff0]"> at your Service </span>
        </h2>
        <p className="relative z-10 mx-auto mt-11 max-w-[50rem] font-bold text-center text-[#ffffff] dark:text-neutral-500">
        Discover exquisite handcrafted jewellery that embodies luxury, sophistication, and eternal beauty. Handcrafted luxury jewelry for the extraordinary moments in your life.
        Experience the perfect blend of traditional craftsmanship and contemporary design in our exclusive collections.
        Each piece tells a unique story, meticulously crafted to become a cherished part of your personal journey.
        </p>
      </div>
    </div>
    </div>
  );
}
