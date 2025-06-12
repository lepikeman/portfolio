"use client";

import Link from "next/link";
import {
  FaArrowLeft,
  FaRocket,
  FaCheck,
  FaDatabase,
  FaShieldAlt,
  FaUsers,
  FaCog,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function ApplicationWebPage() {
  const features = [
    {
      icon: <FaDatabase />,
      title: "Base de Données",
      description: "Gestion sécurisée de vos données avec architecture moderne",
    },
    {
      icon: <FaShieldAlt />,
      title: "Sécurité Renforcée",
      description: "Authentification, chiffrement et protection des données",
    },
    {
      icon: <FaUsers />,
      title: "Multi-utilisateurs",
      description: "Gestion des rôles et permissions personnalisables",
    },
    {
      icon: <FaCog />,
      title: "Interface Admin",
      description: "Tableau de bord complet pour administrer votre application",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analyse Fonctionnelle",
      description: "Définition précise de vos besoins métier et wireframes",
    },
    {
      step: "02",
      title: "Architecture & Design",
      description: "Conception de l'architecture technique et du design UI/UX",
    },
    {
      step: "03",
      title: "Développement",
      description:
        "Développement frontend, backend et intégration base de données",
    },
    {
      step: "04",
      title: "Tests & Déploiement",
      description: "Tests complets, mise en production et formation",
    },
  ];

  const included = [
    "Interface utilisateur moderne et intuitive",
    "Base de données sécurisée (PostgreSQL/MongoDB)",
    "Authentification et gestion des utilisateurs",
    "Tableau de bord administrateur complet",
    "API REST complète et documentée",
    "Système de notifications en temps réel",
    "Export de données (PDF, Excel, CSV)",
    "Responsive design (tous appareils)",
    "Tests automatisés et manuels",
    "Documentation technique complète",
    "Formation des équipes",
    "Support technique 6 mois",
    "Hébergement cloud sécurisé",
    "Monitoring et alertes automatiques",
  ];

  const techStack = [
    "React / Next.js",
    "Node.js / Express",
    "PostgreSQL / MongoDB",
    "TypeScript",
    "Tailwind CSS",
    "API REST",
    "JWT Authentication",
    "Redis Cache",
    "Docker",
    "AWS / Vercel",
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>

        {/* Animated Circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 left-20 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-indigo-500/6 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* Header */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="p-4 md:p-6">
          <Link
            href="/#service"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaArrowLeft className="text-sm" />
            Retour aux services
          </Link>
        </nav>

        {/* Hero Section */}
        <div className="pt-8 md:pt-16 pb-12 md:pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl md:text-6xl text-purple-400 mb-4 md:mb-6">
              <FaRocket />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              Application Web
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text">
                Sur-Mesure
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
              Une solution web complète et interactive, développée
              spécifiquement pour répondre aux besoins uniques de votre
              entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Demander un Devis
              </button>
              <div className="text-center sm:text-left">
                <div className="text-xl md:text-2xl font-bold text-white">
                  À partir de 5 000€
                </div>
                <div className="text-sm text-gray-400">
                  Base de données incluse
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 md:py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16">
            Fonctionnalités Avancées
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl md:text-3xl text-purple-400 mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-gray-900/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Technologies Modernes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 text-center hover:border-purple-500/50 transition-colors duration-300"
              >
                <span className="text-gray-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 px-4 bg-gray-900/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16">
            Processus de Développement
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 bg-gray-900/30 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Prestation Complète
          </h2>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {included.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheck className="text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Lancez Votre Application Web
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed">
            Ensemble, créons l&apos;application web qui révolutionnera votre
            activité et optimisera vos processus métier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Commencer Mon Projet
            </button>
            <div className="flex items-center gap-4 md:gap-6 text-gray-400 text-sm md:text-base">
              <a
                href="mailto:xhaflaire.axel@gmail.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope />
                Email
              </a>
              <a
                href="tel:+33667394256"
                className="flex items-center gap-2 hover:text-purple-400 transition-colors"
              >
                <FaPhone />
                Téléphone
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
