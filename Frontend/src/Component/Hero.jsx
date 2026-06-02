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
        <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-28 pb-14 sm:pt-32 md:px-8 md:pt-36 lg:px-12 lg:pt-24 lg:pb-16">

                {/* <div className="pt-6 flex justify-center lg:justify-start">
                    <div className="flex items-center space-x-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/5">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        <span className="text-[10px] md:text-xs uppercase tracking-widest text-white">
                            Empowering Your
                        </span>
                        <span className="text-[10px] md:text-xs uppercase tracking-widest text-orange-400">
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
                        <div className="flex items-center space-x-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/5 shadow-[0_0_15px_rgba(255,140,50,0.1)]">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                            <span className="text-[10px] md:text-xs text-whiteS uppercase tracking-widest">
                                Empowering Your
                            </span>
                            <span className="text-[10px] md:text-xs text-orange-400 uppercase tracking-widest">
                                Digital Transformation
                            </span>
                        </div>
                    </motion.div> */}

                    <motion.h1 variants={fadeInUp} className="relative font-semibold text-3xl leading-[1.15] tracking-tight text-white sm:text-4xl md:text-4xl lg:text-6xl">
                        We Build <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-600 drop-shadow-[0_2px_10px_rgba(255,140,50,0.2)]">
                            Smart
                        </span> Solutions <br />

                        For A <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-600 drop-shadow-[0_2px_10px_rgba(255,140,50,0.2)]">
                            Digital Future
                        </span>
                        <div className="absolute mt-5 left-0 hidden h-[2px] w-full overflow-hidden rounded-full bg-zinc-900 lg:block w-full h-[2px] bg-zinc-900 overflow-hidden rounded-full">
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: '-100%' }}
                                transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                                className="w-[60%] h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_10px_#ff8c32]"
                            />
                        </div>
                    </motion.h1>

                    

                    {/* <motion.p variants={fadeInUp} className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                        Driksha Infotech Private Limited delivers innovative software, web, and security solutions
                        that help businesses grow, automate, and lead securely in an ultra-connected digital realm.
                    </motion.p> */}

                    <motion.div variants={fadeInUp} className="flex flex-col gap-3 pt-10 sm:flex-row sm:justify-center lg:justify-start">
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
                    className="relative flex min-h-[300px] items-center justify-center bg-contain bg-center bg-no-repeat sm:min-h-[380px] md:min-h-[450px] lg:col-span-6 lg:min-h-[560px]"
                    style={{
                        backgroundImage: `url(${laptopImg})`,
                    }}
                >
                    <div className="absolute w-[80%] h-[80%] border border-orange-500/10 rounded-full [transform:rotateX(75deg)] bottom-0 bg-gradient-to-t from-orange-500/10 to-transparent blur-sm pointer-events-none " />

                </div>
            </motion.div>

            {/* Bottom Stats Banner - Exact Match for Screenshot 2026-05-28 105913.jpg */}
            {/* <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="w-full bg-zinc-950/20 backdrop-blur-md border border-orange-500/30 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            >
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 text-center sm:text-left pb-6 lg:pb-0 w-full lg:w-auto shrink-0">
                    <div>
                        <h4 className="text-orange-500 text-[16px] tracking-wider">Trusted By</h4>
                        <p className="text-zinc-200 text-sm font-light mt-1 leading-tight max-w-[160px]">
                            Businesses & Government Organizations
                        </p>
                    </div>

                    <div className="hidden sm:block h-10 w-[1px] bg-orange-500" />

                    <div className="flex items-center space-x-6 opacity-40 grayscale brightness-200 mix-blend-screen">
                        <img src={Govt1} alt="Government Org Seal" className="w-10 h-10 object-contain" />
                        <img src={Govt1} alt="Government Org Seal" className="w-10 h-10 object-contain" />
                        <img src={Govt1} alt="Government Org Seal" className="w-10 h-10 object-contain" />
                    </div>
                </div>

                
                <div className="hidden lg:block h-12 w-[1px] bg-orange-500" />

                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto flex-1 justify-items-center">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className={`flex items-center gap-4 px-4 py-2 w-full justify-center lg:justify-start`}
                        >
                            
                            <div className="w-12 h-12 rounded-full border border-orange-500/40 flex items-center justify-center flex-shrink-0 bg-black/40 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                <stat.icon className="text-orange-500 text-lg" />
                            </div>

                            
                            <div className="flex flex-col min-w-0">
                                <span className="text-white text-2xl font-extrabold tracking-tight leading-none">
                                    {stat.val}
                                </span>
                                <span className="text-zinc-400 text-[10px] font-medium tracking-wide mt-1.5 whitespace-nowrap">
                                    {stat.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div> */}
        </section>
    );
}
export default Hero;