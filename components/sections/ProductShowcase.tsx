"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

const SHOWCASE_ITEMS = [
  {
    title: "Gaming Reimagined",
    desc: "Experience lightning fast loading with an ultra-high speed SSD and deeper immersion with support for haptic feedback.",
    product: "PlayStation 5",
    image: "/images/sony-ps5.png",
  },
  {
    title: "Your World. Nothing Else.",
    desc: "Industry-leading noise cancellation with two processors controlling eight microphones. Pure audio perfection.",
    product: "WH-1000XM5",
    image: "/images/sony-wh1000xm5.png",
  },
  {
    title: "Life of the Party",
    desc: "Take the party anywhere with powerful, stadium-level sound and customizable LED lighting.",
    product: "SRS-XG300",
    image: "/images/sony-speaker-xg300.png",
  },
  {
    title: "The Best Just Got Smaller",
    desc: "Astonishing sound quality and the best noise cancelling performance on the market, in our smallest buds yet.",
    product: "WF-1000XM5",
    image: "/images/sony-wf1000xm5.png",
  },
];

export function ProductShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray<HTMLElement>(".showcase-text-block");

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) {
            setActiveIndex(index);
          }
        },
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-white relative">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row relative">
          {/* Left Side: Scrolling Text Blocks */}
          <div className="w-full md:w-1/2 py-[30vh]">
            {SHOWCASE_ITEMS.map((item, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "showcase-text-block h-[70vh] flex flex-col justify-center transition-opacity duration-500",
                  activeIndex === idx ? "opacity-100" : "opacity-30"
                )}
              >
                <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-4">
                  {item.product}
                </p>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#1d1d1f] leading-tight mb-6">
                  {item.title}
                </h2>
                <p className="text-lg md:text-xl text-[#1d1d1f]/70 max-w-md">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side: Sticky Image Showcase */}
          <div className="w-full md:w-1/2 h-[100vh] sticky top-0 flex items-center justify-center p-8 overflow-hidden hidden md:flex">
            {SHOWCASE_ITEMS.map((item, idx) => (
              <Image
                key={idx}
                src={item.image}
                alt={item.product}
                fill
                className={cn(
                  "object-contain p-16 transition-all duration-700 ease-in-out",
                  activeIndex === idx 
                    ? "opacity-100 translate-y-0 scale-100" 
                    : "opacity-0 translate-y-12 scale-95 pointer-events-none"
                )}
              />
            ))}
          </div>

          {/* Mobile Images (Rendered inline since sticky right panel is hidden on mobile) */}
          <div className="w-full md:hidden flex flex-col">
            {/* Kept minimal, maybe hide on mobile for now or inline it in text block */}
          </div>
        </div>
        
      </div>
    </section>
  );
}
