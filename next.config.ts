import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },

  async rewrites() {
    return [
      {
        source: '/mobile-grooming-prices',
        destination: '/prices', // Redirect /mobile-grooming-prices to /prices
      },
    ];
  },
});

export default nextConfig;
