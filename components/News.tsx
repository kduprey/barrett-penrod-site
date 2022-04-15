import Image from "next/image";
import recitalflyer from "/public/recitalflyer.png";

type Props = {};

const News = (props: Props) => {
	return (
		<div className="pt-3" id="news">
			<h1 className="text-center text-secondary">News</h1>

			<div className="p-6 text-white">
				<div className="flex flex-col items-center justify-center space-y-3 p-4 ">
					<h3 className="font-normal">
						In Performance - April 18, 2022
					</h3>
					<p>
						NYU Class of 2022 Professional Showcase
						<br />
						Where - New World Stages
						<br />
						When - 3:30pm & 6:30pm EST
						<br />
						RSVP - Please contact Jen Bender at{" "}
						<a
							className="text-secondary underline underline-offset-2"
							href="mailto:jnb9579@nyu.edu"
						>
							jnb9579@nyu.edu
						</a>
					</p>
				</div>

				<div className="flex flex-col items-center justify-center p-4">
					<h3 className="font-normal text-white">
						In Performance - April 30, 2022
					</h3>
					<div className="py-3 md:w-4/6">
						<Image
							src={recitalflyer}
							alt="Recital flyer"
							loading="lazy"
							placeholder="blur"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default News;
