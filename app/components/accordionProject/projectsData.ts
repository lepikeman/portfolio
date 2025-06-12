import { StaticImageData } from "next/image";
import lapizzadulac from "@/assets/lapizzadulac/HomePage.png";

export type Project = {
  id: number;
  title: string;
  description: string;
  mediaType: "image" | "video";
  mediaSrc: StaticImageData;
  techno: string[];
  link: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "La Pizza du Lac",
    description: "Un site statique Vue.js avec Tailwind, responsive et animé.",
    mediaType: "image",
    mediaSrc: lapizzadulac,
    techno: ["Vue.js", "Tailwind"],
    link: "https://lapizzadulac.fr",
  },
  {
    id: 2,
    title: "Bike shop",
    description: "Interface dynamique avec authentification et CRUD complet.",
    mediaType: "image",
    mediaSrc: lapizzadulac,
    techno: ["Next.js", "Tailwind", "PostgreSQL"],
    link: "https://github.com",
  },
  {
    id: 3,
    title: "Jeu Multijoueur Web",
    description: "Développement d’un jeu en temps réel avec WebSockets.",
    mediaType: "image",
    mediaSrc: lapizzadulac,
    techno: ["Python", "Tailwindcss", "MySQL"],
    link: "https://lapizzadulac.fr",
  },
];
