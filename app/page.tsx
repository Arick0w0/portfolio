import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SnowfallEffect from "@/components/SnowfallEffect";

export default function Home() {
  return (
    <main className='min-h-screen bg-black antialiased'>
      {/* <SnowfallEffect /> */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
