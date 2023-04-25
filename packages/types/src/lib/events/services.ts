import { LessonBundle, Price } from "../stripe";
import { SESSION_LOCATIONS } from "./sessions";

const bookingLink = (title: string, location: string): string => {
	return (
		baseURL +
		title.toLowerCase().split(" ").join("-") +
		"-" +
		location.toLowerCase().split(" ").join("-")
	);
};

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
			return this.locations.map((location) => {
				return bookingLink(title, location);
			});
		},
	},
	{
		title: "Voice Coaching",
		description:
			"One hour, one on one individualized voice coaching, where we work the artistic interpretation of client chosen repertoire through the lens of musicality, stylistic choice, song analysis, personal authenticity in song, and acting in song. ",
		locations: [...SESSION_LOCATIONS],
		get url() {
			const title = this.title;
			return this.locations.map((location) => {
				return bookingLink(title, location);
			});
		},
	},
	{
		title: "SVS Session",
		description:
			"One hour and fifteen minute habilitative session focused towards the singing voice for singers who are currently/formerly undergoing vocal rehabilitative treatment with a Speech Language Pathologist and Laryngologist.",
		locations: ["Location Chosen By Client", "Open Jar", "Virtual"],
		get url() {
			const title = this.title;
			return this.locations.map((location) => {
				return bookingLink(title, location);
			});
		},
	},
	{
		title: "Audition Coaching",
		description:
			"A one hour, individual audition prep coaching for specific industry auditions or general audition skills, with additional audition book consultation.",
		locations: [...SESSION_LOCATIONS],
		get url() {
			const title = this.title;
			return this.locations.map((location) => {
				return bookingLink(title, location);
			});
		},
	},
];

export const bundleServices: Service[] = services.filter((e) => {
	return e.title !== "SVS Session";
});

export const bundles: LessonBundle[] = [
	{
		amtSessions: 4,
		title: "4 Session Package",
		discount: "1/2 off a session",
		price: "280",
		priceID: {
			test: { price: "price_1LLKKfAMm0G1mbCtsNQnB6jW", quantity: 1 },
			live: { price: "price_1LLKHdAMm0G1mbCtVZ9UmBPv", quantity: 1 },
		},
	},
	{
		amtSessions: 6,
		title: "6 Session Package",
		discount: "1 session free",
		price: "400",
		priceID: {
			test: { price: "price_1LLKKtAMm0G1mbCtRGAQOxp7", quantity: 1 },
			live: { price: "price_1LLKIlAMm0G1mbCtcZ3PDgqq", quantity: 1 },
		},
	},
	{
		amtSessions: 8,
		title: "8 Session Package",
		discount: "1 and 1/2 sessions free",
		price: "520",
		priceID: {
			test: { price: "price_1LLKLAAMm0G1mbCt2zHaZ8BU", quantity: 1 },
			live: { price: "price_1LLKJAAMm0G1mbCtcijAzVhU", quantity: 1 },
		},
	},
	{
		amtSessions: 12,
		title: "12 Session Package",
		discount: "2 sessions free",
		price: "800",
		priceID: {
			test: { price: "price_1LLKLLAMm0G1mbCtE0ubYKM2", quantity: 1 },
			live: { price: "price_1LLKJMAMm0G1mbCtSUld32rj", quantity: 1 },
		},
	},
];

export const Prices: Price[] = [
	{
		name: "SVS Session",
		priceID: {
			test: { price: "price_1LDhdeAMm0G1mbCt3nyv52uI", quantity: 1 },
			live: { price: "price_1LDhS8AMm0G1mbCtVVMPsJiS", quantity: 1 },
		},
	},
	{
		name: "Regular Session",
		priceID: {
			test: { price: "price_1LDhdeAMm0G1mbCtGFA3BJEJ", quantity: 1 },
			live: { price: "price_1L88w7AMm0G1mbCt5xei9unc", quantity: 1 },
		},
	},
	{
		name: "Open Jar Booking Fee",
		priceID: {
			test: { price: "price_1LmGq9AMm0G1mbCtMLd52ryM", quantity: 1 },
			live: { price: "price_1LjwkaAMm0G1mbCtmfRqq7Io", quantity: 1 },
		},
	},
];
