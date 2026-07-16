import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Footer from '../components/Footer'; // ضيفي السطر ده

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> 
    </main>
  );
}