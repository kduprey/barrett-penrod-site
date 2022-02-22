import { Menu } from "@headlessui/react";
import Link from "next/link";
import { NavMenu } from "../../types";

type Props = {
	menu: NavMenu;
};

const NavMenuItem = ({ menu }: Props) => {
	if (menu.sublinks)
		return (
			<Menu>
				<Menu.Button>{menu.name}</Menu.Button>
				<Menu.Items>
					{menu.sublinks.map((e, i) => (
						<Menu.Item key={i}>
							<p>{e.name}</p>
						</Menu.Item>
					))}
				</Menu.Items>
			</Menu>
		);
	if (menu.path)
		return (
			<Link href={menu.path} passHref>
				<p>{menu.name}</p>
			</Link>
		);
	return <p>{menu.name}</p>;
};

export default NavMenuItem;
