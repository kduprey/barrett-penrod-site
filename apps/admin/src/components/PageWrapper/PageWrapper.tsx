"use client";

import {
	AppShell,
	Burger,
	Group,
	AppShellHeader,
	AppShellNavbar,
	AppShellMain,
} from "@mantine/core";
import type { PropsWithChildren } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Navbar } from "../Navbar/Navbar";

export const PageWrapper = ({ children }: PropsWithChildren) => {
	const params = useSearchParams();
	const router = useRouter();

	return (
		<AppShell
			header={{ height: { base: 60, md: 70, lg: 80 } }}
			navbar={{
				width: { base: 80 },
				breakpoint: "sm",
				collapsed: { mobile: params.get("isNavOpen") !== "true" },
			}}
			padding="md"
		>
			<AppShellHeader withBorder={false}>
				<Group h="100%" px="md">
					<Burger
						hiddenFrom="sm"
						onClick={() => {
							if (params.get("isNavOpen") === "true") {
								router.back();
								return;
							}
							router.push("/?isNavOpen=true");
						}}
						opened={params.get("isNavOpen") === "true"}
						size="sm"
					/>
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
