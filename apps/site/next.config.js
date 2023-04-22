/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withAxiom } = require("next-axiom");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withSentryConfig } = require("@sentry/nextjs");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require("@nrwl/next");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaPlugin } = require("@prisma/nextjs-monorepo-workaround-plugin");

const nextConfig = {
	reactStrictMode: true,
	webpack(config, { isServer }) {
		if (!isServer) {
			config.resolve.fallback.fs = false;
		} else {
			config.plugins = [...config.plugins, new PrismaPlugin()];
		}
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
				source: "/bookings/trial",
				destination: "/bookings/bookNow?service=4&location=1",
				permanent: true,
			},
			{
				source: "/bookings/trial-svs",
				destination: "/bookings/bookNow?service=5&location=1",
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
		hideSourcemaps: true,
		tunnelRoute: "/monitoring-tunnel",
	},
};

const sentryWebpackPluginOptions = {
	silent: true,
};

const plugins = [
	withNx,
	withAxiom,
	withSentryConfig(nextConfig, sentryWebpackPluginOptions),
];

module.exports = composePlugins(...plugins)(nextConfig);
