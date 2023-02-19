/** @type {import('next').NextConfig} */
import { withAxiom } from "next-axiom";
const nextConfig = withAxiom({
	reactStrictMode: true,
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
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});
		config.resolve.fallback = { fs: false };
		return config;
	},
	eslint: {
		dirs: ["."],
	},
});

module.exports = nextConfig;
