
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
  Calendar,
  Globe,
} from "lucide-react";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardHover = {
  hover: {
    y: -8,
    borderColor: 'rgba(243, 112, 34, 0.4)',
    boxShadow: '0 10px 30px -10px rgba(243, 112, 34, 0.15)',
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};

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

        <div className="bg-[#000000] text-white min-h-screen font-sans overflow-x-hidden">

          <section className="py-20 px-6 max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Our <span className="text-[#F37022]">Mission</span> & <span className="text-[#F37022]">Vision</span>
              </h2>
              <div className="w-46 h-[2px] bg-[#F37022] mx-auto mt-4" />
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Mission Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                custom={cardHover}
                className="bg-[#0A0A0A]/60 border border-neutral-900 rounded-2xl p-8 md:p-10 flex flex-col items-start space-y-6 backdrop-blur-sm cursor-pointer"
              >
                <div className="p-4 rounded-full border border-[#F37022]/30 bg-[#F37022]/5 text-[#F37022]">
                  <Rocket className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    Our <span className="text-[#F37022]">Mission</span>
                  </h3>
                  <p className="text-neutral-200 leading-relaxed text-sm md:text-base">
                    To empower businesses with innovative digital solutions that drive growth, improve efficiency, and accelerate digital transformation through technology, creativity, and strategic execution.
                  </p>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                custom={cardHover}
                className="bg-[#0A0A0A]/60 border border-neutral-900 rounded-2xl p-8 md:p-10 flex flex-col items-start space-y-6 backdrop-blur-sm cursor-pointer"
              >
                <div className="p-4 rounded-full border border-[#F37022]/30 bg-[#F37022]/5 text-[#F37022]">
                  <Eye className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    Our <span className="text-[#F37022]">Vision</span>
                  </h3>
                  <p className="text-neutral-200 leading-relaxed text-sm md:text-base">
                    To become a globally trusted technology partner, delivering impactful digital experiences and shaping the future of businesses through innovation and excellence.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </section>


          <section className="py-20 px-6 max-w-7xl mx-auto border-t border-neutral-900/50">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Our <span className="text-[#F37022]">Journey</span>
              </h2>
              <div className="w-26 h-[2px] bg-[#F37022] mx-auto mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Side: Modern Graphic Showcase */}
              <motion.div
                className="lg:col-span-5 relative group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-t from-[#F37022]/20 to-transparent opacity-40 blur-md group-hover:opacity-60 transition duration-500" />
                <div className="relative border border-neutral-800 rounded-2xl overflow-hidden bg-[#050505]">
                  
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                    alt="Cyberpunk city digital transformation concept"
                    className="w-full h-[450px] object-cover filter grayscale opacity-90 group-hover:scale-105 group-hover:filter-none group-hover:opacity-95 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
              </motion.div>

              {/* Right Side: Timeline Details */}
              <motion.div
                className="lg:col-span-7 relative pl-4 md:pl-8 space-y-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={staggerContainer}
              >
                {/* Visual Timeline Connecting Vertical Line */}
                <div className="absolute left-[31px] md:left-[47px] top-6 bottom-6 w-[1px] bg-dashed bg-gradient-to-b from-[#F37022]/60 via-[#F37022]/30 to-transparent border-l border-dashed border-[#F37022]/40" />

                {/* Timeline Step 1 */}
                <motion.div variants={fadeInUp} className="relative flex items-start space-x-6">
                  <div className="z-10 p-3 rounded-full border border-[#F37022] bg-[#000000] text-[#F37022] shadow-[0_0_15px_rgba(243,112,34,0.15)]">
                    <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-xl font-bold text-white mb-1">Founded in 2020</h4>
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                      Driksha Infotech started with a vision to empower businesses through innovative technology solutions.
                    </p>
                  </div>
                </motion.div>

                {/* Timeline Step 2 */}
                <motion.div variants={fadeInUp} className="relative flex items-start space-x-6">
                  <div className="z-10 p-3 rounded-full border border-[#F37022] bg-[#000000] text-[#F37022] shadow-[0_0_15px_rgba(243,112,34,0.15)]">
                    <Rocket className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-xl font-bold text-white mb-1">Growth & Excellence</h4>
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                      Over the years, we have successfully delivered high-quality software, websites, and mobile applications to clients across various industries.
                    </p>
                  </div>
                </motion.div>

                {/* Timeline Step 3 */}
                <motion.div variants={fadeInUp} className="relative flex items-start space-x-6">
                  <div className="z-10 p-3 rounded-full border border-[#F37022] bg-[#000000] text-[#F37022] shadow-[0_0_15px_rgba(243,112,34,0.15)]">
                    <Globe className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-xl font-bold text-white mb-1">Global Expansion</h4>
                    <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                      Our commitment to excellence has earned us recognition in the tech industry, enabling us to expand globally and form long-lasting partnerships with our clients.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>


          <section className="py-20 px-6 max-w-7xl mx-auto border-t border-neutral-900/50">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Our Core <span className="text-[#F37022]">Values</span>
              </h2>
              <div className="w-16 h-[2px] bg-[#F37022] mx-auto mt-4" />
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Value 1: Innovation */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                custom={cardHover}
                className="bg-[#0A0A0A]/60 border border-neutral-900 rounded-2xl p-8 flex flex-col items-start space-y-5 cursor-pointer"
              >
                <div className="p-3 rounded-full border border-[#F37022]/30 bg-[#F37022]/5 text-[#F37022]">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  We embrace emerging technologies and forward-thinking strategies to create impactful digital solutions that keep businesses ahead of the curve.
                </p>
              </motion.div>

              {/* Value 2: Commitment */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                custom={cardHover}
                className="bg-[#0A0A0A]/60 border border-neutral-900 rounded-2xl p-8 flex flex-col items-start space-y-5 cursor-pointer"
              >
                <div className="p-3 rounded-full border border-[#F37022]/30 bg-[#F37022]/5 text-[#F37022]">
                  <Handshake className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Commitment</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  We believe in accountability, reliability, and delivering measurable value through every project we undertake.
                </p>
              </motion.div>

              {/* Value 3: Integrity */}
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                custom={cardHover}
                className="bg-[#0A0A0A]/60 border border-neutral-900 rounded-2xl p-8 flex flex-col items-start space-y-5 cursor-pointer"
              >
                <div className="p-3 rounded-full border border-[#F37022]/30 bg-[#F37022]/5 text-[#F37022]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Integrity</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  We build relationships on trust, transparency, and ethical practices, ensuring honesty and professionalism in every interaction.
                </p>
              </motion.div>
            </motion.div>
          </section>


          <section className="py-12 px-6 max-w-7xl mx-auto mb-16">
            <motion.div
              className="relative bg-gradient-to-r from-[#0C0603] via-[#140C07] to-[#0A0A0A] border border-[#F37022]/20 rounded-2xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Subtle Ambient Background Light */}
              <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-[#F37022]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Left Side: Text and Vector Rocket Artwork Graphic */}
              <div className="flex items-center space-x-6 relative z-10 w-full md:w-2/3">
                <div className="hidden sm:block text-[#F37022]/20 filter drop-shadow-[0_0_15px_rgba(243,112,34,0.1)]">
                  {/* Rocket graphic vector setup */}
                  <Rocket className="w-16 h-16 transform -rotate-45 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                    Let's Build Something <span className="text-[#F37022]">Amazing Together!</span>
                  </h3>
                  <p className="text-neutral-400 text-sm md:text-base">
                    Have a project in mind? Let's turn your ideas into reality.
                  </p>
                </div>
              </div>

              {/* Right Side: Interactive Action Trigger Button */}
              <div className="w-full md:w-auto text-left md:text-right relative z-10">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: '#ff7d33' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto px-8 py-4 bg-[#F37022] text-black font-semibold rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-[#F37022]/20 transition-colors"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </section>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;