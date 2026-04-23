"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Vision() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(
      ".vision-card",
      { y: 30, opacity: 0 },
      { 
        y: 0, opacity: 1, 
        duration: 1.2, 
        stagger: 0.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-16 md:py-24 bg-[#0d0d0d] text-white overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <Image src="/images/sony1.jpg" alt="Sony Vision" fill className="object-cover opacity-10 grayscale" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:items-end">
        <div className="w-full lg:w-7/12">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-8 uppercase text-white">
            Innovating <br /> <span className="text-zinc-700">the Future.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed max-w-xl">
             Our commitment to a legacy where creativity and technology co-exist in harmony.
          </p>
        </div>

        <div className="w-full lg:w-5/12 flex flex-col gap-6 md:gap-8 border-l border-white/10 pl-8 md:pl-12">
          {[
            { title: "KANDO STRATEGY", desc: "Emotional connection through tech." },
            { title: "ROAD TO ZERO", desc: "Zero environmental footprint by 2050." },
            { title: "ONE SONY", desc: "Integrated ecosystem synergy." }
          ].map((item, i) => (
            <div key={i} className="vision-card flex flex-col gap-1">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white uppercase">{item.title}</h3>
              <p className="text-zinc-600 font-bold uppercase tracking-widest text-[9px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
