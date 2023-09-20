import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Link } from "react-scroll";
import * as gtag from "../../lib/analytics";
import type { NavMenu } from "../../types/types";

interface SubmenuProps {
	menu: NavMenu;
}

export const Submenu = ({ menu }: SubmenuProps): JSX.Element => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	if (menu.sublinks) {
		return (
			<li
				className="cursor-pointer px-2"
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						setIsOpen(!isOpen);
					}
				}}
				role="menuitem"
			>
				{menu.name}

				<FontAwesomeIcon
					className={`ml-2 transition-all duration-150 ${
						isOpen ? "rotate-180" : "rotate-0"
					}`}
					icon={faChevronDown}
				/>

				<ul
					className={`medium-submenu flex flex-col transition-all duration-300 ease-in-out ${
						isOpen
							? "top-full h-auto w-auto opacity-100"
							: "-top-60 w-0 opacity-0"
					} `}
				>
					{menu.sublinks.map((sublink) => {
						if (sublink.scrollTo) {
							return (
								<Link
									className="cursor-pointer text-secondary underline-offset-2 hover:text-white hover:underline"
									duration={500}
									key={sublink.id}
									offset={-100}
									onClick={() => {
										setIsOpen(false);
										gtag.pageview(
											new URL(window.location.href + router.route + sublink.id)
										);
									}}
									smooth
									spy
									to={sublink.id}
								>
									{sublink.name}
								</Link>
							);
						}

						return (
							<NextLink
								className="cursor-pointer text-secondary underline-offset-2 hover:text-white hover:underline"
								href={sublink.path}
								key={sublink.name}
								onClick={() => {
									gtag.pageview(
										new URL(window.location.href + router.route + menu.path)
									);
								}}
							>
								{sublink.name}
							</NextLink>
						);
					})}
				</ul>
			</li>
		);
	}
	if (!menu.path?.includes("#") && menu.path) {
		return (
			<NextLink
				className="cursor-pointer pb-3 text-xl font-thin text-white underline-offset-2 hover:text-slate-300 hover:underline"
				href={menu.path}
				onClick={() => {
					gtag.pageview(
						new URL(window.location.href + router.route + menu.path)
					);
				}}
			>
				{menu.name}
			</NextLink>
		);
	}
	return (
		<Link
			className="cursor-pointer pb-3 text-xl font-thin text-white hover:text-slate-300"
			duration={500}
			offset={-120}
			onClick={() => {
				setIsOpen(false);
				gtag.pageview(new URL(window.location.href + router.route + menu.path));
			}}
			smooth
			spy
			to={menu.name.toLowerCase() === "home" ? "home" : menu.name.toLowerCase()}
		>
			{menu.name}
		</Link>
	);
};
