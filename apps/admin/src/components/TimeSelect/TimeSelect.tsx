import { Select, type SelectProps } from "@mantine/core";

type TimeSelectProps = SelectProps;
// Create time selction options for number input with 15 minute intervals based on brower locale to use either 12 or 24 hour time - eg: 12:00 or 00:00, keeping double digits for hours and minutes

const timeSelectionOptions = Array.from({ length: 96 }, (_, i) => {
	const hours = Math.floor(i / 4);
	const minutes = i % 4 === 0 ? "00" : 15 * (i % 4);
	return {
		label: new Date(0, 0, 0, hours, Number(minutes)).toLocaleTimeString([], {
			timeStyle: "short",
		}),
		// Set to date object
		value: new Date(0, 0, 0, hours, Number(minutes)).toISOString(),
	};
});

export const TimeSelect = (props: TimeSelectProps) => {
	return (
		<Select
			data={timeSelectionOptions}
			defaultValue={new Date(0, 0, 0, 9, 0).toISOString()}
			{...props}
		/>
	);
};
