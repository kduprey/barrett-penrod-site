"use client";

import { motion, useAnimation } from "framer-motion";
import NextLink from "next/link";
import { useState } from "react";
import { Link } from "react-scroll";
import type { NavMenu } from "../../types/types";

interface MobileSubmenuProps {
	menu: NavMenu;
	setIsNavOpen: (isOpen: boolean) => void;
	isNavOpen: boolean;
}

export const MobileSubmenu = ({
	menu,
	setIsNavOpen,
}: MobileSubmenuProps): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);
	const controls = useAnimation();

	if (menu.sublinks) {
		return (
			<>
				<button
					aria-expanded={isOpen}
					aria-haspopup="true"
					aria-label="Open Submenu"
					className="relative cursor-pointer py-2 text-xl font-thin text-white"
					onClick={async () => {
						if (!isOpen)
							await controls.start({
								display: "flex",
								visibility: "visible",
								height: "auto",
								opacity: 1,
								transition: {
									duration: 0.5,
									ease: "easeInOut",
								},
							});

						if (isOpen)
							await controls.start({
								x: "0%",
								opacity: 0,
								height: 0,
								transition: {
									duration: 0.5,
									ease: "easeInOut",
								},
								transitionEnd: {
									display: "none",
									visibility: "hidden",
								},
							});

						setIsOpen(!isOpen);
					}}
					onKeyDown={async (e) => {
						if (e.key === "Enter") {
							if (!isOpen)
								await controls.start({
									display: "flex",
									visibility: "visible",
									height: "auto",
									opacity: 1,
									transition: {
										duration: 0.5,
										ease: "easeInOut",
									},
								});

							if (isOpen)
								await controls.start({
									x: "0%",
									opacity: 0,
									height: 0,
									transition: {
										duration: 0.5,
										ease: "easeInOut",
									},
									transitionEnd: {
										display: "none",
										visibility: "hidden",
									},
								});

							setIsOpen(!isOpen);
						}
					}}
					type="button"
				>
					{menu.name}
				</button>
				<motion.div
					animate={controls}
					className="flex flex-col "
					initial={{
						visibility: "hidden",
						opacity: 0,
						height: 0,
						display: "none",
					}}
					layout
				>
					{menu.sublinks.map((sublink) => {
						if (sublink.scrollTo) {
							return (
								<Link
									className="cursor-pointer pb-3 text-xl font-thin text-white hover:text-slate-300"
									duration={500}
									key={sublink.id}
									offset={-75}
									onClick={() => {
										setIsNavOpen(false);
										// TODO: Implement Analytics
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
								className="pb-3 text-xl font-thin text-white hover:text-slate-300"
								href={sublink.path}
								key={sublink.name}
							>
								{sublink.name}
							</NextLink>
						);
					})}
				</motion.div>
			</>
		);
	}

	if (!menu.path?.includes("#") && menu.path) {
		return (
			<NextLink
				className="cursor-pointer pb-3 text-xl font-thin text-white underline-offset-2 hover:text-slate-300 hover:underline"
				href={menu.path}
				// TODO: Implement Analytics
			>
				{menu.name}
			</NextLink>
		);
	}

	return (
		<Link
			as="a"
			className="cursor-pointer pb-3 text-xl font-thin text-white hover:text-slate-300"
			duration={500}
			offset={-75}
			onClick={() => {
				setIsNavOpen(false);
			}}
			smooth
			spy
			to={menu.name.toLowerCase()}
		>
			{menu.name}
		</Link>
	);
};
