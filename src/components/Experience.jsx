
import React from "react";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiCheckCircle,
} from "react-icons/fi";

const experiences = [
  {
    role: "Front-End Developer",
    company: "Freelance",
    duration: "2026 - Present",
    location: "Pakistan",
    description:
      "Building responsive web applications with React, Tailwind CSS and modern UI.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    current: true,
  },
  {
    role: "React Developer",
    company: "Personal Projects",
    duration: "2025 - 2026",
    location: "Pakistan",
    description:
      "Created frontend projects with reusable components, APIs and responsive layouts.",
    technologies: ["React", "REST APIs", "Git"],
    current: false,
  },
  {
    role: "Web Developer",
    company: "Learning & Development",
    duration: "2025 - 2026",
    location: "Pakistan",
    description:
      "Started web development by learning HTML, CSS, Bootstrap and JavaScript.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    current: false,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#06070a] px-5 py-16 text-white sm:px-8 sm:py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-violet-600/[0.06] blur-[110px]" />

        <div className="absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-cyan-500/[0.05] blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-violet-400/50" />

            <span className="text-[10px] uppercase tracking-[0.25em] text-violet-300">
              My Journey
            </span>

            <span className="h-px w-7 bg-cyan-400/50" />
          </div>

          <h2 className="text-3xl font-medium sm:text-4xl">
            My{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              Experience.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
            A short journey of learning, building and growing as a developer.
          </p>
        </motion.div>

        {/* Compact Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Curved Line */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[180px] -translate-x-1/2 md:block">
            <svg
              viewBox="0 0 180 600"
              className="h-full w-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#d946ef" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>

              {/* Base Line */}
              <path
                d="M90 0 C90 100 20 120 20 200 C20 280 160 320 160 400 C160 480 90 500 90 600"
                fill="none"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="1.5"
              />

              {/* Animated Line */}
              <motion.path
                d="M90 0 C90 100 20 120 20 200 C20 280 160 320 160 400 C160 480 90 500 90 600"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </div>

          {/* Experiences */}
          <div className="space-y-8 md:space-y-2">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.role}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                className={`relative flex items-center md:min-h-[190px] ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Mobile Line */}
                <div className="absolute bottom-[-32px] left-[14px] top-10 w-px bg-gradient-to-b from-violet-400/40 to-cyan-400/10 last:hidden md:hidden" />

                {/* Mobile Dot */}
                <div className="absolute left-0 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-violet-400/30 bg-[#06070a] md:hidden">
                  <div className="h-2 w-2 rounded-full bg-violet-400" />
                </div>

                {/* Content */}
                <div
                  className={`w-full cursor-pointer rounded-2xl border border-transparent p-3 pl-12 transition-all duration-300 hover:border-white/[0.07] hover:bg-white/[0.02] md:w-[42%] md:pl-3 ${
                    index % 2 === 0
                      ? "md:pr-4 md:text-right"
                      : "md:pl-4 md:text-left"
                  }`}
                >
                  <div
                    className={`flex flex-wrap items-center gap-2 ${
                      index % 2 === 0
                        ? "md:justify-end"
                        : "md:justify-start"
                    }`}
                  >
                    {index % 2 === 0 && (
                      <span className="hidden text-[10px] text-slate-600 md:block">
                        {experience.duration}
                      </span>
                    )}

                    <h3 className="text-lg font-medium text-white">
                      {experience.role}
                    </h3>

                    {experience.current && (
                      <span className="cursor-pointer rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-2 py-1 text-[8px] uppercase tracking-wider text-emerald-300">
                        Current
                      </span>
                    )}

                    {index % 2 !== 0 && (
                      <span className="hidden text-[10px] text-slate-600 md:block">
                        {experience.duration}
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-xs text-violet-300/70">
                    {experience.company}
                  </p>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div
                    className={`mt-3 flex flex-wrap gap-1.5 ${
                      index % 2 === 0
                        ? "md:justify-end"
                        : "md:justify-start"
                    }`}
                  >
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="cursor-pointer rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[9px] text-slate-500 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-400/[0.05] hover:text-violet-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Location */}
                  <div
                    className={`mt-2 flex items-center gap-2 text-[9px] text-slate-600 ${
                      index % 2 === 0
                        ? "md:justify-end"
                        : "md:justify-start"
                    }`}
                  >
                    <FiMapPin className="text-cyan-400/50" />

                    {experience.location}
                  </div>
                </div>

                {/* Desktop Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.2 + 0.3,
                  }}
                  className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:flex"
                >
                  <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-violet-400/30 bg-[#08090d] shadow-[0_0_20px_rgba(139,92,246,0.18)] transition-all duration-300 hover:scale-110 hover:border-violet-400/60 hover:shadow-[0_0_28px_rgba(139,92,246,0.3)]">
                    <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <FiCheckCircle className="text-emerald-400/60" />

            Always learning. Always building.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

