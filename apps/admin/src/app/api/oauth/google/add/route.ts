import { auth } from "@clerk/nextjs";
import { Auth } from "googleapis";
import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ADMIN_URL } from "@bpvs/config";

export const GET = (req: NextRequest) => {
	const { userId } = auth();

	if (!userId) {
		return new NextResponse("Unauthorized", {
			status: 401,
		});
	}

	const oAuthClient = new Auth.OAuth2Client({
		clientId: process.env.GOOGLE_OAUTH_CLIENT_ID as string,
		clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET as string,
		redirectUri: `${ADMIN_URL}/api/oauth/google/callback${
			req.nextUrl.searchParams.get("isFirstTime") ? "?isFirstTime=true" : ""
		}`,
	});

	const url = oAuthClient.generateAuthUrl({
		access_type: "offline",
		scope: ["https://www.googleapis.com/auth/calendar"],
		prompt: "consent",
		state: Buffer.from(userId).toString("base64"),
	});

	return redirect(url);
};
