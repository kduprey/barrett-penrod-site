import { Logger } from "tslog";

export const logger = new Logger({
	type: "pretty",
	minLevel: process.env.VERCEL_ENV === "production" ? 2 : 4,
	maskValuesOfKeys: [
		"password",
		"passwordConfirmation",
		"credentials",
		"credential",
	],
});
