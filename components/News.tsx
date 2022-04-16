import Image from "next/image";
import recitalflyer from "/public/recitalflyer.png";

type Props = {};

const News = (props: Props) => {
	return (
		<div className="pt-3" id="news">
			<h1 className="text-center text-secondary">News</h1>

			<div className="p-6 text-white">
				<div className="flex flex-col items-center justify-center space-y-3 bg-[#57068c] p-4">
					<h3 className="font-normal">
						In Performance - April 18, 2022
					</h3>
					<p>
						<div>NYU Class of 2022 Professional Showcase</div>
						<div className="flex space-x-2">
							<div>Where -</div>
							<a
								className="text-white underline underline-offset-2 hover:text-slate-300"
								href="https://goo.gl/maps/9VZCULgcTspi2KFq8"
							>
								New World Stages <br />
								340 W 50th Street,
								<br />
								New York, NY <br />
								10019
							</a>
						</div>
						<div>When - 3:30pm & 6:30pm EST</div>
						<div>
							RSVP - Please contact Jen Bender at{" "}
							<a
								className="text-secondary underline underline-offset-2"
								href="mailto:jnb9579@nyu.edu"
							>
								jnb9579@nyu.edu
							</a>
						</div>
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
