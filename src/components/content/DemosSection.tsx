const DemosSection = () => {
	return (
		<div className="">
			<div>
				<h3 className="hidden pb-4 text-center md:block">
					Lesson Demo
				</h3>

				<iframe
					className="mx-auto h-[225px] w-full sm:w-[400px] md:h-[225px] "
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

			<h3 className="py-7 text-center text-2xl">More to come!</h3>
		</div>
	);
};

export default DemosSection;
