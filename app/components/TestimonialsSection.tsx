"use client";

import { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  projectType: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "Directrice Marketing",
    company: "La Pizza du Lac",
    content:
      "Axel a créé un site web magnifique pour notre restaurant. Le design est moderne, responsive et parfaitement adapté à notre image de marque. Nos réservations en ligne ont augmenté de 40% !",
    projectType: "Site Vitrine",
  },
  {
    id: 2,
    name: "Thomas Martin",
    role: "CEO",
    company: "TechStart SARL",
    content:
      "Développement d'une API complexe réalisé dans les temps et budget. Code propre, documentation excellente. Je recommande vivement Axel pour tout projet technique exigeant.",
    projectType: "API & Backend",
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Responsable IT",
    company: "E-commerce Plus",
    content:
      "Dashboard admin intuitif et puissant. L'interface utilisateur est exceptionnelle et nos équipes ont adopté l'outil immédiatement. Support technique réactif.",
    projectType: "Dashboard Admin",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Témoignages Clients
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            La satisfaction client est ma priorité. Voici quelques retours sur
            mes projets récents.
          </p>
        </div>

        {/* Testimonial Card - Version avec accents de couleur */}
        <div className="relative">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 md:p-12 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-start gap-6">
              {/* Quote Icon */}
              <div className="text-3xl text-blue-400 flex-shrink-0">
                <FaQuoteLeft />
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                <p className="text-xl text-gray-300 leading-relaxed mb-8 italic">
                  &quot;{testimonials[currentIndex].content}&quot;
                </p>

                {/* Author Info */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400">
                      {testimonials[currentIndex].role} •{" "}
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded text-sm">
                      {testimonials[currentIndex].projectType}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-blue-600 text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300 border border-gray-600 hover:border-blue-500"
            aria-label="Témoignage précédent"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-blue-600 text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300 border border-gray-600 hover:border-blue-500"
            aria-label="Témoignage suivant"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Section - Minimaliste */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prêt à Rejoindre Mes Clients Satisfaits ?
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Discutons de votre projet et voyons comment je peux vous aider.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300"
          >
            Commencer Mon Projet
          </button>
        </div>
      </div>
    </div>
  );
}
