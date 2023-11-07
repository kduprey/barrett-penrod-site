import axios from "axios";

export const calendlyConfigParams = {
	organization:
		"https://api.calendly.com/organizations/ac748a68-67c0-4e4a-b0d8-4bd791a831ac",
	scope: "organization",
};

export const calendlyWebhookApi = axios.create({
	url: "https://api.calendly.com/webhook_subscriptions",
	headers: {
		Authorization: `Bearer ${process.env.CALENDLY_API_KEY}`,
	},
	params: calendlyConfigParams,
});
