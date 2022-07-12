const dev = process.env.NODE_ENV !== "production";

export const server = dev
	? "https://24c0-216-1-111-253.ngrok.io"
	: "https://barrettpenrod.com";

export const db = dev ? "test" : "prod";
