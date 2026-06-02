

// import { motion } from "framer-motion";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import logo from "../assets/logo3.png";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/aboutus" },
//     { name: "Solutions", path: "/solutions" },
//     { name: "Portfolio", path: "/portfolio" },
//     { name: "Blogs", path: "/blogs" },
//     { name: "Careers", path: "/careers" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const handleContactClick = () => {
//     setMenuOpen(false);
//     navigate("/");

//     setTimeout(() => {
//       document
//         .getElementById("contact")
//         ?.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//   };

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.7 }}
//       className="fixed left-0 top-0 z-50 w-full border-b border-[#ff8c321a] bg-black/90 backdrop-blur-md"
//     >
//       <div className="mx-auto flex h-[92px] max-w-[1430px] items-center justify-between px-4 md:px-6 xl:px-10">
//         {/* <Link to="/" className="flex flex-col items-start justify-center"> */}
      
//         <Link
//           to="/"
//           className="flex h-[94px] flex-col items-start justify-start pt-1"
//         >
//           <img
//             src={logo}
//             alt="Driksha Infotech"
//             className="h-24 w-auto object-contain -mt-4"
//           />



//               <div className="-mt-4 pl-6">
//                 <p className="text-[8px] uppercase tracking-[0.22em] text-white whitespace-nowrap">

//               <div className="-mt-1 pl-4">
//                 <p className="hidden sm:block text-[8px] uppercase tracking-[0.22em] text-white whitespace-nowrap">

//                   EMPOWERING YOUR
//                   <span className="ml-2 text-orange-300">
//                     DIGITAL TRANSFORMATION
//                   </span>
//                 </p>
//               </div>


//         </Link>

//         <div className="hidden items-center gap-10 xl:flex">
//           {navItems.map((item) =>
//             item.name === "Contact" ? (
//               <button
//                 key={item.name}
//                 onClick={handleContactClick}
//                 className="group relative"
//               >
//                 <span className="text-[17px] font-medium text-white transition-all duration-300 group-hover:text-[#ff8c32]">
//                   {item.name}
//                 </span>

//                 <span className="absolute -bottom-3 left-0 h-[2px] w-0 rounded-full bg-[#ff8c32] transition-all duration-300 group-hover:w-full" />
//               </button>
//             ) : (
//               <Link key={item.name} to={item.path} className="group relative">
//                 <span
//                   className={`text-[17px] font-medium transition-all duration-300 ${
//                     location.pathname === item.path
//                       ? "text-[#ff8c32]"
//                       : "text-white group-hover:text-[#ff8c32]"
//                   }`}
//                 >
//                   {item.name}
//                 </span>

//                 <span
//                   className={`absolute -bottom-3 left-0 h-[2px] rounded-full bg-[#ff8c32] transition-all duration-300 ${
//                     location.pathname === item.path
//                       ? "w-full"
//                       : "w-0 group-hover:w-full"
//                   }`}
//                 />
//               </Link>
//             )
//           )}
//         </div>

//         <div className="hidden items-center gap-3 xl:flex">
//           <button className="whitespace-nowrap rounded-xl border border-orange-300 px-4 py-2.5 text-sm font-semibold text-orange-500 transition hover:bg-orange-50">
//             AI Assistant
//           </button>

//           <button className="whitespace-nowrap rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:shadow-orange-300">
//             Live Demo
//           </button>
//         </div>

//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="text-3xl text-white xl:hidden"
//         >
//           <HiOutlineMenuAlt3 />
//         </button>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{
//           opacity: menuOpen ? 1 : 0,
//           y: menuOpen ? 0 : -20,
//         }}
//         className={`overflow-hidden border-t border-[#ff8c321a] bg-[#080808] xl:hidden ${
//           menuOpen ? "block" : "hidden"
//         }`}
//       >
//         <div className="flex flex-col gap-5 px-6 py-5">
//           {navItems.map((item) =>
//             item.name === "Contact" ? (
//               <button
//                 key={item.name}
//                 onClick={handleContactClick}
//                 className="text-left text-white transition hover:text-[#ff8c32]"
//               >
//                 {item.name}
//               </button>
//             ) : (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 onClick={() => setMenuOpen(false)}
//                 className={`transition ${
//                   location.pathname === item.path
//                     ? "text-[#ff8c32]"
//                     : "text-white hover:text-[#ff8c32]"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             )
//           )}

//           <button className="mt-3 rounded-xl border border-orange-300 px-5 py-3 text-sm font-semibold text-orange-500">
//             AI Assistant
//           </button>

//           <button className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-3 text-sm font-semibold text-white">
//             Live Demo
//           </button>
//         </div>
//       </motion.div>
//     </motion.nav>
//   );
// }

// export default Navbar;












import { motion } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo3.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Solutions", path: "/solutions" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blogs", path: "/blogs" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const handleContactClick = () => {
    setMenuOpen(false);
    navigate("/");

    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 top-0 z-50 w-full border-b border-[#ff8c321a] bg-black/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-[92px] max-w-[1430px] items-center justify-between px-4 md:px-6 xl:px-10">
        <Link
          to="/"
          className="flex h-[94px] flex-col items-start justify-start pt-1"
        >
          <img
            src={logo}
            alt="Driksha Infotech"
            className="h-24 w-auto object-contain -mt-3"
          />

          <div className="-mt-4 pl-4">
            <p className="hidden whitespace-nowrap text-[8px] uppercase tracking-[0.22em] text-white sm:block">
              EMPOWERING YOUR
              <span className="ml-2 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                DIGITAL TRANSFORMATION
              </span>
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 xl:flex">
          {navItems.map((item) =>
            item.name === "Contact" ? (
              <button
                key={item.name}
                onClick={handleContactClick}
                className="group relative"
              >
                <span className="text-[17px] font-medium text-white transition-all duration-300 group-hover:text-yellow-400">
                  {item.name}
                </span>

                <span className="absolute -bottom-3 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ) : (
              <Link key={item.name} to={item.path} className="group relative">
                <span
                  className={`text-[17px] font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? "bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"
                      : "text-white group-hover:text-yellow-400"
                  }`}
                >
                  {item.name}
                </span>

                <span
                  className={`absolute -bottom-3 left-0 h-[2px] rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 transition-all duration-300 ${
                    location.pathname === item.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            )
          )}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 xl:flex">
          <button className="whitespace-nowrap rounded-xl border border-yellow-400/60 px-4 py-2.5 text-sm font-semibold text-yellow-300 transition hover:bg-yellow-400/10">
            AI Assistant
          </button>

          <button className="whitespace-nowrap rounded-xl bg-gradient-to-r from-orange-400 to-yellow-400 px-4 py-2.5 text-sm font-semibold text-black shadow-md transition hover:shadow-yellow-300/40">
            Live Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-white xl:hidden"
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
        className={`overflow-hidden border-t border-[#ff8c321a] bg-[#080808] xl:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-5">
          {navItems.map((item) =>
            item.name === "Contact" ? (
              <button
                key={item.name}
                onClick={handleContactClick}
                className="text-left text-white transition hover:text-yellow-400"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`transition ${
                  location.pathname === item.path
                    ? "text-yellow-300"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.name}
              </Link>
            )
          )}

          <button className="mt-3 rounded-xl border border-yellow-400/60 px-5 py-3 text-sm font-semibold text-yellow-300">
            AI Assistant
          </button>

          <button className="rounded-xl bg-gradient-to-r from-orange-400 to-yellow-400 px-5 py-3 text-sm font-semibold text-black">
            Live Demo
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}

export default Navbar;