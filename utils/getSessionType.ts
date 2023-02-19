import { CalendlyEvent } from "types/calendlyTypes";
import { SessionType, SessionTypes } from "types/types";

const getSessionType = (bookingName: CalendlyEvent): SessionType => {
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
