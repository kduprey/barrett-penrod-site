"use client";

import { AppShell, AppShellHeader, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { PropsWithChildren } from "react";
import { HeaderMenus } from "./HeaderMenus/HeaderMenus";

export const HomeAppShell = ({ children }: PropsWithChildren) => {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: "sm",
				collapsed: { desktop: true, mobile: !opened },
			}}
			padding="md"
		>
			<AppShellHeader>
				<Group h="100%" px="md">
					<Burger hiddenFrom="sm" onClick={toggle} opened={opened} size="sm" />
					<Group justify="space-between" style={{ flex: 1 }}>
						Barrett Penrod
						<Group ml="xl" visibleFrom="sm">
							<HeaderMenus />
						</Group>
					</Group>
				</Group>
			</AppShellHeader>
			<AppShell.Navbar px={4} py="md">
				<HeaderMenus />
			</AppShell.Navbar>
			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	);
};
