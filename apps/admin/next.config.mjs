/** @type {import('next').NextConfig} */
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer({
	reactStrictMode: true,
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	experimental: {
		optimizePackageImports: [
			"@mantine/core",
			"@mantine/hooks",
			"@tanstack/react-query",
		],
		// instrumentationHook: true,
	},
});
