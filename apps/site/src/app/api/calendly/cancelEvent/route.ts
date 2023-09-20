import { cancelCalendlyEvent } from "@bpvs/utils";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const POST = async (req: NextApiRequest): Promise<NextResponse> => {
	const { uri } = req.body as { uri: string };

	try {
		const response = await cancelCalendlyEvent(uri);
		return NextResponse.json(response, { status: 200 });
	} catch (err) {
		console.error(err);
		return new NextResponse(JSON.stringify({ error: err }));
	}
};
