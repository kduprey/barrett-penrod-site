import { GCalList } from "./GCalList";
import { GCalSettingsWidget } from "./GCalSettingsWidget";
import { getGCalList } from "./actions";

export const GCalWidget = async () => {
	const gCals = await getGCalList();

	if (!gCals) return <GCalSettingsWidget />;

	return (
		<GCalList
			{...{
				gCals,
			}}
		/>
	);
};
