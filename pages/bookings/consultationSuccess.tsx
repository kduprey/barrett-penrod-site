import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import BookingsLayout from "../../components/BookingsLayout";
import Loading from "../../components/Loading";
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

	if (!eventURI || !inviteeURI) {
		return {
			notFound: true,
		};
	}

	try {
		const response = await getEventInfo(eventURI as string);
		if (response.status !== 200) {
			console.error(response);
			return {
				notFound: true,
			};
		}

		const eventResponse = await getEventInvitee(inviteeURI as string);
		if (eventResponse.status !== 200) {
			console.error(eventResponse);
			return {
				notFound: true,
			};
		}

		const zoomLink = await getZoomLink(eventURI as string);

		return {
			props: {
				name: eventResponse.data.resource.name,
				start_time: response.data.resource.start_time,
				zoomLink,
			} as Props,
		};
	} catch (error) {
		console.error(error);

		return {
			notFound: true,
		};
	}
};

const ConsultationSuccess: NextPageWithLayout = ({
	name,
	start_time,
	zoomLink,
}: Props) => {
	const [date, setDate] = useState<string>(start_time);
	const [time, setTime] = useState<string>(start_time);

	useEffect(() => {
		const tempDate = new Date(start_time).toLocaleDateString([], {
			weekday: "long",
			month: "short",
			day: "numeric",
			year: "numeric",
		});

		const tempTime = new Date(start_time).toLocaleTimeString([], {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});

		setDate(tempDate);
		setTime(tempTime);
	}, [start_time]);

	if (date === "" || time === "") return <Loading />;

	return (
		<section className="flex flex-grow flex-col items-center justify-center space-y-4 py-6">
			<h2 className="text-center text-secondary">
				Consultation Session Confirmed
			</h2>

			<div className="m-3 flex flex-col items-center justify-center space-y-4 rounded bg-secondary p-6 shadow-lg">
				<p className="text-primary">Thank you, {name}</p>
				<p className="text-center text-primary">
					Your consultation session has been scheduled for {time} on{" "}
					{date}
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
