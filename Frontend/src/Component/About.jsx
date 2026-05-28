import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, FaCheckCircle, FaCalendarCheck, FaRocket, FaQuoteLeft,
  FaBullseye, FaEye, FaGem, FaUserFriends
} from 'react-icons/fa';

// Import local assets exactly as needed
import aboutBgImg from '../assets/hero.png';
import teamShowcaseImg from '../assets/abtTeam.png';

// Framer Motion Variants for Staggered Viewport Entrances
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

const imageFrameVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function About() {
    const corporatePillars = [
        {
            icon: FaBullseye,
            title: "Our Mission",
            description: "To deliver innovative digital solutions that help businesses succeed in the digital world."
        },
        {
            icon: FaEye,
            title: "Our Vision",
            description: "To become a trusted technology partner for startups and businesses worldwide."
        },
        {
            icon: FaGem,
            title: "Our Values",
            description: "Innovation, Transparency, Quality, and Client Success are at the core of our work."
        },
        {
            icon: FaUserFriends,
            title: "Our Approach",
            description: "We listen, we plan, we build, and we support – every step of the way."
        }
    ];

    return (
        <section
            id="about"
            className="relative min-h-screen w-full bg-black py-24 px-6 md:px-12 lg:px-20 overflow-hidden flex items-center justify-center z-10"
            style={{ backgroundImage: `url(${aboutBgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Dynamic Futuristic Dark Ambient Overlays & Laser Glow Accents */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black pointer-events-none z-0" />
            <div className="absolute top-[25%] left-[-5%] w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[160px] pointer-events-none" />

            {/* Main Structural Matrix Container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center"
            >

                {/* --- LEFT COLUMN: TYPOGRAPHY, CORE COPY & REGISTRATION MATRICES --- */}
                <div className="lg:col-span-6 space-y-8 flex flex-col text-left">

                    {/* Top Pill Indicator Badge */}
                    <motion.div variants={fadeInUp} className="self-start">
                        <div className="flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-orange-500/50 bg-orange-500/[0.03] shadow-[0_0_15px_rgba(255,140,50,0.06)]">
                            <FaUsers className="text-orange-500 text-md" />
                            <span className="text-[16px] text-zinc-200 leading-none">
                                About Our Startup
                            </span>
                        </div>
                    </motion.div>

                    {/* Calibrated Precision Mixed Weight Heading */}
                    <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-[52px] tracking-tight leading-[1.15]">
                        <span className="font-semibold text-white block">Building Digital</span>
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 block mt-1 drop-shadow-[0_2px_15px_rgba(249,115,22,0.15)]">
                            Solutions for Tomorrow
                        </span>
                    </motion.h2>

                    {/* Core Descriptive Copy Block */}
                    <motion.p variants={fadeInUp} className="text-white text-md sm:text-base font-light leading-relaxed max-w-xl">
                        We are a passionate team of developers, designers, and problem-solvers
                        on a mission to help businesses grow through modern, scalable, and
                        innovative digital solutions.
                    </motion.p>

                    {/* High Contrast Clean Feature Bullet Checklists */}
                    <motion.ul variants={fadeInUp} className="space-y-4">
                        {[
                            "We build fast, secure and user-friendly digital products.",
                            "We turn your ideas into powerful digital experiences.",
                            "We focus on quality, innovation and long-term growth."
                        ].map((text, idx) => (
                            <li key={idx} className="flex items-start space-x-3 text-zinc-200 text-md font-light tracking-wide">
                                <FaCheckCircle className="text-orange-500 text-base shrink-0 mt-0.5 shadow-[0_0_8px_rgba(249,115,22,0.4)] rounded-full" />
                                <span>{text}</span>
                            </li>
                        ))}
                    </motion.ul>

                    {/* Sleek Low-Opacity Dark Glass Registration Profile Module */}
                    <motion.div
                        variants={fadeInUp}
                        className="w-full max-w-lg rounded-xl bg-zinc-950/40 backdrop-blur-md border border-orange-800 shadow-[0_15px_35px_rgba(0,0,0,0.6)] p-5 flex items-center space-x-6 relative group overflow-hidden"
                    >
                        {/* Top Border Laser Glow Trim */}
                        <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

                        {/* Massive Tech Calendar Accent Vector */}
                        <div className="flex-shrink-0 p-3 rounded-lg bg-orange-500/[0.03] border border-orange-500/10">
                            <FaCalendarCheck className="text-orange-500 text-3xl md:text-4xl filter drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]" />
                        </div>

                        {/* Micro Separation Partition Divider */}
                        <div className="h-12 w-[1px] bg-zinc-900 shrink-0" />

                        {/* Registration Metadata Details */}
                        <div className="flex-1 space-y-1.5 min-w-0">
                            <span className="text-[12px] text-zinc-200 tracking-widest block">
                                Company Registered
                            </span>
                            <span className="text-orange-400 text-xl font-bold tracking-tight block">
                                September 2024
                            </span>
                            <p className="text-zinc-200 text-[12px] font-normal leading-snug">
                                Our company was officially registered in September 2024 and we're just getting started on our journey to create impact.
                            </p>
                        </div>
                    </motion.div>

                </div>

                {/* --- RIGHT COLUMN: SHOWCASE MEDIA FRAMES & ACCENT BADGES --- */}
                <motion.div
                    variants={imageFrameVariants}
                    className="lg:col-span-6 relative flex items-center justify-center mt-10 lg:mt-20"
                >

                    {/* Ambient Inner Shadow Base Backing Mesh */}
                    <div className="absolute inset-4 bg-orange-500/[0.02] rounded-2xl blur-md pointer-events-none" />

                    {/* Premium Laser-Edged Translucent Photo Frame */}
                    <div className="relative w-full max-w-[650px] h-[480px] md:h-[500px] rounded-2xl border border-orange-500 bg-zinc-950 p-2 shadow-[0_30px_70px_rgba(0,0,0,0.8),0_0_50px_rgba(255,140,50,0.05)] overflow-hidden group">

                        {/* Upper and Lower Horizontal Glowing Flare Strips */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent shadow-[0_0_8px_#ff8c32]" />
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent shadow-[0_0_8px_#ff8c32]" />

                        {/* Main Showcase Graphics Asset Layer */}
                        <div
                            className="w-full h-full rounded-xl object-cover grayscale-[20%] brightness-[85%] group-hover:scale-[1.02] transition-transform duration-700"
                            style={{ backgroundImage: `url(${teamShowcaseImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        />

                        {/* Bottom Stack Absolute Translucent Glassmorphic Testimonial Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="absolute bottom-4 left-16 right-16 bg-black/60 backdrop-blur-lg border border-white/20 rounded-xl p-4 flex items-start space-x-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                        >
                            <FaQuoteLeft className="text-orange-500 text-sm shrink-0 mt-1 opacity-80" />
                            <p className="text-zinc-200 text-md md:text-lg font-light leading-relaxed tracking-wide">
                                We may be new, but our commitment is strong, our vision is clear, and our passion drives everything we do.
                            </p>
                        </motion.div>
                    </div>

                    {/* Overlapping Absolute Glowing Hexagon Rocket Propulsion Badge */}
                    <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 90, damping: 12 }}
                        className="absolute -top-6 -right-4 md:-right-6 w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_0_20px_rgba(249,115,22,0.35)] cursor-pointer z-20 group"
                    >
                        {/* Hexagonal Clip Path Wrapper with Premium Orange Trim */}
                        <div className="w-full h-full bg-gradient-to-br from-orange-500 to-amber-600 p-[1.5px] rounded-2xl [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]">
                            <div className="w-full h-full bg-zinc-950 backdrop-blur-md rounded-2xl [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)] flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-orange-500/10 group-hover:to-transparent">
                                <FaRocket className="text-white text-xl md:text-2xl group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-300 filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]" />
                            </div>
                        </div>
                    </motion.div>

                </motion.div>

                

            </motion.div>
        </section>
    );
}