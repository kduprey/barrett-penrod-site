import { SessionLocation, SessionLocations } from "types/types";
import { CalendlyEvent } from "../types/calendlyTypes";

const testResponses: CalendlyEvent[] = [
	{
		resource: {
			calendar_event: {
				external_id: "dg8us3c7enm096o92c2sddlefs",
				kind: "google",
			},
			cancellation: {
				canceler_type: "invitee",
				canceled_by: "Nick Breen",
				reason: "Mixed up my class time 😩",
			},
			created_at: "2022-08-18T13:42:44.657347Z",
			end_time: "2022-09-01T18:30:00.000000Z",
			event_guests: [],
			event_memberships: [
				{
					user: "https://api.calendly.com/users/b5dadba5-411b-477e-b080-7b06e7072ee4",
				},
			],
			event_type:
				"https://api.calendly.com/event_types/7d5f59cc-04e8-4e2b-b2a5-dc3213ba3162",
			invitees_counter: {
				active: 0,
				limit: 1,
				total: 1,
			},
			location: {
				location:
					"Open Jar Studios, 1601 Broadway 11th floor, New York, NY 10019",
				type: "physical",
			},
			name: "Voice Lesson - Open Jar",
			start_time: "2022-09-01T17:30:00.000000Z",
			status: "canceled",
			updated_at: "2022-08-18T13:58:07.611554Z",
			uri: "https://api.calendly.com/scheduled_events/3d344a74-9b56-4bb4-8607-d07a35ac46bc",
		},
	},
	{
		resource: {
			calendar_event: {
				external_id: "l6fesf3djmp4nmifdk66elqf3o",
				kind: "google",
			},
			created_at: "2022-07-01T23:14:52.235281Z",
			end_time: "2022-07-03T14:00:00.000000Z",
			event_guests: [],
			event_memberships: [
				{
					user: "https://api.calendly.com/users/b5dadba5-411b-477e-b080-7b06e7072ee4",
				},
			],
			event_type:
				"https://api.calendly.com/event_types/71e3dfdc-0750-4bb7-806a-60b8862df055",
			invitees_counter: {
				active: 1,
				limit: 1,
				total: 1,
			},
			location: {
				data: {
					id: 89142875352,
					settings: {},
					password: "w2D80G",
					extra: null,
				},
				join_url:
					"https://us05web.zoom.us/j/89142875352?pwd=VFA0dXUyTEN0M2JOSktIQXRXZUxiUT09",
				status: "pushed",
				type: "zoom",
			},
			name: "Voice Lesson - Virtual",
			start_time: "2022-07-03T13:00:00.000000Z",
			status: "active",
			updated_at: "2022-07-01T23:14:53.462176Z",
			uri: "https://api.calendly.com/scheduled_events/0dc39bdf-a806-4ac0-a0e9-bdd9ddaa8a93",
		},
	},
];

const getBookingLocation = (bookingData: CalendlyEvent): SessionLocation => {
	const locationData = bookingData.resource.name.substring(
		bookingData.resource.name.indexOf("-") + 2
	);

	switch (locationData) {
		case "Location Chosen By Client":
			return SessionLocations[0];
		case "Open Jar":
			return SessionLocations[1];
		case "Home Studio":
			return SessionLocations[2];
		case "Virtual":
			return SessionLocations[3];
		default:
			throw new Error("Invalid location");
	}
};

export default getBookingLocation;

console.log(getBookingLocation(testResponses[0]));
console.log(getBookingLocation(testResponses[1]));
