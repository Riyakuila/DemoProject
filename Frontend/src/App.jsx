import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import OurProcess from "./components/OurProcess/OurProcess";
import Process from "./components/Process/Process";


function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <OurProcess />
    </div>
  );
}

export default App;