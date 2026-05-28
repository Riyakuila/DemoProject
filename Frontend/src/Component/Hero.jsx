import React from 'react';
import { motion } from 'framer-motion';
import {
    FaRocket, FaPlay, FaGlobe, FaCode, FaMobileAlt,
    FaShieldAlt, FaCogs, FaChartBar, FaHeadset, FaAward, FaUsers, FaBriefcase
} from 'react-icons/fa';

import Govt1 from "../assets/govt1.png";
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
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,140,50,0.3)', borderColor: 'rgba(255,140,50,0.6)' }}
        className="flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-xl bg-black/40 border border-orange-500/20 backdrop-blur-md cursor-pointer transition-all p-3 text-center group"
    >
        <div className="p-3 rounded-lg bg-orange-500/10 text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
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
        <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16 flex flex-col justify-center min-h-screen">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
            >

                {/* Left Content Side */}
                <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                    <motion.div variants={fadeInUp} className="inline-block">
                        <div className="flex items-center space-x-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/5 shadow-[0_0_15px_rgba(255,140,50,0.1)]">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                            <span className="text-[10px] md:text-xs text-whiteS uppercase tracking-widest">
                                Empowering Your
                            </span>
                            <span className="text-[10px] md:text-xs text-orange-400 uppercase tracking-widest">
                                Digital Transformation
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="font-semibold text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
                        We Build <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-600 drop-shadow-[0_2px_10px_rgba(255,140,50,0.2)]">
                            Smart
                        </span> Solutions <br />

                        For A <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-600 drop-shadow-[0_2px_10px_rgba(255,140,50,0.2)]">
                            Digital Future
                        </span>
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-zinc-900 overflow-hidden rounded-full">
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: '-100%' }}
                                transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                                className="w-[60%] h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_10px_#ff8c32]"
                            />
                        </div>
                    </motion.h1>

                    <motion.div
                        variants={fadeInUp}
                        className="relative w-[240px] sm:w-[320px] h-[2px] bg-zinc-800 rounded-full overflow-hidden my-6"
                    >
                        {/* Base Glow */}
                        <div className="absolute inset-0 bg-orange-300 rounded-full"></div>

                        {/* Moving Glow */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "220%" }}
                            transition={{
                                duration: 2.8,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-transparent via-orange-600 to-transparent shadow-[0_0_14px_#ff8c32]"
                        />
                    </motion.div>

                    <motion.p variants={fadeInUp} className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                        Driksha Infotech Private Limited delivers innovative software, web, and security solutions
                        that help businesses grow, automate, and lead securely in an ultra-connected digital realm.
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                        <motion.button
                            whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(255,140,50,0.5)' }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 rounded-md bg-gradient-to-r from-orange-500 to-amber-600 text-white text-md tracking-wide shadow-[0_4px_15px_rgba(255,140,50,0.3)] transition-all"
                        >
                            <FaRocket className="text-2xl" />
                            <span>Get Free Consultation</span>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,140,50,0.05)', borderColor: 'rgba(255,140,50,0.6)' }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 rounded-md border-2 border-orange-500 bg-transparent text-white text-md tracking-wide transition-all"
                        >
                            <FaPlay className="text-xl text-orange-500" />
                            <span>View Our Services</span>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Right Graphical Visual Side */}
                <div
                    className="lg:col-span-6 flex flex-col items-center justify-center relative lg:mt-0 min-h-[600px] bg-center bg-no-repeat bg-contain"
                    style={{
                        backgroundImage: `url(${laptopImg})`,
                    }}
                >
                    <div className="absolute w-[80%] h-[80%] border border-orange-500/10 rounded-full [transform:rotateX(75deg)] bottom-0 bg-gradient-to-t from-orange-500/10 to-transparent blur-sm pointer-events-none " />

                    <div className="flex items-center justify-between w-full max-w-2xl gap-4 z-10">
                        <div className="flex flex-col space-y-4 md:space-y-6">
                            <FloatingCard icon={FaGlobe} title="Web Development" delay={0} />
                            <FloatingCard icon={FaCode} title="Software Dev" delay={0.4} />
                            <FloatingCard icon={FaMobileAlt} title="Mobile Apps" delay={0.2} />
                        </div>

                        <div className="flex flex-col space-y-4 md:space-y-6">
                            <FloatingCard icon={FaShieldAlt} title="Cyber Security" delay={0.3} />
                            <FloatingCard icon={FaCogs} title="CCTV Systems" delay={0.1} />
                            <FloatingCard icon={FaChartBar} title="Digital Marketing" delay={0.5} />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Bottom Stats Banner */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="w-full bg-black/40 backdrop-blur-md border border-orange-500 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 mt-6 lg:mt-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left border-b lg:border-b-0 lg:border-r border-orange-500/10 pb-6 lg:pb-0 lg:pr-8 w-full lg:w-auto">
                    <div>
                        <h4 className="text-orange-500 font-bold uppercase text-xs tracking-wider">Trusted By</h4>
                        <p className="text-gray-400 text-sm font-medium mt-1 leading-tight max-w-[180px]">
                            Businesses & Government Organizations
                        </p>
                    </div>
                    <div className="flex space-x-3 opacity-40 mix-blend-luminosity grayscale">
                        <div className="w-20 h-20 rounded-full border border-white/40 flex items-center justify-center text-[10px] font-bold text-white">
                            <img src={Govt1} alt="logo" className="w-48 lg:w-64 object-contain" />
                        </div>
                        <div className="w-20 h-20 rounded-full border border-white/40 flex items-center justify-center text-[10px] font-bold text-white">
                            <img src={Govt1} alt="logo" className="w-48 lg:w-64 object-contain" />
                        </div>
                        <div className="w-20 h-20 rounded-full border border-white/40 flex items-center justify-center text-[10px] font-bold text-white">
                            <img src={Govt1} alt="logo" className="w-48 lg:w-64 object-contain" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full lg:w-auto flex-1 justify-items-center">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left group cursor-pointer">
                            <div className="flex items-center space-x-3">
                                <stat.icon className="text-orange-500/70 group-hover:text-orange-400 transition-colors text-lg" />
                                <span className="text-2xl lg:text-3xl font-black text-white tracking-tight group-hover:scale-105 transition-transform duration-300">
                                    {stat.val}
                                </span>
                            </div>
                            <span className="text-gray-400 text-[11px] font-medium tracking-wide mt-1">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
export default Hero;