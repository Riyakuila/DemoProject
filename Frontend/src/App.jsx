import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Process from "./components/Process/Process";
// import Testimonials from "./components/Testimonials/Testimonials";
// import FAQ from "./components/FAQ/FAQ";
// import Team from "./components/Team/Team";


function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      {/* <Team/> */}
      
      {/* <Testimonials /> */}
      {/* <FAQ /> */}

    </div>
  );
}

export default App;