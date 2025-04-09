"use client";

import AboutPage from "./components/AboutPage";
import ParticlesBackground from "./components/ParticulesBackground";
import ProjectPage from "./components/ProjectPage";

import { useEffect, useState } from "react";

export default function Home() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top <= window.innerHeight / 2) {
          current = section.id;
        }
      });
      setActive(current);
    };

    container?.addEventListener("scroll", onScroll);
    return () => {
      container?.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="relative h-screen overflow-hidden m-0">
      <ParticlesBackground />
      <div
        className=" relative z-10 h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth"
        id="scroll-container"
      >
        <section id="home" className="relative z-10 h-screen snap-start">
          <AboutPage />
        </section>
        <section id="project" className="relative z-10 h-screen snap-start">
          <ProjectPage />
        </section>
      </div>

      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-6 mr-4 z-50">
        {["home", "project", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`w-15 h-4 transition-all ${
              active === id ? "text-primary scale-150" : "text-white"
            }`}
          >
            {id}
          </a>
        ))}
      </div>
    </main>
  );
}
