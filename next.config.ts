import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    qualities: [75, 85, 95, 100],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'randomuser.me', pathname: '/**' },
      { protocol: 'https', hostname: 'upload.wikimedia.org', pathname: '/**' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.gstatic.com', pathname: '/**' },
      { protocol: 'https', hostname: 'github.githubassets.com', pathname: '/**' },
      { protocol: 'https', hostname: 'assets.vercel.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.simpleicons.org', pathname: '/**' },
      { protocol: 'https', hostname: 'img.logo.dev', pathname: '/**' },
    ],
  },
  async redirects() {
    return [
      { source: '/work-with-me', destination: '/ai-implementation', permanent: true },
      { source: '/services/lead-response', destination: '/solutions/crm-automation', permanent: true },
      { source: '/services/automations', destination: '/solutions/business-process-automation', permanent: true },
      { source: '/services/system-care', destination: '/how-it-works', permanent: true },
      { source: '/product', destination: '/ai-implementation-os', permanent: true },
      { source: '/work/construction-custom-crm-perth', destination: '/work/construction-crm', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:all*(png|jpg|jpeg|svg|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
    ];
  }
};

export default nextConfig;
