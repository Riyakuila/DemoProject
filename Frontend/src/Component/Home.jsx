import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Process from "./Process";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <TechStack />
      <Projects />
      <Process />
      <Testimonial />
      <Contact />
    </>
  );
}

export default Home;