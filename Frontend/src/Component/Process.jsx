
import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineUsers,
  HiOutlineArrowPath,
  HiOutlineLockClosed,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    desc: "We understand your business, goals and requirements in detail.",
    image: "/Images/Discover.png",
  },
  {
    number: "02",
    title: "Plan",
    desc: "We analyze and create a clear strategy and roadmap for your project.",
    image: "/Images/plan.png",
  },
  {
    number: "03",
    title: "Design",
    desc: "Our team designs modern, user-friendly interfaces that align with your brand.",
    image: "/Images/Design.png",
  },
  {
    number: "04",
    title: "Develop",
    desc: "We build scalable, secure and high-performance solutions using best technologies.",
    image: "/Images/Devlop.png",
  },
  {
    number: "05",
    title: "Test",
    desc: "We rigorously test every module to ensure quality, security and smooth performance.",
    image: "/Images/Test.png",
  },
  {
    number: "06",
    title: "Deliver",
    desc: "We deploy your solution and provide ongoing support for your growth.",
    image: "/Images/Deliver.png",
  },
];

const features = [
  {
    title: "Clear Communication",
    desc: "We keep you updated at every step.",
    icon: <HiOutlineChatBubbleLeftRight />,
  },
  {
    title: "Secure & Scalable Solutions",
    desc: "We build solutions that are future-ready.",
    icon: <HiOutlineLockClosed />,
  },
  {
    title: "Agile & Flexible Approach",
    desc: "We adapt to your needs and deliver results.",
    icon: <HiOutlineArrowPath />,
  },
  {
    title: "Continuous Support",
    desc: "We're here even after the project delivery.",
    icon: <HiOutlineUsers />,
  },
];

function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#030303] px-4 py-16 text-white md:px-10 lg:px-6"
    >
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto mb-20 max-w-5xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
          Our Work Process
        </p>

        <h2 className="text-4xl font-black leading-tight md:text-6xl lg:text-6xl">
          Our Process,{" "}
          <span className="text-orange-500">Your Success</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
          We follow a clear and agile process to transform your ideas into
          powerful <span className="text-orange-500">digital solutions.</span>
        </p>
      </div>

      <div className="relative z-10 grid items-stretch gap-10 md:grid-cols-2 xl:grid-cols-6">
        {processSteps.map((step, index) => (
          <div key={step.number} className="relative flex">
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative flex h-[280px] w-full flex-col items-center rounded-[20px] border border-orange-500/45 bg-[#070707]/95 px-5 pb-6 pt-12 text-center shadow-[0_0_30px_rgba(255,115,0,0.12)]"
            >
              <div className="absolute -top-9 flex h-12 w-12 items-center justify-center rounded-full border-2 border-orange-500 bg-[#050505] text-xl font-bold shadow-[0_0_25px_rgba(255,115,0,0.7)]">
                {step.number}
              </div>

              <motion.img
                src={step.image}
                alt={step.title}
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="-mt-3 h-20 w-20 object-contain drop-shadow-[0_0_30px_rgba(255,115,0,0.35)]"
              />

              <div className="mt-2 flex flex-col items-center">
                <h3 className="text-2xl font-black leading-none">
                  {step.title}
                </h3>

                <div className="my-3 h-[3px] w-16 rounded-full bg-orange-400" />

                <p className="max-w-[210px] text-[13px] leading-[1.8] text-zinc-300">
                  {step.desc}
                </p>
              </div>

              <div className="absolute -bottom-3 h-5 w-5 rounded-full border-2 border-white bg-orange-500 shadow-[0_0_20px_rgba(255,115,0,1)]" />
            </motion.div>

            {index !== processSteps.length - 1 && (
              <motion.div
                animate={{ x: [0, 10, 0], opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="absolute -right-9 top-1/2 z-20 hidden -translate-y-1/2 text-5xl font-bold text-orange-500 drop-shadow-[0_0_14px_rgba(255,115,0,0.9)] xl:block"
              >
                →
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mt-16 rounded-[28px] border border-orange-500/40 bg-[#070707] px-8 py-5 shadow-[0_0_35px_rgba(255,115,0,0.12)] md:px-9 md:py-9"
      >
        <div className="grid gap-10 lg:grid-cols-[1.8fr_3fr]">
          <div className="flex gap-9">
            <motion.img
              src="/Images/Deliver.png"
              alt="Deliver"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="hidden h-44 w-44 object-contain drop-shadow-[0_0_30px_rgba(255,115,0,0.35)] md:block"
            />

            <div>
              <h3 className="text-3xl font-black leading-tight md:text-3xl">
                A Process Built on <br />
                <span className="text-orange-500">
                  Trust & Transparency
                </span>
              </h3>

              <p className="mt-5 max-w-md text-base leading-8 text-zinc-300">
                We believe in clear communication, collaboration and delivering
                real value at every step.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="text-center lg:border-l lg:border-orange-500/20 lg:px-6"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-4xl text-orange-500">
                  {item.icon}
                </div>

                <h4 className="text-lg font-bold leading-6">{item.title}</h4>

                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Process;