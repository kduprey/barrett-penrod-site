"use client";

import { useState } from "react";
import { Tooltip, UnstyledButton, Stack, rem } from "@mantine/core";
import {
	IconHome2,
	IconGauge,
	IconDeviceDesktopAnalytics,
	IconFingerprint,
	IconCalendarStats,
	IconUser,
	IconSettings,
	IconLogout,
} from "@tabler/icons-react";
import Link from "next/link";
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
		<Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
			<UnstyledButton
				className={classes.link}
				component={Link}
				data-active={active || undefined}
				href={href}
				onClick={onClick}
			>
				<Icon stroke={1.5} style={{ width: rem(20), height: rem(20) }} />
			</UnstyledButton>
		</Tooltip>
	);
};

const mockdata = [
	{ icon: IconHome2, label: "Home", href: "/" },
	{ icon: IconGauge, label: "Dashboard", href: "/dashboard" },
	{ icon: IconDeviceDesktopAnalytics, label: "Analytics", href: "/analytics" },
	{ icon: IconCalendarStats, label: "Releases", href: "/releases" },
	{ icon: IconUser, label: "Account", href: "/account" },
	{ icon: IconFingerprint, label: "Security", href: "/security" },
	{ icon: IconSettings, label: "Settings", href: "/settings" },
];

export const Navbar = () => {
	const [active, setActive] = useState(
		mockdata.findIndex((link) => link.href === location.pathname)
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
				<Stack gap={0} justify="center">
					{links}
				</Stack>
			</div>

			<Stack gap={0} justify="center">
				<NavbarLink href="/sign-in" icon={IconLogout} label="Logout" />
			</Stack>
		</nav>
	);
};
