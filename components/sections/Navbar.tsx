"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const SONY_LINKS = [
  { name: "PlayStation", href: "#playstation" },
  { name: "Cameras", href: "#cameras" },
  { name: "Audio", href: "#audio" },
  { name: "Displays", href: "#displays" },
  { name: "Mobile", href: "#mobile" },
  { name: "Support", href: "#support" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (targetId.startsWith("#")) {
      e.preventDefault();
      setIsMenuOpen(false);
      const section = document.querySelector(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", targetId);
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-[60] transition-all duration-700 ease-in-out",
          "w-[95%] max-w-[800px] rounded-full px-6 flex items-center justify-between h-[52px]",
          isScrolled
            ? "bg-white/70 backdrop-blur-3xl border border-black/5 shadow-xl py-2"
            : "bg-black/10 backdrop-blur-md border border-white/10 py-3"
        )}
      >
        {/* Logo */}
        <Link href="/" className="magnetic flex items-center justify-center transition-opacity hover:opacity-70 h-full">
          <Image
            src="/images/sony-logo-long.png"
            alt="Sony"
            width={100}
            height={16}
            className={cn("object-contain transition-all duration-300", !isScrolled && "invert brightness-200")}
            priority
          />
        </Link>
        
        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center justify-center flex-1 mx-6 gap-6">
          {SONY_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "text-[12px] font-semibold tracking-wide transition-colors uppercase",
                isScrolled ? "text-[#1d1d1f]/70 hover:text-black" : "text-white/80 hover:text-white"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className={cn("flex items-center gap-4 transition-colors", isScrolled ? "text-[#1d1d1f]" : "text-white")}>
          <button className="magnetic hover:opacity-70 transition-opacity hidden sm:block">
            <Search size={18} strokeWidth={2} />
          </button>
          <button className="magnetic hover:opacity-70 transition-opacity">
            <ShoppingBag size={18} strokeWidth={2} />
          </button>
          <button 
            className="magnetic lg:hidden p-1 hover:opacity-70 transition-opacity"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-[55] bg-white transition-all duration-500 flex flex-col pt-24 px-8",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-6">
          {SONY_LINKS.map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "text-3xl font-bold tracking-tighter text-[#1d1d1f] hover:pl-4 transition-all duration-300",
                isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              )}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <div className="mt-auto pb-12 flex flex-col gap-8">
          <div className="h-[1px] bg-gray-100 w-full" />
          <div className="flex gap-6 text-zinc-400">
             <Search size={24} />
             <ShoppingBag size={24} />
          </div>
          <p className="text-zinc-400 text-sm font-medium">
            Project Lumina — Sony Indonesia 2026
          </p>
        </div>
      </div>
    </>
  );
}
