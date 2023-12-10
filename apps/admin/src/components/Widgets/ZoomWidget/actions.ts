"use server";

import { getZoomCredentials, zoomApi } from "@/utils/zoom/credentials";
import type { ZoomGetUserId } from "@/utils/zoom/schemas";

export const getZoomInfo = async (): Promise<ZoomGetUserId | undefined> => {
	const credentials = await getZoomCredentials();
	if (!credentials) return;

	return zoomApi(credentials).getZoomUser();
};

export const disconnectZoom = async () => {
	const credentials = await getZoomCredentials();
	if (!credentials) return;

	return zoomApi(credentials).deleteZoomConnection();
};
