import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Navbar/Nav";
import TitleBar from "../components/Navbar/TitleBar";
import SocialBar from "../components/SocialBar";

type Props = {
	title?: string;
	description?: string;
	children: React.ReactNode;
};

const Layout = (props: Props) => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isCVOpen, setIsCVOpen] = useState(false);

	return (
		<main
			className={`${
				isNavOpen || isCVOpen ? "" : ""
			} flex min-h-screen flex-col bg-primary`}
		>
			<Header
				title={
					props.title ||
					"Barrett Penrod · Actor, Singer, Voice Instructor, and Director"
				}
				description={
					props.description ||
					"Barrett Penrod is an actor, singer working professionally in the NYC area; voice instructor and singing voice specialist available for immediate booking."
				}
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

			<SocialBar />
			{props.children}
			<Footer />
		</main>
	);
};

export default Layout;
