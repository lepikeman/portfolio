import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiVuedotjs,
} from "react-icons/si";

const technologies = [
  { name: "Vue.js", icon: <SiVuedotjs className="text-green-500 text-3xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-3xl" /> },
  { name: "React", icon: <SiReact className="text-cyan-400 text-3xl" /> },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-sky-400 text-3xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-3xl" />,
  },
  { name: "Python", icon: <SiPython className="text-yellow-400 text-3xl" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-700 text-3xl" />,
  },
  { name: "MySQL", icon: <SiMysql className="text-[#00758F] text-3xl" /> },
];

export default function Techno() {
  return (
    <div className="py-6">
      <div className="flex flex-wrap justify-center gap-4">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-3 bg-base-200 px-4 py-2 rounded-full shadow text-lg text-base-content hover:scale-105 transition-transform"
          >
            {tech.icon}
            <span className="font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
