import Link from "next/link";
import { IndividualStep } from "./Step/IndividualStep";

export const IndividualForm = ({
	step,
	service,
	location,
}: {
	step?: number;
	service?: number;
	location?: number;
}) => {
	// };

	return (
		<div className="flex flex-col items-center justify-center gap-5">
			{/* Service Selection */}
			<IndividualStep location={location} service={service} step={step} />
			{step === 2 && (
				<Link
					href={`/bookings/bookNow?service=${service}&location=${location}`}
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
