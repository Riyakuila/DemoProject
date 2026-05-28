

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
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
  const [page, setPage] = useState(0);
  const perPage = 4;
  const totalPages = Math.ceil(reviews.length / perPage);

  const visibleReviews = reviews.slice(page * perPage, page * perPage + perPage);

  const nextSlide = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1a0b02,transparent_45%)]" />
      <div className="absolute right-10 top-20 text-[180px] font-black leading-none text-orange-500/10">
        “
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <div className="mx-auto mb-6 flex w-fit items-center gap-3 rounded-full border border-orange-500 px-7 py-3 text-sm font-bold uppercase tracking-wide text-orange-500">
            <FaCommentDots /> Testimonials
          </div>

          <h2 className="text-4xl font-black md:text-6xl">
            What Our <span className="text-orange-500">Clients</span> Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/65">
            We take pride in delivering solutions that{" "}
            <span className="font-semibold text-orange-500">
              make a difference.
            </span>
            <br />
            Here's what our clients have to say about working with us.
          </p>

          <div className="mx-auto mt-8 h-[2px] w-52 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

        <div className="relative mt-12">
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-orange-500 bg-black text-white transition hover:bg-orange-500"
          >
            <FaChevronLeft />
          </button>

          <motion.div
            key={page}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {visibleReviews.map((item, index) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -10 }}
                className="rounded-3xl border border-orange-500/50 bg-white/[0.03] p-7 shadow-[0_0_35px_rgba(255,98,0,0.12)] backdrop-blur-md transition hover:border-orange-500"
              >
                <div className="mb-7 flex items-center justify-between">
                  <FaQuoteLeft className="text-5xl text-orange-500" />
                  <div className="flex gap-1 text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>

                <p className="min-h-[150px] text-[15px] leading-8 text-white/85">
                  {item.text}
                </p>

                <div className="my-6 h-px bg-white/15" />

                <div className="flex items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-16 w-16 rounded-full border-2 border-orange-500 object-cover"
                  />

                  <div>
                    <h3 className="font-bold text-orange-500">{item.name}</h3>
                    <p className="text-sm text-white">{item.role}</p>
                    <p className="text-sm text-white/50">{item.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-orange-500 bg-black text-white transition hover:bg-orange-500"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-4 w-4 rounded-full transition-all duration-300 ${
                  page === i ? "bg-orange-500" : "bg-white/20"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;