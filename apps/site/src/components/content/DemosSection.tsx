export const DemosSection = (): JSX.Element => (
	<div className="">
		<div>
			<h3 className="hidden pb-4 text-center md:block">Lesson Demo</h3>

			<iframe
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				className="mx-auto h-[225px] w-full sm:w-[400px] md:h-[225px] "
				frameBorder={0}
				loading="lazy"
				src="https://www.youtube.com/embed/rDrEJ7v3EUk"
				title="YouTube video player"
			/>
			<p className="py-2 text-center font-bold ">
				NATS Teaching Intern Program Demo
			</p>
			<p className="text-center font-medium">Client - Nick B.</p>
		</div>

		<h3 className="py-7 text-center text-2xl">More to come!</h3>
	</div>
);
