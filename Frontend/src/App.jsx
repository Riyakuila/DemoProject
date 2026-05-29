import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import AboutUs from "./Component/AboutUs";
import OurService from "./Component/OurService";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#050505] min-h-screen text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />

          <Route path="/ourservice" element={<OurService />} />
          <Route path="/technologies" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/contact" element={<Home />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;