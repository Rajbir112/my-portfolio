"use client";

import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

// Prevent SSR for cursor (window-dependent)
const DynamicCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

export default function Home() {
  return (
    <>
      {/* Loading screen */}
      <LoadingScreen />

      {/* Custom cursor */}
      <DynamicCursor />

      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
