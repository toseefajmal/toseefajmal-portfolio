
import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiDownload,
  FiExternalLink,
  FiLayers,
  FiBriefcase,
  FiBookOpen,
} from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const About = () => {
  const technologies = [
    {
      name: "React",
      border: "border-cyan-400/30",
      text: "text-cyan-300",
      bg: "bg-cyan-400/[0.06]",
    },
    {
      name: "JavaScript",
      border: "border-yellow-400/30",
      text: "text-yellow-300",
      bg: "bg-yellow-400/[0.06]",
    },
    {
      name: "Tailwind CSS",
      border: "border-sky-400/30",
      text: "text-sky-300",
      bg: "bg-sky-400/[0.06]",
    },
    {
      name: "HTML",
      border: "border-orange-400/30",
      text: "text-orange-300",
      bg: "bg-orange-400/[0.06]",
    },
    {
      name: "CSS",
      border: "border-blue-400/30",
      text: "text-blue-300",
      bg: "bg-blue-400/[0.06]",
    },
    {
      name: "Git",
      border: "border-red-400/30",
      text: "text-red-300",
      bg: "bg-red-400/[0.06]",
    },
    {
      name: "Laravel",
      border: "border-red-500/30",
      text: "text-red-400",
      bg: "bg-red-500/[0.06]",
    },
    {
      name: "MySQL",
      border: "border-indigo-400/30",
      text: "text-indigo-300",
      bg: "bg-indigo-400/[0.06]",
    },
  ];

  const services = [
    {
      icon: <FiCode />,
      title: "Responsive Websites",
      text: "Modern websites that work smoothly across all devices.",
    },
    {
      icon: <FiLayers />,
      title: "React Applications",
      text: "Clean and interactive interfaces built with React.",
    },
    {
      icon: <LuSparkles />,
      title: "Modern UI Design",
      text: "Simple, attractive and user-friendly digital experiences.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#06070a] py-20 sm:py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="absolute right-[-10%] top-[45%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-violet-300">
            <LuSparkles className="text-sm" />
            About Me
          </div>

          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
            Turning Ideas Into{" "}
            <span className="text-violet-400">
              Digital Experiences
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Passionate about creating modern, responsive and engaging digital
            experiences with clean code and thoughtful design.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Profile Card */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6"
          >
            {/* Top Line */}
            <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />

            <div className="flex flex-col items-center text-center">
              {/* Profile Image */}
              <div className="relative mb-5">
                <div className="absolute inset-[-7px] rounded-full border border-violet-400/20" />

                <div className="absolute inset-[-13px] rounded-full border border-cyan-400/10" />

                <img
                  src="/ta.jpeg"
                  alt="Toseef Ajmal"
                  className="relative h-32 w-32 rounded-full border border-white/10 object-cover"
                />

                <span className="absolute bottom-2 right-2 h-3.5 w-3.5 rounded-full border-2 border-[#06070a] bg-emerald-400" />
              </div>

              <h3 className="text-2xl font-medium text-white">
                Toseef Ajmal
              </h3>

              <p className="mt-1 text-sm text-violet-300">
                Frontend & Web Developer
              </p>

              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                I enjoy turning ideas into clean, responsive and meaningful
                digital experiences.
              </p>

              {/* Stats */}
              <div className="mt-6 grid w-full grid-cols-3 gap-2">
                <div className="cursor-pointer rounded-xl border border-white/8 bg-white/[0.025] p-3 transition hover:border-violet-400/20 hover:bg-white/[0.05]">
                  <p className="text-lg font-medium text-white">
                    3+
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Projects
                  </p>
                </div>

                <div className="cursor-pointer rounded-xl border border-white/8 bg-white/[0.025] p-3 transition hover:border-violet-400/20 hover:bg-white/[0.05]">
                  <p className="text-lg font-medium text-white">
                    6+
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Months
                  </p>
                </div>

                <div className="cursor-pointer rounded-xl border border-white/8 bg-white/[0.025] p-3 transition hover:border-violet-400/20 hover:bg-white/[0.05]">
                  <p className="text-lg font-medium text-white">
                    100%
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Passion
                  </p>
                </div>
              </div>

              {/* Open To Work */}
              <div className="mt-5 flex w-full cursor-pointer items-center justify-between rounded-xl border border-emerald-400/10 bg-emerald-400/[0.04] px-4 py-3 transition hover:border-emerald-400/20 hover:bg-emerald-400/[0.07]">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />

                  <span className="text-xs text-slate-300">
                    Open to Work
                  </span>
                </div>

                <span className="text-xs text-slate-500">
                  Freelance & Frontend
                </span>
              </div>
            </div>

            {/* Technology Marquee */}
            <div className="marquee mt-6 cursor-pointer overflow-hidden rounded-xl border border-white/8 bg-black/20 py-3">
              <div className="marquee-track flex w-max gap-3">
                {[...technologies, ...technologies].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className={`cursor-pointer whitespace-nowrap rounded-full border px-3 py-1.5 text-xs transition-all duration-300 ${tech.border} ${tech.text} ${tech.bg} hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]`}
                    >
                      {tech.name}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Side */}
          <div className="grid gap-5">
            {/* Education */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative cursor-pointer rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-violet-400/20 hover:bg-white/[0.045]"
            >
              <div className="absolute left-0 top-6 h-10 w-px bg-gradient-to-b from-violet-400 to-transparent" />

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/10 text-violet-300">
                  <FiBookOpen />
                </div>

                <div>
                  <p className="mb-1 text-xs uppercase tracking-wider text-violet-300">
                    Education
                  </p>

                  <h3 className="text-xl font-medium text-white">
                    BS Information Technology
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    7th Semester · Web Development
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Building a strong foundation in software development,
                    web technologies, databases, programming and modern
                    application development.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative cursor-pointer rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-cyan-400/20 hover:bg-white/[0.045]"
            >
              <div className="absolute left-0 top-6 h-10 w-px bg-gradient-to-b from-cyan-400 to-transparent" />

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-300">
                  <FiBriefcase />
                </div>

                <div>
                  <p className="mb-1 text-xs uppercase tracking-wider text-cyan-300">
                    Experience
                  </p>

                  <h3 className="text-xl font-medium text-white">
                    Frontend Development
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Internship & Projects · React + Tailwind
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Hands-on experience creating responsive websites, React
                    applications and modern interfaces using current
                    frontend technologies.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-5"
        >
          {/* Services Heading */}
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                What I Do
              </p>

              <h3 className="mt-1 text-xl font-medium text-white">
                Services
              </h3>
            </div>

            <motion.div
              initial={{ opacity: 0, rotate: -20 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FiArrowUpRight className="text-slate-600" />
            </motion.div>
          </div>

          {/* Service Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -7,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-400/[0.04] hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]"
              >
                {/* Top Glow Line */}
                <div className="absolute left-1/2 top-0 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400 to-transparent transition-all duration-500 group-hover:w-3/4" />

                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 3,
                  }}
                  transition={{ duration: 0.2 }}
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-violet-300 transition-all duration-300 group-hover:border-violet-400/30 group-hover:bg-violet-400/10 group-hover:text-violet-200"
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h4 className="text-base font-medium text-white transition-colors duration-300 group-hover:text-violet-200">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                  {service.text}
                </p>

                {/* Arrow */}
                <div className="mt-4 flex justify-end">
                  <FiArrowUpRight className="text-violet-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </div>

                {/* Bottom Glow */}
                <div className="pointer-events-none absolute -bottom-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-violet-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:flex-row"
        >
          <div>
            <h3 className="text-lg font-medium text-white">
              Let's build something together.
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Have an idea? Let's turn it into a modern digital
              experience.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/Toseef-Ajmal-CV.pdf"
              download
              className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-300 transition hover:bg-white/[0.08]"
            >
              <FiDownload />
              CV
            </a>

            <a
              href="https://github.com/toseefajmal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 rounded-xl bg-violet-500 px-4 py-2.5 text-sm text-white transition hover:bg-violet-400"
            >
              GitHub
              <FiExternalLink />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        .marquee-track {
          animation: marquee 20s linear infinite;
        }

        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
