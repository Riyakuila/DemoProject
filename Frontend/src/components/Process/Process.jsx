


import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Consultation",
    desc: "We understand your business goals, ideas, and exact requirements.",
  },
  {
    title: "Planning",
    desc: "We create a clean roadmap with features, timeline, and structure.",
  },
  {
    title: "Development",
    desc: "We build secure, scalable, and modern digital solutions.",
  },
  {
    title: "Delivery & Support",
    desc: "We launch smoothly and provide continuous technical support.",
  },
];

const loopSteps = [...steps, ...steps];

function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#f8f4f0] px-5 py-20 md:px-12 lg:px-20"
    >
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-orange-100/30 blur-2xl" />
      <div className="absolute right-[-120px] bottom-10 h-72 w-72 rounded-full bg-amber-100/40 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-3xl font-black uppercase tracking-[0.3em] text-orange-700">
            Our Process
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-[#24120a] md:text-6xl">
            From Idea To Launch,{" "}
            <span className="text-orange-500">Step By Step</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-stone-600 md:text-lg">
            We keep every stage clear, creative, and focused so your digital
            product feels smooth from planning to final delivery.
          </p>
        </div>

        <div className="relative mt-16 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#fff8f0] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#fff8f0] to-transparent" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="flex w-max gap-6 py-6"
          >
            {loopSteps.map((step, index) => (
              <motion.div
                key={`${step.title}-${index}`}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group w-[280px] shrink-0 rounded-[2rem] border border-orange-100 bg-white/70 p-6 shadow-[0_20px_60px_rgba(120,55,0,0.08)] backdrop-blur-xl transition-all duration-500 hover:border-orange-300 hover:bg-white"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-50 text-sm font-black text-orange-400 group-hover:bg-orange-100 group-hover:text-black">
                    0{(index % steps.length) + 1}
                  </span>

                  <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-500">
                    Step
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-black text-[#24120a]">
                  {step.title}
                </h3>

                <p className="mt-6 text-sm leading-6 text-stone-800">
                  {step.desc}
                </p>

                <div className="mt-6 h-1 w-18 rounded-full bg-orange-200 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Process;