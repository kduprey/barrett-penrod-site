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
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		locations,
		get url() {
			return this.locations.map((location) => {
				return bookingLink(this.title, location);
			});
		},
	},
	{
		title: "Acting Coaching",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
