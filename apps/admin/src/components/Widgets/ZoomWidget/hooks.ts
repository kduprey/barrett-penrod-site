"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { disconnectZoom, getZoomInfo } from "./actions";

export const useZoomInfo = () => {
	return useQuery({
		queryKey: ["zoomInfo"],
		queryFn: async () => {
			return getZoomInfo();
		},
	});
};

export const useDisconnectZoom = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationKey: ["disconnectZoom"],
		mutationFn: async () => {
			return disconnectZoom();
		},
		onSuccess: () => {
			void queryClient.invalidateQueries({
				queryKey: ["zoomInfo"],
			});
			window.location.reload();
		},
	});
};
