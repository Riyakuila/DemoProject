import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Tv, 
  ShoppingCart, 
  LayoutDashboard, 
  Smartphone, 
  Building2, 
  ArrowRight, 
  Shield, 
  Clock, 
  Award, 
  Headphones 
} from 'lucide-react';

export default function OurProjects() {
  const [activeTab, setActiveTab] = useState('All Projects');

  const tabs = [
    'All Projects',
    'Web Applications',
    'Mobile Apps',
    'Software Solutions',
    'Government Projects',
    'CCTV Solutions',
    'E-Commerce'
  ];

  const projects = [
    {
      title: 'School Management System',
      desc: 'Complete solution for schools to manage students, staff, attendance, fees and exams efficiently.',
      icon: <GraduationCap className="w-5 h-5 text-orange-500" />,
      type: 'Web Applications',
      // Render a miniature light-themed dashboard mockup
      mockup: (
        <div className="w-full h-full bg-slate-50 p-3 text-[8px] text-slate-600 flex flex-col gap-2 select-none">
          <div className="flex justify-between items-center border-b pb-1">
            <span className="font-bold text-slate-800">EduDashboard</span>
            <div className="w-4 h-4 rounded-full bg-slate-300" />
          </div>
          <div className="grid grid-cols-4 gap-1">
            <div className="bg-orange-100 p-1 rounded border border-orange-200 text-orange-700 font-bold text-center">
              <div>Students</div><div>1,240</div>
            </div>
            <div className="bg-blue-100 p-1 rounded border border-blue-200 text-blue-700 font-bold text-center">
              <div>Teachers</div><div>134</div>
            </div>
            <div className="bg-purple-100 p-1 rounded border border-purple-200 text-purple-700 font-bold text-center">
              <div>Campuses</div><div>3</div>
            </div>
            <div className="bg-emerald-100 p-1 rounded border border-emerald-200 text-emerald-700 font-bold text-center">
              <div>Attendance</div><div>94%</div>
            </div>
          </div>
          <div className="bg-white p-2 rounded border flex-1 flex flex-col gap-1 justify-end">
            <div className="flex gap-0.5 items-end h-12 pt-2 px-2 border-b">
              {[30, 45, 25, 60, 75, 50, 40, 85, 65, 90].map((h, i) => (
                <div key={i} className="bg-blue-500 w-full rounded-t" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="flex justify-between text-[6px] text-slate-400 pt-1">
              <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'CCTV Monitoring Platform',
      desc: 'Real-time CCTV monitoring system with remote access, alerts and centralized management.',
      icon: <Tv className="w-5 h-5 text-orange-500" />,
      type: 'CCTV Solutions',
      // 3x2 Dark grid layout for video streams
      mockup: (
        <div className="w-full h-full bg-zinc-950 p-2 grid grid-cols-3 grid-rows-2 gap-1 select-none">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-zinc-700 border border-zinc-800 rounded relative flex items-center justify-center text-zinc-700 overflow-hidden">
              <div className="absolute top-1 left-1 bg-red-600 w-1.5 h-1.5 rounded-full animate-pulse" />
              <span className="text-[6px] absolute bottom-1 left-1 text-zinc-400 font-mono">CAM_0{i+1}</span>
              <div className="w-full h-full opacity-20 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:4px_4px]" />
              <div className="absolute w-2 h-2 border border-zinc-700 rounded-full" />
            </div>
          ))}
        </div>
      )
    },
    {
      title: 'E-Commerce Website',
      desc: 'Responsive e-commerce website with secure payments, product management and analytics.',
      icon: <ShoppingCart className="w-5 h-5 text-orange-500" />,
      type: 'E-Commerce',
      // Showcase a fashion store landing page concept
      mockup: (
        <div className="w-full h-full bg-white text-[8px] text-zinc-800 flex flex-col select-none">
          <div className="flex justify-between items-center p-2 border-b">
            <span className="font-black text-amber-700 tracking-wider">ShopCart</span>
            <div className="flex gap-2 text-zinc-400 text-[6px]"><span>New</span><span>Brands</span><span>Sale</span></div>
          </div>
          <div className="m-2 bg-gradient-to-r from-stone-200 to-amber-100 p-2 rounded flex justify-between items-center relative overflow-hidden flex-1">
            <div className="z-10 max-w-[60%]">
              <div className="text-[5px] uppercase font-bold text-amber-800">New Arrivals</div>
              <div className="text-[10px] font-extrabold leading-tight my-0.5">UP TO 50% OFF</div>
              <div className="bg-zinc-900 text-white text-[5px] px-1 py-0.5 inline-block rounded">Shop Now</div>
            </div>
            <div className="w-10 h-14 bg-stone-400 rounded-md shadow-sm border border-white/50" /> 
          </div>
          <div className="px-2 pb-2 grid grid-cols-4 gap-1">
            {['Shoes', 'Boots', 'Bags', 'Watches'].map((item, idx) => (
              <div key={idx} className="bg-zinc-50 border border-zinc-100 p-1 rounded text-center">
                <div className="w-full h-4 bg-zinc-200 rounded-sm mb-1" />
                <span className="text-[5px] text-zinc-500 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: 'ERP Management System',
      desc: 'Powerful ERP solution to manage business operations, HR, inventory, accounts and reporting.',
      icon: <LayoutDashboard className="w-5 h-5 text-orange-500" />,
      type: 'Software Solutions',
      // Analytics & reporting dashboard
      mockup: (
        <div className="w-full h-full bg-slate-50 p-2 text-[7px] text-slate-600 flex flex-col gap-1.5 select-none">
          <div className="flex justify-between items-center border-b pb-1">
            <span className="font-bold text-indigo-900">ERP Dashboard</span>
            <span className="text-[6px] text-slate-400">v4.2.1</span>
          </div>
          <div className="grid grid-cols-3 gap-1 text-center">
            <div className="bg-white border rounded p-1">
              <div className="text-slate-400 text-[5px]">Total Orders</div>
              <div className="font-bold text-slate-800">2,453</div>
            </div>
            <div className="bg-white border rounded p-1">
              <div className="text-slate-400 text-[5px]">Total Sales</div>
              <div className="font-bold text-slate-800">1,782</div>
            </div>
            <div className="bg-white border rounded p-1">
              <div className="text-slate-400 text-[5px]">Revenue</div>
              <div className="font-bold text-emerald-600">$48,221</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1 flex-1">
            <div className="col-span-2 bg-white border rounded p-1 flex flex-col justify-between">
              <span className="font-semibold text-[6px]">Sales Analytics</span>
              <svg className="w-full h-8 text-indigo-500" viewBox="0 0 100 30" fill="none">
                <path d="M0,25 Q15,10 30,18 T60,8 T90,15 T100,5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <div className="bg-white border rounded p-1 flex flex-col items-center justify-center gap-0.5">
              <div className="w-6 h-6 rounded-full border-4 border-indigo-500 border-r-orange-400 animate-spin-slow" />
              <span className="text-[5px] text-center mt-1">Categories</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Fintech Mobile Application',
      desc: 'Secure and user-friendly mobile app for seamless transactions and account management.',
      icon: <Smartphone className="w-5 h-5 text-orange-500" />,
      type: 'Mobile Apps',
      // Dual iOS App screen mockups side-by-side
      mockup: (
        <div className="w-full h-full bg-zinc-900 p-2 flex justify-center gap-2 items-center select-none">
          {/* Screen 1: Wallet */}
          <div className="w-[52px] h-[85px] bg-black border border-zinc-800 rounded-lg p-1 text-[5px] text-zinc-400 flex flex-col gap-1 shadow-md">
            <div className="flex justify-between items-center text-[4px] text-zinc-600">
              <span>9:41</span><div className="w-6 h-1 bg-zinc-800 rounded-full" />
            </div>
            <div className="text-zinc-500 mt-0.5">FinPay</div>
            <div className="text-[7px] font-bold text-white leading-none">$ 4,568.00</div>
            <div className="grid grid-cols-3 gap-0.5 my-0.5">
              <div className="bg-zinc-800 py-0.5 rounded text-center text-white text-[4px]">Send</div>
              <div className="bg-zinc-800 py-0.5 rounded text-center text-white text-[4px]">Receive</div>
              <div className="bg-zinc-800 py-0.5 rounded text-center text-white text-[4px]">More</div>
            </div>
            <div className="flex-1 flex flex-col gap-0.5 mt-0.5">
              <div className="bg-zinc-900 p-0.5 rounded flex justify-between"><span className="text-white">Amazon</span><span>-$14.99</span></div>
              <div className="bg-zinc-900 p-0.5 rounded flex justify-between"><span className="text-white">Spotify</span><span>-$9.99</span></div>
            </div>
          </div>
          {/* Screen 2: Categories */}
          <div className="w-[52px] h-[85px] bg-black border border-zinc-800 rounded-lg p-1 text-[5px] text-zinc-400 flex flex-col gap-1 shadow-md">
            <div className="flex justify-between items-center text-[4px] text-zinc-600">
              <span>9:41</span><div className="w-6 h-1 bg-zinc-800 rounded-full" />
            </div>
            <span className="text-white font-bold">Categories</span>
            <div className="flex flex-col gap-1 flex-1 mt-0.5">
              {['Food & Dining', 'Transport', 'Shopping', 'Bills'].map((cat, idx) => (
                <div key={idx} className="bg-zinc-900 p-1 rounded-sm flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span className="text-[4.5px] text-zinc-300 truncate">{cat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Government Service Portal',
      desc: 'Digital transformation solution for government services and citizen engagement.',
      icon: <Building2 className="w-5 h-5 text-orange-500" />,
      type: 'Government Projects',
      // High-end official portal layout
      mockup: (
        <div className="w-full h-full bg-slate-900 text-white text-[7px] flex flex-col select-none relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-full blur-xl" />
          <div className="flex justify-between items-center p-2 bg-slate-950/60 backdrop-blur-sm border-b border-slate-800">
            <div className="flex items-center gap-0.5 font-bold tracking-tight"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" />GovPortal</div>
            <div className="flex gap-1.5 text-[5px] text-slate-400"><span>Services</span><span>About Us</span><span>Contact</span></div>
          </div>
          <div className="p-3 flex-1 flex flex-col justify-center gap-1.5 max-w-[85%] z-10">
            <h1 className="text-[11px] font-black tracking-tight leading-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Government Service Portal</h1>
            <p className="text-[5px] text-slate-400 leading-normal">Digital infrastructure architecture engineered for robust citizen services and transparent operations.</p>
          </div>
          <div className="px-3 pb-3 grid grid-cols-2 gap-2 z-10">
            <div className="bg-slate-950/80 border border-slate-800 p-1.5 rounded flex flex-col gap-0.5">
              <span className="font-bold text-[5.5px]">Birth Certificate</span>
              <span className="text-[4.5px] text-blue-400 font-medium">Verify Now →</span>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 p-1.5 rounded flex flex-col gap-0.5">
              <span className="font-bold text-[5.5px]">Document Verification</span>
              <span className="text-[4.5px] text-blue-400 font-medium">Verify Now →</span>
            </div>
          </div>
        </div>
      )
    }
  ];

    const filteredProjects = activeTab === 'All Projects' 
    ? projects 
    : projects.filter(project => project.type === activeTab);

  return (
    <div className="bg-[#070707] text-white min-h-screen py-16 px-4 md:px-8 relative overflow-hidden font-sans">

      {/* Background Graphic Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="absolute top-12 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-yellow-500/5 via-zinc-900/10 to-transparent rounded-full pointer-events-none blur-3xl" />

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-40" />

      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-12 relative z-10">

        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-yellow-500/50" />

          <span className="text-md uppercase tracking-[0.2em] bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Our Work, Your Trust
          </span>

          <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-yellow-500/50" />
        </div>

        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          OUR{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 filter drop-shadow-[0_2px_10px_rgba(251,191,36,0.25)]">
            PROJECTS
          </span>
        </h2>

        <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
          Explore some of our successful projects that deliver real impact and drive business growth.
        </p>
      </div>

      {/* CATEGORY TABS */}
      <div className="max-w-7xl mx-auto mb-12 flex justify-center overflow-x-auto pb-4 px-2 scrollbar-none relative z-10">
        <div className="flex gap-2.5 bg-zinc-950/60 p-2 rounded-full border border-zinc-900 backdrop-blur-md whitespace-nowrap">

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-xs font-medium rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-orange-400 to-yellow-500 text-black shadow-lg shadow-yellow-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* PROJECT GRID */}
      <div className="max-w-7xl mx-auto px-2 relative z-10">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
                    {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6, borderColor: 'rgba(251,191,36,0.40)' }}
              key={project.title}
              className="bg-gradient-to-b from-zinc-950 to-black border border-zinc-900/80 rounded-xl p-4 flex flex-col justify-between group transition-colors duration-300"
            >
              <div>
                {/* Mockup Container */}
                <div className="w-full h-44 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900/50 mb-5 relative flex items-center justify-center">
                  {project.mockup}

                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />
                </div>

                {/* Info */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-zinc-900/80 border border-zinc-800 rounded-lg group-hover:border-yellow-500/30 transition-colors duration-300">
                    {project.icon}
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-zinc-100 group-hover:text-white pt-1">
                    {project.title}
                  </h3>
                </div>

                <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6 pl-1">
                  {project.desc}
                </p>
              </div>

              {/* Action Button */}
              <button className="w-full py-2.5 rounded-lg border border-yellow-500/20 text-yellow-500 text-xs font-semibold flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-yellow-500 group-hover:text-black group-hover:border-transparent transition-all duration-300">
                View Project
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* FOOTER CTA */}
      <div className="max-w-7xl mx-auto mt-20 px-2 relative z-10">

        <div className="w-full bg-gradient-to-r from-zinc-950 via-black to-zinc-950 border border-zinc-900/80 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">

          {/* Glow */}
          <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left z-10">

            <div className="relative flex items-center justify-center w-20 h-20 bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden shrink-0">

              <span className="text-4xl filter drop-shadow-[0_4px_10px_rgba(251,191,36,0.35)] animate-bounce">
                🚀
              </span>

              <div className="absolute bottom-1 w-6 h-1 bg-yellow-500/40 rounded-full blur-xs opacity-70 animate-pulse" />
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-black tracking-tight mb-2">
                Have a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
                  Project
                </span>{" "}
                in Mind?
              </h3>

              <p className="text-zinc-400 text-xs md:text-sm font-light mb-4">
                Let's build something amazing together!
              </p>

              <button className="px-6 py-2.5 bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-orange-500 hover:to-yellow-500 text-black font-bold text-xs rounded-full flex items-center gap-2 shadow-lg shadow-yellow-500/10 transition-all duration-300 transform hover:scale-[1.02]">
                Get Free Consultation
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-y-6 gap-x-8 border-t lg:border-t-0 lg:border-l border-zinc-900 pt-6 lg:pt-0 lg:pl-8 z-10 w-full lg:w-auto shrink-0">

            {[
              { icon: <Shield className="w-5 h-5 text-yellow-500" />, title: 'Secure Solutions' },
              { icon: <Clock className="w-5 h-5 text-yellow-500" />, title: 'On-Time Delivery' },
              { icon: <Award className="w-5 h-5 text-yellow-500" />, title: 'Quality Assurance' },
              { icon: <Headphones className="w-5 h-5 text-yellow-500" />, title: 'Dedicated Support' }
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-3 group">

                <div className="p-2 bg-zinc-900/60 border border-zinc-800 rounded-lg group-hover:border-yellow-500/20 transition-colors duration-300">
                  {badge.icon}
                </div>

                <span className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors duration-200">
                  {badge.title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}