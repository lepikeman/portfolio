"use client";

import AboutPage from "./components/AboutPage";
import ContactPage from "./components/Contact";
import NavBar from "./components/NavBar";
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
    <main className="relative min-w-[100svw] min-h-[100svh] overflow-hidden overflow-x-hidden m-0">
      <ParticlesBackground />
      <nav className="relative z-5">
        <NavBar />
      </nav>
      <div
        className=" relative z-10 h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth"
        id="scroll-container"
      >
        <section id="home" className="relative z-10 h-screen snap-start">
          <AboutPage />
        </section>
        <section
          id="project"
          className="relative z-10 h-screen snap-start content-center"
        >
          <ProjectPage />
        </section>
        <section id="contact" className="relative z-10 h-screen snap-start">
          <ContactPage />
        </section>
      </div>

      <div className="invisible lg:visible fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-6 mr-4 z-50 sm:invicible">
        {["home", "project", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`w-16 h-4 transition-all ${
              active === id ? "text-primary scale-150" : "text-amber-50"
            }`}
          >
            {id}
          </a>
        ))}
      </div>
      <div className="visible lg:invisible flex flex-col z-10 ml-[95dvw] gap-2 fixed top-1/2">
        {["home", "project", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`w-16 h-3 transition-all ${
              active === id
                ? "rounded-full scale-y-50 bg-primary scale-125"
                : "rounded-full scale-y-50 scale-80 bg-gray-500"
            }`}
          ></a>
        ))}
      </div>
    </main>
  );
}
