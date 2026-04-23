"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  "Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "Entertainment", "Accessories"
]; // Let's adapt this to Sony
const SONY_LINKS = [
  "PlayStation", "Cameras", "Audio", "Displays", "Mobile", "Entertainment", "Support"
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b border-transparent",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_0_rgba(0,0,0,0.05)]"
          : "bg-white/0"
      )}
    >
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 h-[44px] sm:h-[48px] flex items-center justify-between">
        
        {/* Mobile Menu Icon */}
        <button className="md:hidden p-2 text-[#1d1d1f] hover:text-black">
          <Menu size={18} strokeWidth={1.5} />
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 transition-opacity hover:opacity-70">
          <Image
            src="/images/sony-logo.png"
            alt="Sony Logo"
            width={72}
            height={16}
            className="object-contain"
            priority
          />
        </Link>
        
        {/* Desktop Links (Apple-style spacing and font sizing) */}
        <nav className="hidden md:flex items-center justify-center flex-1 mx-8 gap-6 lg:gap-8">
          {SONY_LINKS.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[12px] text-[#1d1d1f]/80 font-medium tracking-wide hover:text-black transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 sm:gap-6 text-[#1d1d1f] flex-shrink-0">
          <button className="hover:text-black transition-colors">
            <Search size={16} strokeWidth={2} />
          </button>
          <button className="hover:text-black transition-colors">
            <ShoppingBag size={16} strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  );
}
