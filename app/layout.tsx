import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "./components/GoogleAnalytics";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Xhaflaire Axel - Développeur Full Stack",
    template: "%s | Xhaflaire Axel",
  },
  description:
    "Développeur Full Stack spécialisé en React, Next.js, Node.js et applications mobiles. Création de sites web modernes, applications web et mobiles sur mesure.",
  keywords: [
    "développeur web",
    "full stack",
    "React",
    "Next.js",
    "Node.js",
    "développeur freelance",
    "création site web",
    "application mobile",
  ],
  authors: [{ name: "Xhaflaire Axel" }],
  creator: "Xhaflaire Axel",
  publisher: "Xhaflaire Axel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.xhaflaireaxel.com"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/fr",
    },
  },
  openGraph: {
    title: "Xhaflaire Axel - Développeur Full Stack",
    description:
      "Développeur Full Stack spécialisé en React, Next.js, Node.js et applications mobiles. Création de sites web modernes, applications web et mobiles sur mesure.",
    url: "https://www.xhaflaireaxel.com",
    siteName: "Portfolio Xhaflaire Axel",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Xhaflaire Axel - Développeur Full Stack",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xhaflaire Axel - Développeur Full Stack",
    description:
      "Développeur Full Stack spécialisé en React, Next.js, Node.js et applications mobiles.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "votre-code-google-search-console",
    yandex: "votre-code-yandex",
    yahoo: "votre-code-yahoo",
    other: {
      "msvalidate.01": "votre-code-bing",
    },
  },
  category: "technology",
  classification: "business",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.json",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="dark">
      <body className={poppins.className}>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {children}
      </body>
    </html>
  );
}
