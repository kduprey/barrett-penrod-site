const content = [
	{
		title: "My Fortune is My Face: Fade Out - Fade In",
		link: "https://www.youtube-nocookie.com/embed/XEJW_xoeMQY",
	},
	{
		title: "Lonely House - Street Scene",
		link: "https://www.youtube-nocookie.com/embed/62kaB4j8uQ8",
	},
	{
		title: "Make You Feel My Love",
		link: "https://www.youtube-nocookie.com/embed/IFD5_IHgXz8",
	},
	{
		title: "Cover Me, NYU - Hello (Adele) Country Rock",
		link: "https://www.youtube-nocookie.com/embed/F1-LEy1_lTY",
	},
];

const Video = ({
	title,
	link,
}: {
	title: string;
	link: string;
}): JSX.Element => (
	<div>
		<iframe
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			className="h-[400px] w-full md:h-[315px] md:w-[560px]"
			loading="lazy"
			src={link}
			title="YouTube video player"
		/>
		<p className="py-2 text-center text-primary">{title}</p>
	</div>
);

export const Showreel = (): JSX.Element => (
	<div
		className="flex flex-col items-center justify-center space-y-4 bg-slate-100 py-6 md:justify-evenly"
		data-cy="showreel"
		id="video-sound-demo"
	>
		<h2 className="text-primary">Video & Sound Demo</h2>
		<div className="w-5/6 grid-cols-2 gap-3 space-y-4 md:grid md:w-auto md:space-y-0">
			{content.map((item) => (
				<Video key={item.link} link={item.link} title={item.title} />
			))}
		</div>
	</div>
);
