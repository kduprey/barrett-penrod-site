import type { calendar_v3 } from "googleapis";
import { google } from "googleapis";
import type {
	Prisma,
	address,
	calendar_credential,
	client,
	event,
} from "@bpvs/db";
import { prisma } from "@bpvs/db";
import { googleCredentialSchema } from "@bpvs/validation";
import { z } from "zod";
import { logger } from "../logger";
import type { ParseRefreshTokenResponse } from "../oauth";
import { parseRefreshTokenResponse } from "../oauth";

const getGoogleAppKeys = async () => {
	const data = await prisma.app.findUnique({
		where: {
			slug: "google-calendar",
		},
	});
	const res = z
		.object({
			client_id: z.string(),
			client_secret: z.string(),
			redirect_uri: z.string(),
		})
		.safeParse(data);

	if (!res.success) {
		throw new Error("Invalid google app keys");
	}

	return res.data;
};

export class GoogleCalendarService {
	private integrationName = "";
	private auth: {
		getToken: () => Promise<MyGoogleAuth>;
	};
	private log: typeof logger;
	private credentials: calendar_credential;

	constructor(credentials: calendar_credential) {
		this.integrationName = "google_calendar";
		this.credentials = credentials;
		this.auth = this.googleAuth(credentials);
		this.log = logger.getSubLogger({
			prefix: [`[[lib] ${this.integrationName}`],
		});
	}

	private googleAuth = (crednetial: calendar_credential) => {
		const googleCredentials = googleCredentialSchema.parse(crednetial.value);

		const getGoogleAuth = async () => {
			const { client_id, client_secret, redirect_uri } =
				await getGoogleAppKeys();
			const myGoogleAuth = new MyGoogleAuth(
				client_id,
				client_secret,
				redirect_uri
			);
			myGoogleAuth.setCredentials(googleCredentials);
			return myGoogleAuth;
		};

		const refreshAccessToken = async (
			myGoogleAuth: Awaited<ReturnType<typeof getGoogleAuth>>
		) => {
			try {
				const res = await myGoogleAuth.refreshToken(
					googleCredentials.refresh_token
				);
				const data = googleCredentialSchema.safeParse(res);

				if (!data.success) {
					throw new Error("Invalid refreshed tokens were returned");
				}

				googleCredentials.access_token = data.data.access_token;
				googleCredentials.expiry_date = data.data.expiry_date;
				const parsedKey: ParseRefreshTokenResponse<
					typeof googleCredentialSchema
				> = parseRefreshTokenResponse(googleCredentials);
				await prisma.calendar_credential.update({
					where: { app_id: "google-calendar" },
					data: { value: { ...parsedKey } as Prisma.InputJsonValue },
				});
				myGoogleAuth.setCredentials(googleCredentials);
			} catch (err) {
				let message;
				if (err instanceof Error) message = err.message;
				else message = String(err);
				// if not invalid_grant, default behaviour (which admittedly isn't great)
				if (message !== "invalid_grant") return myGoogleAuth;
				// when the error is invalid grant, it's unrecoverable and the credential marked invalid.
				await prisma.calendar_credential.update({
					where: { app_id: "google-calendar" },
					data: {
						invalid: true,
					},
				});
			}
			return myGoogleAuth;
		};
		return {
			getToken: async () => {
				const myGoogleAuth = await getGoogleAuth();
				const isExpired = () => myGoogleAuth.isTokenExpiring();
				return !isExpired()
					? Promise.resolve(myGoogleAuth)
					: refreshAccessToken(myGoogleAuth);
			},
		};
	};

	private authedCalendar = async () => {
		const myGoogleAuth = await this.auth.getToken();
		return google.calendar({
			version: "v3",
			auth: myGoogleAuth,
		});
	};

	async createEvent(event: event) {
		const eventType = await prisma.event_type.findUniqueOrThrow({
			where: { id: event.event_id },
			select: {
				title: true,
				description: true,
				locations: {
					select: {
						address: true,
					},
				},
			},
		});
		const client = await prisma.event_seat.findUniqueOrThrow({
			where: { event_id: event.id },
			select: {
				client: true,
			},
		});

		const schedule = await prisma.schedule.findUniqueOrThrow({
			where: { event_type_id: event.event_id },
		});

		// TODO: implement recurring events

		const payload: calendar_v3.Schema$Event = {
			summary: eventType.title,
			description: eventType.description,
			start: {
				dateTime: event.start_time.toISOString(),
				timeZone: schedule.timezone,
			},
			end: {
				dateTime: event.end_time.toISOString(),
				timeZone: schedule.timezone,
			},
			attendees: [
				{
					displayName: client.client.name,
					email: client.client.email,
				},
			],
			reminders: {
				useDefault: true,
			},
			location: await getLocation(event),
		};

		const calendar = await this.authedCalendar();

		const res = await calendar.events.insert({
			calendarId: ,
			requestBody: payload,
		});

		return res.data;
	}
}

const buildAddress = (address: address) => {
	return `${address.street}, ${address.city}, ${address.state}, ${address.zip}`;
};

class MyGoogleAuth extends google.auth.OAuth2 {
	constructor(client_id: string, client_secret: string, redirect_uri: string) {
		super(client_id, client_secret, redirect_uri);
	}

	isTokenExpiring(): boolean {
		return super.isTokenExpiring();
	}

	async refreshToken(refresh_token: string | null | undefined) {
		return super.refreshToken(refresh_token);
	}
}

const getLocation = async (event: event) => {
	const location = await prisma.location.findUnique({
		where: { id: event.location_id },
		select: {
			address: true,
		},
	});

	if (location?.address) return buildAddress(location.address);
	// TODO: implement zoom integration
};
