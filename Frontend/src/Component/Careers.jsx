
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Palette,
  Brain,
  Megaphone,
  GraduationCap,
  ArrowRight,
  Users,
  Rocket,
  Target,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

const iconBox =
  "flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/60 bg-orange-500/10 text-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.35)] transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_35px_rgba(255,255,255,0.8)]";

const benefits = [
  {
    title: "Real Projects",
    icon: Rocket,
    desc: "Work on live company projects and learn practical development.",
  },
  {
    title: "Mentorship",
    icon: Users,
    desc: "Get guidance from experienced developers and team members.",
  },
  {
    title: "Growth Culture",
    icon: Target,
    desc: "Improve your skills with modern tools, tasks, and teamwork.",
  },
  {
    title: "Friendly Team",
    icon: HeartHandshake,
    desc: "Work in a supportive learning environment.",
  },
];

const roles = [
  {
    title: "Frontend Developer Intern",
    icon: Code2,
    skills: ["React", "Tailwind", "JavaScript"],
    about:
      "Build clean, responsive, and modern user interfaces using React and Tailwind CSS.",
  },
  {
    title: "Backend Developer Intern",
    icon: Briefcase,
    skills: ["Node.js", "API", "Database"],
    about:
      "Work on APIs, database connections, server logic, and secure backend features.",
  },
  {
    title: "UI/UX Designer Intern",
    icon: Palette,
    skills: ["Figma", "Wireframe", "Design"],
    about:
      "Create user-friendly layouts, wireframes, and clean designs for digital products.",
  },
  {
    title: "AI / ML Intern",
    icon: Brain,
    skills: ["Python", "ML", "Automation"],
    about:
      "Learn to build smart automation, ML models, and AI-based project features.",
  },
  {
    title: "Digital Marketing Intern",
    icon: Megaphone,
    skills: ["SEO", "Content", "Social Media"],
    about:
      "Work on SEO, content planning, social media growth, and online brand presence.",
  },
  {
    title: "Software Trainee",
    icon: GraduationCap,
    skills: ["Problem Solving", "Projects", "Learning"],
    about:
      "Improve coding basics, problem solving, project building, and team collaboration.",
  },
];

const applyPoints = ["Resume Review", "Portfolio Check", "Skill Discussion"];

function Careers() {
  const rolesRef = useRef(null);

  useEffect(() => {
    document.title = "Careers | Driksha Infotech";
  }, []);

  const scrollToRoles = () => {
    rolesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-5 pb-24 pt-32 text-white md:px-12 lg:px-20">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-500/15 blur-[120px]" />
      <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-orange-600/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Build Your Career With{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Driksha
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-400 md:text-lg">
            Join a growing technology team where learners and young professionals
            work on real digital products, AI solutions, and modern software
            projects.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToRoles}
              className="rounded-full bg-orange-500 px-7 py-3 text-sm font-bold text-black shadow-[0_0_30px_rgba(249,115,22,0.55)] transition hover:bg-white"
            >
              View Open Roles
            </button>

            <button
              onClick={scrollToRoles}
              className="rounded-full border border-orange-500/60 px-7 py-3 text-sm font-bold text-orange-300 transition hover:bg-orange-500 hover:text-white"
            >
              Apply Now
            </button>
          </div>
        </motion.div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group h-full rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:border-orange-500/70 hover:bg-orange-500/10 hover:shadow-[0_0_35px_rgba(249,115,22,0.2)]"
              >
                <div className={iconBox}>
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-neutral-400">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div ref={rolesRef} className="mt-24 scroll-mt-32">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="text-3xl font-black md:text-4xl">
              Start Your Journey Here
            </h2>

            <p className="max-w-xl text-sm leading-7 text-neutral-400">
              These roles are perfect for learners who want practical exposure in
              software development and digital solutions.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((role, index) => {
              const Icon = role.icon;

              return (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="group h-[285px] [perspective:1000px]"
                >
                  <div className="relative h-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.035] p-6 [backface-visibility:hidden]">
                      <div className={iconBox}>
                        <Icon size={26} />
                      </div>

                      <h3 className="mt-8 text-xl font-bold">{role.title}</h3>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {role.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-white/5 px-3 py-1 text-xs text-neutral-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <button className="mt-6 flex items-center gap-2 text-sm font-bold text-orange-400">
                        Apply Now <ArrowRight size={17} />
                      </button>
                    </div>

                    <div className="absolute inset-0 rounded-3xl border border-orange-500/50 bg-[#090909] p-6 shadow-[0_0_40px_rgba(249,115,22,0.22)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className={iconBox}>
                        <Icon size={26} />
                      </div>

                      <h3 className="mt-6 text-xl font-bold">{role.title}</h3>

                      <p className="mt-4 text-sm leading-7 text-neutral-300">
                        {role.about}
                      </p>

                      <button className="mt-5 flex items-center gap-2 text-sm font-bold text-orange-400">
                        Apply Now <ArrowRight size={17} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="relative mt-20 overflow-hidden rounded-[2rem] border border-orange-500/40 bg-black p-6 shadow-[0_0_35px_rgba(249,115,22,0.18)] md:p-10">
          <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[100px]" />
          <div className="absolute -right-20 top-10 h-60 w-60 rounded-full bg-white/5 blur-[100px]" />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
                Join Driksha
              </p>

              <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight md:text-4xl">
                Ready To Start Your Career With Real Work?
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-neutral-300">
                Share your resume and portfolio with us. Our team will review
                your skills and connect with you for the next step.
              </p>

              <button
                onClick={scrollToRoles}
                className="mt-8 rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition hover:bg-orange-500 hover:shadow-[0_0_35px_rgba(249,115,22,0.6)]"
              >
                Apply For Open Roles
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              {applyPoints.map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 12, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="group flex items-center gap-5 rounded-3xl border border-orange-300/20 bg-white/[0.03] p-5 shadow-[0_0_18px_rgba(249,115,22,0.08)] transition hover:border-white/0 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(255,255,255,0.12)]"
                >
                  <div className={iconBox}>
                    <CheckCircle2 size={22} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-300">
                      Step {index + 1}
                    </p>

                    <h3 className="mt-1 text-lg font-bold">{item}</h3>
                  </div>

                  
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Careers;