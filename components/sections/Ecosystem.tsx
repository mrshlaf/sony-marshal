"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Ecosystem() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".eco-item",
      { y: 15, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 lg:items-start">
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 h-fit">
            <h2 className="text-4xl md:text-8xl font-bold tracking-tighter text-black mb-8 leading-[0.85]">
              Seamless <br /> <span className="text-zinc-200 uppercase">Unified</span> <br /> Control.
            </h2>
            <p className="text-lg text-zinc-500 font-medium max-w-sm leading-relaxed">
               Bridges the gap between capture and creation.
            </p>
          </div>

          <div className="w-full lg:w-7/12 flex flex-col gap-12 md:gap-16">
            <div className="eco-item flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="w-full md:w-1/2 relative aspect-[4/5] rounded-[32px] md:rounded-[40px] bg-zinc-100 overflow-hidden shadow-2xl group">
                 <Image src="/images/sony3.jpg" alt="Creators App" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                 <div className="absolute bottom-8 left-8 text-white">
                    <h4 className="text-2xl font-bold uppercase tracking-tight">Creators' App</h4>
                 </div>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest leading-relaxed">
                  Mobile workflow Hub. Professional tethering and cloud integration.
                </p>
              </div>
            </div>

            <div className="eco-item flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
              <div className="w-full md:w-1/2 relative aspect-[4/5] rounded-[32px] md:rounded-[40px] bg-zinc-900 overflow-hidden shadow-2xl group">
                 <Image src="/images/sony4.jpg" alt="Imaging Edge" fill className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                 <div className="absolute bottom-8 left-8 text-white">
                    <h4 className="text-2xl font-bold uppercase tracking-tight">Imaging Edge</h4>
                 </div>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest leading-relaxed md:text-right">
                   Professional Studio interface. Precision RAW processing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
