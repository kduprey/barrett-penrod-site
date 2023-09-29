import { services } from "@bpvs/config";

export const Services = (): JSX.Element => (
	<div>
		<h2 className="pb-6 text-center text-secondary">Services</h2>
		<div className="grid justify-center gap-6 sm:grid-cols-2">
			{services.map((service) => (
				<div
					className="withTransition flex max-w-sm origin-center transform flex-col items-center rounded-lg bg-secondary p-6 shadow-md hover:scale-105 hover:opacity-90"
					key={service.title}
				>
					<h3 className="text-center text-lg leading-6 text-primary md:text-2xl md:tracking-tight">
						{service.title}
					</h3>
					<p className="my-auto text-center text-primary md:text-lg">
						{service.description}
					</p>
				</div>
			))}
		</div>
	</div>
);
