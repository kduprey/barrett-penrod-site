type Props = {
	// ...
};

const Photos = (props: Props) => {
	return (
		<div className="flex flex-col py-6 space-y-4 justify-center items-center bg-slate-100">
			<h2>Photos</h2>
			<div className="flex flex-col space-y-6 justify-center items-center w-full">
				<div className="flex flex-col justify-center items-center w-3/5 h-[400px] bg-slate-400">
					<p>Photo 1</p>
				</div>
				<div className="flex flex-col justify-center items-center w-4/5 h-[400px] bg-slate-400">
					<p>Photo 2</p>
				</div>
				<div className="flex flex-col justify-center items-center w-3/5 h-[350px] bg-slate-400">
					<p>Photo 3</p>
				</div>
				<div className="flex flex-col justify-center items-center w-4/5 h-[200px] bg-slate-400">
					<p>Photo 4</p>
				</div>
				<div className="flex flex-col justify-center items-center w-4/6 h-[350px] bg-slate-400">
					<p>Photo 5</p>
				</div>
				<div className="flex flex-col justify-center items-center w-5/6 h-[300px] bg-slate-400">
					<p>Photo 6</p>
				</div>
			</div>
		</div>
	);
};

export default Photos;
