import { menus } from "../../data/navigation";
import { MobileSubmenu } from "./MobileSubmenu";
import { Submenu } from "./Submenu";

interface NavProps {
	isNavOpen: boolean;
	setIsNavOpen: (isNavOpen: boolean) => void;
}

export const Nav = ({ isNavOpen, setIsNavOpen }: NavProps): JSX.Element => (
	<>
		<nav
			className={`fixed z-50 bg-primary transition-all duration-300 ease-in-out md:hidden ${
				isNavOpen ? "left-0 h-full w-full pt-32" : "-left-full h-0 w-0"
			}`}
		>
			<ul className=" flex flex-col items-center justify-center space-y-4 pt-10">
				{menus.map((menu) => (
					<MobileSubmenu
						isNavOpen={isNavOpen}
						key={menu.name}
						menu={menu}
						setIsNavOpen={setIsNavOpen}
					/>
				))}
			</ul>
		</nav>
		{/* Medium */}
		<nav
			className="hidden w-full bg-primary py-3 px-8 md:sticky md:top-14 md:z-50 md:block"
			data-cy="navbar"
		>
			<ul className="flex space-x-5 ">
				{menus.map((menu) => (
					<Submenu key={menu.name} menu={menu} />
				))}
			</ul>
		</nav>
	</>
);
