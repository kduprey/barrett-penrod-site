import { prisma } from "@bpvs/db";
import { ADMIN_URL } from "@bpvs/config";
import { Auth, google } from "googleapis";
import { z } from "zod";

const gCalCredentialsSchema = z.object({
	access_token: z.string(),
	refresh_token: z.string(),
	scope: z.string(),
	token_type: z.string(),
	expiry_date: z.number(),
	id_token: z.string().optional(),
});

export type GCalCredentials = z.infer<typeof gCalCredentialsSchema>;

const getGoogleAppKeys = () => {
	return {
		clientId: z.string().parse(process.env.GOOGLE_OAUTH_CLIENT_ID),
		clientSecret: z.string().parse(process.env.GOOGLE_OAUTH_CLIENT_SECRET),
		redirectUri: `${ADMIN_URL}/api/oauth/google/callback`,
	};
};

export const decodeGCalCredentials = (
	keys: string | undefined
): GCalCredentials =>
	gCalCredentialsSchema.parse(
		JSON.parse(Buffer.from(`${keys}`, "base64").toString("utf-8"))
	);

export const encodeGCalCredentials = (keys: GCalCredentials) =>
	Buffer.from(JSON.stringify(keys)).toString("base64");

export const getGCalAppCredentials = async () => {
	const data = await prisma.appKey.findUnique({
		where: {
			name: "googleCal",
		},
	});

	if (!data || !data.isValid) return;
	return decodeGCalCredentials(data.keys);
};

export class GCal {
	private auth: { getToken: () => Promise<MyGoogleAuth> };
	private credential: GCalCredentials | undefined;

	constructor(credential: GCalCredentials) {
		this.credential = credential;
		this.auth = this.googleAuth(credential);
		this.credential = credential;
	}

	private googleAuth = (credential: GCalCredentials) => {
		const googleCredentials = credential;
		function getGoogleAuth() {
			const auth = new MyGoogleAuth(
				getGoogleAppKeys().clientId,
				getGoogleAppKeys().clientSecret,
				getGoogleAppKeys().redirectUri
			);
			auth.setCredentials(credential);
			return auth;
		}

		const refreshAccessToken = async (googleAuth: MyGoogleAuth) => {
			try {
				const keys = await googleAuth.refreshAccessToken();
				googleCredentials.access_token = z
					.string()
					.parse(keys.credentials.access_token);
				googleCredentials.expiry_date = z
					.number()
					.parse(keys.credentials.expiry_date);

				await prisma.appKey.update({
					where: {
						name: "googleCal",
					},
					data: {
						keys: encodeGCalCredentials(
							gCalCredentialsSchema.parse(keys.credentials)
						),
					},
				});
				googleAuth.setCredentials(googleCredentials);
			} catch (error) {
				let message;
				if (error instanceof Error) message = error.message;
				else message = String(error);
				if (message !== "invalid_grant") return googleAuth;
				await prisma.appKey.delete({
					where: {
						name: "googleCal",
					},
				});
			}
			return googleAuth;
		};
		return {
			getToken: async () => {
				const googleAuth = getGoogleAuth();
				if (googleAuth.isTokenExpiring()) {
					await refreshAccessToken(googleAuth);
				}
				return googleAuth;
			},
		};
	};

	private authedCalendar = async () => {
		const googleAuth = await this.auth.getToken();
		return google.calendar({
			version: "v3",
			auth: googleAuth,
		});
	};

	public getCalendarList = async () => {
		const calendar = await this.authedCalendar();
		const { data } = await calendar.calendarList.list();
		return data.items?.map((cal) => {
			return {
				id: cal.id ?? "No ID",
				name: cal.summary,
				primary: cal.primary ?? false,
				readOnly:
					cal.accessRole === "reader" || cal.accessRole === "freeBusyReader",
				email: cal.id,
				description: cal.description,
				timeZone: cal.timeZone,
			};
		});
	};

	public getPrimaryCalendarEvents = async () => {
		const calendar = await this.authedCalendar();
		const { data } = await calendar.events.list({
			calendarId: "primary",
			timeMin: new Date().toISOString(),
			singleEvents: true,
			orderBy: "startTime",
		});
		return data.items?.map((event) => {
			return {
				externalId: event.id ?? "No ID",
				name: event.summary,
				description: event.description,
				start: new Date(`${event.start?.dateTime}`),
				end: new Date(`${event.end?.dateTime}`),
				attendees: event.attendees?.map((attendee) => {
					return {
						email: attendee.email ?? "No Email",
						name: attendee.displayName ?? "No Name",
						organizer: attendee.organizer ?? false,
						self: attendee.self ?? false,
						responseStatus: attendee.responseStatus ?? "No Status",
					};
				}),
			};
		});
	};
}

class MyGoogleAuth extends Auth.OAuth2Client {
	isTokenExpiring() {
		return super.isTokenExpiring();
	}

	async refreshToken(token: string | null | undefined) {
		return super.refreshToken(token);
	}
}
