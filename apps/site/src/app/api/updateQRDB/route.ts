import type { NextRequest } from "next/server";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import { updateQRDB } from "./updateQRDB";

export const POST = async (req: NextRequest) => {
	const data = z
		.object({
			qrID: z.string({
				required_error: "QR ID is required",
			}),
		})
		.safeParse(req.body);

	if (!data.success)
		return new Response(fromZodError(data.error).message, {
			status: 400,
		});

	// Update QRDB
	try {
		const status = await updateQRDB(data.data.qrID);
		// Return status
		return Response.json({ status }, { status: 200 });
	} catch (error) {
		// Log error
		console.error(error);
		return new Response(
			JSON.stringify({
				error,
				message: "Error updating QRDB",
			}),
			{ status: 500 }
		);
	}
};
