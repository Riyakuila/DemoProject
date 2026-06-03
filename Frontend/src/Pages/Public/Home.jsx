import Hero from "../../Component/Sections/Hero";
import About from "../../Component/Sections/About";
import Services from "../../Component/Sections/Services";
import TechStack from "../../Component/Sections/TechStack";
import Projects from "../../Component/Sections/Projects";
import Process from "../../Component/Sections/Process";
import Testimonial from "../../Component/Sections/Testimonial";
import Contact from "../../Component/Sections/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <Process />
      <Testimonial />
      <Contact />
    </>
  );
}

export default Home;