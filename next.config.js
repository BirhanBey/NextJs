/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ['en', 'fr', 'nl', 'tr'],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path e.g. `/hello`
     */
    defaultLocale: 'tr',
    localeDetection: false,
  },
};

module.exports = nextConfig;
