import { Switch } from "@mantine/core";

interface CalendarSwitchProps {
	id: string;
	name: string;
}

export const CalendarSwitch = ({ name, id }: CalendarSwitchProps) => {
	return <Switch key={name} label={name} value={id} />;
};
