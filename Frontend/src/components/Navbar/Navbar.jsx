import { motion } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl"
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 2xl:px-0">
        
        <div className="mx-auto flex h-16 max-w-400 items-center justify-between sm:h-18 lg:h-20">

          <div className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Driksha Infotech Logo"
              className="h-10 w-auto object-contain mix-blend-lighten transition duration-300 hover:scale-105 sm:h-9 md:h-10 lg:h-12 2xl:h-14"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center text-sm font-medium text-gray-300 xl:gap-6 2xl:gap-10 2xl:text-[15px]">

            <a href="#" className="transition duration-300 hover:text-orange-400">
              Home
            </a>

            <a href="#" className="transition duration-300 hover:text-orange-400">
              Services
            </a>

            <a href="#" className="transition duration-300 hover:text-orange-400">
              Solutions
            </a>

            <a href="#" className="transition duration-300 hover:text-orange-400">
              Portfolio
            </a>

            <a href="#" className="transition duration-300 hover:text-orange-400">
              Technologies
            </a>

            <a href="#" className="transition duration-300 hover:text-orange-400">
              About
            </a>

            <a href="#" className="transition duration-300 hover:text-orange-400">
              Careers
            </a>
            <a href="#" className="transition duration-300 hover:text-orange-400">
              Blogs
            </a>

            <a href="#" className="transition duration-300 hover:text-orange-400">
              Contact
            </a>

          </div>

          {/* Right Buttons */}
          <div className="hidden xl:flex items-center xl:gap-3 2xl:gap-4">

            <button className="rounded-xl border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-400 transition duration-300 hover:bg-orange-500/20 2xl:px-5 2xl:py-2.5">
              AI Assistant
            </button>

            <button className="rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-4 py-2 text-sm font-semibold text-black transition duration-300 hover:scale-105 2xl:px-6 2xl:py-2.5">
              Live Demo
            </button>
          </div>

          {/* Mobile / Tablet Menu */}
          <div className="flex cursor-pointer items-center text-white xl:hidden">
            <HiOutlineMenuAlt3 className="text-3xl sm:text-4xl" />
          </div>

        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;