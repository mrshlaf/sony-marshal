"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Camera, Cpu, Eye, Video } from "lucide-react";

export function BentoGrid() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".bento-box",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-white px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-[#1d1d1f] mb-4">
            A new standard <br /> for imaging.
          </h2>
          <p className="text-lg text-[#1d1d1f]/60 font-medium">
            Alpha 7 IV pushes the boundaries of what a hybrid camera can do.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[320px]">
          
          {/* Box 1 - Span 2 cols */}
          <div className="bento-box md:col-span-2 bg-[#f5f5f7] border border-black/[0.03] rounded-[40px] p-8 md:p-12 flex flex-col justify-between hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 group-hover:scale-[1.7] transition-transform duration-700">
               <Camera size={120} />
            </div>
            <Camera size={32} className="text-[#1d1d1f] mb-4 relative z-10" />
            <div className="relative z-10">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1d1d1f]/40 mb-3">Next-Gen Sensor</p>
              <h3 className="text-3xl md:text-5xl font-semibold tracking-tighter text-[#1d1d1f] leading-[0.9]">
                33.0 Megapixel <br /> <span className="text-[#1d1d1f]/30">Exmor R CMOS.</span>
              </h3>
            </div>
          </div>

          {/* Box 2 - Single */}
          <div className="bento-box bg-[#f5f5f7] border border-black/[0.03] rounded-[40px] p-8 md:p-12 flex flex-col justify-between hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 group">
            <Cpu size={32} className="text-[#1d1d1f] mb-4 group-hover:rotate-12 transition-transform duration-500" />
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1d1d1f]/40 mb-3">Processing</p>
              <h3 className="text-2xl md:text-4xl font-semibold tracking-tighter text-[#1d1d1f] leading-none mb-1">
                BIONZ XR™
              </h3>
              <p className="text-sm font-bold text-emerald-600">8x Faster Engine.</p>
            </div>
          </div>

          {/* Box 3 - Single */}
          <div className="bento-box bg-[#1d1d1f] rounded-[40px] p-8 md:p-12 flex flex-col justify-between hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 text-white group">
            <Eye size={32} className="text-white/40 mb-4 group-hover:scale-125 transition-transform" />
            <div>
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/40 mb-3">AI Autofocus</p>
              <h3 className="text-2xl md:text-4xl font-semibold tracking-tighter leading-none">
                Real-time <br /> Eye AF.
              </h3>
            </div>
          </div>

          {/* Box 4 - Span 2 cols */}
          <div className="bento-box md:col-span-2 bg-[#f5f5f7] border border-black/[0.03] rounded-[40px] p-8 md:p-12 flex flex-col justify-between hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-1/2 -right-20 -translate-y-1/2 opacity-[0.03] group-hover:-translate-x-10 transition-transform duration-1000">
               <Video size={300} />
            </div>
            <Video size={32} className="text-[#1d1d1f] mb-4 relative z-10" />
            <div className="max-w-md relative z-10">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1d1d1f]/40 mb-3">Professional Video</p>
              <h3 className="text-3xl md:text-5xl font-semibold tracking-tighter text-[#1d1d1f] leading-[0.9] mb-5">
                4K 60p 10-bit <br /> <span className="text-[#1d1d1f]/30">Production.</span>
              </h3>
              <p className="text-[#1d1d1f]/50 font-medium leading-relaxed">
                Unlock professional workflows with S-Cinetone™ and 10-bit 4:2:2 internal recording.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
