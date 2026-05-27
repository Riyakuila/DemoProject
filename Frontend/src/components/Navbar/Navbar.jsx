import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "Services",
    "Solutions",
    "Portfolio",
    "Technologies",
    "About",
    "Careers",
    "Blogs",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className="flex w-full items-center justify-between bg-black/90 px-4 py-3 shadow-lg backdrop-blur-md sm:px-6 xl:px-10">
        <img
          src={logo}
          alt="Driksha Infotech"
          className="h-10 w-auto object-contain saturate-150 sm:h-11 xl:h-14"
        />

        <div className="hidden items-center gap-5 text-sm font-semibold text-[#f0e5e0] xl:flex 2xl:gap-8 2xl:text-base">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="whitespace-nowrap transition duration-300 hover:scale-105 hover:text-orange-500"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <button className="whitespace-nowrap rounded-xl border border-orange-300 px-4 py-2.5 text-sm font-semibold text-orange-500 transition hover:bg-orange-50">
            AI Assistant
          </button>

          <button className="whitespace-nowrap rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:shadow-orange-300">
            Live Demo
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-400 xl:hidden"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
              <path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.25 }}
            className="bg-black/95 px-5 pb-6 pt-4 shadow-lg backdrop-blur-md xl:hidden"
          >
            <div className="flex flex-col gap-3 text-base font-semibold text-[#f0e5e0]">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 transition hover:bg-orange-500/10 hover:text-orange-500"
                >
                  {item}
                </a>
              ))}

              <button className="mt-3 rounded-xl border border-orange-300 px-5 py-3 text-sm font-semibold text-orange-500">
                AI Assistant
              </button>

              <button className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-3 text-sm font-semibold text-white">
                Live Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;