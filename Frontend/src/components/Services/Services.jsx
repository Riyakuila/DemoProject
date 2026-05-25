
// import React from "react";

// const services = [
//   { name: "Custom Software Development", icon: "code" },
//   { name: "AI Solutions", icon: "auto_awesome" },
//   { name: "Website Development", icon: "language" },
//   { name: "Web App Development", icon: "web" },
//   { name: "ERP Solutions", icon: "storage" },
//   { name: "Scalable Enterprise Solution", icon: "lan" },
// ];



import React from "react";

const services = [
  {
    name: "Custom Software Development",
    desc: "We develop high-performance custom software tailored to your business workflows, automation needs, and future scalability.",
  },
  {
    name: "AI Solutions",
    desc: "Transform your business using AI automation, smart chatbots, intelligent analytics, and next-generation digital innovation.",
  },
  {
    name: "Website Development",
    desc: "Modern, responsive, SEO-optimized websites designed with futuristic UI and premium user experience.",
  },
  {
    name: "Web App Development",
    desc: "Secure and scalable web applications with powerful dashboards, cloud integration, and smooth performance.",
  },
  {
    name: "ERP Solutions",
    desc: "Advanced ERP systems to manage operations, HR, inventory, finance, and complete business workflows efficiently.",
  },
  {
    name: "Scalable Enterprise Solution",
    desc: "Enterprise-grade digital ecosystems built for scalability, automation, security, and long-term business growth.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#000000] px-5 py-20 md:px-12 lg:px-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_0.6px,transparent_0.6px),linear-gradient(to_bottom,#80808012_0.6px,transparent_0.6px)] bg-[size:58px_58px]" />

      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#ff8a00]/20 blur-[100px]" />
      <div className="absolute -bottom-40 right-20 h-72 w-72 rounded-full bg-[#ffb300]/15 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="mb-5 inline-block rounded-full border border-[#ff8a00]/40 bg-[#ff8a00]/10 px-7 py-3 text-sm font-semibold text-[#ffb300] shadow-[0_0_15px_rgba(255,138,0,0.2)]">
            Our Services
          </span>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Futuristic Software Solutions for{" "}
            <span className="bg-gradient-to-r from-[#cf7004] to-[#da9b08] bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            We build premium digital products, AI-powered systems, scalable
            websites, mobile apps, ERP, CRM, and automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-4xl border border-[#ff8a00]/22 bg-white/[0.04] p-9 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#ffb300]/70 hover:shadow-[0_0_35px_rgba(255,138,0,0.25)]"
            >
              <div className="absolute -right-18 -top-13 h-40 w-40 rounded-full bg-[#ff8a00]/23 blur-3xl transition duration-700 group-hover:scale-150 group-hover:bg-[#ffb300]/30" />

              <h3 className="relative mb-7 text-xl font-bold text-white md:text-3xl">
                {service.name}
              </h3>

              <p className="relative text-sm leading-7 text-gray-300">
                {service.desc}
              </p>

              <div className="relative mt-8 flex items-center gap-2 text-sm font-semibold text-[#ffb300] transition-all duration-200 group-hover:translate-x-5">
                Explore <span className="text-lg leading-6">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;