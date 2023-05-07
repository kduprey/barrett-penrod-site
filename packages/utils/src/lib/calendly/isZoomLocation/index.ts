import { InPersonLocation, ZoomLocation } from "@bpvs/types";
import { zoomLocationSchema } from "./validation";

export const isZoomLocation = (
	location: ZoomLocation | InPersonLocation
): boolean => {
	return zoomLocationSchema.safeParse(location).success;
};
