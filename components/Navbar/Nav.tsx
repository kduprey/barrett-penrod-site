type Props = {
	isNavOpen: boolean;
	isCVOpen: boolean;
	setIsCVOpen: (isCVOpen: boolean) => void;
	setIsNavOpen: (isNavOpen: boolean) => void;
};

const Nav = ({ isNavOpen, isCVOpen, setIsCVOpen, setIsNavOpen }: Props) => {
	return (
		<nav
			className={`fixed bg-primary transition-all ease-in-out duration-300 ${
				isNavOpen ? "w-full h-full left-0" : "w-0 h-0 -left-full"
			}`}
		>
			<ul className=" pt-10 flex flex-col space-y-4 justify-center items-center">
				<li
					onClick={(e) => {
						setIsNavOpen(!isNavOpen);
						setTimeout(() => setIsCVOpen(!isCVOpen), 300);
					}}
					className="cursor-pointer"
				>
					Bio
				</li>
				<div className="border-b-2 w-1/2"></div>
				<li>Video</li>
				<div className="border-b-2 w-1/2"></div>
				<li>Photos</li>
				<div className="border-b-2 w-1/2"></div>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default Nav;
