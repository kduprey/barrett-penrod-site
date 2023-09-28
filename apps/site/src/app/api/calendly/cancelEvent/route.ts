import { cancelCalendlyEvent } from "@bpvs/utils";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export const POST = async (req: NextApiRequest): Promise<NextResponse> => {
	const uri = z
		.object({
			uri: z.string().url(),
		})
		.safeParse(req.body);

	if (!uri.success)
		return new NextResponse(fromZodError(uri.error).message, { status: 400 });

	try {
		const response = await cancelCalendlyEvent(uri.data.uri);
		return NextResponse.json(response, { status: 200 });
	} catch (err) {
		console.error(err);
		return new NextResponse(JSON.stringify({ error: err }));
	}
};
