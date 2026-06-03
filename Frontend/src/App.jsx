import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./Component/Layouts/Navbar";
import Footer from "./Component/Layouts/Footer";

import Home from "./Pages/Public/Home";
import AboutUs from "./Pages/Public/AboutUs";
import OurService from "./Pages/Public/OurService";
import Solutions from "./Pages/Public/Solutions";
import Portfolio from "./Pages/Public/Portfolio";
import Blog from "./Pages/Public/Blog";
import Careers from "./Pages/Public/Careers";
import ContactSection from "./Component/Sections/Contact";

import DashboardLayout from "./Dashboard/Layout/DashboardLayout";
import Dashboard from "./Dashboard/Pages/Dashboard";
import Users from "./Dashboard/Pages/Users";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout() {
  const location = useLocation();

  const isDashboard = location.pathname.startsWith("/dashboard");

  if (isDashboard) {
    return (
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    );
  }

  return (<div className="bg-[#050505] min-h-screen text-white">

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
      <Route path="/contact" element={<ContactSection />} />
      <Route path="/blogs" element={<Blog />} />
    </Routes>

    <Footer />
  </div>


  );
}

function App() {
  return (<BrowserRouter> <ScrollToTop /> <Layout /> </BrowserRouter>
  );
}

export default App;
