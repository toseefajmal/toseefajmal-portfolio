
import React from "react";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiArrowUpRight,
  FiCode,
  FiCheckCircle,
} from "react-icons/fi";

import {
  SlideLeft,
  SlideRight,
  SlideUp,
  SlideBottom,
} from "./Animation";

const Experience = () => {
  const experiences = [
    {
      role: "Front-End Developer",
      company: "Freelance",
      type: "Remote",
      duration: "2026 - Present",
      location: "Pakistan",
      description:
        "Building modern, responsive and user-friendly web applications using React, Tailwind CSS and modern frontend technologies.",
      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Framer Motion",
      ],
      current: true,
    },
    {
      role: "React Developer",
      company: "Personal Projects",
      type: "Project Based",
      duration: "2025 - 2026",
      location: "Pakistan",
      description:
        "Developed multiple frontend projects with reusable components, responsive layouts, API integration and modern UI/UX principles.",
      technologies: [
        "React",
        "JavaScript",
        "REST APIs",
        "Git",
      ],
      current: false,
    },
    {
      role: "Web Developer",
      company: "Learning & Development",
      type: "Self Learning",
      duration: "2025 - 2026",
      location: "Pakistan",
      description:
        "Started my web development journey by learning the fundamentals of frontend development and gradually building real-world projects.",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
      ],
      current: false,
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050507] px-5 py-16 text-white sm:px-8 sm:py-20 md:px-12 lg:px-16 lg:py-24"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-60 top-20 h-[450px] w-[450px] rounded-full bg-violet-600/[0.06] blur-[150px]" />

        <div className="absolute -right-60 bottom-20 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.05] blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/[0.025] blur-[140px]" />
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

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}

        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <motion.div
            variants={SlideUp(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-violet-400/70" />

            <span className="cursor-pointer rounded-full border border-violet-400/15 bg-violet-500/[0.07] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-violet-300">
              My Journey
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400/70" />
          </motion.div>

          <motion.h2
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl"
          >
            My{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Experience.
            </span>
          </motion.h2>

          <motion.p
            variants={SlideLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/35 sm:text-base"
          >
            My journey in web development, from learning the fundamentals to
            building modern and scalable web experiences.
          </motion.p>
        </div>

        {/* Experience Timeline */}

        <div className="relative">
          {/* Timeline Line */}

          <div className="absolute left-[18px] top-0 hidden h-full w-px bg-gradient-to-b from-violet-500/40 via-fuchsia-400/20 to-cyan-400/30 md:block" />

          <div className="space-y-7 md:space-y-9">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.role + experience.company}
                variants={
                  index % 2 === 0
                    ? SlideLeft(0.2 + index * 0.15)
                    : SlideRight(0.2 + index * 0.15)
                }
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="relative md:pl-14"
              >
                {/* Timeline Dot */}

                <div className="absolute left-[11px] top-8 z-20 hidden h-4 w-4 cursor-pointer items-center justify-center rounded-full border border-violet-400/40 bg-[#050507] md:flex">
                  <span
                    className={`h-1.5 w-1.5 cursor-pointer rounded-full ${
                      experience.current
                        ? "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.9)]"
                        : "bg-violet-400 shadow-[0_0_12px_rgba(139,92,246,.7)]"
                    }`}
                  />
                </div>

                {/* Card */}

                <div className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#09090D]/95 p-6 shadow-[0_20px_70px_rgba(0,0,0,.4)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/20 sm:p-7 lg:p-8">
                  {/* Card Glow */}

                  <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-500/[0.06] blur-[90px] transition-all duration-500 group-hover:bg-violet-500/[0.1]" />

                  <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-cyan-500/[0.04] blur-[90px]" />

                  {/* Top */}

                  <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex gap-4">
                      <motion.div
                        whileHover={{ rotate: 8, scale: 1.08 }}
                        className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-violet-400/15 bg-gradient-to-br from-violet-500/15 to-cyan-400/[0.05] text-xl text-violet-300 shadow-[0_10px_30px_rgba(139,92,246,.1)]"
                      >
                        <FiBriefcase className="cursor-pointer" />
                      </motion.div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl font-black text-white sm:text-2xl">
                            {experience.role}
                          </h3>

                          {experience.current && (
                            <span className="flex cursor-pointer items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-300/80">
                              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                              Current
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-sm font-semibold text-violet-300/70">
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    {/* Date & Location */}

                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      <span className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-2 text-[10px] font-semibold text-white/35">
                        <FiCalendar className="cursor-pointer text-violet-300/60" />
                        {experience.duration}
                      </span>

                      <span className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-2 text-[10px] font-semibold text-white/35">
                        <FiMapPin className="cursor-pointer text-cyan-300/60" />
                        {experience.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}

                  <div className="relative z-10 mt-6 border-t border-white/[0.06] pt-5">
                    <p className="max-w-3xl text-sm leading-7 text-white/35">
                      {experience.description}
                    </p>
                  </div>

                  {/* Technologies */}

                  <div className="relative z-10 mt-6 flex flex-wrap items-center gap-2">
                    <div className="mr-1 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/20">
                      <FiCode className="cursor-pointer text-violet-300/50" />
                      Stack
                    </div>

                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="cursor-pointer rounded-lg border border-white/[0.06] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium text-white/40 transition-all duration-300 group-hover:border-violet-400/10 group-hover:text-white/60"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}

                  <div className="absolute bottom-7 right-7 hidden h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-white/20 transition-all duration-300 group-hover:border-violet-400/20 group-hover:bg-violet-500/10 group-hover:text-violet-300 sm:flex">
                    <FiArrowUpRight className="cursor-pointer" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom */}

        <motion.div
          variants={SlideBottom(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <div className="flex cursor-pointer items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.02] px-5 py-3">
            <FiCheckCircle className="cursor-pointer text-sm text-emerald-400/70" />

            <span className="text-xs text-white/30">
              Always learning. Always building.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
