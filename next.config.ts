import { createRequire } from 'module';
import path from 'path';
import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';

const require = createRequire(path.join(process.cwd(), 'package.json'));
require('./scripts/patch-mui-classes.js');
require('./scripts/register-build-rewrite.js');

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];

const nextConfig: NextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})({
  reactStrictMode: true,

  images: {
    deviceSizes: [640, 1080, 1920],
    imageSizes: [64, 256],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(tsx|ts|jsx|js)$/,
      include: [
        path.join(process.cwd(), 'pages'),
        path.join(process.cwd(), 'components'),
        path.join(process.cwd(), 'styles'),
      ],
      enforce: 'pre',
      use: [path.join(process.cwd(), 'scripts/mui-class-loader.js')],
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
