import About from "../components/About";
import Headline from "../components/Headline";
import Photos from "../components/Photos";
import Showreel from "../components/Showreel";

import Image from "next/image";
import Headshot from "../components/Headshot";
import Layout from "../components/Layout";
import News from "../components/News";
import ResumeTable from "../components/ResumeTable";
import * as gtag from "../lib/analytics";
import headshot1 from "../public/headshot1.jpg";
import headshot2 from "../public/headshot2.jpg";
import headshot3 from "../public/headshot3.jpg";
import headshot4 from "../public/headshot4.jpg";
import headshot5 from "../public/headshot5.jpg";
import headshot6 from "../public/headshot6.jpg";
import { NextPageWithLayout } from "../types";

const headshots = [
	headshot1,
	headshot2,
	headshot3,
	headshot4,
	headshot5,
	headshot6,
];

const Page: NextPageWithLayout = () => {
	return (
		<section id="home">
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

			<div
				className="flex flex-col items-center justify-center space-y-3 pb-4"
				id="headshots"
			>
				<h2 className="py-6 text-secondary">Headshots</h2>

				<div className="grid w-5/6 grid-cols-3 gap-4 md:w-2/3">
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
					className="bg-secondary px-4 py-2 text-slate-800 hover:bg-slate-300 hover:no-underline"
					onClick={() => {
						gtag.event({
							action: "download",
							category: "headshots",
							label: "Barrett Penrod - Headshots",
							value: 1,
						});
					}}
				>
					Download Headshots
				</a>
			</div>

			<div className="flex justify-center p-3">
				<hr className="h-1 w-3/4" />
			</div>

			{/* Resume */}
			<div className="py-6 md:p-0" id="resume">
				<h1 className="text-center text-secondary">Resumé</h1>

				<ResumeTable />

				<div className="flex justify-center pb-6">
					<a
						href="https://files.kduprey.com/barrettpenrod/Barrett_Penrod_Resume.pdf"
						className="bg-secondary px-4 py-2 text-slate-800 hover:bg-slate-300 hover:no-underline"
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

			<div className="flex justify-center bg-slate-100 p-3">
				<hr className="h-1 w-3/4 bg-slate-300" />
			</div>

			{/* Photos */}

			<Photos />

			{/* News */}

			<News />
		</section>
	);
};
export default Page;

Page.getLayout = (page) => <Layout>{page}</Layout>;
