import { AppShell, Group, Navbar } from "@mantine/core";
import type { NextPage } from "next";
import Header from "../components/Header";
import Link from "next/link";
import NavMenuItem from "../components/Navbar/NavMenuItem";
import { NavMenu } from "../types";

const Home: NextPage = () => {
	const menu1: NavMenu = {
		name: "Performance",
		sublinks: [
			{
				name: "About",
				path: "/performance/about",
			},
			{
				name: "Media",
				path: "/performance/media",
			},
			{
				name: "News",
				path: "/performance/news",
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
		name: "Projects",
		sublinks: [
			{
				name: "Directing",
				path: "/projects/directing",
			},
			{
				name: "In the Works",
				path: "/projects/in-the-works",
			},
		],
	};
	const menu4: NavMenu = {
		name: "Contact",
		path: "/contact",
	};

	return (
		<main>
			<Header
				title={"Barrett Penrod - Actor, Singer, Director, Teacher"}
				// TODO: Add description
				description={""}
			/>
			<AppShell padding={"sm"}>
				<Group direction="column" position="center">
					<h1>Barrett Penrod</h1>
					<Group>
						<NavMenuItem menu={menu1} />
						<NavMenuItem menu={menu2} />
						<NavMenuItem menu={menu3} />
						<NavMenuItem menu={menu4} />
					</Group>
				</Group>
			</AppShell>
		</main>
	);
};

export default Home;
