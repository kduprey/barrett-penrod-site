"use client";

import {
	Card,
	Group,
	Badge,
	SwitchGroup,
	Stack,
	Loader,
	LoadingOverlay,
} from "@mantine/core";
import { CalendarSwitch } from "./CalendarSwitch";
import {
	useConnectedCalendars,
	useGCalList,
	useUpdateConnectedCalendars,
} from "./hooks";

export const GCalList = () => {
	const { data: cals, isFetching, error } = useConnectedCalendars();
	const {
		data: gCals,
		isFetching: gCalIsFetching,
		error: gCalError,
	} = useGCalList();
	const { mutate, isPending } = useUpdateConnectedCalendars();

	if (error || gCalError) {
		return <h2>{error?.message || gCalError?.message}</h2>;
	}

	if (isFetching || gCalIsFetching) {
		<Card>
			<Group justify="space-between">
				<h1>Google Calendar</h1>
				<Badge color="green">Connected</Badge>
			</Group>

			<Loader type="dots" />
		</Card>;
	}

	return (
		<Card>
			<Group justify="space-between">
				<h1>Google Calendar</h1>
				<Badge color="green">Connected</Badge>
			</Group>

			<SwitchGroup
				label="Select the calendars to check against for conflicts"
				onChange={(value) => {
					mutate(
						value.map((id) => {
							return {
								id,
								name: String(gCals?.find((cal) => cal.id === id)?.name),
							};
						})
					);
				}}
				pos="relative"
				value={cals?.map((cal) => cal.externalCalId)}
			>
				<LoadingOverlay
					overlayProps={{ radius: "sm", blur: 2 }}
					visible={isPending}
					zIndex={1000}
				/>
				<Stack p="sm">
					{gCals
						?.sort((calA, calB) => {
							if (calA.primary) {
								return -1;
							}
							if (calB.primary) {
								return 1;
							}
							return 0;
						})
						.map((cal) => {
							return (
								<CalendarSwitch
									id={cal.id}
									key={cal.id}
									name={String(cal.name)}
								/>
							);
						})}
				</Stack>
			</SwitchGroup>
		</Card>
	);
};
