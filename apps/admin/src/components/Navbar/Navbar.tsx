"use client";

import {
	Container,
	Group,
	Tabs,
	Burger,
	useMantineTheme,
	Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import classes from "./Navbar.module.css";

const tabs = ["Home", "Bookings", "Clients", "Finance", "Account"];

export const Navbar = () => {
	const theme = useMantineTheme();
	const [opened, { toggle }] = useDisclosure(false);

	const items = tabs.map((tab) => (
		<Link
			href={`/${tab.toLowerCase() === "home" ? "" : tab.toLowerCase()}`}
			key={tab}
			style={{
				textDecoration: "none",
				color: "inherit",
			}}
		>
			<Tabs.Tab value={tab}>{tab}</Tabs.Tab>
		</Link>
	));

	return (
		<div className={classes.header}>
			<Container className={classes.mainSection} size="md">
				<Group justify="space-between">
					<Text
						style={{
							color: theme.colors[theme.primaryColor][6],
						}}
					>
						BVPS Admin
					</Text>
					<Burger hiddenFrom="xs" onClick={toggle} opened={opened} size="sm" />
					<UserButton
						appearance={{
							elements: {
								userButtonOuterIdentifier: {
									color: theme.colors[theme.primaryColor][6],
								},
							},
						}}
						showName
					/>
				</Group>
			</Container>
			<Container size="md">
				<Tabs
					classNames={{
						root: classes.tabs,
						list: classes.tabsList,
						tab: classes.tab,
					}}
					defaultValue="Home"
					variant="outline"
					visibleFrom="sm"
				>
					<Tabs.List>{items}</Tabs.List>
				</Tabs>
			</Container>
		</div>
	);
};
