"use client";

import Link from "next/link";
import {
  FaArrowLeft,
  FaMobile,
  FaCheck,
  FaApple,
  FaBell,
  FaWifi,
  FaDownload,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function ApplicationMobilePage() {
  const features = [
    {
      icon: <FaApple />,
      title: "iOS & Android",
      description: "Compatible avec tous les smartphones et tablettes",
    },
    {
      icon: <FaBell />,
      title: "Notifications Push",
      description: "Gardez vos utilisateurs engagés avec des notifications",
    },
    {
      icon: <FaWifi />,
      title: "Mode Hors-ligne",
      description: "Fonctionnalités disponibles même sans connexion",
    },
    {
      icon: <FaDownload />,
      title: "Publication Stores",
      description: "Mise en ligne sur App Store et Google Play",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "UX/UI Design",
      description: "Conception d'interfaces natives et intuitives",
    },
    {
      step: "02",
      title: "Développement",
      description: "Développement avec React Native ou Flutter",
    },
    {
      step: "03",
      title: "Tests & Optimisation",
      description: "Tests sur différents appareils et optimisations",
    },
    {
      step: "04",
      title: "Publication",
      description: "Mise en ligne sur les stores et accompagnement",
    },
  ];

  const included = [
    "Design natif iOS et Android",
    "Interface utilisateur intuitive",
    "Développement cross-platform",
    "Notifications push intégrées",
    "Mode hors-ligne fonctionnel",
    "Intégration caméra et GPS",
    "Authentification biométrique",
    "Stockage local sécurisé",
    "API backend incluse",
    "Tests sur appareils réels",
    "Publication App Store et Google Play",
    "Optimisation des performances",
    "Formation à l'utilisation",
    "Support technique 6 mois",
  ];

  const platforms = [
    {
      name: "React Native",
      description: "Framework Facebook pour iOS et Android",
    },
    {
      name: "Flutter",
      description: "Framework Google haute performance",
    },
    {
      name: "Native",
      description: "Développement spifique iOS/Android",
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-black to-cyan-900/20"></div>

        {/* Animated Circles */}
        <div className="absolute top-32 left-16 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-1/3 w-96 h-96 bg-teal-500/6 rounded-full blur-3xl animate-pulse delay-1200"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* Header - Mobile Optimized */}
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

        {/* Hero Section - Mobile Responsive */}
        <div className="pt-8 md:pt-16 pb-12 md:pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl md:text-6xl text-emerald-400 mb-4 md:mb-6">
              <FaMobile />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              Application Mobile
              <span className="block text-transparent bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text">
                Innovante
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
              Une application mobile native ou hybride qui offre une expérience
              utilisateur exceptionnelle sur iOS et Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
              >
                Demander un Devis
              </button>
              <div className="text-center sm:text-left">
                <div className="text-xl md:text-2xl font-bold text-white">
                  À partir de 8 000€
                </div>
                <div className="text-sm text-gray-400">
                  iOS + Android inclus
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
            Fonctionnalités Mobiles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Mobile-optimized feature cards */}
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl md:text-3xl text-emerald-400 mb-4 group-hover:text-emerald-300 transition-colors duration-300">
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

      {/* Platforms Section */}
      <section className="py-20 px-4 bg-gray-900/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Technologies de Développement
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center hover:border-emerald-500/50 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-emerald-400">
                  {platform.name}
                </h3>
                <p className="text-gray-400">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Processus de Développement
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-blue-600 bg-clip-text mb-4">
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
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-900/20 to-blue-900/20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Lancez Votre App Mobile
          </h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Développons ensemble l&apos;application mobile qui fera la
            différence et fidélisera vos utilisateurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
            >
              Commencer Mon Projet
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
