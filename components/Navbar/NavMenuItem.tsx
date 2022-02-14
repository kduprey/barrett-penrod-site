import { Divider, Menu, Text } from "@mantine/core";
import { NavMenu } from "../../types";

type Props = {
	menu: NavMenu;
};

const NavMenuItem = ({ menu }: Props) => {
	return (
		<Menu trigger="hover" control={<Text>{menu.name}</Text>}>
			<Menu.Label>{menu.name}</Menu.Label>
			{menu.sublinks.map((e, i) => (
				<Menu.Item key={i}>
					<Text>{e.name}</Text>
				</Menu.Item>
			))}
		</Menu>
	);
};

export default NavMenuItem;
