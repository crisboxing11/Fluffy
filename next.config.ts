import path from 'path';
import withBundleAnalyzer from '@next/bundle-analyzer';

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];

const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})({
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /slick-theme\.css$/,
      enforce: 'pre',
      use: [path.join(process.cwd(), 'lib/slick-font-display-loader.cjs')],
    });
    return config;
  },

  async redirects() {
    return [
      {
        source: '/mobile-grooming-prices',
        destination: '/prices',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
});

export default nextConfig;
