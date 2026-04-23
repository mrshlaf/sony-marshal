import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-white text-black border-t border-gray-100 py-12 md:py-20 mt-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          
          {/* Copyright & Core Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-semibold tracking-tight">The Lumina Project</h4>
            <p className="text-sm text-zinc-500 font-medium">
              &copy; {new Date().getFullYear()} UI 2026. Internship Project.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-6">
            <Link href="#" className="text-zinc-400 hover:text-black transition-colors" aria-label="Facebook">
              <Facebook size={20} strokeWidth={1.5} />
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-black transition-colors" aria-label="Twitter">
              <Twitter size={20} strokeWidth={1.5} />
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-black transition-colors" aria-label="Instagram">
              <Instagram size={20} strokeWidth={1.5} />
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-black transition-colors" aria-label="YouTube">
              <Youtube size={20} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        {/* IEEE Reference & Divider */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-400">
            Designed for professional standards.
          </p>
          <a
            href="https://www.ieee.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-400 hover:text-black transition-colors underline underline-offset-4"
          >
            IEEE References & Guidelines
          </a>
        </div>
      </div>
    </footer>
  );
}
