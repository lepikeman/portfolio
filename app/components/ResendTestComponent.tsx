"use client";

import { useState } from "react";

// Composant de test pour Resend (à supprimer en production)
export default function ResendTestComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  // Ne pas afficher en production
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  const testEmailSend = async () => {
    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Test User",
          email: "test@example.com",
          company: "Test Company",
          projectType: "Site Vitrine",
          message:
            "Ceci est un message de test pour vérifier que l'envoi d'emails fonctionne correctement.",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(`✅ Success: ${data.message} (ID: ${data.id})`);
      } else {
        setResult(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setResult(
        `❌ Network Error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-gray-900 border border-gray-600 rounded-lg p-4 w-80">
      <div className="text-white text-sm font-bold mb-2">
        📧 Resend Test (Dev Only)
      </div>

      <button
        onClick={testEmailSend}
        disabled={isLoading}
        className="w-full px-3 py-2 text-sm text-white bg-green-600 hover:bg-green-700 disabled:bg-gray-600 rounded transition-colors mb-2"
      >
        {isLoading ? "Envoi en cours..." : "Tester Envoi Email"}
      </button>

      {result && (
        <div className="text-xs p-2 bg-gray-800 rounded border">
          <pre className="whitespace-pre-wrap text-gray-300">{result}</pre>
        </div>
      )}

      <div className="text-xs text-gray-400 mt-2">
        ⚠️ Configurez RESEND_API_KEY et CONTACT_EMAIL dans .env.local
      </div>
    </div>
  );
}
