import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        {/* Temporary space to test scrolling past the marquee */}
        <section className="h-[80vh] flex items-start justify-center pt-32 bg-white text-black">
          <p className="text-2xl font-light tracking-tight">Gallery section will be here.</p>
        </section>
      </main>
    </div>
  );
}
