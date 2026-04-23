"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Send, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const FOOTER_LINKS = [
  {
    title: "Products",
    links: ["Cameras", "Lenses", "PlayStation", "Audio", "Displays"]
  },
  {
    title: "Support",
    links: ["Product Support", "Warranty", "Manuals", "Contact"]
  },
  {
    title: "Company",
    links: ["About Sony", "Careers", "Sustainability", "News"]
  }
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <footer className="w-full bg-[#0d0d0d] text-zinc-100 py-12 md:py-16 px-6 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 bg-white/5 p-8 md:p-10 rounded-[40px] border border-white/5 backdrop-blur-xl">
          <div className="max-w-md">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tighter mb-1 uppercase">Stay in focus.</h3>
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Updates and professional community events.</p>
          </div>
          <form onSubmit={handleSubmit} className="w-full lg:w-auto flex flex-col gap-3">
             <div className="relative flex items-center">
                <input 
                  type="email" 
                  placeholder="OFFICIAL EMAIL" 
                  value={email}
                  disabled={status === "loading" || status === "success"}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full lg:w-[300px] h-[48px] rounded-full px-6 bg-white/5 border border-white/10 outline-none focus:border-white/30 transition-all text-[10px] font-bold tracking-widest uppercase text-white" 
                  required
                />
                <button 
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="absolute right-1.5 w-[36px] h-[36px] bg-white text-black rounded-full flex items-center justify-center transition-all hover:scale-105"
                >
                  {status === "loading" ? <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> : <Send size={16} />}
                </button>
             </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-12">
          <div className="md:col-span-4 lg:col-span-5 flex flex-col gap-4">
            <h4 className="text-2xl font-bold tracking-tighter uppercase text-white">SONY</h4>
            <p className="text-[10px] font-bold text-zinc-600 max-w-sm leading-relaxed uppercase tracking-[0.2em]">
              Translating creativity into technology. 2026 Reference Implementation.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="w-9 h-9 flex items-center justify-center bg-white/5 rounded-full border border-white/5 hover:bg-white hover:text-black transition-all">
                  <Icon size={14} />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {FOOTER_LINKS.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h5 className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.4em]">{col.title}</h5>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link href="#" className="group text-[10px] font-bold text-zinc-500 hover:text-white flex items-center gap-1 transition-all uppercase tracking-widest">
                        {link} <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-[9px] font-bold text-zinc-700 uppercase tracking-[0.5em]">
            &copy; {new Date().getFullYear()} SONY INDONESIA
          </p>
          <div className="flex flex-wrap gap-6 text-[9px] font-bold text-zinc-700 uppercase tracking-[0.4em]">
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
