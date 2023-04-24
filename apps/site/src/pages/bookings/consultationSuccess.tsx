import { NextPageWithLayout } from "@bpvs/types";
import {
	getCalendlyEvent,
	getCalendlyEventZoomLink,
	getCalendlyInvitee,
} from "@bpvs/utils";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import BookingsLayout from "../../components/BookingsLayout";
import Loading from "../../components/Loading";

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
		const event = await getCalendlyEvent(eventURI as string);
		if (!event) {
			console.error(event);
			return {
				notFound: true,
			};
		}

		const invitee = await getCalendlyInvitee(inviteeURI as string);
		if (!invitee) {
			console.error(invitee);
			return {
				notFound: true,
			};
		}

		const zoomLink = await getCalendlyEventZoomLink(event);

		return {
			props: {
				name: invitee.resource.name,
				start_time: event.resource.start_time,
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
			<h2 className="text-secondary text-center">
				Consultation Session Confirmed
			</h2>

			<div className="bg-secondary m-3 flex flex-col items-center justify-center space-y-4 rounded p-6 shadow-lg">
				<p className="text-primary">Thank you, {name}</p>
				<p className="text-primary text-center">
					Your consultation session has been scheduled for {time} on {date}
				</p>
				<div className="flex flex-col items-center justify-center">
					<p className="text-primary">You can join the Zoom meeting here!</p>
					<a href={zoomLink}>{zoomLink}</a>
				</div>

				<p className="text-primary text-center">
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
