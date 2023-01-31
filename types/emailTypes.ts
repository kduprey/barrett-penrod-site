import createHttpError from "http-errors";
import { NextApiRequest } from "next";
import * as yup from "yup";
import {
	PackageType,
	SessionLocation,
	SessionLocations,
	SessionType,
	SessionTypes,
} from "./types";

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

export const clientSchema: yup.SchemaOf<Required<Contact>> = yup
	.object()
	.shape({
		email: yup
			.string()
			.email("Client email must be a valid email address")
			.required("Client email is required"),
		name: yup.string().required("Client name is required."),
	})
	.defined()
	.required();

export interface ConsultationEmail
	extends Omit<Required<EmailData>, "bookingLocation" | "sessionType"> {}

export interface GuestEmails extends Omit<EmailData, "client"> {
	guests: Contact[];
}

export interface PackageConfirmationEmail extends EmailData {
	packageName: PackageType;
}

export interface firstTimeEmail extends EmailData {}
export interface singleEmail extends EmailData {}

export const emailDataSchema: yup.SchemaOf<EmailData> = yup.object({
	client: clientSchema,
	sessionType: yup
		.mixed<SessionType>()
		.oneOf([...SessionTypes])
		.defined(),
	bookingDate: yup
		.date()
		.required(
			"Booking date and time is required (e.g. 2022-06-26T14:00:00.000Z)"
		),
	bookingLocation: yup
		.mixed<SessionLocation>()
		.oneOf([...SessionLocations])
		.defined()
		.required(),
	zoomLink: yup
		.string()
		.url(
			"Please enter a valid Zoom link (e.g. https://us06web.zoom.us/j/xxxxxx)"
		),
});

export const validateBookingDate = (req: NextApiRequest): Date => {
	if (!req.body.bookingDate) {
		throw new createHttpError.BadRequest("Booking date is required");
	}

	const date = new Date(req.body.bookingDate);
	if (isNaN(date.getTime())) {
		throw new createHttpError.BadRequest(
			`"${req.body.bookingDate}" is not a valid date string`
		);
	}
	return date;
};
