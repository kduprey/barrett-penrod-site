import { CalendlyInvitee } from "types/types";

export const getInviteeResponse: CalendlyInvitee = {
	resource: {
		cancel_url: "https://calendly.com/cancellations/fake",
		created_at: "2022-09-17T20:08:21.045866Z",
		email: "kdtech18@gmail.com",
		event: "https://api.calendly.com/scheduled_events/fake",
		first_name: null,
		last_name: null,
		name: "Unit Test",
		new_invitee: null,
		no_show: null,
		old_invitee: null,
		payment: null,
		questions_and_answers: [
			{
				answer: "No",
				position: 1,
				question: "Is this your first lesson with Barrett?",
			},
		],
		reconfirmation: null,
		reschedule_url: "https://calendly.com/reschedulings/fake",
		rescheduled: false,
		routing_form_submission: null,
		status: "active",
		text_reminder_number: null,
		timezone: "America/New_York",
		tracking: {
			utm_campaign: null,
			utm_source: null,
			utm_medium: null,
			utm_content: null,
			utm_term: null,
			salesforce_uuid: null,
		},
		updated_at: "2022-09-17T20:08:21.045866Z",
		uri: "https://api.calendly.com/scheduled_events/fake/invitees/fake",
	},
};
