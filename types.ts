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
	guests: string[];
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
