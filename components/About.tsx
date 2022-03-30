type Props = {
	// ...
};

const About = (props: Props) => {
	return (
		<div className="flex flex-col items-center justify-center space-y-4 bg-slate-200 py-6 px-8 md:flex-row md:justify-evenly">
			<h2 className="text-center text-primary md:self-start md:pt-6">
				About Me
			</h2>
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
			<button className="bg-secondary py-2 px-6 text-primary md:mb-6 md:self-end">
				View Full Resume
			</button>
		</div>
	);
};

export default About;
