"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Code2, Server, Brain, Zap } from "lucide-react";

const highlights = [
  {
    icon: <Code2 size={20} />,
    color: "#00f5ff",
    title: "Frontend Engineer",
    desc: "Building pixel-perfect, performant UIs with React and modern web tech.",
  },
  {
    icon: <Server size={20} />,
    color: "#a855f7",
    title: "Backend Architect",
    desc: "Designing scalable REST APIs and microservices with Spring Boot & Python.",
  },
  {
    icon: <Brain size={20} />,
    color: "#f472b6",
    title: "ML Practitioner",
    desc: "Integrating machine learning to build predictive, data-driven applications.",
  },
  {
    icon: <Zap size={20} />,
    color: "#6366f1",
    title: "Systems Thinker",
    desc: "Applying OS scheduling principles to real-world resource optimization problems.",
  },
];

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <span ref={ref} className="tabular-nums">
      {inView ? value : "0"}
    </span>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-20"
        >
          <motion.p variants={itemVariants} className="text-sm tracking-[0.3em] text-cyan-400 uppercase mb-3">
            Who I am
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            About{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00f5ff, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Me
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Avatar + decoration */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 rounded-full border border-dashed border-purple-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 rounded-full border border-dashed border-cyan-500/10"
              />

              {/* Avatar box */}
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden float"
                style={{
                  background: "linear-gradient(135deg, rgba(0, 245, 255, 0.08), rgba(168, 85, 247, 0.08))",
                  border: "1px solid rgba(168, 85, 247, 0.4)",
                  boxShadow: "0 0 60px rgba(168, 85, 247, 0.25), 0 0 120px rgba(0, 245, 255, 0.1)",
                  padding: "6px",
                }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  {/* Subtle gradient overlay to blend with dark theme */}
                  <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                      background: "linear-gradient(to bottom, transparent 60%, rgba(3,3,8,0.4) 100%)",
                    }}
                  />
                  <img
                    src="/avatar.png"
                    alt="Rajbir Singh"
                    className="absolute inset-0 w-full h-full object-contain object-center scale-110 z-10"
                    style={{ background: "linear-gradient(135deg, #0d0d2b, #130a24)" }}
                  />

                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-cyan-400/60 rounded-tl z-20" />
                  <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-purple-400/60 rounded-tr z-20" />
                  <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-purple-400/60 rounded-bl z-20" />
                  <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-cyan-400/60 rounded-br z-20" />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-3 py-2 rounded-xl text-xs font-semibold"
                style={{
                  background: "rgba(0, 245, 255, 0.1)",
                  border: "1px solid rgba(0, 245, 255, 0.3)",
                  color: "#00f5ff",
                }}
              >
                Full Stack 🚀
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl text-xs font-semibold"
                style={{
                  background: "rgba(168, 85, 247, 0.1)",
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                  color: "#a855f7",
                }}
              >
                ML + OS 🧠
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Bio content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              I&apos;m a passionate{" "}
              <span className="text-white font-semibold">Full Stack Developer</span> who loves building
              intelligent, scalable systems. I combine modern web technologies with{" "}
              <span className="text-purple-400 font-medium">AI & Machine Learning</span> to create
              applications that truly matter.
            </p>
            <p className="text-base text-slate-400 leading-relaxed mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
              From designing{" "}
              <span className="text-cyan-400">predictive hospital resource management systems</span> to
              building microservice-based AI fitness platforms — I turn complex problems into elegant,
              production-ready solutions.
            </p>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  className="p-4 rounded-xl transition-all duration-300 group cursor-default"
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${item.color}40`;
                    (e.currentTarget as HTMLElement).style.background = `${item.color}08`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.06)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.03)";
                  }}
                >
                  <div className="flex items-center gap-2 mb-2" style={{ color: item.color }}>
                    {item.icon}
                    <span className="text-sm font-semibold text-white">{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Quick info */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>India 🇮🇳</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span>Open to Work</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>rajbr.6922@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
