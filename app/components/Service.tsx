"use client";

import { SERVICES_DATA } from "@/constants";
import { scrollToContact } from "@/lib/utils";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";
import { trackEvent } from "./GoogleAnalytics";

export default function Service() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services & Solutions
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Du site vitrine à l&apos;application complexe, je vous accompagne
            dans tous vos projets digitaux avec des solutions modernes et
            performantes.
          </p>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
            {["Livraison Rapide", "Prix Transparents", "Support Inclus"].map(
              (value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 justify-center text-gray-400"
                >
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-sm font-medium">{value}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prêt à Donner Vie à Votre Projet ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Discutons ensemble de vos besoins pour vous proposer une solution
            parfaitement adaptée.
          </p>

          <Button
            onClick={() => {
              trackEvent("cta_click", "services_section", "request_quote");
              scrollToContact();
            }}
            variant="secondary"
            size="lg"
            className="mb-6"
          >
            Demander un Devis Gratuit
          </Button>

          <div className="text-sm text-gray-500">
            Devis gratuit sous 24h • Sans engagement • Satisfaction garantie
          </div>
        </div>
      </div>
    </main>
  );
}
