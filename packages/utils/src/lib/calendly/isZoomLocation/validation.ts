import { z } from "zod";

const zoomExtraDataSchema = z.object({
	intl_numbers_url: z.string().optional(),
});

const globalDialInNumberSchema = z.object({
	number: z.string().optional(),
	type: z.string().optional(),
	country: z.string().optional(),
	city: z.string().optional(),
	country_name: z.string().optional(),
});

const zoomLocationSettingsSchema = z.object({
	global_dial_in_numbers: z.array(globalDialInNumberSchema).optional(),
});

const zoomLocationDataSchema = z.object({
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
