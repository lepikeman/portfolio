import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import ParticlesBackground from "./components/ParticulesBackground";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xhaflaire Axel",
  description: "Portfolio v3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={poppins.className}>
        <ParticlesBackground />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
