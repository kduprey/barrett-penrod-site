/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withSentryConfig } = require("@sentry/nextjs");

const { PrismaPlugin } = require("@prisma/nextjs-monorepo-workaround-plugin");

const nextConfig = {
  transpilePackages: ["@bpvs/config", "@bpvs/types"],
  reactStrictMode: true,
  webpack(config, { isServer }) {
    if (isServer) {
      config.plugins.push(new PrismaPlugin());
    } else config.resolve.fallback.fs = false;
    return config;
  },
  async redirects() {
    return [
      {
        source: "/recital",
        destination: "https://youtu.be/-atRUPhiGxU",
        permanent: true,
      },
      {
        source: "/terms-of-use",
        destination: "/terms-of-use.pdf",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy-policy.pdf",
        permanent: true,
      },
      {
        source: "/return-policy",
        destination: "/return-policy.pdf",
        permanent: true,
      },
      {
        source: "/cancellation-policy",
        destination: "/cancellation-policy.pdf",
        permanent: true,
      },
      {
        source: "/cookie-policy",
        destination: "/cookie-policy.pdf",
        permanent: true,
      },
      {
        source: "/voice-studio/trial",
        destination: "/voice-studio/bookNow?service=4&location=1",
        permanent: true,
      },
      {
        source: "/voice-studio/trial-svs",
        destination: "/voice-studio/bookNow?service=5&location=1",
        permanent: true,
      },
      {
        source: "/bookings",
        destination: "/voice-studio",
        permanent: true,
      },
      {
        source: "/bookings/:slug*",
        destination: "/voice-studio/:slug*",
        permanent: true,
      },
      {
        source: "/voicestudio/:slug*",
        destination: "/voice-studio/:slug*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,HEAD,PUT,PATCH,POST,DELETE",
          },
        ],
      },
      {
        source: "/www.youtube-nocookie.com/",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "SameSite",
            value: "None; Secure",
          },
          {
            key: "Content-Security-Policy",
            value: "upgrade-insecure-requests",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
  eslint: {
    dirs: ["."],
  },
  sentry: {
    hideSourceMaps: true,
    tunnelRoute: "/monitoring",
  },
};

const sentryWebpackPluginOptions = {
  silent: true,

  // An auth token is required for uploading source maps.
  // You can get an auth token from https://sentry.io/settings/account/api/auth-tokens/
  // The token must have `project:releases` and `org:read` scopes for uploading source maps
  authToken: process.env.SENTRY_AUTH_TOKEN,
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
