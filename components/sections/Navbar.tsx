"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Products", href: "#products" },
  { name: "Innovation", href: "#innovation" },
  { name: "About", href: "#about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm border-black/5"
          : "bg-transparent py-2"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="relative z-10 flex items-center">
          <Image
            src="/images/sony-logo.png"
            alt="Sony Logo"
            width={120}
            height={24}
            className="object-contain"
            priority
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium tracking-wide text-black hover:opacity-70 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button could go here if needed, keeping it simple for now */}
        <div className="md:hidden">
          {/* Simple hamburger placeholder */}
          <div className="w-6 h-5 flex flex-col justify-between cursor-pointer">
            <span className="w-full h-[2px] bg-black"></span>
            <span className="w-full h-[2px] bg-black"></span>
            <span className="w-full h-[2px] bg-black"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
