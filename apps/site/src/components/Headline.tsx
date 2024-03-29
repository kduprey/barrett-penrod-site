import Image from "next/image";
import headshot5 from "../../public/headshot5.jpg";

export const Headline = (): JSX.Element => (
	<>
		<div
			className="flex flex-col justify-center space-y-4 py-4 px-6 md:hidden"
			data-cy="hero"
		>
			<h2 className="font-normal text-secondary">Hey, I&apos;m</h2>
			<h1 className="text-6xl font-extrabold text-white ">Barrett Penrod</h1>
			<p className="tracking-widest">Actor, Singer, Mover</p>
		</div>

		{/* Medium */}
		<div className="hidden items-center justify-evenly md:flex md:px-6">
			<div className="flex flex-col space-y-4">
				<h2 className="text-4xl font-normal text-secondary">Hey, I&apos;m</h2>
				<h1 className="text-8xl font-extrabold text-white ">Barrett Penrod</h1>
				<p className="tracking-widest">Actor, Singer, Mover</p>
			</div>
			{/* Image */}
			<div className="z-10 flex w-1/4 border">
				<Image alt="Barret Penrod" data-cy="hero-headshot" src={headshot5} />
			</div>
		</div>
	</>
);
