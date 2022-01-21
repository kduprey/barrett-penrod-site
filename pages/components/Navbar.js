import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Navbar = ({ activePage }) => {
	const [isOpen, setIsOpen] = useState(false);

	const navToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="p-4 my-3 bg-primary-300 max-w-4xl mx-auto self-center rounded-lg shadow-lg">
			<div className="flex space-x-1 md:space-x-7">
				{/* Logo */}
				<div>
					<h1
						className="text-4xl font-semibold text-primary-800"
						style={{ lineHeight: "3rem" }}
					>
						Barrett Penrod
					</h1>
					<p className="text-primary-600">
						Actor - Singer - Teacher - Director
					</p>
				</div>

				{/* Primary nav links */}
				<div className="hidden md:flex items-center space-x-4">
					<Link href="/">
						<a className={activePage == "Home" ? "active" : ""}>
							Home
						</a>
					</Link>
					<Link href="/">
						<a className={activePage == "About" ? "active" : ""}>
							About
						</a>
					</Link>
					<Link href="/">
						<a className={activePage == "Media" ? "active" : ""}>
							Media
						</a>
					</Link>
					<Link href="/">
						<a className={activePage == "Study" ? "active" : ""}>
							Study with Barrett
						</a>
					</Link>
					<Link href="/">
						<a className={activePage == "News" ? "active" : ""}>
							News
						</a>
					</Link>
				</div>
				{/* Mobile Menu button */}
				<div className="md:hidden">
					<MenuIcon
						width={50}
						stroke="2"
						className="text-primary-500"
						onClick={navToggle}
					/>
				</div>
			</div>
			{/* Mobile Menu */}
			<div
				className={`${
					isOpen ? "" : "hidden"
				} pt-2 flex flex-col space-y-3 items-center transition ease-in`}
			>
				<Link href="/">
					<a className={activePage == "Home" ? "active" : ""}>Home</a>
				</Link>
				<Link href="/">
					<a className={activePage == "About" ? "active" : ""}>
						About
					</a>
				</Link>
				<Link href="/">
					<a className={activePage == "Media" ? "active" : ""}>
						Media
					</a>
				</Link>
				<Link href="/">
					<a className={activePage == "Study" ? "active" : ""}>
						Study with Barrett
					</a>
				</Link>
				<Link href="/">
					<a className={activePage == "News" ? "active" : ""}>News</a>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
