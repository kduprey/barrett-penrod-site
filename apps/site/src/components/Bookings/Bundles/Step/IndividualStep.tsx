import { services } from "@bpvs/config";
import Link from "next/link";

export const IndividualStep = ({
	step,
	service,
	location,
}: {
	step?: number;
	service?: number;
	location?: number;
}) => {
	if (!step && !service)
		return (
			<div className="flex flex-col items-center gap-4 justify-center ">
				<h3 className="text-gray-700 md:text-2xl font-normal">
					Choose your lesson type:
				</h3>
				<div className="flex space-x-4 items-center">
					{services.map((serviceResult, index) => (
						<Link
							href={`/bookings/individual?step=1&service=${index}`}
							key={serviceResult.title}
						>
							<button key={serviceResult.title} type="button">
								{serviceResult.title}
							</button>
						</Link>
					))}
				</div>
			</div>
		);

	if (step === 1 && service !== undefined)
		return (
			<div className="flex flex-col items-center gap-4 justify-center ">
				<h3 className="text-gray-700 md:text-2xl font-normal">
					Select Session Location:
				</h3>
				<div className="flex space-x-4 items-center">
					{services[service]?.locations.map((serviceLocation, index) => (
						<Link
							href={`/bookings/individual?step=2&location=${index}&service=${service}`}
							key={serviceLocation}
						>
							<button type="button">{serviceLocation}</button>
						</Link>
					))}
				</div>
			</div>
		);

	if (step === 2 && service !== undefined && location !== undefined)
		return (
			<div className="m-2 flex flex-col items-center justify-center space-y-4 md:grow md:justify-evenly">
				<h3 className="text-gray-700 md:text-2xl font-normal">
					Confirm Details
				</h3>
				<div className="flex flex-col items-start space-y-4">
					<p className="text-center text-2xl text-primary">
						Service:{" "}
						<span className="font-medium">{services[service]?.title}</span>
					</p>
					<p className="text-center text-2xl text-primary">
						Location:{" "}
						<span className="font-medium">
							{services[service]?.locations[location]}
						</span>
					</p>
				</div>
			</div>
		);
};
