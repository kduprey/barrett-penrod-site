type Props = {
	// ...
};

const Showreel = (props: Props) => {
	return (
		<div className="flex flex-col items-center justify-center space-y-4 bg-slate-100 py-6 md:flex-row-reverse md:justify-evenly">
			<h2>Showreel</h2>
			<div className="flex h-[200px] w-5/6 flex-col items-center justify-center bg-slate-400 md:h-[400px] md:w-1/2">
				<h4>YouTube Placeholder</h4>
			</div>
		</div>
	);
};

export default Showreel;
