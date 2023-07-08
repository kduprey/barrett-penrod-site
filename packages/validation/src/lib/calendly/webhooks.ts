import { z } from "zod";
import { calendlyEventResourceSchema, cancellationSchema } from "./event";
import {
  noShowSchema,
  paymentSchema,
  questionsAndAnswersSchema,
  reconfirmationSchema,
  trackingSchema,
} from "./invitee";

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
  questions_and_answers: questionsAndAnswersSchema,
  reschedule_url: z.string(),
  rescheduled: z.boolean(),
  routing_form_submission: z.string().nullable(),
  status: z.union([z.literal("active"), z.literal("canceled")]),
  text_reminder_number: z.string().nullable(),
  timezone: z.string().nullable(),
  tracking: trackingSchema,
  updated_at: z.union([z.date(), z.string()]),
  uri: z.string(),
  canceled: z.boolean(),
  cancellation: cancellationSchema.optional(),
  payment: paymentSchema.optional(),
  no_show: noShowSchema,
  reconfirmation: reconfirmationSchema.optional(),
  scheduled_event: calendlyEventResourceSchema,
});
