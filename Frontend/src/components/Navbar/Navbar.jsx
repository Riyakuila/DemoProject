import { motion } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import logo from "../../assets/logo1.png";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl"
    >
      <div className="w-full px-6 lg:px-12">
        
        <div className="flex h-20 items-center justify-between">

          <div className="flex items-center">
            <img
              src={logo}
              alt="Driksha Logo"
              className="h-8 sm:h-8 md:h-10 lg:h-14 w-auto object-contain hover:scale-105 transition duration-300"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-gray-300">

            <a
              href="#"
              className="hover:text-orange-400 transition duration-300"
            >
              Home
            </a>

            <a
              href="#"
              className="hover:text-orange-400 transition duration-300"
            >
              Services
            </a>

            <a
              href="#"
              className="hover:text-orange-400 transition duration-300"
            >
              Solutions
            </a>

            <a
              href="#"
              className="hover:text-orange-400 transition duration-300"
            >
              Portfolio
            </a>

            <a
              href="#"
              className="hover:text-orange-400 transition duration-300"
            >
              About
            </a>

            <a
              href="#"
              className="hover:text-orange-400 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Right Buttons */}
          <div className="hidden lg:flex items-center gap-4">

            <button
              className="
                border
                border-orange-500/30
                bg-orange-500/10
                text-orange-400
                px-5
                py-2
                rounded-xl
                hover:bg-orange-500/20
                transition
                duration-300
              "
            >
              AI Assistant
            </button>

            <button
              className="bg-linear-to-r from-orange-500 to-amber-400 text-black font-semibold px-5 py-2 rounded-xl hover:scale-105 transition duration-300"
            >
              Start Project
            </button>
          </div>

          <div className="lg:hidden text-white text-3xl cursor-pointer">
            <HiOutlineMenuAlt3 />
          </div>

        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;