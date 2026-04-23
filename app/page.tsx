import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <BentoGrid />
        <ProductShowcase />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
