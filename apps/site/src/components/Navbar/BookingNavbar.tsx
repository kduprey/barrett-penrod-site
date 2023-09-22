"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuButton } from "../MenuButton";

export const BookingNavbar = (): JSX.Element => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<nav className="booking sticky top-0 left-0 z-[60] flex max-h-[6em] w-full items-center justify-between bg-primary p-5 shadow-lg md:justify-between md:pt-6">
			<Link href="/bookings" passHref>
				<h1 className=" w-full min-w-[8em] max-w-[10em] grow text-lg font-light text-secondary hover:text-white sm:text-xl sm:font-medium md:max-w-[12em] lg:text-2xl">
					<span>Barrett Penrod </span>
					<span>Voice Studio</span>
				</h1>
			</Link>
			<div className="ml-auto ">
				<MenuButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
			</div>

			<div className="hidden items-center justify-evenly space-x-3 text-center md:flex md:w-full">
				<Link href="/bookings/consultation">
					<p className="link">Free Consultation</p>
				</Link>
				<Link href="/bookings/individual">
					<p className="link">Individual Bookings</p>
				</Link>
				<Link href="/bookings/bundles">
					<p className="link">Lesson Packages</p>
				</Link>
			</div>
			<Link href="/">
				<p className="link hidden max-w-[9em] whitespace-pre text-right md:block">
					Back to <br /> Acting Portfolio
				</p>
			</Link>
			{/* Mobile Nav Modal */}
			<div
				className={`fixed top-[6em] z-[70] flex flex-col items-center bg-primary p-6 transition-all duration-300 ease-in-out md:hidden ${
					isNavOpen ? "left-0 h-full w-full pt-44" : "-left-full h-0 w-0"
				}`}
				// onClick={() => {
				// 	setIsNavOpen(false);
				// }}
			>
				<div className="flex flex-col items-center justify-center space-y-5">
					<Link href="/bookings/consultation">
						<p className="link text-2xl">Free Consultation</p>
					</Link>
					<Link href="/bookings/individual">
						<p className="link text-2xl">Individual Bookings</p>
					</Link>
					<Link href="/bookings/bundles">
						<p className="link text-2xl">Lesson Packages</p>
					</Link>
				</div>
				<Link href="/" passHref>
					<p className="link pt-20 text-2xl">Back to Acting Portfolio</p>
				</Link>
			</div>
		</nav>
	);
};
