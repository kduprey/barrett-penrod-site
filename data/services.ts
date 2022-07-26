import { LessonPackage } from "../types";

type ServiceType = {
	title: string;
	description: string;
	locations: string[];
	url: string[];
};

const locations: string[] = [
	"Location Chosen By Client",
	"Open Jar",
	"Home Studio",
	"Virtual",
];

const bookingLink = (title: string, location: string): string => {
	return (
		baseURL +
		title.toLowerCase().split(" ").join("-") +
		"-" +
		location.toLowerCase().split(" ").join("-")
	);
};

const baseURL = "https://calendly.com/bpvoicestudio/";

export const calendlyNames = [
	{
		title: "Voice Lesson",
		names: [
			"Voice Lesson - Location Chosen By Client",
			"Voice Lesson - Open Jar",
			"Voice Lesson - Home Studio",
			"Voice Lesson - Virtual",
		],
	},
	{
		title: "Voice Coaching",
		names: [
			"Voice Coaching - Location Chosen By Client",
			"Voice Coaching - Open Jar",
			"Voice Coaching - Home Studio",
			"Voice Coaching - Virtual",
		],
	},
	{
		title: "SVS Session",
		name: [
			"SVS Session - Location Chosen By Client",
			"SVS Session - Open Jar",
			"SVS Session - Home Studio",
			"SVS Session - Virtual",
		],
	},
	{
		title: "Audition Coaching",
		name: [
			"Audition Coaching - Location Chosen By Client",
			"Audition Coaching - Open Jar",
			"Audition Coaching - Home Studio",
			"Audition Coaching - Virtual",
		],
	},
];

export const services: ServiceType[] = [
	{
		title: "Voice Lesson",
		description:
			"One hour, one on one individualized voice lesson, where we work the coordination and function of the voice for singing technique, both genre specific and individual style, and performance.",
		locations,
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
		locations,
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
		locations: ["Open Jar", "Virtual", "Location Chosen By Client"],
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
		locations,
		get url() {
			const title = this.title;
			return this.locations.map((location) => {
				return bookingLink(title, location);
			});
		},
	},
];

export const packages: LessonPackage[] = [
	{
		amtSessions: 4,
		title: "4 Session Package",
		discount: "1/2 off a session",
		price: "280",
		stripeID: {
			test: "price_1LLKKfAMm0G1mbCtsNQnB6jW",
			live: "price_1LLKHdAMm0G1mbCtVZ9UmBPv",
		},
	},
	{
		amtSessions: 6,
		title: "6 Session Package",
		discount: "1 session free",
		price: "400",
		stripeID: {
			test: "price_1LLKKtAMm0G1mbCtRGAQOxp7",
			live: "price_1LLKIlAMm0G1mbCtcZ3PDgqq",
		},
	},
	{
		amtSessions: 8,
		title: "8 Session Package",
		discount: "1 and 1/2 sessions free",
		price: "520",
		stripeID: {
			test: "price_1LLKLAAMm0G1mbCt2zHaZ8BU",
			live: "price_1LLKJAAMm0G1mbCtcijAzVhU",
		},
	},
	{
		amtSessions: 12,
		title: "12 Session Package",
		discount: "2 sessions free",
		price: "800",
		stripeID: {
			test: "price_1LLKLLAMm0G1mbCtE0ubYKM2",
			live: "price_1LLKJMAMm0G1mbCtSUld32rj",
		},
	},
];
