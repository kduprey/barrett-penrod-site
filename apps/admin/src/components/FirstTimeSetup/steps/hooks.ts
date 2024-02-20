"use client";

import { useQuery } from "@tanstack/react-query";
import { getStripeAccountInfo } from "@/utils/stripe/credentials";
import { getZoomInfo } from "@/components/Widgets/ZoomWidget/actions";

export const useStripeAccountInfo = () => {
	return useQuery({
		queryKey: ["stripeAccountInfo"],
		queryFn: async () => {
			return getStripeAccountInfo();
		},
	});
};

export const useZoomInfo = () => {
	return useQuery({
		queryKey: ["zoomInfo"],
		queryFn: async () => {
			return getZoomInfo();
		},
	});
};
