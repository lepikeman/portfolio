import { SERVICES_DATA } from "@/constants/index";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs et Devis - Services de Développement Web",
  description:
    "Consultez mes tarifs transparents pour le développement web et mobile. Sites vitrine, applications, APIs. Devis gratuit et prix compétitifs.",
  keywords: [
    "tarifs développement web",
    "devis gratuit",
    "prix site internet",
    "coût application web",
    "tarif développeur freelance",
  ],
  openGraph: {
    title: "Tarifs et Devis - Services de Développement Web",
    description:
      "Tarifs transparents pour le développement web et mobile. Devis gratuit et prix compétitifs.",
    url: "https://votre-domaine.com/service-tarif",
  },
  alternates: {
    canonical: "/service-tarif",
  },
};

export default function Page() {
  return (
    <div className="relative">
      {SERVICES_DATA.map((service, index) => (
        <div key={index}>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <h2>{service.priceRange}</h2>
        </div>
      ))}
    </div>
  );
}
