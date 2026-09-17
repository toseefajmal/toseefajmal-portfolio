
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
      className="relative overflow-hidden bg-[#06070a] px-5 py-20 text-white sm:px-8 sm:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-violet-600/[0.08] blur-[120px]" />

        <div className="absolute -right-40 bottom-10 h-72 w-72 rounded-full bg-cyan-500/[0.07] blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/[0.025] blur-[120px]" />
      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <motion.div
            variants={SlideUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-violet-400/60" />

            <span className="rounded-full border border-violet-400/15 bg-violet-500/[0.06] px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-violet-300">
              Get In Touch
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400/60" />
          </motion.div>

          <motion.h2
            variants={SlideRight(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Let's create something{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              remarkable.
            </span>
          </motion.h2>

          <motion.p
            variants={SlideLeft(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400"
          >
            Have a project in mind, an exciting idea, or simply want to
            connect? Drop me a message and let's start a conversation.
          </motion.p>
        </div>

        {/* Main */}
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Card */}
          <motion.div
            variants={SlideLeft(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6"
          >
            {/* Top Line */}
            <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/[0.07] blur-[80px]" />

            <div className="relative z-10">
              {/* Intro */}
              <div className="mb-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/[0.07] text-lg text-violet-300">
                    <FiMessageCircle />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-violet-300/60">
                      Let's connect
                    </p>

                    <h3 className="mt-1 text-xl font-medium text-white">
                      Let's talk.
                    </h3>
                  </div>
                </div>

                <p className="text-sm leading-6 text-slate-400">
                  I'm always interested in discussing new projects, creative
                  ideas, freelance opportunities and meaningful collaborations.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-2.5">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    variants={SlideBottom(0.3 + index * 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    className="group flex cursor-pointer items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-500/[0.04]"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-base ${
                        item.color === "cyan"
                          ? "border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-300"
                          : item.color === "fuchsia"
                          ? "border-fuchsia-400/15 bg-fuchsia-400/[0.05] text-fuchsia-300"
                          : "border-violet-400/15 bg-violet-400/[0.05] text-violet-300"
                      }`}
                    >
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-slate-600">
                        {item.title}
                      </p>

                      <p className="mt-1 truncate text-sm text-slate-300 transition-colors group-hover:text-white">
                        {item.value}
                      </p>
                    </div>

                    <FiArrowUpRight className="text-base text-slate-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
                  </motion.a>
                ))}
              </div>

              {/* Social */}
              <div className="mt-6 border-t border-white/[0.07] pt-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                      Find me online
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Let's connect & collaborate
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href="https://github.com/toseefajmal"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-violet-400/[0.07] hover:text-violet-300"
                    >
                      <FiGithub />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/toseef-ajmal/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-cyan-400/[0.07] hover:text-cyan-300"
                    >
                      <FiLinkedin />
                    </a>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.035] px-4 py-3">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                  <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                <div className="flex-1">
                  <p className="text-xs text-emerald-300/80">
                    Available for new projects
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-600">
                    Usually replies within 24 hours
                  </p>
                </div>

                <FiClock className="text-sm text-emerald-300/40" />
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            variants={SlideRight(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-7"
          >
            {/* Top Line */}
            <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/[0.06] blur-[90px]" />

            <div className="relative z-10">
              {/* Form Heading */}
              <div className="mb-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,.8)]" />

                  <span className="text-[10px] uppercase tracking-[0.2em] text-violet-300/60">
                    Send a message
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-white sm:text-3xl">
                  Tell me about your{" "}
                  <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                    project.
                  </span>
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fill out the form below and I'll get back to you soon.
                </p>
              </div>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5 flex items-center gap-3 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.05] px-4 py-3 text-sm text-emerald-300"
                >
                  <FiCheckCircle className="shrink-0 text-lg" />

                  <div>
                    <p>Message sent successfully!</p>

                    <p className="mt-0.5 text-xs text-emerald-300/50">
                      Thanks for reaching out.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-slate-500"
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
                      className="w-full cursor-text rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-700 hover:border-white/[0.14] focus:border-violet-400/40 focus:bg-violet-500/[0.03] focus:ring-4 focus:ring-violet-500/[0.05]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-slate-500"
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
                      className="w-full cursor-text rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-700 hover:border-white/[0.14] focus:border-cyan-400/40 focus:bg-cyan-400/[0.025] focus:ring-4 focus:ring-cyan-400/[0.05]"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-slate-500"
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
                    className="w-full cursor-text rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-700 hover:border-white/[0.14] focus:border-violet-400/40 focus:bg-violet-500/[0.03] focus:ring-4 focus:ring-violet-500/[0.05]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-slate-500"
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
                    className="w-full cursor-text resize-none rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-sm leading-6 text-white outline-none transition-all placeholder:text-slate-700 hover:border-white/[0.14] focus:border-fuchsia-400/40 focus:bg-fuchsia-400/[0.025] focus:ring-4 focus:ring-fuchsia-400/[0.05]"
                  />
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-violet-400/20 bg-violet-600 px-6 py-3.5 text-sm text-white shadow-[0_12px_30px_rgba(124,58,237,.18)] transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_16px_35px_rgba(124,58,237,.28)] focus:outline-none focus:ring-4 focus:ring-violet-500/20"
                >
                  <FiSend className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

                  <span>Send Message</span>

                  <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.button>

                <p className="flex items-center justify-center gap-2 text-[10px] text-slate-600">
                  <span className="h-1 w-1 rounded-full bg-emerald-400/70" />

                  Your information is kept private.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          variants={SlideUp(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-slate-600 sm:text-sm">
            Have an idea?{" "}
            <span className="text-violet-300/80">
              Let's turn it into reality.
            </span>
          </p>

          <div className="mx-auto mt-3 flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-violet-400/20" />

            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 shadow-[0_0_15px_rgba(139,92,246,.7)]" />

            <span className="h-px w-14 bg-gradient-to-l from-transparent to-cyan-400/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

