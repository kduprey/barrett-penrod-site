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
