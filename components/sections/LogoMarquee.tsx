"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const BRANDS = ["PlayStation", "Bravia", "Alpha", "G-Master", "Walkman", "Xperia"];

export function LogoMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-inner", { xPercent: -50, repeat: -1, duration: 40, ease: "linear" });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const allBrands = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section ref={containerRef} className="py-8 bg-[#f5f5f7] flex flex-col justify-center overflow-hidden border-b border-zinc-200/50">
      <div className="w-full flex whitespace-nowrap mask-edges">
        <div className="marquee-inner flex gap-12 md:gap-24 px-4 items-center">
          {allBrands.map((brand, idx) => (
            <div key={idx} className="flex items-center justify-center shrink-0">
              <h2 className="text-xl md:text-2xl font-bold tracking-tighter text-[#1d1d1f] opacity-80 uppercase">{brand}</h2>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}
