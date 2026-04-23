"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, Heart, ShieldCheck } from "lucide-react";

export function Vision() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".vision-card",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 bg-black text-white overflow-hidden">
      {/* Background Image - Absolute Minimalist */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/sony1.jpg" 
          alt="Sony Vision" 
          fill 
          className="object-cover opacity-40 grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20 lg:items-end">
        
        {/* Left Side: Big Editorial Statement */}
        <div className="w-full lg:w-7/12">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-500 mb-8">Global Vision 2050</p>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-12">
            Innovating <br /> <span className="text-zinc-600">for the</span> <br /> Generation.
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed max-w-xl">
             We are committed to a future where creativity and technology co-exist to inspire emotion and preserve our planet.
          </p>
        </div>

        {/* Right Side: Simple Semantic List (No more 'AI Cards') */}
        <div className="w-full lg:w-5/12 flex flex-col gap-16 border-l border-white/10 pl-8 md:pl-12">
          {[
            { 
              title: "Kando Strategy", 
              desc: "Moving people emotionally through the power of technology and storytelling." 
            },
            { 
              title: "Road to Zero", 
              desc: "Committed to zero environmental footprint across our entire global operations by 2050." 
            },
            { 
              title: "One Sony", 
              desc: "Unifying Electronics, Entertainment, and Financial Services into a single ecosystem." 
            }
          ].map((item, i) => (
            <div key={i} className="vision-card flex flex-col gap-4">
              <h3 className="text-2xl font-bold tracking-tight text-white">{item.title}</h3>
              <p className="text-zinc-500 font-medium leading-relaxed max-w-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
