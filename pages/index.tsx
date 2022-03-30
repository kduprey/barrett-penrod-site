import type { NextPage } from "next";
import Header from "../components/Header";
import { NavMenu } from "../types";
import MenuButton from "../components/Navbar/MenuButton";
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

const Home: NextPage = () => {
	const [isOpen, setIsOpen] = useState(false);

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
		<main className="w-full bg-primary">
			<Header
				title={"Barrett Penrod - Actor, Singer, Director, Teacher"}
				// TODO: Add description
				description={""}
			/>
			{/* Title Bar */}
			<div className="sticky top-0 bg-primary flex justify-between items-center px-6">
				<h2 className="text-secondary font-light">Barrett Penrod</h2>
				<MenuButton isOpen={isOpen} setOpen={setIsOpen} />
			</div>

			{/* Mobile Navbar */}
			<nav
				className={`fixed h-screen bg-primary transition-all ease-in-out duration-300 ${
					isOpen ? "w-full h-screen left-0" : "w-0 h-0 -left-full"
				}`}
			>
				<ul className=" pt-10 flex flex-col space-y-4 justify-center items-center">
					<li className="">Bio</li>
					<div className="border-b-2 w-1/2"></div>
					<li>Video</li>
					<div className="border-b-2 w-1/2"></div>
					<li>Photos</li>
					<div className="border-b-2 w-1/2"></div>
					<li>Contact</li>
				</ul>
			</nav>

			{/* Social Media Links */}
			<div className="flex justify-evenly items-center bg-secondary p-2 text-black mx-6">
				<FontAwesomeIcon icon={faFacebookF} />
				<FontAwesomeIcon icon={faTwitter} />
				<FontAwesomeIcon icon={faInstagram} />
				<FontAwesomeIcon icon={faYoutube} />
			</div>

			{/* Heading Text */}
			<div className="flex flex-col justify-center space-y-4 py-4 px-6">
				<h2 className="text-secondary font-normal">Hey, I&apos;m</h2>
				<h1 className="text-white font-extrabold text-6xl ">
					Barrett Penrod
				</h1>
				<p className="tracking-widest">Actor / Performer / Model</p>
			</div>

			{/* Headshot 1 */}
			<div className="w-full h-[600px] flex flex-col items-center justify-center bg-slate-400 py-4">
				<h1 className="text-center">Image Placeholder</h1>
			</div>

			{/* About Section */}

			<div className="bg-slate-200 py-6 px-8 flex flex-col justify-center items-center space-y-4">
				<h2 className="text-primary text-center">About Me</h2>
				<p className="text-slate-800">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Necessitatibus culpa dolor voluptatibus quam libero, amet
					explicabo odit eius veniam dolore repudiandae maiores
					adipisci voluptatem. Iste veniam animi doloremque quod
					sequi?
					<br />
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
					laboriosam tempora ipsam fuga aliquam iure doloremque quis,
					temporibus error deserunt tenetur, quibusdam libero enim,
					velit eum unde vitae optio. Sed.
				</p>
				<button className="text-primary bg-secondary py-2 px-6">
					View Full Resume
				</button>
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
