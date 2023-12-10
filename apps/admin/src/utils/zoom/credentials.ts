import { trytm } from "@bdsqqq/try";
import { ADMIN_URL } from "@bpvs/config";
import { prisma } from "@bpvs/db";
import type { AxiosResponse, AxiosRequestConfig } from "axios";
import axios, { isAxiosError } from "axios";
import { z } from "zod";
import type { ZoomGetUserId } from "./schemas";

const getZoomAppKeys = () => {
	return {
		clientId: z.string().parse(process.env.ZOOM_CLIENT_ID),
		clientSecret: z.string().parse(process.env.ZOOM_CLIENT_SECRET),
		redirectUri: `${ADMIN_URL}/api/oauth/zoom/callback`,
	};
};

const zoomRefreshTokenResponseSchema = z.object({
	access_token: z.string(),
	token_type: z.string(),
	refresh_token: z.string(),
	expires_in: z.number(),
	scope: z.string(),
});

export type ZoomCredentials = z.infer<typeof zoomRefreshTokenResponseSchema>;

export type ZoomRefreshTokenResponse = z.infer<
	typeof zoomRefreshTokenResponseSchema
>;

export const decodeZoomCredentials = (
	keys: string | undefined
): ZoomCredentials =>
	zoomRefreshTokenResponseSchema.parse(
		JSON.parse(Buffer.from(`${keys}`, "base64").toString("utf-8"))
	);

export const encodeZoomCredentials = (keys: ZoomCredentials) =>
	Buffer.from(JSON.stringify(keys)).toString("base64");

export const getZoomCredentials = async () => {
	const data = await prisma.appKey.findUnique({
		where: {
			name: "zoom",
		},
	});

	if (!data || !data.isValid) return;
	return decodeZoomCredentials(data.keys);
};

export const zoomAuth = (credentials: ZoomCredentials) => {
	const refreshAccessToken = async (refreshToken: string) => {
		const { clientId, clientSecret } = getZoomAppKeys();
		const authHeader = `Basic ${Buffer.from(
			`${clientId}:${clientSecret}`
		).toString("base64")}`;

		const [res, err] = await trytm(
			axios.post<ZoomRefreshTokenResponse>(
				"https://zoom.us/oauth/token",
				new URLSearchParams({
					refresh_token: refreshToken,
					grant_type: "refresh_token",
				}),
				{
					headers: {
						Authorization: authHeader,
					},
				}
			)
		);
		const [responseBody, responseBodyError] = await trytm(
			handleZoomResponse<ZoomRefreshTokenResponse>(res, err)
		);

		if (responseBodyError?.message === "invalid_grant") {
			return Promise.reject(new Error("Invalid grant for zoom app"));
		}
		const newCredentials = zoomRefreshTokenResponseSchema.parse(responseBody);

		await prisma.appKey.update({
			where: {
				name: "zoom",
			},
			data: {
				keys: encodeZoomCredentials({
					...credentials,
					access_token: newCredentials.access_token,
					refresh_token: newCredentials.refresh_token,
					expires_in: newCredentials.expires_in,
				}),
			},
		});

		return newCredentials.access_token;
	};
	return {
		getToken: async () => {
			const {
				access_token: accessToken,
				refresh_token: refreshToken,
				expires_in: expiresIn,
			} = credentials;

			return expiresIn > Date.now()
				? Promise.resolve(accessToken)
				: refreshAccessToken(refreshToken);
		},
	};
};

export const zoomApi = (credential: ZoomCredentials) => {
	const fetchZoomApi = async <T>(
		endpoint: string,
		options?: AxiosRequestConfig
	) => {
		const auth = zoomAuth(credential);
		const token = await auth.getToken();
		const [res, err] = await trytm(
			axios.get<T>(`https://api.zoom.us/v2/${endpoint}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				...options,
			})
		);

		return handleZoomResponse<T>(res, err);
	};

	return {
		getAvailability: async () => {
			const response = await fetchZoomApi(
				"users/me/meetings?type=scheduled&page_size=300"
			);
			if (!response) return [];
			return response;
		},
		getZoomUser: async (): Promise<ZoomGetUserId | undefined> => {
			const response = await fetchZoomApi<ZoomGetUserId>("users/me");
			if (!response) return;
			return response;
		},
		deleteZoomConnection: async () => {
			const [_, err] = await trytm(invalidateZoomCredentials());
			if (err) return Promise.reject(err);
		},
	};
};

const handleZoomResponse = async <T>(
	res: AxiosResponse<T> | null,
	err: Error | null
) => {
	if (err) {
		if (isAxiosError<{ error?: string; [key: string]: unknown }>(err)) {
			if (
				err.response?.status === 124 ||
				err.response?.data.error === "invalid_grant"
			)
				await invalidateZoomCredentials();

			throw Error(err.response?.statusText);
		}
		throw err;
	}

	return res?.data;
};

const invalidateZoomCredentials = async () => {
	await prisma.appKey.delete({
		where: {
			name: "zoom",
		},
	});
};

export const getZoomRedirectUrl = (userId: string) => {
	const { clientId, redirectUri } = getZoomAppKeys();
	return `https://zoom.us/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${Buffer.from(
		userId
	).toString("base64")}`;
};

export const setZoomKeys = async (code: string): Promise<void> => {
	const [res, err] = await trytm(
		axios.post<ZoomRefreshTokenResponse>(
			"https://zoom.us/oauth/token",
			new URLSearchParams({
				code,
				grant_type: "authorization_code",
				redirect_uri: getZoomAppKeys().redirectUri,
			}),
			{
				headers: {
					Authorization: `Basic ${Buffer.from(
						`${getZoomAppKeys().clientId}:${getZoomAppKeys().clientSecret}`
					).toString("base64")}`,
				},
			}
		)
	);

	const [responseBody, responseBodyError] = await trytm(
		handleZoomResponse<ZoomRefreshTokenResponse>(res, err)
	);

	if (responseBodyError?.message === "invalid_grant") {
		return Promise.reject(new Error("Invalid grant for zoom app"));
	}
	if (!responseBody)
		return Promise.reject(new Error("Invalid Zoom token response"));

	await prisma.appKey.create({
		data: {
			name: "zoom",
			keys: encodeZoomCredentials(responseBody),
		},
	});
};
