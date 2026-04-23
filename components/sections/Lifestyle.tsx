"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Lifestyle() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.fromTo(".lifestyle-text", 
      { y: 60, opacity: 0 },
      { 
        y: 0, opacity: 1, 
        duration: 1.2, 
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-[#0d0d0d]">
      <div ref={imageRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image src="/images/sony2.jpg" alt="Culture" fill className="object-cover opacity-20 grayscale saturate-0" priority />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-10 md:px-6">
         <div className="lifestyle-text w-full max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-8xl font-bold tracking-tighter text-zinc-100 mb-6 leading-[0.85] uppercase">
              Documenting <br /> every <span className="text-zinc-600">KANDO</span> moment.
            </h2>
            <p className="text-[10px] md:text-base text-zinc-500 max-w-xl mx-auto font-bold uppercase tracking-[0.3em]">
              Visual legacies with uncompromising precision.
            </p>
         </div>
      </div>
    </section>
  );
}
