import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

const updateQRDR = async (qrID: string): Promise<boolean> => {
	console.log("Updating QRDB");

	const location = Number.parseInt(qrID.split("")[0]);
	const flyerSize = Number.parseInt(qrID.split("")[1]);
	const campaign = Number.parseInt(qrID.split("")[2]);
	const designId = Number.parseInt(qrID.split("")[3]);

	try {
		await prisma.qr_code_logs.create({
			data: {
				flyerSize,
				location,
				campaign,
				designId,
				timestamp: new Date(),
			},
		});
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export { updateQRDR };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { qrID } = req.body;

	// Only allow POST requests
	if (req.method !== "POST") {
		res.status(405).json({ error: "Method not allowed" });
	}

	// Check for QR param
	if (!qrID) {
		res.status(400).json({ error: "Missing QR param" });
	}

	// Update QRDB
	try {
		const status = await updateQRDR(qrID as string);
		// Return status
		res.status(200).json({ status });
	} catch (error) {
		// Log error
		console.log(error);
		// Return error
		res.status(500).json({ error: "Internal server error" });
	}
};

export default handler;
