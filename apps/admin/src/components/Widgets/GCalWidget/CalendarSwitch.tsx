import type { SwitchProps } from "@mantine/core";
import { Switch } from "@mantine/core";

interface CalendarSwitchProps extends SwitchProps {
	id: string;
	name: string;
}

export const CalendarSwitch = ({ name, id, ...props }: CalendarSwitchProps) => {
	return <Switch key={name} label={name} value={id} {...props} />;
};
