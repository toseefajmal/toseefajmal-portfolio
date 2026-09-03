
import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiPlay,
  FiCheckCircle,
  FiCode,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-72 w-72 cursor-pointer rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute -right-32 bottom-20 h-80 w-80 cursor-pointer rounded-full bg-blue-600/20 blur-[120px]" />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full cursor-pointer"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-md"
            >
              <LuSparkles className="cursor-pointer text-cyan-400" />

              <span>Welcome to my portfolio</span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span>Hi, I'm </span>

              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                Toseef
              </span>

              <br />

              <span className="text-slate-200">
                Ajmal
              </span>
            </h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-5 flex items-center justify-center gap-3 text-lg font-medium text-slate-300 sm:text-xl lg:justify-start"
            >
              <FiCode className="cursor-pointer text-cyan-400" />

              <span>
                Frontend & React Developer
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg lg:mx-0"
            >
              I build modern, responsive and user-friendly web applications
              using React, Tailwind CSS and modern frontend technologies.
              I love turning ideas into beautiful digital experiences.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-400 lg:justify-start"
            >
              <div className="flex cursor-pointer items-center gap-2">
                <FiCheckCircle className="cursor-pointer text-cyan-400" />

                <span>
                  Responsive Design
                </span>
              </div>

              <div className="flex cursor-pointer items-center gap-2">
                <FiCheckCircle className="cursor-pointer text-cyan-400" />

                <span>
                  Modern UI
                </span>
              </div>

              <div className="flex cursor-pointer items-center gap-2">
                <FiCheckCircle className="cursor-pointer text-cyan-400" />

                <span>
                  Clean Code
                </span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              {/* View Work */}
              <a
                href="#projects"
                className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30"
              >
                <span>
                  View My Work
                </span>

                <FiArrowRight className="cursor-pointer transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-7 py-3.5 font-semibold text-slate-200 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-400"
              >
                <span>
                  Contact Me
                </span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-9 flex justify-center gap-4 lg:justify-start"
            >
              {/* GitHub */}
              <a
                href="https://github.com/toseefajmal"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-slate-800 bg-slate-900/70 text-slate-400 transition hover:border-cyan-400/40 hover:text-cyan-400"
              >
                <FiGithub
                  size={19}
                  className="cursor-pointer"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-slate-800 bg-slate-900/70 text-slate-400 transition hover:border-cyan-400/40 hover:text-cyan-400"
              >
                <FiLinkedin
                  size={19}
                  className="cursor-pointer"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Outer Glow */}
            <div className="absolute inset-0 cursor-pointer rounded-[2rem] bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl" />

            {/* Main Card */}
            <div className="relative cursor-pointer rounded-[2rem] border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6">

              {/* Top Bar */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 cursor-pointer rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 cursor-pointer rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 cursor-pointer rounded-full bg-green-400/80" />
                </div>

                <span className="text-xs text-slate-500">
                  developer.jsx
                </span>
              </div>

              {/* Code Window */}
              <div className="cursor-pointer rounded-2xl border border-slate-800 bg-slate-950 p-5 font-mono text-sm leading-7 sm:p-6">

                <div>
                  <span className="cursor-pointer text-violet-400">
                    const
                  </span>{" "}

                  <span className="cursor-pointer text-cyan-300">
                    developer
                  </span>{" "}

                  <span className="cursor-pointer text-slate-500">
                    =
                  </span>{" "}

                  <span className="cursor-pointer text-yellow-300">
                    {"{"}
                  </span>
                </div>

                <div className="pl-5">
                  <span className="cursor-pointer text-blue-400">
                    name
                  </span>

                  <span className="text-slate-500">
                    :
                  </span>{" "}

                  <span className="cursor-pointer text-green-400">
                    "Toseef Ajmal"
                  </span>

                  <span className="text-slate-500">
                    ,
                  </span>
                </div>

                <div className="pl-5">
                  <span className="cursor-pointer text-blue-400">
                    role
                  </span>

                  <span className="text-slate-500">
                    :
                  </span>{" "}

                  <span className="cursor-pointer text-green-400">
                    "React Developer"
                  </span>

                  <span className="text-slate-500">
                    ,
                  </span>
                </div>

                <div className="pl-5">
                  <span className="cursor-pointer text-blue-400">
                    skills
                  </span>

                  <span className="text-slate-500">
                    :
                  </span>{" "}

                  <span className="cursor-pointer text-yellow-300">
                    [
                  </span>
                </div>

                <div className="cursor-pointer pl-10 text-green-400">
                  "React",
                </div>

                <div className="cursor-pointer pl-10 text-green-400">
                  "Tailwind CSS",
                </div>

                <div className="cursor-pointer pl-10 text-green-400">
                  "JavaScript",
                </div>

                <div className="cursor-pointer pl-10 text-green-400">
                  "HTML & CSS"
                </div>

                <div className="cursor-pointer pl-5 text-yellow-300">
                  ]
                </div>

                <div>
                  <span className="cursor-pointer text-yellow-300">
                    {"}"}
                  </span>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="mt-5 grid grid-cols-3 gap-3">

                <div className="cursor-pointer rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-center">
                  <p className="text-lg font-bold text-cyan-400">
                    3+
                  </p>

                  <p className="text-[11px] text-slate-500">
                    Projects
                  </p>
                </div>

                <div className="cursor-pointer rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-center">
                  <p className="text-lg font-bold text-blue-400">
                    6+
                  </p>

                  <p className="text-[11px] text-slate-500">
                    Months
                  </p>
                </div>

                <div className="cursor-pointer rounded-xl border border-slate-800 bg-slate-950/70 p-3 text-center">
                  <p className="text-lg font-bold text-violet-400">
                    100%
                  </p>

                  <p className="text-[11px] text-slate-500">
                    Passion
                  </p>
                </div>

              </div>
            </div>

            {/* Floating Play Button */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 -top-5 hidden cursor-pointer rounded-2xl border border-cyan-400/20 bg-slate-900/90 p-3 shadow-xl backdrop-blur-md sm:block"
            >
              <FiPlay className="cursor-pointer text-cyan-400" />
            </motion.div>

            {/* Floating Sparkles */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-4 hidden cursor-pointer rounded-2xl border border-blue-400/20 bg-slate-900/90 p-3 shadow-xl backdrop-blur-md sm:block"
            >
              <LuSparkles className="cursor-pointer text-blue-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500 sm:flex"
      >
        <span>
          Scroll Down
        </span>

        <div className="h-8 w-[1px] cursor-pointer bg-gradient-to-b from-cyan-400 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

