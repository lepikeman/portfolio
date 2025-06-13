"use client";

import Script from "next/script";

interface GoogleAnalyticsProps {
  gaId: string;
}

// Types pour Google Analytics
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

type GtagEvent = {
  event_category?: string;
  event_label?: string;
  value?: number;
  page_path?: string;
  [key: string]: unknown;
};

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
}

// Hook pour envoyer des événements personnalisés
export const gtag = (...args: unknown[]) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...args);
  }
};

// Fonctions utilitaires pour tracking
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const trackPageView = (url: string) => {
  gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
    page_path: url,
  });
};

export const trackConversion = (eventName: string, parameters?: GtagEvent) => {
  gtag("event", eventName, parameters);
};
