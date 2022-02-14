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
						<Navbar.Section grow>
							<Link href={"/"}>Home</Link>
						</Navbar.Section>
						<Navbar.Section>
							<Link href={"/"}>Home</Link>
						</Navbar.Section>
					</Group>
				</Group>
			</AppShell>
		</main>
	);
};

export default Home;
