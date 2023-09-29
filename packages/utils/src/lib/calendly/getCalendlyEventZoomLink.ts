import type {
	CalendlyEvent,
	InPersonLocation,
	ZoomLocation,
} from "@bpvs/types";
import { getCalendlyEvent } from "./getCalendlyEvent";
import { isZoomLocation } from "./isZoomLocation";

export const getCalendlyEventZoomLink = async (
	event: CalendlyEvent
): Promise<string | null> => {
	let location: ZoomLocation | InPersonLocation | undefined;
	console.info("Getting event info");
	location = event.resource.location;

	// Make sure Zoom URL is available, if Zoom location
	if (isZoomLocation(location)) {
		while ((location as ZoomLocation).status === "initiated") {
			console.info("Zoom URL not available, retrying...");

			// eslint-disable-next-line no-await-in-loop -- This is intentional so we can retry until the Zoom URL is available
			location = (await getCalendlyEvent(event.resource.uri)).resource
				.location;
		}
		return (location as ZoomLocation).join_url;
	}
	return null;
};
