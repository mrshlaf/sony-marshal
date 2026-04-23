import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        {/* Temporary space to test the Hero GSAP effect when scrolling past it */}
        <section className="h-[100vh] flex items-start justify-center pt-32 bg-white text-black">
          <p className="text-2xl font-light tracking-tight">The Lumina Experience continues below.</p>
        </section>
      </main>
    </div>
  );
}
