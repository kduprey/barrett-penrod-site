import {
	AppShell,
	Center,
	Group,
	MantineColor,
	Navbar,
	Text,
	Title,
} from "@mantine/core";
import type { NextPage } from "next";
import Header from "../components/Header";
import Link from "next/link";
import NavMenuItem from "../components/Navbar/NavMenuItem";
import { NavMenu } from "../types";

const Home: NextPage = () => {
	const menu1: NavMenu = {
		name: "Actor - Singer",
		path: "/actor-singer",
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
					<Group position="center" spacing={"xs"} direction="column">
						<Title order={1} style={{ marginBottom: "0em" }}>
							Barrett Penrod
						</Title>
						<Text
							color={"gray"}
							size={"lg"}
							style={{ marginTop: "0em" }}
						>
							Actor, Singer, Director, Teacher
						</Text>
					</Group>
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
