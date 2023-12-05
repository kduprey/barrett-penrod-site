import { trytm } from "@bdsqqq/try";
import { prisma } from "@bpvs/db";
import type { AxiosResponse } from "axios";
import axios, { isAxiosError } from "axios";
import { z } from "zod";

const getZoomAppKeys = () => {
	return {
		clientId: process.env.ZOOM_CLIENT_ID,
		clientSecret: process.env.ZOOM_CLIENT_SECRET,
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
