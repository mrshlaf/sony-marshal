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
    <section ref={containerRef} className="pt-6 pb-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-10 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit mb-10 lg:mb-0">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-black mb-4 leading-none md:leading-[0.8]">
              Seamless <br /> <span className="text-zinc-600 uppercase">Unified</span> <br /> Control.
            </h2>
            <p className="text-sm md:text-base text-zinc-500 font-bold uppercase tracking-widest leading-tight max-w-[320px]">
               Bridges the gap between capture and creation.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="eco-item flex flex-col gap-4">
              <div className="relative aspect-[4/5] rounded-[32px] bg-zinc-100 overflow-hidden shadow-xl group">
                 <Image src="/images/sony3.jpg" alt="Creators App" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                 <div className="absolute bottom-6 left-6 text-white pr-6">
                    <h4 className="text-2xl font-bold uppercase tracking-tight mb-2">Creators' App</h4>
                    <p className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-[0.1em] leading-relaxed">
                      Workflow Hub. Pro tethering and cloud integration.
                    </p>
                 </div>
              </div>
            </div>

            <div className="eco-item flex flex-col gap-4 md:mt-16">
              <div className="relative aspect-[4/5] rounded-[32px] bg-zinc-900 overflow-hidden shadow-xl group">
                 <Image src="/images/sony1.jpg" alt="Imaging Edge" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                 <div className="absolute bottom-6 left-6 text-white pr-6">
                    <h4 className="text-2xl font-bold uppercase tracking-tight mb-2">Imaging Edge</h4>
                    <p className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-[0.1em] leading-relaxed">
                      Studio interface. Precision RAW processing.
                    </p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
