import { z } from "zod";

export const calendarEventSchema = z.object({
	external_id: z.string(),
	kind: z.string(),
});

export const cancellationSchema = z.object({
	canceled_by: z.string(),
	reason: z.string(),
	canceler_type: z.union([z.literal("host"), z.literal("invitee")]),
});

export const guestSchema = z.object({
	email: z.string(),
	created_at: z.string(),
	updated_at: z.string(),
});

export const eventMembershipSchema = z.object({
	user: z.string(),
});

export const inviteesCounterSchema = z.object({
	active: z.number(),
	limit: z.number(),
	total: z.number(),
});

export const inPersonLocationSchema = z.object({
	type: z.literal("physical"),
	location: z.string(),
});

export const zoomExtraDataSchema = z.object({
	intl_numbers_url: z.string().optional(),
});

export const globalDialInNumberSchema = z.object({
	number: z.string().optional(),
	type: z.string().optional(),
	country: z.string().optional(),
	city: z.string().optional(),
	country_name: z.string().optional(),
});

export const zoomLocationSettingsSchema = z.object({
	global_dial_in_numbers: z.array(globalDialInNumberSchema).optional(),
});

export const zoomLocationDataSchema = z.object({
	id: z.number().optional(),
	settings: zoomLocationSettingsSchema.optional(),
	password: z.string().optional(),
	extra: zoomExtraDataSchema.optional().nullable(),
});

export const zoomLocationSchema = z.object({
	data: zoomLocationDataSchema.optional(),
	join_url: z.string(),
	status: z.union([
		z.literal("initiated"),
		z.literal("processing"),
		z.literal("failed"),
		z.literal("pushed"),
	]),
	type: z.union([z.literal("zoom_conference"), z.literal("zoom")]),
});

export const calendlyEventResourceSchema = z.object({
	calendar_event: calendarEventSchema,
	created_at: z.string(),
	end_time: z.string(),
	event_guests: z.array(guestSchema),
	event_memberships: z.array(eventMembershipSchema),
	event_type: z.string(),
	invitees_counter: inviteesCounterSchema,
	location: z.union([zoomLocationSchema, inPersonLocationSchema]),
	name: z.string(),
	start_time: z.string(),
	status: z.string(),
	updated_at: z.string(),
	uri: z.string(),
	cancellation: cancellationSchema.optional(),
});
