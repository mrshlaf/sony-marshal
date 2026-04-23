"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Smartphone, Laptop, Cloud, Share2 } from "lucide-react";

export function Ecosystem() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".eco-item",
      { y: 15, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-20 md:py-48 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 lg:items-start">
          
          {/* Left: Huge Editorial Heading */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 mb-12 lg:mb-0">
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-400 mb-6">Integrated Intelligence</p>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-[#1d1d1f] mb-8 leading-[0.85]">
              Seamless <br /> <span className="text-zinc-300">Ecosystem</span> <br /> Control.
            </h2>
            <p className="text-lg md:text-xl text-zinc-500 font-medium max-w-sm leading-relaxed">
               Your Sony devices are just the beginning. Our cloud-integrated platform bridges the gap between capture and creation.
            </p>
          </div>

          {/* Right: Bespoke Feature Stack */}
          <div className="w-full lg:w-7/12 flex flex-col gap-20 md:gap-32">
            
            {/* Feature 1: The App Experience */}
            <div className="eco-item flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="w-full md:w-1/2 relative aspect-[4/5] rounded-[32px] md:rounded-[40px] bg-zinc-100 overflow-hidden shadow-2xl group">
                 <Image 
                    src="/images/sony3.jpg" 
                    alt="Creators App" 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                 <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-2">Platform 01</p>
                    <h4 className="text-2xl font-bold">Creators' App</h4>
                 </div>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-base text-zinc-500 leading-relaxed">
                  The central hub for your creative workflow. Instant transfer, remote operation, and advanced cloud storage integration directly from your smartphone.
                </p>
              </div>
            </div>

            {/* Feature 2: Pro Workflow */}
            <div className="eco-item flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
              <div className="w-full md:w-1/2 relative aspect-[4/5] rounded-[32px] md:rounded-[40px] bg-zinc-900 overflow-hidden shadow-2xl group">
                 <Image 
                    src="/images/sony4.jpg" 
                    alt="Imaging Edge" 
                    fill 
                    className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                 <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-2">Platform 02</p>
                    <h4 className="text-2xl font-bold">Imaging Edge Desktop</h4>
                 </div>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-base text-zinc-500 leading-relaxed md:text-right">
                   Professional grade post-production. Adjust settings and shoot remotely from your PC. Precise RAW processing for maximum color fidelity.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
