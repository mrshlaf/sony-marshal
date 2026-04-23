import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { ProductGallery } from "@/components/sections/ProductGallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <ProductGallery />
        {/* Temporary space to test the final transition out of the gallery */}
        <section className="h-[80vh] flex items-center justify-center bg-white border-t border-gray-100">
          <p className="text-xl font-light text-zinc-500">Tech Specs section goes here.</p>
        </section>
      </main>
    </div>
  );
}
