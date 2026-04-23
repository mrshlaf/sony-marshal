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
    <section ref={containerRef} id="support" className="py-24 md:py-32 bg-white px-4 md:px-8 max-w-[1000px] mx-auto border-t border-gray-100">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
          Frequently asked questions.
        </h2>
        <p className="text-[#1d1d1f]/60 font-medium">Answers to common questions about the Sony ecosystem.</p>
      </div>

      <div className="flex flex-col gap-4">
        {FAQ_DATA.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="faq-item border border-gray-200 rounded-2xl overflow-hidden cursor-pointer bg-zinc-50/50 hover:bg-zinc-50 transition-colors"
              onClick={() => toggleAccordion(index)}
            >
              <div className="p-6 md:p-8 flex items-center justify-between">
                <h3 className="font-semibold text-lg md:text-xl text-[#1d1d1f] pr-8">{faq.question}</h3>
                <div className={cn("p-2 rounded-full border border-gray-200 bg-white transition-transform duration-500", isOpen ? "rotate-45" : "rotate-0")}>
                  <Plus size={20} className="text-[#1d1d1f]" />
                </div>
              </div>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-500 ease-in-out", 
                  isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-6 md:p-8 pt-0 text-[#1d1d1f]/70 leading-relaxed font-medium">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
