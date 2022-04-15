import { Link } from "react-scroll";
import { NavMenu } from "../types";

const menu1: NavMenu = {
	name: "Actor - Singer",
	sublinks: [
		{
			name: "About",
			path: "/actor-singer/about",
			scrollTo: false,
		},
		{
			name: "Headshot/Resumé",
			path: "/actor-singer/headshot-resume",
			scrollTo: false,
		},
		{
			name: "Media",
			path: "/actor-singer/media",
			scrollTo: false,
		},
		{
			name: "News",
			path: "/actor-singer/news",
			scrollTo: false,
		},
	],
};
const menu2: NavMenu = {
	name: "Voice Studio",
	sublinks: [
		{
			name: "Philosophy",
			path: "/voice-studio/philosophy",
			scrollTo: false,
		},
		{
			name: "Booking",
			path: "/voice-studio/booking",
			scrollTo: false,
		},
		{
			name: "Research",
			path: "/voice-studio/research",
			scrollTo: false,
		},
	],
};
const menu3: NavMenu = {
	name: "Directing",
	sublinks: [
		{
			name: "In Development",
			path: "/directing/in-development",
			scrollTo: false,
		},
	],
};

const menu4: NavMenu = {
	name: "Visual Art",
	sublinks: [
		{
			name: "Gallery",
			path: "/visual-art/gallery",
			scrollTo: false,
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
				path: "about-me",
				scrollTo: true,
			},
			{
				name: "Headshots",
				path: "headshots",
				scrollTo: true,
			},
			{
				name: "Resumé",
				path: "/about/resume",
				scrollTo: false,
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
				scrollTo: false,
			},
			{
				name: "Production Photos",
				path: "/media/production-photos",
				scrollTo: false,
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
