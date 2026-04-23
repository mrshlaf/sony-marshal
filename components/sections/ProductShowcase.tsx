"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, ChevronRight, Zap, Target, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

const SHOWCASE_ITEMS = [
  {
    id: "cameras",
    title: "A new standard for imaging.",
    desc: "The latest highly acclaimed Alpha 7 IV pushes the boundaries of what a full-frame hybrid camera can achieve in any lighting condition.",
    product: "Alpha 7 IV",
    image: "/images/sony-alpha-7.png",
    bg: "bg-[#e5e5e5]",
    text: "text-[#1d1d1f]",
    price: "$2,499.99",
    specs: [
      { icon: Target, label: "Sensor", value: "33.0 MP" },
      { icon: Zap, label: "Processor", value: "BIONZ XR™" },
      { icon: Volume2, label: "Video", value: "4K 60p" },
    ],
    details: "Setting the new baseline for full-frame cameras. The α7 IV does double duty with strong stills and video performance. Featuring a newly developed 33-megapixel Exmor R CMOS sensor and the BIONZ XR processing engine from our flagship models."
  },
  {
    id: "playstation",
    title: "Gaming Reimagined.",
    desc: "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with haptic feedback, adaptive triggers, and 3D Audio.",
    product: "PlayStation 5",
    image: "/images/sony-ps5.png",
    bg: "bg-[#0a0a0a]",
    text: "text-white",
    price: "$499.99",
    specs: [
      { icon: Zap, label: "Ultra-High Speed SSD", value: "825GB" },
      { icon: Target, label: "Ray Tracing", value: "Supported" },
      { icon: Volume2, label: "3D AudioTech", value: "Tempest Engine" },
    ],
    details: "The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games."
  },
  {
    id: "audio",
    title: "Pure Audio Perfection.",
    desc: "Industry-leading noise cancellation with two processors controlling eight microphones for unprecedented noise isolation.",
    product: "WH-1000XM5",
    image: "/images/sony-wh1000xm5.png",
    bg: "bg-[#f5f5f7]",
    text: "text-[#1d1d1f]",
    price: "$399.99",
    specs: [
      { icon: Zap, label: "Battery Life", value: "30 Hours" },
      { icon: Target, label: "Noise Cancelling", value: "Dual Processor" },
      { icon: Volume2, label: "Audio", value: "Hi-Res Wireless" },
    ],
    details: "Our WH-1000XM5 headphones rewrite the rules for distraction-free listening. Two processors control 8 microphones for unprecedented noise cancellation and exceptional call quality. With a newly developed driver, DSEE – Extreme and Hires audio support, these headphones provide awe-inspiring audio quality."
  },
  {
    id: "audio-earbuds",
    title: "The Best Just Got Smaller.",
    desc: "Astonishing sound quality and the best noise cancelling performance on the market, in our smallest, lightest earbuds yet.",
    product: "WF-1000XM5",
    image: "/images/sony-wf1000xm5.png",
    bg: "bg-[#1d1d1f]",
    text: "text-white",
    price: "$299.99",
    specs: [
      { icon: Zap, label: "Battery Life", value: "24 Hours w/ Case" },
      { icon: Target, label: "Noise Cancelling", value: "V2 Processor" },
      { icon: Volume2, label: "Audio", value: "Dynamic Driver X" },
    ],
    details: "The WF-1000XM5 features cutting-edge technology to deliver premium sound quality and the best truly wireless noise cancelling performance on the market. With a specially designed driver unit for wide frequency production, deep bass, and clear vocals."
  },
  {
    id: "entertainment",
    title: "Party without limits.",
    desc: "Take the party anywhere with powerful stadium-level sound, deep resonant bass, and customizable live LED lighting arrays.",
    product: "SRS-XG300",
    image: "/images/sony-speaker-xg300.png",
    bg: "bg-[#111111]",
    text: "text-white",
    price: "$349.99",
    specs: [
      { icon: Zap, label: "Battery Life", value: "25 Hours" },
      { icon: Target, label: "Durability", value: "IP67 Water/Dust" },
      { icon: Volume2, label: "Speaker Unit", value: "X-Balanced" },
    ],
    details: "You need a speaker that can deliver a big sound wherever you go. With the XG300, you'll take a Powerful Party Sound with you and with built-in lighting you can take a little atmosphere too. The pop-up handle makes it easy to carry when you want to bring it out with you and just pops down."
  },
];

