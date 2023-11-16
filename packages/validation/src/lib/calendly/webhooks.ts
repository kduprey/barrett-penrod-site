import { z } from "zod";

export const calendlyWebhookSchema = z.object({
	uri: z.string(),
	callback_url: z.string(),
	created_at: z.string(),
	updated_at: z.string(),
	retry_started_at: z.string().nullable(),
	state: z.union([z.literal("active"), z.literal("disabled")]),
	events: z.array(
		z.union([
			z.literal("invitee.created"),
			z.literal("invitee.canceled"),
			z.literal("routing_form_submission.created"),
		])
	),
	scope: z.union([z.literal("user"), z.literal("organization")]),
	organization: z.string(),
	user: z.string(),
	creator: z.string(),
});

export const calendlyPaginationSchema = z.object({
	count: z.number(),
	next_page: z.string().nullable(),
	previous_page: z.string().nullable(),
	next_page_token: z.string().nullable(),
	previous_page_token: z.string().nullable(),
});

export const calendlyGetWebhookSchema = z.object({
	collection: z.array(calendlyWebhookSchema),
	pagination: calendlyPaginationSchema,
});

export const calendlyPostWebhookSchema = z.object({
	resource: calendlyWebhookSchema,
});
