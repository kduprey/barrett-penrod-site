import type { TimeFormat } from "../timeFormat";

export interface PaymentInfo {
	link?: string;
	amount?: number;
	paymentOption?: string;
	id?: string;
	reason?: string;
}

export interface Person {
	name: string;
	email: string;
	timeZone: string;
	userName?: string;
	id?: string;
	bookingId?: number;
	locale?: string;
	timeFormat?: TimeFormat;
}

export interface CalendarEvent {
	title: string;
	event_id: string;
	start_time: Date;
	end_time: Date;
	user_id: string;
	attendees: Person[];
	description: string;
}
