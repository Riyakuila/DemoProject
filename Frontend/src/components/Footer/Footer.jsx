import { motion } from "framer-motion";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaGoogle,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaArrowRight,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo.png";

function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-[#ece1d7] bg-gradient-to-br from-[#fffaf7] via-[#fffdfb] to-[#fdf2e8] pt-20">

            {/* Background */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl opacity-70"></div>
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-100/30 blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                {/* TOP DARK SECTION */}
                <div className="mb-12 rounded-[34px] bg-[#16110d] px-8 py-10 lg:px-12">

                    <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

                        <div>
                            <img
                                src={logo}
                                alt="Driksha Logo"
                                className="h-20 w-auto object-contain"
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="max-w-xl"
                        >
                            <p className="text-2xl font-medium leading-10 text-[#f5f0ea]">
                                Stay ahead with innovative software
                                solutions and digital experiences
                                built for growth.
                            </p>

                            <div className="mt-4 h-[2px] w-20 rounded-full bg-gradient-to-r from-orange-500 to-orange-300"></div>
                        </motion.div>

                    </div>
                </div>

                <div className="my-12 h-[1px] bg-[#ece1d7]"></div>

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    <div>
                        <h3 className="mb-6 text-xl font-bold text-[#23120c]">
                            About Us
                        </h3>

                        <ul className="space-y-4 text-[#665247]">
                            {[
                                "Home",
                                "About Us",
                                "Our Services",
                                "Terms & Condition",
                                "Privacy Policy",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="cursor-pointer transition hover:translate-x-1 hover:text-orange-500"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-xl font-bold text-[#23120c]">
                            Useful Links
                        </h3>

                        <ul className="space-y-4 text-[#665247]">
                            {[
                                "Why Choose Us",
                                "Team",
                                "Career",
                                "Contact",
                                "FAQ",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="cursor-pointer transition hover:translate-x-1 hover:text-orange-500"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-xl font-bold text-[#23120c]">
                            Contact Us
                        </h3>

                        <div className="space-y-5 text-[#665247]">

                            <div className="flex gap-3">
                                <FaMapMarkerAlt className="mt-1 text-orange-500" />
                                <p>
                                    Soiya Ghat Road, Near VT School
                                    Mallachak, Jehanabad
                                    Bihar, India
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-orange-500" />
                                <p>+91 6203821917</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-orange-500" />
                                <p>info@drikshainfotech.com</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-6 text-xl font-bold text-[#23120c]">
                            Stay Updated
                        </h3>

                        <p className="leading-8 text-[#665247]">
                            Subscribe for the latest insights,
                            industry trends and updates on our
                            software solutions.
                        </p>

                        <div className="mt-6 flex overflow-hidden rounded-2xl border border-[#eaded3] bg-white shadow-sm">
                            <input type="email" placeholder="Your Email" className="w-full px-4 py-4 text-[#23120c] placeholder:text-[#8b7567] outline-none" />
                            <button className="min-w-[150px] bg-gradient-to-r from-orange-600 to-orange-400 px-6 font-medium text-white transition hover:opacity-90">
                                Subscribe
                            </button>
                        </div>

                        <div className="mt-6 flex gap-3">

                            {[
                                FaFacebookF,
                                FaInstagram,
                                FaLinkedinIn,
                                FaXTwitter,
                                FaGoogle,
                            ].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{
                                        y: -3,
                                        scale: 1.05,
                                    }}
                                    className="
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-xl
                                            border
                                          border-[#eaded3]
                                          bg-white
                                          text-[#4f3a30]
                                            shadow-sm
                                            transition
                                          hover:text-orange-500
                                        "
                                >
                                    <Icon />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="my-10 h-[1px] bg-[#ece1d7]"></div>

                {/* Bottom */}
                <div className="flex flex-col gap-4 pb-8 text-sm text-[#756155] lg:flex-row lg:items-center lg:justify-between">

                    <p>
                        Copyright © Driksha Infotech Private Limited.
                        All Rights Reserved.
                    </p>

                    <div className="flex gap-6">
                        <p className="cursor-pointer hover:text-orange-500">
                            Terms & Conditions
                        </p>

                        <p className="cursor-pointer hover:text-orange-500">
                            Privacy Policy
                        </p>

                        <p className="cursor-pointer hover:text-orange-500">
                            Cookies
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;