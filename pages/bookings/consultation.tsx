import axios from "axios";
import { useRouter } from "next/router";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import BookingsLayout from "../../components/BookingsLayout";
import { server } from "../../config";
import {
	CalendlyEvent,
	CalendlyEventInvitee,
	NextPageWithLayout,
	ZoomLocation,
} from "../../types";

const Consultation: NextPageWithLayout = () => {
	const router = useRouter();
	useCalendlyEventListener({
		onProfilePageViewed: () => console.log("onProfilePageViewed"),
		onDateAndTimeSelected: (e) => console.log(e.data.payload),
		onEventTypeViewed: () => console.log("onEventTypeViewed"),
		onEventScheduled: async (e) => {
			console.log(e.data.payload);

			// Fetch event Info from Calendly
			const eventRes = await axios.post("/api/calendly/eventInfo", {
				uri: e.data.payload.event.uri,
			});
			let event: CalendlyEvent = eventRes.data;

			// Fetch invitee info from Calendly
			const inviteeRes = await axios.post(
				"/api/calendly/getEventInvitee",
				{
					uri: e.data.payload.invitee.uri,
				}
			);
			const invitee: CalendlyEventInvitee = inviteeRes.data;

			// Redirect to Success Page
			const successURL = new URL(`${server}/bookings/success`);
			// Add query params to success URL
			// Add service name to query params
			successURL.searchParams.append("service", "9");
			// Add email to query params
			successURL.searchParams.append("email", invitee.resource.email);
			// Add name to query params
			successURL.searchParams.append("name", invitee.resource.name);
			// Add event time to query params
			successURL.searchParams.append(
				"eventTime",
				event.resource.start_time.toString()
			);

			if (event.resource.event_guests.length > 0) {
				// Add guest email to query params
				const guests = event.resource.event_guests.join(",");
				successURL.searchParams.append("guestEmail[]", guests);
			}

			// Make sure location is Zoom
			if (instanceOfZoomLocation(event.resource.location)) {
				do {
					// Fetch event Info from Calendly
					const eventRes = await axios.post(
						"/api/calendly/eventInfo",
						{
							uri: e.data.payload.event.uri,
						}
					);

					event = eventRes.data;
				} while (
					(event.resource.location as ZoomLocation).status ===
					"initiated"
				);
				let zoomLink: string = (event.resource.location as ZoomLocation)
					.join_url;

				// Add zoom location to query params
				successURL.searchParams.set("zoomLink", zoomLink);
			}
			console.log(successURL.href);

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
		title="Barrett Penrod Voice Studio"
		description="Book in for voice, audition, acting lessons or singing voice specialist sessions."
	>
		{page}
	</BookingsLayout>
);
function instanceOfZoomLocation(object: any): object is ZoomLocation {
	return true;
}
