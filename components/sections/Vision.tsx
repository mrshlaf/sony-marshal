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
      { y: 20, opacity: 0 },
      { 
        y: 0, opacity: 1, 
        duration: 1, 
        stagger: 0.15, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-10 md:py-16 bg-[#0d0d0d] text-white overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0">
        <Image src="/images/sony1.jpg" alt="Sony Vision" fill className="object-cover opacity-10 grayscale" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-6 lg:items-end">
        <div className="w-full lg:w-7/12">
          <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-[0.8] mb-3 uppercase text-white">
            Innovating <br /> <span className="text-zinc-600">the Future.</span>
          </h2>
          <p className="text-xs md:text-sm text-zinc-400 font-bold uppercase tracking-widest max-w-xl">
             Our commitment to a legacy where creativity and technology co-exist in harmony.
          </p>
        </div>

        <div className="w-full lg:w-5/12 flex flex-col gap-3 md:gap-4 border-l border-white/10 pl-6 md:pl-10">
          {[
            { title: "KANDO STRATEGY", desc: "Emotional connection through tech." },
            { title: "ROAD TO ZERO", desc: "Zero environmental footprint by 2050." },
            { title: "ONE SONY", desc: "Integrated ecosystem synergy." }
          ].map((item, i) => (
            <div key={i} className="vision-card flex flex-col gap-0.5">
              <h3 className="text-lg md:text-xl font-bold tracking-tight text-white uppercase">{item.title}</h3>
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-[8px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
