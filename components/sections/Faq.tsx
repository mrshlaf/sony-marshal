"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_DATA = [
  {
    question: "Do Sony Alpha cameras support third-party lenses?",
    answer: "Yes, the E-mount system is industry-standard and highly versatile. While we recommend Sony G-Master lenses for optimal resolution, hundreds of third-party lenses are fully compatible."
  },
  {
    question: "Can I upgrade the PlayStation 5 internal storage?",
    answer: "The PlayStation 5 features an expansion slot for PCIe Gen4 M.2 NVMe SSDs. We recommend using SSDs with read speeds of 5500MB/s or faster for peak gaming performance."
  },
  {
    question: "Does the WH-1000XM5 support multi-point connection?",
    answer: "Yes, the WH-1000XM5 supports simultaneous multi-point Bluetooth connections, allowing seamless switching between two devices."
  },
  {
    question: "Are Sony SRS-XG300 speakers waterproof?",
    answer: "The SRS-XG300 features an IP67 rating, ensuring it is water-resistant, dustproof, and rustproof for uncompromising durability."
  }
];

export function Faq() {
  const containerRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(
      ".faq-item",
      { y: 30, opacity: 0 },
      { 
        y: 0, opacity: 1, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: containerRef });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={containerRef} id="support" className="py-12 md:py-20 bg-[#0d0d0d] px-6 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-20">
        <div className="w-full lg:w-4/12">
           <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 uppercase">
             Common <br /> <span className="text-zinc-600">Queries.</span>
           </h2>
           <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Expert technical guidance reference.</p>
        </div>

        <div className="w-full lg:w-8/12 flex flex-col border-t border-white/10">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="faq-item border-b border-white/10 cursor-pointer group"
                onClick={() => toggleAccordion(index)}
              >
                <div className="py-8 flex items-center justify-between">
                  <h3 className="font-bold text-lg md:text-xl text-zinc-100 pr-8 group-hover:text-zinc-400 transition-colors uppercase tracking-tight">{faq.question}</h3>
                  <div className={cn("p-2 rounded-full border border-white/10 bg-transparent transition-all duration-500", isOpen ? "rotate-45 bg-white text-black" : "rotate-0 text-white")}>
                    <Plus size={20} strokeWidth={1.5} />
                  </div>
                </div>
                
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]", 
                    isOpen ? "max-h-[500px] pb-10 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="text-base text-zinc-400 leading-relaxed font-medium max-w-2xl uppercase tracking-tighter">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
