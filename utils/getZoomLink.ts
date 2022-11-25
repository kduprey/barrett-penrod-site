import { getEventInfo } from "../pages/api/calendly/getEventInfo";
import { ZoomLocation } from "../types/types";
import { instanceOfZoomLocation } from "./isZoomLocation";

const getZoomLink = async (eventURI: string): Promise<string | null> => {
	let {
		data: {
			resource: { location },
		},
	} = await getEventInfo(eventURI);
	// Make sure Zoom URL is available, if Zoom location
	if (instanceOfZoomLocation(location)) {
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
