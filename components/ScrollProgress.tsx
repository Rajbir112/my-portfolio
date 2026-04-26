"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (barRef.current) {
        barRef.current.style.width = `${progress}%`;
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-white/5">
      <div
        ref={barRef}
        className="h-full rounded-full transition-none"
        style={{
          background: "linear-gradient(90deg, #00f5ff, #a855f7, #f472b6)",
          width: "0%",
          boxShadow: "0 0 10px rgba(0, 245, 255, 0.8)",
        }}
      />
    </div>
  );
}
