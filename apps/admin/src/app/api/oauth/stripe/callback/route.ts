import { trytm } from "@bdsqqq/try";
import { clerkClient } from "@clerk/nextjs";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { z } from "zod";
import { stripe } from "@bpvs/config";
import { setStripeKeys } from "@/utils/stripe/credentials";

const stateSchema = z.object({
	userId: z.string(),
	isFirstTime: z.boolean().optional(),
});
// https://bpvs-admin.kduprey.dev/api/oauth/stripe/callback?scope=read_write&code=ac_PQ3tn5LjUFwDObx79nzIR019BXamj2Zo&state=eyJ1c2VySWQiOiJ1c2VyXzJSQkJ4N2ttWEhFQmYwZFBXYlNKV3E2SkxObSIsImlzRmlyc3RUaW1lIjpmYWxzZX0%3D

export const GET = async (req: NextRequest) => {
	if (req.nextUrl.searchParams.get("error")) {
		console.error("Error connnecting Stripe account:");
		console.error(req.nextUrl.searchParams.get("error"));
		console.error(req.nextUrl.searchParams.get("error_description"));
		return new NextResponse("Unauthorized", {
			status: 401,
		});
	}

	const code = req.nextUrl.searchParams.get("code");
	const state = req.nextUrl.searchParams.get("state");
	const scope = req.nextUrl.searchParams.get("scope");

	if (!code) {
		console.info("missing code", req.nextUrl);

		return new NextResponse("Unauthorized", {
			status: 401,
		});
	}
	if (!state) {
		console.info("missing state", req.nextUrl);

		return new NextResponse("Unauthorized", {
			status: 401,
		});
	}

	if (!scope) {
		console.info("missing scope", req.nextUrl);

		return new NextResponse("Unauthorized", {
			status: 401,
		});
	} else if (!scope.includes("read_write")) {
		console.info("missing read_write scope", req.nextUrl);

		return new NextResponse("Unauthorized", {
			status: 401,
		});
	}

	const { userId, isFirstTime } = stateSchema.parse(
		JSON.parse(Buffer.from(state, "base64").toString("utf-8"))
	);

	const [_, userErr] = await trytm(clerkClient.users.getUser(userId));
	if (userErr)
		return new NextResponse("Unauthorized", {
			status: 401,
		});

	const [stripeResponse, stripeErr] = await trytm(
		stripe.oauth.token({
			grant_type: "authorization_code",
			code,
		})
	);

	if (stripeErr) {
		console.error(stripeErr);
		return new NextResponse("Unauthorized", {
			status: 401,
		});
	}

	const [__, setStripeKeysErr] = await trytm(setStripeKeys(stripeResponse));

	if (setStripeKeysErr) {
		console.error(setStripeKeysErr);
		return new NextResponse("Internal Server Error", {
			status: 500,
		});
	}

	return redirect(
		`/dashboard/settings${isFirstTime ? "?isFirstTime=true" : ""}`
	);
};
