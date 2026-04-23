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
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-[#1d1d1f] mb-8 leading-none">
              Connect <br /> Your World.
            </h2>
            <p className="text-xl text-[#1d1d1f]/60 font-medium mb-12 max-w-lg">
              Unlock the full potential of your Sony devices with our integrated software suite. Seamlessly transfer files, control remotely, and access personalized content.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Smartphone, title: "Creators' App", desc: "Transfer photos and control your Alpha from your phone." },
                { icon: Laptop, title: "Imaging Edge Desktop", desc: "Expert RAW editing and PC remote shooting." },
                { icon: Cloud, title: "Creators' Cloud", desc: "Storing, sharing, and collaborating made easy." },
                { icon: Share2, title: "Sony Music Center", desc: "Control your audio devices anywhere in the house." },
              ].map((item, idx) => (
                <div key={idx} className="eco-item flex flex-col p-6 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-black/10 transition-all group">
                  <item.icon size={24} className="text-[#1d1d1f] mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-[#1d1d1f] mb-2">{item.title}</h4>
                  <p className="text-sm text-[#1d1d1f]/50 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative bg-zinc-100 rounded-[60px] aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                 <div className="relative w-full h-full">
                    {/* Mockup using real imagery */}
                    <div className="absolute inset-0 bg-white rounded-[40px] shadow-2xl transform rotate-3 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-all duration-1000 p-8 overflow-hidden">
                       <div className="w-full h-2/3 rounded-2xl mb-6 relative overflow-hidden bg-zinc-100">
                          <Image 
                            src="/images/sony3.jpg" 
                            alt="Sony Ecosystem View" 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                          />
                          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
                       </div>
                       <div className="space-y-4 px-2">
                          <div className="h-6 w-3/4 bg-zinc-100 rounded-lg flex items-center px-4 overflow-hidden relative">
                             <div className="h-full bg-zinc-200 absolute left-0 top-0 transition-all duration-1000 w-[65%]" />
                             <span className="text-[10px] font-bold text-zinc-400 relative z-10 uppercase tracking-widest">Processing...</span>
                          </div>
                          <div className="h-4 w-1/2 bg-zinc-50 rounded-lg" />
                          <div className="h-10 w-full bg-black text-white rounded-full flex items-center justify-center text-xs font-bold uppercase tracking-widest">Connect Device</div>
                       </div>
                    </div>
                    
                    <div className="absolute top-1/4 -right-12 w-64 h-80 bg-[#1d1d1f] rounded-[40px] shadow-2xl transform -rotate-12 group-hover:-rotate-6 transition-all duration-1000 p-0 flex flex-col justify-end overflow-hidden">
                       <Image 
                          src="/images/sony4.jpg" 
                          alt="Sony Ecosystem" 
                          fill 
                          className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-110" 
                       />
                       <div className="relative z-10 p-6 flex flex-col items-start bg-gradient-to-t from-black via-transparent to-transparent">
                          <p className="text-white text-3xl font-bold tracking-tight mb-2">Alpha 7 IV</p>
                          <p className="text-white/40 text-sm font-medium">Syncing...</p>
                       </div>
                    </div>
                 </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}
