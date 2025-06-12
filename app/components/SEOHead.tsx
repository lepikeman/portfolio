interface SEOHeadProps {
  canonical?: string;
  structuredData?: object[];
}

export default function SEOHead({
  canonical = "https://www.xhaflaireaxel.com",
  structuredData = [],
}: SEOHeadProps) {
  return (
    <>
      <link rel="manifest" href="/manifest.json" />
      <link rel="canonical" href={canonical} />
      <meta name="theme-color" content="#3b82f6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Portfolio Axel" />
      <link rel="author" href="/humans.txt" />

      {/* Données structurées */}
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
