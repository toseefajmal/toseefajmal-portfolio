
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
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-24 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="min-w-0 text-center lg:text-left"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/15">
              <LuSparkles className="text-cyan-400" />
              Welcome to my portfolio
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                Toseef
              </span>
              <br />
              <span className="text-slate-200">Ajmal</span>
            </h1>

            {/* Role */}
            <div className="mt-5 flex items-center justify-center gap-3 text-lg font-medium text-slate-300 sm:text-xl lg:justify-start">
              <FiCode className="shrink-0 text-cyan-400" />
              <span>Frontend & React Developer</span>
            </div>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg lg:mx-0">
              I build modern, responsive and user-friendly web applications
              using React, Tailwind CSS and modern frontend technologies.
              I love turning ideas into beautiful digital experiences.
            </p>

            {/* FEATURES MARQUEE */}
            <div className="mt-7 w-full overflow-hidden">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex w-max gap-3"
              >
                {/* First Set */}
                <div className="flex gap-3">
                  <div className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 text-xs text-slate-400 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-slate-300 sm:px-4 sm:text-sm">
                    <FiCheckCircle className="shrink-0 text-cyan-400" />
                    Responsive Design
                  </div>

                  <div className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 text-xs text-slate-400 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-slate-300 sm:px-4 sm:text-sm">
                    <FiCheckCircle className="shrink-0 text-cyan-400" />
                    Modern UI
                  </div>

                  <div className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 text-xs text-slate-400 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-slate-300 sm:px-4 sm:text-sm">
                    <FiCheckCircle className="shrink-0 text-cyan-400" />
                    Clean Code
                  </div>
                </div>

                {/* Duplicate Set */}
                <div className="flex gap-3">
                  <div className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 text-xs text-slate-400 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-slate-300 sm:px-4 sm:text-sm">
                    <FiCheckCircle className="shrink-0 text-cyan-400" />
                    Responsive Design
                  </div>

                  <div className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 text-xs text-slate-400 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-slate-300 sm:px-4 sm:text-sm">
                    <FiCheckCircle className="shrink-0 text-cyan-400" />
                    Modern UI
                  </div>

                  <div className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-2 text-xs text-slate-400 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-slate-300 sm:px-4 sm:text-sm">
                    <FiCheckCircle className="shrink-0 text-cyan-400" />
                    Clean Code
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1"
              >
                View My Work
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-7 py-3.5 font-semibold text-slate-200 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-400"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-9 flex justify-center gap-4 lg:justify-start">
              <a
                href="https://github.com/toseefajmal"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-slate-800 bg-slate-900/70 text-slate-400 transition duration-300 hover:border-cyan-400/40 hover:text-cyan-400 hover:-translate-y-1"
              >
                <FiGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/toseef-ajmal/"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-slate-800 bg-slate-900/70 text-slate-400 transition duration-300 hover:border-cyan-400/40 hover:text-cyan-400 hover:-translate-y-1"
              >
                <FiLinkedin size={19} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md min-w-0"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl" />

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 p-4 shadow-2xl backdrop-blur-xl sm:p-6">

              {/* Top */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>

                <span className="cursor-pointer text-xs text-slate-500">
                  developer.jsx
                </span>
              </div>

              {/* Code */}
              <div className="cursor-pointer overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs leading-7 transition duration-300 hover:border-cyan-400/20 sm:p-6 sm:text-sm">
                <p>
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-cyan-300">developer</span>{" "}
                  <span className="text-slate-500">=</span>{" "}
                  <span className="text-yellow-300">{"{"}</span>
                </p>

                <p className="pl-4 sm:pl-5">
                  <span className="text-blue-400">name</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-green-400">
                    "Toseef Ajmal"
                  </span>
                </p>

                <p className="pl-4 sm:pl-5">
                  <span className="text-blue-400">role</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-green-400">
                    "React Developer"
                  </span>
                </p>

                <p className="pl-4 sm:pl-5">
                  <span className="text-blue-400">skills</span>
                  <span className="text-slate-500">:</span>{" "}
                  <span className="text-green-400">
                    "React, Tailwind, JS"
                  </span>
                </p>

                <p>
                  <span className="text-yellow-300">{"}"}</span>
                </p>
              </div>

              {/* STATS MARQUEE */}
              <div className="mt-5 w-full overflow-hidden">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex w-max gap-2 sm:gap-3"
                >
                  {/* First Set */}
                  <div className="flex gap-2 sm:gap-3">
                    <div className="w-24 shrink-0 cursor-pointer rounded-xl border border-slate-800 bg-slate-950/70 p-2.5 text-center transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 sm:w-28 sm:p-3">
                      <p className="text-base font-bold text-cyan-400 sm:text-lg">
                        3+
                      </p>
                      <p className="text-[10px] text-slate-500 sm:text-[11px]">
                        Projects
                      </p>
                    </div>

                    <div className="w-24 shrink-0 cursor-pointer rounded-xl border border-slate-800 bg-slate-950/70 p-2.5 text-center transition duration-300 hover:border-blue-400/30 hover:bg-blue-400/5 sm:w-28 sm:p-3">
                      <p className="text-base font-bold text-blue-400 sm:text-lg">
                        6+
                      </p>
                      <p className="text-[10px] text-slate-500 sm:text-[11px]">
                        Months
                      </p>
                    </div>

                    <div className="w-24 shrink-0 cursor-pointer rounded-xl border border-slate-800 bg-slate-950/70 p-2.5 text-center transition duration-300 hover:border-violet-400/30 hover:bg-violet-400/5 sm:w-28 sm:p-3">
                      <p className="text-base font-bold text-violet-400 sm:text-lg">
                        100%
                      </p>
                      <p className="text-[10px] text-slate-500 sm:text-[11px]">
                        Passion
                      </p>
                    </div>
                  </div>

                  {/* Duplicate Set */}
                  <div className="flex gap-2 sm:gap-3">
                    <div className="w-24 shrink-0 cursor-pointer rounded-xl border border-slate-800 bg-slate-950/70 p-2.5 text-center transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 sm:w-28 sm:p-3">
                      <p className="text-base font-bold text-cyan-400 sm:text-lg">
                        3+
                      </p>
                      <p className="text-[10px] text-slate-500 sm:text-[11px]">
                        Projects
                      </p>
                    </div>

                    <div className="w-24 shrink-0 cursor-pointer rounded-xl border border-slate-800 bg-slate-950/70 p-2.5 text-center transition duration-300 hover:border-blue-400/30 hover:bg-blue-400/5 sm:w-28 sm:p-3">
                      <p className="text-base font-bold text-blue-400 sm:text-lg">
                        6+
                      </p>
                      <p className="text-[10px] text-slate-500 sm:text-[11px]">
                        Months
                      </p>
                    </div>

                    <div className="w-24 shrink-0 cursor-pointer rounded-xl border border-slate-800 bg-slate-950/70 p-2.5 text-center transition duration-300 hover:border-violet-400/30 hover:bg-violet-400/5 sm:w-28 sm:p-3">
                      <p className="text-base font-bold text-violet-400 sm:text-lg">
                        100%
                      </p>
                      <p className="text-[10px] text-slate-500 sm:text-[11px]">
                        Passion
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating Play */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 -top-5 hidden cursor-pointer rounded-2xl border border-cyan-400/20 bg-slate-900/90 p-3 shadow-xl backdrop-blur-md transition duration-300 hover:border-cyan-400/50 hover:shadow-cyan-400/10 sm:block"
            >
              <FiPlay className="text-cyan-400" />
            </motion.div>

            {/* Floating Sparkle */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-4 hidden cursor-pointer rounded-2xl border border-blue-400/20 bg-slate-900/90 p-3 shadow-xl backdrop-blur-md transition duration-300 hover:border-blue-400/50 sm:block"
            >
              <LuSparkles className="text-blue-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-xs text-slate-500 sm:flex"
      >
        <span>Scroll Down</span>

        <div className="h-8 w-[1px] bg-gradient-to-b from-cyan-400 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;

