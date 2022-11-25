import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import BookingsLayout from "../../components/BookingsLayout";
import { NextPageWithLayout } from "../../types/types";
import getZoomLink from "../../utils/getZoomLink";
import { instanceOfZoomLocation } from "../../utils/isZoomLocation";
import { getEventInfo } from "../api/calendly/getEventInfo";
import { getEventInvitee } from "../api/calendly/getEventInvitee";

type Props = {
	name: string;
	start_time: string;
	zoomLink: string;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { eventURI, inviteeURI } = ctx.query;

	const {
		data: {
			resource: { start_time, location },
		},
	} = await getEventInfo(eventURI as string);
	const {
		data: {
			resource: { name },
		},
	} = await getEventInvitee(inviteeURI as string);

	const zoomLink = await getZoomLink(eventURI as string);

	return {
		props: {
			name,
			start_time,
			zoomLink,
		} as Props,
	};
};

const ConsultationSuccess: NextPageWithLayout = ({
	name,
	start_time,
	zoomLink,
}: Props) => {
	return (
		<section className="flex flex-grow flex-col items-center justify-center space-y-4 py-6">
			<h2 className="text-center text-secondary">
				Consultation Session Confirmed
			</h2>

			<div className="m-3 flex flex-col items-center justify-center space-y-4 rounded bg-secondary p-6 shadow-lg">
				<p className="text-primary">Thank you, {name}</p>
				<p className="text-center text-primary">
					Your consultation session has been scheduled for{" "}
					{new Date(start_time).toLocaleString([], {
						hour: "numeric",
						minute: "2-digit",
					})}{" "}
					on{" "}
					{new Date(start_time).toLocaleDateString([], {
						weekday: "long",
						month: "short",
						day: "numeric",
						year: "numeric",
					})}
				</p>
				<div className="flex flex-col items-center justify-center">
					<p className="text-primary">
						You can join the Zoom meeting here!
					</p>
					<a href={zoomLink}>{zoomLink}</a>
				</div>

				<p className="text-center text-primary">
					We will send you a confirmation email shortly.
				</p>
			</div>
		</section>
	);
};

export default ConsultationSuccess;

ConsultationSuccess.getLayout = (page) => (
	<BookingsLayout>{page}</BookingsLayout>
);
