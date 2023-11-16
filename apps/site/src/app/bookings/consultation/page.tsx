"use client";

import { SERVER_URL } from "@bpvs/config";
import { useRouter } from "next/navigation";
import type { EventScheduledEvent } from "react-calendly";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

const Page = () => {
	const router = useRouter();

	useCalendlyEventListener({
		// onProfilePageViewed: () => {
		// 	console.info("onProfilePageViewed");
		// },
		// onDateAndTimeSelected: (e: DateAndTimeSelectedEvent) => {
		// 	console.info(e.data.payload);
		// },
		// onEventTypeViewed: () => {
		// 	console.info("onEventTypeViewed");
		// },
		onEventScheduled: (e: EventScheduledEvent) => {
			// TODO: Update URLS to use window location

			// Redirect to Success Page
			const successURL = new URL(`${SERVER_URL}/bookings/consultationSuccess`);
			// Add query params to success URL
			// Add service name to query params
			successURL.searchParams.append("eventURI", e.data.payload.event.uri);
			// Add inviteeURI to query params
			successURL.searchParams.append("inviteeURI", e.data.payload.invitee.uri);

			// Redirect to success page
			router.push(successURL.toString());
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

export default Page;
