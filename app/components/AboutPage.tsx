import Image from "next/image";
import githubLogo from "@/assets/github-logo.png";
import linkedinLogo from "@/assets/linkedin.png";
import { FaCode, FaRocket, FaHeart } from "react-icons/fa";

// Architecture clean code
import { scrollToContact, scrollToProjects } from "@/lib/utils";
import Techno from "./Techno";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  const selectedTechnologies = [
    "React",
    "Vue.js",
    "Next.js",
    "Tailwind",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "MySQL",
    "Docker",
  ];

  return (
    <main className="hero min-h-[100dvh] items-center relative">
      <div className="hero-content text-center relative z-10">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <div className="flex justify-center items-center gap-3 bg-gray-900/80 backdrop-blur-sm border border-gray-600 rounded-full py-2 px-4 mx-auto w-fit mb-8">
            <p className="text-sm font-medium text-gray-300">
              Disponible pour nouveaux projets
            </p>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
            Axel Xhaflaire
          </h1>

          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-gray-400 mb-8 space-y-2">
            <p>Développeur Fullstack</p>
            <p className="text-lg text-gray-500">
              26 ans • France • 3+ ans d&apos;expérience
            </p>
          </div>

          {/* Value Proposition */}
          <div className="mb-12">
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Je transforme vos idées en{" "}
              <span className="text-white font-medium">
                applications web modernes
              </span>{" "}
              et performantes. Spécialisé dans les technologies JavaScript, je
              crée des solutions sur-mesure qui font la différence.
            </p>
          </div>

          {/* Key Features - Version avec accents de couleur */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center gap-3 p-6 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
              <FaCode className="text-2xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              <span className="text-gray-300 font-medium">Code Propre</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
              <FaRocket className="text-2xl text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              <span className="text-gray-300 font-medium">
                Livraison Rapide
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 group">
              <FaHeart className="text-2xl text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
              <span className="text-gray-300 font-medium">
                Passion du Métier
              </span>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Technologies
            </h2>
            <Techno
              technologies={selectedTechnologies}
              className="justify-center my-4"
              iconSize="lg"
            />
          </div>

          {/* CTA Buttons - Utilisation des composants Button réutilisables */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button
              onClick={scrollToContact}
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Discutons de Votre Projet
            </Button>
            <Button
              onClick={scrollToProjects}
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400"
            >
              Voir Mes Réalisations
            </Button>
          </div>

          {/* Social Links - Version minimaliste */}
          <div className="flex justify-center gap-6 mb-10">
            <a
              href="https://github.com/lepikeman"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300"
            >
              <Image src={githubLogo} alt="GitHub" width={24} height={24} />
            </a>
            <a
              href="https://linkedin.com/in/xhaflaireaxel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300"
            >
              <Image src={linkedinLogo} alt="LinkedIn" width={24} height={24} />
            </a>
          </div>

          {/* Scroll Indicator - Simplifié */}
          <div className="animate-bounce">
            <div className="flex flex-col items-center text-gray-500">
              <span className="text-sm mb-2">Découvrez mon parcours</span>
              <div className="w-1 h-8 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
