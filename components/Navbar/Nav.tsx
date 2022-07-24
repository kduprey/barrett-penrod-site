import MobileSubmenu from "./MobileSubmenu";
import Submenu from "./Submenu";
import { menus } from "../../data/navigation";

type Props = {
	isNavOpen: boolean;
	setIsNavOpen: (isNavOpen: boolean) => void;
};

const Nav = ({ isNavOpen, setIsNavOpen }: Props) => {
	return (
		<>
			<nav
				className={`fixed z-50 bg-primary transition-all duration-300 ease-in-out md:hidden ${
					isNavOpen
						? "left-0 h-full w-full pt-32"
						: "-left-full h-0 w-0"
				}`}
			>
				<ul className=" flex flex-col items-center justify-center space-y-4 pt-10">
					{menus.map((menu, index) => (
						<MobileSubmenu
							key={index}
							menu={menu}
							isNavOpen={isNavOpen}
							setIsNavOpen={setIsNavOpen}
						/>
					))}
				</ul>
			</nav>
			{/* Medium */}
			<nav className="hidden w-full bg-primary py-3 px-8 md:sticky md:top-14 md:z-50 md:block">
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
