"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Cpu, Server, Layout, Database, Network, Shield, Workflow, Sparkles } from "lucide-react";

type Skill = {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Data & ML" | "DevOps & Systems";
  color: string;
  glow: string;
  icon: React.ReactNode;
  desc: string;
};

const skills: Skill[] = [
  // Frontend
  { id: "react", name: "React", category: "Frontend", color: "#00f5ff", glow: "rgba(0, 245, 255, 0.5)", icon: <Layout size={18} />, desc: "Building highly interactive, state-driven user interfaces with modern React hooks and patterns." },
  { id: "next", name: "Next.js", category: "Frontend", color: "#00f5ff", glow: "rgba(0, 245, 255, 0.5)", icon: <Layout size={18} />, desc: "Server-side rendering, static generation, and API routes for optimal web performance." },
  { id: "ts", name: "TypeScript", category: "Frontend", color: "#00f5ff", glow: "rgba(0, 245, 255, 0.5)", icon: <Code2Icon />, desc: "Strict static typing to ensure robust, error-free code across the entire stack." },
  { id: "tailwind", name: "TailwindCSS", category: "Frontend", color: "#00f5ff", glow: "rgba(0, 245, 255, 0.5)", icon: <Layout size={18} />, desc: "Utility-first styling for rapid UI development and consistent design systems." },
  
  // Backend
  { id: "spring", name: "Spring Boot", category: "Backend", color: "#a855f7", glow: "rgba(168, 85, 247, 0.5)", icon: <Server size={18} />, desc: "Designing scalable enterprise REST APIs and robust microservices architecture." },
  { id: "java", name: "Java", category: "Backend", color: "#a855f7", glow: "rgba(168, 85, 247, 0.5)", icon: <Cpu size={18} />, desc: "Core backend language for building resilient, multithreaded server applications." },
  { id: "python", name: "Python", category: "Backend", color: "#a855f7", glow: "rgba(168, 85, 247, 0.5)", icon: <Cpu size={18} />, desc: "Versatile backend logic, scripting, and seamless integration with ML models." },
  { id: "postgres", name: "PostgreSQL", category: "Backend", color: "#a855f7", glow: "rgba(168, 85, 247, 0.5)", icon: <Database size={18} />, desc: "Relational database design, complex queries, and maintaining strict data integrity." },
  
  // Data & ML
  { id: "ml", name: "Machine Learning", category: "Data & ML", color: "#f472b6", glow: "rgba(244, 114, 182, 0.5)", icon: <BrainIcon />, desc: "Implementing predictive models (e.g., Random Forest) for resource allocation and forecasting." },
  { id: "redis", name: "Redis", category: "Data & ML", color: "#f472b6", glow: "rgba(244, 114, 182, 0.5)", icon: <Database size={18} />, desc: "In-memory data structure store for high-speed caching and fast data retrieval." },
  { id: "supabase", name: "Supabase", category: "Data & ML", color: "#f472b6", glow: "rgba(244, 114, 182, 0.5)", icon: <Database size={18} />, desc: "Backend-as-a-Service integration for rapid database and authentication setup." },
  
  // DevOps
  { id: "docker", name: "Docker", category: "DevOps & Systems", color: "#6366f1", glow: "rgba(99, 102, 241, 0.5)", icon: <Network size={18} />, desc: "Containerizing applications to guarantee consistent deployment across all environments." },
  { id: "oauth", name: "OAuth2", category: "DevOps & Systems", color: "#6366f1", glow: "rgba(99, 102, 241, 0.5)", icon: <Shield size={18} />, desc: "Implementing secure, modern authentication and authorization flows for user data protection." },
  { id: "cicd", name: "CI/CD & Deployment", category: "DevOps & Systems", color: "#6366f1", glow: "rgba(99, 102, 241, 0.5)", icon: <Workflow size={18} />, desc: "Automating testing and deployment pipelines via Vercel, Railway, and GitHub Actions." },
];

