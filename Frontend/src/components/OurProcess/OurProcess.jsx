import { motion } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlineClipboardList,
  HiOutlineCode,
  HiOutlineSupport,
} from "react-icons/hi";

const processSteps = [
  {
    id: "01",
    title: "Consultation",
    icon: <HiOutlineLightBulb />,
    description:
      "We discuss your requirements, goals, and vision to understand how we can help you achieve success.",
  },
  {
    id: "02",
    title: "Planning",
    icon: <HiOutlineClipboardList />,
    description:
      "We create a detailed project roadmap, identifying key deliverables, timelines, and milestones.",
  },
  {
    id: "03",
    title: "Development",
    icon: <HiOutlineCode />,
    description:
      "Our expert developers turn your ideas into reality, ensuring high quality, security, and scalability.",
  },
  {
    id: "04",
    title: "Delivery & Support",
    icon: <HiOutlineSupport />,
    description:
      "We deliver your project on time and provide ongoing support to ensure long-term success.",
  },
];

function OurProcess() {
  return (
    <section className="relative bg-black px-6 py-20 text-white lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-6 inline-block rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400">
            Our Process
          </p>

          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            How We Build
            <span className="bg-linear-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              {" "}
              Digital Solutions
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-gray-400">
            We follow a simple, transparent process to deliver high-quality
            software solutions that meet your business needs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-orange-500/30"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              {/* Step Number */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl text-orange-400">
                  {step.icon}
                </div>

                <span className="text-4xl font-bold text-white/10">
                  {step.id}
                </span>
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-semibold text-white">
                Step {step.id}: {step.title}
              </h3>

              <p className="text-sm leading-7 text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProcess;