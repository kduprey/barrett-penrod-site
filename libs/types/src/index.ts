export * from "./lib/calendly";
export * from "./lib/emails";
export * from "./lib/events";
export * from "./lib/nextJS";
export * from "./lib/stripe";

export const dev = process.env["VERCEL_ENV"] !== "production";
export interface Page {
	name: string;
	id: string;
	path: string;
	scrollTo: boolean;
}

export interface NavMenu {
	name: string;
	path?: string;
	sublinks?: Page[];
}
