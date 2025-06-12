"use client";

import Link from "next/link";
import {
  FaArrowLeft,
  FaChartBar,
  FaCheck,
  FaUsers,
  FaFileExport,
  FaShieldAlt,
  FaChartLine,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function DashboardAdminPage() {
  const features = [
    {
      icon: <FaChartLine />,
      title: "Analytics Avancés",
      description: "Graphiques et statistiques en temps réel",
    },
    {
      icon: <FaUsers />,
      title: "Gestion Utilisateurs",
      description: "Administration complète des comptes et permissions",
    },
    {
      icon: <FaFileExport />,
      title: "Export de Données",
      description: "Export en PDF, Excel, CSV selon vos besoins",
    },
    {
      icon: <FaShieldAlt />,
      title: "Sécurité Renforcée",
      description: "Authentification multi-niveaux et audit trails",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analyse des Besoins",
      description: "Définition des KPIs et fonctionnalités administratives",
    },
    {
      step: "02",
      title: "Design Interface",
      description: "Création d'une interface intuitive et ergonomique",
    },
    {
      step: "03",
      title: "Développement",
      description: "Intégration des données et création des tableaux de bord",
    },
    {
      step: "04",
      title: "Formation & Support",
      description: "Formation des administrateurs et documentation",
    },
  ];

  const included = [
    "Interface d'administration intuitive",
    "Tableaux de bord personnalisables",
    "Graphiques et statistiques en temps réel",
    "Gestion complète des utilisateurs",
    "Système de rôles et permissions",
    "Export de données (PDF, Excel, CSV)",
    "Filtres et recherche avancée",
    "Audit trail et logs d'activité",
    "Notifications automatiques",
    "Sauvegarde et restauration de données",
    "Interface responsive (mobile/desktop)",
    "Authentification sécurisée",
    "Documentation d'utilisation",
    "Formation des équipes",
  ];

  const dashboardTypes = [
    {
      title: "Analytics Business",
      description: "Suivi des performances, ventes, conversions",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Gestion Utilisateurs",
      description: "Administration des comptes et permissions",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Monitoring Système",
      description: "Surveillance des performances techniques",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "E-commerce Admin",
      description: "Gestion produits, commandes, inventaire",
      color: "from-orange-500 to-red-500",
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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-red-900/20"></div>

        {/* Animated Circles */}
        <div className="absolute top-16 right-12 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-48 left-8 w-80 h-80 bg-red-500/8 rounded-full blur-3xl animate-pulse delay-800"></div>
        <div className="absolute bottom-24 right-1/3 w-64 h-64 bg-yellow-500/6 rounded-full blur-3xl animate-pulse delay-1400"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
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

        {/* Mobile-First Hero Section */}
        <div className="pt-8 md:pt-16 pb-12 md:pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-4xl md:text-6xl text-orange-400 mb-4 md:mb-6">
              <FaChartBar />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
              Dashboard Admin
              <span className="block text-transparent bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text">
                Intuitif
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
              Un espace d&apos;administration complet et intuitif pour piloter
              votre activité avec tableaux de bord et analytics avancés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
              >
                Demander un Devis
              </button>
              <div className="text-center sm:text-left">
                <div className="text-xl md:text-2xl font-bold text-white">
                  À partir de 3 000€
                </div>
                <div className="text-sm text-gray-400">Analytics incluses</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Types Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Types de Dashboards
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {dashboardTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-orange-500/50 transition-colors duration-300"
              >
                <div
                  className={`text-xl font-bold mb-3 text-transparent bg-gradient-to-r ${type.color} bg-clip-text`}
                >
                  {type.title}
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-900/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Fonctionnalités Administratives
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl text-orange-400 mb-4 group-hover:text-orange-300 transition-colors duration-300">
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
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Processus de Création
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text mb-4">
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
      <section className="py-20 px-4 bg-gradient-to-r from-orange-900/20 to-red-900/20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pilotez Votre Activité avec Précision
          </h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Créons ensemble le dashboard administratif qui vous donnera une
            vision claire et un contrôle total sur votre business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
            >
              Créer Mon Dashboard
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
