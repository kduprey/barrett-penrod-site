"use client";

import { useDisclosure } from "@mantine/hooks";
import {
	AppShell,
	Burger,
	Group,
	AppShellHeader,
	AppShellNavbar,
	AppShellMain,
} from "@mantine/core";
import type { PropsWithChildren } from "react";
import { Navbar } from "../Navbar/Navbar";

export const PageWrapper = ({ children }: PropsWithChildren) => {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			header={{ height: { base: 60, md: 70, lg: 80 } }}
			navbar={{
				width: { base: 80 },
				breakpoint: "sm",
				collapsed: { mobile: !opened },
			}}
			padding="md"
		>
			<AppShellHeader withBorder={false}>
				<Group h="100%" px="md">
					<Burger hiddenFrom="sm" onClick={toggle} opened={opened} size="sm" />
					Barrett Penrod Voice Studio
				</Group>
			</AppShellHeader>
			<AppShellNavbar p="md" withBorder={false}>
				<Navbar />
			</AppShellNavbar>
			<AppShellMain>{children}</AppShellMain>
		</AppShell>
	);
};
