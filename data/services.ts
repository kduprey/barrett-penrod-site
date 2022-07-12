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

export const services: ServiceType[] = [
	{
		title: "Voice Lesson",
		description:
			"One hour, one on one individualized voice lesson, where we work the coordination and function of the voice for singing technique, both genre specific and individual style, and performance.",
		locations,
		get url() {
			return this.locations.map((location) => {
				return bookingLink(this.title, location);
			});
		},
	},
	{
		title: "Voice Coaching",
		description:
			"One hour, one on one individualized voice coaching, where we work the artistic interpretation of client chosen repertoire through the lens of musicality, stylistic choice, song analysis, personal authenticity in song, and acting in song. ",
		locations,
		get url() {
			return this.locations.map((location) => {
				return bookingLink(this.title, location);
			});
		},
	},

	{
		title: "SVS Session",
		description:
			"One hour and fifteen minute habilitative session focused towards the singing voice for singers who are currently/formerly undergoing vocal rehabilitative treatment with a Speech Language Pathologist and Laryngologist.",
		locations,
		get url() {
			return this.locations.map((location) => {
				return bookingLink(this.title, location);
			});
		},
	},
	{
		title: "Audition Coaching",
		description:
			"A one hour, individual audition prep coaching for specific industry auditions or general audition skills, with additional audition book consultation.",
		locations,
		get url() {
			return this.locations.map((location) => {
				return bookingLink(this.title, location);
			});
		},
	},
];

export const packages: LessonPackage[] = [
	{
		title: "4 Lesson Package",
		discount: "1/2 off a lesson",
		price: "280",
	},
	{
		title: "6 Lesson Package",
		discount: "1 lesson free",
		price: "400",
	},
	{
		title: "8 Lesson Package",
		discount: "1 and 1/2 lessons free",
		price: "520",
	},
	{
		title: "12 Lesson Package",
		discount: "2 lessons free",
		price: "800",
	},
];
