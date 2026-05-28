import React from "react";
import { motion } from "framer-motion";
import {
  FaDesktop,
  FaCode,
  FaMobileAlt,
  FaVideo,
  FaShieldAlt,
  FaBullhorn,
  FaCloudUploadAlt,
  FaHeadset,
  FaRocket,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const services = [
  ["Website Design & Development", "Modern, responsive and user-friendly websites that represent your brand perfectly.", FaDesktop],
  ["Custom Software Development", "Tailor-made software solutions to streamline processes and boost business efficiency.", FaCode],
  ["Web & Mobile App Development", "High-performance web and mobile applications for a seamless digital experience.", FaMobileAlt],
  ["CCTV Surveillance Solutions", "Advanced CCTV systems for real-time monitoring and complete security.", FaVideo],
  ["Cyber Security", "Protect your business with advanced security solutions and risk management.", FaShieldAlt],
  ["Digital Marketing", "Grow your online presence and reach the right audience with result-driven strategies.", FaBullhorn],
  ["Cloud & DevOps Solutions", "Scalable cloud infrastructure and DevOps services for faster deployment.", FaCloudUploadAlt],
  ["Maintenance & Technical Support", "24/7 maintenance and technical support to keep your systems running smoothly.", FaHeadset],
];

function Services() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-5 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff6a0020,transparent_42%)]" />
      <div className="absolute left-0 top-0 h-full w-28 bg-[linear-gradient(115deg,transparent_35%,#ff6a00_36%,transparent_38%)] opacity-70" />
      <div className="absolute right-0 top-0 h-full w-28 bg-[linear-gradient(245deg,transparent_35%,#ff6a00_36%,transparent_38%)] opacity-70" />

      <div className="absolute left-8 top-10 h-28 w-28 bg-[radial-gradient(#ff6a00_1.3px,transparent_1.3px)] [background-size:12px_12px] opacity-60" />
      <div className="absolute right-8 top-10 h-28 w-28 bg-[radial-gradient(#ff6a00_1.3px,transparent_1.3px)] [background-size:12px_12px] opacity-60" />
      <div className="absolute bottom-16 left-8 h-28 w-28 bg-[radial-gradient(#ff6a00_1.3px,transparent_1.3px)] [background-size:12px_12px] opacity-50" />
      <div className="absolute bottom-16 right-8 h-28 w-28 bg-[radial-gradient(#ff6a00_1.3px,transparent_1.3px)] [background-size:12px_12px] opacity-50" />

      <button className="absolute left-8 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-orange-500 text-orange-500 shadow-[0_0_20px_rgba(255,106,0,0.4)] lg:flex">
        <FaChevronLeft />
      </button>

      <button className="absolute right-8 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-orange-500 text-orange-500 shadow-[0_0_20px_rgba(255,106,0,0.4)] lg:flex">
        <FaChevronRight />
      </button>

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-2 text-sm font-black uppercase tracking-[0.35em] text-orange-500">
            What We Do
          </p>

          <h2 className="text-5xl font-black italic tracking-tight md:text-7xl">
            OUR <span className="text-orange-500">SERVICES</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-300">
            We provide end-to-end digital solutions to help your business grow,
            innovate and stay ahead in the digital world.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, desc, Icon], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.35 }}
              viewport={{ once: true }}
              className="group relative min-h-[250px] overflow-hidden rounded-xl border border-orange-500/50 bg-[#090909] px-6 py-7 shadow-[0_0_28px_rgba(255,106,0,0.16)]"
            >
              <span className="absolute left-3 top-3 rounded bg-orange-500 px-2 py-1 text-xs font-black">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,#ff6a0028,transparent_62%)]" />

              <div className="relative mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-orange-500/70 bg-black shadow-[0_0_30px_rgba(255,106,0,0.65)]">
                <div className="absolute h-20 w-20 rounded-full border border-orange-400/30" />
                <Icon className="text-4xl text-orange-400 drop-shadow-[0_0_12px_rgba(255,106,0,0.9)]" />
              </div>

              <h3 className="relative text-center text-lg font-black leading-6">
                {title}
              </h3>

              <p className="relative mt-4 text-center text-xs leading-5 text-zinc-300">
                {desc}
              </p>

              <button className="relative mx-auto mt-5 flex items-center gap-2 text-xs font-bold text-orange-400">
                Learn More
                <FaArrowRight className="transition group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-2xl items-center justify-between rounded-xl border border-orange-500/70 bg-[#090909] px-5 py-3 shadow-[0_0_28px_rgba(255,106,0,0.28)]">
          <div className="flex items-center gap-3">
            <FaRocket className="text-orange-400" />
            <p className="text-xs text-zinc-200 sm:text-sm">
              Have a Project in Mind?{" "}
              <span className="font-bold text-orange-400">
                Let's Build Something Amazing Together!
              </span>
            </p>
          </div>

          <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white shadow-[0_0_18px_rgba(255,106,0,0.8)]">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;