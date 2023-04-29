import Image from "next/image";
import headshot2 from "public/headshot2.jpg";

const Bio = () => {
	return (
		<div className=" flex w-full max-w-screen-lg flex-col items-center justify-center  md:flex-row md:items-start md:justify-evenly md:gap-5 lg:max-w-screen-xl ">
			{/* Headshot */}
			<div className=" max-w-[20em]">
				<Image
					loading="lazy"
					placeholder="blur"
					src={headshot2}
					alt="Barret Penrod"
					className="rounded-xl"
				/>
			</div>
			<div className="flex w-full max-w-md flex-col gap-5 lg:max-w-xl">
				<h2>Welcome!</h2>
				<p>
					Thank you for visiting my studio page. I began the Barrett
					Penrod Voice Studio officially in June 2022, after
					completing my dual graduate degrees at New York University.
					I&rsquo;ll be up front with you - I&rsquo;m not like most
					other voice teachers. I&rsquo;m not going to mold you into a
					packaged perfect sound, I&rsquo;m not going to push you
					towards a particular method, and I&rsquo;m not ever at any
					point going to tell you that you sound bad. What I am going
					to do is give you the tools to become truly skilled, no
					matter what your ability is at the start. If you&rsquo;re a
					pro and happy with your sound, then we&rsquo;re going to
					keep your voice how you need it to be. If you wanna change,
					then we&rsquo;ll create the way you want to be heard. If
					you&rsquo;re a beginner, then you&rsquo;ll learn the tools
					that will open doors you never thought possible. Book in
					with me, and let&rsquo;s hear you do wonders!
				</p>
			</div>
		</div>
	);
};

export default Bio;
