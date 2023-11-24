import { Auth } from "googleapis";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs";
import { trytm } from "@bdsqqq/try";
import { prisma } from "@bpvs/db";
import { redirect } from "next/navigation";
import { ADMIN_URL } from "@bpvs/config";

export const GET = async (req: NextRequest) => {
	const oAuthClient = new Auth.OAuth2Client({
		clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
		clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
		redirectUri: `${ADMIN_URL}/api/oauth/google/callback`,
	});

	const state = req.nextUrl.searchParams.get("state");
	const code = req.nextUrl.searchParams.get("code");

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

	const userId = Buffer.from(state, "base64").toString("utf-8");

	const [_, userErr] = await trytm(clerkClient.users.getUser(userId));
	if (userErr)
		return new NextResponse("Unauthorized", {
			status: 401,
		});

	const { tokens } = await oAuthClient.getToken(code);

	await prisma.appKey.create({
		data: {
			name: "googleCal",
			keys: Buffer.from(JSON.stringify({ ...tokens }), "utf-8").toString(
				"base64"
			),
		},
	});

	return redirect("/dashboard/settings");
};
