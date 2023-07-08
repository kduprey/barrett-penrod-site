import { Prisma } from "@bpvs/db";

export const dbCalendlyEventPayloads: Prisma.calendlyInviteePayloadsCreateInput[] =
  [
    {
      cancel_url:
        "https://calendly.com/cancellations/54654654-7bbb-4994-91aa-bae8a8220d54",
      created_at: "2023-06-23T18:12:02.654925Z",
      email: "test@email.com",
      event:
        "https://api.calendly.com/scheduled_events/165132121-1516-4a74-8c98-716cdc5884f7",
      first_name: null,
      last_name: null,
      name: "Test User",
      new_invitee: null,
      no_show: null,
      old_invitee: null,
      payment: null,
      questions_and_answers: [
        {
          answer: "test answer",
          position: 0,
          question:
            "Please share anything that will help prepare for our meeting.",
        },
      ],
      reconfirmation: null,
      reschedule_url:
        "https://calendly.com/reschedulings/54654654-7bbb-4994-91aa-bae8a8220d54",
      rescheduled: false,
      routing_form_submission: null,
      scheduled_event: {
        created_at: "2023-06-23T18:12:02.631171Z",
        end_time: "2023-06-24T19:00:00.000000Z",
        event_guests: [],
        event_memberships: [
          {
            user: "https://api.calendly.com/users/b5dadba5-411b-477e-b080-7b06e7072ee4",
            user_email: "test@email.com",
          },
        ],
        event_type:
          "https://api.calendly.com/event_types/7b5119f7-3cde-4746-8115-feaf467336df",
        invitees_counter: {
          active: 1,
          limit: 1,
          total: 1,
        },
        location: {
          data: {
            extra: {
              intl_numbers_url: "https://us06web.zoom.us/u/1321546545",
            },
            id: 56465465123,
            settings: {
              global_dial_in_numbers: [
                {
                  city: "Chicago",
                  country: "US",
                  country_name: "US",
                  number: "+1 312 626 6799",
                  type: "toll",
                },
                {
                  city: "New York",
                  country: "US",
                  country_name: "US",
                  number: "+1 646 558 8656",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 646 931 3860",
                  type: "toll",
                },
                {
                  city: "Washington DC",
                  country: "US",
                  country_name: "US",
                  number: "+1 301 715 8592",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 305 224 1968",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 309 205 3325",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 669 444 9171",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 689 278 1000",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 719 359 4580",
                  type: "toll",
                },
                {
                  city: "Denver",
                  country: "US",
                  country_name: "US",
                  number: "+1 720 707 2699",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 253 205 0468",
                  type: "toll",
                },
                {
                  city: "Tacoma",
                  country: "US",
                  country_name: "US",
                  number: "+1 253 215 8782",
                  type: "toll",
                },
                {
                  city: "Houston",
                  country: "US",
                  country_name: "US",
                  number: "+1 346 248 7799",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 360 209 5623",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 386 347 5053",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 507 473 4847",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 564 217 2000",
                  type: "toll",
                },
              ],
            },
          },
          join_url: "https://us06web.zoom.us/j/56465465123",
          status: "pushed",
          type: "zoom",
        },
        name: "Consultation Session",
        start_time: "2023-06-24T18:30:00.000000Z",
        status: "active",
        updated_at: "2023-06-23T18:12:02.631171Z",
        uri: "https://api.calendly.com/scheduled_events/165132121-1516-4a74-8c98-716cdc5884f7",
      },
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
      updated_at: "2023-06-23T18:12:02.654925Z",
      uri: "https://api.calendly.com/scheduled_events/3d344a74-9b56-4bb4-8607-d07a35ac46bc/invitees/26a90396-f48e-42b6-9cd5-78eb341b9737",
    },
    {
      cancel_url:
        "https://calendly.com/cancellations/54654654-7bbb-4994-91aa-bae8a8220d54",
      created_at: "2023-06-23T18:12:02.654925Z",
      email: "test@email.com",
      event:
        "https://api.calendly.com/scheduled_events/165132121-1516-4a74-8c98-716cdc5884f7",
      first_name: null,
      last_name: null,
      name: "Marion Wolfe",
      new_invitee: null,
      no_show: null,
      old_invitee: null,
      payment: null,
      questions_and_answers: [
        {
          answer: "test answer",
          position: 0,
          question:
            "Please share anything that will help prepare for our meeting.",
        },
      ],
      reconfirmation: null,
      reschedule_url:
        "https://calendly.com/reschedulings/54654654-7bbb-4994-91aa-bae8a8220d54",
      rescheduled: false,
      routing_form_submission: null,
      scheduled_event: {
        created_at: "2023-06-23T18:12:02.631171Z",
        end_time: "2023-06-24T19:00:00.000000Z",
        event_guests: [],
        event_memberships: [
          {
            user: "https://api.calendly.com/users/b5dadba5-411b-477e-b080-7b06e7072ee4",
            user_email: "test@icloud.com",
          },
        ],
        event_type:
          "https://api.calendly.com/event_types/7b5119f7-3cde-4746-8115-feaf467336df",
        invitees_counter: {
          active: 1,
          limit: 1,
          total: 1,
        },
        location: {
          data: {
            extra: {
              intl_numbers_url: "https://us06web.zoom.us/u/1321546545",
            },
            id: 56465465123,
            settings: {
              global_dial_in_numbers: [
                {
                  city: "Chicago",
                  country: "US",
                  country_name: "US",
                  number: "+1 312 626 6799",
                  type: "toll",
                },
                {
                  city: "New York",
                  country: "US",
                  country_name: "US",
                  number: "+1 646 558 8656",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 646 931 3860",
                  type: "toll",
                },
                {
                  city: "Washington DC",
                  country: "US",
                  country_name: "US",
                  number: "+1 301 715 8592",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 305 224 1968",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 309 205 3325",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 669 444 9171",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 689 278 1000",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 719 359 4580",
                  type: "toll",
                },
                {
                  city: "Denver",
                  country: "US",
                  country_name: "US",
                  number: "+1 720 707 2699",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 253 205 0468",
                  type: "toll",
                },
                {
                  city: "Tacoma",
                  country: "US",
                  country_name: "US",
                  number: "+1 253 215 8782",
                  type: "toll",
                },
                {
                  city: "Houston",
                  country: "US",
                  country_name: "US",
                  number: "+1 346 248 7799",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 360 209 5623",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 386 347 5053",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 507 473 4847",
                  type: "toll",
                },
                {
                  country: "US",
                  country_name: "US",
                  number: "+1 564 217 2000",
                  type: "toll",
                },
              ],
            },
          },
          join_url: "https://us06web.zoom.us/j/56465465123",
          status: "pushed",
          type: "zoom",
        },
        name: "Consultation Session",
        start_time: "2023-06-24T18:30:00.000000Z",
        status: "active",
        updated_at: "2023-06-23T18:12:02.631171Z",
        uri: "https://api.calendly.com/scheduled_events/165132121-1516-4a74-8c98-716cdc5884f7",
      },
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
      updated_at: "2023-06-23T18:12:02.654925Z",
      uri: "https://api.calendly.com/scheduled_events/165132121-1516-4a74-8c98-716cdc5884f7/invitees/54654654-7bbb-4994-91aa-bae8a8220d54",
    },
  ];
