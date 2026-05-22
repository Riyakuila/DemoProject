import { motion } from "framer-motion";

function About() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-4 py-28 sm:px-6 lg:px-10">

      {/* Glow Background */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-[1100px] text-center">

        {/* Small Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-6 inline-block rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400"
        >
          About Driksha Infotech
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Innovative Solutions For A
          <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
            {" "}Digital World
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-4xl text-base leading-8 text-gray-400 sm:text-lg"
        >
          At Driksha Infotech, we harness cutting-edge technologies to bring
          your ideas to life. Whether it's bespoke software, state-of-the-art
          websites, or next-generation mobile applications, our team is focused
          on building intelligent digital solutions that drive innovation,
          performance, and long-term business growth.
        </motion.p>

        {/* Secondary Text */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-500 sm:text-lg"
        >
          Always ahead of the curve, always on your side. Join us on a journey
          where creativity meets technology and transform your digital vision
          into reality.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <button className="rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-7 py-3 font-semibold text-black transition duration-300 hover:scale-105">
            Explore Services
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default About;