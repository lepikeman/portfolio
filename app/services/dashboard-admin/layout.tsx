import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Dashboard Admin & Analytics - Xhaflaire Axel",
  description:
    "Création de tableaux de bord administratifs avec analytics avancés. Interface moderne, gestion d'utilisateurs, exports de données, sécurité renforcée.",
  keywords: [
    "dashboard admin",
    "tableau de bord",
    "analytics",
    "gestion utilisateurs",
    "interface admin",
    "backoffice",
  ],
  openGraph: {
    title: "Dashboard Admin & Analytics - Xhaflaire Axel",
    description:
      "Création de tableaux de bord administratifs avec analytics avancés. Interface moderne et sécurité renforcée.",
    url: "https://www.xhaflaireaxel.com/services/dashboard-admin",
  },
  alternates: {
    canonical: "/services/dashboard-admin",
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

export default function DashboardAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
