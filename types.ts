import type { ReactElement, ReactNode } from "react";
import type {
	NextPage,
	InferGetServerSidePropsType,
	GetServerSideProps,
} from "next";
import type { AppProps } from "next/app";
import { ObjectId } from "mongodb";
import Stripe from "stripe";

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

export interface Service {
	name: string;
	id: string;
	price: number;
	deposit: number;
	description: string;
	calendarLink: string;
}

export interface TemplateMessage {
	from: Contact;
	reply_to?: Contact;
	personalizations: TemplatePersonalization[];
	template_id: string;
}

export interface Content {
	type: string;
	value: string;
}

export interface Contact {
	email: string;
	name?: string;
}

export interface TemplatePersonalization {
	to?: Contact[];
	cc?: Contact[];
	bcc?: Contact[];
	from?: Contact;
	dynamic_template_data: GuestAttendeeTemplateData | PackageTemplateData;
	send_at?: number;
	custom_args?: {
		[key: string]: string;
	};
	headers?: {
		[key: string]: string;
	};
	subject?: string;
}

export interface GuestAttendeeTemplateData {
	bookingTime: string;
	bookingDate: string;
	bookingName: string;
}

export interface PackageTemplateData extends EmailLocationData {
	bulkSessionDiscountPackage: string;
	dateOfFirstSession: string;
	bookingTime: string;
	bookingDate: string;
	bookingLocation: string;
}

export interface EmailLocationData {
	zoomLink?: string;
}

export interface GuestBody {
	guests: Contact[];
	eventStartTime: string;
	eventTypeName: string;
}

export interface EventType {
	active: boolean;
	bookingMethod: string;
	color: string;
	createdAt: Date;
	customQuestions: CustomQuestion[];
	deletedAt: null;
	descriptionHTML: string;
	descriptionPlain: string;
	duration: number;
	internalNote: null;
	kind: string;
	name: string;
	poolingType: null;
	profile: Profile;
	schedulingURL: string;
	secret: boolean;
	slug: string;
	type: string;
	updatedAt: Date;
	uri: string;
}

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

export interface ClientInfo {
	_id?: ObjectId;
	activeMember: boolean;
	email: string;
	lessonsRemaining: number;
	name: string;
	paymentCount: number;
	preferredLessonFormat: string;
	refundedVolume: number;
	totalLessons: number;
	totalSpend: number;
	stripe_cus_id?: string;
	lastLesson: Date;
	firstLesson: Date;
}

export interface LessonType {
	active: boolean;
	booking_method: string;
	color: string;
	created_at: Date;
	custom_questions: Array<string[]>;
	deleted_at: null;
	description_html: string;
	description_plain: string;
	duration: number;
	internal_note: null;
	kind: string;
	name: string;
	pooling_type: null;
	profile: Profile;
	scheduling_url: string;
	secret: boolean;
	slug: string;
	type: string;
	updated_at: Date;
	uri: string;
}

export interface Profile {
	name: string;
	owner: string;
	type: string;
}

export interface LessonBundle {
	amtSessions: number;
	title: string;
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

export interface stripeCustomer {
	_id?: ObjectId;
	id: string;
	object: string;
	address: Address;
	balance: number;
	created: number;
	currency: null;
	default_source: null;
	delinquent: boolean;
	description: null;
	discount: null;
	email: string;
	invoice_prefix: string;
	invoice_settings: InvoiceSettings;
	livemode: boolean;
	metadata: Metadata;
	name: string;
	next_invoice_sequence: number;
	phone: string;
	preferred_locales: string[];
	shipping: null;
	tax_exempt: string;
	test_clock: null;
}

export interface Address {
	city: string;
	country: string;
	line1: string;
	line2: null;
	postal_code: string;
	state: string;
}

export interface InvoiceSettings {
	custom_fields: null;
	default_payment_method: string;
	footer: null;
	rendering_options: null;
}

export interface Metadata {
	"Lessons Remaining": string;
	"Last Lesson": string;
	"Total Lessons": string;
	"Preferred Lesson Format": string;
	"Active Member": string;
}

export interface BookingInfo {
	_id?: ObjectId;
	answer_1?: string;
	answer_2?: string;
	assigned_to: string;
	event_end_time: Date;
	event_start_time: Date;
	event_type_name: string;
	event_type_uuid: string;
	"guests[]"?: string[];
	invitee_email: string;
	invitee_full_name: string;
	invitee_uuid: string;
}

export interface CalendlyEvent {
	resource: EventResource;
}

export interface EventResource {
	created_at: Date;
	end_time: Date;
	event_guests: Guest[];
	event_memberships: EventMembership[];
	event_type: string;
	invitees_counter: InviteesCounter;
	location: ZoomLocation | InPersonLocation;
	name: string;
	start_time: Date;
	status: string;
	updated_at: Date;
	uri: string;
	cancellation?: Cancellation;
}

export interface Cancellation {
	cancelled_by: string;
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
	type: string;
	location: string;
}

export interface ZoomLocation {
	data?: LocationData;
	join_url: string;
	status: string;
	type: string;
}

export interface LocationData {
	id: number;
	settings: Settings;
	password: string;
	extra: ExtraData;
}

export interface ExtraData {
	intl_numbers_url: string;
}

export interface GlobalDialInNumber {
	number: string;
	type: string;
	country: string;
	city: string;
	country_name: string;
}

export interface Settings {
	global_dial_in_numbers: GlobalDialInNumber[];
}

export interface CalendlyEventInvitee {
	resource: InviteeResource;
}

export interface InviteeResource {
	cancel_url: string;
	created_at: Date;
	email: string;
	event: string;
	first_name: string | null;
	last_name: string | null;
	name: string;
	new_invitee: string | null;
	no_show: NoShow | null;
	old_invitee: string | null;
	payment: Payment | null;
	questions_and_answers: QuestionsAndAnswer[];
	reconfirmation: Reconfirmation | null;
	reschedule_url: string;
	rescheduled: boolean;
	routing_form_submission: string | null;
	status: "active" | "cancelled";
	text_reminder_number: string | null;
	timezone: string;
	tracking: Tracking;
	updated_at: Date;
	uri: string;
	cancellation?: Cancellation;
}

export interface Reconfirmation {
	created_at: Date;
	confirmed_at: Date;
}

export interface NoShow {
	uri: string;
	created_at: Date;
}

export interface Payment {
	external_id: string;
	provider: "stripe" | "paypal";
	amount: number;
	currency: string;
	terms: string;
	successful: boolean;
}

export interface QuestionsAndAnswer {
	question: string;
	answer: string;
	position: "1" | "2";
}

export interface Tracking {
	utm_campaign: string | null;
	utm_source: string | null;
	utm_medium: string | null;
	utm_content: string | null;
	utm_term: string | null;
	salesforce_uuid: string | null;
}
