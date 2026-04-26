import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajbir Singh | Full Stack Developer",
  description:
    "Portfolio of Rajbir Singh — Full Stack Developer specializing in React, Spring Boot, Python, and ML-powered applications that solve real-world problems.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Spring Boot",
    "Machine Learning",
    "Portfolio",
    "Rajbir Singh",
  ],
  authors: [{ name: "Rajbir Singh" }],
  openGraph: {
    title: "Rajbir Singh | Full Stack Developer",
    description:
      "Building intelligent systems that solve real-world problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#030308] text-white overflow-x-hidden noise-overlay">
        {children}
      </body>
    </html>
  );
}
