
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiArrowUpRight,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiCheckCircle,
  FiMessageCircle,
  FiClock,
} from "react-icons/fi";

import {
  SlideLeft,
  SlideRight,
  SlideUp,
  SlideBottom,
} from "./Animation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email",
      value: "toseefajmal@example.com",
      link: "mailto:toseefajmal@example.com",
      color: "violet",
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      value: "+92 327 9614403",
      link: "tel:+923279614403",
      color: "cyan",
    },
    {
      icon: <FiMapPin />,
      title: "Location",
      value: "Punjab, Pakistan",
      link: "#",
      color: "fuchsia",
    },
  ];

  return (
    <section
      id="contact"
      className="relative mt-6 overflow-hidden bg-[#050507] px-5 py-16 text-white sm:px-8 sm:py-20 md:px-12 lg:px-16 lg:py-24"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-60 top-10 h-[500px] w-[500px] rounded-full bg-violet-600/[0.07] blur-[150px]" />

        <div className="absolute -right-60 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/[0.025] blur-[150px]" />

        <div className="absolute left-[15%] top-[20%] h-24 w-24 rounded-full bg-violet-500/[0.08] blur-3xl" />

        <div className="absolute right-[20%] top-[35%] h-20 w-20 rounded-full bg-cyan-400/[0.07] blur-3xl" />
      </div>

      {/* Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto mb-12 max-w-4xl text-center lg:mb-14">
          <motion.div
            variants={SlideUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-violet-400/70" />

            <span className="rounded-full border border-violet-400/15 bg-violet-500/[0.07] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-violet-300 shadow-[0_0_25px_rgba(139,92,246,.08)]">
              Get In Touch
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400/70" />
          </motion.div>

          <motion.h2
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Let's create something{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              remarkable.
            </span>
          </motion.h2>

          <motion.p
            variants={SlideLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/35 sm:text-base sm:leading-8"
          >
            Have a project in mind, an exciting idea, or simply want to
            connect? Drop me a message and let's start a conversation.
          </motion.p>
        </div>

        {/* =====================================================
            MAIN CONTACT AREA
        ====================================================== */}

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-7">
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <motion.div
            variants={SlideLeft(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            {/* Gradient Border */}

            <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-violet-500/40 via-transparent to-cyan-400/30 opacity-70 blur-[1px]" />

            <div className="group relative h-full overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#09090D]/95 p-6 shadow-[0_25px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl sm:p-7">
              {/* Glows */}

              <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-violet-500/[0.08] blur-[90px]" />

              <div className="pointer-events-none absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-cyan-500/[0.06] blur-[90px]" />

              {/* Decorative circles */}

              <div className="pointer-events-none absolute right-7 top-7 h-20 w-20 rounded-full border border-violet-400/[0.06]" />

              <div className="pointer-events-none absolute right-11 top-11 h-12 w-12 rounded-full border border-cyan-400/[0.05]" />

              <div className="relative z-10">
                {/* Intro */}

                <div className="mb-7">
                  <div className="mb-5 flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.08 }}
                      className="flex h-13 w-13 items-center justify-center rounded-2xl border border-violet-400/15 bg-gradient-to-br from-violet-500/15 to-cyan-400/[0.05] text-xl text-violet-300 shadow-[0_10px_30px_rgba(139,92,246,.12)]"
                    >
                      <FiMessageCircle />
                    </motion.div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-300/60">
                        Let's connect
                      </p>

                      <h3 className="mt-1 text-2xl font-black text-white">
                        Let's talk.
                      </h3>
                    </div>
                  </div>

                  <p className="max-w-md text-sm leading-6 text-white/35">
                    I'm always interested in discussing new projects,
                    creative ideas, freelance opportunities and meaningful
                    collaborations.
                  </p>
                </div>

                {/* Contact Information */}

                <div className="space-y-2.5">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.title}
                      href={item.link}
                      variants={SlideBottom(0.4 + index * 0.1)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="group/item flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-500/[0.045]"
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-white/[0.025] text-lg transition-all duration-300 ${
                          item.color === "cyan"
                            ? "border-cyan-400/10 text-cyan-300 group-hover/item:border-cyan-400/25 group-hover/item:bg-cyan-400/10"
                            : item.color === "fuchsia"
                            ? "border-fuchsia-400/10 text-fuchsia-300 group-hover/item:border-fuchsia-400/25 group-hover/item:bg-fuchsia-400/10"
                            : "border-violet-400/10 text-violet-300 group-hover/item:border-violet-400/25 group-hover/item:bg-violet-400/10"
                        }`}
                      >
                        {item.icon}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/20">
                          {item.title}
                        </p>

                        <p className="mt-1 truncate text-sm font-semibold text-white/55 transition-colors group-hover/item:text-white">
                          {item.value}
                        </p>
                      </div>

                      <FiArrowUpRight className="text-lg text-white/15 transition-all duration-300 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-violet-300" />
                    </motion.a>
                  ))}
                </div>

                {/* Social */}

                <div className="mt-7 border-t border-white/[0.06] pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/20">
                        Find me online
                      </p>

                      <p className="mt-1 text-xs text-white/25">
                        Let's connect & collaborate
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href="https://github.com/toseefajmal"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="group/social flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-lg text-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-violet-500/10 hover:text-violet-200"
                      >
                        <FiGithub className="transition-transform duration-300 group-hover/social:scale-110" />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/toseef-ajmal/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="group/social flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-lg text-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-cyan-400/10 hover:text-cyan-200"
                      >
                        <FiLinkedin className="transition-transform duration-300 group-hover/social:scale-110" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Availability */}

                <div className="mt-6 flex items-center gap-3 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.035] px-4 py-3">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                    <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />
                  </span>

                  <div className="flex-1">
                    <p className="text-xs font-semibold text-emerald-300/80">
                      Available for new projects
                    </p>

                    <p className="mt-0.5 text-[10px] text-emerald-300/35">
                      Usually replies within 24 hours
                    </p>
                  </div>

                  <FiClock className="text-sm text-emerald-300/40" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE FORM
          ================================================== */}

          <motion.div
            variants={SlideRight(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            {/* Gradient Border */}

            <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-violet-500/40 via-fuchsia-500/20 to-cyan-400/30 opacity-70 blur-[1px]" />

            <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#09090D]/95 p-6 shadow-[0_25px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl sm:p-7 lg:p-8">
              {/* Glow */}

              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/[0.07] blur-[100px]" />

              <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-cyan-500/[0.025] blur-[90px]" />

              <div className="relative z-10">
                {/* Form Header */}

                <div className="mb-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,.8)]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-300/60">
                      Send a message
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white sm:text-3xl">
                    Tell me about your{" "}
                    <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                      project.
                    </span>
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/30">
                    Fill out the form below and I'll get back to you soon.
                  </p>
                </div>

                {/* Success Message */}

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="mb-5 flex items-center gap-3 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.05] px-4 py-3 text-sm text-emerald-300"
                  >
                    <FiCheckCircle className="shrink-0 text-lg" />

                    <div>
                      <p className="font-semibold">
                        Message sent successfully!
                      </p>

                      <p className="mt-0.5 text-xs text-emerald-300/50">
                        Thanks for reaching out.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* FORM */}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name + Email */}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/30"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="Toseef Ajmal"
                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/15 hover:border-white/[0.14] focus:border-violet-400/40 focus:bg-violet-500/[0.03] focus:ring-4 focus:ring-violet-500/[0.06]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/30"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/15 hover:border-white/[0.14] focus:border-cyan-400/40 focus:bg-cyan-400/[0.025] focus:ring-4 focus:ring-cyan-400/[0.06]"
                      />
                    </div>
                  </div>

                  {/* Subject */}

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/30"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project discussion"
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/15 hover:border-white/[0.14] focus:border-violet-400/40 focus:bg-violet-500/[0.03] focus:ring-4 focus:ring-violet-500/[0.06]"
                    />
                  </div>

                  {/* Message */}

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/30"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      minLength={10}
                      placeholder="Tell me a little about your project..."
                      className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm leading-6 text-white outline-none transition-all duration-300 placeholder:text-white/15 hover:border-white/[0.14] focus:border-fuchsia-400/40 focus:bg-fuchsia-400/[0.025] focus:ring-4 focus:ring-fuchsia-400/[0.06]"
                    />
                  </div>

                  {/* Submit Button */}

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="group/send relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl border border-violet-400/20 bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_35px_rgba(124,58,237,.22)] transition-all duration-300 hover:border-violet-300/40 hover:shadow-[0_18px_45px_rgba(124,58,237,.4)] focus:outline-none focus:ring-4 focus:ring-violet-500/20"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/send:translate-x-full" />

                    <FiSend className="relative text-base transition-transform duration-300 group-hover/send:translate-x-1 group-hover/send:-translate-y-1" />

                    <span className="relative">Send Message</span>

                    <FiArrowUpRight className="relative text-lg transition-transform duration-300 group-hover/send:translate-x-1 group-hover/send:-translate-y-1" />
                  </motion.button>

                  <p className="flex items-center justify-center gap-2 text-[10px] text-white/20">
                    <span className="h-1 w-1 rounded-full bg-emerald-400/60" />
                    Your information is kept private.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <motion.div
          variants={SlideUp(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-white/25 sm:text-sm">
            Have an idea?{" "}
            <span className="text-violet-300/80">
              Let's turn it into reality.
            </span>
          </p>

          <div className="mx-auto mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-violet-400/20" />

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-40" />

              <span className="relative h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 shadow-[0_0_18px_rgba(139,92,246,.8)]" />
            </span>

            <span className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

