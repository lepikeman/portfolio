import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimisations SEO
  trailingSlash: false,
  compress: true,
  poweredByHeader: false,
  
  // Optimisations d'images
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 an
  },
  
  // En-têtes de sécurité et SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          }
        ],
      },
    ];
  },
  
  // Redirections pour le SEO
  async redirects() {
    return [
      // Ajouter des redirections 301 si nécessaire
    ];
  },
};

export default nextConfig;
