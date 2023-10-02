import { z } from "zod";

export const googleCredentialSchema = z.object({
	scope: z.string(),
	token_type: z.literal("Bearer"),
	expiry_date: z.number(),
	access_token: z.string(),
	refresh_token: z.string(),
});

const minimumTokenResponseSchema = z.object({
	access_token: z.string(),
	//   Assume that any property with a number is the expiry
	// eslint-disable-next-line @typescript-eslint/no-base-to-string -- This is a zod method
	[z.string().toString()]: z.number(),
	//   Allow other properties in the token response
	// eslint-disable-next-line @typescript-eslint/no-base-to-string -- This is a zod method
	[z.string().optional().toString()]: z.unknown().optional(),
});

export type ParseRefreshTokenResponse<S extends z.ZodTypeAny> =
	| z.infer<S>
	| z.infer<typeof minimumTokenResponseSchema>;

export const parseRefreshTokenResponse = (response: unknown) => {
	const data = googleCredentialSchema.safeParse(response);

	if (!data.success) {
		throw new Error("Invalid refreshed tokens were returned");
	}

	return {
		...data.data,
		expiresAt: new Date(Date.now() + data.data.expiry_date),
	};
};
