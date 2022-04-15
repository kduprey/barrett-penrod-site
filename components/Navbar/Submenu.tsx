import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavMenu } from "../../types";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import { Link } from "react-scroll";

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
					{menu.sublinks?.map((sublink, index) => {
						if (sublink.scrollTo) {
							return (
								<Link
									key={index}
									className="cursor-pointer text-secondary underline-offset-2 hover:text-white hover:underline"
									onClick={() => {
										setIsOpen(false);
									}}
									to={sublink.id}
									spy={true}
									smooth={true}
									offset={-100}
									duration={500}
								>
									{sublink.name}
								</Link>
							);
						}

						return (
							<NextLink key={index} href={sublink.path}>
								<a className="cursor-pointer text-secondary underline-offset-2 hover:text-white hover:underline">
									{sublink.name}
								</a>
							</NextLink>
						);
					})}
				</ul>
			</li>
		);
	}

	return (
		<Link
			as="a"
			className="cursor-pointer pb-3 text-xl font-thin text-white hover:text-slate-300"
			onClick={() => {
				setIsOpen(false);
			}}
			to={
				menu.name.toLowerCase() === "home"
					? "home"
					: menu.name.toLowerCase()
			}
			spy={true}
			smooth={true}
			offset={-120}
			duration={500}
		>
			{menu.name}
		</Link>
	);
};

export default Submenu;
