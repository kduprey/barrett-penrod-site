import { NavMenu } from "../../types";

type Props = {
	menu: NavMenu;
};

const MobileSubmenu = ({ menu }: Props) => {
	if (menu.sublinks) {
		return (
			<li className="py-2">
				{menu.name}
				<ul className="absolute">
					{menu.sublinks.map((sublink) => (
						<li key={sublink.name}>{sublink.name}</li>
					))}
				</ul>
			</li>
		);
	}

	return <li>{menu.name}</li>;
};

export default MobileSubmenu;
