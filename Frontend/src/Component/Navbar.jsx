import { motion } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About Us", "Services", "Technologies", "Projects", "Contact Us"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-[#ff8c321a]"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[92px] flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-48 lg:w-64 object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <div
              key={item}
              onMouseEnter={() => setActive(item)}
              className="relative cursor-pointer group"
            >
              <span
                className={`text-[17px] font-medium transition-all duration-300 ${
                  active === item
                    ? "text-[#ff8c32]"
                    : "text-white group-hover:text-[#ff8c32]"
                }`}
              >
                {item}
              </span>

              <span
                className={`absolute left-0 -bottom-3 h-[2px] bg-[#ff8c32] rounded-full transition-all duration-300 ${
                  active === item ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Phone Button */}
        <div className="hidden lg:flex items-center">
          <button className="flex items-center gap-3 border border-[#ff8c32] text-white px-6 py-3 rounded-xl hover:bg-[#ff8c32]/10 hover:shadow-[0_0_20px_rgba(255,140,50,0.25)] transition-all duration-300">
            <FiPhone className="text-[#ff8c32] text-xl" />
            <span className="font-medium">+91 620 382 1917</span>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-3xl"
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
        className={`lg:hidden bg-[#080808] border-t border-[#ff8c321a] overflow-hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col px-6 py-5 gap-5">
          {navItems.map((item) => (
            <span
              key={item}
              className="text-white hover:text-[#ff8c32] transition cursor-pointer"
            >
              {item}
            </span>
          ))}

          <button className="mt-3 flex items-center justify-center gap-2 border border-[#ff8c32] text-white px-5 py-3 rounded-xl">
            <FiPhone className="text-[#ff8c32]" />
            +91 620 382 1917
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;