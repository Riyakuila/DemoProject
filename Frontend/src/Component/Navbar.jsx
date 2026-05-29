
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "services" },
    { name: "Technologies", path: "technologies" },
    { name: "Projects", path: "projects" },
    { name: "Contact Us", path: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-[#ff8c321a] bg-black/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-[92px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-48 object-contain lg:w-64"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-12 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="group relative"
            >
              <span
                className={`text-[17px] font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-[#ff8c32]"
                    : "text-white group-hover:text-[#ff8c32]"
                }`}
              >
                {item.name}
              </span>

              <span
                className={`absolute -bottom-3 left-0 h-[2px] rounded-full bg-[#ff8c32] transition-all duration-300 ${
                  location.pathname === item.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Phone Button */}
        <div className="hidden lg:flex">
          <button className="flex items-center gap-3 rounded-xl border border-[#ff8c32] px-6 py-3 text-white transition-all duration-300 hover:bg-[#ff8c32]/10 hover:shadow-[0_0_20px_rgba(255,140,50,0.25)]">
            <FiPhone className="text-xl text-[#ff8c32]" />
            <span className="font-medium">+91 620 382 1917</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-white lg:hidden"
        >
          <HiOutlineMenuAlt3 />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: menuOpen ? 1 : 0,
          y: menuOpen ? 0 : -20,
        }}
        className={`overflow-hidden border-t border-[#ff8c321a] bg-[#080808] lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`transition ${
                location.pathname === item.path
                  ? "text-[#ff8c32]"
                  : "text-white hover:text-[#ff8c32]"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <button className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-[#ff8c32] px-5 py-3 text-white">
            <FiPhone className="text-[#ff8c32]" />
            +91 620 382 1917
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;