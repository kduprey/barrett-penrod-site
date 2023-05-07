import axios from "axios";
import { server } from "config/server";
import { ParsedUrlQuery } from "querystring";

const handleQueryParams = async (
	query: ParsedUrlQuery
): Promise<boolean | Error | null> => {
	if (!query) {
		return null;
	}

	if (query.qr) {
		try {
			// Update QRDB
			const status = await handleQrCode(query.qr);

			// Return status
			return status;
		} catch (error) {
			// Log error
			console.log(error);
			// Return error
			return error as Error;
		}
	}

	return null;
};

export default handleQueryParams;

const handleQrCode = async (
	qrID: string | string[]
): Promise<boolean | Error | null> => {
	if (typeof qrID !== "string") return null;

	console.log("QR Code: ", qrID);

	// Update QRDB
	try {
		const status = await axios.post(server + "/api/updateQRDB", {
			qrID,
		});
		// Return status
		console.log("QRDB Status: ", status);
		return status.data.status;
	} catch (error) {
		// Log error
		console.log(error);
		// Return error
		return error as Error;
	}

	return null;
};