import { JSX } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiVuedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiDocker,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

// Type pour les props du composant
interface TechnoProps {
  technologies: string[]; // Technologies à afficher
  className?: string; // Classes supplémentaires optionnelles
  iconSize?: "sm" | "md" | "lg"; // Taille des icônes
  showText?: boolean; // Afficher ou non le texte
}

// Toutes les technologies disponibles avec leurs icônes et couleurs
const TECHNOLOGY_MAP: Record<
  string,
  { icon: JSX.Element; color: string; name: string }
> = {
  "Vue.js": {
    icon: <SiVuedotjs />,
    color: "text-green-500",
    name: "Vue.js",
  },
  "Next.js": {
    icon: <SiNextdotjs />,
    color: "text-black dark:text-white",
    name: "Next.js",
  },
  React: {
    icon: <SiReact />,
    color: "text-cyan-400",
    name: "React",
  },
  Tailwind: {
    icon: <SiTailwindcss />,
    color: "text-sky-400",
    name: "Tailwind CSS",
  },
  TypeScript: {
    icon: <SiTypescript />,
    color: "text-blue-500",
    name: "TypeScript",
  },
  JavaScript: {
    icon: <SiJavascript />,
    color: "text-yellow-400",
    name: "JavaScript",
  },
  Python: {
    icon: <SiPython />,
    color: "text-yellow-400",
    name: "Python",
  },
  PostgreSQL: {
    icon: <SiPostgresql />,
    color: "text-blue-700",
    name: "PostgreSQL",
  },
  MySQL: {
    icon: <SiMysql />,
    color: "text-[#00758F]",
    name: "MySQL",
  },
  HTML5: {
    icon: <SiHtml5 />,
    color: "text-orange-500",
    name: "HTML5",
  },
  CSS3: {
    icon: <SiCss3 />,
    color: "text-blue-500",
    name: "CSS3",
  },
  Git: {
    icon: <SiGit />,
    color: "text-orange-600",
    name: "Git",
  },
  GitHub: {
    icon: <SiGithub />,
    color: "text-gray-800 dark:text-white",
    name: "GitHub",
  },
  Docker: {
    icon: <SiDocker />,
    color: "text-blue-500",
    name: "Docker",
  },
  Express: {
    icon: <SiExpress />,
    color: "text-gray-800 dark:text-white",
    name: "Express",
  },
  MongoDB: {
    icon: <SiMongodb />,
    color: "text-green-500",
    name: "MongoDB",
  },
};

export default function Techno({
  technologies = [],
  className = "",
  iconSize = "md",
  showText = true,
}: TechnoProps) {
  // Taille des icônes
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech) => {
        const technology = TECHNOLOGY_MAP[tech];
        if (!technology) return null;

        return (
          <div
            key={tech}
            className={`flex items-center gap-4 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full ${
              showText ? "pr-3" : "px-2"
            } hover:scale-105 transition-transform`}
            title={technology.name}
          >
            <div className={`${technology.color} ${sizeClasses[iconSize]}`}>
              {technology.icon}
            </div>
            {showText && (
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {technology.name}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
