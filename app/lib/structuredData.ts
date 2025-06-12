import { SEO_CONFIG } from './seoConfig';

export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Xhaflaire Axel",
  "jobTitle": "Développeur Full Stack",
  "description": SEO_CONFIG.defaultDescription,
  "url": SEO_CONFIG.baseUrl,
  "sameAs": [
    SEO_CONFIG.social.github,
    SEO_CONFIG.social.linkedin
  ],
  "knowsAbout": [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Développement Web",
    "Développement Mobile",
    "API REST",
    "Base de données"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Développeur Full Stack",
    "occupationLocation": {
      "@type": "Country",
      "name": "France"
    },
    "skills": [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "PostgreSQL",
      "Supabase"
    ]
  }
}

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Xhaflaire Axel - Services de Développement Web",
  "description": "Services de développement web et mobile sur mesure",
  "url": "https://www.xhaflaireaxel.com",
  "founder": {
    "@type": "Person",
    "name": "Xhaflaire Axel"
  },
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "serviceType": [
    "Développement de sites web",
    "Développement d'applications web",
    "Développement d'applications mobiles",
    "Création d'API",
    "Développement de dashboards"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de développement",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Site Vitrine",
          "description": "Création de sites web modernes et responsives"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Application Web",
          "description": "Développement d'applications web sur mesure"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Application Mobile",
          "description": "Création d'applications mobiles natives et hybrides"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API Backend",
          "description": "Développement d'APIs REST sécurisées et performantes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dashboard Admin",
          "description": "Création de tableaux de bord administratifs"
        }
      }
    ]
  }
}

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Portfolio Xhaflaire Axel",
  "url": "https://www.xhaflaireaxel.com",
  "description": "Portfolio professionnel de Xhaflaire Axel, développeur Full Stack",
  "inLanguage": "fr-FR",
  "isPartOf": {
    "@type": "WebSite",
    "url": "https://www.xhaflaireaxel.com"
  },
  "author": {
    "@type": "Person",
    "name": "Xhaflaire Axel"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.xhaflaireaxel.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
