import { Prisma } from "@bpvs/db";

export const dbCalendlyEventPayloads: Prisma.calendlyInviteePayloadsCreateInput[] =
	[
		{
			cancel_url:
				"https://calendly.com/cancellations/26a90396-f48e-42b6-9cd5-78eb341b9737",
			cancellation: null,
			created_at: new Date("2022-08-18T13:42:44.673Z"),
			email: "kdtech18@gmail.com",
			event: "https://api.calendly.com/scheduled_events/3d344a74-9b56-4bb4-8607-d07a35ac46bc",
			first_name: null,
			last_name: null,
			name: "Test User 2",
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
			reschedule_url:
				"https://calendly.com/reschedulings/26a90396-f48e-42b6-9cd5-78eb341b9737",
			rescheduled: false,
			routing_form_submission: null,
			status: "active",
			text_reminder_number: null,
			timezone: "America/New_York",
			tracking: {
				salesforce_uuid: null,
				utm_campaign: null,
				utm_content: null,
				utm_medium: null,
				utm_source: null,
				utm_term: null,
			},
			updated_at: new Date("2022-08-18T13:42:44.673Z"),
			uri: "https://api.calendly.com/scheduled_events/3d344a74-9b56-4bb4-8607-d07a35ac46bc/invitees/26a90396-f48e-42b6-9cd5-78eb341b9737",
		},
		{
			cancel_url:
				"https://calendly.com/cancellations/ce9cf428-4fe4-4cad-bb97-219dfb0dffc0",
			created_at: new Date(1674504258128),
			email: "rwjbarnes@gmail.com",
			event: "https://api.calendly.com/scheduled_events/458b6187-093c-43b4-a6d4-2c5bd0b1a913",
			first_name: null,
			last_name: null,
			name: "Robert Barnes Jr. ",
			new_invitee: null,
			no_show: null,
			old_invitee: null,
			payment: null,
			questions_and_answers: [
				{
					answer: "The start of the new year, ive been signed to a talent manager and I decided to defer from Stella Adler Studio Of acting to really take a leap of faith within my life and more importantly my career so now im on the search for voice and speech coach and acting coach. I saw your flyer at stella adler and i wanted to see if we are a fit. Thank you! \nRobert Barnes!",
					position: 0,
					question:
						"Please share anything that will help prepare for our meeting.",
				},
			],
			reconfirmation: null,
			reschedule_url:
				"https://calendly.com/reschedulings/ce9cf428-4fe4-4cad-bb97-219dfb0dffc0",
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
			updated_at: new Date(1674504258128),
			uri: "https://api.calendly.com/scheduled_events/458b6187-093c-43b4-a6d4-2c5bd0b1a913/invitees/ce9cf428-4fe4-4cad-bb97-219dfb0dffc0",
		},
	];
