"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power3.out"
      });
    };

    const onMouseEnter = () => {
      gsap.to([cursor, follower], { opacity: 1, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to([cursor, follower], { opacity: 0, duration: 0.3 });
    };

    // Magnetic interaction
    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach((el) => {
      el.addEventListener('mousemove', (e: any) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = el.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        
        gsap.to(el, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.4,
          ease: "power2.out"
        });
        
        gsap.to(follower, {
          scale: 3,
          backgroundColor: "rgba(255,255,255,0.1)",
          mixBlendMode: "difference",
          duration: 0.3
        });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
        gsap.to(follower, {
          scale: 1,
          backgroundColor: "transparent",
          mixBlendMode: "normal",
          duration: 0.3
        });
      });
    });

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full z-[9999] pointer-events-none mix-blend-difference opacity-0 -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-white/20 rounded-full z-[9998] pointer-events-none opacity-0 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
      />
    </>
  );
}
