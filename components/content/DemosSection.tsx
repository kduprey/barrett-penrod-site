type Props = {};

const DemosSection = (props: Props) => {
	return (
		<div className="about space-y-3 px-6 pt-4 md:pb-4">
			<div>
				<h3 className="hidden py-4 text-center md:block">
					Lesson Demo
				</h3>

				<iframe
					className="h-[225px] w-full md:h-[225px] md:w-[400px]"
					src="https://www.youtube.com/embed/rDrEJ7v3EUk"
					title="YouTube video player"
					frameBorder={0}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					loading="lazy"
				></iframe>
				<p className="py-2 text-center font-bold ">
					NATS Teaching Intern Program Demo
				</p>
				<p className="text-center font-medium">Client - Nick B.</p>
			</div>

			<h3 className="py-7 text-center md:hidden">More to come!</h3>
		</div>
	);
};

export default DemosSection;
