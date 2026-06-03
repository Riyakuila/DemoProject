import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  HeartPulse,
  Building2,
  UsersRound,
  ShoppingCart,
  Landmark,
  CheckCircle,
} from "lucide-react";

const solutions = [
  {
    title: "Education Management Solution",
    tag: "Smart School ERP",
    icon: GraduationCap,
    desc: "A complete digital platform to manage students, teachers, attendance, fees, exams, reports, and school communication.",
    points: ["Student Management", "Attendance Tracking", "Fees & Reports", "Admin Dashboard"],
  },
  {
    title: "Healthcare Management Solution",
    tag: "Hospital Automation",
    icon: HeartPulse,
    desc: "Manage appointments, patients, doctors, billing, prescriptions, and hospital operations with a secure healthcare system.",
    points: ["Patient Records", "Doctor Scheduling", "Billing System", "Reports"],
  },
  {
    title: "ERP Business Solution",
    tag: "Enterprise Automation",
    icon: Building2,
    desc: "Streamline HR, inventory, finance, sales, and internal workflows with a scalable ERP solution.",
    points: ["HR Management", "Inventory", "Finance", "Workflow Automation"],
  },
  {
    title: "CRM Solution",
    tag: "Lead & Sales Management",
    icon: UsersRound,
    desc: "Track leads, manage customers, automate follow-ups, and improve sales performance with a smart CRM.",
    points: ["Lead Tracking", "Sales Pipeline", "Follow-ups", "Customer Reports"],
  },
  {
    title: "E-Commerce Solution",
    tag: "Online Selling Platform",
    icon: ShoppingCart,
    desc: "Launch a modern online store with product management, cart, payments, order tracking, and admin control.",
    points: ["Product Management", "Payment Gateway", "Order Tracking", "Admin Panel"],
  },
  {
    title: "Government Portal Solution",
    tag: "Digital Public Services",
    icon: Landmark,
    desc: "Build secure and scalable portals for citizen services, document verification, applications, and public workflows.",
    points: ["Citizen Services", "Document Upload", "Verification", "Secure Portal"],
  },
];

function Solutions() {
  const [active, setActive] = useState(0);
  const item = solutions[active];
  const ActiveIcon = item.icon;

  useEffect(() => {
    document.title = "Industry Based Software Solutions | Driksha Infotech";
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] px-5 pb-32 pt-34 text-white md:px-20">

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[130px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.08),transparent_35%)]" />

      <div className="relative mx-auto max-w-8xl">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Industry Based Software{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
            We create powerful digital solutions for education, healthcare,
            business, e-commerce, CRM, ERP, and government service platforms.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <button
                  key={solution.title}
                  onClick={() => setActive(index)}
                  className={`group flex items-center gap-6 rounded-2xl border p-6 text-left transition-all duration-300 ${
                    active === index
                      ? "border-yellow-500 bg-yellow-500/10 shadow-[0_0_35px_rgba(250,204,21,0.22)]"
                      : "border-white/10 bg-white/[0.035] hover:border-yellow-500/70 hover:bg-yellow-500/10 hover:shadow-[0_0_28px_rgba(250,204,21,0.18)]"
                  }`}
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl border transition-all duration-300 ${
                      active === index
                        ? "border-yellow-500 bg-gradient-to-r from-orange-400 to-yellow-500 text-black"
                        : "border-yellow-500/30 bg-black/40 text-yellow-500 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-yellow-500 group-hover:text-black"
                    }`}
                  >
                    <Icon size={32} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-yellow-500">
                      {solution.tag}
                    </p>

                    <h3 className="mt-2 text-base font-bold text-white md:text-lg">
                      {solution.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </motion.div>
                    <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-yellow-500/30 bg-white/[0.045] p-6 shadow-[0_0_55px_rgba(250,204,21,0.14)] md:p-9"
          >

            <div className="absolute right-4 top-8 h-28 w-28 rounded-full bg-yellow-500/20 blur-2xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -22 }}
                transition={{ duration: 0.35 }}
              >

                {/* Active Icon */}
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r from-orange-400 to-yellow-500 text-black shadow-[0_0_35px_rgba(250,204,21,0.45)]">
                  <ActiveIcon size={32} />
                </div>

                {/* Tag */}
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
                  {item.tag}
                </p>

                {/* Title */}
                <h2 className="mt-4 text-3xl font-black md:text-5xl">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-400">
                  {item.desc}
                </p>

                {/* Feature Points */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 p-4 transition-all duration-300 hover:border-yellow-500/70 hover:bg-yellow-500/10"
                    >
                      <CheckCircle
                        className="text-yellow-500 transition group-hover:text-white"
                        size={19}
                      />

                      <p className="text-sm font-medium text-neutral-200">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="mt-9 flex flex-wrap gap-4">

                  <button className="rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 px-7 py-3 text-sm font-bold text-black shadow-[0_0_28px_rgba(250,204,21,0.38)] transition hover:opacity-90">
                    Get This Solution
                  </button>

                  <button className="rounded-full border border-yellow-500/60 px-7 py-3 text-sm font-bold text-yellow-500 transition hover:bg-gradient-to-r hover:from-orange-400 hover:to-yellow-500 hover:text-black hover:border-transparent">
                    View Demo
                  </button>

                </div>

              </motion.div>
            </AnimatePresence>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;