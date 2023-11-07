import { trytm } from "@bdsqqq/try";
import type { qr_code_logs as qrCodeLogs } from "@bpvs/db";
import { prisma } from "@bpvs/db";

export const updateQRDB = async (qrID: string): Promise<qrCodeLogs> => {
	console.info("Updating QRDB...");
	let location: number, flyerSize: number, campaign: number, designId: number;

	// Check for old format
	if (qrID.includes("-")) {
		// New format
		const qrIDSplit = qrID.split("-");
		if (qrIDSplit.length !== 4) throw new Error("Invalid QR ID");
		location = Number.parseInt(qrIDSplit[0] as string);
		flyerSize = Number.parseInt(qrIDSplit[1] as string);
		campaign = Number.parseInt(qrIDSplit[2] as string);
		designId = Number.parseInt(qrIDSplit[3] as string);
	} else if (qrID.length === 4) {
		const qrIDSplit = qrID.split("");
		location = Number.parseInt(qrIDSplit[0] as string);
		flyerSize = Number.parseInt(qrIDSplit[1] as string);
		campaign = Number.parseInt(qrIDSplit[2] as string);
		designId = Number.parseInt(qrIDSplit[3] as string);
	} else throw new Error("Invalid QR ID");

	const [response, err] = await trytm(
		prisma.qr_code_logs.create({
			data: {
				flyerSize,
				location,
				campaign,
				designId,
				timestamp: new Date(),
			},
		})
	);
	if (err) throw new Error(err.message);
	return response;
};
