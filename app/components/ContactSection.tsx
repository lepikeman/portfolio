"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          message: "",
        });
      }, 3000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-6">✓</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Message Envoyé !
          </h2>
          <p className="text-xl text-gray-400">
            Merci pour votre message. Je vous répondrai dans les plus brefs
            délais.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Parlons-en ! Je suis disponible pour
            discuter de vos besoins et vous proposer une solution sur-mesure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Restons en Contact
              </h3>
              <p className="text-gray-400 mb-8">
                N&apos;hésitez pas à me contacter. Je réponds généralement sous
                24h.
              </p>
            </div>

            {/* Contact Info Cards - Version avec accents de couleur */}
            <div className="space-y-4">
              <a
                href="mailto:xhaflaire.axel@gmail.com?subject=Contact%20depuis%20portfolio"
                className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="text-xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-gray-400">xhaflaire.axel@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+33667394256"
                className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <div className="text-xl text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                  <FaPhone />
                </div>
                <div>
                  <div className="text-white font-medium">Téléphone</div>
                  <div className="text-gray-400">+33 6 67 39 42 56</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-purple-500/50 transition-all duration-300 group">
                <div className="text-xl text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="text-white font-medium">Localisation</div>
                  <div className="text-gray-400">
                    France • Travail à distance
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links - Minimaliste */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Suivez-moi</h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/xhaflaireaxel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <FaLinkedin className="text-xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </a>
                <a
                  href="https://github.com/lepikeman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <FaGithub className="text-xl text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact - Version minimaliste */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Décrivez Votre Projet
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-medium mb-2"
                  >
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gray-500 focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gray-500 focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-white font-medium mb-2"
                >
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gray-500 focus:outline-none transition-colors"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-white font-medium mb-2"
                >
                  Type de Projet
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-gray-500 focus:outline-none transition-colors"
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="site-vitrine">Site Vitrine</option>
                  <option value="web-app">Application Web</option>
                  <option value="mobile-app">Application Mobile</option>
                  <option value="api">API / Backend</option>
                  <option value="dashboard">Dashboard Admin</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-gray-500 focus:outline-none transition-colors resize-none"
                  placeholder="Décrivez votre projet, vos besoins, délais souhaités..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-blue-500/25"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Envoyer le Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
