import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { ProductGallery } from "@/components/sections/ProductGallery";
import { TechSpecs } from "@/components/sections/TechSpecs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <ProductGallery />
        <TechSpecs />
      </main>
    </div>
  );
}
