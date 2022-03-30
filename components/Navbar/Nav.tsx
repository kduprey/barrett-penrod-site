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
				className={`fixed bg-primary transition-all duration-300 ease-in-out md:hidden ${
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
					<li>Video</li>
					<div className="w-1/2 border-b-2"></div>
					<li>Photos</li>
					<div className="w-1/2 border-b-2"></div>
					<li>Contact</li>
				</ul>
			</nav>
			<nav className="hidden w-full bg-primary py-3 px-8 md:sticky md:top-14 md:block">
				<ul className="flex w-1/4 space-x-5 ">
					<li
						className="cursor-pointer text-sm font-normal"
						onClick={(e) => {
							setIsCVOpen(!isCVOpen);
						}}
					>
						Bio
					</li>
					<li className="text-sm font-normal">Video</li>
					<li className="text-sm font-normal">Photos</li>
					<li className="text-sm font-normal">Contact</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
