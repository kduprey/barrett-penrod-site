"use client";

import { Card, Group, Badge, SwitchGroup, Stack } from "@mantine/core";
import { CalendarSwitch } from "./CalendarSwitch";
import { useConnectedCalendars, useUpdateConnectedCalendars } from "./hooks";

export const GCalList = ({
	gCals,
}: {
	gCals?: {
		id: string;
		name?: string | null;
		primary: boolean;
		readOnly: boolean;
		email?: string | null;
		description?: string | null;
		timeZone?: string | null;
	}[];
}) => {
	const { mutate, isPending } = useUpdateConnectedCalendars();
	const { data: cals } = useConnectedCalendars();

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
									disabled={isPending}
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
