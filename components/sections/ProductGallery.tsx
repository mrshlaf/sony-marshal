"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PRODUCTS = [
  {
    name: "Alpha 7 IV",
    category: "Full-frame Camera",
    image: "/images/sony-alpha-7.png",
  },
  {
    name: "PlayStation 5",
    category: "Gaming Console",
    image: "/images/sony-ps5.png",
  },
  {
    name: "WH-1000XM5",
    category: "Noise Cancelling Headphones",
    image: "/images/sony-wh1000xm5.png",
  },
  {
    name: "SRS-XG300",
    category: "Portable Wireless Speaker",
    image: "/images/sony-speaker-xg300.png",
  },
  {
    name: "WF-1000XM5",
    category: "Wireless Earbuds",
    image: "/images/sony-wf1000xm5.png",
  },
];

export function ProductGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    if (!track) return;

    // Calculate how far to scroll the track
    // If there are 5 items, we want to scroll sideways for 4 of them
    // so track.scrollWidth - window.innerWidth
    const calculateDistance = () => track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: () => -calculateDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${calculateDistance()}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true, // Recalculate on resize
      },
    });
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen bg-gray-50 flex items-center overflow-hidden"
    >
      <div 
        ref={trackRef} 
        className="flex h-full items-center will-change-transform"
      >
        {PRODUCTS.map((product, idx) => (
          <div 
            key={idx} 
            className="w-screen h-full flex flex-col items-center justify-center shrink-0 px-8 md:px-24"
          >
            <div className="relative w-full max-w-2xl h-[50vh] md:h-[60vh] flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
                priority={idx < 2} // Preload the first few
              />
            </div>
            <div className="mt-12 text-center">
              <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-2">
                {product.category}
              </p>
              <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-black">
                {product.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
