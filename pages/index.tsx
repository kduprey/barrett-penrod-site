import type { NextPage } from "next";
import Header from "../components/Header";
import Link from "next/link";
import NavMenuItem from "../components/Navbar/NavMenuItem";
import { NavMenu } from "../types";

const Home: NextPage = () => {
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

	return (
		<main className="h-screen w-full bg-slate-100 p-6">
			<Header
				title={"Barrett Penrod - Actor, Singer, Director, Teacher"}
				// TODO: Add description
				description={""}
			/>

			<div className="flex flex-col space-y-4">
				<div className="flex flex-col items-center justify-center space-y-3">
					<h1 className="text-center">Barrett Penrod</h1>
					<h5 className="text-center text-slate-700">
						Actor - Singer - Educator - Director - Visual Artist
					</h5>
				</div>
				<div className="flex justify-evenly items-center">
					<NavMenuItem menu={menu1} />
					<NavMenuItem menu={menu2} />
					<NavMenuItem menu={menu3} />
					<NavMenuItem menu={menu4} />
					<NavMenuItem menu={menu5} />
				</div>
			</div>
		</main>
	);
};

export default Home;
