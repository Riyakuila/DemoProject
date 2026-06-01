import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import AboutUs from "./Component/AboutUs";
import Footer from "./Component/Footer";
import OurService from "./Component/OurService";
import Solutions from "./Component/Solutions";
import Portfolio from "./Component/Portfolio";
import Blog from "./Component/Blog";
import Careers from "./Component/Careers";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#050505] min-h-screen text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/ourservice" element={<OurService />} />
          <Route path="/technologies" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;