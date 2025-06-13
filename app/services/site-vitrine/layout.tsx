import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Site Vitrine Professionnel - Xhaflaire Axel",
  description:
    "Création de sites vitrine modernes et responsives. Design professionnel, SEO optimisé, performance garantie. Tarifs compétitifs pour votre présence web.",
  keywords: [
    "site vitrine",
    "site web professionnel",
    "création site internet",
    "design responsive",
    "SEO",
    "développeur web France",
  ],
  openGraph: {
    title: "Site Vitrine Professionnel - Xhaflaire Axel",
    description:
      "Création de sites vitrine modernes et responsives. Design professionnel, SEO optimisé, performance garantie.",
    url: "https://www.xhaflaireaxel.com/services/site-vitrine",
  },
  alternates: {
    canonical: "/services/site-vitrine",
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

export default function SiteVitrineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
