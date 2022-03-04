const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })
  

module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    experimental: {
        esmExternals: false,
    },
    images: {
        domains: ['github.com'],
    },
});
