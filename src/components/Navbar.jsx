
import React, { useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

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
    <nav className="absolute left-0 right-0 top-5 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* ================= NAVBAR ================= */}
        <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080A12]/85 shadow-[0_20px_70px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-all duration-500 hover:border-violet-400/20">

          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-52 w-52 rounded-full bg-violet-600/10 blur-[90px]" />

          <div className="pointer-events-none absolute -bottom-24 right-10 h-52 w-52 rounded-full bg-cyan-500/[0.07] blur-[90px]" />

          {/* Top Shine */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

          {/* ================= NAVBAR CONTENT ================= */}
          <div className="relative z-10 flex min-h-[72px] items-center justify-between px-4 sm:px-6 lg:px-7">

            {/* ================= LOGO ================= */}
            <button
              onClick={() => handleScroll("home")}
              className="group/logo flex cursor-pointer items-center"
            >
              <div className="relative flex items-center">

                {/* Logo Glow */}
                <div className="absolute inset-0 rounded-xl bg-violet-500/20 blur-xl opacity-0 transition-all duration-500 group-hover/logo:opacity-100" />

                {/* TA Image */}
                <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-indigo-500/10 to-cyan-400/10 shadow-[0_0_25px_rgba(139,92,246,0.12)] transition-all duration-300 group-hover/logo:scale-105 group-hover/logo:border-violet-400/40 group-hover/logo:shadow-[0_0_30px_rgba(139,92,246,0.25)]">
                  <img
                    src="/TA.png"
                    alt="TA Logo"
                    className="h-full w-full object-contain p-1.5"
                  />
                </div>

                {/* Status Dot */}
                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-[#080A12] bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              </div>
            </button>

            {/* ================= DESKTOP NAVIGATION ================= */}
            <div className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="group/nav relative cursor-pointer rounded-xl px-3.5 py-2.5 text-[17px] font-medium text-cyan-300/70 transition-all duration-300 hover:bg-white/[0.045] hover:text-white xl:px-4"
                >
                  {/* Hover Background */}
                  <span className="pointer-events-none absolute inset-0 -z-10 scale-90 rounded-xl bg-gradient-to-r from-violet-500/[0.08] to-cyan-400/[0.04] opacity-0 transition-all duration-300 group-hover/nav:scale-100 group-hover/nav:opacity-100" />

                  {item.name}

                  {/* Bottom Line */}
                  <span className="pointer-events-none absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 shadow-[0_0_10px_rgba(139,92,246,0.6)] transition-all duration-300 group-hover/nav:w-5" />
                </button>
              ))}
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="flex items-center gap-3">

              {/* Availability */}
              <div className="hidden items-center gap-2.5 xl:flex">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
                </span>

                <span className="text-[17px] font-medium text-white/40">
                  Available
                </span>
              </div>

              {/* Divider */}
              <div className="hidden h-7 w-px bg-white/10 xl:block" />

              {/* ================= LET'S TALK ================= */}
              <button
                onClick={() => handleScroll("contact")}
                className="group/talk relative hidden cursor-pointer items-center gap-2 overflow-hidden rounded-xl border border-violet-400/20 bg-gradient-to-r from-violet-500 to-indigo-600 px-5 py-2.5 text-[17px] font-semibold text-white shadow-[0_8px_30px_rgba(124,58,237,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/40 hover:from-violet-400 hover:to-indigo-500 hover:shadow-[0_12px_40px_rgba(124,58,237,0.35)] lg:flex"
              >
                {/* Shine */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover/talk:translate-x-full" />

                <span className="relative">
                  Let's Talk
                </span>

                <FiArrowUpRight className="relative text-lg transition-transform duration-300 group-hover/talk:translate-x-0.5 group-hover/talk:-translate-y-0.5" />
              </button>

              {/* ================= MOBILE BUTTON ================= */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-white transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-violet-200 active:scale-95 lg:hidden"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>

          {/* ================= MOBILE MENU ================= */}
          <div
            className={`relative z-10 overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
              mobileOpen
                ? "max-h-[600px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="mx-4 border-t border-white/[0.08] pt-3 sm:mx-6">

              {/* Mobile Links */}
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className="group/mobile flex w-full cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-left text-[17px] font-medium text-white/60 transition-all duration-300 hover:bg-gradient-to-r hover:from-violet-500/[0.10] hover:to-transparent hover:text-white active:scale-[0.98]"
                  >
                    <div className="flex items-center gap-3">

                      {/* Number */}
                      <span className="text-[11px] font-medium text-white/20 transition-colors duration-300 group-hover/mobile:text-violet-300/60">
                        0{index + 1}
                      </span>

                      <span>{item.name}</span>
                    </div>

                    <FiArrowUpRight className="translate-x-2 text-lg text-violet-400 opacity-0 transition-all duration-300 group-hover/mobile:translate-x-0 group-hover/mobile:opacity-100" />
                  </button>
                ))}
              </div>

              {/* ================= MOBILE BOTTOM ================= */}
              <div className="mt-3 flex flex-col gap-4 border-t border-white/[0.08] py-4 sm:flex-row sm:items-center sm:justify-between">

                {/* Available */}
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                  </span>

                  <span className="text-[17px] font-medium text-white/40">
                    Available for work
                  </span>
                </div>

                {/* Mobile Let's Talk */}
                <button
                  onClick={() => handleScroll("contact")}
                  className="group/mobileTalk flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-violet-400/20 bg-gradient-to-r from-violet-500 to-indigo-600 px-5 py-2.5 text-[17px] font-semibold text-white shadow-[0_8px_25px_rgba(124,58,237,0.2)] transition-all duration-300 hover:scale-[1.02] hover:border-violet-300/40 hover:shadow-[0_12px_30px_rgba(124,58,237,0.35)] active:scale-95"
                >
                  Let's Talk

                  <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover/mobileTalk:-translate-y-0.5 group-hover/mobileTalk:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM GLOW ================= */}
        <div className="pointer-events-none mx-auto mt-0 h-px w-1/2 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent blur-sm" />
      </div>
    </nav>
  );
};

export default Navbar;

