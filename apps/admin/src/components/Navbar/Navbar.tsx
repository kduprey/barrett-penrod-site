"use client";

import { useState } from "react";
import { Tooltip, UnstyledButton, Text, Stack, rem, Flex } from "@mantine/core";
import {
	IconHome2,
	IconDeviceDesktopAnalytics,
	IconCalendarStats,
	IconSettings,
	IconLogout,
	IconUsers,
	IconBrandStripe,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./Navbar.module.css";

interface NavbarLinkProps {
	icon: typeof IconHome2;
	label: string;
	active?: boolean;
	onClick?: () => void;
	href: string;
}

const NavbarLink = ({
	icon: Icon,
	label,
	active,
	onClick,
	href,
}: NavbarLinkProps) => {
	return (
		<Tooltip
			label={label}
			position="right"
			transitionProps={{ duration: 0 }}
			visibleFrom="sm"
		>
			<UnstyledButton
				component={Link}
				data-active={active || undefined}
				href={href}
				onClick={onClick}
				w="100%"
			>
				<Flex
					align="center"
					className={classes.link}
					data-active={active || undefined}
					gap="xs"
				>
					<div className={classes.linkIcon}>
						<Icon stroke={1.5} style={{ width: rem(20), height: rem(20) }} />
					</div>
					<Text hiddenFrom="sm">{label}</Text>
				</Flex>
			</UnstyledButton>
		</Tooltip>
	);
};

const mockdata = [
	{ icon: IconHome2, label: "Home", href: "/" },
	{ icon: IconUsers, label: "Clients", href: "/clients" },
	{ icon: IconCalendarStats, label: "Bookings", href: "/bookings" },
	{ icon: IconBrandStripe, label: "Finance", href: "/finance" },
	{ icon: IconDeviceDesktopAnalytics, label: "Analytics", href: "/analytics" },
	{ icon: IconSettings, label: "Settings", href: "/settings" },
];

export const Navbar = () => {
	const path = usePathname();

	const [active, setActive] = useState(
		mockdata.findIndex((link) => link.href === path)
	);

	const links = mockdata.map((link, index) => (
		<NavbarLink
			{...link}
			active={index === active}
			href={link.href}
			key={link.label}
			onClick={() => {
				setActive(index);
			}}
		/>
	));

	return (
		<nav className={classes.navbar}>
			<div className={classes.navbarMain}>
				<Stack gap={rem(10)} justify="center">
					{links}
				</Stack>
			</div>

			<Stack gap={0} justify="center">
				<NavbarLink href="/sign-in" icon={IconLogout} label="Logout" />
			</Stack>
		</nav>
	);
};
