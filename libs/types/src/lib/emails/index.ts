import { PackageType, SessionLocation, SessionType } from "../..";

export interface Contact {
	email: string;
	name?: string;
}

export interface PackageEmailTemplateData {
	packageName: string;
	bookingDate: string;
	bookingTime: string;
	bookingLocation: string;
	zoomLink?: string;
}

export interface EmailTemplateData {
	bookingDate: string;
	bookingTime: string;
	bookingName: string;
	zoomLink?: string;
}

export interface EmailData {
	client: Required<Contact>;
	sessionType: SessionType;
	bookingDate: Date;
	bookingLocation: SessionLocation;
	zoomLink?: string;
}

export type ConsultationEmail = Omit<
	Required<EmailData>,
	"bookingLocation" | "sessionType"
>;

export interface GuestEmails extends Omit<EmailData, "client"> {
	guests: Contact[];
}

export interface PackageConfirmationEmail extends EmailData {
	packageName: PackageType;
}

export type FirstTimeEmail = EmailData;
export type SingleEmail = EmailData;
