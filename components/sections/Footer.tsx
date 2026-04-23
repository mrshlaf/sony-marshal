"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const FOOTER_LINKS = [
  {
    title: "Products & Solutions",
    links: ["Cameras", "Lenses", "PlayStation", "Audio", "Displays", "Professional"]
  },
  {
    title: "Support",
    links: ["Product Support", "Repair & Warranty", "Manuals", "Contact Us"]
  },
  {
    title: "Company",
    links: ["About Sony", "Careers", "Environment", "CSR", "News & Info"]
  }
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      
      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message);
      }
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <footer className="w-full bg-[#f5f5f7] text-[#1d1d1f] border-t border-black/5 py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-20">
        
        {/* Top Section: Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-black/[0.03]">
          <div className="max-w-md">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-3">Stay in focus.</h3>
            <p className="text-[#1d1d1f]/60 font-medium">Join the Lumina newsletter for exclusive firmware updates, product launches, and community-only events.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="w-full lg:w-auto flex flex-col gap-3">
             <div className="relative flex items-center">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  disabled={status === "loading" || status === "success"}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full lg:w-[350px] h-[56px] rounded-full px-8 bg-zinc-50 border border-zinc-200 outline-none focus:border-black/20 focus:ring-4 focus:ring-black/5 transition-all text-sm font-medium" 
                  required
                />
                <button 
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="absolute right-2 w-[40px] h-[40px] bg-[#1d1d1f] text-white rounded-full flex items-center justify-center hover:bg-black transition-all disabled:opacity-50"
                >
                  {status === "loading" ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send size={18} />}
                </button>
             </div>
             {message && (
               <p className={cn(
                 "px-4 text-xs font-semibold flex items-center gap-2",
                 status === "success" ? "text-emerald-600" : "text-rose-600"
               )}>
                 {status === "success" && <CheckCircle2 size={14} />} {message}
               </p>
             )}
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-12">
          <div className="md:col-span-4 lg:col-span-5 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <h4 className="text-2xl font-bold tracking-tighter">SONY</h4>
              <span className="text-[10px] bg-black text-white px-2 py-0.5 rounded font-bold uppercase tracking-widest">Innovation</span>
            </div>
            <p className="text-sm font-medium text-[#1d1d1f]/60 max-w-sm leading-relaxed">
              We create products that fill the world with emotion through the power of creativity and technology. Part of the 2026 Sony Internship Case Study.
            </p>
            <div className="flex items-center gap-5">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="p-2 bg-white rounded-xl shadow-sm border border-black/5 hover:bg-[#1d1d1f] hover:text-white transition-all duration-300">
                  <Icon size={18} strokeWidth={2} />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-10">
            {FOOTER_LINKS.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <h5 className="text-[11px] font-bold text-[#1d1d1f]/40 uppercase tracking-[0.2em]">{col.title}</h5>
                <ul className="flex flex-col gap-4">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link href="#" className="group text-sm font-semibold text-[#1d1d1f]/70 hover:text-black flex items-center gap-1 transition-all">
                        {link} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-10 border-t border-black/[0.05] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-bold text-[#1d1d1f]/40 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} SONY ELECTRONICS INDONESIA / UI INTERN 2026
            </p>
            <p className="text-[10px] text-[#1d1d1f]/30">Compliance with IEEE Std 12207™-2017 Systems and software engineering.</p>
          </div>
          <div className="flex flex-wrap gap-8 text-[11px] font-bold text-[#1d1d1f]/50 uppercase tracking-widest">
            <Link href="#" className="hover:text-black transition-colors">Terms</Link>
            <Link href="#" className="hover:text-black transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-black transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
