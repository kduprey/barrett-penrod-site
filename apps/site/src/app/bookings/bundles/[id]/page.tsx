import { bundleServices } from "@bpvs/config";
import Link from "next/link";
import { z } from "zod";
import { BundlesForm } from "@/components/Bookings/Bundles/BundlesForm";
import { Logo } from "@/components";

const BundlesPage = ({
	params,
	searchParams,
}: {
	params: {
		id: number;
	};
	searchParams: Record<string, string | string[] | undefined>;
}) => {
	const service = z.coerce.number().optional().parse(searchParams.service);
	const location = z.coerce.number().optional().parse(searchParams.location);
	const step = z.coerce.number().optional().parse(searchParams.step);

	return (
		<section className="space-y-7 lg:flex-row">
			<div className="mx-auto max-w-[18rem]">
				<Logo />
			</div>
			<div className="withTransition  m-6 mx-auto flex gap-4 flex-col items-center rounded-lg bg-secondary py-6 px-4 lg:max-w-screen-md">
				<h3 className="pb-3 text-center text-primary">
					Book your First Session
				</h3>

				<div className="flex w-full items-start justify-evenly space-x-3">
					<Link
						className={`${step && step > 0 ? "completed" : "step"}`}
						href={`/bookings/bundles/${params.id}`}
						id="step1"
					>
						<hr />
						<p>Step 1</p>
						<p>Select Service</p>
						{service !== undefined ? (
							<span className="text-primary-800 font-bold">
								{bundleServices[service]?.title}
							</span>
						) : null}
					</Link>
					<Link
						className={`${step === 2 ? "completed" : "step"}`}
						href={`/bookings/bundles/${params.id}${
							step && step > 1 ? `?step=1&service=${service}` : ""
						}`}
						id="step2"
					>
						<hr />
						<p>Step 2</p>
						<p>Select Location</p>
						{location !== undefined && service !== undefined ? (
							<span className="text-primary-800 font-bold">
								{bundleServices[service]?.locations[location]}
							</span>
						) : null}
					</Link>
					<div className={step === 2 ? "completed" : "step"}>
						<hr />
						<p>Step 3</p>
						<p>Confirm and Book</p>
					</div>
				</div>

				<BundlesForm
					id={params.id}
					location={location}
					service={service}
					step={step}
				/>
			</div>
		</section>
	);
};
export default BundlesPage;
