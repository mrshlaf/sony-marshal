"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Play } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".hero-reveal", 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 }
    );

    gsap.to(videoRef.current, {
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      <div ref={videoRef} className="absolute inset-0 w-full h-full origin-center">
        <video
          src="/videos/sony-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>
      
      <div ref={headlineRef} className="relative z-10 w-full max-w-[1400px] px-8 flex flex-col items-center text-center">
        <h1 className="hero-reveal text-[15vw] md:text-[11vw] leading-[0.75] font-bold tracking-tighter text-white mb-4 uppercase">
          Beyond <br /> <span className="text-zinc-500">Senses.</span>
        </h1>
        
        <p className="hero-reveal text-base md:text-xl font-medium text-zinc-400 max-w-2xl leading-relaxed mb-8">
          The Alpha 7 IV defines a new era of hybrid storytelling. Precision engineering meets unrestricted creative freedom in our most versatile full-frame system yet.
        </p>
        
        <div className="hero-reveal flex flex-col sm:flex-row items-center gap-6">
          <button className="group relative px-12 py-5 bg-white text-black rounded-full text-xs font-bold uppercase transition-all hover:bg-[#1d1d1f] hover:text-white hover:scale-105 active:scale-95 flex items-center gap-3">
             Discover the Alpha Reference 
             <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
          </button>
          
          <button className="group px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-xs font-bold uppercase backdrop-blur-xl transition-all hover:bg-white/10 hover:border-white/20 flex items-center gap-3">
             <Play size={14} fill="white" className="group-hover:scale-110 transition-transform" />
             Watch Product Film
          </button>
        </div>
      </div>
    </section>
  );
}
