import { CalendlyEvent, InPersonLocation, ZoomLocation } from "@bpvs/types";
import { getCalendlyEvent } from ".";
import { isZoomLocation } from "./isZoomLocation";

export const getCalendlyEventZoomLink = async (
	event: CalendlyEvent
): Promise<string> => {
	let location: ZoomLocation | InPersonLocation | undefined;
	console.log("Getting event info");
	location = event.resource.location;

	// Make sure Zoom URL is available, if Zoom location
	if (location !== undefined && isZoomLocation(location)) {
		while ((location as ZoomLocation).status === "initiated") {
			console.log("Zoom URL not available, retrying...");
			location = (await getCalendlyEvent(event.resource.uri)).resource.location;
		}
		return (location as ZoomLocation).join_url;
	}
	throw new Error("No Zoom link available");
};
