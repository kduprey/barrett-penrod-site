import type { ReactElement, ReactNode } from "react";
import type {
	NextPage,
	InferGetServerSidePropsType,
	GetServerSideProps,
} from "next";
import type { AppProps } from "next/app";

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
	dynamic_template_data: GuestAttendeeTemplateData;
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

export interface GuestBody {
	session_id: string;
	guests: string;
	eventStartTime: string;
	eventEndTime: string;
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
	Name: string;
	Email: string;
	"Total Spend": number;
	"Payment Count": number;
	"Refunded Volume": number;
	"Lessons Remaining": number;
	"Last Lesson": Date;
	"Total Lessons": number;
	"Preferred Lesson Format": string;
	"Start Date with Studio": Date;
	"Active Member": boolean;
	stripe_cus_id: string;
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

export interface LessonPackage {
	title: string;
	discount: string;
	price: string;
}
