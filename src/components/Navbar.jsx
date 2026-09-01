import React from "react";

const Navbar = () => {
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
  };

  return (
    <nav className="absolute left-0 right-0 top-6 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D13]/80 px-4 py-3 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition-all duration-500 hover:border-violet-500/20 hover:bg-[#111119]/90 sm:px-5 md:px-6">

          {/* Background Glow */}
          <div className="pointer-events-none absolute -left-16 -top-20 h-40 w-40 rounded-full bg-violet-600/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 right-10 h-40 w-40 rounded-full bg-cyan-500/5 blur-3xl" />

          {/* Logo */}
          <button
            onClick={() => handleScroll("home")}
            className="group relative z-10 flex items-center gap-3"
          >
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-sm font-bold text-white shadow-[0_8px_30px_rgba(139,92,246,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_35px_rgba(139,92,246,0.45)]">
              TA

              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            </div>

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
          <div className="relative z-10 hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="group relative rounded-xl px-3 py-2.5 text-[13px] font-medium text-white/50 transition-all duration-300 hover:bg-white/[0.06] hover:text-white xl:px-4"
              >
                {item.name}

                {/* Hover Background */}
                <span className="absolute inset-0 -z-10 scale-90 rounded-xl bg-violet-500/0 transition-all duration-300 group-hover:scale-100 group-hover:bg-violet-500/[0.07]" />

                {/* Hover Line */}
                <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 transition-all duration-300 group-hover:w-5" />
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="relative z-10 flex items-center gap-3">

            {/* Available */}
            <div className="hidden items-center gap-2 xl:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

              <span className="text-[11px] font-medium text-white/40">
                Available
              </span>
            </div>

            {/* Let's Talk */}
            <button
              onClick={() => handleScroll("contact")}
              className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(124,58,237,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:from-violet-400 hover:to-indigo-500 hover:shadow-[0_12px_35px_rgba(124,58,237,0.35)] lg:flex"
            >
              Let's Talk
              <span>↗</span>
            </button>

            {/* Mobile Contact */}
            <button
              onClick={() => handleScroll("contact")}
              className="rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 lg:hidden"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Small Bottom Glow */}
        <div className="mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent blur-sm" />
      </div>
    </nav>
  );
};

export default Navbar;