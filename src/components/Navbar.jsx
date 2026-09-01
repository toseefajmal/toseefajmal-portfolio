
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileOpen(false);
  };

  return (
    <nav className="absolute left-0 right-0 top-6 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Main Navbar */}
        <div className="relative rounded-2xl border border-white/10 bg-[#0D0D13]/80 px-4 py-3 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-all duration-500 hover:border-violet-500/20 hover:bg-[#111119]/90 sm:px-5 md:px-6">

          {/* Background Glow */}
          <div className="pointer-events-none absolute -left-16 -top-20 h-40 w-40 rounded-full bg-violet-600/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 right-10 h-40 w-40 rounded-full bg-cyan-500/5 blur-3xl" />

          {/* Navbar Content */}
          <div className="relative z-10 flex items-center justify-between">

            {/* Logo */}
            <button
              onClick={() => handleScroll("home")}
              className="group flex items-center gap-3"
            >
              

              <div className="hidden text-left sm:block">
                <h2 className="text-sm font-semibold tracking-wide text-white">
                  Toseef Ajmal
                </h2>

                <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-white/35">
                  Frontend Developer
                </p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="group relative rounded-xl px-3 py-2.5 text-[13px] font-medium text-white/50 transition-all duration-300 hover:bg-white/[0.06] hover:text-white xl:px-4"
                >
                  {item.name}

                  <span className="absolute inset-0 -z-10 scale-90 rounded-xl bg-violet-500/0 transition-all duration-300 group-hover:scale-100 group-hover:bg-violet-500/[0.07]" />

                  <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 transition-all duration-300 group-hover:w-5" />
                </button>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">

              {/* Available */}
              <div className="hidden items-center gap-2 xl:flex">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

                <span className="text-[11px] font-medium text-white/40">
                  Available
                </span>
              </div>

              {/* Desktop Let's Talk */}
              <button
                onClick={() => handleScroll("contact")}
                className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(124,58,237,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:from-violet-400 hover:to-indigo-500 hover:shadow-[0_12px_35px_rgba(124,58,237,0.35)] lg:flex"
              >
                Let's Talk
                <span>↗</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-white transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/10 lg:hidden"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`overflow-hidden transition-all duration-500 lg:hidden ${
              mobileOpen
                ? "mt-4 max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-white/10 pt-3">

              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className="group flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-white/60 transition-all duration-300 hover:bg-violet-500/10 hover:text-white"
                  >
                    <span>{item.name}</span>

                    <span className="translate-x-2 text-violet-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      →
                    </span>
                  </button>
                ))}
              </div>

              {/* Mobile Available */}
              <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

                  <span className="text-xs font-medium text-white/40">
                    Available for work
                  </span>
                </div>

                <button
                  onClick={() => handleScroll("contact")}
                  className="rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Let's Talk ↗
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Small Bottom Glow */}
        <div className="mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent blur-sm" />
      </div>
    </nav>
  );
};

export default Navbar;

