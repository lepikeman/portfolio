import AccordionProjects from "./accordionProject";
import { FaGithub } from "react-icons/fa";
import { trackEvent } from "./GoogleAnalytics";

// Architecture clean code
import { scrollToContact } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function ProjectPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mes Réalisations
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de mes projets récents, allant des sites
            vitrines aux applications web complexes. Chaque projet reflète mon
            engagement pour la qualité et l&apos;innovation.
          </p>

          {/* Project Stats - Version minimaliste */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">15+</div>
              <div className="text-gray-500 text-sm">Projets</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-gray-500 text-sm">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">98%</div>
              <div className="text-gray-500 text-sm">À Temps</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">3+</div>
              <div className="text-gray-500 text-sm">Années</div>
            </div>
          </div>
        </div>

        {/* Projects Carousel */}
        <div className="">
          <AccordionProjects />
        </div>

        {/* CTA Section - Version minimaliste */}
        <div className="text-center mt-16 bg-gray-900/30 border border-gray-700 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Vous Avez Un Projet en Tête ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Chaque projet commence par une idée. Partagez la vôtre et voyons
            ensemble comment la transformer en réalité.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => {
                trackEvent("cta_click", "project_section", "start_project");
                scrollToContact();
              }}
              variant="primary"
              size="lg"
            >
              Démarrer Mon Projet
            </Button>
            <a
              href="https://github.com/lepikeman"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("external_link", "social_media", "github_projects")
              }
              className="px-8 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-gray-500 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              <FaGithub /> Voir Plus sur GitHub
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            Premier contact gratuit • Conseils personnalisés • Devis sous 24h
          </div>
        </div>
      </div>
    </div>
  );
}
