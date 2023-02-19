import { useRouter } from "next/router";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import BookingsLayout from "../../components/BookingsLayout";
import { server } from "../../config";
import { NextPageWithLayout } from "../../types/types";

const Consultation: NextPageWithLayout = () => {
	const router = useRouter();
	useCalendlyEventListener({
		onProfilePageViewed: () => console.log("onProfilePageViewed"),
		onDateAndTimeSelected: (e) => console.log(e.data.payload),
		onEventTypeViewed: () => console.log("onEventTypeViewed"),
		onEventScheduled: async (e) => {
			console.log(e.data.payload);

			// Redirect to Success Page
			const successURL = new URL(
				`${server}/bookings/consultationSuccess`
			);
			// Add query params to success URL
			// Add service name to query params
			successURL.searchParams.append(
				"eventURI",
				e.data.payload.event.uri
			);
			// Add inviteeURI to query params
			successURL.searchParams.append(
				"inviteeURI",
				e.data.payload.invitee.uri
			);

			// Redirect to success page
			router.push(successURL);
		},
	});

	return (
		<section className="my-auto p-4">
			<h1 className="pb-4 text-center text-secondary">
				Book your Consultation
			</h1>

			<div className="overflow-hidden rounded-lg">
				<InlineWidget
					styles={{ height: "40em" }}
					url="https://calendly.com/bpvoicestudio/consultation-session?hide_gdpr_banner=1"
				/>
			</div>
		</section>
	);
};

export default Consultation;

Consultation.getLayout = (page) => (
	<BookingsLayout
		title="Barrett Penrod Voice Studio - Consultation Session"
		description="Book in for voice, audition, acting lessons or singing voice specialist sessions."
	>
		{page}
	</BookingsLayout>
);
