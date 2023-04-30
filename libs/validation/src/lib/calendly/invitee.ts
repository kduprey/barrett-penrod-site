import { z } from "zod";
import { cancellationSchema } from "./event";

export const reconfirmationSchema = z.object({
	created_at: z.string(),
	confirmed_at: z.coerce.date(),
});

export const noShowSchema = z.object({
	uri: z.string(),
	created_at: z.coerce.date(),
});

export const paymentSchema = z.object({
	external_id: z.string(),
	provider: z.enum(["stripe", "paypal"]),
	amount: z.number(),
	currency: z.union([
		z.literal("AUD"),
		z.literal("CAD"),
		z.literal("EUR"),
		z.literal("GBP"),
		z.literal("USD"),
	]),
	terms: z.string(),
	successful: z.boolean(),
});

export const firstLessonQuestionSchema = z.object({
	question: z.literal("Is this your first lesson with Barrett?"),
	answer: z.union([z.literal("Yes"), z.literal("No")]),
	position: z.number(),
});

export const additionalInfoQuestionSchema = z.object({
	question: z.literal(
		"Please share anything that will help prepare for our meeting."
	),
	answer: z.string().optional(),
	position: z.number(),
});

export const trackingSchema = z.object({
	utm_campaign: z.string().nullable(),
	utm_source: z.string().nullable(),
	utm_medium: z.string().nullable(),
	utm_content: z.string().nullable(),
	utm_term: z.string().nullable(),
	salesforce_uuid: z.string().nullable(),
});

export const calendlyCancelSchema = z.object({
	resource: z.object({
		canceled_by: z.string(),
		reason: z.string(),
		canceler_type: z.union([z.literal("host"), z.literal("invitee")]),
	}),
});

export const calendlyInviteeResourceSchema = z.object({
	cancel_url: z.string(),
	created_at: z.string(),
	email: z.string(),
	event: z.string(),
	first_name: z.string().nullable(),
	last_name: z.string().nullable(),
	name: z.string(),
	new_invitee: z.string().nullable(),
	no_show: noShowSchema.nullable(),
	old_invitee: z.string().nullable(),
	payment: paymentSchema.nullable(),
	questions_and_answers: z.array(
		z.union([firstLessonQuestionSchema, additionalInfoQuestionSchema])
	),
	reconfirmation: reconfirmationSchema.nullable(),
	reschedule_url: z.string(),
	rescheduled: z.boolean(),
	routing_form_submission: z.string().nullable(),
	status: z.union([z.literal("active"), z.literal("cancelled")]),
	text_reminder_number: z.string().nullable(),
	timezone: z.string(),
	tracking: trackingSchema,
	updated_at: z.string(),
	uri: z.string(),
	cancellation: cancellationSchema.optional(),
});

export const calendlyInviteeSchema = z.object({
	resource: calendlyInviteeResourceSchema,
});
