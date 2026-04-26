"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section tracking
      const sections = ["about", "skills", "projects", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-4 left-0 right-0 z-[1000] px-4 md:px-8"
      >
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "bg-[rgba(3,3,8,0.85)] backdrop-blur-xl border border-white/8 shadow-2xl"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-black tracking-tight cursor-none"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            <span className="gradient-text-static">RS</span>
            <span className="text-white/20">.</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="relative text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 cursor-none group"
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                    active === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}

            <a
              href="mailto:rajbr.6922@gmail.com"
              className="px-5 py-2 rounded-xl text-sm font-semibold text-black cursor-none transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00f5ff, #a855f7)",
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
              }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 cursor-none p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="w-6 h-0.5 bg-white block origin-center"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-white block"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="w-6 h-0.5 bg-white block origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-24 z-[999] mx-4 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(10, 10, 26, 0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-lg font-semibold text-slate-300 hover:text-white py-2 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href="mailto:rajbr.6922@gmail.com"
                className="mt-2 py-3 rounded-xl text-center font-semibold text-black"
                style={{
                  background: "linear-gradient(135deg, #00f5ff, #a855f7)",
                }}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
