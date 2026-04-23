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
    <section ref={containerRef} className="relative w-full h-screen bg-white overflow-hidden flex flex-col justify-between">
      
      {/* Video Background */}
      <div 
        ref={videoWrapperRef} 
        className="absolute inset-0 w-full h-full origin-center will-change-transform overflow-hidden"
      >
        <video
          src="/videos/sony-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-[1.02]"
        />
        {/* Subtle gradient so text pops. Changed from harsh black to a softer dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 mix-blend-multiply"></div>
      </div>

      {/* Content wrapper */}
      <div 
        ref={textWrapperRef}
        className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white text-center px-4 pt-16 will-change-transform"
      >
        <div className="flex flex-col items-center">
          <p className="hero-anim text-xs md:text-sm font-semibold tracking-[0.25em] text-white/90 uppercase mb-5">
            Introducing Alpha 7 IV
          </p>
          <h1 className="hero-anim text-6xl md:text-8xl lg:text-[120px] leading-none font-semibold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70">
            Beyond the Senses.
          </h1>
          <p className="hero-anim text-lg md:text-2xl font-medium text-white/80 max-w-2xl mb-12">
            The ultimate hybrid full-frame camera. <br className="hidden md:block" /> Experience true imaging supremacy.
          </p>
          
          <div className="hero-anim flex items-center gap-6">
            <button className="bg-white text-black px-8 py-3 rounded-full text-[15px] font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              Buy
            </button>
            <button className="text-white text-[15px] font-medium hover:text-white/80 transition-colors flex items-center gap-2 group">
              Learn more <span className="text-[11px] group-hover:translate-x-1 transition-transform">▶</span>
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
}
