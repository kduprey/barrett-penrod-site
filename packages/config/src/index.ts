import { dev } from "@bpvs/types";

export * from "./lib/axiosOptions";
export * from "./lib/services";
export * from "./lib/stripe";

export const STRIPE_MODE = dev ? "test" : "live";

export const DB_NAME = dev ? "test" : "production";

export const SITE_URL = dev
	? "https://bpvs.kduprey.dev"
	: "https://barrettpenrod.com";

export const ADMIN_URL = dev
	? "https://bpvs-admin.kduprey.dev"
	: "https://admin.barrettpenrod.com";

export const CMS_URL = dev
	? "https://bpvs-cms.kduprey.dev"
	: "https://cms.barrettpenrod.com";
