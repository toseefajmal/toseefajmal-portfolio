
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiCode,
  FiLayers,
} from "react-icons/fi";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "FoodMart",
      description:
        "A modern food marketplace with a clean and responsive interface for browsing food products and recipes.",
      image: "/project1.png",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "https://food-mart-zvdx.vercel.app/",
      githubLink: "https://github.com/toseefajmal",
    },
    {
      id: 2,
      title: "Vihla Commerce",
      description:
        "A modern e-commerce website with responsive product layouts, product details and a smooth shopping experience.",
      image: "/project2.png",
      technologies: ["React", "Tailwind CSS", "API"],
      liveLink: "https://vihla-commerce.vercel.app/",
      githubLink: "https://github.com/toseefajmal",
    },
    {
      id: 3,
      title: "Gym Website",
      description:
        "A professional fitness website with modern sections, responsive design and an engaging user interface.",
      image: "/project3.png",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://gym-website-tan-tau.vercel.app/",
      githubLink: "https://github.com/toseefajmal",
    },
    {
      id: 4,
      title: "EduSphere",
      description:
        "A modern learning management platform designed for courses, instructors and an interactive online learning experience.",
      image: "/project4.png",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveLink:
        "https://edu-sphere-4jinci9a6-toseefajmal07-3946s-projects.vercel.app/",
      githubLink: "https://github.com/toseefajmal",
    },
  ];

  const project = projects[activeProject];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#05070b] px-4 py-24 text-white sm:px-8 lg:px-12"
    >
      {/* Background Glows */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-0 top-40 h-80 w-80 rounded-full bg-cyan-500/[0.04] blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-20 right-0 h-96 w-96 rounded-full bg-violet-500/[0.04] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-400">
            <FiCode />
            <span>Selected Work</span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A collection of projects I have built using modern technologies,
            responsive layouts and reusable components.
          </p>
        </motion.div>

        {/* Main Project Area */}
        <div className="grid items-stretch gap-6 lg:grid-cols-2">

          {/* LEFT PREMIUM PROJECT NAVIGATION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-3"
          >
            {/* Top Label */}
            <div className="mb-2 flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2">
                <FiLayers className="text-cyan-400" size={15} />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Projects
                </span>
              </div>

              <span className="text-xs text-slate-600">
                {String(activeProject + 1).padStart(2, "0")} / 04
              </span>
            </div>

            {/* Project Items */}
            <div className="space-y-1">
              {projects.map((item, index) => {
                const active = activeProject === index;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveProject(index)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.985 }}
                    className={`group relative w-full cursor-pointer overflow-hidden rounded-xl px-4 py-5 text-left transition-all duration-300 ${
                      active
                        ? "border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.08] to-transparent"
                        : "border border-transparent hover:bg-white/[0.035]"
                    }`}
                  >
                    {/* Active Glow */}
                    {active && (
                      <motion.div
                        layoutId="active-project-glow"
                        className="absolute inset-0 bg-cyan-400/[0.025]"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    <div className="relative flex items-center gap-4">

                      {/* Number */}
                      <motion.div
                        animate={
                          active
                            ? {
                                scale: [1, 1.08, 1],
                              }
                            : {
                                scale: 1,
                              }
                        }
                        transition={{
                          duration: 2,
                          repeat: active ? Infinity : 0,
                        }}
                        className={`flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg border text-xs font-bold ${
                          active
                            ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-400"
                            : "border-white/[0.06] bg-white/[0.02] text-slate-600"
                        }`}
                      >
                        0{item.id}
                      </motion.div>

                      {/* Title + Small Info */}
                      <div className="min-w-0 flex-1">
                        <div
                          className={`text-base font-semibold transition-colors duration-300 ${
                            active
                              ? "text-white"
                              : "text-slate-500 group-hover:text-slate-300"
                          }`}
                        >
                          {item.title}
                        </div>

                        <div
                          className={`mt-1 text-xs transition-colors ${
                            active
                              ? "text-cyan-400/70"
                              : "text-slate-700 group-hover:text-slate-600"
                          }`}
                        >
                          {item.technologies[0]}{" "}
                          <span className="mx-1">•</span>{" "}
                          {item.technologies[1]}
                        </div>
                      </div>

                      {/* Arrow */}
                      <motion.div
                        animate={
                          active
                            ? {
                                x: [0, 4, 0],
                                opacity: 1,
                              }
                            : {
                                x: 5,
                                opacity: 0.25,
                              }
                        }
                        transition={{
                          duration: 1.5,
                          repeat: active ? Infinity : 0,
                          ease: "easeInOut",
                        }}
                        className={`shrink-0 cursor-pointer ${
                          active
                            ? "text-cyan-400"
                            : "text-slate-700 group-hover:text-slate-500"
                        }`}
                      >
                        <FiArrowUpRight size={19} />
                      </motion.div>
                    </div>

                    {/* Active Bottom Line */}
                    {active && (
                      <motion.div
                        layoutId="active-project-line"
                        className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-cyan-400/60 via-cyan-400/20 to-transparent"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Bottom Info */}
            <div className="mt-3 border-t border-white/[0.05] px-4 py-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-600">
                  Featured work
                </span>

                <motion.span
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="flex cursor-pointer items-center gap-1.5 text-xs text-cyan-400/70"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Available
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT PREMIUM PREVIEW */}
          <div className="min-w-0">

            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={{
                  opacity: 0,
                  scale: 0.96,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.97,
                  y: -15,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3 },
                }}
                className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025]"
              >

                {/* Animated Border */}
                <motion.div
                  animate={{
                    opacity: [0.15, 0.4, 0.15],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-0 z-20 rounded-2xl border border-cyan-400/30"
                />

                {/* Image */}
                <div className="group relative h-56 cursor-pointer overflow-hidden bg-[#090b10] sm:h-64">

                  <motion.img
                    key={project.image}
                    initial={{
                      scale: 1.12,
                      opacity: 0.4,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.06,
                    }}
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full cursor-pointer object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070b] via-[#05070b]/20 to-transparent" />

                  {/* Moving Light */}
                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                  />

                  {/* Number */}
                  <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute left-4 top-4 cursor-pointer rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md"
                  >
                    0{project.id}
                  </motion.div>

                  {/* External Link */}
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-black/40 text-slate-300 backdrop-blur-md transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    <FiArrowUpRight size={17} />
                  </motion.a>
                </div>

                {/* Content */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 0.4,
                  }}
                  className="p-5 sm:p-6"
                >
                  <motion.h3
                    key={project.title}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="text-2xl font-bold text-white"
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    key={project.description}
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.08,
                      duration: 0.35,
                    }}
                    className="mt-3 text-sm leading-6 text-slate-400"
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology, index) => (
                      <motion.span
                        key={technology}
                        initial={{
                          opacity: 0,
                          y: 8,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.1 + index * 0.08,
                        }}
                        whileHover={{
                          y: -3,
                        }}
                        className="cursor-pointer rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400 transition-colors hover:border-cyan-400/30 hover:text-cyan-400"
                      >
                        {technology}
                      </motion.span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex gap-2">

                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{
                        y: -2,
                        scale: 1.01,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-cyan-400"
                    >
                      Live Demo
                      <FiExternalLink size={15} />
                    </motion.a>

                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub`}
                      whileHover={{
                        y: -2,
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
                    >
                      <FiGithub size={17} />
                    </motion.a>

                  </div>
                </motion.div>

                {/* Bottom Glow */}
                <motion.div
                  animate={{
                    opacity: [0, 0.25, 0],
                    scale: [0.8, 1.1, 0.8],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {projects.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveProject(index)}
              whileHover={{ scale: 1.2 }}
              className={`h-1 cursor-pointer rounded-full transition-all duration-300 ${
                activeProject === index
                  ? "w-8 bg-cyan-400"
                  : "w-2 bg-slate-700"
              }`}
              aria-label={`Show ${item.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

