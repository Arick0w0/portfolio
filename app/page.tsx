import Hero from "@/components/Hero";
import BackgroundRippleEffectDemo from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className='min-h-screen bg-black antialiased'>
      <Hero />
      <BackgroundRippleEffectDemo />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
