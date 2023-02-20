import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import BookingsLayout from "../../components/BookingsLayout";
import Loading from "../../components/Loading";
import Logo from "../../components/Logo";
import { bundleServices, services } from "../../data/services";
import { NextPageWithLayout } from "../../types/types";

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
		if (router.isReady) setParams(router.query as unknown as Params);
	}, [router.query, router.isReady]);

	useEffect(() => {
		setIsLoading(false);
	}, [isScheduled]);

	useCalendlyEventListener({
		onProfilePageViewed: () => console.log("onProfilePageViewed"),
		onDateAndTimeSelected: (e) => console.log(e.data.payload),
		onEventTypeViewed: () => console.log("onEventTypeViewed"),
		onEventScheduled: async (e) => {
			setIsScheduled(true);

			// Create checkout page URL
			const checkoutRes = await axios.post("/api/checkout", {
				service,
				location,
				bundle,
				eventURI: e.data.payload.event.uri,
				inviteeURI: e.data.payload.invitee.uri,
			});
			checkoutRes.status === 200
				? router.push(checkoutRes.data.url)
				: router.push("/500");
		},
	});

	if ((Number.isNaN(service) && Number.isNaN(location)) || isLoading) {
		return <Loading />;
	}

	return (
		<section className="flex flex-col p-6">
			<div className="flex flex-col items-center justify-evenly p-3 md:flex-row">
				<div className="w-full max-w-[18em] self-center ">
					<Logo />
				</div>
				<h1 className="pt-3 text-center text-secondary">
					Book Your Session
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
