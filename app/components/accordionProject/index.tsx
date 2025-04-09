"use client";

import { useState } from "react";
import { projects } from "./projectsData";
import ProjectItem from "./ProjectItem";
import Image from "next/image";

export default function AccordionProjects() {
  const [selectedId, setSelectedId] = useState<number>(projects[0].id);

  const selectedProject = projects.find((p) => p.id === selectedId)!;

  return (
    <div className="grid md:grid-cols-2 gap-8 min-w-70% lg:mx-50 md:mx-auto sm:mx-auto py-10 px-4">
      {/* Colonne gauche : liste des projets */}
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            isActive={project.id === selectedId}
            onClick={() => setSelectedId(project.id)}
          />
        ))}
      </div>

      {/* Colonne droite : média du projet sélectionné */}
      <div className="flex items-center justify-center relative min-h-[250px] rounded-lg overflow-hidden shadow-lg transition-all duration-500">
        <Image
          src={selectedProject.mediaSrc}
          alt={selectedProject.title}
          width={600}
          height={400}
          className="object-cover w-full h-full transition-opacity duration-500"
        />
      </div>
    </div>
  );
}
