import { z } from "zod";

export const sessionTypeSchema = z.union([
	z.literal("Voice Lesson"),
	z.literal("Voice Coaching"),
	z.literal("SVS Session"),
	z.literal("Audition Coaching"),
	z.literal("Trial Session"),
	z.literal("Trial Session - SVS"),
]);

export const sessionLocationSchema = z.union([
	z.literal("Location Chosen By Client"),
	z.literal("Open Jar"),
	z.literal("Home Studio"),
	z.literal("Virtual"),
]);

export const packageTypeSchema = z.union([
	z.literal("4 Session Package"),
	z.literal("6 Session Package"),
	z.literal("8 Session Package"),
	z.literal("12 Session Package"),
]);

export const contactSchema = z.object({
	email: z.string(),
	name: z.string().optional(),
});

export const packageEmailTemplateDataSchema = z.object({
	packageName: z.string(),
	bookingDate: z.string(),
	bookingTime: z.string(),
	bookingLocation: z.string(),
	zoomLink: z.string().optional(),
});

export const emailTemplateDataSchema = z.object({
	bookingDate: z.string(),
	bookingTime: z.string(),
	bookingName: z.string(),
	zoomLink: z.string().optional(),
});

export const emailDataSchema = z.object({
	client: contactSchema.required(),
	sessionType: sessionTypeSchema,
	bookingDate: z.date(),
	bookingLocation: sessionLocationSchema,
	zoomLink: z.string().optional(),
});

export const consultationEmailSchema = emailDataSchema
	.required()
	.omit({ bookingLocation: true, sessionType: true });

export const guestEmailsSchema = emailDataSchema.omit({ client: true }).extend({
	guests: z.array(contactSchema),
});

export const packageConfirmationEmailSchema = emailDataSchema.extend({
	packageName: packageTypeSchema,
});

export const firstTimeEmailSchema = emailDataSchema;

export const singleEmailSchema = emailDataSchema;
