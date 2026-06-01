import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { countries } from "countries-list";
import {
  Briefcase,
  Code2,
  Palette,
  Brain,
  Megaphone,
  GraduationCap,
  Users,
  Rocket,
  Target,
  HeartHandshake,
  CheckCircle2,
  X,
  Upload,
  FileText,
  Trash2,
  Send,
} from "lucide-react";

const iconBox =
  "flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/60 bg-orange-500/10 text-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.35)] transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_35px_rgba(255,255,255,0.8)]";

const inputClass =
  "w-full min-w-0 rounded-2xl border bg-white/[0.04] px-4 py-3 text-white placeholder:text-neutral-600 outline-none transition duration-300 hover:border-orange-500/60 hover:bg-white/[0.06] focus:border-orange-500 focus:bg-white/[0.07] focus:ring-2";

const initialForm = {
  fullName: "",
  email: "",
  phoneCode: "+91",
  phone: "",
  skills: "",
  portfolio: "",
  message: "",
};

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

const countryOptions = Object.entries(countries)
  .map(([code, country]) => ({
    code,
    name: country.name,
    phone: `+${country.phone[0]}`,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

function Careers() {
  const rolesRef = useRef(null);
  const fileInputRef = useRef(null);

  const [showForm, setShowForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [resumeFile, setResumeFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.title = "Careers | Driksha Infotech";
  }, []);

  useEffect(() => {
    document.body.style.overflow = showForm ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showForm]);

  const updateForm = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const scrollToRoles = () => {
    rolesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const resetForm = (role = "") => {
    setSelectedRole(role);
    setSubmitted(false);
    setResumeFile(null);
    setFileName("");
    setErrors({});
    setForm(initialForm);

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const openForm = (role = "") => {
    resetForm(role);
    setShowForm(true);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (form.phone.length < 7 || form.phone.length > 15) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!selectedRole) newErrors.position = "Please select a position";
    if (!resumeFile) newErrors.resume = "Resume is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveResume = (file) => {
    if (!file) return;

    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!validTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        resume: "Please upload PDF or DOC/DOCX file",
      }));
      return;
    }

    setResumeFile(file);
    setFileName(file.name);
    setErrors((prev) => ({ ...prev, resume: "" }));
  };

  const handlePhoneChange = (e) => {
    updateForm("phone", e.target.value.replace(/\D/g, "").slice(0, 15));
  };

  const handleFileChange = (e) => {
    saveResume(e.target.files?.[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    saveResume(e.dataTransfer.files?.[0]);
  };

  const removeFile = () => {
    setResumeFile(null);
    setFileName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) setSubmitted(true);
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
              onClick={() => openForm()}
              className="rounded-full border border-orange-500/60 px-7 py-3 text-sm font-bold text-orange-300 transition hover:bg-orange-500 hover:text-white"
            >
              Apply Now
            </button>
          </div>
        </motion.div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, icon: Icon, desc }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group h-full rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:border-orange-500/70 hover:bg-orange-500/10 hover:shadow-[0_0_35px_rgba(249,115,22,0.2)]"
            >
              <div className={iconBox}>
                <Icon size={28} />
              </div>

              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">{desc}</p>
            </motion.div>
          ))}
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
                        <Icon size={28} />
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

                      <button
                        onClick={() => openForm(role.title)}
                        className="mt-6 text-sm font-bold text-orange-400"
                      >
                        Apply Now
                      </button>
                    </div>

                    <div className="absolute inset-0 rounded-3xl border border-orange-500/50 bg-[#090909] p-6 shadow-[0_0_40px_rgba(249,115,22,0.22)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className={iconBox}>
                        <Icon size={28} />
                      </div>

                      <h3 className="mt-6 text-xl font-bold">{role.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-neutral-300">
                        {role.about}
                      </p>

                      <button
                        onClick={() => openForm(role.title)}
                        className="mt-5 text-sm font-bold text-orange-400"
                      >
                        Apply Now
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
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-400">
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
                onClick={() => openForm()}
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
                  className="group flex items-center gap-5 rounded-3xl border border-orange-300/20 bg-white/[0.03] p-5 shadow-[0_0_18px_rgba(249,115,22,0.08)] transition hover:bg-white/[0.10]"
                >
                  <div className={iconBox}>
                    <CheckCircle2 size={23} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.19em] text-neutral-120">
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

      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-black/80 px-4 py-6 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 25 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-orange-500/30 bg-[#050505] shadow-[0_0_55px_rgba(249,115,22,0.25)]"
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute right-4 top-4 z-30 rounded-full border border-white/10 bg-white/10 p-2 text-neutral-400 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              >
                <X size={20} />
              </button>

              <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-orange-500/20 blur-[100px]" />
              <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-orange-600/15 blur-[100px]" />

              <div className="relative z-10 max-h-[88vh] overflow-y-auto overflow-x-hidden overscroll-contain p-5 pr-4 md:p-7 md:pr-6">
                {!submitted ? (
                  <>
                    <div className="mb-6 pr-12">
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-orange-400">
                        Career Application
                      </p>
                      <h2 className="text-3xl font-black text-white md:text-4xl">
                        Apply Now
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-neutral-400">
                        Fill out your details and our team will contact you for
                        the next step.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid min-w-0 gap-6 md:grid-cols-2">
                        <FormInput
                          label="Full Name"
                          value={form.fullName}
                          error={errors.fullName}
                          placeholder="Your Name"
                          onChange={(e) =>
                            updateForm("fullName", e.target.value)
                          }
                        />

                        <FormInput
                          type="email"
                          label="Email Address"
                          value={form.email}
                          error={errors.email}
                          placeholder="xyz@example.com"
                          onChange={(e) => updateForm("email", e.target.value)}
                        />
                      </div>

                      <div className="grid min-w-0 gap-5 md:grid-cols-2">
                        <PhoneInputBox
                          phoneCode={form.phoneCode}
                          phone={form.phone}
                          error={errors.phone}
                          onCodeChange={(value) =>
                            updateForm("phoneCode", value)
                          }
                          onPhoneChange={handlePhoneChange}
                        />

                        <div className="group min-w-0 space-y-1.5">
                          <label className="text-sm font-semibold text-neutral-300 transition group-focus-within:text-orange-400">
                            Position <span className="text-orange-500">*</span>
                          </label>

                          <select
                            value={selectedRole}
                            onChange={(e) => {
                              setSelectedRole(e.target.value);
                              setErrors((prev) => ({
                                ...prev,
                                position: "",
                              }));
                            }}
                            className={`${inputClass} ${
                              errors.position
                                ? "border-red-500 focus:ring-red-500/20"
                                : "border-white/10 focus:ring-orange-500/20"
                            }`}
                          >
                            <option value="" className="bg-black">
                              Select a position
                            </option>

                            {roles.map((role) => (
                              <option
                                key={role.title}
                                value={role.title}
                                className="bg-black"
                              >
                                {role.title}
                              </option>
                            ))}
                          </select>

                          {errors.position && (
                            <p className="text-xs text-red-400">
                              {errors.position}
                            </p>
                          )}
                        </div>
                      </div>

                      <FormInput
                        label="Your Skills"
                        required={false}
                        value={form.skills}
                        placeholder="React, Node.js, Figma, etc."
                        onChange={(e) => updateForm("skills", e.target.value)}
                      />

                      <FormInput
                        type="url"
                        label="Portfolio / GitHub / LinkedIn"
                        required={false}
                        value={form.portfolio}
                        placeholder="https..."
                        onChange={(e) =>
                          updateForm("portfolio", e.target.value)
                        }
                      />

                      <div className="group min-w-0 space-y-1.5">
                        <label className="text-sm font-semibold text-neutral-300 transition group-focus-within:text-orange-400">
                          Short Message
                        </label>

                        <textarea
                          rows={2}
                          value={form.message}
                          onChange={(e) =>
                            updateForm("message", e.target.value)
                          }
                          placeholder="Any message..."
                          className="w-full min-w-0 resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-neutral-600 outline-none transition duration-300 hover:border-orange-500/60 hover:bg-white/[0.06] focus:border-orange-500 focus:bg-white/[0.07] focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>

                      <div className="min-w-0 space-y-1.5">
                        <label className="text-sm font-semibold text-neutral-300">
                          Upload Resume{" "}
                          <span className="text-orange-500">*</span>
                        </label>

                        <div
                          onClick={() => fileInputRef.current?.click()}
                          onDragOver={(e) => {
                            e.preventDefault();
                            setIsDragging(true);
                          }}
                          onDragLeave={(e) => {
                            e.preventDefault();
                            setIsDragging(false);
                          }}
                          onDrop={handleDrop}
                          className={`relative min-w-0 cursor-pointer rounded-2xl border-2 border-dashed transition duration-300 ${
                            isDragging
                              ? "border-orange-500 bg-orange-500/10"
                              : errors.resume
                              ? "border-red-500/50 bg-red-500/5"
                              : "border-white/15 bg-white/[0.03] hover:border-orange-500/70 hover:bg-orange-500/5"
                          }`}
                        >
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                          />

                          {!fileName ? (
                            <div className="flex flex-col items-center justify-center py-6 text-center">
                              <div className="mb-3 rounded-2xl bg-orange-500/10 p-3 text-orange-400">
                                <Upload size={20} />
                              </div>
                              <p className="text-sm font-medium text-neutral-300">
                                Drag & drop or click to upload
                              </p>
                              <p className="mt-1 text-xs text-neutral-500">
                                PDF, DOC, DOCX
                              </p>
                            </div>
                          ) : (
                            <div className="flex min-w-0 items-center justify-between px-4 py-3">
                              <div className="flex min-w-0 items-center gap-3 overflow-hidden">
                                <div className="shrink-0 rounded-xl bg-orange-500/10 p-2 text-orange-400">
                                  <FileText size={18} />
                                </div>
                                <span className="min-w-0 truncate text-sm text-neutral-300">
                                  {fileName}
                                </span>
                              </div>

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeFile();
                                }}
                                className="ml-3 shrink-0 rounded-full bg-red-500/20 p-1.5 text-red-400 transition hover:bg-red-500/30"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          )}
                        </div>

                        {errors.resume && (
                          <p className="text-xs text-red-400">
                            {errors.resume}
                          </p>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative mt-5 w-full overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3.5 font-bold text-white shadow-[0_0_28px_rgba(249,115,22,0.28)] transition hover:shadow-[0_0_40px_rgba(249,115,22,0.45)]"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Submit Application
                          <Send
                            size={17}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </span>
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                      </motion.button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex min-h-[430px] flex-col items-center justify-center text-center"
                  >
                    <div className="rounded-full bg-orange-500/20 p-4">
                      <CheckCircle2 size={56} className="text-orange-400" />
                    </div>

                    <h2 className="mt-6 text-3xl font-bold text-white">
                      Application Submitted!
                    </h2>

                    <p className="mt-3 max-w-sm text-neutral-400">
                      Thank you for applying to Driksha Infotech. Our team will
                      review your application and get back to you soon.
                    </p>

                    <button
                      onClick={() => setShowForm(false)}
                      className="mt-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-2.5 font-bold text-white transition hover:shadow-lg hover:shadow-orange-500/30"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function PhoneInputBox({
  phoneCode,
  phone,
  error,
  onCodeChange,
  onPhoneChange,
}) {
  return (
    <div className="group min-w-0 space-y-1.5">
      <label className="text-sm font-semibold text-neutral-300 transition group-focus-within:text-orange-400">
        Phone Number <span className="text-orange-500">*</span>
      </label>

      <div className="grid grid-cols-[135px_1fr] gap-3">
        <select
          value={phoneCode}
          onChange={(e) => onCodeChange(e.target.value)}
          className="w-full min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm text-white outline-none transition duration-300 hover:border-orange-500/60 hover:bg-white/[0.06] focus:border-orange-500 focus:bg-white/[0.07] focus:ring-2 focus:ring-orange-500/20"
        >
          {countryOptions.map((country) => (
            <option
              key={`${country.code}-${country.phone}`}
              value={country.phone}
              className="bg-black"
            >
              {country.name} {country.phone}
            </option>
          ))}
        </select>

        <input
          type="tel"
          value={phone}
          onChange={onPhoneChange}
          placeholder="Phone number"
          className={`${inputClass} ${
            error
              ? "border-red-500 focus:ring-red-500/20"
              : "border-white/10 focus:ring-orange-500/20"
          }`}
        />
      </div>

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

function FormInput({
  label,
  type = "text",
  value,
  error,
  placeholder,
  onChange,
  required = true,
}) {
  return (
    <div className="group min-w-0 space-y-1.5">
      <label className="text-sm font-semibold text-neutral-300 transition group-focus-within:text-orange-400">
        {label}
        {required && <span className="text-orange-500"> *</span>}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${inputClass} ${
          error
            ? "border-red-500 focus:ring-red-500/20"
            : "border-white/10 focus:ring-orange-500/20"
        }`}
      />

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default Careers;