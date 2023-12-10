import { ZoomAccountWidget } from "./ZoomAccountWidget";
import { ZoomSettingsWidget } from "./ZoomSettingsWidget";
import { getZoomInfo } from "./actions";

export const ZoomWidget = async () => {
	const userData = await getZoomInfo();

	if (!userData) return <ZoomSettingsWidget />;

	return <ZoomAccountWidget {...{ userData }} />;
};
