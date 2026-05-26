
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const faqs = [
//   {
//     question: "What services does Driksha Infotech provide?",
//     answer:
//       "Driksha Infotech Private Limited offers a wide range of digital solutions, including custom software development, web application development, mobile app development, AI solutions, ERP systems, CRM development, e-commerce solutions, website redesign, and digital transformation services.",
//   },
//   {
//     question: "How can Driksha Infotech help my business?",
//     answer:
//       "We help businesses grow by building smart, scalable, and modern technology solutions according to their goals. Whether you want to improve your digital presence, automate business processes, or launch a powerful software platform, our team can support your complete digital journey.",
//   },
//   {
//     question: "Why should I choose Driksha Infotech?",
//     answer:
//       "Choosing Driksha Infotech means working with a skilled and dedicated team that focuses on quality, transparency, innovation, and long-term business value. We understand your requirements clearly and deliver reliable solutions designed for performance, scalability, and growth.",
//   },
//   {
//     question: "Do you offer website redesign services?",
//     answer:
//       "Yes, we provide professional website redesign services to give your existing website a modern, attractive, responsive, and brand-focused look. Our goal is to improve both user experience and overall visual impact.",
//   },
//   {
//     question: "What are your payment terms?",
//     answer:
//       "Our payment terms are flexible and can be customized based on the project size and requirements. Usually, payments are divided into stages such as project start, mid-development, and final delivery. We accept payment methods such as UPI, bank transfer, checks, and major digital payment options.",
//   },
// ];

// function FAQ() {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <section
//       id="faq"
//       className="relative overflow-hidden bg-[#000000] px-5 py-24 md:px-12 lg:px-20"
//     >
//       {/* Animated background elements */}
//       <div className="absolute -left-24 top-24 h-80 w-80 animate-pulse rounded-full bg-[#ff8a00]/20 blur-[110px]" />
//       <div className="absolute -right-20 bottom-10 h-72 w-72 animate-pulse rounded-full bg-[#ffb300]/15 blur-[100px] [animation-delay:2s]" />
//       <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff8a00]/5 blur-[130px]" />

//       <div className="relative z-10 mx-auto max-w-5xl">
//         {/* Header with enhanced animations */}
//         <div className="mx-auto mb-14 max-w-3xl text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="group relative inline-block"
//           >
//             <div className="absolute inset-0 rounded-full bg-[#ff8a00]/20 blur-md transition-all duration-500 group-hover:blur-xl" />
//             <span className="relative inline-block rounded-full border border-[#ff8a00]/40 bg-[#ff8a00]/10 px-7 py-3 text-sm font-semibold text-[#ffb300] shadow-[0_0_20px_rgba(255,138,0,0.2)] backdrop-blur-sm transition-all duration-500 group-hover:border-[#ffb300]/80 group-hover:shadow-[0_0_30px_rgba(255,138,0,0.4)]">
//               Frequently Asked Questions
//             </span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
//           >
//             Everything You Need To Know About{" "}
//             <span className="inline-block bg-gradient-to-r from-[#ff8a00] to-[#ffb300] bg-clip-text text-transparent">
//               Driksha Infotech
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 35 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg"
//           >
//             Find quick answers about our services, development process,
//             redesign solutions, business support, and payment structure.
//           </motion.p>
//         </div>

//         {/* FAQ Items with insane effects */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.08 }}
//               viewport={{ once: true, margin: "-50px" }}
//               className="relative"
//             >
//               {/* Glowing background that appears on hover - follows the card */}
//               <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#ff8a00]/0 via-[#ffb300]/0 to-[#ff8a00]/0 opacity-0 blur-xl transition-all duration-700 group-hover:opacity-100 group-hover:from-[#ff8a00]/30 group-hover:via-[#ffb300]/20 group-hover:to-[#ff8a00]/30" />

//               <div
//                 className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 ${
//                   openIndex === index
//                     ? "border-[#ffb300]/80 bg-white/[0.08] shadow-[0_0_40px_rgba(255,138,0,0.25)]"
//                     : "border-[#ff8a00]/20 bg-white/[0.04] hover:border-[#ffb300]/50 hover:bg-white/[0.06] hover:shadow-[0_0_20px_rgba(255,138,0,0.15)]"
//                 } backdrop-blur-xl`}
//               >
//                 {/* Animated gradient line that sweeps across on hover */}
//                 <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-[#ff8a00]/10 to-transparent opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-1/2" />

//                 <button
//                   onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                   className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition-all duration-300 md:px-7 md:py-6"
//                 >
//                   <div className="flex items-center gap-4">
//                     {/* Animated question marker */}
//                     <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff8a00]/10 text-xs font-bold text-[#ffb300] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#ff8a00]/20 group-hover:shadow-[0_0_10px_rgba(255,138,0,0.5)]">
//                       {String(index + 1).padStart(2, "0")}
//                     </div>
//                     <span className="text-base font-semibold text-white transition-all duration-300 group-hover:text-[#ffb300] md:text-xl">
//                       {faq.question}
//                     </span>
//                   </div>

//                   <motion.span
//                     animate={{ rotate: openIndex === index ? 45 : 0 }}
//                     transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
//                     className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ff8a00]/30 bg-[#ff8a00]/10 text-2xl font-light text-[#ffb300] transition-all duration-300 group-hover:scale-110 group-hover:border-[#ffb300]/70 group-hover:bg-[#ff8a00]/20 group-hover:shadow-[0_0_15px_rgba(255,138,0,0.5)]"
//                   >
//                     {openIndex === index ? "✕" : "+"}
//                   </motion.span>
//                 </button>

//                 <AnimatePresence>
//                   {openIndex === index && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.4, ease: "easeInOut" }}
//                       className="overflow-hidden"
//                     >
//                       <div className="border-t border-[#ff8a00]/20 px-6 pb-6 pt-4 md:px-7 md:pb-7 md:pt-5">
//                         <div className="flex gap-4">
//                           {/* Decorative icon */}
//                           <div className="hidden text-[#ff8a00]/40 sm:block">
//                             <svg
//                               className="h-5 w-5"
//                               fill="currentColor"
//                               viewBox="0 0 20 20"
//                             >
//                               <path
//                                 fillRule="evenodd"
//                                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
//                                 clipRule="evenodd"
//                               />
//                             </svg>
//                           </div>
//                           <p className="text-sm leading-relaxed text-gray-300 md:text-base">
//                             {faq.answer}
//                           </p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 {/* Bottom glow line that animates on open */}
//                 {openIndex === index && (
//                   <motion.div
//                     initial={{ scaleX: 0 }}
//                     animate={{ scaleX: 1 }}
//                     transition={{ duration: 0.6 }}
//                     className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-transparent via-[#ffb300] to-transparent"
//                   />
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Additional CTA after FAQ */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="mt-16 text-center"
//         >
//           <p className="text-gray-400">
//             Still have questions?{" "}
//             <a
//               href="#contact"
//               className="bg-gradient-to-r from-[#ff8a00] to-[#ffb300] bg-clip-text font-semibold text-transparent transition-all duration-300 hover:tracking-wide"
//             >
//               Contact our team
//             </a>
//           </p>
//         </motion.div>
//       </div>

//       {/* Custom animation for background pulses */}
//       <style>{`
//         @keyframes pulse {
//           0%, 100% { opacity: 0.15; transform: scale(1); }
//           50% { opacity: 0.3; transform: scale(1.05); }
//         }
//         .animate-pulse {
//           animation: pulse 6s ease-in-out infinite;
//         }
//         [animation-delay="2s"] {
//           animation-delay: 2s;
//         }
//       `}</style>
//     </section>
//   );
// }

// export default FAQ;




















import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services does Driksha Infotech provide?",
    answer:
      "Driksha Infotech Private Limited offers a wide range of digital solutions, including custom software development, web application development, mobile app development, AI solutions, ERP systems, CRM development, e-commerce solutions, website redesign, and digital transformation services.",
  },
  {
    question: "How can Driksha Infotech help my business?",
    answer:
      "We help businesses grow by building smart, scalable, and modern technology solutions according to their goals. Whether you want to improve your digital presence, automate business processes, or launch a powerful software platform, our team can support your complete digital journey.",
  },
  {
    question: "Why should I choose Driksha Infotech?",
    answer:
      "Choosing Driksha Infotech means working with a skilled and dedicated team that focuses on quality, transparency, innovation, and long-term business value. We understand your requirements clearly and deliver reliable solutions designed for performance, scalability, and growth.",
  },
  {
    question: "Do you offer website redesign services?",
    answer:
      "Yes, we provide professional website redesign services to give your existing website a modern, attractive, responsive, and brand-focused look. Our goal is to improve both user experience and overall visual impact.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "Our payment terms are flexible and can be customized based on the project size and requirements. Usually, payments are divided into stages such as project start, mid-development, and final delivery. We accept payment methods such as UPI, bank transfer, checks, and major digital payment options.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
    //   className="relative overflow-hidden bg-[#050505] py-24 md:py-32"
    >
      {/* Premium Background Effects */}
      {/* <div className="absolute inset-0">
        <div className="absolute -left-64 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#ff8a00]/20 blur-[120px]" />
        <div className="absolute -right-64 bottom-0 h-96 w-96 rounded-full bg-[#ffb300]/15 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#ff8a00]/5 via-transparent to-[#ffb300]/5 blur-3xl" />
      </div> */}

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:55px_55px]" />

      <div className="container relative z-10 mx-auto max-w-5xl px-5 md:px-12">
        {/* Section Header with Staggered Reveal */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-5 inline-block"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#ff8a00]/20 blur-md" />
              
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Everything You Need To Know About{" "}
            <span className="bg-gradient-to-r from-[#ff8a00] to-[#ffb300] bg-clip-text text-transparent">
              Driksha Infotech
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg"
          >
            Find quick answers about our services, development process,
            redesign solutions, business support, and payment structure.
          </motion.p>
        </div>

        {/* FAQ Items with Innovative Animations */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                  activeIndex === index
                    ? "border-[#ffb300]/80 bg-gradient-to-br from-white/[0.08] to-transparent shadow-[0_0_35px_rgba(255,138,0,0.25)]"
                    : "border-[#ff8a00]/20 bg-white/[0.02] hover:border-[#ffb300]/50 hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(255,138,0,0.15)]"
                }`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8 md:py-6"
                >
                  <div className="flex items-center gap-4">
                    {/* Animated Question Number */}
                    <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-[#ff8a00]/10 text-xs font-bold text-[#ffb300] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#ff8a00]/20">
                      <motion.span
                        animate={{ y: hoveredIndex === index ? [0, -20, 0] : 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </motion.span>
                    </div>
                    <span className="text-base font-semibold text-white transition-all duration-300 group-hover:text-[#ffb300] md:text-xl">
                      {faq.question}
                    </span>
                  </div>

                  {/* Dynamic Toggle Icon with Unique Transition */}
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ff8a00]/30 bg-[#ff8a00]/10 text-xl font-light text-[#ffb300] transition-all duration-300 group-hover:scale-110 group-hover:border-[#ffb300]/70 group-hover:bg-[#ff8a00]/20 group-hover:shadow-[0_0_15px_rgba(255,138,0,0.4)]"
                  >
                    {activeIndex === index ? "✕" : "➕"}
                  </motion.div>
                </button>

                {/* Page Turn Animation for Content */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, rotateX: -90 }}
                      animate={{ opacity: 1, rotateX: 0 }}
                      exit={{ opacity: 0, rotateX: -90 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                      }}
                      style={{ transformOrigin: "top" }}
                    >
                      <div className="border-t border-[#ff8a00]/20 px-6 pb-6 pt-4 md:px-8 md:pb-8 md:pt-6">
                        <div className="flex gap-4">
                          {/* Premium Quote Icon */}
                          <div className="hidden text-[#ff8a00]/40 sm:block">
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                          </div>
                          <p className="text-sm leading-relaxed text-gray-300 md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff8a00]/30 bg-white/[0.02] px-4 py-2 backdrop-blur-sm">
            {/* <span className="text-gray-400">Still have questions?</span> */}
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#ff8a00] to-[#ffb300] px-5 py-1.5 text-sm font-semibold text-[#050505] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,138,0,0.4)]"
            >
              {/* <span className="relative z-10">Contact Support</span> */}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;