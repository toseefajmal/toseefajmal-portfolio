
import React from "react";
import { motion } from "framer-motion";
import {
  SlideLeft,
  SlideRight,
  SlideUp,
  SlideBottom,
} from "./Animation";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#07070A] px-5 pb-16 pt-32 sm:px-8 md:px-12 lg:px-16"
    >
      {/* Violet Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-600/15 blur-[120px] sm:h-96 sm:w-96" />

      {/* Cyan Glow */}
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px] sm:h-[450px] sm:w-[450px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

        {/* Left */}
        <div className="text-center lg:text-left">

          {/* Status */}
          <motion.div
            variants={SlideRight(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />

            <span className="text-xs font-medium text-white">
              Available for freelance work
            </span>
          </motion.div>

          {/* Intro */}
          <motion.p
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-violet-400"
          >
            Hello, I'm Toseef Ajmal
          </motion.p>

          {/* Heading - LEFT */}
          <motion.h1
            variants={SlideRight(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[78px]"
          >
            Building
            <span className="block bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Digital Experiences.
            </span>
          </motion.h1>

          {/* Description - RIGHT */}
          <motion.p
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8 lg:mx-0"
          >
            I'm a Frontend Developer focused on creating modern,
            responsive and high-performance web experiences using
            React, JavaScript and Tailwind CSS.
          </motion.p>

          {/* Buttons - UP */}
          <motion.div
            variants={SlideUp(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <button
              onClick={scrollToProjects}
              className="group rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(124,58,237,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(124,58,237,0.35)]"
            >
              View My Work

              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <button
              onClick={scrollToContact}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
            >
              Let's Talk
            </button>
          </motion.div>

          {/* Tech Stack - BOTTOM */}
          <motion.div
            variants={SlideBottom(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-white lg:justify-start"
          >
            <span>React</span>

            <span className="text-violet-500">•</span>

            <span>JavaScript</span>

            <span className="text-violet-500">•</span>

            <span>Tailwind CSS</span>

            <span className="text-violet-500">•</span>

            <span>Git</span>
          </motion.div>
        </div>

        {/* Right Card */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">

          {/* Glow */}
          <div className="absolute inset-10 rounded-full bg-violet-600/20 blur-[90px]" />

          {/* Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-7">

            {/* Card Header */}
            <motion.div
              variants={SlideUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-8 flex items-center justify-between"
            >
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              </div>

              <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-[10px] uppercase tracking-wider text-violet-300">
                Developer
              </span>
            </motion.div>

            {/* Code */}
            <div className="space-y-4 font-mono text-xs sm:text-sm">

              <motion.div
                variants={SlideRight(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <span className="text-violet-400">const</span>{" "}
                <span className="text-cyan-300">developer</span>{" "}
                <span className="text-white/50">=</span>{" "}
                <span className="text-white/70">{"{"}</span>
              </motion.div>

              <motion.div
                variants={SlideLeft(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="pl-5"
              >
                <span className="text-white">name:</span>{" "}
                <span className="text-emerald-300">
                  "Toseef Ajmal"
                </span>
                <span className="text-white">,</span>
              </motion.div>

              <motion.div
                variants={SlideRight(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="pl-5"
              >
                <span className="text-white">role:</span>{" "}
                <span className="text-emerald-300">
                  "Frontend Developer"
                </span>
                <span className="text-white/40">,</span>
              </motion.div>

              <motion.div
                variants={SlideLeft(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="pl-5"
              >
                <span className="text-white">stack:</span>{" "}
                <span className="text-white/70">[</span>

                <span className="text-emerald-300">
                  "React"
                </span>

                <span className="text-white">, </span>

                <span className="text-emerald-300">
                  "JavaScript"
                </span>

                <span className="text-white">, </span>

                <span className="text-emerald-300">
                  "Tailwind"
                </span>

                <span className="text-white/70">]</span>
              </motion.div>

              <motion.div
                variants={SlideRight(0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="pl-5"
              >
                <span className="text-white">passion:</span>{" "}
                <span className="text-emerald-300">
                  "Creating"
                </span>
              </motion.div>

              <motion.div
                variants={SlideUp(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <span className="text-white/70">{"}"}</span>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-3">

              <motion.div
                variants={SlideBottom(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
              >
                <p className="text-2xl font-bold text-white">
                  3
                </p>

                <p className="mt-1 text-[11px] text-white">
                  Projects Built
                </p>
              </motion.div>

              <motion.div
                variants={SlideBottom(1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
              >
                <p className="text-2xl font-bold text-white">
                  6months
                </p>

                <p className="mt-1 text-[11px] text-white">
                  Years Learning
                </p>
              </motion.div>

            </div>

            {/* Accent */}
            <motion.div
              variants={SlideUp(1.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

