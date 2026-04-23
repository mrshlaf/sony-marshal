"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const SONY_LINKS = [
  "PlayStation", "Cameras", "Audio", "Displays", "Mobile", "Entertainment", "Support"
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "bg-white/60 backdrop-blur-2xl backdrop-saturate-150 border-b border-black/5" 
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 h-[44px] flex items-center justify-between">
        
        {/* Mobile Menu Icon */}
        <button className={cn("md:hidden p-2 transition-colors", isScrolled ? "text-[#1d1d1f]" : "text-white")}>
          <Menu size={18} strokeWidth={1.5} />
        </button>

        {/* Logo restricted strictly */}
        <Link href="/" className="flex items-center justify-center transition-opacity hover:opacity-70 h-full">
          <Image
            src="/images/sony-logo.png"
            alt="Sony"
            width={72}
            height={14}
            style={{ width: "auto", height: "14px" }}
            className={cn("object-contain transition-all duration-300", !isScrolled ? "invert brightness-0" : "")} /* White over Hero, Black on scroll */
            priority
          />
        </Link>
        
        {/* Desktop Links */}
        <nav className="hidden md:flex items-center justify-center flex-1 mx-8 gap-8">
          {SONY_LINKS.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "text-[12px] font-medium tracking-wide transition-colors",
                isScrolled ? "text-[#1d1d1f]/80 hover:text-black" : "text-white/80 hover:text-white"
              )}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className={cn("flex items-center gap-6 flex-shrink-0 transition-colors", isScrolled ? "text-[#1d1d1f]" : "text-white")}>
          <button className="hover:opacity-70 transition-opacity">
            <Search size={16} strokeWidth={2} />
          </button>
          <button className="hover:opacity-70 transition-opacity">
            <ShoppingBag size={16} strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  );
}
