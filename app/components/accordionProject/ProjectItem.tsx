import { Project } from "./projectsData";
import clsx from "clsx";
import Techno from "../Techno";

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
        "flex w-full text-left p-6 rounded-lg transition-colors duration-300 cursor-pointer items-center",
        "min-h-45",
        isActive
          ? "bg-primary text-primary-content shadow-primary-content"
          : "bg-gray-100 text-black hover:bg-gray-300"
      )}
    >
      <div className="h-auto justify-items-start w-1/2">
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <p className=" mt-1">{project.description}</p>
      </div>
      <div className="w-1/2 items-center scale-70">
        <Techno selectedTechnologies={project.techno} />
      </div>
    </button>
  );
}
