import type { NextPage } from "next";
import Header from "../components/Header";
import Nav from "../components/Navbar/Nav";
import { useState } from "react";
import {
	faFacebookF,
	faTwitter,
	faInstagram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/Footer";
import Photos from "../components/Photos";
import Showreel from "../components/Showreel";
import About from "../components/About";
import Headline from "../components/Headline";
import SocialBar from "../components/SocialBar";
import TitleBar from "../components/Navbar/TitleBar";

import Resume from "../components/Resume";
import Image from "next/image";
import headshot1 from "../public/headshot1.jpg";
import headshot2 from "../public/headshot2.jpg";
import headshot3 from "../public/headshot3.jpg";
import headshot4 from "../public/headshot4.jpg";
import headshot5 from "../public/headshot5.jpg";
import headshot6 from "../public/headshot6.jpg";
import Headshot from "../components/Headshot";

const headshots = [
	headshot1,
	headshot2,
	headshot3,
	headshot4,
	headshot5,
	headshot6,
];

const Home: NextPage = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isCVOpen, setIsCVOpen] = useState(false);

	return (
		<main className={`${isNavOpen || isCVOpen ? "" : ""} bg-primary`}>
			<Header
				title={"Barrett Penrod · Actor, Singer, Mover"}
				// TODO: Add description
				description={""}
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
			<SocialBar
				facebook={faFacebookF}
				twitter={faTwitter}
				instagram={faInstagram}
				youtube={faYoutube}
			/>

			{/* Heading Text */}
			<Headline />

			{/* Headshot 1 */}
			<div className="flex w-full flex-col items-center justify-center bg-slate-400 py-4 md:hidden">
				<Image
					loading="lazy"
					placeholder="blur"
					src={headshot5}
					alt="Barret Penrod"
				/>
			</div>

			{/* About Section */}

			<About />

			{/* Resume/Headshots */}

			<div className="flex space-x-3 py-3">
				<div className="flex w-1/2 flex-col items-center justify-center space-y-3">
					<h3 className="text-secondary">Headshots</h3>

					{/* TODO: #4 On hover: react to hover
						TODO: #5 On click: open in modal view */}
					<div className="grid grid-cols-3 gap-2">
						{headshots.map((e, i) => {
							return (
								<Headshot
									imageProps={{ src: e }}
									alt="Barrett Penrod - Headshot"
									key={i}
								/>
							);
						})}
					</div>
					<a
						href="https://files.kduprey.com/barrettpenrod/BarrettPenrodHeadshots.zip"
						download={true}
						className="bg-secondary px-4 py-2 text-slate-800 hover:bg-slate-300 hover:no-underline"
					>
						Download Headshots
					</a>
				</div>
				<div className="flex flex-col items-center ">
					<h3 className="text-secondary">Resumé</h3>
					<Resume />
				</div>
			</div>

			{/* Showreel */}

			<Showreel />

			{/* Photos */}

			<Photos />

			{/* Footer */}

			<Footer
				facebook={faFacebookF}
				twitter={faTwitter}
				instagram={faInstagram}
				youtube={faYoutube}
			/>
		</main>
	);
};

export default Home;
