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
		<main
			className={`${
				isNavOpen ? "w-full bg-primary fixed" : "w-full bg-primary"
			}`}
		>
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

			<div
				className={`fixed overflow-auto top-0  z-20 bg-primary w-full h-full p-6 transition-all ease-in-out duration-300 ${
					isCVOpen ? "left-0 h-full w-full" : "-left-full h-0 w-0"
				}`}
			>
				<div className="flex justify-between items-center">
					<h2 className="text-secondary py-3">Resume</h2>
					<FontAwesomeIcon
						icon={faCircleXmark}
						className="text-white text-4xl cursor-pointer"
						onClick={(e) => setIsCVOpen(false)}
					/>
				</div>
				<div className="flex flex-col justify-evenly space-y-3 pb-3">
					<p>Born: 1991</p>
					<p>Height: 6&apos; 0&quot;</p>
					<p>Eye Color: Brown</p>
					<p>Hair Color: Dark Red</p>
					<div>
						<a
							className="text-white w-auto hover:text-secondary underline underline-offset-2"
							href="#"
						>
							<FontAwesomeIcon
								icon={faFileLines}
								className="pr-2"
							/>
							Download Resume
						</a>
					</div>
				</div>
				<hr />
				<div className="skills">
					<h3 className="text-secondary py-3">Special Skills</h3>
					<div className="flex flex-col justify-evenly space-y-3">
						<p>Physical Comedy</p>
						<p>Singing</p>
						<p>Swimming</p>
						<p>Football</p>
					</div>
				</div>
				<div className="skills">
					<h3>Theater</h3>
					<div>
						<p>2023, Play / Director / Theater / Role</p>
						<p>2023, Play / Director / Theater / Role</p>
					</div>
				</div>
				<div className="skills">
					<h3>Film</h3>
					<div>
						<p>2023, Title / Director / Role</p>
						<p>2023, Title / Director / Role</p>
						<p>2023, Title / Director / Role</p>
					</div>
				</div>
				<div className="skills">
					<h3>Education & Training</h3>
					<div>
						<p>Institution / Workshop Name / Instructor</p>
						<p>Institution / Workshop Name / Instructor</p>
						<p>Institution / Workshop Name / Instructor</p>
					</div>
				</div>
				<div className="skills">
					<h3>TV</h3>
					<div>
						<p>2023, Title / Director / Production House / Role</p>
						<p>2023, Title / Director / Production House / Role</p>
					</div>
				</div>
				<div className="skills">
					<h3>Awards</h3>
					<div>
						<p>2023 / Description</p>
						<p>2023 / Description</p>
						<p>2023 / Description</p>
					</div>
				</div>
			</div>

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
			<div className="w-full h-[600px] flex flex-col items-center justify-center bg-slate-400 py-4">
				<h1 className="text-center">Image Placeholder</h1>
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
