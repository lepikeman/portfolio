import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "API REST & Backend - Xhaflaire Axel",
  description:
    "Développement d'APIs REST sécurisées et performantes. Node.js, Express, base de données, authentification, documentation complète.",
  keywords: [
    "API REST",
    "backend",
    "Node.js",
    "Express",
    "base de données",
    "authentification",
    "sécurité API",
  ],
  openGraph: {
    title: "API REST & Backend - Xhaflaire Axel",
    description:
      "Développement d'APIs REST sécurisées et performantes. Node.js, Express, documentation complète.",
    url: "https://www.xhaflaireaxel.com/services/api-backend",
  },
  alternates: {
    canonical: "/services/api-backend",
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

export default function ApiBackendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
