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

    // Parallax effect for the main image
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
      { y: 100, opacity: 0 },
      { 
        y: 0, opacity: 1, 
        duration: 1.2, 
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-black">
      <div ref={imageRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image
          src="/images/sony2.jpg"
          alt="Lifestyle Sony"
          fill
          className="object-cover opacity-50 grayscale"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
         <div className="lifestyle-text">
            <p className="text-[12px] font-bold tracking-[0.4em] uppercase text-white/60 mb-6 underline underline-offset-8">Creators' Life</p>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-10 leading-none">
              Capture every <br /> <span className="text-white/40">Kando</span> moment.
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed">
              From the bustling streets of Tokyo to the serene landscapes of the archipelago, Sony empowers you to tell your story with uncompromising clarity.
            </p>
         </div>
      </div>
    </section>
  );
}