export function ProductShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<typeof SHOWCASE_ITEMS[0] | null>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Main scrolling animation
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
          scrollTrigger: { trigger: panel, start: "top 70%" }
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
          scrollTrigger: { trigger: panel, start: "top 70%" }
        }
      );
    });
  }, { scope: containerRef });

  // Handle Modal Animation
  useGSAP(() => {
    if (activeItem) {
      document.body.style.overflow = 'hidden';
      
      const tl = gsap.timeline();
      tl.fromTo(modalRef.current, 
        { opacity: 0, backdropFilter: "blur(0px)" }, 
        { opacity: 1, backdropFilter: "blur(16px)", duration: 0.4, ease: "power2.out" }
      )
      .fromTo(".modal-content-box", 
        { y: 100, scale: 0.95, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.2"
      )
      .fromTo(".modal-stagger", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
        "-=0.2"
      );
    } else {
      document.body.style.overflow = '';
    }
  }, [activeItem]);

  const closeModal = () => {
    const tl = gsap.timeline({
      onComplete: () => setActiveItem(null)
    });
    tl.to(".modal-content-box", { y: 50, scale: 0.95, opacity: 0, duration: 0.3, ease: "power2.in" })
      .to(modalRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" }, "-=0.2");
  };

  return (
    <section ref={containerRef} className="w-full flex flex-col pt-12 pb-24 bg-white gap-6 px-4 md:px-8 max-w-[1400px] mx-auto relative">
      <div className="mb-12 text-center md:text-left px-4">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f]">
          More from the Sony Ecosystem.
        </h2>
      </div>

      {SHOWCASE_ITEMS.map((item, idx) => (
        <div 
          key={idx} 
          onClick={() => setActiveItem(item)}
          className={cn(
            "showcase-panel group cursor-pointer rounded-[32px] overflow-hidden relative w-full min-h-[60vh] md:min-h-[70vh] flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-24 transition-transform duration-500 hover:scale-[0.98]",
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
              "showcase-text w-max px-8 py-3 rounded-full text-sm font-semibold transition-all group-hover:pl-6 group-hover:pr-10 relative overflow-hidden flex items-center gap-2", 
              item.bg === "bg-[#0a0a0a]" || item.bg === "bg-[#111111]" ? "bg-white text-black" : "bg-[#1d1d1f] text-white"
            )}>
              Explore deep <ChevronRight size={16} className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0" />
            </button>
          </div>

          {/* Image */}
          <div className="w-full md:w-7/12 h-[300px] md:h-[500px] relative z-10 flex items-center justify-center">
            <Image
              src={item.image}
              alt={item.product}
              fill
              className="showcase-img object-contain drop-shadow-2xl p-4 md:p-8 transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-w-768px) 100vw, 60vw"
            />
          </div>
          
          {(item.bg === "bg-[#0a0a0a]" || item.bg === "bg-[#111111]") && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 mix-blend-overlay z-0 pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
          )}
        </div>
      ))}

      {/* Interactive Modal */}
      {activeItem && (
        <div ref={modalRef} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/40">
          <div className="absolute inset-0" onClick={closeModal}></div>
          <div className="modal-content-box relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
            
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 z-20 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#1d1d1f] hover:bg-gray-200 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Modal Left Image */}
            <div className={cn("w-full md:w-1/2 p-12 flex items-center justify-center relative", activeItem.bg)}>
              <Image 
                src={activeItem.image} 
                alt={activeItem.product} 
                width={500} 
                height={500} 
                className="modal-stagger object-contain drop-shadow-2xl" 
              />
            </div>

            {/* Modal Right Content */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <p className="modal-stagger text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-2">
                {activeItem.product}
              </p>
              <h3 className="modal-stagger text-3xl md:text-5xl font-semibold tracking-tighter text-[#1d1d1f] mb-6">
                Technical Mastery.
              </h3>
              
              <p className="modal-stagger text-[#1d1d1f]/70 leading-relaxed mb-8">
                {activeItem.details}
              </p>

              <div className="flex flex-col gap-4 mb-8">
                {activeItem.specs.map((spec, i) => {
                  const Icon = spec.icon;
                  return (
                    <div key={i} className="modal-stagger flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors">
                      <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-[#1d1d1f]">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">{spec.label}</p>
                        <p className="text-lg font-semibold text-[#1d1d1f]">{spec.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="modal-stagger flex items-center justify-between pt-6 border-t border-zinc-100">
                <div>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1">Starting from</p>
                  <p className="text-2xl font-bold tracking-tight text-[#1d1d1f]">{activeItem.price}</p>
                </div>
                <button className="bg-[#1d1d1f] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-black hover:scale-105 transition-all">
                  Buy Now
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
