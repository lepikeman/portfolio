"use client";

import Link from "next/link";
import {
  FaArrowLeft,
  FaGlobe,
  FaCheck,
  FaClock,
  FaUsers,
  FaChartLine,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function SiteVitrinePage() {
  const features = [
    {
      icon: <FaGlobe />,
      title: "Design Responsive",
      description:
        "Parfait sur tous les appareils : desktop, tablette et mobile",
    },
    {
      icon: <FaChartLine />,
      title: "SEO Optimisé",
      description: "Référencement naturel inclus pour être visible sur Google",
    },
    {
      icon: <FaUsers />,
      title: "Expérience Utilisateur",
      description: "Navigation intuitive et temps de chargement optimisés",
    },
    {
      icon: <FaClock />,
      title: "Livraison Rapide",
      description: "Votre site en ligne en 2-3 semaines maximum",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analyse & Conception",
      description: "Définition de vos besoins, maquettes et arborescence",
    },
    {
      step: "02",
      title: "Développement",
      description: "Création du site avec technologies modernes",
    },
    {
      step: "03",
      title: "Tests & Optimisation",
      description: "Vérification sur tous supports et optimisation SEO",
    },
    {
      step: "04",
      title: "Mise en Ligne",
      description: "Déploiement et formation à l'utilisation",
    },
  ];

  const included = [
    "Design sur-mesure et moderne",
    "Responsive (mobile, tablette, desktop)",
    "Optimisation SEO (référencement)",
    "Formulaire de contact fonctionnel",
    "Hébergement web 1 an inclus",
    "Nom de domaine .fr ou .com inclus",
    "Certificat SSL (sécurité)",
    "Google Analytics intégré",
    "Formation à la gestion du contenu",
    "Support technique 6 mois",
    "Sauvegardes automatiques",
    "Conformité RGPD",
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Si on n'est pas sur la page principale, rediriger vers la page d'accueil
      window.location.href = "/#contact";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>

        {/* Animated Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-cyan-500/6 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
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
            <div className="text-4xl md:text-6xl text-blue-400 mb-4 md:mb-6">
              <FaGlobe />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              Site Vitrine
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
                Professionnel
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
              Créez une présence en ligne professionnelle qui reflète
              parfaitement votre activité et attire vos futurs clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Demander un Devis
              </button>
              <div className="text-center sm:text-left">
                <div className="text-xl md:text-2xl font-bold text-white">
                  À partir de 1 500€
                </div>
                <div className="text-sm text-gray-400">
                  Tout inclus, sans surprises
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
            Pourquoi Choisir un Site Vitrine ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl md:text-3xl text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
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

      {/* Process Section */}
      <section className="py-12 md:py-20 px-4 bg-gray-900/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16">
            Mon Processus de Création
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text mb-4">
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
      <section className="py-12 md:py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16">
            Tout ce qui est Inclus
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Prêt à Lancer Votre Site ?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed">
            Parlons de votre projet ! Je vous accompagne de A à Z pour créer le
            site vitrine parfait pour votre activité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Obtenir un Devis Gratuit
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
