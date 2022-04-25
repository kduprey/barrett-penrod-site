import Image from "next/image";
import recitalflyer from "/public/recitalflyer.png";

type Props = {};

const News = (props: Props) => {
	return (
		<div className="pt-3" id="news">
			<h1 className="text-center text-secondary">News</h1>

			<div className="p-6 text-white">
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
