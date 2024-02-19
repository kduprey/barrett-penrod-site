"use server";

import { trytm } from "@bdsqqq/try";
import { stripe } from "@bpvs/config";
import { prisma } from "@bpvs/db";
import type Stripe from "stripe";
import { z } from "zod";

export const setStripeCredentials = async (stripeUserId: string) => {
	const data = await prisma.appKey.findUnique({
		where: {
			name: "stripe",
		},
	});

	if (!data) {
		await prisma.appKey.create({
			data: {
				name: "stripe",
				keys: Buffer.from(JSON.stringify({ stripeUserId }), "utf-8").toString(
					"base64"
				),
			},
		});
	} else {
		await prisma.appKey.update({
			where: {
				name: "stripe",
			},
			data: {
				keys: Buffer.from(JSON.stringify({ stripeUserId }), "utf-8").toString(
					"base64"
				),
			},
		});
	}
};

const stripeCredentialsSchema = z.object({
	access_token: z.string(),
	scope: z.string(),
	livemode: z.boolean(),
	token_type: z.string(),
	refresh_token: z.string(),
	stripe_user_id: z.string(),
	stripe_publishable_key: z.string(),
});

export const getStripeCredentials = async () => {
	const data = await prisma.appKey.findUnique({
		where: {
			name: "stripe",
		},
	});

	if (!data) return;
	return stripeCredentialsSchema.parse(
		JSON.parse(Buffer.from(data.keys, "base64").toString("utf-8"))
	);
};

export const getStripeAccountInfo = async () => {
	const credentials = await getStripeCredentials();
	if (!credentials) return;

	const [res, err] = await trytm(
		stripe.accounts.retrieve(credentials.stripe_user_id)
	);

	if (err) {
		console.error(err);
	}

	return res;
};

export const setStripeKeys = async (oAuthToken: Stripe.OAuthToken) => {
	const [res, err] = await trytm(
		prisma.appKey.create({
			data: {
				name: "stripe",
				keys: Buffer.from(JSON.stringify({ ...oAuthToken }), "utf-8").toString(
					"base64"
				),
			},
		})
	);

	if (err) {
		console.error(err);
	}

	return res;
};

export const deleteStripeKeys = async () => {
	const credentials = await getStripeCredentials();
	if (!credentials) return;

	const [stripeRes, stripeErr] = await trytm(
		stripe.oauth.deauthorize({
			client_id: process.env.STRIPE_CONNECT_CLIENT_ID as string,
			stripe_user_id: credentials.stripe_user_id,
		})
	);

	if (stripeErr) {
		console.error(stripeErr);
	}

	if (!stripeRes) return;

	const [res, err] = await trytm(
		prisma.appKey.delete({
			where: {
				name: "stripe",
			},
		})
	);

	if (err) {
		console.error(err);
	}

	return res;
};
