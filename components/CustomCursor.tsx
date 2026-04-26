"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsMobile(true);
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouseX - 8}px, ${mouseY - 8}px)`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const addHoverListeners = () => {
      const interactables = document.querySelectorAll(
        "a, button, [data-cursor-hover]"
      );
      interactables.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.08;
      followerY += (mouseY - followerY) * 0.08;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
      }
      requestAnimationFrame(animateFollower);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    addHoverListeners();
    animateFollower();

    // Re-attach on DOM changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      observer.disconnect();
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none mix-blend-difference"
        style={{ willChange: "transform" }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.5 : isHovering ? 0 : 1,
            opacity: isHovering ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="w-4 h-4 rounded-full bg-white"
        />
      </div>

      {/* Follower ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 z-[99998] pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 2 : isClicking ? 0.8 : 1,
            opacity: isClicking ? 0.5 : 0.6,
            borderColor: isHovering ? "#00f5ff" : "#a855f7",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-10 h-10 rounded-full border-2 border-purple-500"
          style={{
            boxShadow: isHovering
              ? "0 0 20px rgba(0, 245, 255, 0.5)"
              : "0 0 10px rgba(168, 85, 247, 0.3)",
          }}
        />
      </div>
    </>
  );
}
