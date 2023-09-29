import { z } from "zod";
import {
	calendlyEventResourceSchema,
	cancellationSchema,
	noShowSchema,
	paymentSchema,
	reconfirmationSchema,
	trackingSchema,
} from "../calendly";

const questionsAndAnswersSchema = z.object({
	question: z.string(),
	answer: z.string(),
	position: z.number(),
});

export const calendlyPayloadDataSchema = z.object({
	cancel_url: z.string(),
	// Date
	created_at: z.union([z.date(), z.string()]),
	email: z.string(),
	event: z.string(),
	name: z.string(),
	first_name: z.string().nullable(),
	last_name: z.string().nullable(),
	new_invitee: z.string().nullable(),
	old_invitee: z.string().nullable(),
	questions_and_answers: z.array(questionsAndAnswersSchema),
	reschedule_url: z.string(),
	rescheduled: z.boolean(),
	routing_form_submission: z.string().nullable(),
	status: z.union([z.literal("active"), z.literal("canceled")]),
	text_reminder_number: z.string().nullable(),
	timezone: z.string().nullable(),
	tracking: trackingSchema,
	updated_at: z.union([z.date(), z.string()]),
	uri: z.string(),
	canceled: z.boolean().optional(),
	cancellation: cancellationSchema.optional(),
	payment: paymentSchema.optional().nullable(),
	no_show: noShowSchema.nullable(),
	reconfirmation: reconfirmationSchema.optional().nullable(),
	scheduled_event: calendlyEventResourceSchema,
});
