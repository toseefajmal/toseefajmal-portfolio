
import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiLayers,
  FiServer,
  FiGitBranch,
  FiArrowUpRight,
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
      color: "from-orange-500 to-red-500",
    },
    {
      name: "CSS3",
      level: 90,
      category: "Frontend",
      icon: "✦",
      color: "from-blue-500 to-cyan-400",
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
      color: "from-cyan-400 to-blue-500",
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
      title: "Frontend Development",
      description:
        "Building modern, responsive and interactive user interfaces.",
      icon: <FiCode />,
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      description:
        "Creating structured backend applications and web solutions.",
      icon: <FiServer />,
      skills: ["PHP", "Laravel"],
    },
    {
      title: "Database",
      description:
        "Working with structured data and database-driven applications.",
      icon: <FiDatabase />,
      skills: ["MySQL"],
    },
    {
      title: "Tools & Workflow",
      description:
        "Using modern development tools to manage and build projects.",
      icon: <FiGitBranch />,
      skills: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#07070B] px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -left-60 top-10 h-[550px] w-[550px] rounded-full bg-violet-600/[0.08] blur-[160px]" />

      <div className="pointer-events-none absolute -right-60 bottom-0 h-[550px] w-[550px] rounded-full bg-cyan-500/[0.06] blur-[160px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/[0.025] blur-[140px]" />

      {/* Premium Grid */}
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
              My Skills
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
            Skills &{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Expertise.
            </span>
          </motion.h2>

          <motion.p
            variants={SlideLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8"
          >
            Technologies and tools I use to transform ideas into modern,
            responsive and engaging web experiences.
          </motion.p>
        </div>

        {/* =====================================================
            CATEGORY CARDS
        ====================================================== */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={SlideUp(0.3 + index * 0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -8,
                scale: 1.015,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="group relative cursor-pointer rounded-[1.4rem] p-[1px]"
            >

              {/* Animated Rainbow Border */}

              <div className="absolute inset-0 rounded-[1.4rem] bg-[linear-gradient(90deg,#8b5cf6,#06b6d4,#ec4899,#f59e0b,#8b5cf6)] bg-[length:300%_100%] opacity-0 blur-[1px] transition-opacity duration-300 group-hover:animate-[borderMove_2.5s_linear_infinite] group-hover:opacity-100" />

              {/* Outer Glow */}

              <div className="absolute -inset-1 rounded-[1.5rem] bg-gradient-to-r from-violet-500/0 via-cyan-400/0 to-fuchsia-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:from-violet-500/10 group-hover:via-cyan-400/10 group-hover:to-fuchsia-500/10 group-hover:opacity-100" />

              {/* Card */}

              <div className="relative h-full overflow-hidden rounded-[1.4rem] border border-white/[0.08] bg-[#0B0B10]/95 p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-transparent group-hover:bg-[#0D0D14] group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.55)]">

                {/* Card Shine */}

                <div className="pointer-events-none absolute -left-32 top-0 h-full w-32 rotate-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

                {/* Corner Glow */}

                <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-violet-500/[0.08] blur-3xl transition-all duration-500 group-hover:bg-violet-500/[0.18]" />

                <div className="relative z-10">

                  {/* Icon Row */}

                  <div className="mb-7 flex items-center justify-between">

                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.12 }}
                      className="flex h-13 w-13 items-center justify-center rounded-2xl border border-violet-400/15 bg-gradient-to-br from-violet-500/15 to-cyan-400/[0.05] text-xl text-violet-300 shadow-[0_8px_30px_rgba(139,92,246,0.08)]"
                    >
                      {category.icon}
                    </motion.div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.025] transition-all duration-300 group-hover:border-violet-400/20 group-hover:bg-violet-500/10">
                      <FiArrowUpRight className="text-lg text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
                    </div>

                  </div>

                  {/* Title */}

                  <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-violet-100">
                    {category.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 text-sm leading-6 text-white/40 transition-colors duration-300 group-hover:text-white/55">
                    {category.description}
                  </p>

                  {/* Divider */}

                  <div className="my-6 h-px w-full bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" />

                  {/* Skills */}

                  <div className="flex flex-wrap gap-2">

                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="cursor-pointer rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[11px] font-medium text-white/45 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/25 hover:bg-violet-500/10 hover:text-violet-200"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* =====================================================
            PROFICIENCY
        ====================================================== */}

        <motion.div
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="group relative mt-8 rounded-[2rem] p-[1px]"
        >

          {/* Animated Border */}

          <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(90deg,#8b5cf6,#06b6d4,#ec4899,#f59e0b,#8b5cf6)] bg-[length:300%_100%] opacity-0 transition-opacity duration-500 group-hover:animate-[borderMove_3s_linear_infinite] group-hover:opacity-100" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0B0B10]/95 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:p-8 lg:p-10">

            {/* Background Glow */}

            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-violet-500/[0.07] blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-cyan-500/[0.05] blur-[100px]" />

            {/* Header */}

            <div className="relative z-10 mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

              <div>

                <div className="mb-3 flex items-center gap-2.5">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-400/10 bg-violet-500/10">
                    <FiLayers className="text-violet-400" />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/70">
                    Technical Proficiency
                  </span>

                </div>

                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  Technologies I{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                    work with.
                  </span>
                </h3>

              </div>

              <p className="max-w-md text-sm leading-6 text-white/35">
                A growing toolkit built through projects, practice and
                continuous learning.
              </p>

            </div>

            {/* Skills */}

            <div className="relative z-10 grid gap-x-12 gap-y-8 md:grid-cols-2">

              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={SlideBottom(0.4 + index * 0.08)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="group/skill cursor-pointer"
                >

                  {/* Name */}

                  <div className="mb-3 flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div
                        className={`flex h-9 min-w-9 items-center justify-center rounded-xl bg-gradient-to-br ${skill.color} px-1.5 text-[10px] font-bold text-white shadow-lg transition-all duration-300 group-hover/skill:scale-110`}
                      >
                        {skill.icon}
                      </div>

                      <div>

                        <h4 className="text-sm font-semibold text-white">
                          {skill.name}
                        </h4>

                        <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/25">
                          {skill.category}
                        </p>

                      </div>

                    </div>

                    <span className="text-sm font-semibold text-white/60 transition-colors duration-300 group-hover/skill:text-white">
                      {skill.level}%
                    </span>

                  </div>

                  {/* Progress Background */}

                  <div className="relative h-2 overflow-hidden rounded-full bg-white/[0.06]">

                    {/* Glow */}

                    <div
                      className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${skill.color} opacity-20 blur-md`}
                      style={{
                        width: `${skill.level}%`,
                      }}
                    />

                    {/* Progress */}

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.3,
                        delay: index * 0.08,
                        ease: "easeOut",
                      }}
                      className={`relative h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    />

                  </div>

                </motion.div>
              ))}

            </div>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM TEXT
        ====================================================== */}

        <motion.div
          variants={SlideUp(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-white/30">
            Always learning.{" "}
            <span className="text-violet-300/70">
              Always building.
            </span>{" "}
            <span className="text-cyan-300/70">
              Always improving.
            </span>
          </p>
        </motion.div>

        {/* Bottom Decoration */}

        <div className="mx-auto mt-16 flex items-center justify-center gap-4">

          <span className="h-px w-20 bg-gradient-to-r from-transparent to-violet-400/20" />

          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 shadow-[0_0_15px_rgba(139,92,246,0.8)]" />

          <span className="h-px w-20 bg-gradient-to-l from-transparent to-cyan-400/20" />

        </div>

      </div>
    </section>
  );
};

export default Skills;







