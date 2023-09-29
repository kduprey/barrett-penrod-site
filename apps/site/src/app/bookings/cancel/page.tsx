import { getCancelData } from "@/lib";

const Cancel = async ({
	searchParams,
}: {
	searchParams: Record<string, string | string[] | undefined>;
}) => {
	const { name, sessionUrl } = await getCancelData(
		searchParams.session_id as string
	);

	return (
		<div className="flex flex-grow flex-col items-center justify-center space-y-4 p-4">
			<h2 className="text-secondary text-center">Booking Cancelled</h2>
			<div className="bg-secondary m-3 flex flex-col items-center justify-center space-y-4 rounded p-6 shadow-lg md:w-1/2">
				<h4 className="text-primary">
					Hey {name.substring(0, name.indexOf(" "))},
				</h4>
				<p className="text-primary text-center">
					Downpayment is required to confirm booking. Booking will be cancelled
					within the hour pending no downpayment is received.
				</p>
				<a
					className="text-primary text-center underline"
					href={sessionUrl as string}
				>
					If you would like to keep the booking, click here to continue with
					payment.
				</a>
			</div>
		</div>
	);
};

export default Cancel;
