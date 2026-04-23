"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial fade in for text
    gsap.fromTo(
      ".hero-anim",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.1 }
    );

    // Subtle video scale-down on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(videoWrapperRef.current, {
      scale: 0.85,
      borderRadius: "48px",
      ease: "none",
    }).to(
      ".hero-content",
      {
        opacity: 0,
        y: -50,
        ease: "none",
      },
      0
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-between">
      
      {/* Video Background */}
      <div 
        ref={videoWrapperRef} 
        className="absolute inset-0 w-full h-full origin-bottom will-change-transform overflow-hidden"
      >
        <video
          src="/videos/sony-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-[1.05]"
        />
        {/* Vignette/Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white text-center px-4 pt-16">
        <div className="hero-content flex flex-col items-center">
          <p className="hero-anim text-sm md:text-base font-semibold tracking-[0.2em] text-white/80 uppercase mb-4">
            Alpha 7 IV
          </p>
          <h1 className="hero-anim text-5xl md:text-7xl lg:text-[110px] leading-none font-bold tracking-tighter mb-6">
            Beyond the Senses.
          </h1>
          <p className="hero-anim text-lg md:text-2xl font-normal text-white/90 max-w-2xl mb-10">
            The ultimate hybrid full-frame camera. <br className="hidden md:block" /> Experience true imaging supremacy.
          </p>
          
          <div className="hero-anim flex items-center gap-6">
            <button className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
              Buy
            </button>
            <button className="text-white text-sm font-medium hover:underline underline-offset-4 flex items-center gap-2">
              Learn more <span className="text-[10px]">▶</span>
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
}
