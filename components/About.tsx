type Props = {
	// ...
};

const About = (props: Props) => {
	return (
		<div className="bg-slate-200 py-6 px-8 flex flex-col justify-center items-center space-y-4">
			<h2 className="text-primary text-center">About Me</h2>
			<p className="text-slate-800">
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
			<button className="text-primary bg-secondary py-2 px-6">
				View Full Resume
			</button>
		</div>
	);
};

export default About;
