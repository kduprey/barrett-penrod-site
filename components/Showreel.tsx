type Props = {
	// ...
};

const Showreel = (props: Props) => {
	return (
		<div
			id="showreel"
			className="flex flex-col items-center justify-center space-y-4 bg-slate-100 py-6 md:justify-evenly"
		>
			<h2>Showreel</h2>
			<div className="grid grid-cols-2 gap-3">
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/7iekqhAo4O0"
					title="YouTube video player"
					frameBorder={0}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/F1-LEy1_lTY"
					title="YouTube video player"
					frameBorder={0}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/ShN59EBuFsQ"
					title="YouTube video player"
					frameBorder={0}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/khObU__kOvo"
					title="YouTube video player"
					frameBorder={0}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
};

export default Showreel;
