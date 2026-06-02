
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    name: "Custom Software Development",
    desc: "High-performance custom software tailored to your business workflows and future growth.",
    img: "/Images/custom-2.jpg",
  },
  {
    name: "AI Solutions",
    desc: "Smart AI automation, chatbots, analytics, and intelligent digital transformation.",
    img: "/Images/AI_solution.jpg",
  },
  {
    name: "Website Development",
    desc: "Modern, responsive, SEO-friendly websites with premium user experience.",
    img: "/Images/web App-1.jpg",
  },
  {
    name: "Web App Development",
    desc: "Secure and scalable web apps with dashboards, cloud support, and smooth performance.",
    img: "/Images/web App.jpg",
  },
  {
    name: "ERP Solutions",
    desc: "Powerful ERP systems to manage HR, finance, inventory, and business operations.",
    img: "/Images/ERP.png",
  },
  {
    name: "Scalable Enterprise Solution",
    desc: "Future-ready enterprise platforms built for automation, security, and scalability.",
    img: "/Images/Scalable.jpg",
  },
];

function OurService() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black px-5 py-34 md:px-12 lg:px-40"
    >
      <div className="absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-orange-500/6 blur-[140px]" />
      <div className="absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-orange-500/6 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Futuristic Software Solutions for{" "}
            <span className="text-orange-400 drop-shadow-[0_0_18px_rgba(249,115,22,0.65)]">
              Modern Businesses
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg"
          >
            At Driksha Infotech Private Limited, we empower businesses with custom software,
            AI solutions, web and mobile applications, ERP, CRM, and intelligent automation, 
            creating scalable digital ecosystems for sustainable growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all duration-500 hover:border-orange-500/70 hover:shadow-[0_0_45px_rgba(255,115,0,0.22)] md:flex md:items-center md:gap-7"
            >
              <div className="absolute inset-x-8 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              <div className="absolute inset-x-8 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

              <div className="absolute inset-y-8 left-0 w-px scale-y-0 bg-gradient-to-b from-transparent via-orange-500 to-transparent transition-transform duration-500 group-hover:scale-y-100" />
              <div className="absolute inset-y-8 right-0 w-px scale-y-0 bg-gradient-to-b from-transparent via-orange-500 to-transparent transition-transform duration-500 group-hover:scale-y-100" />

              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-500/0 blur-3xl transition duration-700 group-hover:bg-orange-500/20" />

              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-orange-400/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.15,
                }}
                className="relative mx-auto h-52 w-52 shrink-0 overflow-hidden rounded-[28px] border border-white/10 bg-black p-2 transition duration-500 group-hover:border-orange-500/50 group-hover:shadow-[0_0_28px_rgba(255,115,0,0.2)] md:mx-0 md:h-56 md:w-56"
              >
                <img
                  src={service.img}
                  alt={service.name}
                  className="h-full w-full rounded-[22px] object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
              </motion.div>

              {/* <div className="relative z-10 mt-7 text-center md:mt-0 md:text-left"> */}
              <div className="relative z-10 mt-7 flex h-full flex-col text-center md:mt-0 md:text-left">
                <h3 className="text-2xl font-black text-white md:text-3xl">
                  {service.name}
                </h3>

                <p className="mt-4 text-base leading-7 text-gray-300">
                  {service.desc}
                </p>

                <button className="mt-7 rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition duration-300 group-hover:border-orange-500 group-hover:text-orange-400">
                  Explore Service →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurService;