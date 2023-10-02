import { LessonBundle, Price, SESSION_LOCATIONS } from "@bpvs/types";

const bookingLink = (title: string, location: string): string =>
	baseURL +
	title.toLowerCase().split(" ").join("-") +
	"-" +
	location.toLowerCase().split(" ").join("-");

export const baseURL = "https://calendly.com/bpvoicestudio/";

export interface Service {
	title: string;
	description: string;
	locations: string[];
	url: string[];
}

export const services: Service[] = [
	{
		title: "Voice Lesson",
		description:
			"One hour, one on one individualized voice lesson, where we work the coordination and function of the voice for singing technique, both genre specific and individual style, and performance.",
		locations: [...SESSION_LOCATIONS],
		get url() {
			const title = this.title;
			return this.locations.map((location) => bookingLink(title, location));
		},
	},
	{
		title: "Voice Coaching",
		description:
			"One hour, one on one individualized voice coaching, where we work the artistic interpretation of client chosen repertoire through the lens of musicality, stylistic choice, song analysis, personal authenticity in song, and acting in song. ",
		locations: [...SESSION_LOCATIONS],
		get url() {
			const title = this.title;
			return this.locations.map((location) => bookingLink(title, location));
		},
	},
	{
		title: "SVS Session",
		description:
			"One hour and fifteen minute habilitative session focused towards the singing voice for singers who are currently/formerly undergoing vocal rehabilitative treatment with a Speech Language Pathologist and Laryngologist.",
		locations: ["Location Chosen By Client", "Open Jar", "Virtual"],
		get url() {
			const title = this.title;
			return this.locations.map((location) => bookingLink(title, location));
		},
	},
	{
		title: "Audition Coaching",
		description:
			"A one hour, individual audition prep coaching for specific industry auditions or general audition skills, with additional audition book consultation.",
		locations: [...SESSION_LOCATIONS],
		get url() {
			const title = this.title;
			return this.locations.map((location) => bookingLink(title, location));
		},
	},
];

export const bundleServices: Service[] = services.filter(
	(e) => e.title !== "SVS Session"
);

export const bundles: LessonBundle[] = [
	{
		amtSessions: 4,
		title: "4 Session Package",
		discount: "1/2 off a session",
		price: "420",
		priceID: {
			test: { price: "price_1NwgIJAMm0G1mbCtWT1wELlE", quantity: 1 },
			live: { price: "price_1NwgVmAMm0G1mbCtkoL27RIv", quantity: 1 },
		},
	},
	{
		amtSessions: 6,
		title: "6 Session Package",
		discount: "1 session free",
		price: "600",
		priceID: {
			test: { price: "price_1NwgHZAMm0G1mbCtqRYmsU7T", quantity: 1 },
			live: { price: "price_1NwgW7AMm0G1mbCtcaDKXOUM", quantity: 1 },
		},
	},
	{
		amtSessions: 8,
		title: "8 Session Package",
		discount: "1 and 1/2 sessions free",
		price: "780",
		priceID: {
			test: { price: "price_1NwgGpAMm0G1mbCt9R0lbi1B", quantity: 1 },
			live: { price: "price_1NwgWRAMm0G1mbCt2wsV8CKD", quantity: 1 },
		},
	},
	{
		amtSessions: 12,
		title: "12 Session Package",
		discount: "2 sessions free",
		price: "1000",
		priceID: {
			test: { price: "price_1NwgDzAMm0G1mbCt6D1T1rwc", quantity: 1 },
			live: { price: "price_1NwgWkAMm0G1mbCt2VB8d2lV", quantity: 1 },
		},
	},
];

export const Prices: Price[] = [
	{
		name: "SVS Session",
		priceID: {
			test: { price: "price_1NwgJnAMm0G1mbCtpxbP4QQl", quantity: 1 },
			live: { price: "price_1NwgSCAMm0G1mbCtQYJILYDH", quantity: 1 },
		},
	},
	{
		name: "Regular Session",
		priceID: {
			test: { price: "price_1NwgJnAMm0G1mbCtpxbP4QQl", quantity: 1 },
			live: { price: "price_1NwgSCAMm0G1mbCtQYJILYDH", quantity: 1 },
		},
	},
	{
		name: "Open Jar Booking Fee",
		priceID: {
			test: { price: "price_1NwgTQAMm0G1mbCtVmFgqtgf", quantity: 1 },
			live: { price: "price_1N6HdcAMm0G1mbCtbflAzpzF", quantity: 1 },
		},
	},
];
