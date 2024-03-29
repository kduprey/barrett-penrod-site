import { trytm } from "@bdsqqq/try";
import { getCalendlyEvent } from "@bpvs/utils";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export const GET = async (req: NextRequest) => {
	const data = z
		.object({
			uri: z.string().url(),
		})
		.safeParse(req.nextUrl.searchParams);

	if (!data.success)
		return new NextResponse(fromZodError(data.error).message, { status: 400 });

	const [eventRes, eventErr] = await trytm(getCalendlyEvent(data.data.uri));

	if (eventErr) {
		console.error("Error getting event info: ", eventErr);
		return new NextResponse(
			JSON.stringify({
				message: "Error getting event info",
			}),
			{ status: 500 }
		);
	}

	return NextResponse.json(eventRes, { status: 200 });
};
