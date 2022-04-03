import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavMenu } from "../../types";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

type Props = {
	menu: NavMenu;
};

const Submenu = ({ menu }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	if (menu.sublinks) {
		return (
			<li
				className="px-2"
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				{menu.name}

				<FontAwesomeIcon
					icon={faChevronDown}
					className={`ml-2 transition-all duration-150 ${
						isOpen ? "rotate-180" : "rotate-0"
					}`}
				/>

				<ul
					className={`medium-submenu transition-all duration-300 ease-in-out ${
						isOpen
							? "top-full h-auto w-auto opacity-100"
							: "-top-full w-0 opacity-0"
					} `}
				>
					{menu.sublinks?.map((sublink, index) => (
						<li
							key={index}
							className="cursor-pointer underline-offset-2 hover:underline"
						>
							{sublink.name}
						</li>
					))}
				</ul>
			</li>
		);
	}

	return <li className="hover:underline">{menu.name}</li>;
};

export default Submenu;
