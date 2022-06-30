const dev = process.env.NODE_ENV !== "production";

export const server = dev
	? "https://1185-108-27-247-65.ngrok.io"
	: "https://barrettpenrod.com";
