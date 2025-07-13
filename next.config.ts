import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})({
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/mobile-grooming-prices',
        destination: '/prices',
        permanent: true,
      },
    ];
  },
});

export default nextConfig;
