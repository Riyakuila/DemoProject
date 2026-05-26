import React from "react";
import { motion } from "framer-motion";


const services = [
  {
    name: "Custom Software Development",
    desc: "High-performance custom software tailored to your business workflows and future growth.",
   
  },
  {
    name: "AI Solutions",
    desc: "Smart AI automation, chatbots, analytics, and intelligent digital transformation.",
    
  },
  {
    name: "Website Development",
    desc: "Modern, responsive, SEO-friendly websites with premium user experience.",
   
  },
  {
    name: "Web App Development",
    desc: "Secure and scalable web apps with dashboards, cloud support, and smooth performance.",
    
  },
  {
    name: "ERP Solutions",
    desc: "Powerful ERP systems to manage HR, finance, inventory, and business operations.",
   
  },
  {
    name: "Scalable Enterprise Solution",
    desc: "Future-ready enterprise platforms built for automation, security, and scalability.",
   
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#ffffff] px-5 py-24 md:px-12 lg:px-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,#ffb35c45,transparent_30%),radial-gradient(circle_at_88%_35%,#ffffff,transparent_34%)]" />
      <div className="absolute -left-28 top-28 h-80 w-80 rounded-full bg-orange-150/30 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-orange-100/250 blur-3xl" />

        

      <div className="relative z-10 mx-auto max-w-8xl">
        <div className="mx-auto mb-18 max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-5 inline-block rounded-full border border-orange-200 bg-white/90 px-8 py-4 text-sm font-bold text-orange-900 shadow-sm backdrop-blur"
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl font-black leading-tight text-[#170b05] md:text-5xl lg:text-6xl"
          >
            Futuristic Software Solutions for{" "}
            <span className="bg-gradient-to-r from-[#ff7300] to-[#2b1207] bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="mx-auto mt-7 max-w-3xl text-base font-medium leading-8 text-[#7e340f] md:text-lg"
          >
            We build premium digital products, AI-powered systems, scalable
            websites, mobile apps, ERP, CRM, and automation solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.65, delay: idx * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, rotateX: 4, rotateY: -4 }}
              className="group relative overflow-hidden rounded-[34px] border border-white/70 bg-white/55 p-8 shadow-[0_24px_60px_rgba(112,62,20,0.13)] backdrop-blur-xl transition-all duration-500 hover:border-orange-300"
            >
              <div className="absolute -right-4 -top-18 h-40 w-40 rounded-full bg-orange-200/30 blur-2xl transition duration-700 group-hover:scale-150" />

              

              <h3 className="relative mb-4 text-2xl font-black text-[#241006]">
                {service.name}
              </h3>

              <p className="relative text-sm font-medium leading-7 text-[#6b4b3b]">
                {service.desc}
              </p>

              <div className="relative mt-8 flex items-center justify-between">
                <span className="font-bold text-orange-600">Explore</span>
                
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-400 to-orange-200 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;