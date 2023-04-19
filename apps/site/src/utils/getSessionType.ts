import { CalendlyEvent } from "types/calendlyTypes";
import { SessionType, SessionTypes } from "types/types";

const getSessionType = (bookingName: CalendlyEvent): SessionType => {
	if (bookingName.resource.name.includes("Trial Session"))
		return bookingName.resource.name === "Trial Session"
			? "Trial Session"
			: "Trial Session - SVS";

	const sessionType = bookingName.resource.name.substring(
		0,
		bookingName.resource.name.indexOf("-") - 1
	);

	switch (sessionType) {
		case SessionTypes[0]:
			return SessionTypes[0];
		case SessionTypes[1]:
			return SessionTypes[1];
		case SessionTypes[2]:
			return SessionTypes[2];
		case SessionTypes[3]:
			return SessionTypes[3];
		default:
			throw new Error("Invalid session type");
	}
};

export default getSessionType;
