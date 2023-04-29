import { z } from "zod";

const calendlyInviteePayloadsResourceCancellationSchema = z.object({
	canceled_by: z.string(),
	canceler_type: z.string(),
	reason: z.string(),
});

const calendlyInviteePayloadsResourceQuestionsAndAnswersSchema = z.object({
	answer: z.string(),
	position: z.number(),
	question: z.string(),
});

const noShowSchema = z.object({
	uri: z.string(),
	created_at: z.date(),
});

const paymentSchema = z.object({
	external_id: z.string(),
	provider: z.string(),
	amount: z.number(),
	currency: z.string(),
	terms: z.string(),
	successful: z.boolean(),
});

const reconfirmationSchema = z.object({
	created_at: z.date(),
	confirmed_at: z.date(),
});

const calendlyInviteePayloadsResourceTrackingSchema = z.object({
	salesforce_uuid: z.string().nullable(),
	utm_campaign: z.string().nullable(),
	utm_content: z.string().nullable(),
	utm_medium: z.string().nullable(),
	utm_source: z.string().nullable(),
	utm_term: z.string().nullable(),
});

export const calendlyInviteePayloadsSchema = z.object({
	id: z.string(),
	cancel_url: z.string(),
	cancellation: calendlyInviteePayloadsResourceCancellationSchema.nullable(),
	created_at: z.date(),
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
		calendlyInviteePayloadsResourceQuestionsAndAnswersSchema
	),
	reconfirmation: reconfirmationSchema.nullable(),
	reschedule_url: z.string(),
	rescheduled: z.boolean(),
	routing_form_submission: z.string().nullable(),
	status: z.string(),
	text_reminder_number: z.string().nullable(),
	timezone: z.string(),
	tracking: calendlyInviteePayloadsResourceTrackingSchema,
	updated_at: z.date(),
	uri: z.string(),
	clientId: z.string().nullable(),
});
