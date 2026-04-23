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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
          
          {/* Box 1 - Span 2 cols */}
          <div className="bento-box md:col-span-2 bg-[var(--bento-bg)] rounded-3xl p-8 md:p-12 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <Camera size={32} className="text-[#1d1d1f] mb-4" />
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-[#1d1d1f]/50 mb-2">Sensor</p>
              <h3 className="text-3xl md:text-5xl font-semibold tracking-tighter text-[#1d1d1f] leading-tight">
                33.0 Megapixel <br /> Exmor R CMOS.
              </h3>
            </div>
          </div>

          {/* Box 2 - Single */}
          <div className="bento-box bg-[var(--bento-bg)] rounded-3xl p-8 md:p-12 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <Cpu size={32} className="text-[#1d1d1f] mb-4" />
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-[#1d1d1f]/50 mb-2">Processing</p>
              <h3 className="text-2xl md:text-4xl font-semibold tracking-tighter text-[#1d1d1f] leading-tight">
                BIONZ XR™ <br /> 8x Faster.
              </h3>
            </div>
          </div>

          {/* Box 3 - Single */}
          <div className="bento-box bg-[var(--bento-bg)] rounded-3xl p-8 md:p-12 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <Eye size={32} className="text-[#1d1d1f] mb-4" />
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-[#1d1d1f]/50 mb-2">Autofocus</p>
              <h3 className="text-2xl md:text-4xl font-semibold tracking-tighter text-[#1d1d1f] leading-tight">
                Advanced <br /> Real-time Eye AF.
              </h3>
            </div>
          </div>

          {/* Box 4 - Span 2 cols */}
          <div className="bento-box md:col-span-2 bg-[var(--bento-bg)] rounded-3xl p-8 md:p-12 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <Video size={32} className="text-[#1d1d1f] mb-4" />
            <div className="max-w-md">
              <p className="text-sm font-semibold tracking-widest uppercase text-[#1d1d1f]/50 mb-2">Video</p>
              <h3 className="text-3xl md:text-5xl font-semibold tracking-tighter text-[#1d1d1f] leading-tight mb-4">
                4K 60p 10-bit <br /> 4:2:2 Recording.
              </h3>
              <p className="text-[#1d1d1f]/70 font-medium">
                Uncompromising video quality for professional filmmaking.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
