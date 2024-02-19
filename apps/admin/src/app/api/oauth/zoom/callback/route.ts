import { trytm } from "@bdsqqq/try";
import { clerkClient } from "@clerk/nextjs";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { z } from "zod";
import { setZoomKeys } from "@/utils/zoom/credentials";

const stateSchema = z.object({
	userId: z.string(),
	isFirstTime: z.boolean().optional(),
});

export const GET = async (req: NextRequest) => {
	const code = req.nextUrl.searchParams.get("code");
	const state = req.nextUrl.searchParams.get("state");

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

	const { userId, isFirstTime } = stateSchema.parse(
		JSON.parse(Buffer.from(state, "base64").toString("utf-8"))
	);

	const [_, userErr] = await trytm(clerkClient.users.getUser(userId));
	if (userErr)
		return new NextResponse("Unauthorized", {
			status: 401,
		});

	const [__, zoomCredentialsErr] = await trytm(setZoomKeys(code));

	if (zoomCredentialsErr) {
		console.error(zoomCredentialsErr);
		return new NextResponse("Unauthorized", {
			status: 401,
		});
	}

	return redirect(
		`/dashboard/settings${isFirstTime ? "?isFirstTime=true" : ""}`
	);
};