function Code2Icon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
    </svg>
  );
}

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-900/10 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center lg:text-left"
        >
          <p className="text-sm tracking-[0.3em] text-purple-400 uppercase mb-3">
            System Capabilities
          </p>
          <h2
            className="text-4xl md:text-6xl font-black mb-6"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Tech{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Arsenal
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto lg:mx-0">
            Hover over any node in the cluster to inspect specific system capabilities and implementation details.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left: Floating Nodes Constellation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative rounded-3xl p-8 min-h-[500px] flex items-center justify-center overflow-hidden"
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              boxShadow: "inset 0 0 100px rgba(0,0,0,0.5)",
            }}
          >
            {/* Radar Sweep Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
              <div className="w-[800px] h-[800px] rounded-full border border-white/10" />
              <div className="absolute w-[600px] h-[600px] rounded-full border border-white/10" />
              <div className="absolute w-[400px] h-[400px] rounded-full border border-white/10" />
              <div className="absolute w-[200px] h-[200px] rounded-full border border-white/10" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute w-1/2 h-[2px] bg-gradient-to-r from-transparent to-purple-500 origin-left left-1/2"
              />
            </div>

            {/* Nodes Container */}
            <div className="relative z-10 flex flex-wrap justify-center gap-4 max-w-3xl">
              {mounted && skills.map((skill, index) => {
                const isHovered = activeSkill?.id === skill.id;
                // Generate random float delays so they don't all move together
                const delay = (index % 5) * 0.4;
                
                return (
                  <motion.button
                    key={skill.id}
                    onMouseEnter={() => setActiveSkill(skill)}
                    onMouseLeave={() => setActiveSkill(null)}
                    onClick={() => setActiveSkill(skill)}
                    animate={{ 
                      y: [0, -8, 0],
                      scale: isHovered ? 1.1 : 1
                    }}
                    transition={{
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay },
                      scale: { duration: 0.2 }
                    }}
                    className="relative group flex items-center gap-2 px-5 py-3 rounded-full cursor-none transition-all duration-300"
                    style={{
                      background: isHovered ? `${skill.color}15` : "rgba(255, 255, 255, 0.03)",
                      border: `1px solid ${isHovered ? skill.color : "rgba(255, 255, 255, 0.1)"}`,
                      boxShadow: isHovered ? `0 0 20px ${skill.glow}` : "none",
                      zIndex: isHovered ? 20 : 10,
                    }}
                  >
                    <span 
                      className="transition-colors duration-300"
                      style={{ color: isHovered ? skill.color : "#94a3b8" }}
                    >
                      {skill.icon}
                    </span>
                    <span 
                      className="font-medium text-sm transition-colors duration-300 whitespace-nowrap"
                      style={{ color: isHovered ? "#fff" : "#cbd5e1" }}
                    >
                      {skill.name}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Holographic Terminal Pane */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-[400px] shrink-0"
          >
            <div 
              className="h-full rounded-3xl p-8 relative overflow-hidden flex flex-col"
              style={{
                background: "linear-gradient(180deg, rgba(10, 10, 26, 0.9) 0%, rgba(3, 3, 8, 0.95) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: activeSkill ? `0 0 40px ${activeSkill.glow}` : "0 20px 40px rgba(0,0,0,0.4)",
                transition: "box-shadow 0.4s ease",
              }}
            >
              {/* Terminal Header */}
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-slate-500 font-mono tracking-widest uppercase">
                  Data_Scanner_V2
                </div>
              </div>

              <AnimatePresence mode="wait">
                {activeSkill ? (
                  <motion.div
                    key={activeSkill.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 flex flex-col"
                  >
                    <div 
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 w-fit"
                      style={{ 
                        background: `${activeSkill.color}15`,
                        color: activeSkill.color,
                        border: `1px solid ${activeSkill.color}40`
                      }}
                    >
                      <Sparkles size={12} />
                      {activeSkill.category}
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="p-3 rounded-xl"
                        style={{ 
                          background: `${activeSkill.color}20`,
                          color: activeSkill.color,
                          boxShadow: `0 0 20px ${activeSkill.glow}`
                        }}
                      >
                        {activeSkill.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-white" style={{ fontFamily: "Syne, sans-serif" }}>
                        {activeSkill.name}
                      </h3>
                    </div>

                    <div className="bg-black/30 rounded-xl p-5 border border-white/5 mb-6">
                      <p className="text-slate-300 leading-relaxed text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                        {activeSkill.desc}
                      </p>
                    </div>
                    
                    {/* Fake code terminal animation */}
                    <div className="mt-auto pt-6 border-t border-white/5">
                       <p className="font-mono text-xs text-slate-500 mb-2">System Status:</p>
                       <div className="flex items-center gap-2 font-mono text-xs" style={{ color: activeSkill.color }}>
                         <motion.span 
                           animate={{ opacity: [1, 0] }} 
                           transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                         >
                           █
                         </motion.span>
                         <span>Module integrated & operational</span>
                       </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col items-center justify-center text-center opacity-50"
                  >
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 rounded-full border-2 border-dashed border-slate-600 mb-6 flex items-center justify-center"
                    >
                      <div className="w-8 h-8 rounded-full bg-slate-700/50" />
                    </motion.div>
                    <p className="text-sm font-mono text-slate-400">
                      Awaiting node selection...<br/>
                      Initialize hover protocol.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
