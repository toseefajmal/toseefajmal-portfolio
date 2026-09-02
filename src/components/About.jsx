
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
  FiCheckCircle,
} from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const About = () => {
  const technologies = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Git",
    "Laravel",
    "MySQL",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-28"
    >
      {/* ================= BORDER ANIMATION ================= */}
      <style>{`
        @keyframes borderColorChange {
          0% {
            border-color: rgba(34, 211, 238, 0.25);
          }
          25% {
            border-color: rgba(139, 92, 246, 0.45);
          }
          50% {
            border-color: rgba(99, 102, 241, 0.45);
          }
          75% {
            border-color: rgba(236, 72, 153, 0.4);
          }
          100% {
            border-color: rgba(34, 211, 238, 0.25);
          }
        }

        .hover-border-animation:hover {
          animation: borderColorChange 2.5s ease-in-out infinite;
        }
      `}</style>

      {/* ================= BACKGROUND GRID ================= */}
      <div className="absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* ================= BACKGROUND GLOWS ================= */}
      <div className="absolute left-[-12%] top-[10%] h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="absolute right-[-10%] top-[30%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="absolute bottom-[-15%] left-[35%] h-[300px] w-[300px] rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            <LuSparkles />
            About Me
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Turning Ideas Into{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Passionate about creating modern, responsive and engaging
            digital experiences with clean code and thoughtful design.
          </p>
        </motion.div>

        {/* ================= TOP CONTENT ================= */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* =====================================================
              LEFT — PROFILE CARD
          ====================================================== */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="hover-border-animation relative min-h-[650px] cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            {/* Card Glow */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/10 blur-[80px]" />

            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-[80px]" />

            <div className="relative z-10 flex h-full flex-col">

              {/* ================= PROFILE IMAGE ================= */}
              <div className="flex justify-center pt-3">
                <div className="relative">

                  {/* Outer Glow */}
                  <div className="absolute -inset-5 rounded-full bg-violet-500/20 blur-2xl" />

                  {/* Animated Ring */}
                  <div className="absolute -inset-3 animate-[spin_12s_linear_infinite] rounded-full border border-dashed border-cyan-400/40" />

                  {/* Circular Image */}
                  <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-cyan-400/50 bg-slate-900 shadow-2xl shadow-cyan-500/20 sm:h-48 sm:w-48">

                    <img
                      src="/ta.jpeg"
                      alt="Toseef Ajmal"
                      className="block h-full w-full rounded-full object-cover"
                    />

                  </div>

                  {/* Online Dot */}
                  <span className="absolute bottom-2 right-2 h-5 w-5 rounded-full border-4 border-slate-950 bg-emerald-400 shadow-lg shadow-emerald-400/40" />

                </div>
              </div>

              {/* ================= NAME ================= */}
              <div className="mt-10 text-center">

                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-medium text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Available for opportunities
                </div>

                <h3 className="text-3xl font-black text-white">
                  Toseef Ajmal
                </h3>

                <p className="mt-2 text-base font-medium text-violet-400">
                  Frontend & Web Developer
                </p>

              </div>

              {/* ================= STATS ================= */}
              <div className="mt-9 grid grid-cols-3 gap-3">

                <div className="hover-border-animation cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center transition duration-300 hover:-translate-y-1 hover:bg-violet-500/5">
                  <h4 className="text-2xl font-black text-white">
                    3+
                  </h4>

                  <p className="mt-1 text-xs text-slate-500">
                    Projects
                  </p>
                </div>

                <div className="hover-border-animation cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center transition duration-300 hover:-translate-y-1 hover:bg-cyan-500/5">
                  <h4 className="text-2xl font-black text-white">
                    6+
                  </h4>

                  <p className="mt-1 text-xs text-slate-500">
                    Months Learning
                  </p>
                </div>

                <div className="hover-border-animation cursor-pointer rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center transition duration-300 hover:-translate-y-1 hover:bg-indigo-500/5">
                  <h4 className="text-2xl font-black text-white">
                    100%
                  </h4>

                  <p className="mt-1 text-xs text-slate-500">
                    Passion
                  </p>
                </div>

              </div>

              {/* ================= TECHNOLOGIES ================= */}
              <div className="mt-8">

                <div className="mb-4 flex items-center gap-2">
                  <FiCode className="text-cyan-400" />

                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                    Technologies
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">

                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="hover-border-animation cursor-pointer rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 transition duration-300 hover:bg-violet-500/10 hover:text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

              {/* ================= OPEN TO WORK ================= */}
              <div className="mt-auto pt-8">

                <div className="hover-border-animation flex cursor-pointer items-center gap-3 rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10">
                    <FiCheckCircle className="text-lg text-emerald-400" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Open to Work
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Freelance & Frontend opportunities
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — EDUCATION + EXPERIENCE
          ====================================================== */}
          <div className="flex flex-col gap-8">

            {/* ================= EDUCATION ================= */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="hover-border-animation group relative flex-1 cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-1 sm:p-8"
            >

              {/* Glow */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-[80px] transition duration-500 group-hover:bg-cyan-500/20" />

              <div className="relative z-10">

                {/* Header */}
                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                    <FiBookOpen className="text-2xl text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      Education
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-white">
                      BS Information Technology
                    </h3>
                  </div>

                </div>

                {/* Content */}
                <div className="mt-7">

                  <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-300">
                    7th Semester
                  </span>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
                    Building a strong foundation in software development,
                    web technologies, databases, programming and modern
                    application development.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">

                    <div className="hover-border-animation cursor-pointer rounded-xl border border-white/10 bg-slate-900/40 p-4">
                      <p className="text-xs text-slate-500">
                        Field
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        Information Technology
                      </p>
                    </div>

                    <div className="hover-border-animation cursor-pointer rounded-xl border border-white/10 bg-slate-900/40 p-4">
                      <p className="text-xs text-slate-500">
                        Focus
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        Web Development
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>

            {/* ================= EXPERIENCE ================= */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="hover-border-animation group relative flex-1 cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-1 sm:p-8"
            >

              {/* Glow */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-[80px] transition duration-500 group-hover:bg-violet-500/20" />

              <div className="relative z-10">

                {/* Header */}
                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10">
                    <FiBriefcase className="text-2xl text-violet-400" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
                      Experience
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-white">
                      Frontend Development
                    </h3>
                  </div>

                </div>

                {/* Content */}
                <div className="mt-7">

                  <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-1.5 text-xs font-semibold text-violet-300">
                    Internship & Projects
                  </span>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
                    Hands-on experience creating responsive websites,
                    React applications and modern interfaces using
                    current frontend technologies.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">

                    <div className="hover-border-animation cursor-pointer rounded-xl border border-white/10 bg-slate-900/40 p-4">
                      <p className="text-xs text-slate-500">
                        Role
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        Frontend Developer
                      </p>
                    </div>

                    <div className="hover-border-animation cursor-pointer rounded-xl border border-white/10 bg-slate-900/40 p-4">
                      <p className="text-xs text-slate-500">
                        Stack
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        React + Tailwind
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>

          </div>
        </div>

        {/* =====================================================
            WHAT I DO — FULL WIDTH
        ====================================================== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="hover-border-animation mt-8 cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-1 sm:p-8"
        >

          {/* Header */}
          <div className="mb-7 flex items-center gap-4">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-400/10">
              <FiLayers className="text-2xl text-indigo-400" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                Services
              </p>

              <h3 className="mt-1 text-2xl font-bold text-white">
                What I Do
              </h3>
            </div>

          </div>

          {/* Services */}
          <div className="grid gap-4 md:grid-cols-3">

            {/* Responsive Websites */}
            <div className="hover-border-animation group cursor-pointer rounded-2xl border border-white/10 bg-slate-900/40 p-5 transition duration-300 hover:-translate-y-1">

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
                <FiCode className="text-xl text-cyan-400" />
              </div>

              <h4 className="font-semibold text-white">
                Responsive Websites
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Modern responsive websites that look great and
                work smoothly across all screen sizes.
              </p>

            </div>

            {/* React Applications */}
            <div className="hover-border-animation group cursor-pointer rounded-2xl border border-white/10 bg-slate-900/40 p-5 transition duration-300 hover:-translate-y-1">

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/10">
                <FiLayers className="text-xl text-violet-400" />
              </div>

              <h4 className="font-semibold text-white">
                React Applications
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Interactive React applications with reusable
                components and smooth user experiences.
              </p>

            </div>

            {/* Modern UI Design */}
            <div className="hover-border-animation group cursor-pointer rounded-2xl border border-white/10 bg-slate-900/40 p-5 transition duration-300 hover:-translate-y-1">

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-400/10">
                <LuSparkles className="text-xl text-indigo-400" />
              </div>

              <h4 className="font-semibold text-white">
                Modern UI Design
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Clean, premium and user-friendly interfaces
                using Tailwind CSS and modern design principles.
              </p>

            </div>

          </div>

        </motion.div>

        {/* =====================================================
            BUTTONS
        ====================================================== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-7 flex flex-col justify-center gap-4 sm:flex-row"
        >

          {/* Download CV */}
          <a
            href="/Toseef-Ajmal-CV.pdf"
            download
            className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-4 font-semibold text-white shadow-lg shadow-violet-500/10 transition duration-300 hover:-translate-y-1 hover:shadow-violet-500/20"
          >
            <FiDownload />

            Download CV

            <FiArrowUpRight className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/toseefajmal"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-7 py-4 font-semibold text-cyan-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            View GitHub

            <FiExternalLink className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default About;

