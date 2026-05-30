import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, FaEnvelope, FaGlobe, FaMapPin, 
  FaChevronRight, FaArrowUp 
} from 'react-icons/fa6';

import Logo from '../assets/logo.png';

export default function Footer() {
  
  // Back to top smooth scroll handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
  <footer
    id="contact"
    className="bg-[#000000] border-t border-gray-900/60 text-gray-400 font-sans text-sm selection:bg-[#E06A28] selection:text-white relative"
  >
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* --- Main Sub-Columns Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start pb-10">
          
          {/* Brand/Logo Column */}
          <div className="lg:col-span-3 flex flex-col items-start space-y-3 lg:border-r lg:border-gray-900/60 lg:pr-6 h-full">
            <div className="flex items-center space-x-2">
              {/* Recreated Logo Typography Layout */}
              <img src={Logo} alt="Driksha Infotech Logo" className="w-58 h-auto" />
            </div>
            
            {/* Minimal Sub-line divider layout element from source */}
            <div className="w-full pt-1 flex items-center space-x-2">
              <div className="h-[1px] bg-[#E06A28]/40 w-6" />
              <span className="text-[10px] tracking-[0.25em] font-medium text-gray-500 uppercase whitespace-nowrap">
                Private Limited
              </span>
              <div className="h-[1px] bg-[#E06A28]/40 w-6" />
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 lg:pl-4">
            <h4 className="text-white font-bold text-base mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact Us'].map((link) => (
                <li key={link}>
                  <motion.a 
                    whileHover={{ x: 4, color: '#F17A37' }}
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="flex items-center space-x-2 hover:text-white transition-colors"
                  >
                    <FaChevronRight size={8} className="text-[#E06A28]" />
                    <span>{link}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-base mb-4 tracking-wide">Our Services</h4>
            <ul className="space-y-2.5 text-xs">
              {[
                'Website Development', 
                'Software Development', 
                'Mobile App Development', 
                'CCTV Surveillance', 
                'Cyber Security'
              ].map((service) => (
                <li key={service}>
                  <motion.a 
                    whileHover={{ x: 4, color: '#F17A37' }}
                    href="#" 
                    className="flex items-center space-x-2 hover:text-white transition-colors"
                  >
                    <FaChevronRight size={8} className="text-[#E06A28]" />
                    <span>{service}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Column */}
          <div className="lg:col-span-2 lg:border-r lg:border-gray-900/60 lg:pr-4 h-full">
            <h4 className="text-white font-bold text-base mb-4 tracking-wide">Useful Links</h4>
            <ul className="space-y-2.5 text-xs">
              {['Privacy Policy', 'Terms & Conditions', 'Refund Policy', 'Careers', 'Sitemap'].map((link) => (
                <li key={link}>
                  <motion.a 
                    whileHover={{ x: 4, color: '#F17A37' }}
                    href="#" 
                    className="flex items-center space-x-2 hover:text-white transition-colors"
                  >
                    <FaChevronRight size={8} className="text-[#E06A28]" />
                    <span>{link}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="lg:col-span-3 lg:pl-4 space-y-4 relative">
            <h4 className="text-white font-bold text-base mb-4 tracking-wide">Contact Info</h4>
            <div className="space-y-3 text-xs">
              
              {/* Phone */}
              <div className="flex items-center space-x-3">
                <FaPhone size={12} className="text-[#E06A28] flex-shrink-0" />
                <span className="hover:text-white transition-colors cursor-pointer">+91 620 382 1917</span>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <FaEnvelope size={12} className="text-[#E06A28] flex-shrink-0" />
                <span className="hover:text-white transition-colors cursor-pointer">info@drikshainfotech.com</span>
              </div>

              {/* Web */}
              <div className="flex items-center space-x-3">
                <FaGlobe size={12} className="text-[#E06A28] flex-shrink-0" />
                <span className="text-[#F17A37] hover:underline cursor-pointer">www.drikshainfotech.com</span>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <FaMapPin size={12} className="text-[#E06A28] mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">Jehanabad, Bihar, India - 804408</span>
              </div>

            </div>

            {/* Floating 'Back to Top' Action Trigger */}
            <div className="absolute right-0 bottom-0 md:relative md:right-auto md:bottom-auto md:pt-4 flex justify-end w-full">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, backgroundColor: '#E06A28', borderColor: '#F17A37' }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors shadow-lg shadow-black"
                title="Back to Top"
              >
                <FaArrowUp size={12} />
              </motion.button>
            </div>
          </div>

        </div>

        {/* --- Lower Copyright Legal Bar --- */}
        <div className="border-t border-gray-900/40 pt-6 text-center text-xs text-gray-500 tracking-wide">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-[#E06A28] font-medium">Driksha Infotech Private Limited</span>. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}