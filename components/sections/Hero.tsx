"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial animation for the text
    gsap.fromTo(
      ".hero-text",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: "power3.out", delay: 0.2 }
    );

    // Initial scale for video
    gsap.fromTo(
      videoRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
    );

    // Scroll sequence
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(videoRef.current, {
      scale: 0.7,
      borderRadius: "32px",
      ease: "none",
    }).to(
      ".hero-info",
      {
        opacity: 0,
        y: -50,
        ease: "none",
      },
      0
    );
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center flex-col"
    >
      <video
        ref={videoRef}
        src="/videos/sony-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Overlay to ensure text readability if needed */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      <div className="relative z-20 flex flex-col items-center justify-center text-white h-full px-4 mt-20 hero-info pointer-events-none">
        <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-center mb-6">
          Beyond the Senses
        </h1>
        <p className="hero-text text-lg md:text-2xl font-light tracking-wide max-w-2xl text-center text-white/80">
          Experience the latest in imaging, gaming, and audio innovation.
        </p>
      </div>
    </section>
  );
}
