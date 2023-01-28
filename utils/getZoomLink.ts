import { getEventInfo } from "../pages/api/calendly/eventInfo";
import { InPersonLocation, ZoomLocation } from "../types/types";
import { instanceOfZoomLocation } from "./isZoomLocation";

const getZoomLink = async (eventURI: string): Promise<string> => {
	let location: ZoomLocation | InPersonLocation | undefined;
	try {
		const eventResponse = await getEventInfo(eventURI);
		location = eventResponse.resource.location;
	} catch (error) {
		console.error(error);
		throw new Error("Error getting event info");
	}

	// Make sure Zoom URL is available, if Zoom location
	if (instanceOfZoomLocation(location) && location !== undefined) {
		while ((location as ZoomLocation).status === "initiated") {
			console.log("Zoom URL not available, retrying...");
			location = (await getEventInfo(eventURI)).resource.location;
		}
		return (location as ZoomLocation).join_url;
	}
	throw new Error("No Zoom link available");
};

export default getZoomLink;
