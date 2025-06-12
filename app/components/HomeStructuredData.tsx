"use client";

import { useEffect } from "react";
import {
  personStructuredData,
  organizationStructuredData,
  websiteStructuredData,
} from "@/lib/structuredData";

export default function HomeStructuredData() {
  useEffect(() => {
    // Supprimer les scripts existants
    const existingScripts = document.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    existingScripts.forEach((script) => script.remove());

    // Ajouter les nouvelles données structurées
    const data = [
      personStructuredData,
      organizationStructuredData,
      websiteStructuredData,
    ];

    data.forEach((structuredData, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      script.id = `structured-data-${index}`;
      document.head.appendChild(script);
    });

    return () => {
      // Nettoyer au démontage
      data.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`);
        if (script) script.remove();
      });
    };
  }, []);

  return null;
}
