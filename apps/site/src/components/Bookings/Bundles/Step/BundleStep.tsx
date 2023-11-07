import { bundleServices } from "@bpvs/config";
import Link from "next/link";

export const BundleStep = ({
	step,
	id,
	service,
	location,
}: {
	step?: number;
	id: number;
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
					{bundleServices.map((bundleService, index) => (
						<Link
							href={`/bookings/bundles/${id}?step=1&service=${index}`}
							key={bundleService.title}
						>
							<button key={bundleService.title} type="button">
								{bundleService.title}
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
					{bundleServices[service]?.locations.map((serviceLocation, index) => (
						<Link
							href={`/bookings/bundles/${id}?step=2&location=${index}&service=${service}`}
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
						<span className="font-medium">
							{bundleServices[service]?.title}
						</span>
					</p>
					<p className="text-center text-2xl text-primary">
						Location:{" "}
						<span className="font-medium">
							{bundleServices[service]?.locations[location]}
						</span>
					</p>
				</div>
			</div>
		);
};
