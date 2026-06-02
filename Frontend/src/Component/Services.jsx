
import { motion } from "framer-motion";
import {
  MdDesignServices,
  MdCode,
  MdPhoneIphone,
  MdSecurity,
  MdTrendingUp,
  MdCloudQueue,
  MdHeadsetMic,
  MdSmartToy,
} from "react-icons/md";

const services = [
  {
    icon: MdDesignServices,
    title: "Website Design & Development",
    desc: "Modern, responsive and user-friendly websites that represent your brand perfectly.",
  },
  {
    icon: MdCode,
    title: "Custom Software Development",
    desc: "Tailor-made software solutions to streamline processes and boost business efficiency.",
  },
  {
    icon: MdPhoneIphone,
    title: "Web & Mobile App Development",
    desc: "High-performance web and mobile applications for a seamless digital experience.",
  },
  {
    icon: MdSmartToy,
    title: "AI Robotics Solutions",
    desc: "Future-ready AI robots for farming, healthcare, automation, and smart assistance.",
  },
  {
    icon: MdSecurity,
    title: "Cyber Security",
    desc: "Protect your business with advanced security solutions and risk management.",
  },
  {
    icon: MdTrendingUp,
    title: "Digital Marketing",
    desc: "Grow your online presence and reach the right audience with result-driven strategies.",
  },
  {
    icon: MdCloudQueue,
    title: "Cloud & DevOps Solutions",
    desc: "Scalable cloud infrastructure and DevOps services for faster deployment.",
  },
  {
    icon: MdHeadsetMic,
    title: "Maintenance & Technical Support",
    desc: "24/7 maintenance and support to keep your systems running smoothly.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white md:px-12 lg:px-20"
    >
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff6a001c,transparent_45%)]" /> */}

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-orange-500">
            What We Do
          </p>
          <h2 className="mt-3 text-4xl font-black italic md:text-7xl">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">SERVICES</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300 md:text-base">
            We provide end-to-end digital solutions to help your business grow,
            innovate and stay ahead in the digital world.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative flex h-full flex-col rounded-xl border border-orange-500/40 bg-black/70 p-6 text-center shadow-[0_0_18px_rgba(255,100,0,0.18)] transition-all duration-300 hover:border-orange-400 hover:shadow-[0_0_35px_rgba(255,100,0,0.45)]"
              >
                <span className="absolute left-3 top-3 rounded bg-orange-500 px-2 py-1 text-xs font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-orange-500 bg-orange-500/10 text-orange-400 shadow-[0_0_25px_rgba(255,100,0,0.45)] transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={42} />
                </div>

                <h3 className="text-lg font-bold leading-tight">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {service.desc}
                </p>

                <div className= "mt-auto">

                  <button className="mt-5 text-sm font-semibold text-orange-400 transition group-hover:text-orange-300">
                    Learn More →
                  </button>

                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="mx-auto mt-8 flex max-w-lg items-center justify-between rounded-xl border border-orange-500/50 bg-black px-5 py-3 shadow-[0_0_25px_rgba(255,100,0,0.25)]"
        >
          <p className="text-sm">
            Have a Project in Mind?{" "}
            <span className="font-bold text-orange-400">
              Let’s Build Something Amazing Together!
            </span>
          </p>

          <button className="ml-4 rounded-full bg-orange-500 px-3 py-2 text-white">
            →
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;