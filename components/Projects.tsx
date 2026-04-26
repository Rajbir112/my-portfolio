"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const projects = [
  {
    id: 1,
    title: "Predictive Hospital Resource Management",
    emoji: "🏥",
    tagline: "Predicting Demand. Optimizing Care. Saving Lives.",
    description:
      "An intelligent hospital resource allocation system combining Machine Learning with OS scheduling algorithms. Uses a Random Forest model to predict resource demand and a Max-Heap priority queue for real-time, non-preemptive patient allocation.",
    tech: ["React", "Spring Boot", "Python", "PostgreSQL", "Docker", "Random Forest", "Supabase", "Railway"],
    github: "https://github.com/Rajbir112/codesirijan",
    live: "https://codesirijan-gi7l.vercel.app/",
    gradient: "from-cyan-500/20 to-blue-600/20",
    borderColor: "rgba(0, 245, 255, 0.3)",
    glowColor: "rgba(0, 245, 255, 0.15)",
    accentColor: "#00f5ff",
    highlights: [
      "Non-Preemptive Priority Scheduling",
      "Atomic resource allocation",
      "ML demand forecasting",
      "Real-time decision engine",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "FitVerse — AI Fitness Platform",
    emoji: "💪",
    tagline: "Your AI-Powered Fitness Companion",
    description:
      "A microservice-based fitness advisory platform that leverages AI to deliver personalized workout and nutrition advice. Features secure OAuth2 authentication, scalable service architecture, and intelligent recommendation engine.",
    tech: ["React", "Microservices", "OAuth2", "Python", "Spring Boot", "AI/ML", "Docker"],
    github: "https://github.com/Rajbir112/FitVerse",
    live: null,
    gradient: "from-purple-500/20 to-pink-600/20",
    borderColor: "rgba(168, 85, 247, 0.3)",
    glowColor: "rgba(168, 85, 247, 0.15)",
    accentColor: "#a855f7",
    highlights: [
      "OAuth2 authentication",
      "Microservice architecture",
      "AI-powered advice",
      "Scalable design",
    ],
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-80px" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.2, ease: [0.76, 0, 0.24, 1] }}
      className="relative"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
        animate={{
          rotateX: isHovered ? mousePos.y * -8 : 0,
          rotateY: isHovered ? mousePos.x * 8 : 0,
        }}
        transition={{ duration: 0.1, ease: "linear" }}
        className="relative rounded-3xl overflow-hidden cursor-none"
        style={{
          background: `linear-gradient(135deg, rgba(10, 10, 26, 0.9), rgba(10, 10, 26, 0.7))`,
          border: `1px solid ${isHovered ? project.borderColor : "rgba(255,255,255,0.06)"}`,
          boxShadow: isHovered ? `0 0 60px ${project.glowColor}, 0 30px 80px rgba(0,0,0,0.5)` : "0 10px 40px rgba(0,0,0,0.3)",
          transformStyle: "preserve-3d",
          perspective: "1000px",
          transition: "border-color 0.3s, box-shadow 0.3s",
        }}
      >
        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(circle at ${50 + mousePos.x * 50}% ${50 + mousePos.y * 50}%, ${project.glowColor}, transparent 70%)`,
          }}
        />

        {/* Featured badge */}
        {project.featured && (
          <div
            className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold z-10"
            style={{
              background: `rgba(0, 245, 255, 0.1)`,
              border: `1px solid rgba(0, 245, 255, 0.3)`,
              color: "#00f5ff",
            }}
          >
            <Star size={10} fill="currentColor" />
            Featured
          </div>
        )}

        {/* Card content */}
        <div className="relative z-10 p-8 flex flex-col items-center text-center">
          {/* Header */}
          <div className="mb-8 flex flex-col items-center">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: project.accentColor }}>
              {project.tagline}
            </p>
            <h3
              className="text-2xl md:text-3xl font-black text-white mb-5 leading-[1.3]"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {project.title}
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8 w-full max-w-lg mx-auto">
            {project.highlights.map((h) => (
              <div
                key={h}
                className="flex items-center justify-center gap-2 text-xs text-slate-400"
              >
                <span
                  className="w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: project.accentColor }}
                />
                {h}
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: `${project.accentColor}10`,
                  border: `1px solid ${project.accentColor}25`,
                  color: project.accentColor,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex justify-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-none"
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#fff",
              }}
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 cursor-none text-black"
                style={{
                  background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}99)`,
                  boxShadow: `0 0 20px ${project.glowColor}`,
                }}
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
  };

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-20 text-center flex flex-col items-center"
        >
          <motion.p variants={itemVariants} className="text-sm tracking-[0.3em] text-pink-400 uppercase mb-3">
            What I've built
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Featured{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f472b6, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-500 mt-4 max-w-xl">
            Real-world applications built with modern technologies and a focus on solving meaningful problems.
          </motion.p>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-slate-500 mb-4">More projects on the way...</p>
          <a
            href="https://github.com/Rajbir112"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-white cursor-none transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <GithubIcon size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
