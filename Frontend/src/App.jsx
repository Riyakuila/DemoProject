//import Navbar from "./components/Navbar/Navbar";
// import Testimonials from "./components/Testimonials/Testimonials";
// import FAQ from "./components/FAQ/FAQ";
// import Team from "./components/Team/Team";
// import About from "./components/About/About";
// import Services from "./components/Services/Services";
// import Process from "./components/Process/Process";
// import Footer from "./components/Footer/Footer";

import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Services from "./component/Services";
import Project from "./component/Projects";
import Contact from "./component/Contact";
import TechStack from "./Component/TechStack";
import Process from "./Component/Process";
import Footer from "./Component/Footer";



function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <TechStack />
      <Process />
      <Project />
      <Contact />
      <Footer />
      {/* <Team/> */}

      {/* <About />
      <Services />
      <Process />
      <Footer /> */}
     
      {/* <Testimonials /> */}
      {/* <FAQ /> */}  
    </div>
  );
}

export default App;