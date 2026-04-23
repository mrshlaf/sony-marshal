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
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-24 md:py-40 bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/sony1.jpg" 
          alt="Sony Vision" 
          fill 
          className="object-cover opacity-40 grayscale-[0.5]" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1d1d1f] via-transparent to-[#1d1d1f]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-24">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/40 mb-6">Our Future Path</p>
          <h2 className="text-4xl md:text-7xl font-semibold tracking-tighter leading-[0.9] mb-8">
            Innovating for the <br /> <span className="text-white/60 italic font-serif underline underline-offset-[12px] decoration-white/20">Next Generation.</span>
          </h2>
          <p className="text-xl text-white/70 font-medium leading-relaxed">
            Sony is committed to a future where creativity has no boundaries. Our "Road to Zero" environmental plan aims for a zero environmental footprint throughout the lifecycle of our products and business activities by 2050.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="vision-card bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[48px] hover:bg-white/10 transition-all duration-500">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
              <Globe className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 tracking-tight">Kando Strategy</h3>
            <p className="text-white/50 leading-relaxed font-medium">
              Moving people emotionally through the power of technology and storytelling.
            </p>
          </div>

          <div className="vision-card bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[48px] hover:bg-white/10 transition-all duration-500">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 tracking-tight">Road to Zero</h3>
            <p className="text-white/50 leading-relaxed font-medium">
              Committed to zero environmental footprint across our entire global operations by 2050.
            </p>
          </div>

          <div className="vision-card bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[48px] hover:bg-white/10 transition-all duration-500">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
              <ShieldCheck className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 tracking-tight">One Sony</h3>
            <p className="text-white/50 leading-relaxed font-medium">
              Unifying Electronics, Entertainment, and Financial Services into a single ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
