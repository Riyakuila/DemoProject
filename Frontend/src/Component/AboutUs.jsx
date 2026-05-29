
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  Code2,
  Rocket,
  ShieldCheck,
  BarChart3,
  Users,
  Target,
  Eye,
  Handshake,
} from "lucide-react";

function AboutUs() {
  const features = [
    { icon: <Lightbulb />, text: "Innovative\nSolutions" },
    { icon: <Code2 />, text: "Modern\nTechnologies" },
    { icon: <Rocket />, text: "Startup\nDriven" },
    { icon: <ShieldCheck />, text: "Secure\nDevelopment" },
    { icon: <BarChart3 />, text: "Scalable\nSystems" },
    { icon: <Users />, text: "Client-Focused\nApproach" },
  ];

  const missionVision = [
    {
      icon: <Target />,
      title: "Our Mission",
      desc: "To deliver cutting-edge technological solutions that empower businesses to innovate, grow, and achieve their goals with precision and efficiency.",
    },
    {
      icon: <Eye />,
      title: "Our Vision",
      desc: "To be the leading global provider of digital transformation, creating a lasting impact on businesses by harnessing the power of technology.",
    },
  ];

  const values = [
    {
      icon: <Lightbulb />,
      title: "Innovation",
      desc: "We continuously strive to bring the latest technologies and innovative ideas to every project we undertake.",
    },
    {
      icon: <Handshake />,
      title: "Commitment",
      desc: "We are dedicated to delivering exceptional results and ensuring client satisfaction at every stage.",
    },
    {
      icon: <ShieldCheck />,
      title: "Integrity",
      desc: "We uphold honesty, transparency, and trustworthiness in all our interactions.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen bg-[#050505] px-4 py-4 pt-28 text-white">
      <div className="overflow-hidden border border-neutral-800 bg-black">
        <div className="grid min-h-[640px] grid-cols-1 lg:grid-cols-[42%_58%]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center px-8 py-8 md:px-16"
          >
            <p className="mb-6 text-2xl font-semibold uppercase tracking-wide text-orange-500">
              About Us
            </p>

            <h1 className="text-5xl font-extrabold leading-tight md:text-5xl">
              Driving Ideas.
              <br />
              Delivering <span className="text-orange-500">Impact.</span>
            </h1>

            <div className="my-6 h-[2px] w-72 bg-gradient-to-r from-orange-500 to-transparent" />

            <p className="max-w-xl text-lg leading-8 text-neutral-300">
              At Driksha Infotech, we turn ideas into powerful digital
              solutions. With a passion for innovation and a commitment to
              excellence, we help businesses grow, scale, and lead in the
              digital world.
            </p>

            <motion.button
              whileHover={{ x: 6 }}
              className="mt-10 flex w-fit items-center gap-3 rounded-md border border-orange-500 px-6 py-3 font-semibold text-orange-400 transition hover:bg-orange-500 hover:text-white"
            >
              Explore Our Journey <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          <div className="relative hidden overflow-hidden lg:block">
            <motion.img
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              src="/Images/aboutus_image.png"
              alt="Driksha Infotech Office"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-4 mb-10 grid grid-cols-2 rounded-xl border border-orange-900/70 bg-black/80 px-8 py-6 md:grid-cols-3 lg:grid-cols-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="group flex items-center gap-5 border-neutral-800 py-3 lg:border-r last:border-r-0"
            >
              <div className="text-orange-500 transition duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.9)] [&>svg]:h-9 [&>svg]:w-9">
                {item.icon}
              </div>
              <p className="whitespace-pre-line text-sm font-medium text-white">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="px-6 pb-16 md:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Our Mission & Vision
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {missionVision.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group rounded-2xl border border-neutral-800 bg-neutral-950 p-8 transition duration-300 hover:border-orange-500 hover:bg-[#120b05] hover:shadow-[0_0_35px_rgba(249,115,22,0.16)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-[0_0_22px_rgba(249,115,22,0.55)] [&>svg]:h-7 [&>svg]:w-7">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-neutral-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            // className="mt-16 rounded-3xl border border-neutral-800 bg-neutral-950 p-8 md:p-10"
            className="mt-16 rounded-3xl border border-orange-500/60 bg-neutral-950 p-8 md:p-10 shadow-[0_0_25px_rgba(249,115,22,0.25)]"
          >
            <p className="text-2xl font-semibold uppercase tracking-[0.05em] text-orange-500">
              Journey
            </p>
            <h2 className="mt-3 text-3xl font-bold">Our History</h2>

            <p className="mt-6 leading-8 text-neutral-400">
              Founded in 2020, Driksha Infotech started with a vision to
              empower businesses through innovative technology solutions. Over
              the years, we have successfully delivered high-quality software,
              websites, and mobile applications to clients across various
              industries.
            </p>

            <p className="mt-4 leading-8 text-neutral-400">
              Our commitment to excellence has earned us recognition in the tech
              industry, enabling us to expand globally and form long-lasting
              partnerships with our clients.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <h2 className="mt-3 text-3xl font-bold">Our Core Values</h2>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group rounded-2xl border border-neutral-800 bg-black p-7 text-center transition duration-300 hover:border-orange-500 hover:bg-[#120b05] hover:shadow-[0_0_35px_rgba(249,115,22,0.16)]"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-[0_0_22px_rgba(249,115,22,0.55)] [&>svg]:h-7 [&>svg]:w-7">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;