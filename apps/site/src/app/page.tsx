import Image from "next/image";
import headshot5 from "../../public/headshot5.jpg";
import About from "../components/About";
import Headline from "../components/Headline";
import Headshots from "../components/Headshots";
import Layout from "../components/Layout";
import News from "../components/News";
import Photos from "../components/Photos";
import ResumeTable from "../components/ResumeTable";
import Showreel from "../components/Showreel";
import * as gtag from "../lib/analytics";

const Page = () => (
	<section id="home">
		{/* Heading Text */}
		<Headline />

		{/* Headshot 1 */}
		<div className="flex w-full flex-col items-center justify-center bg-slate-400 py-4 md:hidden">
			<Image
				alt="Barret Penrod"
				loading="lazy"
				placeholder="blur"
				src={headshot5}
			/>
		</div>

		{/* About Section */}

		<About />

		{/* Resume/Headshots */}

		<Headshots />

		<div className="flex justify-center p-3">
			<hr className="h-1 w-3/4" />
		</div>

		{/* Resume */}
		<div className="py-6 md:p-0" id="resume">
			<h1 className="text-center text-secondary">Resumé</h1>

			<ResumeTable />

			<div className="flex justify-center pb-6">
				<a
					className="bg-secondary px-4 py-2 text-slate-800 hover:bg-slate-300 hover:no-underline"
					data-cy="download-resume"
					href="https://files.kduprey.com/barrettpenrod/Barrett_Penrod_Resume.pdf"
					onClick={() => {
						gtag.event({
							action: "download",
							category: "resume",
							label: "Barrett Penrod - Resume",
							value: 1,
						});
					}}
				>
					Download Resume
				</a>
			</div>
		</div>

		{/* Showreel */}

		<Showreel />

		{/* Photos */}

		<Photos />

		{/* News */}

		<News />
	</section>
);

export default Page;
