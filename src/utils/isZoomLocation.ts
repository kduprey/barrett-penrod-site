import { ZoomLocation } from "../types/types";

export const instanceOfZoomLocation = (object: any): object is ZoomLocation => {
	return true;
};
