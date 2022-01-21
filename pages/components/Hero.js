import Image from "next/image";
import SingingImg from "/public/singer.jpg";

const Hero = (props) => {
	return (
		<div className="flex flex-col items-center">
			<div className="max-w-2xl grayscale brightness-50 relative px-2">
				<Image
					src={SingingImg}
					alt="Male singing"
					placeholder="blur"
					className="rounded-md"
				/>
			</div>
			<div className="flex justify-center mx-2">
				<h1 className="text-4xl text-primary-100 absolute -translate-y-[4em]">
					Come work with Barrett
				</h1>
			</div>
		</div>
	);
};

export default Hero;
