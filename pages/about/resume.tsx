import { useState } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Navbar/Nav";
import TitleBar from "../../components/Navbar/TitleBar";
import ResumeTable from "../../components/ResumeTable";
import SocialBar from "../../components/SocialBar";

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

			{/* Resume */}
			<div className="py-6 md:p-0">
				<h1 className="text-center text-secondary">Resumé</h1>

				<ResumeTable />
			</div>
		</main>
	);
};

export default Resume;
