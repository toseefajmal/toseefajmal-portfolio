
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
      link: "tel:+92 327 9614403",
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
      className="relative overflow-hidden bg-[#07070B] px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -left-60 top-20 h-[500px] w-[500px] rounded-full bg-violet-600/[0.08] blur-[150px]" />

      <div className="pointer-events-none absolute -right-60 bottom-10 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[150px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/[0.025] blur-[150px]" />

      {/* Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            HEADING
        ====================================================== */}

        <div className="mb-16 text-center lg:mb-20">

          <motion.div
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-violet-400/70" />

            <span className="rounded-full border border-violet-400/10 bg-violet-500/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-violet-300">
              Get In Touch
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-violet-400/70" />
          </motion.div>

          <motion.h2
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Let's build something{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              great.
            </span>
          </motion.h2>

          <motion.p
            variants={SlideLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white sm:text-base sm:leading-8"
          >
            Have a project in mind, a question, or just want to connect?
            Feel free to send me a message. I'd love to hear from you.
          </motion.p>
        </div>

        {/* =====================================================
            MAIN CONTACT AREA
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">

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

            {/* Main Info Card */}

            <div className="group relative rounded-[2rem] p-[1px]">

              {/* Animated Border */}

              <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(90deg,#8b5cf6,#06b6d4,#ec4899,#f59e0b,#8b5cf6)] bg-[length:300%_100%] opacity-0 transition-opacity duration-500 group-hover:animate-[borderMove_3s_linear_infinite] group-hover:opacity-100" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0B0B10]/95 p-7 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8">

                {/* Glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-500/[0.09] blur-[80px]" />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-cyan-500/[0.06] blur-[80px]" />

                <div className="relative z-10">

                  {/* Intro */}

                  <div className="mb-8">

                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-500/10 text-xl text-violet-300 shadow-[0_10px_30px_rgba(139,92,246,0.1)]">
                      <FiSend />
                    </div>

                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                      Let's talk.
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white">
                      I'm always open to discussing new projects,
                      creative ideas, opportunities and collaborations.
                    </p>
                  </div>

                  {/* Contact Info */}

                  <div className="space-y-3">

                    {contactInfo.map((item, index) => (
                      <motion.a
                        key={item.title}
                        href={item.link}
                        variants={SlideBottom(0.4 + index * 0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                        className="group/item flex cursor-pointer items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-500/[0.05]"
                      >

                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.035] text-lg transition-all duration-300 ${
                            item.color === "cyan"
                              ? "text-cyan-300 group-hover/item:border-cyan-400/20 group-hover/item:bg-cyan-400/10"
                              : item.color === "fuchsia"
                              ? "text-fuchsia-300 group-hover/item:border-fuchsia-400/20 group-hover/item:bg-fuchsia-400/10"
                              : "text-violet-300 group-hover/item:border-violet-400/20 group-hover/item:bg-violet-400/10"
                          }`}
                        >
                          {item.icon}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">
                            {item.title}
                          </p>

                          <p className="mt-1 truncate text-sm font-medium text-white/65 transition-colors group-hover/item:text-white">
                            {item.value}
                          </p>
                        </div>

                        <FiArrowUpRight className="text-lg text-white/15 transition-all duration-300 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-violet-300" />

                      </motion.a>
                    ))}

                  </div>

                  {/* Social */}

                  <div className="mt-8 border-t border-white/[0.07] pt-7">

                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/25">
                      Find Me Online
                    </p>

                    <div className="flex gap-3">

                      <a
                        href="https://github.com/toseefajmal"
                        target="_blank"
                        rel="noreferrer"
                        className="group/social flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-lg text-white/45 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-violet-500/10 hover:text-violet-200"
                        aria-label="GitHub"
                      >
                        <FiGithub className="transition-transform duration-300 group-hover/social:scale-110" />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/toseef-ajmal/"
                        target="_blank"
                        rel="noreferrer"
                        className="group/social flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-lg text-white/45 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-cyan-400/10 hover:text-cyan-200"
                        aria-label="LinkedIn"
                      >
                        <FiLinkedin className="transition-transform duration-300 group-hover/social:scale-110" />
                      </a>

                    </div>
                  </div>

                  {/* Availability */}

                  <div className="mt-8 flex items-center gap-3 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.035] px-4 py-3">

                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                    </span>

                    <span className="text-xs font-medium text-emerald-300/70">
                      Available for freelance projects
                    </span>

                  </div>

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
            className="group relative rounded-[2rem] p-[1px]"
          >

            {/* Animated Border */}

            <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(90deg,#8b5cf6,#06b6d4,#ec4899,#f59e0b,#8b5cf6)] bg-[length:300%_100%] opacity-0 transition-opacity duration-500 group-hover:animate-[borderMove_3s_linear_infinite] group-hover:opacity-100" />

            <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0B0B10]/95 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8 lg:p-10">

              {/* Glow */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-500/[0.07] blur-[100px]" />

              <div className="relative z-10">

                {/* Form Header */}

                <div className="mb-8">

                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/70">
                    Send a message
                  </p>

                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    Tell me about your{" "}
                    <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                      project.
                    </span>
                  </h3>

                </div>

                {/* Success Message */}

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3 text-sm text-emerald-300"
                  >
                    <FiCheckCircle className="shrink-0 text-lg" />
                    <span>
                      Thanks! Your message has been submitted.
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name + Email */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div className="group/field">

                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/35"
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
                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 text-base text-white outline-none transition-all duration-300 placeholder:text-white/20 hover:border-white/[0.14] focus:border-violet-400/40 focus:bg-violet-500/[0.035] focus:ring-2 focus:ring-violet-500/10"
                      />

                    </div>

                    <div className="group/field">

                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/35"
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
                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 text-base text-white outline-none transition-all duration-300 placeholder:text-white/20 hover:border-white/[0.14] focus:border-cyan-400/40 focus:bg-cyan-400/[0.025] focus:ring-2 focus:ring-cyan-400/10"
                      />

                    </div>

                  </div>

                  {/* Subject */}

                  <div>

                    <label
                      htmlFor="subject"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/35"
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
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 text-base text-white outline-none transition-all duration-300 placeholder:text-white/20 hover:border-white/[0.14] focus:border-violet-400/40 focus:bg-violet-500/[0.035] focus:ring-2 focus:ring-violet-500/10"
                    />

                  </div>

                  {/* Message */}

                  <div>

                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/35"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      minLength={10}
                      placeholder="Tell me a little about your project..."
                      className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 text-base leading-7 text-white outline-none transition-all duration-300 placeholder:text-white/20 hover:border-white/[0.14] focus:border-fuchsia-400/40 focus:bg-fuchsia-400/[0.025] focus:ring-2 focus:ring-fuchsia-400/10"
                    />

                  </div>

                  {/* Submit */}

                  <button
                    type="submit"
                    className="group/send relative flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl border border-violet-400/20 bg-gradient-to-r from-violet-500 via-indigo-500 to-violet-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(124,58,237,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:shadow-[0_18px_45px_rgba(124,58,237,0.4)] focus:outline-none focus:ring-2 focus:ring-violet-400/30"
                  >

                    {/* Shine */}

                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover/send:translate-x-full" />

                    <span className="relative">
                      Send Message
                    </span>

                    <FiArrowUpRight className="relative text-lg transition-transform duration-300 group-hover/send:-translate-y-0.5 group-hover/send:translate-x-0.5" />

                  </button>

                  <p className="text-center text-[11px] leading-5 text-white/20">
                    I'll get back to you as soon as possible.
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
          className="mt-16 text-center"
        >
          <p className="text-sm text-white/25">
            Have an idea?{" "}
            <span className="text-violet-300/70">
              Let's turn it into reality.
            </span>
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-4">

            <span className="h-px w-20 bg-gradient-to-r from-transparent to-violet-400/20" />

            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 shadow-[0_0_15px_rgba(139,92,246,0.8)]" />

            <span className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-400/20" />

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;

