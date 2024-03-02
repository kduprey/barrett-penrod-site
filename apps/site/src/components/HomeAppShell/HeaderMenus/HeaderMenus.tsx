import {
	MenuItem,
	Menu,
	MenuTarget,
	Center,
	MenuDropdown,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import classes from "./HeaderMenus.module.css";
import { headerMenus } from "@/src/data";

export const HeaderMenus = () =>
	headerMenus.map((link) => {
		const menuItems = link.links?.map((item) => (
			<MenuItem key={item.link}>{item.label}</MenuItem>
		));

		if (menuItems) {
			return (
				<Menu
					key={link.label}
					transitionProps={{
						exitDuration: 0,
					}}
					trigger="hover"
					withinPortal
				>
					<MenuTarget>
						<Center className={classes.link} component={Link} href={link.link}>
							<span className={classes.linkLabel}>{link.label}</span>
							<IconChevronDown size="0.9rem" stroke={1.5} />
						</Center>
					</MenuTarget>
					<MenuDropdown>{menuItems}</MenuDropdown>
				</Menu>
			);
		}

		return (
			<Center
				className={classes.link}
				component={Link}
				href={link.link}
				key={link.label}
			>
				<span>{link.label}</span>
			</Center>
		);
	});
