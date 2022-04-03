type Props = {
	// ...
};

const About = (props: Props) => {
	return (
		<div
			id="about"
			className="flex flex-col items-center justify-center space-y-4 bg-slate-200 py-6 px-8 md:flex-row md:justify-evenly"
		>
			<div className="space-y-4">
				<h2 className="text-center text-primary md:self-start md:pt-6">
					About Me
				</h2>
				<div>
					<div className="flex h-[400px] w-full flex-col items-center justify-center bg-slate-400">
						<p>About Photo 1</p>
					</div>
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
			<div className="space-y-4">
				<div>
					<div className="flex h-[400px] w-full flex-col items-center justify-center bg-slate-400">
						<p>About Photo 2</p>
					</div>
				</div>
				<button className="bg-secondary py-2 px-6 text-primary md:mb-6 md:self-end">
					View Full Resume
				</button>
			</div>
		</div>
	);
};

export default About;
