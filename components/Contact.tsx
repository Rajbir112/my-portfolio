"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";

const GithubIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.631 5.903-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const socialLinks = [
  {
    icon: <GithubIcon />,
    label: "GitHub",
    href: "https://github.com/Rajbir112",
    color: "#ffffff",
    hoverBg: "rgba(255, 255, 255, 0.1)",
  },
  {
    icon: <LinkedinIcon />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rajbir-singh-9a2226286/",
    color: "#0077b5",
    hoverBg: "rgba(0, 119, 181, 0.1)",
  },
  {
    icon: <TwitterIcon />,
    label: "Twitter / X",
    href: "#",
    color: "#1da1f2",
    hoverBg: "rgba(29, 161, 242, 0.1)",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    href: "mailto:rajbr.6922@gmail.com",
    color: "#00f5ff",
    hoverBg: "rgba(0, 245, 255, 0.1)",
  },
];

export default function Contact() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Compose mailto
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:rajbr.6922@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
  };

  const inputStyle = (name: string) => ({
    background: focused === name ? "rgba(0, 245, 255, 0.05)" : "rgba(255, 255, 255, 0.03)",
    border: `1px solid ${focused === name ? "rgba(0, 245, 255, 0.4)" : "rgba(255, 255, 255, 0.08)"}`,
    boxShadow: focused === name ? "0 0 20px rgba(0, 245, 255, 0.1)" : "none",
    transition: "all 0.3s ease",
  });

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-24"
        >
          <motion.p variants={itemVariants} className="text-sm tracking-[0.3em] text-cyan-400 uppercase mb-3">
            Let&apos;s connect
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00f5ff, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Touch
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed">
            Have an exciting project in mind? Want to collaborate, or just want to say hi?
            I&apos;m always open to new opportunities and conversations.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start w-full">
          {/* Left - Social + Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col"
          >
            {/* Email card */}
            <div
              className="p-6 rounded-2xl mb-8"
              style={{
                background: "rgba(0, 245, 255, 0.04)",
                border: "1px solid rgba(0, 245, 255, 0.15)",
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Mail size={20} className="text-cyan-400" />
                <span className="text-sm font-semibold text-white">Direct Email</span>
              </div>
              <a
                href="mailto:rajbr.6922@gmail.com"
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm cursor-none"
              >
                rajbr.6922@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div className="mb-8">
              <p className="text-xs tracking-widest text-slate-600 uppercase mb-4">Find me online</p>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-4 px-5 py-3 rounded-xl text-slate-400 hover:text-white transition-all duration-300 cursor-none group"
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = link.hoverBg;
                      (e.currentTarget as HTMLElement).style.borderColor = `${link.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.03)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.06)";
                    }}
                  >
                    <span style={{ color: link.color }}>{link.icon}</span>
                    <span className="font-medium">{link.label}</span>
                    <span className="ml-auto text-xs text-slate-600 group-hover:text-slate-400 transition-colors">↗</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div
              className="flex items-center gap-3 p-4 rounded-xl"
              style={{
                background: "rgba(34, 197, 94, 0.06)",
                border: "1px solid rgba(34, 197, 94, 0.15)",
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-green-400">Available for Work</div>
                <div className="text-xs text-slate-500">Open to full-time, freelance & internship roles</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div>
                <label className="text-xs text-slate-500 tracking-widest uppercase mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  placeholder="John Doe"
                  required
                  className="w-full px-5 py-4 rounded-xl text-white placeholder-slate-600 outline-none text-sm cursor-none"
                  style={inputStyle("name")}
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs text-slate-500 tracking-widest uppercase mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  placeholder="john@example.com"
                  required
                  className="w-full px-5 py-4 rounded-xl text-white placeholder-slate-600 outline-none text-sm cursor-none"
                  style={inputStyle("email")}
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-xs text-slate-500 tracking-widest uppercase mb-2 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl text-white placeholder-slate-600 outline-none text-sm resize-none cursor-none"
                  style={inputStyle("message")}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-black cursor-none transition-all duration-300"
                style={{
                  background: submitted
                    ? "linear-gradient(135deg, #22c55e, #16a34a)"
                    : "linear-gradient(135deg, #00f5ff, #a855f7)",
                  boxShadow: submitted
                    ? "0 0 30px rgba(34, 197, 94, 0.4)"
                    : "0 0 30px rgba(168, 85, 247, 0.4)",
                }}
              >
                {submitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="text-center mt-24 pt-12 border-t border-white/5"
      >
        <p className="text-slate-600 text-sm">
          Designed & Built with ❤️ by{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #00f5ff, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Rajbir Singh
          </span>{" "}
          · {new Date().getFullYear()}
        </p>
      </motion.div>
    </section>
  );
}
