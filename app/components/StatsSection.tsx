"use client";

export default function StatsSection() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mon Parcours
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Plus de 3 ans d&apos;expérience dans le développement web moderne,
            avec une passion pour créer des solutions innovantes.
          </p>
        </div>

        {/* Grille de statistiques - Version avec accents de couleur */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
          <div className="flex flex-col items-center text-center group">
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text mb-2 group-hover:from-blue-300 group-hover:to-blue-500 transition-all duration-300">
              15+
            </div>
            <div className="text-base text-gray-400">Projets Réalisés</div>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text mb-2 group-hover:from-purple-300 group-hover:to-purple-500 transition-all duration-300">
              12+
            </div>
            <div className="text-base text-gray-400">Clients Satisfaits</div>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text mb-2 group-hover:from-emerald-300 group-hover:to-emerald-500 transition-all duration-300">
              3+
            </div>
            <div className="text-base text-gray-400">
              Années d&apos;Expérience
            </div>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text mb-2 group-hover:from-orange-300 group-hover:to-orange-500 transition-all duration-300">
              98%
            </div>
            <div className="text-base text-gray-400">Projets à Temps</div>
          </div>
        </div>

        {/* Section "Pourquoi me choisir" - Version minimaliste */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
            <div className="text-2xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-3">
              Développement Rapide
            </h3>
            <p className="text-gray-400">
              Méthodologie agile pour des livraisons rapides sans compromis sur
              la qualité.
            </p>
          </div>

          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
            <div className="text-2xl mb-4">💡</div>
            <h3 className="text-xl font-bold text-white mb-3">
              Solutions Modernes
            </h3>
            <p className="text-gray-400">
              Technologies actuelles pour des applications performantes et
              évolutives.
            </p>
          </div>

          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center">
            <div className="text-2xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">
              Orienté Résultats
            </h3>
            <p className="text-gray-400">
              Focus sur vos objectifs avec un suivi personnalisé et des
              livrables mesurables.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
