// app/contact/page.tsx
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Xhaflaire Axel",
  description:
    "Contactez Xhaflaire Axel, développeur Full Stack. Disponible pour vos projets de développement web et mobile. Devis gratuit et réponse rapide.",
  keywords: [
    "contact développeur",
    "devis gratuit",
    "projet web",
    "développement sur mesure",
    "freelance France",
  ],
  openGraph: {
    title: "Contact - Xhaflaire Axel",
    description:
      "Contactez Xhaflaire Axel pour vos projets de développement web et mobile. Devis gratuit et réponse rapide.",
    url: "https://www.xhaflaireaxel.com/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="relative hero min-h-[100dvh] p-8 md:p-12 font-mono  items-center">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl  font-bold mb-2">Axel Xhaflaire</h1>
          <p className="text-lg">
            Fullstack Developer | From France | 26yr old
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>

          <div className="space-y-6">
            <div className="flex items-center">
              <FaEnvelope className="text-xl mr-4" />
              <a
                href="mailto:xhaflaire.axel@gmail.com?subject=Contact%20depuis%20portfolio"
                className="hover:underline"
              >
                xhaflaire.axel@gmail.com
              </a>
            </div>

            <div className="flex items-center">
              <FaPhone className="text-xl mr-4" />
              <a href="tel:+33667394256" className="hover:underline">
                +33 6 67 39 42 56
              </a>
            </div>

            <div className="flex items-center">
              <FaLinkedin className="text-xl mr-4" />
              <a
                href="https://linkedin.com/in/xhaflaireaxel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/xhaflaireaxel
              </a>
            </div>

            <div className="flex items-center">
              <FaGithub className="text-xl mr-4" />
              <a
                href="https://github.com/lepikeman"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/lepikeman
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
