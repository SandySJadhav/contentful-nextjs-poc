/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Content-Security-Policy',
    value: `frame-ancestors 'self' https://app.contentful.com https://app.eu.contentful.com`,
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'no-referrer',
  },
]

const nextConfig = {
  i18n: {
    locales: ['en-US', 'de-DE'],
    defaultLocale: 'en-US',
    localeDetection: false
  },
  env: {
    ENVIRONMENT_NAME: process.env.ENVIRONMENT_NAME,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders
      }
    ];
  },
  images: {
    domains: ['images.ctfassets.net', 'images.eu.ctfassets.net'],
  }
};

export default nextConfig;
