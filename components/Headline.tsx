type Props = {
	// ...
};

const Headline = (props: Props) => {
	return (
		<>
			<div className="flex flex-col justify-center space-y-4 py-4 px-6 md:hidden">
				<h2 className="font-normal text-secondary">Hey, I&apos;m</h2>
				<h1 className="text-6xl font-extrabold text-white ">
					Barrett Penrod
				</h1>
				<p className="tracking-widest">Actor / Performer / Model</p>
			</div>

			{/* Medium */}
			<div className="hidden items-center justify-evenly md:flex md:px-6">
				<div className="flex flex-col space-y-4">
					<h2 className="text-4xl font-normal text-secondary">
						Hey, I&apos;m
					</h2>
					<h1 className="text-8xl font-extrabold text-white ">
						Barrett Penrod
					</h1>
					<p className="tracking-widest">Actor / Performer / Model</p>
				</div>
				{/* Image */}
				<div className="flex h-[600px] flex-col items-center justify-center bg-slate-400">
					<h2 className="text-center">Image Placeholder</h2>
				</div>
			</div>
		</>
	);
};

export default Headline;
