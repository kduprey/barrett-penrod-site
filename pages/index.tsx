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
import { faFileLines, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
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

const Home: NextPage = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isCVOpen, setIsCVOpen] = useState(false);

	return (
		<main className={`${isNavOpen || isCVOpen ? "" : ""} bg-primary`}>
			<Header
				title={
					"Barrett Penrod · Actor-Singer, Educator, Director, Visual Artist"
				}
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
				<Image src={headshot5} alt="Barret Penrod" />
			</div>

			{/* About Section */}

			<About />

			{/* Resume/Headshots */}

			<div className="flex space-x-3 pt-3">
				<div className="flex w-1/2 flex-col items-center justify-center space-y-3">
					<h3 className="text-secondary">Headshots</h3>
					<div className="grid  grid-cols-3">
						<Image
							src={headshot1}
							alt="Barrett Penrod - Headshot"
						/>
						<Image
							src={headshot2}
							alt="Barrett Penrod - Headshot"
						/>
						<Image
							src={headshot3}
							alt="Barrett Penrod - Headshot"
						/>
						<Image
							src={headshot4}
							alt="Barrett Penrod - Headshot"
						/>
						<Image
							src={headshot5}
							alt="Barrett Penrod - Headshot"
						/>
						<Image
							src={headshot6}
							alt="Barrett Penrod - Headshot"
						/>
					</div>
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
