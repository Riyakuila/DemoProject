import { motion } from "framer-motion";
import {
    FaCode,
    FaGlobe,
    FaMobileAlt,
} from "react-icons/fa";

import teamImg from "../../assets/teamImg.png";

function About() {

    const orbitIcons = [
        {
            icon: <FaCode />,
            pos: "top-0 left-1/2 -translate-x-1/2",
        },
        {
            icon: <FaCode />,
            pos: "top-20 left-10",
        },
        {
            icon: <FaGlobe />,
            pos: "top-1/2 left-0 -translate-y-1/2",
        },
        {
            icon: <FaMobileAlt />,
            pos: "bottom-10 left-16",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-white py-28">

            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">

                {/* LEFT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-orange-400">
                        About Driksha Infotech
                    </p>

                    <h2 className="text-4xl font-black leading-tight text-[#22130c] md:text-6xl">
                        Innovative Solutions for a
                        <br />
                        <span className="text-orange-500">
                            Digital World.
                        </span>
                    </h2>

                    <div className="mt-6 h-1 w-24 rounded-full bg-orange-300"></div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 max-w-xl text-lg leading-9 text-[#5d4639]"
                    >
                        At{" "}
                        <span className="font-semibold text-[#22130c]">
                            Driksha Infotech
                        </span>
                        , we harness cutting-edge technologies to bring
                        your ideas to life.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-5 max-w-xl text-lg leading-9 text-[#5d4639]"
                    >
                        Whether it’s bespoke software,
                        state-of-the-art websites, or
                        next-gen mobile apps, our team of experts
                        is committed to delivering solutions that
                        drive success.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mt-5 max-w-xl text-lg leading-9 text-[#5d4639]"
                    >
                        Join us on a journey where creativity meets
                        technology, and let’s make your digital dreams
                        a reality.
                    </motion.p>

                    <p className="mt-6 text-lg font-semibold italic text-orange-500">
                        Always ahead of the curve, always on your side.
                    </p>

                    <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

                        {[
                            {
                                value: "90",
                                label: "Working\nHours",
                            },
                            {
                                value: "6",
                                label: "Completed\nProjects",
                            },
                            {
                                value: "5",
                                label: "Happy\nClients",
                            },
                            {
                                value: "1",
                                label: "Awards\nReceived",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: i * 0.15,
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -6,
                                    scale: 1.03,
                                }}
                                className="rounded-[28px] border border-[#f3e8df] bg-white/80 p-5 text-center shadow-[0_12px_35px_rgba(0,0,0,0.04)] transition"
                            >
                                <h3 className="text-3xl font-black text-orange-500">
                                    {item.value}
                                </h3>

                                <p className="mt-2 whitespace-pre-line text-sm font-medium text-[#5b4335]">
                                    {item.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT SIDE IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative flex items-center justify-center"
                >
                    <div className="absolute right-10 top-8 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-orange-100 to-[#fff3ea] blur-[70px] opacity-70"></div>

                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative h-[520px] w-[620px] overflow-hidden bg-white shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-[#f1e6dd] rounded-l-[40px] rounded-r-[180px]"
                    >
                        {/* Image */}
                        <img
                            src={teamImg}
                            alt="team"
                            className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf7]/15 to-transparent"></div>
                    </motion.div>

                    <div className="absolute -bottom-8 right-6 h-24 w-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-200 opacity-80"></div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;