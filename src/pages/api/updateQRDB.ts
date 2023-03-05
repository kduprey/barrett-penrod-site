import { qr_code_logs } from "@prisma/client";
import createHttpError from "http-errors";
import { NextApiRequest, NextApiResponse } from "next";
import apiHandler from "utils/api";
import { validateRequest } from "utils/yup";
import * as yup from "yup";
import prisma from "../../lib/prisma";

const updateQRDB = async (qrID: string): Promise<qr_code_logs> => {
	console.log("Updating QRDB");
	let location: number, flyerSize: number, campaign: number, designId: number;

	// Check for old format
	if (qrID.includes("-")) {
		// New format
		const qrIDSplit = qrID.split("-");
		location = Number.parseInt(qrIDSplit[0]);
		flyerSize = Number.parseInt(qrIDSplit[1]);
		campaign = Number.parseInt(qrIDSplit[2]);
		designId = Number.parseInt(qrIDSplit[3]);
	} else if (qrID.length === 4) {
		const qrIDSplit = qrID.split("");
		location = Number.parseInt(qrIDSplit[0]);
		flyerSize = Number.parseInt(qrIDSplit[1]);
		campaign = Number.parseInt(qrIDSplit[2]);
		designId = Number.parseInt(qrIDSplit[3]);
	} else throw new Error("Invalid QR ID");

	try {
		const response = await prisma.qr_code_logs.create({
			data: {
				flyerSize,
				location,
				campaign,
				designId,
				timestamp: new Date(),
			},
		});
		return response;
	} catch (error) {
		console.log(error);
		throw new Error("Error updating QRDB");
	}
};

export { updateQRDB };

const POSTUpdate = async (req: NextApiRequest, res: NextApiResponse) => {
	const data = validateRequest(
		req.body,
		yup.object().shape({
			qrID: yup.string().required("QR ID is required"),
		})
	);

	// Update QRDB
	try {
		const status = await updateQRDB(data.qrID);
		// Return status
		res.status(200).json({ status });
	} catch (error) {
		// Log error
		console.log(error);
		throw new createHttpError.InternalServerError(
			JSON.stringify({
				message: "Internal Server Error",
				error: error,
			})
		);
	}
};

export default apiHandler({
	POST: POSTUpdate,
});
