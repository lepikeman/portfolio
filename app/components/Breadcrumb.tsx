"use client";

import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { useEffect } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Générer les données structurées pour les breadcrumbs
  useEffect(() => {
    const breadcrumbStructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://www.xhaflaireaxel.com",
        },
        ...items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 2,
          name: item.label,
          item: item.href
            ? `https://www.xhaflaireaxel.com${item.href}`
            : undefined,
        })),
      ],
    };

    // Supprimer l'ancien script breadcrumb s'il existe
    const existingScript = document.getElementById(
      "breadcrumb-structured-data"
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Ajouter le nouveau script
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "breadcrumb-structured-data";
    script.textContent = JSON.stringify(breadcrumbStructuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(
        "breadcrumb-structured-data"
      );
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [items]);

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-white transition-colors duration-300"
      >
        <FaHome className="text-xs" />
        Accueil
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <FaChevronRight className="text-xs text-gray-600" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-white transition-colors duration-300"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
