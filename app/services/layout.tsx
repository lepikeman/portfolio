import type { Metadata, Viewport } from "next";

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
    url: "https://www.xhaflaireaxel.com/services",
  },
  alternates: {
    canonical: "/services",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
    { media: "(prefers-color-scheme: dark)", color: "#1d4ed8" },
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
