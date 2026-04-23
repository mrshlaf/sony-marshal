import { Navbar } from "@/components/sections/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Temporary tall section to test navbar scrolling glassmorphism */}
        <section className="h-screen flex items-center justify-center border-b border-gray-100">
          <h1 className="text-4xl font-semibold tracking-tight">Sony Intern Landing Page</h1>
        </section>
        <section className="h-[150vh] flex items-start justify-center pt-24 bg-zinc-50">
          <p className="text-lg text-zinc-500">Scroll down to test sticky navbar</p>
        </section>
      </main>
    </div>
  );
}
