import { z } from "zod";

export const clientsSchema = z.object({
	id: z.string(),
	activeMember: z.boolean(),
	archived: z.boolean(),
	email: z.string(),
	dateJoined: z.date(),
	firstLesson: z.date().nullable(),
	lastLesson: z.date().nullable(),
	nextLesson: z.date().nullable(),
	lessonsRemaining: z.number(),
	name: z.string(),
	notes: z.string().nullable(),
	preferredLessonFormat: z.string().nullable(),
	pronouns: z.string().nullable(),
	refundedVolume: z.number(),
	totalLessons: z.number(),
	totalSpend: z.number(),
	stripe_customer_id: z.string().nullable(),
});
