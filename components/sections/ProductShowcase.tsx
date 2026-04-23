"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, Zap, Target, Volume2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SHOWCASE_ITEMS = [
  {
    id: "cameras",
    title: "Alpha 7 IV",
    desc: "A new standard for imaging with 33MP Exmor R sensor.",
    image: "/images/sony-alpha-7.png",
    price: "$2,499.99",
    size: "md:col-span-2 md:row-span-2",
    bg: "bg-[#f5f5f7]",
    specs: [
      { icon: Target, label: "Sensor", value: "33.0 MP" },
      { icon: Zap, label: "Processor", value: "BIONZ XR™" },
      { icon: Volume2, label: "Video", value: "4K 60p" },
    ],
    details: "Setting the new baseline for full-frame cameras. The α7 IV does double duty with strong stills and video performance."
  },
  {
    id: "playstation",
    title: "PlayStation 5",
    desc: "Lightning fast loading and deeper immersion.",
    image: "/images/sony-ps5.png",
    price: "$499.99",
    size: "md:col-span-1 md:row-span-2",
    bg: "bg-[#0a0a0a]",
    text: "text-white",
    specs: [
      { icon: Zap, label: "SSD", value: "825GB" },
      { icon: Target, label: "Ray Tracing", value: "Supported" },
    ],
    details: "Experience lightning fast loading with an ultra-high speed SSD and support for haptic feedback."
  },
  {
    id: "audio",
    title: "WH-1000XM5",
    desc: "Industry-leading noise cancellation.",
    image: "/images/sony-wh1000xm5.png",
    price: "$399.99",
    size: "md:col-span-1 md:row-span-2",
    bg: "bg-[#e5e5e5]",
    specs: [
      { icon: Zap, label: "Battery", value: "30 Hours" },
      { icon: Volume2, label: "Audio", value: "Hi-Res" },
    ],
    details: "Two processors control 8 microphones for unprecedented noise cancellation and exceptional call quality."
  },
  {
    id: "audio-earbuds",
    title: "WF-1000XM5",
    desc: "The best noise cancelling, now smaller.",
    image: "/images/sony-wf1000xm5.png",
    price: "$299.99",
    size: "md:col-span-2 md:row-span-1",
    bg: "bg-white border border-black/5",
    specs: [
      { icon: Zap, label: "ANC", value: "V2 Processor" },
    ],
    details: "Cutting-edge technology to deliver premium sound quality and the best wireless noise cancelling."
  },
  {
    id: "entertainment",
    title: "SRS-XG300",
    desc: "Powerful Party Sound to go.",
    image: "/images/sony-speaker-xg300.png",
    price: "$349.99",
    size: "md:col-span-2 md:row-span-1",
    bg: "bg-[#111111]",
    text: "text-white",
    specs: [
      { icon: Zap, label: "Battery", value: "25 Hours" },
    ],
    details: "Take powerful stadium-level sound with you. Featuring a pop-up handle and ambient lighting."
  },
];

export function ProductShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<typeof SHOWCASE_ITEMS[0] | null>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(
      ".bento-item",
      { y: 20, opacity: 0 },
      { 
        y: 0, opacity: 1, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "power2.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 75%" }
      }
    );
  }, { scope: containerRef });

  const closeModal = () => {
    const tl = gsap.timeline({ onComplete: () => setActiveItem(null) });
    tl.to(".modal-content-box", { y: 30, opacity: 0, duration: 0.3, ease: "power2.in" })
      .to(modalRef.current, { opacity: 0, duration: 0.3 }, "-=0.2");
  };

  return (
    <section ref={containerRef} className="w-full py-16 md:py-24 bg-white px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-8 md:mb-16">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#1d1d1f]/40 mb-4">The Selection</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-[#1d1d1f]">
            Premium <br /> <span className="text-[#1d1d1f]/30 italic font-serif">Product Line.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[280px]">
          {SHOWCASE_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveItem(item)}
              className={cn(
                "bento-item group cursor-pointer rounded-[40px] overflow-hidden relative p-8 transition-all duration-500 hover:shadow-2xl",
                item.size, item.bg, item.text || "text-[#1d1d1f]"
              )}
            >
              <div className="relative z-30 h-full flex flex-col justify-between">
                <div className="max-w-[180px] sm:max-w-[220px]">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 leading-none">{item.title}</h3>
                  <p className="text-[11px] font-semibold opacity-50 leading-tight">{item.desc}</p>
                </div>
                
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-black/5 w-fit px-4 py-2 rounded-full backdrop-blur-md group-hover:bg-[#1d1d1f] group-hover:text-white transition-all shadow-sm">
                  Details <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Background Product Image - Safe & Proportional Positioning */}
              <div className={cn(
                "absolute inset-0 z-10 flex items-center justify-center p-6 sm:p-10",
                item.size.includes("row-span-2") ? "items-end pb-12" : "items-center"
              )}>
                <div className={cn(
                  "relative w-full h-full transform transition-all duration-1000 group-hover:scale-105",
                  item.id === "cameras" ? "scale-110 translate-y-4 translate-x-4 h-[120%]" : 
                  item.id === "playstation" ? "scale-90 translate-y-2" :
                  item.id === "audio" ? "scale-95 translate-y-6" : 
                  item.id === "audio-earbuds" ? "scale-75 translate-y-4" :
                  "scale-90 translate-y-4"
                )}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 pointer-events-none"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Subtle overlay to ensure text contrast for dark cards */}
              {item.text === "text-white" && (
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent z-20 pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      {activeItem && (
        <div ref={modalRef} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-xl">
          <div className="absolute inset-0" onClick={closeModal}></div>
          <div className="modal-content-box relative w-full max-w-4xl bg-white rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
            
            <button onClick={closeModal} className="absolute top-6 right-6 z-20 w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-[#1d1d1f] hover:bg-zinc-200">
              <X size={20} />
            </button>

            <div className={cn("w-full md:w-1/2 p-12 flex items-center justify-center relative", activeItem.bg)}>
              <div className="relative w-full aspect-square">
                <Image src={activeItem.image} alt={activeItem.title} fill className="object-contain drop-shadow-2xl" />
              </div>
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#1d1d1f] mb-4">{activeItem.title}</h3>
              <p className="text-[#1d1d1f]/60 leading-relaxed mb-8 font-medium">{activeItem.details}</p>

              <div className="grid grid-cols-1 gap-3 mb-8">
                {activeItem.specs.map((spec, i) => {
                  const Icon = spec.icon;
                  return (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#1d1d1f]"><Icon size={18} /></div>
                      <div>
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{spec.label}</p>
                        <p className="text-md font-bold text-[#1d1d1f]">{spec.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-zinc-100 mt-auto">
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">MSRP</p>
                  <p className="text-2xl font-bold tracking-tight text-[#1d1d1f]">{activeItem.price}</p>
                </div>
                <button className="bg-[#1d1d1f] text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-black transition-all">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
