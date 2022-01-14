import Link from "next/link";

const Navbar = ({ activePage }) => {
	return (
		<nav className="bg-gray-300">
			<Link href="/">
				<a className="flex items-center py-4 px-8 text-gray-800 font-bold text-xl">
					Home
				</a>
			</Link>
		</nav>
	);
};

export default Navbar;
