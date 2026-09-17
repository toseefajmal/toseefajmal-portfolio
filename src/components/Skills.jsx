
import React from "react";
import { motion } from "framer-motion";

import {
  FiCode,
  FiDatabase,
  FiLayers,
  FiServer,
  FiGitBranch,
  FiArrowUpRight,
  FiCheck,
} from "react-icons/fi";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiGit,
  SiGithub,
  SiVscodium,
} from "react-icons/si";

import {
  SlideLeft,
  SlideRight,
  SlideUp,
  SlideBottom,
} from "./Animation";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      level: 95,
      category: "Frontend",
      icon: <SiHtml5 />,
      color: "from-orange-400 to-red-500",
    },
    {
      name: "CSS3",
      level: 90,
      category: "Frontend",
      icon: <SiCss />,
      color: "from-blue-400 to-cyan-400",
    },
    {
      name: "JavaScript",
      level: 85,
      category: "Frontend",
      icon: <SiJavascript />,
      color: "from-yellow-400 to-orange-400",
    },
    {
      name: "React.js",
      level: 85,
      category: "Frontend",
      icon: <SiReact />,
      color: "from-cyan-300 to-blue-500",
    },
    {
      name: "Tailwind CSS",
      level: 90,
      category: "Frontend",
      icon: <SiTailwindcss />,
      color: "from-cyan-400 to-teal-400",
    },
    {
      name: "PHP",
      level: 75,
      category: "Backend",
      icon: <SiPhp />,
      color: "from-indigo-400 to-violet-500",
    },
    {
      name: "Laravel",
      level: 70,
      category: "Backend",
      icon: <SiLaravel />,
      color: "from-red-500 to-orange-500",
    },
    {
      name: "MySQL",
      level: 75,
      category: "Database",
      icon: <SiMysql />,
      color: "from-blue-400 to-cyan-500",
    },
  ];

  const categories = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Building modern, responsive and interactive interfaces with clean user experiences.",
      icon: <FiCode />,
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    },
    {
      number: "02",
      title: "Backend Development",
      description:
        "Creating structured backend applications and scalable web solutions.",
      icon: <FiServer />,
      skills: ["PHP", "Laravel"],
    },
    {
      number: "03",
      title: "Database",
      description:
        "Designing and managing structured data for reliable applications.",
      icon: <FiDatabase />,
      skills: ["MySQL"],
    },
    {
      number: "04",
      title: "Tools & Workflow",
      description:
        "Using modern development tools to build, manage and deliver projects.",
      icon: <FiGitBranch />,
      skills: ["Git", "GitHub", "VS Code"],
    },
  ];

  const marqueeSkills = [
    {
      name: "HTML5",
      icon: <SiHtml5 />,
    },
    {
      name: "CSS3",
      icon: <SiCss />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "React.js",
      icon: <SiReact />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "PHP",
      icon: <SiPhp />,
    },
    {
      name: "Laravel",
      icon: <SiLaravel />,
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
    },
    {
      name: "Git",
      icon: <SiGit />,
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
    },
    {
      name: "VS Code",
      icon: <SiVscodium />,
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050507] px-2 pt-6 pb-0 text-white sm:px-2 sm:pt-4 md:px-2 md:pt-4"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/[0.07] blur-[150px]" />

        <div className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[150px]" />

        <div className="absolute bottom-0 left-1/2 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-fuchsia-500/[0.035] blur-[150px]" />
      </div>

      {/* GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto mb-6 max-w-3xl text-center lg:mb-7">
          <motion.div
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-3 inline-flex items-center gap-3"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-violet-400" />

            <span className="rounded-full border border-violet-400/15 bg-violet-500/[0.07] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-violet-300">
              My Skills
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400" />
          </motion.div>

          <motion.h2
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Skills{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              & Expertise.
            </span>
          </motion.h2>

          <motion.p
            variants={SlideLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/40 sm:text-base"
          >
            A carefully built toolkit of technologies I use to transform
            ideas into fast, responsive and engaging digital experiences.
          </motion.p>
        </div>

        {/* CATEGORY CARDS */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={SlideUp(0.25 + index * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative cursor-pointer"
            >
              <div className="absolute -inset-[1px] rounded-[1.5rem] bg-gradient-to-br from-violet-500 via-cyan-400 to-fuchsia-500 opacity-0 blur-[1px] transition duration-500 group-hover:opacity-80" />

              <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0A0A0F]/95 p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-transparent group-hover:shadow-[0_25px_80px_rgba(0,0,0,.55)]">

                <div className="absolute right-5 top-5 text-[10px] font-bold tracking-[0.25em] text-white/15 transition-colors duration-300 group-hover:text-violet-300/50">
                  {category.number}
                </div>

                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl transition duration-500 group-hover:bg-violet-500/20" />

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  transition={{ duration: 0.25 }}
                  className="relative mb-5 flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl border border-violet-400/15 bg-gradient-to-br from-violet-500/15 via-transparent to-cyan-400/[0.08] text-xl text-violet-300 shadow-[0_10px_35px_rgba(139,92,246,.1)]"
                >
                  {category.icon}

                  <div className="absolute inset-0 rounded-2xl bg-violet-400/10 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />
                </motion.div>

                <h3 className="relative text-lg font-bold text-white transition-colors group-hover:text-violet-100">
                  {category.title}
                </h3>

                <p className="relative mt-2 text-sm leading-6 text-white/35 transition-colors group-hover:text-white/50">
                  {category.description}
                </p>

                <div className="my-4 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.03] to-transparent" />

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        y: -3,
                        scale: 1.03,
                      }}
                      className="cursor-pointer rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[10px] font-medium text-white/40 transition-all duration-300 hover:border-violet-400/25 hover:bg-violet-500/10 hover:text-violet-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20 transition-colors group-hover:text-violet-300/60">
                    Expertise
                  </span>

                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.025] transition-all duration-300 group-hover:border-violet-400/20 group-hover:bg-violet-500/10"
                  >
                    <FiArrowUpRight className="text-sm text-white/25 transition duration-300 group-hover:text-violet-300" />
                  </motion.div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* TECHNOLOGY MARQUEE */}
        <motion.div
          variants={SlideUp(0.45)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative my-6 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.018] py-4"
        >
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#050507] to-transparent" />

          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#050507] to-transparent" />

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max items-center gap-4"
          >
            {[...marqueeSkills, ...marqueeSkills].map(
              (skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex shrink-0 cursor-pointer items-center gap-3 rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2 transition-all duration-300 hover:border-violet-400/25 hover:bg-violet-500/[0.05]"
                >
                  <span className="text-lg text-white/60">
                    {skill.icon}
                  </span>

                  <span className="text-xs font-medium text-white/35">
                    {skill.name}
                  </span>
                </div>
              )
            )}
          </motion.div>
        </motion.div>

        {/* ADVANCED TECHNICAL PROFICIENCY */}
        <motion.div
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mt-5"
        >
          {/* Outer Glow */}
          <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-violet-500/50 via-cyan-400/40 to-fuchsia-500/50 opacity-50 blur-[2px]" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#08080D]/95 p-6 shadow-[0_30px_100px_rgba(0,0,0,.5)] backdrop-blur-2xl sm:p-8 lg:p-10">

            {/* Background Glows */}
            <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-violet-600/[0.08] blur-[100px]" />

            <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-[100px]" />

            {/* Animated Grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
                backgroundSize: "45px 45px",
              }}
            />

            {/* HEADER */}
            <div className="relative z-10 mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

              <div>
                <div className="mb-4 flex items-center gap-3">

                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 shadow-[0_0_30px_rgba(139,92,246,.15)]"
                  >
                    <FiLayers className="text-lg text-violet-300" />
                  </motion.div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-violet-300/70">
                      Technical Proficiency
                    </p>

                    <div className="mt-1 h-px w-20 bg-gradient-to-r from-violet-400 to-transparent" />
                  </div>

                </div>

                <h3 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Technologies I{" "}
                  <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                    work with.
                  </span>
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/35">
                  A collection of technologies I use to build modern,
                  responsive and production-ready web experiences.
                </p>
              </div>

              {/* STATUS */}
              <div className="flex cursor-pointer items-center gap-3 self-start rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-4 py-2 transition duration-300 hover:border-emerald-400/25 hover:bg-emerald-400/[0.07] lg:self-auto">

                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                  <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300/70">
                  Currently Learning
                </span>

              </div>
            </div>

            {/* TECHNOLOGY CARDS */}
            <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={SlideBottom(0.25 + index * 0.07)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="group relative cursor-pointer"
                >

                  {/* Card Glow */}
                  <div
                    className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 blur-md transition duration-500 group-hover:opacity-40`}
                  />

                  <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0C0C12]/90 p-5 backdrop-blur-xl transition-all duration-500 group-hover:border-white/[0.14]">

                    {/* Top */}
                    <div className="flex items-start justify-between">

                      <motion.div
                        whileHover={{
                          scale: 1.12,
                          rotate: 6,
                        }}
                        className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-br ${skill.color} text-xl text-white shadow-lg`}
                      >
                        {skill.icon}
                      </motion.div>

                      <span className="cursor-pointer text-[11px] font-bold text-white/30 transition-colors group-hover:text-white/70">
                        {skill.level}%
                      </span>

                    </div>

                    {/* Name */}
                    <div className="mt-5">

                      <h4 className="text-sm font-bold text-white transition-colors group-hover:text-violet-200">
                        {skill.name}
                      </h4>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/20">
                        {skill.category}
                      </p>

                    </div>

                    {/* Progress */}
                    <div className="mt-5">

                      <div className="relative h-1.5 overflow-hidden rounded-full bg-white/[0.06]">

                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${skill.level}%`,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 1.4,
                            delay: index * 0.08,
                            ease: "easeOut",
                          }}
                          className={`absolute left-0 top-0 h-full cursor-pointer rounded-full bg-gradient-to-r ${skill.color} shadow-[0_0_12px_rgba(139,92,246,.45)]`}
                        />

                      </div>

                      <div className="mt-2 flex items-center justify-between">

                        <span className="text-[8px] uppercase tracking-widest text-white/15">
                          Skill Level
                        </span>

                        <span className="text-[8px] uppercase tracking-widest text-white/20">
                          Advanced
                        </span>

                      </div>

                    </div>

                    {/* Bottom Glow */}
                    <div
                      className={`pointer-events-none absolute -bottom-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-gradient-to-r ${skill.color} opacity-0 blur-3xl transition duration-500 group-hover:opacity-30`}
                    />

                  </div>
                </motion.div>
              ))}

            </div>

            {/* MOVING TECHNOLOGY STRIP */}
            <div className="relative z-10 mt-8 overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.015] py-3">

              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#08080D] to-transparent" />

              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#08080D] to-transparent" />

              <motion.div
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex w-max items-center gap-8"
              >
                {[...marqueeSkills, ...marqueeSkills].map(
                  (skill, index) => (
                    <div
                      key={`${skill.name}-${index}`}
                      className="flex shrink-0 cursor-pointer items-center gap-2"
                    >

                      <span className="text-base text-violet-300/50">
                        {skill.icon}
                      </span>

                      <span className="text-[10px] font-medium uppercase tracking-wider text-white/25">
                        {skill.name}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-cyan-400/30" />

                    </div>
                  )
                )}
              </motion.div>
            </div>

            {/* FOOTER STATS */}
            <div className="relative z-10 mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

              <div className="cursor-pointer rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center transition duration-300 hover:border-violet-400/20 hover:bg-violet-500/[0.03]">
                <p className="text-xl font-black text-white">
                  {skills.length}+
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/20">
                  Technologies
                </p>
              </div>

              <div className="cursor-pointer rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center transition duration-300 hover:border-violet-400/20 hover:bg-violet-500/[0.03]">
                <p className="text-xl font-black text-violet-300">
                  3+
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/20">
                  Projects
                </p>
              </div>

              <div className="cursor-pointer rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-500/[0.03]">
                <p className="text-xl font-black text-cyan-300">
                  6+
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/20">
                  Months Learning
                </p>
              </div>

              <div className="cursor-pointer rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center transition duration-300 hover:border-fuchsia-400/20 hover:bg-fuchsia-500/[0.03]">
                <p className="text-xl font-black text-fuchsia-300">
                  100%
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/20">
                  Passion
                </p>
              </div>

            </div>

          </div>
        </motion.div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          variants={SlideUp(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.02] px-5 py-3">

            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/10">
              <FiCheck className="text-xs text-violet-300" />
            </div>

            <p className="text-xs text-white/30 sm:text-sm">
              Always learning.
              <span className="mx-1.5 text-violet-300/80">
                Always building.
              </span>
              <span className="text-cyan-300/80">
                Always improving.
              </span>
            </p>

          </div>
        </motion.div>

        {/* DECORATION */}
        <div className="mx-auto mt-2 flex items-center justify-center gap-4">

          <span className="h-px w-24 bg-gradient-to-r from-transparent to-violet-400/20" />

          <span className="relative flex h-2 w-2">

            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-40" />

            <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 shadow-[0_0_20px_rgba(139,92,246,.8)]" />

          </span>

          <span className="h-px w-24 bg-gradient-to-l from-transparent to-cyan-400/20" />

        </div>

      </div>
    </section>
  );
};

export default Skills;

