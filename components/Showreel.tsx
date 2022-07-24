type Props = {
	// ...
};

const Showreel = (props: Props) => {
	return (
		<div
			id="video-sound-demo"
			className="flex flex-col items-center justify-center space-y-4 bg-slate-100 py-6 md:justify-evenly"
		>
			<h2>Video/Sound Demo</h2>
			<div className="w-5/6 grid-cols-2 gap-3 space-y-4 md:grid md:w-auto md:space-y-0">
				<div>
					<iframe
						className="h-[400px] w-full md:h-[315px] md:w-[560px]"
						src="https://www.youtube-nocookie.com/embed/7iekqhAo4O0"
						title="YouTube video player"
						frameBorder={0}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						loading="lazy"
					></iframe>
					<p className="py-2 text-center text-primary">
						Self Tape - There But For You Go I - Self Tape
					</p>
				</div>
				<div>
					<iframe
						className="h-[400px] w-full md:h-[315px] md:w-[560px]"
						src="https://www.youtube-nocookie.com/embed/F1-LEy1_lTY"
						title="YouTube video player"
						frameBorder={0}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						loading="lazy"
					></iframe>
					<p className="py-2 text-center text-primary">
						Cover Me, NYU - Hello (Adele) Country Rock
					</p>
				</div>
				<div>
					<iframe
						className="h-[400px] w-full md:h-[315px] md:w-[560px]"
						src="https://www.youtube-nocookie.com/embed/ShN59EBuFsQ"
						title="YouTube video player"
						frameBorder={0}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						loading="lazy"
					></iframe>
					<p className="py-2 text-center text-primary">
						Self Tape - Everybody Say&apos;s Don&apos;t - Anyone Can
						Whistle
					</p>
				</div>
				<div>
					<iframe
						className="h-[400px] w-full md:h-[315px] md:w-[560px]"
						src="https://www.youtube-nocookie.com/embed/khObU__kOvo"
						title="YouTube video player"
						frameBorder={0}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						loading="lazy"
					></iframe>
					<p className="py-2 text-center text-primary">
						Self Tape - Johanna - Sweeney Todd
					</p>
				</div>
			</div>

			<h3>Sound Demos Coming August 2022!</h3>
		</div>
	);
};

export default Showreel;
