import Image from "next/image";
import headshot5 from "/public/headshot5.jpg";

const Headline = () => {
	return (
		<>
			<div
				data-cy="hero"
				className="flex flex-col justify-center space-y-4 px-6 py-4 md:hidden"
			>
				<h2 className="text-secondary font-normal">Hey, I&apos;m</h2>
				<h1 className="text-6xl font-extrabold text-white ">Barrett Penrod</h1>
				<p className="tracking-widest">Actor, Singer, Mover</p>
			</div>

			{/* Medium */}
			<div className="hidden items-center justify-evenly md:flex md:px-6">
				<div className="flex flex-col space-y-4">
					<h2 className="text-secondary text-4xl font-normal">Hey, I&apos;m</h2>
					<h1 className="text-8xl font-extrabold text-white ">
						Barrett Penrod
					</h1>
					<p className="tracking-widest">Actor, Singer, Mover</p>
				</div>
				{/* Image */}
				<div className="z-10 flex w-1/4 border">
					<Image data-cy="hero-headshot" src={headshot5} alt="Barret Penrod" />
				</div>
			</div>
		</>
	);
};

export default Headline;
