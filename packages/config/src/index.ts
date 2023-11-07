import { dev } from "@bpvs/types";

export * from "./lib/axiosOptions";
export * from "./lib/services";
export * from "./lib/stripe";

export const SERVER_URL = dev
	? "https://ad14-2600-4040-9a9b-9200-2582-1bd4-300-a0fb.ngrok.io"
	: "https://barrettpenrod.com";

export const STRIPE_MODE = dev ? "test" : "live";

export const DB_NAME = dev ? "test" : "production";
