import { StaticImageData } from "next/image";
import lapizzadulac from "@/assets/lapizzadulac/HomePage.png";
import qrenoo from "@/assets/Screen_qrenoo.png";
import psm from "@/assets/Screen_psm.png";

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
    title: "Projet sur Mesure",
    description: "Interface dynamique avec admin panel et blog.",
    mediaType: "image",
    mediaSrc: psm,
    techno: ["Next.js", "Tailwind", "PostgreSQL"],
    link: "https://projetsurmesure.fr",
  },
  {
    id: 3,
    title: "Saas Qrenoo",
    description: "Développement d’un SaaS avec fonctionnalités en temps réel.",
    mediaType: "image",
    mediaSrc: qrenoo,
    techno: ["Next.js", "Node.js", "Tailwind", "MySQL"],
    link: "https://qrenoo.com",
  },
];
