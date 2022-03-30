type Props = {
	// ...
};

const Headline = (props: Props) => {
	return (
		<div className="flex flex-col justify-center space-y-4 py-4 px-6">
			<h2 className="text-secondary font-normal">Hey, I&apos;m</h2>
			<h1 className="text-white font-extrabold text-6xl ">
				Barrett Penrod
			</h1>
			<p className="tracking-widest">Actor / Performer / Model</p>
		</div>
	);
};

export default Headline;
