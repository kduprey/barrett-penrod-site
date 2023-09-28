import { getSuccessData } from "@/lib";

export const dynamic = "force-dynamic";

const Success = async ({
	searchParams,
}: {
	searchParams: Record<string, string | string[] | undefined>;
}) => {
	const { name, packageName, startTime, zoomLink, sessionTitle } =
		await getSuccessData(searchParams.session_id as string);

	return (
		<section className="flex flex-grow flex-col items-center justify-center space-y-4 py-6">
			<h2 className="text-center text-secondary">Booking Confirmed</h2>
			<div className="m-3 flex flex-col items-center justify-center space-y-4 rounded bg-secondary p-8 shadow-lg">
				<p className="text-2xl text-primary">Thank you, {name}</p>

				{packageName ? (
					<p className="text-primary">
						You have purchased the{" "}
						<span className="font-semibold ">{packageName}</span> bundle.
					</p>
				) : null}
				<p className="text-primary">
					Your {packageName ? "first" : "upcoming"}{" "}
					<span className="font-semibold ">{sessionTitle}</span> session is at:
				</p>

				<p className="font-semibold text-primary">
					{new Date(startTime).toLocaleTimeString("en-US", {
						timeStyle: "short",
					})}
					on{" "}
					{new Date(startTime).toLocaleDateString("en-US", {
						dateStyle: "medium",
					})}
				</p>

				{zoomLink ? (
					<p className="text-primary">
						You will receive a Zoom link to your email shortly.
					</p>
				) : null}

				<p className="text-center text-primary">
					Please check your email for confirmation.
				</p>
			</div>
		</section>
	);
};

export default Success;
