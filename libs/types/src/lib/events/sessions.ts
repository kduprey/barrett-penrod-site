import { z } from "zod";

export const SESSION_LOCATIONS = [
	"Location Chosen By Client",
	"Open Jar",
	"Home Studio",
	"Virtual",
] as const;
export const SessionLocationEnum = z.enum(SESSION_LOCATIONS);

export type SessionLocation = z.infer<typeof SessionLocationEnum>;

export const SESSION_TYPES = [
	"Voice Lesson",
	"Voice Coaching",
	"SVS Session",
	"Audition Coaching",
	"Trial Session",
	"Trial Session - SVS",
] as const;

export const SessionTypeEnum = z.enum(SESSION_TYPES);

export type SessionType = z.infer<typeof SessionTypeEnum>;
