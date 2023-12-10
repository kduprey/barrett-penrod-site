"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
	getConnectedCalendars,
	getGCalList,
	onCalendarToggle,
} from "./actions";

export const useUpdateConnectedCalendars = () => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (data: { id: string; name: string }[]) => {
			return onCalendarToggle(data);
		},
		mutationKey: ["connectedCalendars"],
		onSuccess: () => {
			void queryClient.invalidateQueries({
				queryKey: ["connectedCalendars"],
			});
		},
	});
};

export const useConnectedCalendars = () => {
	return useQuery({
		queryKey: ["connectedCalendars"],
		queryFn: async () => getConnectedCalendars(),
	});
};

export const useGCalList = () => {
	return useQuery({
		queryKey: ["gcalList"],
		queryFn: async () => {
			return getGCalList();
		},
	});
};
