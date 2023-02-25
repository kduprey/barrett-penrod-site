import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import BookingsLayout from "../../components/BookingsLayout";
import Logo from "../../components/Logo";
import { bundleServices, services } from "../../data/services";
import {
	CalendlyEvent,
	CalendlyInviteePayload,
	NextPageWithLayout,
} from "../../types";

type Params = {
	service: number;
	location: number;
	bundle?: number;
};

const Page: NextPageWithLayout = () => {
	const [{ service, location, bundle }, setParams] = useState<Params>({
		service: NaN,
		location: NaN,
		bundle: NaN,
	});
	const [isLoading, setIsLoading] = useState(false);
	const [isScheduled, setIsScheduled] = useState(false);

	const router = useRouter();

	useEffect(() => {
		setParams(router.query as unknown as Params);
	}, [router.query]);

	useEffect(() => {
		setIsLoading(false);
	}, [isScheduled]);

	useCalendlyEventListener({
		onProfilePageViewed: () => console.log("onProfilePageViewed"),
		onDateAndTimeSelected: (e) => console.log(e.data.payload),
		onEventTypeViewed: () => console.log("onEventTypeViewed"),
		onEventScheduled: async (e) => {
			setIsScheduled(true);
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
			const invitee: CalendlyInviteePayload = inviteeRes.data;

			// Get checkout page URL
			const checkoutRes = await axios.post("/api/checkout", {
				service,
				location,
				bundle,
				email: invitee.resource.email,
				name: invitee.resource.name,
				eventTime: event.resource.start_time,
				firstTime:
					invitee.resource.questions_and_answers.filter((e) => {
						return (
							e.question ===
							"Is this your first lesson with Barrett?"
						);
					})[0].answer === "Yes"
						? true
						: false,
				guests: event.resource.event_guests,
			});
			checkoutRes.status === 200
				? router.push(checkoutRes.data.url)
				: router.push("/500");
		},
	});

	if ((Number.isNaN(service) && Number.isNaN(location)) || isLoading) {
		return (
			<div className=" mx-auto flex flex-col items-center justify-center space-y-6 py-6 text-secondary">
				<h3>Loading...</h3>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="64"
					height="64"
					fill="currentColor"
					viewBox="0 0 24 24"
					className="animate-spin"
				>
					<path
						fillRule="evenodd"
						d="M12 19a7 7 0 100-14 7 7 0 000 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
						clipRule="evenodd"
						opacity="0.2"
					></path>
					<path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 00-7 7H2z"></path>
				</svg>
			</div>
		);
	}

	return (
		<section className="flex flex-col p-6">
			<div className="flex flex-col items-center justify-evenly p-3 md:flex-row">
				<Logo />
				<h1 className="pt-3 text-center text-secondary">
					Book Your Session Now
				</h1>
			</div>

			<div className="overflow-hidden rounded-lg">
				<InlineWidget
					styles={{ height: "40em" }}
					url={
						bundle
							? bundleServices[service].url[location] +
							  "?hide_gdpr_banner=1"
							: services[service].url[location] +
							  "?hide_gdpr_banner=1"
					}
					// url="https://calendly.com/kentonduprey/30min"
				/>
			</div>
		</section>
	);
};

export default Page;

Page.getLayout = (page) => (
	<BookingsLayout
		title="Barrett Penrod Voice Studio"
		description="Book in for voice, audition, acting lessons or singing voice specialist sessions."
	>
		{page}
	</BookingsLayout>
);
