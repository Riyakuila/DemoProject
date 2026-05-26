import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const headings = [
  "Building Intelligent Digital Solutions With AI",
  "Transforming Ideas Into Powerful Software",
  "Empowering Businesses Through Technology",
  "Creating Future Ready Digital Experiences",
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8debe] via-[#eae4dd] to-[#f8eadc] pt-20 text-[#24120b]">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-orange-200/30 blur-3xl"></div>

      <div className="mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative z-10">
          <div className="mb-10 flex min-h-[220px] items-center md:min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={headings[index]}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-6xl"
              >
                {headings[index].replace("With AI", "")}
                {headings[index].includes("AI") && (
                  <span className="text-orange-500"> With AI</span>
                )}
              </motion.h1>
            </AnimatePresence>
          </div>

          <div className="mb-6 h-1 w-30 rounded-full bg-orange-300"></div>

          <p className="mb-12 text-lg font-semibold text-orange-400 md:text-xl">
            by Driksha Infotech Private Limited
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="rounded-xl bg-gradient-to-r from-orange-800 to-orange-400 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-orange-400">
              Explore Solutions
            </button>

            <button className="flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-[#24120b] shadow-md transition duration-300 hover:-translate-y-1 hover:scale-105">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-300 bg-orange-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#f97316"
                >
                  <path d="M170-228q-38-44-61-98T80-440h82q6 44 22 83.5t42 72.5l-56 56ZM80-520q8-60 30-114t60-98l56 56q-26 33-42 72.5T162-520H80ZM438-82q-60-6-113.5-29T226-170l56-58q35 26 73.5 43t82.5 23v80ZM284-732l-58-58q45-36 98.5-59T440-878v80q-45 6-84 23t-72 43Zm96 432v-360l280 180-280 180ZM520-82v-80q121-17 200.5-107T800-480q0-121-79.5-211T520-798v-80q154 17 257 130t103 268q0 155-103 268T520-82Z" />
                </svg>
              </span>
              Watch Demo
            </button>
          </div>
        </div>

        <div className="relative hidden items-center justify-center lg:flex">
          <div className="absolute h-[520px] w-[520px] rounded-full bg-orange-300/20 blur-3xl"></div>

          <motion.div
            animate={{
              y: [0, -14, 0],
              rotateX: [0, 3, 0],
              rotateY: [0, -4, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-[460px] w-[500px] rounded-[36px] border border-white/60 bg-white/35 p-6 shadow-[0_30px_90px_rgba(120,60,10,0.25)] backdrop-blur-xl"
          >
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/70 via-orange-50/30 to-orange-200/20"></div>

            <div className="relative z-10 rounded-[28px] border border-white/70 bg-white/70 p-5 shadow-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  
                  <h3 className="mt-1 text-2xl font-black text-[#24120b]">
                    Smart Business Platform
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-300 text-xl font-black text-white shadow-lg">
                  DI
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {["AI", "Web", "ERP"].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-orange-50 p-4 text-center shadow-sm"
                  >
                    <p className="text-xl font-black text-orange-500">
                      {item}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-[#5b3b2d]">
                      Solutions
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <div className="h-3 w-full rounded-full bg-orange-100">
                  <div className="h-3 w-[85%] rounded-full bg-gradient-to-r from-orange-500 to-orange-300"></div>
                </div>

                <div className="h-3 w-full rounded-full bg-orange-100">
                  <div className="h-3 w-[65%] rounded-full bg-gradient-to-r from-orange-400 to-orange-200"></div>
                </div>

                <div className="h-3 w-full rounded-full bg-orange-100">
                  <div className="h-3 w-[75%] rounded-full bg-gradient-to-r from-orange-500 to-orange-300"></div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, 20, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -right-8 top-46 z-20 rounded-3xl border border-white/70 bg-white/80 px-6 py-5 shadow-2xl backdrop-blur-md"
            >
              <p className="text-3xl font-black text-orange-500">98%</p>
              <p className="text-xs font-bold text-[#4a2a1d]">Efficiency</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -left-8 bottom-20 z-20 rounded-3xl border border-white/70 bg-white/80 px-6 py-5 shadow-2xl backdrop-blur-md"
            >
              <p className="text-sm font-bold text-[#4a2a1d]">Automation</p>
              
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;