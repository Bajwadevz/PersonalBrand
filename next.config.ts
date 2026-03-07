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
    ],
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
