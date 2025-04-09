"use client";
import { useEffect, useState } from "react";

export default function ScrollSpy() {
  const [active, setActive] = useState("home");

  useEffect(() => {
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

    document
      .getElementById("scroll-container")
      ?.addEventListener("scroll", onScroll);
    return () => {
      document
        .getElementById("scroll-container")
        ?.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4 z-20">
      {["home", "project", "contact"].map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`dot w-4 h-4 rounded-full transition-all ${
            active === id ? "bg-black scale-125" : "bg-gray-400"
          }`}
        />
      ))}
    </div>
  );
}
