
import React from "react";
import { motion } from "framer-motion";
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
      number: "6months+",
      label: "Years Learning",
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
      className="relative overflow-hidden bg-[#08080C] px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 text-center lg:mb-20">

          <motion.p
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400"
          >
            About Me
          </motion.p>

          <motion.h2
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            A little bit
            <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}about me.
            </span>
          </motion.h2>

          <motion.p
            variants={SlideLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-cyan-300/70 sm:text-base"
          >
            I'm passionate about turning ideas into clean, modern and
            meaningful digital experiences.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Left Profile Card */}
          <div className="mx-auto w-full max-w-md">

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8">

              {/* Glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

              {/* Avatar */}
              <motion.div
                variants={SlideUp(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-violet-400/20 bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-cyan-400/10 shadow-[0_0_60px_rgba(139,92,246,0.15)] sm:h-36 sm:w-36"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-[#111118] text-3xl font-bold text-white sm:h-28 sm:w-28">
                  TA
                </div>

                {/* Status */}
                <span className="absolute bottom-2 right-3 h-4 w-4 rounded-full border-4 border-[#111118] bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
              </motion.div>

              {/* Name */}
              <motion.div
                variants={SlideRight(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="relative mt-7 text-center"
              >
                <h3 className="text-2xl font-bold text-white">
                  Toseef Ajmal
                </h3>

                <p className="mt-2 text-sm text-violet-300">
                  Frontend Developer
                </p>

                <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-white">
                  Building interfaces that are simple, elegant and
                  enjoyable to use.
                </p>
              </motion.div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-7">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={SlideBottom(0.4 + index * 0.15)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center"
                  >
                    <p className="text-xl font-bold text-white sm:text-2xl">
                      {stat.number}
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-wider text-white/30 sm:text-[11px]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Premium Line */}
              <motion.div
                variants={SlideUp(0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mx-auto mt-7 h-px w-2/3 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>

            {/* Paragraph 1 - LEFT */}
            <motion.p
              variants={SlideLeft(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-sm leading-7 text-white sm:text-base sm:leading-8"
            >
              I'm a passionate Frontend Developer who enjoys creating
              modern and responsive websites that combine thoughtful
              design with clean code.
            </motion.p>

            {/* Paragraph 2 - RIGHT */}
            <motion.p
              variants={SlideRight(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-5 text-sm leading-7 text-white sm:text-base sm:leading-8"
            >
              My journey in web development has allowed me to work with
              technologies like React, JavaScript and Tailwind CSS.
              I enjoy learning new technologies and constantly improving
              my development skills.
            </motion.p>

            {/* Info Cards */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">

              {/* Education */}
              <motion.div
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/20 hover:bg-violet-500/[0.04]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-lg transition-transform duration-300 group-hover:scale-110">
                  🎓
                </div>

                <h4 className="font-semibold text-white">
                  Education
                </h4>

                <p className="mt-2 text-sm leading-6 text-white">
                  BS Information Technology
                </p>

                <p className="mt-1 text-xs text-violet-300/70">
                  7th Semester
                </p>
              </motion.div>

              {/* Experience */}
              <motion.div
                variants={SlideUp(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/20 hover:bg-cyan-500/[0.04]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-lg transition-transform duration-300 group-hover:scale-110">
                  💻
                </div>

                <h4 className="font-semibold text-white">
                  Experience
                </h4>

                <p className="mt-2 text-sm leading-6 text-white">
                  Frontend Development
                </p>

                <p className="mt-1 text-xs text-cyan-300/70">
                  Internship & Projects
                </p>
              </motion.div>

            </div>

            {/* Technologies */}
            <div className="mt-9">

              <motion.p
                variants={SlideLeft(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/70"
              >
                Technologies I Work With
              </motion.p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    variants={SlideBottom(0.7 + index * 0.08)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{
                      y: -3,
                      scale: 1.04,
                    }}
                    className="cursor-default rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-white transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-500/10 hover:text-violet-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
