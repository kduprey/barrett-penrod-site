import { GCalList } from "./GCalList";
import { GCalSettingsWidget } from "./GCalSettingsWidget";
import { getConnectedCalendars, getGCalList } from "./actions";

export const GCalWidget = async () => {
	const cals = await getConnectedCalendars();
	const gCals = await getGCalList();

	if (!gCals) return <GCalSettingsWidget />;

	return (
		<GCalList
			{...{
				cals,
				gCals,
			}}
		/>
	);
};
