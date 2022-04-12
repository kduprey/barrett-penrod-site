import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavMenu } from "../../types";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type Props = {
	menu: NavMenu;
};

const Submenu = ({ menu }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	if (menu.sublinks) {
		return (
			<li
				className="cursor-pointer px-2"
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
					className={`medium-submenu flex flex-col transition-all duration-300 ease-in-out ${
						isOpen
							? "top-full h-auto w-auto opacity-100"
							: "-top-60 w-0 opacity-0"
					} `}
				>
					{menu.sublinks?.map((sublink, index) => (
						<Link key={index} href={sublink.path}>
							<a className="cursor-pointer text-secondary underline-offset-2 hover:text-white hover:underline">
								{sublink.name}
							</a>
						</Link>
					))}
				</ul>
			</li>
		);
	}

	return (
		<Link href={menu.path || ""}>
			<a className="cursor-pointer text-xl font-thin text-secondary underline-offset-2 hover:text-white hover:underline ">
				{menu.name}
			</a>
		</Link>
	);
};

export default Submenu;
