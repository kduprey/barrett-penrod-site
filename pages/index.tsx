import { AppShell, Grid, Group, MediaQuery, Text, Title } from "@mantine/core";
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
		<main>
			<Header
				title={"Barrett Penrod - Actor, Singer, Director, Teacher"}
				// TODO: Add description
				description={""}
			/>
			<AppShell padding={"sm"}>
				<Grid
					align={"center"}
					justify="center"
					sx={{ backgroundColor: "gray" }}
				>
					<Grid.Col md={6}>
						<Group
							position="center"
							spacing={"xs"}
							direction="column"
						>
							<Title order={1} style={{ marginBottom: "0em" }}>
								Barrett Penrod
							</Title>
							<Text
								color={"gray"}
								size={"lg"}
								style={{ marginTop: "0em" }}
							>
								Actor - Singer - Educator - Director - Visual
								Artist
							</Text>
						</Group>
					</Grid.Col>
					<Grid.Col md={6}>
						<Group>
							<NavMenuItem menu={menu1} />
							<NavMenuItem menu={menu2} />
							<NavMenuItem menu={menu3} />
							<NavMenuItem menu={menu4} />
							<NavMenuItem menu={menu5} />
						</Group>
					</Grid.Col>
				</Grid>
			</AppShell>
		</main>
	);
};

export default Home;
