import React from 'react';
import { motion } from 'framer-motion';
import {
    FaRocket, FaPlay,
    FaHeadset, FaAward, FaUsers, FaBriefcase
} from 'react-icons/fa';

// import Govt1 from "../assets/govt1.png";
import laptopImg from "../assets/hero.png";

// Animation Configurations
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const floatAnimation = (delay = 0) => ({
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay
        }
    }
});

// Reusable Service Badge Card
const FloatingCard = ({ icon: Icon, title, delay }) => (
    <motion.div
        variants={floatAnimation(delay)}
        animate="animate"
        whileHover={{
            scale: 1.05,
            boxShadow: '0 0 20px rgba(251,191,36,0.35)',
            borderColor: 'rgba(251,191,36,0.55)'
        }}
        className="flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-xl bg-black/40 border border-yellow-400/20 backdrop-blur-md cursor-pointer transition-all p-3 text-center group"
    >
        <div className="p-3 rounded-lg bg-yellow-400/10 text-white group-hover:text-yellow-300 transition-colors duration-300 mb-2">
            <Icon className="text-xl md:text-2xl" />
        </div>

        <span className="text-[10px] md:text-xs font-semibold text-gray-300 tracking-wide uppercase leading-tight">
            {title}
        </span>
    </motion.div>
);

function Hero() {
    const stats = [
        { icon: FaBriefcase, val: "50+", label: "Projects Completed" },
        { icon: FaUsers, val: "20+", label: "Happy Clients" },
        { icon: FaAward, val: "5+", label: "Years of Experience" },
        { icon: FaHeadset, val: "24/7", label: "Technical Support" }
    ];

    return (
        <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-28 pb-14 sm:pt-32 md:px-8 md:pt-36 lg:px-12 lg:pt-24 lg:pb-16">

            {/* <div className="pt-6 flex justify-center lg:justify-start">
                <div className="flex items-center space-x-2 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/5">
                    <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-white">
                        Empowering Your
                    </span>
                    <span className="text-[10px] md:text-xs uppercase tracking-widest bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                        Digital Transformation
                    </span>
                </div>
            </div> */}

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 items-center gap-12 pt-6 md:gap-14 lg:grid-cols-12 lg:gap-8 lg:pt-8"
            >

                {/* Left Content Side */}
                <div className="space-y-5 text-center lg:col-span-6 lg:text-left">

                    {/* <motion.div variants={fadeInUp} className="inline-block">
                        <div className="flex items-center space-x-2 px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/5 shadow-[0_0_15px_rgba(251,191,36,0.12)]">
                            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                            <span className="text-[10px] md:text-xs text-white uppercase tracking-widest">
                                Empowering Your
                            </span>
                            <span className="text-[10px] md:text-xs uppercase tracking-widest bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                Digital Transformation
                            </span>
                        </div>
                    </motion.div> */}

                    <motion.h1
                        variants={fadeInUp}
                        className="relative font-semibold text-3xl leading-[1.15] tracking-tight text-white sm:text-4xl md:text-4xl lg:text-6xl"
                    >
                        We Build <br />

                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 drop-shadow-[0_2px_10px_rgba(251,191,36,0.25)]">
                            Smart
                        </span>{" "}
                        Solutions <br />

                        For A{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 drop-shadow-[0_2px_10px_rgba(251,191,36,0.25)]">
                            Digital Future
                        </span>

                        <div className="absolute mt-5 left-0 hidden h-[2px] w-full overflow-hidden rounded-full bg-zinc-900 lg:block w-full h-[2px] bg-zinc-900 overflow-hidden rounded-full">
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: '-100%' }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                    ease: 'linear'
                                }}
                                className="w-[60%] h-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-[0_0_10px_#facc15]"
                            />
                        </div>
                    </motion.h1>

                    {/* <motion.p variants={fadeInUp} className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                        Driksha Infotech Private Limited delivers innovative software, web, and security solutions
                        that help businesses grow, automate, and lead securely in an ultra-connected digital realm.
                    </motion.p> */}

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col gap-3 pt-10 sm:flex-row sm:justify-center lg:justify-start"
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.03,
                                boxShadow: '0 0 25px rgba(251,191,36,0.45)'
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 rounded-md bg-gradient-to-r from-orange-400 to-yellow-400 text-black text-md tracking-wide shadow-[0_4px_15px_rgba(251,191,36,0.28)] transition-all"
                        >
                            <FaRocket className="text-2xl" />
                            <span>Get Free Consultation</span>
                        </motion.button>

                        <motion.button
                            whileHover={{
                                scale: 1.03,
                                backgroundColor: 'rgba(251,191,36,0.05)',
                                borderColor: 'rgba(251,191,36,0.55)'
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 rounded-md border-2 border-yellow-400 bg-transparent text-white text-md tracking-wide transition-all"
                        >
                            <FaPlay className="text-xl text-yellow-300" />
                            <span>View Our Services</span>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Right Graphical Visual Side */}
                <div
                    className="relative flex min-h-[300px] items-center justify-center bg-contain bg-center bg-no-repeat sm:min-h-[380px] md:min-h-[450px] lg:col-span-6 lg:min-h-[560px]"
                    style={{
                        backgroundImage: `url(${laptopImg})`,
                    }}
                >
                    <div className="absolute w-[80%] h-[80%] border border-yellow-400/10 rounded-full [transform:rotateX(75deg)] bottom-0 bg-gradient-to-t from-yellow-400/10 to-transparent blur-sm pointer-events-none" />
                </div>
            </motion.div>

            {/* Bottom Stats Banner - Exact Match for Screenshot 2026-05-28 105913.jpg */}
            {/* KEEPING COMMENTED CODE UNCHANGED */}
        </section>
    );
}

export default Hero;