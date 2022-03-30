import type { NextPage } from "next";
import Header from "../components/Header";
import { NavMenu } from "../types";
import MenuButton from "../components/Navbar/MenuButton";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faTwitter,
	faInstagram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

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

			<div className="flex flex-col py-6 space-y-4 justify-center items-center bg-slate-100">
				<h2>Showreel</h2>
				<div className="w-5/6 h-[200px] bg-slate-400 flex flex-col items-center justify-center">
					<h4>YouTube Placeholder</h4>
				</div>
			</div>

			{/* Photos */}

			<div className="flex flex-col py-6 space-y-4 justify-center items-center bg-slate-100">
				<h2>Photos</h2>
				<div className="flex flex-col space-y-6 justify-center items-center w-full">
					<div className="flex flex-col justify-center items-center w-3/5 h-[400px] bg-slate-400">
						<p>Photo 1</p>
					</div>
					<div className="flex flex-col justify-center items-center w-4/5 h-[400px] bg-slate-400">
						<p>Photo 2</p>
					</div>
					<div className="flex flex-col justify-center items-center w-3/5 h-[350px] bg-slate-400">
						<p>Photo 3</p>
					</div>
					<div className="flex flex-col justify-center items-center w-4/5 h-[200px] bg-slate-400">
						<p>Photo 4</p>
					</div>
					<div className="flex flex-col justify-center items-center w-4/6 h-[350px] bg-slate-400">
						<p>Photo 5</p>
					</div>
					<div className="flex flex-col justify-center items-center w-5/6 h-[300px] bg-slate-400">
						<p>Photo 6</p>
					</div>
				</div>
			</div>

			{/* Contact */}

			<div className="bg-primary flex flex-col justify-center items-center space-y-4 py-6">
				<h1 className="text-secondary">Contact</h1>

				<h2 className="text-white font-normal text-xl underline underline-offset-2">
					Representation
				</h2>

				<div className="flex flex-col justify-center items-center space-y-4 text-white">
					<h3>Manager</h3>
					<p>Bruce Robertson</p>
					<p>Email - info@site.com</p>
					<p>Tel - (123)456-7890</p>
				</div>
				<div className="flex flex-col justify-center items-center space-y-4 text-white">
					<h3>Commercial Agent</h3>
					<p>Magnum - Steve Macfee</p>
					<p>Email - info@site.com</p>
					<p>Tel - (123)456-7890</p>
				</div>
				<div className="flex flex-col justify-center items-center space-y-4 text-white">
					<h3>SF Agent</h3>
					<p>Pinnacle - Nathan Kelly</p>
					<p>Email - info@site.com</p>
					<p>Tel - (123)456-7890</p>
				</div>
				{/* Social Media Links */}
				<div className="flex justify-evenly items-center text-white w-4/5 pt-4">
					<FontAwesomeIcon icon={faFacebookF} />
					<FontAwesomeIcon icon={faTwitter} />
					<FontAwesomeIcon icon={faInstagram} />
					<FontAwesomeIcon icon={faYoutube} />
				</div>
			</div>
		</main>
	);
};

export default Home;
