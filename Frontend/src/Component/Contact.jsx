import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapPin, FaPhone, FaEnvelope, FaGlobe, FaClock, 
  FaUser, FaFileLines, FaPen, FaPaperPlane, FaArrowRight,
  FaLinkedin, FaFacebook, FaInstagram, FaXTwitter 
} from 'react-icons/fa6';
import { BiSupport } from 'react-icons/bi';

export default function ContactSection() {
  // Animation Variants for staggered load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 60, damping: 15 } 
    }
  };

  return (
    <div className="relative min-h-screen bg-[#000000] text-white font-sans overflow-hidden px-4 py-16 sm:px-6 lg:px-8 selection:bg-[#E06A28] selection:text-white">
      
      {/* --- Ambient Glowing Textures --- */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#E06A28]/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-12 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#F17A37]/10 to-transparent blur-[100px] pointer-events-none" />
      
      {/* Decorative World Map Dot Overlay */}
      <div className="absolute top-10 left-10 opacity-10 pointer-events-none hidden lg:block">
        <svg width="240" height="140" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="2" fill="#E06A28" /><circle cx="40" cy="20" r="2" fill="#E06A28" /><circle cx="60" cy="40" r="2" fill="#E06A28" />
          <circle cx="30" cy="50" r="2" fill="#E06A28" /><circle cx="80" cy="20" r="2" fill="#E06A28" /><circle cx="100" cy="60" r="2" fill="#E06A28" />
          <circle cx="120" cy="30" r="2" fill="#E06A28" /><circle cx="140" cy="80" r="2" fill="#E06A28" /><circle cx="180" cy="40" r="2" fill="#E06A28" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16 relative">
          <span className="text-[#E06A28] uppercase tracking-widest text-xs font-semibold block mb-3">
            — Get In Touch —
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Let’s Build Something <span className="text-[#F17A37] drop-shadow-[0_0_15px_rgba(241,122,55,0.3)]">Amazing Together!</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed">
            Have a project in mind or need expert advice? We're here to help you 
            turn your ideas into powerful digital solutions.
          </p>

          {/* Floating Top-Right Icons decoration */}
          <div className="absolute right-4 top-0 hidden xl:flex items-center space-x-4 opacity-40">
            <div className="border border-gray-800 p-2 rounded-full"><FaEnvelope size={14} className="text-[#E06A28]" /></div>
            <div className="border border-gray-800 p-2 rounded-full"><FaPhone size={14} className="text-[#E06A28]" /></div>
            <div className="border border-gray-800 p-2 rounded-full"><BiSupport size={14} className="text-[#E06A28]" /></div>
          </div>
        </div>

        {/* --- Main 3-Column Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8"
        >
          
          {/* Column 1: Our Office Details */}
          <motion.div variants={itemVariants} className="bg-[#0D0D0E] border border-gray-900 rounded-xl p-8 flex flex-col justify-between shadow-2xl backdrop-blur-sm">
            <div className="space-y-6">
              
              {/* Row 1: Office */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 border border-[#E06A28]/40 p-3 rounded-full bg-[#E06A28]/5 text-[#E06A28]">
                  <FaMapPin size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base">Our Office</h4>
                  <p className="text-gray-400 text-sm mt-0.5">Jehanabad, Bihar, India - 804408</p>
                </div>
              </div>

              {/* Row 2: Call Us */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 border border-[#E06A28]/40 p-3 rounded-full bg-[#E06A28]/5 text-[#E06A28]">
                  <FaPhone size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base">Call Us</h4>
                  <p className="text-[#F17A37] font-medium text-sm mt-0.5">+91 620 382 1917</p>
                </div>
              </div>

              {/* Row 3: Email Us */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 border border-[#E06A28]/40 p-3 rounded-full bg-[#E06A28]/5 text-[#E06A28]">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base">Email Us</h4>
                  <p className="text-[#F17A37] font-medium text-sm mt-0.5">info@drikshainfotech.com</p>
                </div>
              </div>

              {/* Row 4: Website */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 border border-[#E06A28]/40 p-3 rounded-full bg-[#E06A28]/5 text-[#E06A28]">
                  <FaGlobe size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base">Visit Our Website</h4>
                  <p className="text-[#F17A37] font-medium text-sm mt-0.5">www.drikshainfotech.com</p>
                </div>
              </div>

              {/* Row 5: Working Hours */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 border border-[#E06A28]/40 p-3 rounded-full bg-[#E06A28]/5 text-[#E06A28]">
                  <FaClock size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base">Working Hours</h4>
                  <p className="text-gray-400 text-sm mt-0.5">Mon - Sat : 09:00 AM - 06:00 PM</p>
                  <p className="text-gray-400 text-sm">Sunday: <span className="text-[#F17A37]">Closed</span></p>
                </div>
              </div>
            </div>

            {/* Social Media Footer */}
            <div className="mt-8 pt-6 border-t border-gray-900/50 flex items-center space-x-4">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Follow Us</span>
              <div className="flex space-x-2">
                {[FaLinkedin, FaFacebook, FaInstagram, FaXTwitter].map((Icon, idx) => (
                  <motion.a 
                    whileHover={{ scale: 1.1, borderColor: '#F17A37' }}
                    key={idx} 
                    href="#" 
                    className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#F17A37] transition-colors"
                  >
                    <Icon size={14} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 2: Send Us a Message Form */}
          <motion.div variants={itemVariants} className="bg-[#0D0D0E] border border-gray-900 rounded-xl p-8 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 bg-[#E06A28]/10 text-[#E06A28] rounded-lg">
                <FaPaperPlane size={14} className="transform -rotate-12" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Send Us a Message</h3>
                <p className="text-gray-400 text-xs">Fill out the form and our team will get back to you shortly.</p>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <FaUser size={14} className="absolute left-3 top-4 text-gray-500" />
                  <input type="text" placeholder="Your Name" className="w-full bg-black/40 border border-gray-900 focus:border-[#E06A28]/60 focus:outline-none rounded-lg pl-10 pr-4 py-3 text-sm text-gray-200 transition-colors placeholder-gray-600" />
                </div>
                <div className="relative">
                  <FaEnvelope size={14} className="absolute left-3 top-4 text-gray-500" />
                  <input type="email" placeholder="Your Email" className="w-full bg-black/40 border border-gray-900 focus:border-[#E06A28]/60 focus:outline-none rounded-lg pl-10 pr-4 py-3 text-sm text-gray-200 transition-colors placeholder-gray-600" />
                </div>
              </div>

              <div className="relative">
                <FaPhone size={14} className="absolute left-3 top-4 text-gray-500" />
                <input type="text" placeholder="Phone Number" className="w-full bg-black/40 border border-gray-900 focus:border-[#E06A28]/60 focus:outline-none rounded-lg pl-10 pr-4 py-3 text-sm text-gray-200 transition-colors placeholder-gray-600" />
              </div>

              <div className="relative">
                <FaFileLines size={14} size={14} className="absolute left-3 top-4 text-gray-500" />
                <input type="text" placeholder="Subject" className="w-full bg-black/40 border border-gray-900 focus:border-[#E06A28]/60 focus:outline-none rounded-lg pl-10 pr-4 py-3 text-sm text-gray-200 transition-colors placeholder-gray-600" />
              </div>

              <div className="relative">
                <FaPen size={14} className="absolute left-3 top-4 text-gray-500" />
                <textarea rows="4" placeholder="Your Message" className="w-full bg-black/40 border border-gray-900 focus:border-[#E06A28]/60 focus:outline-none rounded-lg pl-10 pr-4 py-3 text-sm text-gray-200 transition-colors placeholder-gray-600 resize-none" />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#E06A28] to-[#F17A37] text-white font-medium text-sm rounded-lg flex items-center justify-center space-x-2 shadow-[0_4px_20px_rgba(224,106,40,0.25)] transition-all"
              >
                <FaPaperPlane size={12} className="transform -rotate-12" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Column 3: Interactive Visual Map UI */}
          <motion.div variants={itemVariants} className="bg-[#0D0D0E] border border-gray-900 rounded-xl overflow-hidden relative shadow-2xl h-[450px] lg:h-auto min-h-[380px]">
            
            {/* Custom stylized Dark Map Graphic Background */}
            <div className="absolute inset-0 bg-[#070708] opacity-90">
              <div className="absolute inset-0 border-t border-b border-gray-900/50 my-auto h-24 transform -rotate-12" />
              <div className="absolute inset-0 border-l border-r border-gray-900/50 mx-auto w-32 transform -rotate-12" />
              
              <span className="absolute bottom-20 right-16 text-[10px] text-gray-600 font-mono tracking-wider">NH 110</span>
              <span className="absolute top-28 right-8 text-[11px] text-gray-500 font-bold tracking-tight">Jehanabad<br/><span className="text-[9px] font-normal text-gray-600">जहानाबाद</span></span>
              <span className="absolute bottom-16 left-24 text-[9px] text-gray-600">Jehanabad Bypass Rd</span>
            </div>

            {/* Floating Top Info Card Badge Overlay */}
            <div className="absolute top-4 left-4 right-4 bg-[#0a0a0b]/95 border border-gray-800 p-4 rounded-lg z-20 backdrop-blur-md">
              <div className="flex items-start space-x-3">
                <FaMapPin size={16} className="text-[#F17A37] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-white tracking-wide">Driksha Infotech Private Limited</h4>
                  <p className="text-[11px] text-gray-400 mt-0.5">Jehanabad, Bihar, India - 804408</p>
                  <a href="#" className="inline-flex items-center text-[11px] text-[#F17A37] font-semibold mt-2 hover:underline">
                    Get Directions <FaArrowRight size={10} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Glowing Map Pin & Target Pulsing Concentric Circles */}
            <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
              <div className="absolute w-24 h-24 bg-[#F17A37]/5 border border-[#F17A37]/20 rounded-full animate-ping" />
              <div className="absolute w-16 h-16 bg-[#F17A37]/10 border border-[#F17A37]/30 rounded-full animate-pulse" />
              <div className="absolute w-8 h-8 bg-[#F17A37]/20 border border-[#F17A37]/40 rounded-full" />
              
              {/* Center Pin Marker */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="relative bg-gradient-to-b from-[#F17A37] to-[#E06A28] text-white p-2.5 rounded-full shadow-[0_0_20px_rgba(241,122,55,0.6)]"
              >
                <FaMapPin size={16} />
                <div className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- Bottom Footer: Newsletter Subscription Bar --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-[#0D0D0E] border border-gray-900 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute -left-10 top-0 bottom-0 w-32 bg-gradient-to-r from-[#E06A28]/5 to-transparent blur-md pointer-events-none" />

          {/* Left Text Detail */}
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="p-3 bg-[#E06A28]/5 border border-[#E06A28]/20 text-[#E06A28] rounded-full hidden sm:block shadow-[0_0_15px_rgba(224,106,40,0.1)]">
              <FaEnvelope size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Subscribe to Our <span className="text-[#F17A37]">Newsletter</span>
              </h3>
              <p className="text-gray-400 text-xs mt-0.5">Stay updated with our latest news, services and offers.</p>
            </div>
          </div>

          {/* Right Input and CTA Form */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto relative z-10">
            <div className="relative w-full sm:w-64">
              <FaEnvelope size={14} className="absolute left-3 top-4 text-gray-500" />
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-black/50 border border-gray-900 focus:border-[#E06A28]/60 focus:outline-none rounded-lg pl-9 pr-4 py-3 text-xs text-gray-200 transition-colors placeholder-gray-600" 
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-[#E06A28] to-[#F17A37] text-white font-medium text-xs rounded-lg flex items-center justify-center space-x-2 transition-all whitespace-nowrap"
            >
              <span>Subscribe Now</span>
              <FaArrowRight size={12} />
            </motion.button>
          </div>

          {/* Minimal vector background airplane path asset accent */}
          <div className="absolute right-4 bottom-2 opacity-10 pointer-events-none hidden lg:block">
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 35 Q 25 15, 55 5" stroke="#E06A28" strokeWidth="1" strokeDasharray="3 3"/>
              <polygon points="55,5 50,10 52,7 48,6" fill="#E06A28"/>
            </svg>
          </div>
        </motion.div>

      </div>
    </div>
  );
}