
import React from "react";

const stats = [
  { value: "90+", label: "Working Hours", desc: "Dedicated effort" },
  { value: "6+", label: "Completed Projects", desc: "Successfully delivered" },
  { value: "5+", label: "Happy Clients", desc: "Trusted partnerships" },
  { value: "1+", label: "Awards Received", desc: "Industry recognition" },
];

const steps = [
  {
    title: "Consultation",
    desc: "We understand your business goals, vision, and requirements to create the perfect digital strategy.",
  },
  {
    title: "Planning",
    desc: "We prepare a clear roadmap with timelines, scalable architecture, and future-ready solutions.",
  },
  {
    title: "Development",
    desc: "We build secure, modern, and high-performance software solutions with clean architecture.",
  },
  {
    title: "Delivery & Support",
    desc: "We ensure smooth deployment, optimization, maintenance, and long-term technical support.",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#0f0f0f] px-7 py-20 text-[#ffffff] md:px-12 lg:px-30"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,128,0,0.04),transparent_35%)]" />

      <div className="absolute -left-40 top-50 h-70 w-70 rounded-full bg-[#ff8a00]/10 blur-[140px]" />
      <div className="absolute -right-70 bottom-30 h-70 w-70 rounded-full bg-white/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-9xl">


        {/* Stats Section */}

       <div className="relative mb-28 py-6">
  <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4">
    {stats.map((stat, index) => (
      <div
        key={index}
        className="group relative text-center"
      >
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff9500]/0 blur-3xl transition-all duration-700 group-hover:bg-[#ff9500]/15" />

        <h3 className="relative text-5xl font-black text-[#e3ddd3] transition-all duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_18px_rgba(255,149,0,0.45)] md:text-6xl">
          {stat.value}
        </h3>

        <h4 className="relative mt-2 text-xl font-bold text-white transition-all duration-500 group-hover:text-[#ffb347]">
          {stat.label}
        </h4>

        <p className="relative mt-3 text-sm text-gray-400 transition-all duration-500 group-hover:text-gray-300">
          {stat.desc}
        </p>

        <div className="relative mx-auto mt-4 h-[1px] w-12 overflow-hidden bg-white/10 transition-all duration-500 group-hover:w-28">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#ff9500] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </div>
      </div>
    ))}
  </div>
</div>
 
           

        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-5xl font-semibold uppercase tracking-[0.05em] text-[#ff9c11]">
            Our Process
          </p>

          <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
            Simple Process,{" "}
            <span className="text-[#eae9e8]">Smart Execution</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-300 md:text-lg">
            We follow a transparent and result-driven workflow to deliver
            high-quality software solutions with speed, security, and innovation.
          </p>
        </div>

        {/* Process Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-1">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-9 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#ff8a00]/35 hover:bg-white/[0.055]"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#ff8a00]/10 blur-3xl transition duration-700 group-hover:bg-[#ff8a00]/15" />

              <div className="relative mb-5 text-6xl font-black text-[#f39b21]">
                0{index + 1}
              </div>

              <h3 className="relative mb-3 text-4xl font-bold text-white">
                {step.title}
              </h3>

              <p className="relative text-sm leading-7 text-gray-400">
                {step.desc}
              </p>

              <div className="mt-6 h-[2px] w-50 rounded-full bg-[#ff9500]/70 transition-all duration-500 group-hover:w-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;