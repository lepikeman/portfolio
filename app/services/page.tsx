"use client";

import Link from "next/link";
import {
  FaArrowLeft,
  FaGlobe,
  FaRocket,
  FaMobile,
  FaChartBar,
  FaServer,
  FaArrowRight,
} from "react-icons/fa";

// Note: Les métadonnées doivent être dans un composant serveur séparé ou dans layout
// pour les pages client, nous allons utiliser un head personnalisé

export default function ServicesPage() {
  const services = [
    {
      icon: <FaGlobe />,
      title: "Site Vitrine",
      description:
        "Un site professionnel pour présenter votre activité avec un design moderne et responsive.",
      priceRange: "À partir de 1 500€",
      slug: "site-vitrine",
      color: "from-blue-500 to-blue-600",
      features: ["Design responsive", "SEO optimisé", "Hébergement inclus"],
    },
    {
      icon: <FaRocket />,
      title: "Application Web",
      description:
        "Une solution web complète et interactive adaptée à vos besoins métier spécifiques.",
      priceRange: "À partir de 5 000€",
      slug: "application-web",
      color: "from-purple-500 to-purple-600",
      features: ["Interface moderne", "Base de données", "API complète"],
    },
    {
      icon: <FaMobile />,
      title: "Application Mobile",
      description:
        "Une app native ou hybride pour iOS et Android avec une expérience utilisateur optimale.",
      priceRange: "À partir de 8 000€",
      slug: "application-mobile",
      color: "from-emerald-500 to-emerald-600",
      features: ["iOS & Android", "Notifications push", "Mode hors-ligne"],
    },
    {
      icon: <FaChartBar />,
      title: "Dashboard Admin",
      description:
        "Un espace d'administration intuitif pour gérer facilement vos données et activités.",
      priceRange: "À partir de 3 000€",
      slug: "dashboard-admin",
      color: "from-orange-500 to-orange-600",
      features: ["Interface admin", "Analytics", "Gestion utilisateurs"],
    },
    {
      icon: <FaServer />,
      title: "API & Backend",
      description:
        "Une API robuste et sécurisée pour connecter vos applications et services entre eux.",
      priceRange: "À partir de 2 500€",
      slug: "api-backend",
      color: "from-cyan-500 to-cyan-600",
      features: [
        "Architecture microservices",
        "Documentation complète",
        "Sécurité renforcée",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/15 via-black to-emerald-900/15"></div>

        {/* Animated Circles */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-32 right-8 w-80 h-80 bg-purple-500/6 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1200"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-orange-500/4 rounded-full blur-3xl animate-pulse delay-1800"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-4 md:p-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <FaArrowLeft className="text-sm" />
          Retour à l&apos;accueil
        </Link>
      </nav>

      {/* Header */}
      <div className="relative z-10 pt-8 md:pt-16 pb-12 md:pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
            Mes Services
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
              Développement Web
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
            Du site vitrine à l&apos;application complexe, je vous accompagne
            dans tous vos projets digitaux avec des solutions modernes et
            performantes.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="relative z-10 px-4 pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div
                  className={`text-3xl md:text-4xl mb-4 text-transparent bg-gradient-to-r ${service.color} bg-clip-text group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {service.title}
                </h2>

                <p className="text-sm md:text-base text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-xs md:text-sm text-gray-400 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                  <span className="text-white font-bold text-base md:text-lg">
                    {service.priceRange}
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors"
                  >
                    En savoir plus <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 py-12 md:py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16">
            Mon Processus de Travail
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text mb-4">
                01
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Analyse</h3>
              <p className="text-sm md:text-base text-gray-400">
                Compréhension de vos besoins et définition du projet
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text mb-4">
                02
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Conception</h3>
              <p className="text-sm md:text-base text-gray-400">
                Design et architecture de votre solution
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-600 bg-clip-text mb-4">
                03
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">
                Développement
              </h3>
              <p className="text-sm md:text-base text-gray-400">
                Création avec les technologies les plus adaptées
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text mb-4">
                04
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Livraison</h3>
              <p className="text-sm md:text-base text-gray-400">
                Tests, mise en ligne et formation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed">
            Discutons ensemble de vos besoins pour vous proposer la solution
            parfaitement adaptée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Demander un Devis Gratuit
            </Link>
            <Link
              href="/service-tarif"
              className="px-6 md:px-8 py-3 md:py-4 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
            >
              Voir Tous les Tarifs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
