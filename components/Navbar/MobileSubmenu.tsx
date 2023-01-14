import { motion, useAnimation } from "framer-motion";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Link } from "react-scroll";
import * as gtag from "../../lib/analytics";
import { NavMenu } from "../../types/types";

type Props = {
	menu: NavMenu;
	setIsNavOpen: (isOpen: boolean) => void;
	isNavOpen: boolean;
};

const MobileSubmenu = ({ menu, setIsNavOpen }: Props) => {
	const router = useRouter();

	const [isOpen, setIsOpen] = useState(false);
	const controls = useAnimation();

	if (menu.sublinks) {
		return (
			<>
				<div
					className="relative cursor-pointer py-2 text-xl font-thin text-white"
					onClick={(e) => {
						if (!isOpen)
							controls.start({
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
							controls.start({
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
				>
					{menu.name}
				</div>
				<motion.div
					layout
					animate={controls}
					initial={{
						visibility: "hidden",
						opacity: 0,
						height: 0,
						display: "none",
					}}
					className={`flex flex-col `}
				>
					{menu.sublinks.map((sublink) => {
						if (sublink.scrollTo) {
							return (
								<Link
									className="cursor-pointer pb-3 text-xl font-thin text-white hover:text-slate-300"
									onClick={() => {
										setIsNavOpen(false);
										gtag.pageview(
											new URL(
												window.location.href +
													router.route +
													sublink.id
											)
										);
									}}
									to={sublink.id}
									spy={true}
									smooth={true}
									offset={-75}
									duration={500}
									key={sublink.id}
								>
									{sublink.name}
								</Link>
							);
						} else
							return (
								<NextLink
									href={sublink.path}
									key={sublink.name}
									className="pb-3 text-xl font-thin text-white hover:text-slate-300"
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
				href={menu.path}
				onClick={() => {
					gtag.pageview(
						new URL(window.location.href + router.route + menu.path)
					);
				}}
				className="cursor-pointer pb-3 text-xl font-thin text-white underline-offset-2 hover:text-slate-300 hover:underline"
			>
				{menu.name}
			</NextLink>
		);
	}

	return (
		<Link
			as="a"
			className="cursor-pointer pb-3 text-xl font-thin text-white hover:text-slate-300"
			onClick={() => {
				setIsNavOpen(false);
			}}
			to={menu.name.toLowerCase()}
			spy={true}
			smooth={true}
			offset={-75}
			duration={500}
		>
			{menu.name}
		</Link>
	);
};

export default MobileSubmenu;
