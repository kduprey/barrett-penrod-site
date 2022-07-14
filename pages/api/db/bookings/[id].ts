import { ObjectId, WithId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import {
	collections,
	connectToDatabase,
} from "../../../../lib/database.service";
import { BookingInfo } from "../../../../types";

type Data = {
	message: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data | WithId<BookingInfo>>
) {
	const { id } = req.query;

	if (!id) {
		return res.status(400).json({
			message: "Error: Missing id",
		});
	}

	try {
		const query = { _id: new ObjectId(id.toString()) };
		await connectToDatabase();
		const client = await collections.bookings?.findOne(query);
		if (!client) {
			return res.status(404).json({
				message: "Error: Client not found",
			});
		}
		return res.status(200).json(client);
	} catch (err) {
		return res.status(500).json({
			message: "Error: Could not find client",
		});
	}
}
