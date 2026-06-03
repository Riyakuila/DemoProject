import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiCode,
  FiShield,
  FiUsers,
  FiTrendingUp,
  FiHeadphones,
  FiTarget,
} from "react-icons/fi";

import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
} from "react-icons/fa";

import {
  SiMongodb,
  SiNextdotjs,
  SiFirebase,
  SiPython,
} from "react-icons/si";
import portfolioHero from "../../assets/portfolioHero.png";

function Portfolio() {

  const categories = [
    "All",
    "Web Development",
    "Mobile Apps",
    "Software Solutions",
    "AI Solutions",
  ];

  const [activeTab, setActiveTab] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Corporate Website Redesign",
      category: "Web Development",
      desc: "Modern business website designed with premium UI, scalability, and high-performance architecture.",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "AI Business Assistant",
      category: "AI Solutions",
      desc: "AI-powered workflow automation platform built to improve customer support and productivity.",
      tech: ["Python", "AI", "React"],
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      category: "Software Solutions",
      desc: "Secure digital commerce ecosystem with analytics, inventory control and payment integration.",
      tech: ["React", "Node", "Stripe"],
    },
    {
      id: 4,
      title: "Health & Fitness App",
      category: "Mobile Apps",
      desc: "Cross-platform mobile application with personalized fitness tracking and engagement tools.",
      tech: ["Flutter", "Firebase", "API"],
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">

      {/* HERO */}
      <section className="relative mx-auto flex min-h-[90vh] max-w-[1450px] flex-col items-center justify-between px-6 pt-36 pb-24 lg:flex-row lg:px-10">

        {/* Glow */}
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[140px]" />

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-2xl"
        >
          <span className="mb-5 block text-xs font-bold uppercase tracking-[5px] text-yellow-500">
            Our Portfolio
          </span>

          <h1 className="text-4xl font-extrabold leading-[1.05] lg:text-6xl">
            Crafting Digital
            <br />
            Experiences That
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Deliver Results
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
            Explore our digital solutions built across industries.
            Every experience is designed to solve real problems and
            create measurable business impact.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-400 to-yellow-500 px-7 py-4 font-semibold text-black transition hover:scale-[1.03]">
              Explore Projects
              <FiArrowRight />
            </button>

            <button className="rounded-xl border border-yellow-500/30 px-7 py-4 font-semibold text-yellow-500 transition hover:bg-yellow-500/10">
              Case Studies
            </button>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mt-14 flex w-full max-w-xl justify-center lg:mt-0"
        >
          <div className="rounded-[34px] border border-yellow-500/15 p-4 shadow-[0_0_60px_rgba(250,204,21,0.10)]">

            <div
              className="h-[350px] w-[520px] rounded-[28px] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${portfolioHero})`,
              }}
            />
          </div>

          {/* Floating Badges */}
          <div className="absolute -right-6 top-12 hidden flex-col gap-4 xl:flex">

            {[
              {
                icon: <FiTrendingUp />,
                text: "Business Growth",
              },
              {
                icon: <FiCode />,
                text: "Scalable Tech",
              },
              {
                icon: <FiUsers />,
                text: "User Focused",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.8,
                }}
                className="flex items-center gap-3 rounded-2xl border border-yellow-500/15 bg-[#0b0b0b]/90 px-4 py-3 backdrop-blur-md"
              >
                <div className="text-xl text-yellow-500">
                  {item.icon}
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FEATURE STRIP */}
      <section className="mx-auto max-w-[1450px] px-6 lg:px-10">
        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-6">

          {[
            {
              icon: <FiTrendingUp />,
              title: "Modern Solutions",
            },
            {
              icon: <FiCode />,
              title: "Clean Code",
            },
            {
              icon: <FiShield />,
              title: "Secure",
            },
            {
              icon: <FiUsers />,
              title: "User-Focused",
            },
            {
              icon: <FiTarget />,
              title: "Results",
            },
            {
              icon: <FiHeadphones />,
              title: "Support",
            },
          ].map((item, i) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={i}
              className="rounded-3xl border border-yellow-500/10 bg-[#0a0a0a] p-6 text-center transition hover:border-yellow-500/35"
            >
              <div className="mb-4 flex justify-center text-3xl text-yellow-500">
                {item.icon}
              </div>

              <h3 className="font-medium">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>
            {/* PROJECTS */}
      <section className="mx-auto max-w-[1450px] px-6 py-28 lg:px-10">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold lg:text-5xl">
            Featured{" "}
            <span className="text-yellow-500">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Explore selected work designed to create
            impact through innovation, performance,
            and strategic technology.
          </p>
        </div>

        {/* FILTERS */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all
              ${
                activeTab === cat
                  ? "border-yellow-500 bg-gradient-to-r from-orange-400 to-yellow-500 text-black shadow-[0_0_20px_rgba(250,204,21,0.25)]"
                  : "border-[#222] bg-[#0b0b0b] text-zinc-400 hover:border-yellow-500/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PREMIUM PROJECT GRID */}
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">

            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.45 }}
                key={project.id}
                className="group overflow-hidden rounded-[32px] border border-yellow-500/12 bg-[#090909]"
              >
                {/* IMAGE */}
                <div className="relative h-[300px] overflow-hidden border-b border-[#151515] bg-[#111]">

                  <div className="flex h-full items-center justify-center text-zinc-500">
                    Project Image Placeholder
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70" />
                </div>

                {/* CONTENT */}
                <div className="p-8">

                  <span className="text-xs font-bold uppercase tracking-[3px] text-yellow-500">
                    {project.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold transition group-hover:text-yellow-500">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-8 text-zinc-400">
                    {project.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-[#222] bg-[#111] px-3 py-1 text-xs text-yellow-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="mt-8 flex items-center gap-2 font-semibold text-yellow-500">
                    Explore Project
                    <FiArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}

          </AnimatePresence>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="border-y border-[#151515] bg-gradient-to-b from-black via-[#090909] to-black py-24">

        <div className="mx-auto max-w-[1450px] px-6 lg:px-10">

          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold lg:text-5xl">
              Our Work.
              <span className="text-yellow-500">
                {" "}Their Success.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
              Delivering measurable impact through
              innovation, reliability, and strategic
              technology solutions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                value: "20+",
                label: "Projects Delivered",
                icon: <FiCode />,
              },
              {
                value: "98%",
                label: "Client Satisfaction",
                icon: <FiUsers />,
              },
              {
                value: "24/7",
                label: "Support",
                icon: <FiHeadphones />,
              },
              {
                value: "10+",
                label: "Industries Served",
                icon: <FiTrendingUp />,
              },
            ].map((item, i) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={i}
                className="rounded-3xl border border-[#1a1a1a] bg-[#0b0b0b] p-8 text-center transition hover:border-yellow-500/30"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500/10 text-2xl text-yellow-500">
                  {item.icon}
                </div>

                <h3 className="text-4xl font-extrabold">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm uppercase tracking-wider text-zinc-400">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
            {/* TECH STACK */}
      <section className="mx-auto max-w-[1450px] px-6 py-28 lg:px-10">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold lg:text-5xl">
            Technologies We{" "}
            <span className="text-yellow-500">
              Use
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Modern technology stack powering secure,
            scalable and future-ready digital solutions.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-4">

          {[
            {
              icon: <FaReact />,
              title: "React",
            },
            {
              icon: <FaNodeJs />,
              title: "Node.js",
            },
            {
              icon: <SiMongodb />,
              title: "MongoDB",
            },
            {
              icon: <SiNextdotjs />,
              title: "Next.js",
            },
            {
              icon: <FaAws />,
              title: "AWS",
            },
            {
              icon: <FaDocker />,
              title: "Docker",
            },
            {
              icon: <SiFirebase />,
              title: "Firebase",
            },
            {
              icon: <SiPython />,
              title: "Python",
            },
          ].map((tech, i) => (
            <motion.div
              whileHover={{
                y: -6,
              }}
              key={i}
              className="group rounded-3xl border border-yellow-500/10 bg-[#0a0a0a] p-7 text-center transition hover:border-yellow-500/35 hover:shadow-[0_0_30px_rgba(250,204,21,0.12)]"
            >
              <div className="mb-5 flex justify-center text-4xl text-yellow-500 transition group-hover:scale-110">
                {tech.icon}
              </div>

              <h3 className="font-medium text-zinc-200">
                {tech.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28">

        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5" />

        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-[40px] border border-yellow-500/15 bg-[#0a0a0a] px-8 py-14 text-center shadow-[0_0_55px_rgba(250,204,21,0.10)] lg:px-16"
          >

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[110px]" />

            <div className="relative z-10">

              <span className="text-xs font-bold uppercase tracking-[5px] text-yellow-500">
                Let's Build Together
              </span>

              <h2 className="mt-5 text-4xl font-extrabold leading-tight lg:text-5xl">
                Ready To Turn Your
                <br />
                Vision Into{" "}
                <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  Reality?
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
                Partner with Driksha Infotech and build
                scalable digital products designed for
                growth, performance and long-term impact.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">

                <button className="rounded-xl bg-gradient-to-r from-orange-400 to-yellow-500 px-7 py-4 font-semibold text-black transition hover:scale-[1.03]">
                  Start Your Project
                </button>

                <button className="rounded-xl border border-yellow-500/30 px-7 py-4 font-semibold text-yellow-500 transition hover:bg-yellow-500/10">
                  Contact Us
                </button>

              </div>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default Portfolio;