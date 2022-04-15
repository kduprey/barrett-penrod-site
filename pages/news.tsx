import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Navbar/Nav";
import TitleBar from "../components/Navbar/TitleBar";
import SocialBar from "../components/SocialBar";
import recitalflyer from "/public/recitalflyer.png";

type Props = {};

const Resume = (props: Props) => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isCVOpen, setIsCVOpen] = useState(false);

	return (
		<main className={`${isNavOpen || isCVOpen ? "" : ""} bg-primary`}>
			<Header
				title={"Resume - Barrett Penrod · Actor, Singer, Mover"}
				description={"Resume of Barrett Penrod"}
			/>
			{/* Title Bar */}
			<TitleBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

			{/* Mobile Navbar */}
			<Nav
				isNavOpen={isNavOpen}
				setIsNavOpen={setIsNavOpen}
				isCVOpen={isCVOpen}
				setIsCVOpen={setIsCVOpen}
			/>

			{/* Social Media Links */}
			<SocialBar />

			<div>
				<h1 className="text-center text-secondary">News</h1>

				<div className="p-6 text-secondary">
					<div className="flex flex-col items-center justify-center space-y-3 p-4">
						<h3>In Performance - April 18, 2022</h3>
						<p>
							NYU Class of 2022 Professional Showcase
							<br />
							Where - New World Stages
							<br />
							When - 3:30pm & 6:30pm EST
							<br />
							RSVP - Please contact Jen Bender at{" "}
							<a
								className="text-secondary underline underline-offset-2"
								href="mailto:jnb9579@nyu.edu"
							>
								jnb9579@nyu.edu
							</a>
						</p>
					</div>

					<div className="flex flex-col items-center justify-center p-4">
						<h3>In Performance - April 30, 2022</h3>
						<div className="py-3 md:w-4/6">
							<Image
								src={recitalflyer}
								alt="Recital flyer"
								loading="lazy"
								placeholder="blur"
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Resume;
