import { NavMenu } from "../types";

const menu5: NavMenu = {
	name: "Contact",
	path: "/contact",
};

export const menus: NavMenu[] = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "About",
		path: "/about",
		sublinks: [
			{
				name: "About Me",
				path: "/#about-me",
				id: "about-me",
				scrollTo: true,
			},
			{
				name: "Headshots",
				path: "/#headshots",
				id: "headshots",
				scrollTo: true,
			},
			{
				name: "Resumé",
				id: "resume",
				path: "/#resume",
				scrollTo: true,
			},
		],
	},
	{
		name: "Media",
		path: "/media",
		sublinks: [
			{
				name: "Video/Sound Demo",
				path: "/#video-sound-demo",
				id: "video-sound-demo",
				scrollTo: true,
			},
			{
				name: "Production Photos",
				id: "production-photos",
				path: "/#production-photos",
				scrollTo: true,
			},
		],
	},
	{
		name: "News",
		path: "/#news",
	},
	{
		name: "Contact",
		path: "/#contact",
	},
	{
		name: "Voice Studio",
		path: "/bookings",
	},
];
