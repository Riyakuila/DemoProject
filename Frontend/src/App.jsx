import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  );
}

export default App;