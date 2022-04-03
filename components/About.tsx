import Image from "next/image";
import headshot1 from "/public/headshot1.jpg";
import groupPhoto from "/public/groupPhoto.jpg";
import halloween from "/public/halloween.jpg";
import postWorkout from "/public/postWorkout.jpg";
import yankeeGame from "/public/yankeeGame.jpg";

type Props = {
	// ...
};

const About = (props: Props) => {
	return (
		<div
			id="about"
			className="flex flex-col items-center justify-center space-y-4 bg-slate-200 py-6 px-8 md:flex-row md:justify-evenly md:space-y-0"
		>
			<div className="flex w-1/4 flex-col space-y-4">
				<h2 className="text-center text-primary md:self-start md:pt-6">
					About Me
				</h2>

				<div className="">
					<Image src={headshot1} alt="Barrett Penrod" />
				</div>
			</div>
			<p className="text-slate-800 md:w-1/4">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Necessitatibus culpa dolor voluptatibus quam libero, amet
				explicabo odit eius veniam dolore repudiandae maiores adipisci
				voluptatem. Iste veniam animi doloremque quod sequi?
				<br />
				<br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
				laboriosam tempora ipsam fuga aliquam iure doloremque quis,
				temporibus error deserunt tenetur, quibusdam libero enim, velit
				eum unde vitae optio. Sed.
			</p>
			<div className="w-1/4 space-y-4">
				<div className="grid grid-cols-2 gap-2">
					<Image
						placeholder="blur"
						loading="lazy"
						src={groupPhoto}
						alt="Group Photo"
					/>
					<Image
						src={yankeeGame}
						placeholder="blur"
						loading="lazy"
						alt="Yankee Game"
					/>
					<Image
						src={halloween}
						placeholder="blur"
						loading="lazy"
						alt="Halloween"
					/>
					<Image src={postWorkout} alt="Post Workout" />
				</div>
				{/* <button className="bg-secondary py-2 px-6 text-primary md:mb-6 md:self-end">
					View Full Resume
				</button> */}
			</div>
		</div>
	);
};

export default About;
