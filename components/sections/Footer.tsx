import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

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
    links: ["About Sony", "Careers", "Environment", "Corporate Social Responsibility", "News & Info"]
  }
];

export function Footer() {
  return (
    <footer className="w-full bg-[#f5f5f7] text-[#1d1d1f] border-t border-gray-200 py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-12">
          
          {/* Brand & Socials (takes up 4 cols on large screens) */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col gap-6">
            <h4 className="text-2xl font-bold tracking-tighter">SONY</h4>
            <p className="text-sm font-medium text-[#1d1d1f]/60 max-w-xs">
              The Lumina Project. Cultivating the next generation of creative technology and immersive experiences.
            </p>
            <div className="flex items-center gap-6 mt-2">
              <Link href="#" className="text-[#1d1d1f]/60 hover:text-black transition-colors" aria-label="Facebook">
                <Facebook size={20} strokeWidth={2} />
              </Link>
              <Link href="#" className="text-[#1d1d1f]/60 hover:text-black transition-colors" aria-label="Twitter">
                <Twitter size={20} strokeWidth={2} />
              </Link>
              <Link href="#" className="text-[#1d1d1f]/60 hover:text-black transition-colors" aria-label="Instagram">
                <Instagram size={20} strokeWidth={2} />
              </Link>
              <Link href="#" className="text-[#1d1d1f]/60 hover:text-black transition-colors" aria-label="YouTube">
                <Youtube size={20} strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* Nav Columns (takes up remaining space) */}
          <div className="md:col-span-4 lg:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {FOOTER_LINKS.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h5 className="text-sm font-semibold text-[#1d1d1f]">{col.title}</h5>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link href="#" className="text-sm font-medium text-[#1d1d1f]/60 hover:text-black hover:underline underline-offset-4 transition-all">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Divider & Bottom Legal */}
        <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-xs font-semibold text-[#1d1d1f]/50">
            &copy; {new Date().getFullYear()} UI 2026 / Sony Electronics Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-semibold text-[#1d1d1f]/60">
            <Link href="#" className="hover:text-black transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
            <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
              IEEE Guidelines
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
