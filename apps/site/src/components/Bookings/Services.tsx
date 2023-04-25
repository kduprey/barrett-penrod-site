import { services } from "@bpvs/types";

const Services = () => {
	return (
		<div>
			<h2 className="text-secondary pb-6 text-center">Services</h2>
			<div className="grid justify-center gap-6 sm:grid-cols-2">
				{services.map((service) => {
					return (
						<div
							key={service.title}
							className="withTransition bg-secondary flex max-w-sm origin-center transform flex-col items-center rounded-lg p-6 shadow-md hover:scale-105 hover:opacity-90"
						>
							<h3 className="text-primary text-center text-lg leading-6 md:text-2xl md:tracking-tight">
								{service.title}
							</h3>
							<p className="text-primary my-auto text-center md:text-lg">
								{service.description}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Services;
