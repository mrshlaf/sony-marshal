"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

const SHOWCASE_ITEMS = [
  {
    title: "Gaming Reimagined.",
    desc: "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with haptic feedback, adaptive triggers, and 3D Audio.",
    product: "PlayStation 5",
    image: "/images/sony-ps5.png",
    bg: "bg-[#0a0a0a]", // PS5 strict dark
    text: "text-white"
  },
  {
    title: "Pure Audio Perfection.",
    desc: "Industry-leading noise cancellation with two processors controlling eight microphones for unprecedented noise isolation and premium sound.",
    product: "WH-1000XM5",
    image: "/images/sony-wh1000xm5.png",
    bg: "bg-[#f5f5f7]", // Silver/White for headphones
    text: "text-[#1d1d1f]"
  },
  {
    title: "Party without limits.",
    desc: "Take the party anywhere with powerful stadium-level sound, deep resonant bass, and customizable live LED lighting arrays.",
    product: "SRS-XG300",
    image: "/images/sony-speaker-xg300.png",
    bg: "bg-[#111111]", // Dark
    text: "text-white"
  },
];

export function ProductShowcase() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate each showcase block's text and image
    gsap.utils.toArray<HTMLElement>(".showcase-panel").forEach((panel) => {
      const img = panel.querySelector(".showcase-img");
      const text = panel.querySelectorAll(".showcase-text");

      gsap.fromTo(
        img,
        { scale: 0.8, opacity: 0, y: 50 },
        { 
          scale: 1, opacity: 1, y: 0, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 60%",
          }
        }
      );

      gsap.fromTo(
        text,
        { opacity: 0, x: -30 },
        { 
          opacity: 1, x: 0, 
          duration: 1, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 60%",
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full flex flex-col pt-12 pb-24 bg-white gap-6 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="mb-12 text-center md:text-left px-4">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f]">
          More from the Sony Ecosystem.
        </h2>
      </div>

      {/* Block Layout instead of sticky to remove empty space and fix lag bugs */}
      {SHOWCASE_ITEMS.map((item, idx) => (
        <div 
          key={idx} 
          className={cn(
            "showcase-panel rounded-[32px] overflow-hidden relative w-full min-h-[60vh] md:min-h-[70vh] flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-24",
            item.bg, item.text
          )}
        >
          {/* Content */}
          <div className="w-full md:w-5/12 flex flex-col justify-center mt-12 md:mt-0 z-10 relative">
            <p className="showcase-text text-sm md:text-base font-semibold tracking-widest uppercase mb-4 opacity-70">
              {item.product}
            </p>
            <h3 className="showcase-text text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.1] mb-6">
              {item.title}
            </h3>
            <p className="showcase-text text-lg md:text-xl font-medium opacity-80 mb-8 max-w-md">
              {item.desc}
            </p>
            <button className={cn(
              "showcase-text w-max px-8 py-3 rounded-full text-sm font-semibold transition-transform hover:scale-105", 
              item.bg === "bg-[#0a0a0a]" || item.bg === "bg-[#111111]" ? "bg-white text-black" : "bg-[#1d1d1f] text-white"
            )}>
              Learn more
            </button>
          </div>

          {/* Image */}
          <div className="w-full md:w-7/12 h-[300px] md:h-[500px] relative z-10 flex items-center justify-center">
            <Image
              src={item.image}
              alt={item.product}
              fill
              className="showcase-img object-contain drop-shadow-2xl p-4 md:p-8"
              sizes="(max-w-768px) 100vw, 60vw"
            />
          </div>
          
          {/* Subtle bg glow for dark backgrounds */}
          {(item.bg === "bg-[#0a0a0a]" || item.bg === "bg-[#111111]") && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 mix-blend-overlay z-0 pointer-events-none"></div>
          )}
        </div>
      ))}
    </section>
  );
}
