type Props = {
	// ...
};

const Photos = (props: Props) => {
	return (
		<div
			id="photos"
			className="flex flex-col items-center justify-center space-y-4 bg-slate-100 py-6"
		>
			<h2>Photos</h2>
			<div className="flex w-full flex-col items-center justify-center space-y-6 md:grid md:grid-cols-3 md:justify-items-center">
				<div className="flex h-[400px] w-3/5 flex-col items-center justify-center bg-slate-400">
					<p>Photo 1</p>
				</div>
				<div className="flex h-[400px] w-4/5 flex-col items-center justify-center bg-slate-400">
					<p>Photo 2</p>
				</div>
				<div className="flex h-[350px] w-3/5 flex-col items-center justify-center bg-slate-400">
					<p>Photo 3</p>
				</div>
				<div className="flex h-[200px] w-4/5 flex-col items-center justify-center bg-slate-400">
					<p>Photo 4</p>
				</div>
				<div className="flex h-[350px] w-4/6 flex-col items-center justify-center bg-slate-400">
					<p>Photo 5</p>
				</div>
				<div className="flex h-[300px] w-5/6 flex-col items-center justify-center bg-slate-400">
					<p>Photo 6</p>
				</div>
			</div>
		</div>
	);
};

export default Photos;
