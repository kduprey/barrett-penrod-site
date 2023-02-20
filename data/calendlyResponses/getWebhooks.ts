import { CalendlyGetWebhook, CalendlyPostWebhook } from "types/calendlyTypes";

export const getWebhooks: CalendlyGetWebhook = {
	collection: [
		{
			callback_url: "https://barrettpenrod.com/api/webhooks/calendly",
			created_at: "2022-08-15T22:42:54.512480Z",
			creator:
				"https://api.calendly.com/users/b5dadba5-411b-477e-b080-7b06e7072ee4",
			events: ["invitee.created", "invitee.canceled"],
			organization:
				"https://api.calendly.com/organizations/ac748a68-67c0-4e4a-b0d8-4bd791a831ac",
			retry_started_at: null,
			scope: "user",
			state: "active",
			updated_at: "2022-08-15T22:42:54.512480Z",
			uri: "https://api.calendly.com/webhook_subscriptions/c1cbfbd1-c9e7-4b8d-bfbf-4872befd8ab1",
			user: "https://api.calendly.com/users/b5dadba5-411b-477e-b080-7b06e7072ee4",
		},
	],
	pagination: {
		count: 1,
		next_page: null,
		next_page_token: null,
		previous_page: null,
		previous_page_token: null,
	},
};

export const createWebhookResponse: CalendlyPostWebhook = {
	resource: {
		uri: "https://api.calendly.com/webhook_subscriptions/AAAAAAAAAAAAAAAA",
		callback_url: "https://blah.foo/bar",
		created_at: "2019-08-24T14:15:22.123456Z",
		updated_at: "2019-08-24T14:15:22.123456Z",
		retry_started_at: "2019-08-24T14:15:22.123456Z",
		state: "active",
		events: ["invitee.created"],
		scope: "user",
		organization: "https://api.calendly.com/organizations/AAAAAAAAAAAAAAAA",
		user: "https://api.calendly.com/users/AAAAAAAAAAAAAAAA",
		creator: "https://api.calendly.com/users/AAAAAAAAAAAAAAAA",
	},
};
