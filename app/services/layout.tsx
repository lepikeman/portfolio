import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services de Développement Web - Xhaflaire Axel",
  description:
    "Découvrez mes services de développement : sites vitrine, applications web et mobiles, APIs, dashboards admin. Tarifs transparents et qualité professionnelle.",
  keywords: [
    "services développement",
    "site vitrine",
    "application web",
    "application mobile",
    "API REST",
    "dashboard admin",
    "développeur freelance",
  ],
  openGraph: {
    title: "Services de Développement Web - Xhaflaire Axel",
    description:
      "Sites vitrine, applications web et mobiles, APIs, dashboards admin. Tarifs transparents et qualité professionnelle.",
    url: "https://votre-domaine.com/services",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
