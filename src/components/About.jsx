
import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCode,
  FiDownload,
  FiExternalLink,
} from "react-icons/fi";

import {
  SlideLeft,
  SlideRight,
  SlideUp,
  SlideBottom,
} from "./Animation";

const About = () => {
  const stats = [
    {
      number: "3+",
      label: "Projects",
    },
    {
      number: "6+",
      label: "Months Learning",
    },
    {
      number: "100%",
      label: "Passion",
    },
  ];

  const technologies = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Git",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#07070B] px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div className="pointer-events-none absolute -right-52 top-10 h-[500px] w-[500px] rounded-full bg-violet-600/[0.08] blur-[150px]" />

      <div className="pointer-events-none absolute -left-52 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.05] blur-[150px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.025] blur-[120px]" />

      {/* Grid Pattern */}
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
            SECTION HEADING
        ====================================================== */}

        <div className="mb-16 text-center lg:mb-20">

          <motion.div
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-violet-400" />

            <span className="text-[12px] font-semibold uppercase tracking-[0.3em] text-violet-400">
              About Me
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-violet-400" />
          </motion.div>

          <motion.h2
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            A little bit{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              about me.
            </span>
          </motion.h2>

          <motion.p
            variants={SlideLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8"
          >
            I'm passionate about turning ideas into clean, modern and
            meaningful digital experiences.
          </motion.p>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* =================================================
              PROFILE CARD
          ================================================== */}

          <motion.div
            variants={SlideLeft(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto w-full max-w-md"
          >
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-500 hover:border-violet-400/20 hover:shadow-[0_30px_100px_rgba(124,58,237,0.12)] sm:p-8">

              {/* Card Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-500/[0.10] blur-[80px] transition-all duration-700 group-hover:bg-violet-500/[0.16]" />

              <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-cyan-500/[0.06] blur-[80px]" />

              {/* Top Shine */}
              <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />

              {/* Avatar */}
              <motion.div
                variants={SlideUp(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-violet-400/20 bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-cyan-400/10 shadow-[0_0_70px_rgba(139,92,246,0.16)] transition-all duration-500 group-hover:shadow-[0_0_90px_rgba(139,92,246,0.25)]"
              >

                {/* Outer Ring */}
                <div className="absolute inset-2 rounded-full border border-white/[0.07]" />

                {/* Inner Circle */}
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-[#101016] shadow-inner">
                  <span className="bg-gradient-to-br from-white via-violet-200 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent">
                    TA
                  </span>
                </div>

                {/* Status */}
                <span className="absolute bottom-2 right-3 flex h-5 w-5 items-center justify-center rounded-full border-[3px] border-[#101016] bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>

              </motion.div>

              {/* Profile Info */}
              <motion.div
                variants={SlideRight(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative mt-7 text-center"
              >
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Toseef Ajmal
                </h3>

                <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-violet-400/10 bg-violet-500/[0.06] px-3 py-1">
                  <FiCode className="text-sm text-violet-300" />

                  <span className="text-sm font-medium text-violet-300">
                    Frontend Developer
                  </span>
                </div>

                <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-white/45">
                  Building interfaces that are simple, elegant and
                  enjoyable to use.
                </p>
              </motion.div>

              {/* Stats */}
              <div className="mt-9 grid grid-cols-3 divide-x divide-white/[0.08] border-t border-white/[0.08] pt-7">

                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={SlideBottom(0.5 + index * 0.15)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="cursor-default text-center"
                  >
                    <p className="bg-gradient-to-r from-white to-violet-200 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
                      {stat.number}
                    </p>

                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/30 sm:text-[11px]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}

              </div>

              {/* Bottom Line */}
              <motion.div
                variants={SlideUp(0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mx-auto mt-8 h-px w-2/3 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"
              />

              {/* Availability */}
              <div className="mt-6 flex items-center justify-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/30">
                  Open to opportunities
                </span>

              </div>

            </div>
          </motion.div>

          {/* =================================================
              RIGHT CONTENT
          ================================================== */}

          <div>

            {/* Intro */}
            <motion.div
              variants={SlideRight(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-base leading-8 text-white/65 sm:text-lg sm:leading-9">
                I'm a passionate{" "}
                <span className="font-semibold text-white">
                  Frontend Developer
                </span>{" "}
                who enjoys creating modern and responsive websites that
                combine thoughtful design with clean code.
              </p>
            </motion.div>

            {/* Paragraph 2 */}
            <motion.p
              variants={SlideLeft(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-6 text-sm leading-8 text-white/40 sm:text-base sm:leading-8"
            >
              My journey in web development has allowed me to work with
              technologies like{" "}
              <span className="text-violet-300">
                React
              </span>
              ,{" "}
              <span className="text-cyan-300">
                JavaScript
              </span>{" "}
              and{" "}
              <span className="text-violet-300">
                Tailwind CSS
              </span>
              . I enjoy learning new technologies and constantly improving
              my development skills.
            </motion.p>

            {/* =================================================
                INFO CARDS
            ================================================== */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {/* =================================================
                  EDUCATION CARD
              ================================================== */}

              <motion.div
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5 }}
                className="group relative cursor-pointer rounded-2xl p-[1px]"
              >

                {/* Animated Multi Color Border */}
                <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(90deg,#8b5cf6,#06b6d4,#ec4899,#f59e0b,#8b5cf6)] bg-[length:300%_100%] opacity-0 blur-[1px] transition-opacity duration-300 group-hover:animate-[borderMove_3s_linear_infinite] group-hover:opacity-100" />

                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B0B10] p-5 transition-all duration-500 group-hover:border-transparent group-hover:bg-[#0E0E15] group-hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)]">

                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-500/[0.07] blur-2xl transition-all duration-500 group-hover:bg-violet-500/[0.18]" />

                  <div className="relative">

                    <div className="mb-5 flex items-center justify-between">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/10 bg-violet-500/10 text-xl transition-all duration-300 group-hover:scale-110 group-hover:border-violet-400/30 group-hover:bg-violet-500/20">
                        🎓
                      </div>

                      <FiArrowUpRight className="text-lg text-white/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300" />

                    </div>

                    <h4 className="text-base font-semibold text-white">
                      Education
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      BS Information Technology
                    </p>

                    <p className="mt-2 text-xs font-medium uppercase tracking-wider text-violet-300/60">
                      7th Semester
                    </p>

                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  EXPERIENCE CARD
              ================================================== */}

              <motion.div
                variants={SlideUp(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5 }}
                className="group relative cursor-pointer rounded-2xl p-[1px]"
              >

                {/* Animated Multi Color Border */}
                <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(90deg,#06b6d4,#8b5cf6,#ec4899,#f59e0b,#06b6d4)] bg-[length:300%_100%] opacity-0 blur-[1px] transition-opacity duration-300 group-hover:animate-[borderMove_3s_linear_infinite] group-hover:opacity-100" />

                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B0B10] p-5 transition-all duration-500 group-hover:border-transparent group-hover:bg-[#0E0E15] group-hover:shadow-[0_20px_60px_rgba(6,182,212,0.10)]">

                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/[0.06] blur-2xl transition-all duration-500 group-hover:bg-cyan-500/[0.16]" />

                  <div className="relative">

                    <div className="mb-5 flex items-center justify-between">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 text-xl transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/20">
                        💻
                      </div>

                      <FiArrowUpRight className="text-lg text-white/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />

                    </div>

                    <h4 className="text-base font-semibold text-white">
                      Experience
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      Frontend Development
                    </p>

                    <p className="mt-2 text-xs font-medium uppercase tracking-wider text-cyan-300/60">
                      Internship & Projects
                    </p>

                  </div>
                </div>
              </motion.div>

            </div>

            {/* =================================================
                TECHNOLOGIES
            ================================================== */}

            <div className="mt-10">

              <motion.div
                variants={SlideLeft(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mb-5 flex items-center gap-3"
              >

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/70">
                  Technologies I Work With
                </span>

                <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />

              </motion.div>

              <div className="flex flex-wrap gap-2.5">

                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    variants={SlideBottom(0.7 + index * 0.08)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{
                      y: -4,
                      scale: 1.04,
                    }}
                    className="cursor-pointer rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-xs font-medium text-white/60 shadow-sm transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-500/[0.08] hover:text-violet-200 hover:shadow-[0_8px_25px_rgba(124,58,237,0.12)]"
                  >
                    {tech}
                  </motion.span>
                ))}

              </div>
            </div>

            {/* =================================================
                DOWNLOAD CV
            ================================================== */}

            <motion.div
              variants={SlideUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-10"
            >

              <a
                href="/Toseef-Ajmal-CV.pdf"
                download
                className="group relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-xl border border-violet-400/20 bg-gradient-to-r from-violet-500 via-indigo-500 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(124,58,237,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:shadow-[0_18px_50px_rgba(124,58,237,0.35)]"
              >

                {/* Shine */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                {/* Download Icon */}
                <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                  <FiDownload className="text-base" />
                </span>

                {/* Text */}
                <span className="relative">
                  Download CV
                </span>

                {/* Arrow */}
                <FiExternalLink className="relative text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

              </a>

            </motion.div>

          </div>
        </div>

        {/* =====================================================
            BOTTOM DECORATION
        ====================================================== */}

        <motion.div
          variants={SlideUp(1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-20 flex items-center justify-center gap-4"
        >

          <span className="h-px w-16 bg-gradient-to-r from-transparent to-white/10" />

          <span className="h-1.5 w-1.5 rounded-full bg-violet-400/50 shadow-[0_0_12px_rgba(139,92,246,0.7)]" />

          <span className="h-px w-16 bg-gradient-to-l from-transparent to-white/10" />

        </motion.div>

      </div>
    </section>
  );
};

export default About;

