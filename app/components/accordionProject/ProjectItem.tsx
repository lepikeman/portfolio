import { Project } from "./projectsData";
import clsx from "clsx";

type Props = {
  project: Project;
  isActive: boolean;
  onClick: () => void;
};

export default function ProjectItem({ project, isActive, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "w-full text-left p-6 rounded-lg transition-colors duration-300 cursor-pointer",
        isActive
          ? "bg-primary text-primary-content shadow-primary-content"
          : "bg-gray-100 text-black hover:bg-gray-300"
      )}
    >
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm mt-1">{project.description}</p>
    </button>
  );
}
