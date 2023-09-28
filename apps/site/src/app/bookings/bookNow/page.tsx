"use client";

import { baseURL, bundleServices, services } from "@bpvs/config";
import axios from "axios";
import type { EventScheduledEvent } from "react-calendly";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Logo } from "@/components";

const Page = ({
	searchParams,
}: {
	searchParams: Record<string, string | string[] | undefined>;
}) => {
	const router = useRouter();
	const service = z.coerce.number().optional().parse(searchParams.service);
	const location = z.coerce.number().optional().parse(searchParams.location);
	const bundle = z.coerce.number().optional().parse(searchParams.bundle);

	const url =
		service !== undefined && location !== undefined
			? getCalendlyEventUrl(service, location, bundle)
			: "";

	if (!url) {
		return null;
	}

	// eslint-disable-next-line react-hooks/rules-of-hooks -- This is a custom hook from the Calendly Library
	useCalendlyEventListener({
		onEventScheduled: async (e: EventScheduledEvent) => {
			// Create checkout page URL
			const checkoutRes = await axios.post<{ url: string; id: string }>(
				"/api/checkout",
				{
					service,
					location,
					bundle,
					eventURI: e.data.payload.event.uri,
					inviteeURI: e.data.payload.invitee.uri,
				}
			);
			checkoutRes.status === 200
				? router.push(checkoutRes.data.url)
				: router.push("/500");
		},
	});

	return (
		<section className="flex flex-col p-6">
			<div className="flex flex-col items-center justify-evenly p-3 md:flex-row">
				<div className="w-full max-w-[18em] self-center ">
					<Logo />
				</div>
				<h1 className="pt-3 text-center text-secondary">
					{service !== undefined && service >= 4
						? "Book Your Trial Session"
						: "Book Your Session"}
				</h1>
			</div>

			<div className="overflow-hidden rounded-lg">
				<InlineWidget
					styles={{ height: "40em" }}
					url={url}

					// url="https://calendly.com/kentonduprey/30min"
				/>
			</div>
		</section>
	);
};

export default Page;

const getCalendlyEventUrl = (
	service: number,
	location: number,
	bundle?: number
): string => {
	if (service === 4) {
		return `${baseURL}trial-session`;
	} else if (service === 5) {
		return `${baseURL}trial-session-svs`;
	} else if (bundle) {
		return `${bundleServices[service]?.url[location]}?hide_gdpr_banner=1`;
	}
	return `${services[service]?.url[location]}?hide_gdpr_banner=1`;
};
