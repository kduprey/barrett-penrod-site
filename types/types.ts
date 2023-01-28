import type {
	GetServerSideProps,
	InferGetServerSidePropsType,
	NextPage,
} from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import Stripe from "stripe";

export const SessionLocations = [
	"Location Chosen By Client",
	"Open Jar",
	"Home Studio",
	"Virtual",
] as const;

export type SessionLocation = (typeof SessionLocations)[number];

export const SessionTypes = [
	"Voice Lesson",
	"Voice Coaching",
	"SVS Session",
	"Audition Coaching",
] as const;

export type SessionType = (typeof SessionTypes)[number];

export const PackageTypes = [
	"4 Session Package",
	"6 Session Package",
	"8 Session Package",
	"12 Session Package",
] as const;

export type PackageType = (typeof PackageTypes)[number];

export interface Service {
	title: SessionType;
	description: string;
	locations: SessionLocation[];
	url: string[];
}
export interface Page {
	name: string;
	id: string;
	path: string;
	scrollTo: boolean;
}

export interface NavMenu {
	name: string;
	path?: string;
	sublinks?: Page[];
}

export type NextPageWithLayout =
	| (NextPage & {
			getLayout?: (page: ReactElement) => ReactNode;
	  })
	| (InferGetServerSidePropsType<GetServerSideProps> & {
			getLayout?: (page: ReactElement) => ReactNode;
	  });

export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export interface CustomQuestion {
	answerChoices: string[];
	enabled: boolean;
	includeOther: boolean;
	name: string;
	position: number;
	required: boolean;
	type: string;
}

export interface Profile {
	name: string;
	owner: string;
	type: string;
}

export interface LessonBundle {
	amtSessions: number;
	title: PackageType;
	discount: string;
	price: string;
	priceID: {
		test: Stripe.Checkout.SessionCreateParams.LineItem;
		live: Stripe.Checkout.SessionCreateParams.LineItem;
	};
}

export interface Price {
	name: "SVS Session" | "Regular Session" | "Open Jar Booking Fee";
	priceID: {
		live: Stripe.Checkout.SessionCreateParams.LineItem;
		test: Stripe.Checkout.SessionCreateParams.LineItem;
	};
}

export interface CalendarEvent {
	external_id: string;
	kind: string;
}

export interface CalendlyEvent {
	calendar_event: CalendarEvent;
	created_at: string;
	end_time: string;
	event_guests: Guest[];
	event_memberships: EventMembership[];
	event_type: string;
	invitees_counter: InviteesCounter;
	location: ZoomLocation | InPersonLocation;
	name: string;
	start_time: string;
	status: string;
	updated_at: string;
	uri: string;
	cancellation?: Cancellation;
}

export interface Cancellation {
	canceled_by: string;
	reason: string;
	canceler_type: "host" | "invitee";
}

export interface Guest {
	email: string;
	created_at: string;
	updated_at: string;
}

export interface EventMembership {
	user: string;
}

export interface InviteesCounter {
	active: number;
	limit: number;
	total: number;
}

export interface InPersonLocation {
	type: "physical";
	location: string;
}

export interface ZoomLocation {
	data?: LocationData;
	join_url: string;
	status: "initiated" | "processing" | "failed" | "pushed";
	type: "zoom_conference" | "zoom";
}

export interface LocationData {
	id?: number;
	settings?: Settings;
	password?: string;
	extra?: ExtraData | null;
}

export interface ExtraData {
	intl_numbers_url?: string;
}

export interface GlobalDialInNumber {
	number?: string;
	type?: string;
	country?: string;
	city?: string;
	country_name?: string;
}

export interface Settings {
	global_dial_in_numbers?: GlobalDialInNumber[];
}

export interface CalendlyInvitee {
	resource: Invitee;
}

export interface Invitee {
	cancel_url: string;
	created_at: string;
	email: string;
	event: string;
	first_name: string | null;
	last_name: string | null;
	name: string;
	new_invitee: string | null;
	no_show: NoShow | null;
	old_invitee: string | null;
	payment: Payment | null;
	questions_and_answers: Array<FirstLessonQuestion | AdditionalInfoQuestion>;
	reconfirmation: Reconfirmation | null;
	reschedule_url: string;
	rescheduled: boolean;
	routing_form_submission: string | null;
	status: "active" | "cancelled";
	text_reminder_number: string | null;
	timezone: string;
	tracking: Tracking;
	updated_at: string;
	uri: string;
	cancellation?: Cancellation;
}

export interface Reconfirmation {
	created_at: string;
	confirmed_at: string;
}

export interface NoShow {
	uri: string;
	created_at: string;
}

export interface Payment {
	external_id: string;
	provider: "stripe" | "paypal";
	amount: number;
	currency: string;
	terms: string;
	successful: boolean;
}

export interface FirstLessonQuestion {
	question: "Is this your first lesson with Barrett?";
	answer: "Yes" | "No";
	position: number;
}

export interface AdditionalInfoQuestion {
	question: "Please share anything that will help prepare for our meeting.";
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
