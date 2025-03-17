import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})({
  reactStrictMode: true,

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