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
			<div className="flex flex-col sm:w-1/4 md:space-y-10">
				<h2 className="pb-4 text-center text-primary md:self-start">
					About Me
				</h2>

				<div className="">
					<Image src={headshot1} alt="Barrett Penrod" />
				</div>
			</div>
			<section className=" md:w-2/3 md:px-6">
				<p className="text-slate-800">
					Hello! Glad to see you here. Feel free to stay awhile!
				</p>
				<br />
				<p className="text-slate-800">
					So, about me: If you sat me down, ordered us a round of
					margaritas (my favorite), and asked me to tell you about me
					and what I do &ndash; we&rsquo;d be talking for a few good
					hours. Expect me to geek out about the voice a lot, as well
					as actors who inspire me. I&rsquo;m going to talk about
					authenticity, honesty, advocacy, allyship, and overall, a
					fierce desire to contribute positively to those I am
					fortunate to work with. I&rsquo;ll tell you what I like to
					do outside of work to keep balanced. I&rsquo;ll talk about
					where my partner and I have traveled, and my favorite true
					crime podcast I&rsquo;ve been listening to. I&rsquo;ll ask
					you a lot of questions about you, your interests, and listen
					to what you have to say. When all is said and done, I want
					you to feel seen and heard as much as you want.
				</p>
				<br />
				<p className="text-slate-800">
					Specifics about my work &ndash; I&rsquo;ve got a big tenor
					voice. I also have a strong lower end, so I often venture
					into Baritone territory depending on the project. I&rsquo;m
					just as comfortable in Plays as I am in Musicals. It&rsquo;s
					my personal goal to be as stylistically versatile as
					possible &ndash; I want to keep you guessing on my favorite
					style to sing. Keep scrolling for more, there&rsquo;s more
					specifics I&rsquo;d love to share! &nbsp;
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
				{/* <button className="bg-secondary py-2 px-6 text-primary md:mb-6 md:self-end">
					View Full Resume
				</button> */}
			</div>
		</div>
	);
};

export default About;
