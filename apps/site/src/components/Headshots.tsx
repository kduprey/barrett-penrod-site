import headshot1 from "../../public/headshot1.jpg";
import headshot2 from "../../public/headshot2.jpg";
import headshot3 from "../../public/headshot3.jpg";
import headshot4 from "../../public/headshot4.jpg";
import headshot5 from "../../public/headshot5.jpg";
import headshot6 from "../../public/headshot6.jpg";
import { Headshot } from "./Headshot";

const headshots = [
	headshot1,
	headshot2,
	headshot3,
	headshot4,
	headshot5,
	headshot6,
];
// TODO: Import content into CMS

export const Headshots = (): JSX.Element => (
	<div
		className="flex flex-col items-center justify-center space-y-3 pb-4"
		data-cy="headshots"
		id="headshots"
	>
		<h2 className="text-secondary py-6">Headshots</h2>

		<div className="grid w-5/6 grid-cols-3 gap-4 md:w-2/3">
			{headshots.map((e) => (
				<Headshot
					imageProps={{
						src: e,
						alt: "Barrett Penrod - Headshot",
					}}
					key={e.blurDataURL}
				/>
			))}
		</div>
		<a
			className="bg-secondary px-4 py-2 text-slate-800 hover:bg-slate-300 hover:no-underline"
			data-cy="download-headshots"
			download
			href="https://files.kduprey.com/barrettpenrod/BarrettPenrodHeadshots.zip"
			// TODO: Add analytics
		>
			Download Headshots
		</a>
	</div>
);
