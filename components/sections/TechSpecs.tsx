"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SPECS = [
  "33.0-megapixel full-frame Exmor R™ CMOS sensor",
  "BIONZ XR™ image processing engine",
  "Up to 4K 60p 10-bit 4:2:2 video recording",
  "Advanced Real-time Eye AF for humans, animals, and birds",
  "15-stop dynamic range for stunning image quality"
];

export function TechSpecs() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lines = gsap.utils.toArray<HTMLElement>(".reveal-line");

    lines.forEach((line: HTMLElement) => {
      gsap.fromTo(
        line,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: line,
            start: "top 85%", // Trigger slightly before it hits the bottom
            toggleActions: "play none none reverse", // Optional: hide when scrolled way back up
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="py-32 px-6 md:px-24 bg-white text-black min-h-screen flex items-center"
    >
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="mb-16 md:mb-32 overflow-hidden">
          <p className="reveal-line text-lg md:text-xl font-medium tracking-widest text-zinc-400 uppercase">
            Alpha 7 IV Engineering
          </p>
        </div>
        
        <div className="flex flex-col gap-8 md:gap-16">
          {SPECS.map((spec, index) => (
            <div key={index} className="overflow-hidden py-2">
              <h2 className="reveal-line text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-tight">
                {spec}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
