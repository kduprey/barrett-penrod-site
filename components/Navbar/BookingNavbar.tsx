import Link from "next/link";
import { useState } from "react";
import MenuButton from "../MenuButton";

type Props = {};

const BookingNavbar = (props: Props) => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
			<div className="sticky top-0 z-[60] flex items-center justify-between bg-primary px-8 py-4 shadow-lg md:flex-row md:justify-between md:pt-6">
				<Link href={"/bookings"} passHref>
					<h1 className="cursor-pointer text-xl font-light text-secondary hover:text-white sm:text-2xl md:font-medium">
						Barrett Penrod <br className="md:hidden" /> Voice Studio
					</h1>
				</Link>

				<MenuButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

				<div className=" hidden w-full items-center justify-evenly md:flex md:w-auto md:grow">
					<Link href={"/bookings/consultation"}>
						<p className="withTransition cursor-pointer opacity-90 hover:text-white hover:underline hover:opacity-100">
							Free Consultation
						</p>
					</Link>
					<Link href={"/bookings/individual"}>
						<p className="withTransition cursor-pointer opacity-90 hover:text-white hover:underline hover:opacity-100">
							Individual Bookings
						</p>
					</Link>
					<Link href={"/bookings/bundles"}>
						<p className="withTransition cursor-pointer opacity-90 hover:text-white hover:underline hover:opacity-100">
							Lesson Packages
						</p>
					</Link>
				</div>
				<Link href={"/"} passHref>
					<p className="withTransition hidden cursor-pointer opacity-90  hover:text-white hover:underline hover:opacity-100 md:block">
						Back to Acting Portfolio
					</p>
				</Link>
			</div>
			<div
				className={`fixed top-0 z-20 flex flex-col items-center bg-primary p-6 transition-all duration-300 ease-in-out md:hidden  ${
					isNavOpen
						? "left-0 h-full w-full pt-44"
						: "-left-full h-0 w-0"
				}`}
				onClick={() => setIsNavOpen(false)}
			>
				<div className="flex flex-col items-center justify-center space-y-3">
					<Link href={"/bookings/consultation"}>
						<p className="withTransition cursor-pointer text-lg opacity-90 hover:text-white hover:underline hover:opacity-100">
							Free Consultation
						</p>
					</Link>
					<Link href={"/bookings/individual"}>
						<p className="withTransition cursor-pointer text-lg opacity-90 hover:text-white hover:underline hover:opacity-100">
							Individual Bookings
						</p>
					</Link>
					<Link href={"/bookings/bundles"}>
						<p className="withTransition cursor-pointer text-lg opacity-90 hover:text-white hover:underline hover:opacity-100">
							Lesson Packages
						</p>
					</Link>
				</div>
				<Link href={"/"} passHref>
					<p className="withTransition cursor-pointer pt-20 opacity-90  hover:text-white hover:underline hover:opacity-100">
						Back to Acting Portfolio
					</p>
				</Link>
			</div>
		</>
	);
};

export default BookingNavbar;
