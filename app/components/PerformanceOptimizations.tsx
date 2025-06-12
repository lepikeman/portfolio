"use client";

import { useEffect } from "react";

export default function PerformanceOptimizations() {
  useEffect(() => {
    // Préchargement des ressources critiques
    const criticalResources = ["/favicon.ico", "/manifest.json"];

    criticalResources.forEach((resource) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = resource;
      link.as = resource.endsWith(".ico") ? "image" : "fetch";
      document.head.appendChild(link);
    });

    // Optimisation des polices Google
    const fontPreconnect = document.createElement("link");
    fontPreconnect.rel = "preconnect";
    fontPreconnect.href = "https://fonts.googleapis.com";
    document.head.appendChild(fontPreconnect);

    const fontPreconnectStatic = document.createElement("link");
    fontPreconnectStatic.rel = "preconnect";
    fontPreconnectStatic.href = "https://fonts.gstatic.com";
    fontPreconnectStatic.crossOrigin = "anonymous";
    document.head.appendChild(fontPreconnectStatic);

    // Ajout du lien vers humans.txt
    const humansLink = document.createElement("link");
    humansLink.rel = "author";
    humansLink.href = "/humans.txt";
    document.head.appendChild(humansLink);

    return () => {
      // Nettoyage si nécessaire
    };
  }, []);

  return null;
}
