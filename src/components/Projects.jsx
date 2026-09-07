
import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiCode,
} from "react-icons/fi";

const Projects = () => {
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

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[120px]" />

      {/* ================= GRID BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= SECTION HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-md"
          >
            <FiCode className="text-cyan-400" />

            <span>My Recent Work</span>
          </motion.div>

          {/* Heading */}

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Here are some of the projects I have built using modern frontend
            technologies, responsive design and clean reusable components.
          </p>
        </motion.div>

        {/* ================= PROJECTS GRID ================= */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl shadow-black/20 backdrop-blur-xl"
            >

              {/* ================= IMAGE ================= */}

              <div className="relative h-56 overflow-hidden bg-slate-950">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />

                {/* Project Number */}

                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-slate-950/80 text-sm font-bold text-cyan-400 shadow-lg backdrop-blur-md">
                  0{project.id}
                </div>

                {/* External Icon */}

                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-950/80 text-slate-300 backdrop-blur-md transition duration-300 group-hover:border-cyan-400/40 group-hover:text-cyan-400">
                  <FiArrowUpRight size={19} />
                </div>

              </div>

              {/* ================= CONTENT ================= */}

              <div className="relative p-6">

                {/* Title */}

                <h3 className="text-xl font-bold text-slate-100 transition duration-300 group-hover:text-cyan-400">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                {/* ================= TECHNOLOGIES ================= */}

                <div className="mt-5 flex flex-wrap gap-2">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-300 transition duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* ================= BUTTONS ================= */}

                <div className="mt-6 flex gap-3">

                  {/* Live Demo */}

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/25"
                  >
                    <span>Live Demo</span>

                    <FiExternalLink
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </a>

                  {/* GitHub */}

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-950/70 text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    <FiGithub size={18} />
                  </a>

                </div>
              </div>

              {/* ================= CARD BOTTOM GLOW ================= */}

              <div className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

            </motion.article>
          ))}

        </div>

        {/* ================= BOTTOM ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-slate-500">
            More projects coming soon...
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;

