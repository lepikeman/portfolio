import { Project } from "./projectsData";
import Techno from "../Techno";
import Image from "next/image";
import Link from "next/link";

type Props = {
  project: Project;
};

export default function ProjectItem({ project }: Props) {
  return (
    <div className="flex flex-col h-full bg-base-100 rounded-xl shadow-lg overflow-hidden border border-base-300 hover:shadow-xl transition-all duration-300">
      {/* Conteneur image avec ratio fixe */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.mediaSrc}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Contenu texte avec hauteur fixe */}
      <div className="flex flex-col p-5 flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-white mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>
      </div>

      {/* Section technologies */}
      <div className="px-5 pb-5 ">
        <Techno
          technologies={project.techno}
          iconSize="sm"
          className="justify-center"
        />
      </div>

      {/* Bouton (optionnel) */}
      <Link
        href={project.link}
        target="_blank"
        className="mx-5 mb-5 px-4 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors"
      >
        Voir le projet
      </Link>
    </div>
  );
}
