import { getConsultationSuccessData } from "@/lib";

const ConsultationSuccess = async ({
	searchParams,
}: {
	searchParams: Record<string, string | string[] | undefined>;
}) => {
	const { name, startTime, zoomLink } = await getConsultationSuccessData(
		searchParams.eventURI as string,
		searchParams.inviteeURI as string
	);

	return (
		<section className="flex flex-grow flex-col items-center justify-center space-y-4 py-6">
			<h2 className="text-secondary text-center">
				Consultation Session Confirmed
			</h2>

			<div className="bg-secondary m-3 flex flex-col items-center justify-center space-y-4 rounded p-6 shadow-lg">
				<p className="text-primary">Thank you, {name}</p>
				<p className="text-primary text-center">
					Your consultation session has been scheduled for{" "}
					{new Date(startTime).toLocaleTimeString("en-US", {
						timeStyle: "short",
					})}{" "}
					on{" "}
					{new Date(startTime).toLocaleDateString("en-US", {
						dateStyle: "medium",
					})}
				</p>
				{zoomLink ? (
					<div className="flex flex-col items-center justify-center">
						<p className="text-primary">You can join the Zoom meeting here!</p>
						<a href={zoomLink}>{zoomLink}</a>
					</div>
				) : null}

				<p className="text-primary text-center">
					We will send you a confirmation email shortly.
				</p>
			</div>
		</section>
	);
};

export default ConsultationSuccess;
