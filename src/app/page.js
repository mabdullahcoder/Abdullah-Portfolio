import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import WhyPartner from "@/components/sections/WhyPartner";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="bg-black">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <WhyPartner />
        <Experience />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
