import { Button, Divider, Menu, Text, Group } from "@mantine/core";
import Link from "next/link";
import { NavMenu } from "../../types";
import { ChevronDownIcon } from "@modulz/radix-icons";

type Props = {
	menu: NavMenu;
};

const NavMenuItem = ({ menu }: Props) => {
	if (menu.sublinks)
		return (
			<Menu
				trigger="hover"
				placement="center"
				size={"sm"}
				control={
					<Group spacing={3}>
						<Text>{menu.name}</Text>
						<ChevronDownIcon />
					</Group>
				}
			>
				{menu.sublinks.map((e, i) => (
					<Menu.Item key={i}>
						<Text>{e.name}</Text>
					</Menu.Item>
				))}
			</Menu>
		);
	if (menu.path)
		return (
			<Link href={menu.path} passHref>
				<Text
					component="a"
					styles={(theme) => ({
						root: {
							"&:hover": {
								textDecoration: "underline",
							},
						},
					})}
				>
					{menu.name}
				</Text>
			</Link>
		);
	return <Text>{menu.name}</Text>;
};

export default NavMenuItem;
