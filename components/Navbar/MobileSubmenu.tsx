import { useRef, useState } from "react";
import { NavMenu } from "../../types";
import { motion, useAnimation } from "framer-motion";
import NextLink from "next/link";
import { Link } from "react-scroll";

type Props = {
	menu: NavMenu;
	setIsNavOpen: (isOpen: boolean) => void;
	isNavOpen: boolean;
};

const MobileSubmenu = ({ menu, setIsNavOpen, isNavOpen }: Props) => {
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
									as="a"
									className="cursor-pointer pb-3 text-xl font-thin text-white hover:text-slate-300"
									onClick={() => {
										setIsNavOpen(false);
									}}
									to={sublink.path}
									spy={true}
									smooth={true}
									offset={-75}
									duration={500}
								>
									{sublink.name}
								</Link>
							);
						} else
							return (
								<NextLink
									href={sublink.path}
									key={sublink.name}
								>
									<a className="pb-3 text-xl font-thin text-white hover:text-slate-300">
										{sublink.name}
									</a>
								</NextLink>
							);
					})}
				</motion.div>
			</>
		);
	}

	return <li className="py-2">{menu.name}</li>;
};

export default MobileSubmenu;
