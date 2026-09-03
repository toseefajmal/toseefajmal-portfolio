import React from "react";
import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiHeart,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050507] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <button
              onClick={() => scrollToSection("home")}
              className="group flex items-center gap-3"
            >
              {/* Logo */}
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-violet-400/30 bg-white/[0.04] shadow-lg shadow-violet-900/20 transition duration-300 group-hover:border-violet-400/60 group-hover:shadow-violet-500/20">
                <img
                  src="/TA.png"
                  alt="TA Logo"
                  className="h-full w-full object-contain p-1.5 transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Brand Text */}
              <div className="text-left">
                <h2 className="text-lg font-bold tracking-wide">
                  Toseef<span className="text-violet-400">.</span>
                </h2>

                <p className="text-xs text-gray-500">
                  Front-End Developer
                </p>
              </div>
            </button>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
              I build modern, responsive and user-focused web experiences
              using React, Tailwind CSS and modern frontend technologies.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/toseefajmal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
              >
                <FiGithub size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/toseef-ajmal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white"
              >
                <FiLinkedin size={18} />
              </a>

              {/* Email */}
              <a
                href="mailto:toseefajmal@example.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/40 hover:bg-fuchsia-500/10 hover:text-white"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-12">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white ">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group flex w-fit items-center gap-2 text-left text-sm cursor-pointer text-gray-400 transition duration-300 hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-violet-400 opacity-0 transition duration-300 group-hover:opacity-100 " />

                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Let's Connect */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Let's Connect
            </h3>

            <p className="mb-5 max-w-sm text-sm leading-6 text-gray-400">
              Have a project in mind? Let's build something clean,
              professional and impactful together.
            </p>

            <button
              onClick={() => scrollToSection("contact")}
              className="group inline-flex items-center gap-3 rounded-xl border border-violet-400/30 bg-gradient-to-r from-violet-600/15 to-cyan-500/10 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-violet-400/60 hover:shadow-lg hover:shadow-violet-500/10"
            >
              Get In Touch

              <FiArrowUp
                size={16}
                className="rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          {/* Copyright */}
          <p className="text-xs text-gray-500">
            © {currentYear} Toseef Ajmal. All rights reserved.
          </p>

          {/* Made With */}
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            Made with
            <FiHeart
              size={13}
              className="text-violet-400"
            />
            and React
          </div>

          {/* Back To Top */}
          <button
            onClick={() => scrollToSection("home")}
            aria-label="Back to top"
            className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
          >
            <FiArrowUp
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;