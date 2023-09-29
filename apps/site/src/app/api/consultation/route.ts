import { calendlyPayloadDataSchema } from "@bpvs/validation";
import { z } from "zod";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { consultationHandler } from "@/lib";

const consultationParams = z.object({
	calendlyEventPayload: calendlyPayloadDataSchema,
	calendlyPayloadId: z.string({
		required_error: "Calendly payload ID is required",
	}),
});

export const POST = async (req: NextRequest) => {
	const { calendlyEventPayload, calendlyPayloadId } = consultationParams.parse(
		req.body
	);
	try {
		await consultationHandler(calendlyEventPayload, calendlyPayloadId);
		return NextResponse.json({ message: "Success" }, { status: 200 });
	} catch (error) {
		console.error(error);
		return new Response(
			JSON.stringify({
				message: "There was an error saving the consultation to the database.",
			}),
			{ status: 500 }
		);
	}
};
