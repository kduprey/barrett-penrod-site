import { CalendlyEvent, SessionType } from "@bpvs/types";
import { SessionTypeEnum } from "@bpvs/validation";

export const getSessionTypeFromCalendlyEvent = (
	bookingName: CalendlyEvent
): SessionType => {
	if (bookingName.resource.name.includes("Trial Session"))
		return bookingName.resource.name === "Trial Session"
			? "Trial Session"
			: "Trial Session - SVS";

	const sessionType = bookingName.resource.name.substring(
		0,
		bookingName.resource.name.indexOf("-") - 1
	);

	return SessionTypeEnum.parse(sessionType);
};
