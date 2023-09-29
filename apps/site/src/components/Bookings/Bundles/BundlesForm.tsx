import Link from "next/link";
import { BundleStep } from "@/components/Bookings/Bundles/Step/BundleStep";

export const BundlesForm = ({
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
	// };

	return (
		<div className="flex flex-col items-center justify-center gap-5">
			{/* Service Selection */}
			<BundleStep id={id} location={location} service={service} step={step} />
			{step === 2 && (
				<Link
					href={`/bookings/bookNow?service=${service}&location=${location}&bundle=${id}`}
				>
					<button
						className="border border-black transition ease-in-out hover:opacity-70 md:text-xl"
						type="button"
					>
						Continue
					</button>
				</Link>
			)}
		</div>
	);
};
