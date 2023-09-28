import { trytm } from "@bdsqqq/try";
import { getCalendlyInvitee } from "@bpvs/utils";
import type { NextApiHandler, NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export const GET: NextApiHandler = async (req: NextApiRequest) => {
	const result = z
		.object({
			uri: z.string(),
		})
		.safeParse(req.query);

	if (!result.success)
		return new NextResponse(fromZodError(result.error).message, {
			status: 400,
		});

	const [inviteeRes, inviteeErr] = await trytm(
		getCalendlyInvitee(result.data.uri)
	);

	if (inviteeErr) {
		console.error(inviteeErr);
		return new NextResponse(
			JSON.stringify({
				message: "Error getting invitee",
			}),
			{ status: 400 }
		);
	}

	return NextResponse.json(inviteeRes, { status: 200 });
};
