import type { NavMenu } from "../types/types";

const _menu5: NavMenu = {
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

export const headerMenus: {
	link: string;
	label: string;
	links?: { link: string; label: string }[];
}[] = [
	{
		link: "/",
		label: "Home",
	},
	{
		link: "/about",
		label: "About",
		links: [
			{
				link: "/#about-me",
				label: "About Me",
			},
			{
				link: "/#headshots",
				label: "Headshots",
			},
			{
				link: "/#resume",
				label: "Resumé",
			},
		],
	},
	{
		link: "/media",
		label: "Media",
		links: [
			{
				link: "/#video-sound-demo",
				label: "Video/Sound Demo",
			},
			{
				link: "/#production-photos",
				label: "Production Photos",
			},
		],
	},
	{
		link: "/#news",
		label: "News",
	},
	{
		link: "/#contact",
		label: "Contact",
	},
	{
		link: "/voice-studio",
		label: "Voice Studio",
	},
	{
		link: "/contact",
		label: "Contact",
	},
];
