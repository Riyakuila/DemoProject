
// import React from "react";
// import { motion } from "framer-motion";

// const services = [
//   {
//     name: "Custom Software Development",
//     desc: "High-performance custom software tailored to your business workflows and future growth.",
//     img: "/Images/custom-2.jpg",
//   },
//   {
//     name: "AI Solutions",
//     desc: "Smart AI automation, chatbots, analytics, and intelligent digital transformation.",
//     img: "/Images/AI_solution.jpg",
//   },
//   {
//     name: "Website Development",
//     desc: "Modern, responsive, SEO-friendly websites with premium user experience.",
//     img: "/Images/web App-1.jpg",
//   },
//   {
//     name: "Web App Development",
//     desc: "Secure and scalable web apps with dashboards, cloud support, and smooth performance.",
//     img: "/Images/web App.jpg",
//   },
//   {
//     name: "ERP Solutions",
//     desc: "Powerful ERP systems to manage HR, finance, inventory, and business operations.",
//     img: "/Images/ERP.png",
//   },
//   {
//     name: "Scalable Enterprise Solution",
//     desc: "Future-ready enterprise platforms built for automation, security, and scalability.",
//     img: "/Images/Scalable.jpg",
//   },
// ];

// function Services() {
//   return (
//     <section
//       id="services"
//       className="relative overflow-hidden bg-gradient-to-br from-[#ffffff] via-[#fff5ed] to-[#fff0e6] px-5 py-18 md:px-12 lg:px-20"
//     >
//       <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-orange-100/20 blur-3xl" />
//       <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-amber-100/20 blur-3xl" />

//       <div className="relative z-10 mx-auto max-w-7xl">
//         <div className="mx-auto mb-20 max-w-6xl text-center">
//           <motion.span
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-block rounded-full border border-orange-100 bg-white/80 px-5 py-3 text-sm font-bold uppercase tracking-wide text-orange-700 shadow-sm"
//           >
//             OUR SERVICES
//           </motion.span>

//           <motion.h2
//             initial={{ opacity: 0, y: 28 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="mt-6 text-4xl font-black leading-tight text-[#1f0f06] md:text-5xl lg:text-6xl"
//           >
//             Futuristic Software Solutions for{" "}
//             <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-[#3b1a0c] bg-clip-text text-transparent">
//               Modern Businesses
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-stone-600 md:text-lg"
//           >
//             We build premium digital products, AI-powered systems, scalable
//             websites, mobile apps, ERP, CRM, and automation solutions.
//           </motion.p>

//           <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-orange-400 to-amber-400" />
//         </div>

//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 45 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.55, delay: idx * 0.08 }}
//               whileHover={{ y: -10 }}
//               className="group relative overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-lg transition-all duration-500 hover:border-orange-200 hover:shadow-2xl"
//             >
//               <div className="h-64 overflow-hidden bg-orange-50">
//                 <img
//                   src={service.img}
//                   alt={service.name}
//                   className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
//                 />
//               </div>

//               <div className="p-6">
//                 <h3 className="mb-3 text-2xl font-black leading-tight text-[#1f0f06] group-hover:text-orange-700">
//                   {service.name}
//                 </h3>

//                 <p className="text-sm font-medium leading-7 text-stone-600">
//                   {service.desc}
//                 </p>

//                 <div className="mt-6 flex items-center gap-2 text-sm font-bold text-orange-600">
//                   Explore Service
                  
//                 </div>
//               </div>

//               <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-500 group-hover:w-full" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;
















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

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#fafafa] px-5 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-8xl">
        <div className="mb-15 text-center">
          <span className="rounded-full bg-orange-40 px-5 py-2 text-lg font-bold text-orange-600">
            OUR SERVICES
          </span>

          <h2 className="mt-8 text-4xl font-black text-[#220707] md:text-5xl">
            Futuristic Software Solutions for{" "}
            <span className="text-orange-500">Modern Businesses</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-stone-700">
            We build premium digital products, AI-powered systems, scalable
            websites, mobile apps, ERP, CRM, and automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-[40rem] bg-white p-7 shadow-xl transition-all duration-500 hover:bg-black/80 hover:shadow-2xl md:flex md:items-center md:gap-10"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.2,
                }}
                className="absolute inset-0 rounded-[2rem] border border-orange-200/1 transition-all duration-500 group-hover:border-orange-100/1 group-hover:shadow-[0_0_45px_rgba(249,115,22,0.25)]"
              />

              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-orange-200/30 blur-3xl transition-all duration-700 group-hover:bg-orange-500/30" />

              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

              <div className="relative mx-auto flex h-56 w-56 shrink-0 items-center justify-center md:h-64 md:w-64">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-1 rounded-full border border-dashed border-orange-800 transition-colors duration-500 group-hover:border-orange-500"
                />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <div className="absolute left-1/2 top-1 h-4 w-4 -translate-x-1/2 rounded-full bg-white shadow-md transition-colors duration-500 group-hover:bg-orange-400" />
                </motion.div>

                <div className="h-full w-full overflow-hidden rounded-full border-[5px] border-orange-200 bg-orange-100 p-4 transition-all duration-500 group-hover:border-orange-300 group-hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="h-full w-full rounded-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="relative z-10 mt-8 flex-1 text-center md:mt-0 md:text-left">
                <h3 className="text-3xl font-black text-[#1f1f1f] transition-colors duration-500 group-hover:text-white">
                  {service.name}
                </h3>

                <p className="mt-5 text-lg font-medium leading-8 text-stone-600 transition-colors duration-500 group-hover:text-white/80">
                  {service.desc}
                </p>

                <button className="mt-7 rounded-full bg-orange-600 px-6 py-3 text-sm font-bold text-white transition duration-300 group-hover:bg-white group-hover:text-orange-600">
                  Explore Service
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;