import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
 import About from "../components/About";
 import Projects from "../components/Projects";
import Contact from "../components/Contacts";
import Footer from "../components/Footer";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
       <About />
       <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}