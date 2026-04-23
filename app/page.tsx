import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { Lifestyle } from "@/components/sections/Lifestyle";
import { Vision } from "@/components/sections/Vision";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <BentoGrid />
        <Lifestyle />
        <Vision />
        <ProductShowcase />
        <Ecosystem />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
