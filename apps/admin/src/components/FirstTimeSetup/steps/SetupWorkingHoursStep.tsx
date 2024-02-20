"use client";

import { Button, Group, Switch, em } from "@mantine/core";
import { IconCopy, IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import { TimeSelect } from "@/components/TimeSelect/TimeSelect";

interface SetupWorkingHoursStepProps {
	nextStep: () => void;
}

const daysOfWeek = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

type DaysOfWeek = (typeof daysOfWeek)[number];

const DayAvailability = ({
	day,
	availability,
	onChange,
}: {
	day: string;
	availability: string;
	onChange: (day: string, availability: string) => void;
}) => {
	return (
		<>
			<Group gap="sm" p="sm">
				<Switch
					label={day}
					onChange={() => {
						onChange(day, availability);
					}}
					styles={{
						root: {
							width: em(150),
						},
					}}
				/>
				<Group>
					<Group>
						<TimeSelect w={em(100)} /> -{" "}
						<TimeSelect
							defaultValue={new Date(0, 0, 0, 17, 0).toISOString()}
							w={em(100)}
						/>
					</Group>
					<Group>
						<Button>
							<IconPlus />
						</Button>
						<Button>
							<IconCopy />
						</Button>
					</Group>
				</Group>
			</Group>

			{
				// If more than one day availability, show button to delete
			}
		</>
	);
};

export const SetupWorkingHoursStep = (props: SetupWorkingHoursStepProps) => {
	const [availability, setAvailability] = useState<{
		[key in DaysOfWeek]: string;
	}>({
		Monday: "",
		Tuesday: "",
		Wednesday: "",
		Thursday: "",
		Friday: "",
		Saturday: "",
		Sunday: "",
	});

	const toggleAvailability = (day: string, avail: string) => {
		setAvailability((current) => ({
			...current,
			[day]: avail,
		}));
	};

	return (
		<>
			{
				// Show a switch for each day of the week
				// If switch is on, show availability
				// If switch is off, hide availability
				// If availability is empty, show default availability
			}

			{daysOfWeek.map((day, index) => (
				<DayAvailability
					availability={availability[index] || ""}
					day={day}
					key={day}
					onChange={toggleAvailability}
				/>
			))}

			<Button onClick={props.nextStep}>Next</Button>
		</>
	);
};
