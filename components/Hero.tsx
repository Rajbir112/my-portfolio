"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), {
  ssr: false,
  loading: () => null,
});

const roles = [
  "Full Stack Developer",
  "ML Engineer",
  "System Architect",
  "Problem Solver",
  "Open Source Builder",
];

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
    } else if (!deleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    }

    setDisplayed(currentWord.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return displayed;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const role = useTypewriter(roles);

  // Parallax tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      containerRef.current.style.transform = `perspective(1000px) rotateX(${-y * 0.3}deg) rotateY(${x * 0.3}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Three.js particle background */}
      <ParticleBackground />

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px] float" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[150px] float-delay-1" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-900/10 blur-[200px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-40 z-[1]" />

      {/* Main content */}
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-[10] text-center px-6 max-w-5xl mx-auto"
        style={{ transition: "transform 0.1s ease" }}
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8">
          <div className="px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "rgba(0, 245, 255, 0.06)",
              border: "1px solid rgba(0, 245, 255, 0.2)",
              color: "#00f5ff",
              boxShadow: "0 0 20px rgba(0, 245, 255, 0.1)",
            }}>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2 animate-pulse" />
            Available for opportunities
          </div>
        </motion.div>

        {/* Main name */}
        <motion.div variants={itemVariants} className="mb-4">
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #94a3b8 60%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Rajbir
            </span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #00f5ff 0%, #a855f7 50%, #f472b6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% auto",
                animation: "shimmer 3s linear infinite",
              }}
            >
              Singh
            </span>
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl md:text-3xl font-light text-slate-300" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            <span className="text-slate-500">{"< "}</span>
            <span className="text-cyan-400 font-medium">{role}</span>
            <span className="typewriter-cursor text-cyan-400">|</span>
            <span className="text-slate-500">{" />"}</span>
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          I build{" "}
          <span className="text-white font-medium">intelligent, scalable systems</span> that bridge
          modern web technologies with{" "}
          <span className="text-purple-400 font-medium">AI & ML</span> — from predicting hospital resource needs
          to creating smart fitness platforms.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-8 py-4 rounded-2xl font-semibold text-black cursor-none overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #00f5ff, #a855f7)",
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)",
            }}
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 skew-x-12" />
          </a>

          <a
            href="mailto:rajbr.6922@gmail.com"
            className="group px-8 py-4 rounded-2xl font-semibold text-white cursor-none transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(0, 245, 255, 0.4)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0, 245, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Get In Touch ↗
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-8 md:gap-16">
          {[
            { number: "2+", label: "Projects Shipped" },
            { number: "3+", label: "Tech Stacks" },
            { number: "∞", label: "Problems to Solve" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl md:text-3xl font-black"
                style={{
                  fontFamily: "Syne, sans-serif",
                  background: "linear-gradient(135deg, #00f5ff, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.number}
              </div>
              <div className="text-xs text-slate-500 mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-slate-600 uppercase">Scroll</span>
        <div className="scroll-indicator w-px h-12 rounded-full overflow-hidden bg-white/10">
          <motion.div
            animate={{ y: [-48, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/2 rounded-full"
            style={{ background: "linear-gradient(180deg, #00f5ff, #a855f7)" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
