import { calendlyPayloadDataSchema } from "@bpvs/validation";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { consultationHandler } from "@/lib";

const consultationParams = z.object({
	calendlyEventPayload: calendlyPayloadDataSchema,
	calendlyPayloadId: z.string({
		required_error: "Calendly payload ID is required",
	}),
});

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
	const { calendlyEventPayload, calendlyPayloadId } = consultationParams.parse(
		req.body
	);
	try {
		await consultationHandler(calendlyEventPayload, calendlyPayloadId);
		res.status(200).json({ message: "Success" });
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
