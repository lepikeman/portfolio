"use client";

import { trackEvent, trackConversion } from "./GoogleAnalytics";

// Composant de test pour Google Analytics (à supprimer en production)
export default function GATestComponent() {
  // Ne pas afficher en production
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  const testEvents = [
    {
      name: "Test Section View",
      action: () => trackEvent("section_view", "navigation", "test_section"),
    },
    {
      name: "Test Project Click",
      action: () => trackEvent("project_view", "portfolio", "test_project"),
    },
    {
      name: "Test Contact Form",
      action: () =>
        trackConversion("contact_form_submission", {
          event_category: "lead_generation",
          event_label: "test",
          value: 1,
        }),
    },
    {
      name: "Test Social Click",
      action: () => trackEvent("social_click", "social_media", "test_platform"),
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-gray-900 border border-gray-600 rounded-lg p-4 space-y-2">
      <div className="text-white text-sm font-bold mb-2">
        GA4 Test (Dev Only)
      </div>
      {testEvents.map((event, index) => (
        <button
          key={index}
          onClick={event.action}
          className="block w-full text-left px-3 py-2 text-xs text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors"
        >
          {event.name}
        </button>
      ))}
      <div className="text-xs text-gray-400 mt-2">
        Ouvrez la console pour voir les événements
      </div>
    </div>
  );
}
