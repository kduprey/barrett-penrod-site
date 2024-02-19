import { ZoomAccountWidget } from "./ZoomAccountWidget/ZoomAccountWidget";
import { ZoomSettingsWidget } from "./ZoomSettingsWidget/ZoomSettingsWidget";
import { getZoomInfo } from "./actions";

export const ZoomWidget = async () => {
	const userData = await getZoomInfo();

	if (!userData) return <ZoomSettingsWidget />;

	return <ZoomAccountWidget {...{ userData }} />;
};
