import Image from "next/image";
import groupPhoto from "/public/groupPhoto.jpg";
import halloween from "/public/halloween.jpg";
import headshot1 from "/public/headshot1.jpg";
import postWorkout from "/public/postWorkout.jpg";
import yankeeGame from "/public/yankeeGame.jpg";

type Props = {
	// ...
};

const About = (props: Props) => {
	return (
		<div
			id="about-me"
			data-cy="about"
			className="flex flex-col items-center justify-center space-y-4 bg-slate-200 py-6 px-8 md:flex-row md:justify-evenly md:space-y-0"
		>
			<div className="flex flex-col sm:w-1/4 md:space-y-10">
				<h2 className="pb-4 text-center text-4xl text-primary md:hidden md:self-start">
					About Me
				</h2>
				<div className="mx-auto w-2/3 md:w-auto">
					<Image src={headshot1} alt="Barrett Penrod" />
				</div>
			</div>
			<section className=" md:w-1/2 md:px-6">
				<h2 className="hidden pb-4 text-center text-primary md:block md:self-start">
					About Me
				</h2>
				<p className="text-slate-800">
					Hello! Glad to see you here. Feel free to stay awhile!{" "}
					<br />
					<br /> So, about me: <br />
					<br /> If you sat me down, ordered us a round of margaritas,
					and asked me to tell you about me and what I do &ndash;
					we&rsquo;d be talking for a few good hours. Expect me to
					geek out about the human voice a lot. I&rsquo;ll tell you
					what I like to do outside of work to keep balanced.
					I&rsquo;ll talk about where my partner and I have traveled,
					my favorite true crime podcast I&rsquo;ve been listening to,
					and what the last show on Broadway was that gave me
					goosebumps. I&rsquo;ll also want to know what you&rsquo;re
					excited about or working on! <br />
					<br /> To list some specifics about my work &ndash;
					I&rsquo;ve got a big tenor voice. I also have a strong lower
					end, so I often venture into Baritone territory depending on
					the project. I&rsquo;m just as comfortable in Plays as I am
					in Musicals. My ultimate goal is to be as stylistically
					versatile as possible. Keep scrolling for more,
					there&rsquo;s more specifics - I&rsquo;d love to share!
				</p>
			</section>
			<div className="space-y-4 md:w-1/4">
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
			</div>
		</div>
	);
};

export default About;
