"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Camera, Cpu, Eye, Video, Plus } from "lucide-react";

const BENTO_DATA = [
  {
    title: "33.0 Megapixel",
    subtitle: "EXMOR R™ CMOS SENSOR",
    desc: "Unprecedented detail and dynamic range in a full-frame sensor designed for hybrid creators.",
    icon: Camera,
    size: "md:col-span-2",
    color: "bg-zinc-100",
    textColor: "text-zinc-900"
  },
  {
    title: "BIONZ XR™",
    subtitle: "PROCESSING ENGINE",
    desc: "8x more processing power for rapid data handling and reduced rolling shutter.",
    icon: Cpu,
    size: "md:col-span-1",
    color: "bg-zinc-100",
    textColor: "text-zinc-900"
  },
  {
    title: "Real-time AF",
    subtitle: "DETECTION INTELLIGENCE",
    desc: "AI-driven tracking for eyes and animals with industry-leading speed.",
    icon: Eye,
    size: "md:col-span-1",
    color: "bg-[#0d0d0d]",
    textColor: "text-zinc-100"
  },
  {
    title: "4K 60P 10-BIT",
    subtitle: "PRODUCTION STANDARDS",
    desc: "Broadcast-quality internal recording with S-Cinetone color processing.",
    icon: Video,
    size: "md:col-span-2",
    color: "bg-zinc-100",
    textColor: "text-zinc-900"
  }
];

export function BentoGrid() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(".bento-box", { y: 20, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-12 md:py-12 bg-[#f5f5f7] px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-4">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-[#1d1d1f] leading-[0.8] uppercase">
            Technical <br /> <span className="text-zinc-400">Excellence.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:auto-rows-[220px]">
          {BENTO_DATA.map((item, i) => {
             const Icon = item.icon;
             return (
               <div 
                 key={i} 
                 className={`bento-box ${item.size} ${item.color} ${item.textColor} border border-zinc-200 rounded-[24px] p-6 md:p-8 flex flex-col justify-center gap-3 hover:shadow-xl transition-all duration-500 overflow-hidden relative group cursor-pointer`}
               >
                 <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Plus size={18} className={item.textColor === "text-zinc-100" ? "text-white/20" : "text-black/10"} />
                 </div>

                 <div className="flex flex-col gap-0.5">
                   <Icon size={20} className={`mb-1 transition-transform duration-700 group-hover:scale-110 ${item.textColor === "text-zinc-100" ? "text-white/40" : "text-black/20"}`} />
                   <p className={`text-[8px] font-bold tracking-[0.1em] uppercase ${item.textColor === "text-zinc-100" ? "text-white/40" : "text-zinc-500"}`}>
                     {item.subtitle}
                   </p>
                   <h3 className="text-xl md:text-2xl font-bold tracking-tighter leading-none mb-1">{item.title}</h3>
                   <p className={`text-[11px] md:text-xs font-medium leading-tight max-w-sm ${item.textColor === "text-zinc-100" ? "text-white/50" : "text-zinc-500"}`}>
                     {item.desc}
                   </p>
                 </div>
               </div>
             );
          })}
        </div>
      </div>
    </section>
  );
}
