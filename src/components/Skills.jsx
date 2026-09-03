
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
      icon: "<>",
      color: "from-orange-400 to-red-500",
    },
    {
      name: "CSS3",
      level: 90,
      category: "Frontend",
      icon: "✦",
      color: "from-blue-400 to-cyan-400",
    },
    {
      name: "JavaScript",
      level: 85,
      category: "Frontend",
      icon: "JS",
      color: "from-yellow-400 to-orange-400",
    },
    {
      name: "React.js",
      level: 85,
      category: "Frontend",
      icon: "⚛",
      color: "from-cyan-300 to-blue-500",
    },
    {
      name: "Tailwind CSS",
      level: 90,
      category: "Frontend",
      icon: "≋",
      color: "from-cyan-400 to-teal-400",
    },
    {
      name: "PHP",
      level: 75,
      category: "Backend",
      icon: "PHP",
      color: "from-indigo-400 to-violet-500",
    },
    {
      name: "Laravel",
      level: 70,
      category: "Backend",
      icon: "L",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "MySQL",
      level: 75,
      category: "Database",
      icon: "DB",
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

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050507] px-2 pt-6 pb-0 text-white sm:px-2 sm:pt-4 sm:pb-0 md:px-2 md:pt-4 md:pb-0 lg:px-2 lg:pt-4 lg:pb-0"
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

            <span className="cursor-pointer rounded-full border border-violet-400/15 bg-violet-500/[0.07] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-violet-300">
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
              whileHover={{ y: -10 }}
              transition={{ duration: 0.35 }}
              className="group relative cursor-pointer"
            >
              <div className="absolute -inset-[1px] rounded-[1.5rem] bg-gradient-to-br from-violet-500 via-cyan-400 to-fuchsia-500 opacity-0 blur-[1px] transition duration-500 group-hover:opacity-80" />

              <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0A0A0F]/95 p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-transparent group-hover:shadow-[0_25px_80px_rgba(0,0,0,.55)]">
                <div className="absolute right-5 top-5 cursor-pointer text-[10px] font-bold tracking-[0.25em] text-white/15 transition-colors duration-300 group-hover:text-violet-300/40">
                  {category.number}
                </div>

                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl transition duration-500 group-hover:bg-violet-500/20" />

                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  className="relative mb-5 flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl border border-violet-400/15 bg-gradient-to-br from-violet-500/15 via-transparent to-cyan-400/[0.08] text-xl text-violet-300 shadow-[0_10px_35px_rgba(139,92,246,.1)]"
                >
                  <span className="cursor-pointer">{category.icon}</span>

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
                    <span
                      key={skill}
                      className="cursor-pointer rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[10px] font-medium text-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-violet-500/10 hover:text-violet-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20 transition-colors group-hover:text-violet-300/60">
                    Expertise
                  </span>

                  <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.025] transition-all duration-300 group-hover:border-violet-400/20 group-hover:bg-violet-500/10">
                    <FiArrowUpRight className="cursor-pointer text-sm text-white/25 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PROFICIENCY */}
        <motion.div
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mt-5"
        >
          <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-violet-500/40 via-cyan-400/30 to-fuchsia-500/40 opacity-40 blur-[1px]" />

          <div className="relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#09090D]/95 p-6 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-2xl sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet-500/[0.06] blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-[100px]" />

            <div className="relative z-10 mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/10">
                    <FiLayers className="cursor-pointer text-violet-300" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-300/70">
                    Technical Proficiency
                  </span>
                </div>

                <h3 className="text-2xl font-black sm:text-3xl">
                  Technologies I{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                    work with.
                  </span>
                </h3>
              </div>

              <p className="max-w-md text-sm leading-6 text-white/30">
                Skills developed through real projects, continuous practice
                and hands-on learning.
              </p>
            </div>

            <div className="relative z-10 grid gap-x-14 gap-y-7 md:grid-cols-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={SlideBottom(0.35 + index * 0.07)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="group/skill cursor-pointer"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`relative flex h-10 min-w-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${skill.color} px-1.5 text-[9px] font-black text-white shadow-lg transition duration-300 group-hover/skill:scale-110 group-hover/skill:shadow-[0_8px_25px_rgba(139,92,246,.2)]`}
                      >
                        {skill.icon}
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-white">
                          {skill.name}
                        </h4>

                        <p className="mt-0.5 text-[9px] uppercase tracking-[0.18em] text-white/20">
                          {skill.category}
                        </p>
                      </div>
                    </div>

                    <span className="text-sm font-bold text-white/50 transition-colors group-hover/skill:text-white">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="relative h-2 cursor-pointer overflow-hidden rounded-full bg-white/[0.05]">
                    <div
                      className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${skill.color} opacity-30 blur-md`}
                      style={{ width: `${skill.level}%` }}
                    />

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: index * 0.08,
                        ease: "easeOut",
                      }}
                      className={`relative h-full cursor-pointer rounded-full bg-gradient-to-r ${skill.color}`}
                    >
                      <div className="absolute right-0 top-1/2 h-1 w-8 -translate-y-1/2 rounded-full bg-white/60 blur-[2px]" />
                    </motion.div>
                  </div>

                  <div className="mt-2 flex justify-between text-[9px] uppercase tracking-wider text-white/15">
                    <span>Beginner</span>
                    <span>Advanced</span>
                  </div>
                </motion.div>
              ))}
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
          <div className="inline-flex cursor-pointer items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.02] px-5 py-3">
            <div className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-violet-500/10">
              <FiCheck className="cursor-pointer text-xs text-violet-300" />
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

          <span className="relative flex h-2 w-2 cursor-pointer">
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
