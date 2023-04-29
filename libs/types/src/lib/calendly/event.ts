export interface CalendlyEvent {
	resource: CalendlyEventResource;
}

export interface CalendlyEventResource {
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

export interface CalendarEvent {
	external_id: string;
	kind: string;
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
	data?: ZoomLocationData;
	join_url: string;
	status: "initiated" | "processing" | "failed" | "pushed";
	type: "zoom_conference" | "zoom";
}

export interface ZoomLocationData {
	id?: number;
	settings?: ZoomLocationSettings;
	password?: string;
	extra?: ZoomExtraData | null;
}

export interface ZoomExtraData {
	intl_numbers_url?: string;
}

export interface GlobalDialInNumber {
	number?: string;
	type?: string;
	country?: string;
	city?: string;
	country_name?: string;
}

export interface ZoomLocationSettings {
	global_dial_in_numbers?: GlobalDialInNumber[];
}
