import { CalendlyEventResource } from "./types";

export type CalendlyGetWebhook = {
	/** Array of CalendlyWebhook objects */
	collection: CalendlyWebhook[];
	/** Object descriptor of pagination details */
	pagination: CalendlyPagination;
};

export interface CalendlyPostWebhook {
	/** Object descriptor of the created webhook */
	resource: CalendlyWebhook;
}

export type CalendlyWebhook = {
	/** The URI of the webhook */
	uri: string;
	/** The URL that will receive the webhook */
	callback_url: string;
	/** The moment when the webhook subscription was created (e.g. "2020-01-02T03:04:05.678123Z") */
	created_at: string;
	/** The moment when the webhook subscription was last updated (e.g. "2020-01-02T03:04:05.678123Z") */
	updated_at: string;
	/** The moment when the webhook subscription was last retried (e.g. "2020-01-02T03:04:05.678123Z") */
	retry_started_at: string | null;
	/** Indicates if the webhook subscription is "active" or "disabled" */
	state: "active" | "disabled";
	/** The events that will trigger the webhook */
	events: Array<
		| "invitee.created"
		| "invitee.canceled"
		| "routing_form_submission.created"
	>;
	/** The scope of the webhook subscription */
	scope: "user" | "organization";
	/** The URI of the organization that's associated with the webhook subscription */
	organization: string;
	/** The URI of the user that's associated with the webhook subscription */
	user: string;
	/** The URI of the creator of the webhook subscription */
	creator: string;
};

export type CalendlyPagination = {
	/** The number of rows to return */
	count: number;
	/** URI to return the next page of an ordered list ("null" indicates no additional results are available) */
	next_page: string | null;
	/** URI to return the previous page of an ordered list ("null" indicates no previous results are available) */
	previous_page: string | null;
	/** Token to return the next page of an ordered list ("null" indicates no additional results are available) */
	next_page_token: string | null;
	/** Token to return the previous page of an ordered list ("null" indicates no additional results are available) */
	previous_page_token: string | null;
};

export interface CalendlyEvent {
	resource: CalendlyEventResource;
}
