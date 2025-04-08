"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const [isDark, setIsDark] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Vérifie le thème défini dans <html data-theme="dark|light">
  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-theme");
    setIsDark(theme === "dark");
  }, []);

  const color = isDark ? "#cccccc" : "#333333";
  const linkColor = isDark ? "#888888" : "#aaaaaa";
  const backgroundColor = isDark ? "#0f0f0f" : "#f9f9f9";

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute top-0 left-0 w-full h-full z-0"
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: backgroundColor },
        },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          size: { value: 2 },
          color: { value: color },
          move: {
            enable: true,
            speed: 0.6,
          },
          links: {
            enable: true,
            color: linkColor,
            distance: 120,
            opacity: 0.4,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
      }}
    />
  );
}
