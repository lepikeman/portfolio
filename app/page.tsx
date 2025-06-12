"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import ParticlesBackground from "./components/ParticulesBackground";

const Service = dynamic(() => import("./components/Service"), {
  loading: () => (
    <div className="flex items-center justify-center h-32">
      <div className="loading loading-spinner loading-md text-primary"></div>
    </div>
  ),
});

const AboutPage = dynamic(() => import("./components/AboutPage"), {
  loading: () => (
    <div className="flex items-center justify-center h-screen">
      <div className="loading loading-spinner loading-lg text-primary"></div>
    </div>
  ),
});
const ProjectPage = dynamic(() => import("./components/ProjectPage"), {
  loading: () => (
    <div className="flex items-center justify-center h-screen">
      <div className="loading loading-spinner loading-lg text-primary"></div>
    </div>
  ),
});

// Nouveaux composants pour la refonte
const StatsSection = dynamic(() => import("./components/StatsSection"), {
  loading: () => (
    <div className="flex items-center justify-center h-32">
      <div className="loading loading-spinner loading-md text-primary"></div>
    </div>
  ),
});
const TestimonialsSection = dynamic(
  () => import("./components/TestimonialsSection"),
  {
    loading: () => (
      <div className="flex items-center justify-center h-96">
        <div className="loading loading-spinner loading-md text-primary"></div>
      </div>
    ),
  }
);
const ContactSection = dynamic(() => import("./components/ContactSection"), {
  loading: () => (
    <div className="flex items-center justify-center h-96">
      <div className="loading loading-spinner loading-md text-primary"></div>
    </div>
  ),
});

export default function Home() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // Si la section occupe plus de 50% de la hauteur visible
        if (
          rect.top <= window.innerHeight * 0.3 &&
          rect.bottom >= window.innerHeight * 0.3
        ) {
          current = section.id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sections = [
    "home",
    "about",
    "service",
    "project",
    "testimonials",
    "contact",
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-w-[100vw] overflow-x-hidden">
      <ParticlesBackground />

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen">
        <AboutPage />
      </section>

      {/* Stats Section */}
      <section
        id="about"
        className="relative z-10 min-h-screen flex items-center"
      >
        <StatsSection />
      </section>

      {/* Services Section */}
      <section id="service" className="relative z-10 min-h-screen">
        <Service />
      </section>

      {/* Projects Section */}
      <section id="project" className="relative z-10 min-h-screen">
        <ProjectPage />
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="relative z-10 min-h-screen flex items-center"
      >
        <TestimonialsSection />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 min-h-screen flex items-center"
      >
        <ContactSection />
      </section>

      {/* Navigation Dots - Desktop - Version avec accents de couleur */}
      <div className="hidden lg:flex fixed top-1/2 right-6 transform -translate-y-1/2 flex-col gap-4 z-50">
        {sections.map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`group relative w-2 h-2 rounded-full transition-all duration-300 ${
              active === id
                ? "bg-gradient-to-r from-blue-400 to-purple-600 scale-150 shadow-lg shadow-blue-500/50"
                : "bg-gray-600 hover:bg-blue-400 hover:scale-125"
            }`}
            aria-label={`Aller à la section ${id}`}
          >
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap capitalize border border-gray-700">
              {id === "home"
                ? "Accueil"
                : id === "about"
                ? "À propos"
                : id === "service"
                ? "Services"
                : id === "project"
                ? "Projets"
                : id === "testimonials"
                ? "Témoignages"
                : "Contact"}
            </span>
          </button>
        ))}
      </div>

      {/* Navigation Dots - Mobile - Version avec accents de couleur */}
      <div className="lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-50 bg-gray-900/90 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700">
        {sections.map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              active === id
                ? "bg-gradient-to-r from-blue-400 to-purple-600 scale-150 shadow-sm shadow-blue-500/50"
                : "bg-gray-600 hover:bg-blue-400"
            }`}
            aria-label={`Aller à la section ${id}`}
          />
        ))}
      </div>
    </main>
  );
}
