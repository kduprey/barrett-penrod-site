import {
	PackageTypeEnum,
	SessionLocationEnum,
	SessionTypeEnum,
} from "@bpvs/types";
import { z } from "zod";

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
	sessionType: SessionTypeEnum,
	bookingDate: z.coerce.date(),
	bookingLocation: SessionLocationEnum,
	zoomLink: z.string().optional(),
});

export const consultationEmailSchema = emailDataSchema
	.required()
	.omit({ bookingLocation: true, sessionType: true });

export const guestEmailsSchema = emailDataSchema.omit({ client: true }).extend({
	guests: z.array(contactSchema),
});

export const packageConfirmationEmailSchema = emailDataSchema.extend({
	packageName: PackageTypeEnum,
});

export const firstTimeEmailSchema = emailDataSchema;

export const singleEmailSchema = emailDataSchema;
