"use client";

import Link from "next/link";
import {
  FaArrowLeft,
  FaServer,
  FaCheck,
  FaShieldAlt,
  FaDatabase,
  FaChartLine,
  FaFileAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function ApiBackendPage() {
  const features = [
    {
      icon: <FaDatabase />,
      title: "Architecture Robuste",
      description: "Microservices et bases de données optimisées",
    },
    {
      icon: <FaShieldAlt />,
      title: "Sécurité Avancée",
      description: "Authentification JWT, chiffrement et protection",
    },
    {
      icon: <FaFileAlt />,
      title: "Documentation Complète",
      description: "API documentée avec Swagger et exemples",
    },
    {
      icon: <FaChartLine />,
      title: "Monitoring & Logs",
      description: "Surveillance en temps réel et gestion des erreurs",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Architecture Design",
      description: "Conception de l'architecture et choix des technologies",
    },
    {
      step: "02",
      title: "Développement API",
      description: "Création des endpoints et logique métier",
    },
    {
      step: "03",
      title: "Tests & Sécurisation",
      description: "Tests automatisés et mise en place de la sécurité",
    },
    {
      step: "04",
      title: "Documentation & Déploiement",
      description: "Documentation complète et mise en production",
    },
  ];

  const included = [
    "Architecture microservices moderne",
    "API REST complète et documentée",
    "Base de données optimisée",
    "Authentification JWT sécurisée",
    "Rate limiting et protection DDoS",
    "Documentation Swagger/OpenAPI",
    "Tests automatisés (unit, integration)",
    "Monitoring et alertes en temps réel",
    "Gestion des logs centralisée",
    "Backup automatique des données",
    "CI/CD pipeline inclus",
    "Containerisation Docker",
    "Scaling automatique",
    "Support technique 6 mois",
  ];

  const techStack = [
    { name: "Node.js", category: "Runtime" },
    { name: "Express.js", category: "Framework" },
    { name: "PostgreSQL", category: "Base de données" },
    { name: "Redis", category: "Cache" },
    { name: "JWT", category: "Authentification" },
    { name: "Swagger", category: "Documentation" },
    { name: "Docker", category: "Containerisation" },
    { name: "AWS/GCP", category: "Cloud" },
    { name: "Jest", category: "Tests" },
    { name: "Winston", category: "Logging" },
  ];

  const apiTypes = [
    {
      title: "API E-commerce",
      description: "Gestion produits, commandes, paiements",
      endpoints: "30+ endpoints",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "API SaaS",
      description: "Multi-tenant, abonnements, facturation",
      endpoints: "25+ endpoints",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "API Mobile",
      description: "Optimisée pour applications mobiles",
      endpoints: "20+ endpoints",
      color: "from-emerald-500 to-teal-500",
    },
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
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-blue-900/20"></div>

        {/* Animated Circles */}
        <div className="absolute top-24 left-8 w-88 h-88 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-8 right-16 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl animate-pulse delay-600"></div>
        <div className="absolute bottom-16 left-1/2 w-80 h-80 bg-teal-500/6 rounded-full blur-3xl animate-pulse delay-1100"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* Header */}
      <div className="relative z-10">
        {/* Responsive Navigation */}
        <nav className="p-4 md:p-6">
          <Link
            href="/#service"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaArrowLeft className="text-sm" />
            Retour aux services
          </Link>
        </nav>

        {/* Mobile-Optimized Hero */}
        <div className="pt-8 md:pt-16 pb-12 md:pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl md:text-6xl text-cyan-400 mb-4 md:mb-6">
              <FaServer />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              API & Backend
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text">
                Performant
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
              Une API robuste et sécurisée pour connecter vos applications et
              centraliser vos données avec architecture moderne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Demander un Devis
              </button>
              <div className="text-center sm:text-left">
                <div className="text-xl md:text-2xl font-bold text-white">
                  À partir de 2 500€
                </div>
                <div className="text-sm text-gray-400">
                  Documentation incluse
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-Responsive Content Sections */}
      <section className="py-12 md:py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16">
            Fonctionnalités API
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
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
            Stack Technologique
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 text-center hover:border-cyan-500/50 transition-colors duration-300"
              >
                <div className="text-cyan-400 font-medium mb-1">
                  {tech.name}
                </div>
                <div className="text-xs text-gray-500">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Fonctionnalités Backend
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-900/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Processus de Développement
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 relative z-10">
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

      {/* API Types Section */}
      <section className="py-12 md:py-20 px-4 bg-gray-900/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16">
            Types d&apos;API Développées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {apiTypes.map((api, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-colors duration-300"
              >
                <h3
                  className={`text-xl md:text-2xl font-bold mb-3 text-transparent bg-gradient-to-r ${api.color} bg-clip-text`}
                >
                  {api.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 mb-4">
                  {api.description}
                </p>
                <div className="text-cyan-400 font-medium text-sm">
                  {api.endpoints}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Connectez Vos Services avec une API Robuste
          </h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Développons ensemble l&apos;API backend qui unifiera votre
            écosystème et supportera votre croissance future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Développer Mon API
            </button>
            <div className="flex items-center gap-6 text-gray-400">
              <a
                href="mailto:xhaflaire.axel@gmail.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope />
                Email
              </a>
              <a
                href="tel:+33667394256"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
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
