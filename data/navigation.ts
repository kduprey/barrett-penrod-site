import { NavMenu } from "../types";

const menu1: NavMenu = {
	name: "Actor - Singer",
	sublinks: [
		{
			name: "About",
			path: "/actor-singer/about",
		},
		{
			name: "Headshot/Resumé",
			path: "/actor-singer/headshot-resume",
		},
		{
			name: "Media",
			path: "/actor-singer/media",
		},
		{
			name: "News",
			path: "/actor-singer/news",
		},
	],
};
const menu2: NavMenu = {
	name: "Voice Studio",
	sublinks: [
		{
			name: "Philosophy",
			path: "/voice-studio/philosophy",
		},
		{
			name: "Booking",
			path: "/voice-studio/booking",
		},
		{
			name: "Research",
			path: "/voice-studio/research",
		},
	],
};
const menu3: NavMenu = {
	name: "Directing",
	sublinks: [
		{
			name: "In Development",
			path: "/directing/in-development",
		},
	],
};

const menu4: NavMenu = {
	name: "Visual Art",
	sublinks: [
		{
			name: "Gallery",
			path: "/visual-art/gallery",
		},
	],
};

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
				path: "/about/about-me",
			},
			{
				name: "Headshots",
				path: "/about/headshots",
			},
			{
				name: "Resumé",
				path: "/about/resume",
			},
		],
	},
	{
		name: "Media",
		path: "/media",
		sublinks: [
			{
				name: "Video/Sound Demo",
				path: "/media/video-sound-demo",
			},
			{
				name: "Production Photos",
				path: "/media/production-photos",
			},
		],
	},
	{
		name: "News",
		path: "/news",
	},
	{
		name: "Contact",
		path: "/contact",
	},
];
