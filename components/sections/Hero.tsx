"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial fade in for text
    gsap.fromTo(
      ".hero-anim",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.15, ease: "power4.out", delay: 0.1 }
    );

    // Deep Parallax & Fly-through effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });

    // Animate video to parallax out into the void
    tl.to(videoWrapperRef.current, {
      yPercent: 40, // push it down slightly
      opacity: 0,   // steep fade to black/white
      filter: "blur(10px)", // blur it out
      ease: "power1.inOut",
    }, 0);

    // Animate the text to fly past the camera (scale up heavily and fade)
    tl.to(
      textWrapperRef.current,
      {
        scale: 1.5,
        opacity: 0,
        y: -100,
        ease: "power2.in",
      },
      0
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-[100vh] lg:h-[120vh] bg-black overflow-hidden">
      
      {/* Cinematic Media Layer */}
      <div 
        ref={videoWrapperRef} 
        className="absolute inset-0 w-full h-full origin-center will-change-transform"
      >
        <video
          src="/videos/sony-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/20 to-transparent" />
      </div>

      {/* Floating Meta Details (Premium Tech Feel) */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
        <div className="hero-meta absolute top-1/3 left-12 flex flex-col gap-1">
          <span className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">Resolution</span>
          <span className="text-2xl font-bold text-white/60">33.0 MP</span>
        </div>
        <div className="hero-meta absolute bottom-1/4 right-12 flex flex-col items-end gap-1">
          <span className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">Engine</span>
          <span className="text-2xl font-bold text-white/60">BIONZ XR™</span>
        </div>
      </div>

      {/* Main Editorial Content */}
      <div 
        ref={textWrapperRef}
        className="relative z-30 w-full h-full flex flex-col justify-end p-8 md:p-16 lg:p-24 pb-20 md:pb-32"
      >
        <div className="max-w-[1200px] w-full mx-auto flex flex-col items-start">
          <p className="hero-anim text-[10px] md:text-[12px] font-bold tracking-[0.5em] text-zinc-500 uppercase mb-8">
            The Alpha Series / 2026 Edition
          </p>
          
          <h1 className="hero-anim text-6xl md:text-8xl lg:text-[140px] leading-[0.8] font-bold tracking-tighter mb-12 flex flex-col">
            <span className="text-white">Beyond the</span>
            <span className="text-zinc-700 italic font-serif">Senses.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-12">
            <p className="hero-anim text-lg md:text-2xl font-medium text-zinc-400 max-w-lg leading-relaxed">
              Experience the convergence of peak performance and creative freedom. The Alpha 7 IV defines a new era of hybrid storytelling.
            </p>
            
            <div className="hero-anim flex items-center gap-10">
              <button className="magnetic relative overflow-hidden group bg-white text-black px-12 py-5 rounded-full text-sm font-bold transition-all border border-white hover:bg-transparent hover:text-white">
                <span className="relative z-10 uppercase tracking-widest">Order Now</span>
              </button>
              <button className="magnetic flex items-center gap-3 text-white/60 hover:text-white transition-all text-xs font-bold uppercase tracking-[0.2em] group">
                Discover More
                <div className="w-10 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-white transition-all duration-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
