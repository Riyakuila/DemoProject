import React from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
  FaCommentDots,
} from "react-icons/fa";

const reviews = [
  {
    text: "The team delivered an amazing website for our business. They understood our requirements perfectly and provided a solution that exceeded our expectations.",
    name: "Rohan Mehta",
    role: "Founder",
    company: "TechNova Solutions",
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    text: "Great experience working with this team. They are professional, responsive and delivered our project on time with excellent quality.",
    name: "Priya Sharma",
    role: "Product Manager",
    company: "EduSmart App",
    img: "https://i.pravatar.cc/100?img=47",
  },
  {
    text: "Their technical expertise and dedication helped us build a secure and scalable platform. Highly recommended for any digital solution!",
    name: "Arjun Verma",
    role: "CTO",
    company: "MarketBridge",
    img: "https://i.pravatar.cc/100?img=15",
  },
  {
    text: "Excellent communication throughout the project and the final product was beyond our expectations. Will definitely work with them again!",
    name: "Neha Kapoor",
    role: "Co-founder",
    company: "StyleStudio",
    img: "https://i.pravatar.cc/100?img=32",
  },
  {
    text: "Very smooth process from start to finish. The design looked premium and the final website performance was really impressive.",
    name: "Amit Singh",
    role: "CEO",
    company: "BrightCore",
    img: "https://i.pravatar.cc/100?img=33",
  },
  {
    text: "They handled everything professionally and gave us a clean, modern and scalable product exactly as we wanted.",
    name: "Simran Kaur",
    role: "Marketing Head",
    company: "GrowMate",
    img: "https://i.pravatar.cc/100?img=44",
  },
];

function Testimonials() {
  const infiniteReviews = [...reviews, ...reviews];

  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] px-6 py-20 text-white">

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <div className="mx-auto mb-6 flex w-fit items-center gap-3 rounded-full border border-orange-500 px-7 py-3 text-sm font-bold uppercase tracking-wide text-orange-500">
            <FaCommentDots />
            Testimonials
          </div>

          <h2 className="text-4xl font-black md:text-6xl">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Clients</span> Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/65">
            We take pride in delivering solutions that
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              {" "}make a difference.
            </span>
            <br />
            Here's what our clients have to say about working with us.
          </p>

          <div className="mx-auto mt-8 h-[2px] w-52 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

        {/* Floating Infinite Carousel */}
        <div className="relative mt-16 overflow-hidden py-6">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 z-20 h-full w-16 md:w-24 bg-gradient-to-r from-[#0b0b0b] to-transparent" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 z-20 h-full w-16 md:w-24 bg-gradient-to-l from-[#0b0b0b] to-transparent" />

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex w-max gap-6"
          >
            {infiniteReviews.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.25,
                  },
                }}
                className="
                  mt-3
                  shrink-0
                  w-[88vw]
                  sm:w-[75vw]
                  md:w-[48vw]
                  lg:w-[32vw]
                  xl:w-[24vw]
                  rounded-3xl
                  border
                  border-orange-500/40
                  bg-white/[0.03]
                  p-7
                  shadow-[0_0_35px_rgba(255,98,0,0.12)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-orange-500
                  hover:shadow-[0_0_45px_rgba(255,98,0,0.25)]
                "
              >
                {/* Top */}
                <div className="mb-7 flex items-center justify-between">
                  <FaQuoteLeft className="text-5xl text-orange-500" />

                  <div className="flex gap-1 text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>

                {/* Text */}
                <p className="min-h-[150px] text-[15px] leading-8 text-white/85">
                  {item.text}
                </p>

                <div className="my-6 h-px bg-white/15" />

                {/* Profile */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-16 w-16 rounded-full border-2 border-orange-500 object-cover"
                  />

                  <div>
                    <h3 className="font-bold text-orange-500">
                      {item.name}
                    </h3>

                    <p className="text-sm text-white">
                      {item.role}
                    </p>

                    <p className="text-sm text-white/50">
                      {item.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;