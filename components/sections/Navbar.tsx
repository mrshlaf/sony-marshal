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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
            ? "bg-white/90 backdrop-blur-3xl border border-black/5 shadow-xl"
            : "bg-black/20 backdrop-blur-md border border-white/10"
        )}
      >
        <Link href="/" className="flex items-center justify-center transition-opacity hover:opacity-70 h-full">
          <Image
            src="/images/sony-logo-long.png"
            alt="Sony"
            width={90}
            height={14}
            className={cn("object-contain transition-all duration-300", !isScrolled && "invert brightness-200")}
            priority
          />
        </Link>
        
        <nav className="hidden lg:flex items-center justify-center flex-1 mx-6 gap-6">
          {SONY_LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "text-[10px] font-bold tracking-widest transition-colors uppercase",
                isScrolled ? "text-[#1d1d1f]/70 hover:text-black" : "text-white/80 hover:text-white"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className={cn("flex items-center gap-2 transition-colors", isScrolled ? "text-[#1d1d1f]" : "text-white")}>
          <button className="hover:opacity-70 transition-opacity hidden sm:block p-2">
            <Search size={15} strokeWidth={3} />
          </button>
          <button className="hover:opacity-70 transition-opacity p-2">
            <ShoppingBag size={15} strokeWidth={3} />
          </button>
          <button 
            className="lg:hidden p-1 hover:opacity-70 transition-opacity"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div 
        className={cn(
          "fixed inset-0 z-[55] bg-white transition-all duration-500 flex flex-col pt-24 px-10",
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
                "text-3xl font-bold tracking-tighter text-[#1d1d1f] hover:pl-4 transition-all duration-300 uppercase",
                isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              )}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
