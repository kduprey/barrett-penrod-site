import { Cancellation } from "./event";

export interface CalendlyInvitee {
  resource: CalendlyInviteeResource;
}

export interface CalendlyInviteeResource {
  cancel_url: string;
  created_at: Date | string;
  email: string;
  event: string;
  first_name: string | null;
  last_name: string | null;
  name: string;
  new_invitee: string | null;
  no_show?: NoShow | null;
  old_invitee: string | null;
  payment?: Payment | null;
  questions_and_answers: Array<QuestionAndAnswer>;
  reconfirmation?: Reconfirmation | null;
  reschedule_url: string;
  rescheduled: boolean;
  routing_form_submission: string | null;
  status: "active" | "canceled";
  text_reminder_number: string | null;
  timezone: string | null;
  tracking: Tracking;
  updated_at: Date | string;
  uri: string;
  cancellation?: Cancellation;
}

export interface Reconfirmation {
  created_at: Date | string;
  confirmed_at: Date | string;
}

export interface NoShow {
  uri: string;
  created_at: Date | string;
}

export interface Payment {
  external_id: string;
  provider: "stripe" | "paypal";
  amount: number;
  currency: "AUD" | "CAD" | "EUR" | "GBP" | "USD";
  terms: string;
  successful: boolean;
}

export interface QuestionAndAnswer {
  question: string;
  answer?: string;
  position: number;
}

export interface Tracking {
  utm_campaign: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_content: string | null;
  utm_term: string | null;
  salesforce_uuid: string | null;
}

export interface CalendlyCancel {
  resource: {
    canceled_by: string;
    reason: string;
    canceler_type: "host" | "invitee";
  };
}
