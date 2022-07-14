const dev = process.env.NODE_ENV !== "production";

export const server = dev
	? "https://d3c5-108-27-247-65.ngrok.io"
	: "https://barrettpenrod.com";

export const db = dev ? "test" : "prod";

export const stripeMode = dev ? "test" : "live";

export const dbURL = dev
	? "mongodb://localhost:27017"
	: process.env.PRODUCTION_DB_URL;
