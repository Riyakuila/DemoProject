import React from "react";
import "./Navbar.css";
import logo from "../../assets/Drikshalogo.png";

const Navbar = () => {
  const scrollTo =(id) => {
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior: "smooth"});
    };
  return (
    <nav classname="navbar">
        <div className="logoBox" onClick={()=> scrollTo("home")}>
      
            <img src={logo} alt ="logo" className ="logo" />
        </div>
      <ul>

        <li onClick={() => scrollTo("home")}>Home</li>
        <li onClick={() => scrollTo("about")}>About Us</li>
        <li onClick={() => scrollTo("services")}>Services</li>
        <li onClick={() => scrollTo("solutions")}>Solutions</li>
        <li onClick={() => scrollTo("portfolio")}>Portfolio</li>
        <li onClick={() => scrollTo("livedemo")}>Live Demo</li>
        <li onClick={() => scrollTo("technologies")}>Technologies</li>

        <li onClick={() => scrollTo("careers")}>Careers</li>
        <li onClick={() => scrollTo("blogs")}>Blogs</li>
        <li onClick={() => scrollTo("contact")}>Contact</li>
        
      </ul>
    </nav>
  );
};

export default Navbar;