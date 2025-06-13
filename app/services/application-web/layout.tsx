import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Application Web Sur Mesure - Xhaflaire Axel",
  description:
    "Développement d'applications web modernes avec React, Next.js et Node.js. Solutions sur mesure, architecture scalable, sécurité renforcée.",
  keywords: [
    "application web",
    "développement React",
    "Next.js",
    "Node.js",
    "application sur mesure",
    "développeur fullstack",
  ],
  openGraph: {
    title: "Application Web Sur Mesure - Xhaflaire Axel",
    description:
      "Développement d'applications web modernes avec React, Next.js et Node.js. Solutions sur mesure et architecture scalable.",
    url: "https://www.xhaflaireaxel.com/services/application-web",
  },
  alternates: {
    canonical: "/services/application-web",
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

export default function ApplicationWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
