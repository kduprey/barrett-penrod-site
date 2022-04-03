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
import { NavMenu } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "../components/Resume";
import Image from "next/image";
import headshot5 from "/public/headshot5.jpg";

const Home: NextPage = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isCVOpen, setIsCVOpen] = useState(false);

	const menu1: NavMenu = {
		name: "Actor - Singer",
		sublinks: [
			{
				name: "About",
				path: "/actor-singer/about",
			},
			{
				name: "Headshot/Resumé",
				path: "/actor-singer/headshot-resume",
			},
			{
				name: "Media",
				path: "/actor-singer/media",
			},
			{
				name: "News",
				path: "/actor-singer/news",
			},
		],
	};
	const menu2: NavMenu = {
		name: "Voice Studio",
		sublinks: [
			{
				name: "Philosophy",
				path: "/voice-studio/philosophy",
			},
			{
				name: "Booking",
				path: "/voice-studio/booking",
			},
			{
				name: "Research",
				path: "/voice-studio/research",
			},
		],
	};
	const menu3: NavMenu = {
		name: "Directing",
		sublinks: [
			{
				name: "In Development",
				path: "/directing/in-development",
			},
		],
	};

	const menu4: NavMenu = {
		name: "Visual Art",
		sublinks: [
			{
				name: "Gallery",
				path: "/visual-art/gallery",
			},
		],
	};

	const menu5: NavMenu = {
		name: "Contact",
		path: "/contact",
	};

	return (
		<main className={`${isNavOpen || isCVOpen ? "" : ""} bg-primary`}>
			<Header
				title={"Barrett Penrod - Actor, Singer, Director, Teacher"}
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

			{/* Resume */}

			<Resume
				isCVOpen={isCVOpen}
				setIsCVOpen={setIsCVOpen}
				fileIcon={faFileLines}
				closeIcon={faCircleXmark}
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
