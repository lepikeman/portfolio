import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Application Mobile iOS & Android - Xhaflaire Axel",
  description:
    "Développement d'applications mobiles natives et cross-platform. React Native, iOS, Android. Interface intuitive et performance optimisée.",
  keywords: [
    "application mobile",
    "React Native",
    "iOS",
    "Android",
    "développement mobile",
    "app mobile sur mesure",
  ],
  openGraph: {
    title: "Application Mobile iOS & Android - Xhaflaire Axel",
    description:
      "Développement d'applications mobiles natives et cross-platform. React Native, iOS, Android.",
    url: "https://www.xhaflaireaxel.com/services/application-mobile",
  },
  alternates: {
    canonical: "/services/application-mobile",
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

export default function ApplicationMobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
