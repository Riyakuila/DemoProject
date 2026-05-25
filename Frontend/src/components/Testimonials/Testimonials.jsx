import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";

const testimonials = [
  {
    company: "TechNova Solutions",
    review:
      "This company transformed our online presence and helped us increase customer engagement by 50%!",
  },
  {
    company: "EverGreen Ventures",
    review:
      "Their professionalism and expertise exceeded our expectations. We couldn't be happier with the results.",
  },
  {
    company: "BlueWave Innovations",
    review:
      "They delivered a complex project on time, and their after-launch support has been fantastic.",
  },
  {
    company: "NextGen Enterprises",
    review:
      "Working with Driksha Infotech was a game-changer. Their support and expertise made all the difference!",
  },
];

function Testimonials() {
  return (
    <section className="relative bg-black px-6 py-20 text-white lg:px-16">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-6 inline-block rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400">
            Testimonials
          </p>

          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            What Our
            <span className="bg-linear-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              {" "}
              Clients Say
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-gray-400">
            We pride ourselves on building strong partnerships with our clients
            and delivering exceptional results.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-orange-500/30"
            >
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="mb-5 flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="text-lg" />
                ))}
              </div>

              <p className="mb-6 leading-7 text-gray-300 italic">
                "{item.review}"
              </p>
              
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {item.company}
                </h3>
                <p className="text-sm text-orange-400">
                  Valued Client
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;