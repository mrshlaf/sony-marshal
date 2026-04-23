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
    answer: "Yes, Sony's E-mount system is one of the most versatile in the industry. While we highly recommend Sony G-Master lenses for optimal autofocus performance and resolution, hundreds of third-party lenses are fully compatible with Alpha 7 IV and other E-mount bodies."
  },
  {
    question: "Can I upgrade the PlayStation 5 internal storage?",
    answer: "Absolutely. The PlayStation 5 features an expansion slot for standard M.2 NVMe SSDs. We recommend using Gen4 SSDs with read speeds of 5500MB/s or faster, paired with a heatsink to ensure optimal gaming performance."
  },
  {
    question: "Does the WH-1000XM5 support multi-point connection?",
    answer: "Yes, the WH-1000XM5 supports multi-point Bluetooth connections, allowing you to pair with two devices at the same time. When a call comes in, your headphones know which device is ringing and connects to the right one automatically."
  },
  {
    question: "Are Sony SRS-XG300 speakers waterproof?",
    answer: "The SRS-XG300 boasts an IP67 rating, meaning it is thoroughly water-resistant, dustproof, and rustproof. You can safely take it to the beach or use it by the pool without worry."
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
    <section ref={containerRef} id="support" className="py-16 md:py-48 bg-white px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        <div className="w-full lg:w-4/12">
           <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-400 mb-8">Support Center</p>
           <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#1d1d1f] mb-6">
             Common <br /> Queries.
           </h2>
           <p className="text-zinc-500 font-medium">Expert answers for your seamless Sony experience.</p>
        </div>

        <div className="w-full lg:w-8/12 flex flex-col">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="faq-item border-b border-zinc-100 cursor-pointer group"
                onClick={() => toggleAccordion(index)}
              >
                <div className="py-10 flex items-center justify-between">
                  <h3 className="font-bold text-xl md:text-2xl text-[#1d1d1f] pr-8 group-hover:text-zinc-400 transition-colors">{faq.question}</h3>
                  <div className={cn("p-2 rounded-full border border-zinc-100 bg-white transition-all duration-500", isOpen ? "rotate-45 bg-[#1d1d1f] text-white" : "rotate-0")}>
                    <Plus size={24} strokeWidth={1.5} />
                  </div>
                </div>
                
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]", 
                    isOpen ? "max-h-[500px] pb-10 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="text-lg text-zinc-500 leading-relaxed font-medium max-w-2xl">
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
