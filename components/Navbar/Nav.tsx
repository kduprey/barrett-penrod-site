import Scroll from "react-scroll";
import { NavMenu } from "../../types";
import MobileSubmenu from "./MobileSubmenu";
import Submenu from "./Submenu";

type Props = {
	isNavOpen: boolean;
	isCVOpen: boolean;
	setIsCVOpen: (isCVOpen: boolean) => void;
	setIsNavOpen: (isNavOpen: boolean) => void;
};

const menu1: NavMenu = {
	name: "Actor - Singer",
	sublinks: [
		{
			name: "About",
			path: "/actor-singer/about",
		},
		{
			name: "Headshot/Resumé",
			path: "/actor-singer/headshot-resume",
		},
		{
			name: "Media",
			path: "/actor-singer/media",
		},
		{
			name: "News",
			path: "/actor-singer/news",
		},
	],
};
const menu2: NavMenu = {
	name: "Voice Studio",
	sublinks: [
		{
			name: "Philosophy",
			path: "/voice-studio/philosophy",
		},
		{
			name: "Booking",
			path: "/voice-studio/booking",
		},
		{
			name: "Research",
			path: "/voice-studio/research",
		},
	],
};
const menu3: NavMenu = {
	name: "Directing",
	sublinks: [
		{
			name: "In Development",
			path: "/directing/in-development",
		},
	],
};

const menu4: NavMenu = {
	name: "Visual Art",
	sublinks: [
		{
			name: "Gallery",
			path: "/visual-art/gallery",
		},
	],
};

const menu5: NavMenu = {
	name: "Contact",
	path: "/contact",
};

const menus = [menu1, menu2, menu3, menu4, menu5];

const Nav = ({ isNavOpen, isCVOpen, setIsCVOpen, setIsNavOpen }: Props) => {
	return (
		<>
			<nav
				className={`fixed z-20 bg-primary transition-all duration-300 ease-in-out md:hidden ${
					isNavOpen ? "left-0 h-full w-full" : "-left-full h-0 w-0"
				}`}
			>
				<ul className=" flex flex-col items-center justify-center space-y-4 pt-10">
					{menus.map((menu, index) => (
						<MobileSubmenu key={index} menu={menu} />
					))}
				</ul>
			</nav>
			{/* Medium */}
			<nav className="hidden w-full bg-primary py-3 px-8 md:sticky md:top-14 md:z-20 md:block">
				<ul className="flex space-x-5 ">
					{menus.map((menu) => (
						<Submenu key={menu.name} menu={menu} />
					))}
				</ul>
			</nav>
		</>
	);
};

export default Nav;
