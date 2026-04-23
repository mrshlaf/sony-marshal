"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const BRANDS = ["PlayStation", "Bravia", "Alpha", "G-Master", "XM5"];

export function LogoMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // We duplicate the brands array a few times to ensure a seamless infinite scroll
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      // Create a seamless infinite horizontal scroll using GSAP
      gsap.to(".marquee-inner", {
        xPercent: -50, // Move half the width
        repeat: -1,
        duration: 20, // adjust speed here
        ease: "linear",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Duplicate the array to create two exact sets of brands side by side
  // that will smoothly loop at the 50% mark width.
  const allBrands = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section 
      ref={containerRef} 
      className="py-24 bg-white border-b border-gray-100 overflow-hidden"
    >
      <div className="w-full flex whitespace-nowrap">
        <div 
          ref={marqueeRef} 
          className="marquee-inner flex gap-16 md:gap-32 px-8"
        >
          {allBrands.map((brand, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center shrink-0"
            >
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-black/90">
                {brand}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
