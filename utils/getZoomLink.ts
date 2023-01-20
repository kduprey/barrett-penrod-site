import { getEventInfo } from "../pages/api/calendly/eventInfo";
import { InPersonLocation, ZoomLocation } from "../types/types";
import { instanceOfZoomLocation } from "./isZoomLocation";

const getZoomLink = async (eventURI: string): Promise<string | null> => {
	let location: ZoomLocation | InPersonLocation | undefined;
	try {
		const eventResponse = await getEventInfo(eventURI);
		location = eventResponse.data.resource.location;
	} catch (error) {
		console.error(error);
		return null;
	}

	// Make sure Zoom URL is available, if Zoom location
	if (instanceOfZoomLocation(location) && location !== undefined) {
		while ((location as ZoomLocation).status === "initiated") {
			console.log("Zoom URL not available, retrying...");
			location = await (
				await getEventInfo(eventURI)
			).data.resource.location;
		}
		return (location as ZoomLocation).join_url;
	}
	return null;
};

export default getZoomLink;
