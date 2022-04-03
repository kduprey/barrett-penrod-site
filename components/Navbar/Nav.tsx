import Scroll from "react-scroll";

type Props = {
	isNavOpen: boolean;
	isCVOpen: boolean;
	setIsCVOpen: (isCVOpen: boolean) => void;
	setIsNavOpen: (isNavOpen: boolean) => void;
};

const Nav = ({ isNavOpen, isCVOpen, setIsCVOpen, setIsNavOpen }: Props) => {
	return (
		<>
			<nav
				className={`fixed z-20 bg-primary transition-all duration-300 ease-in-out md:hidden ${
					isNavOpen ? "left-0 h-full w-full" : "-left-full h-0 w-0"
				}`}
			>
				<ul className=" flex flex-col items-center justify-center space-y-4 pt-10">
					<li
						onClick={(e) => {
							setIsNavOpen(!isNavOpen);
							setTimeout(() => setIsCVOpen(!isCVOpen), 300);
						}}
						className="cursor-pointer"
					>
						Bio
					</li>
					<div className="w-1/2 border-b-2"></div>
					<li
						className="cursor-pointer"
						onClick={(e) => {
							setIsNavOpen(!isNavOpen);
							setTimeout(
								() =>
									Scroll.scroller.scrollTo("showreel", {
										duration: 1000,
										smooth: true,
										offset: -75,
									}),
								300
							);
						}}
					>
						Video
					</li>
					<div className="w-1/2 border-b-2"></div>
					<li
						className="cursor-pointer"
						onClick={(e) => {
							setIsNavOpen(!isNavOpen);
							setTimeout(
								() =>
									Scroll.scroller.scrollTo("photos", {
										duration: 1000,
										smooth: true,
										offset: -75,
									}),
								300
							);
						}}
					>
						Photos
					</li>
					<div className="w-1/2 border-b-2"></div>
					<li
						className="cursor-pointer"
						onClick={(e) => {
							setIsNavOpen(!isNavOpen);
							setTimeout(
								() =>
									Scroll.scroller.scrollTo("contact", {
										duration: 1000,
										smooth: true,
										offset: -100,
									}),
								300
							);
						}}
					>
						Contact
					</li>
				</ul>
			</nav>
			<nav className="hidden w-full bg-primary py-3 px-8 md:sticky md:top-14 md:z-20 md:block">
				<ul className="flex w-1/4 space-x-5 ">
					<li
						className="cursor-pointer text-sm font-normal"
						onClick={(e) => {
							setIsCVOpen(!isCVOpen);
						}}
					>
						Bio
					</li>
					<li
						className="cursor-pointer text-sm font-normal"
						onClick={(e) => {
							Scroll.scroller.scrollTo("showreel", {
								duration: 1000,
								smooth: true,
								offset: -100,
							});
						}}
					>
						Video
					</li>
					<li
						className="cursor-pointer text-sm font-normal"
						onClick={(e) => {
							Scroll.scroller.scrollTo("photos", {
								duration: 1000,
								smooth: true,
								offset: -100,
							});
						}}
					>
						Photos
					</li>
					<li
						className="cursor-pointer text-sm font-normal"
						onClick={(e) => {
							Scroll.scroller.scrollTo("contact", {
								duration: 1000,
								smooth: true,
								offset: -100,
							});
						}}
					>
						Contact
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
