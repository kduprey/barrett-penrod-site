import { ADMIN_URL } from "@bpvs/config";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
	const { userId } = auth();

	if (!userId) {
		return new NextResponse("Unauthorized", {
			status: 401,
		});
	}

	return redirect(
		`https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${
			process.env.STRIPE_CONNECT_CLIENT_ID
		}&scope=read_write&redirect_uri=${ADMIN_URL}/api/oauth/stripe/callback&state=${Buffer.from(
			JSON.stringify({
				userId,
				isFirstTime: req.nextUrl.searchParams.get("isFirstTime") === "true",
			})
		).toString("base64")}`
	);
};
