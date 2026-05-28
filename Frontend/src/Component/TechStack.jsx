import React from "react";
import { motion } from "framer-motion";
import {
  MdDesktopWindows,
  MdStorage,
  MdPhoneIphone,
  MdSettings,
  MdCloudQueue,
  MdPayment,
  MdDraw,
  MdSecurity,
  MdSpeed,
} from "react-icons/md";
import { TbStack2, TbTrendingUp } from "react-icons/tb";
import { HiOutlineCodeBracket } from "react-icons/hi2";

const stacks = [
  { title: "Frontend", desc: "React, Next.js, HTML5,\nCSS3, JavaScript, Tailwind", icon: MdDesktopWindows },
  { title: "Backend", desc: "Laravel, Node.js,\nExpress.js, Python", icon: HiOutlineCodeBracket },
  { title: "Database", desc: "MySQL, PostgreSQL,\nMongoDB, Firebase", icon: MdStorage },
  { title: "Mobile", desc: "Flutter, React Native,\nDart, Kotlin", icon: MdPhoneIphone },
  { title: "Tools & DevOps", desc: "Git, Docker, GitHub,\nVS Code, Postman", icon: MdSettings },
  { title: "Cloud & Hosting", desc: "AWS, Vercel, Netlify,\nRender, Firebase", icon: MdCloudQueue },
  { title: "Payment & APIs", desc: "Razorpay, Stripe,\nREST API, GraphQL", icon: MdPayment },
  { title: "Design", desc: "Figma, Adobe XD,\nPhotoshop, Illustrator", icon: MdDraw },
];

const features = [
  {
    title: "Modern\nTech Stack",
    desc: "Up-to-date technologies\nfor best performance.",
    icon: TbStack2,
  },
  {
    title: "Scalable\nSolutions",
    desc: "Built to grow with your\nbusiness needs.",
    icon: TbTrendingUp,
  },
  {
    title: "Secure\nArchitecture",
    desc: "Security-first approach\nto protect your data.",
    icon: MdSecurity,
  },
  {
    title: "High\nPerformance",
    desc: "Optimized for speed,\nperformance & reliability.",
    icon: MdSpeed,
  },
];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-16 text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff6a0018,transparent_42%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            Technology Stack
          </p>
          <h2 className="text-4xl font-black uppercase md:text-6xl">
            Built With <span className="text-orange-500">Modern Technologies</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-300">
            We use modern technologies to build fast, secure and scalable digital products.
          </p>
        </motion.div>

        {/* 8 cards grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stacks.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-orange-500/30 bg-[#0a0a0a] p-5 shadow-[0_0_25px_rgba(255,106,0,0.08)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-orange-500/60 bg-orange-500/5">
                    <Icon className="text-4xl text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <span className="mt-2 block h-[3px] w-10 bg-orange-500" />
                    <p className="mt-3 whitespace-pre-line text-sm leading-6 text-zinc-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom card: Always Learning + 4 features */}
        <div className="mt-8 grid gap-6 rounded-2xl border border-orange-500/60 bg-black/80 p-7 shadow-[0_0_45px_rgba(255,106,0,0.15)] lg:grid-cols-[1.7fr_repeat(4,1fr)]">
          <div className="flex items-center gap-6">
            <div className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-orange-500/40 shadow-[0_0_30px_rgba(255,106,0,0.35)]">
              <div className="absolute h-20 w-20 rounded-full border border-orange-500/60" />
              <HiOutlineCodeBracket className="text-6xl text-orange-500 drop-shadow-[0_0_18px_rgba(255,106,0,1)]" />
            </div>
            <div>
              <h3 className="text-2xl font-black leading-tight">
                Always Learning.
                <br />
                Always Building <span className="text-orange-500">Better.</span>
              </h3>
              <p className="mt-3 max-w-sm text-xs leading-5 text-zinc-300">
                We continuously explore new technologies
                to deliver smarter and future-ready solutions.
              </p>
            </div>
          </div>

          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-5 border-orange-500/40 lg:border-l lg:pl-9">
                <Icon className="mt-1 shrink-0 text-5xl text-orange-500" />
                <div>
                  <h4 className="whitespace-pre-line text-xl font-black leading-6">
                    {item.title}
                  </h4>
                  <p className="mt-4 whitespace-pre-line text-sm leading-6 text-zinc-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}