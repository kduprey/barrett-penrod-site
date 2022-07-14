import {
	DeleteResult,
	InsertOneResult,
	ObjectId,
	UpdateResult,
	WithId,
} from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { collections, connectToDatabase } from "../../../lib/database.service";
import { BookingInfo } from "../../../types";

type Data = {
	err: Error;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<
		| Data
		| WithId<BookingInfo>[]
		| InsertOneResult<BookingInfo>
		| UpdateResult
		| DeleteResult
	>
) {
	if (req.method === "GET") {
		if (req.query.filter) {
			const query = await JSON.parse(req.query.filter as string);
			console.log(query);

			try {
				await connectToDatabase();
				const client = await collections.bookings
					?.find(query)
					.toArray();
				if (!client) {
					return res.status(404).json({
						err: new Error("Error: No clients found"),
					});
				}

				console.log(client);

				return res.status(200).json(client);
			} catch (error: any) {
				console.log(error);

				return res.status(500).send(error);
			}
		}

		await connectToDatabase();
		const clients = await collections.bookings?.find({}).toArray();
		if (!clients) {
			return res.status(404).json({
				err: new Error("Error: No clients found"),
			});
		}
		return res.status(200).json(clients);
	}

	if (req.method === "POST") {
		const { ...booking } = req.body as BookingInfo;
		if (!booking) {
			return res.status(400).json({
				err: new Error("Error: Missing client info"),
			});
		}
		booking.event_start_time = new Date(booking.event_start_time);
		booking.event_end_time = new Date(booking.event_end_time);

		await connectToDatabase();
		const result = await collections.bookings?.insertOne(booking);
		if (!result) {
			return res.status(500).json({
				err: new Error("Error: Failed to insert client"),
			});
		}
		return res.status(200).json(result);
	}

	if (req.method === "PUT") {
		const id = req.query.id;
		const { ...booking } = req.body as BookingInfo;

		if (!id) {
			return res.status(400).json({
				err: new Error("Error: Missing client id"),
			});
		}

		if (!booking) {
			return res.status(400).json({
				err: new Error("Error: Missing client info"),
			});
		}

		booking.event_start_time = new Date(booking.event_start_time);
		booking.event_end_time = new Date(booking.event_end_time);

		try {
			await connectToDatabase();
			const result = await collections.bookings?.updateOne(
				{ _id: new ObjectId(id.toString()) },
				{ $set: booking }
			);
			if (!result) {
				return res.status(500).json({
					err: new Error("Error: Failed to update client"),
				});
			}
			return res.status(200).json(result);
		} catch (error: any) {
			console.log(error);

			return res.status(500).send(error);
		}
	}

	if (req.method === "DELETE") {
		const id = req.query.id;
		if (!id) {
			return res.status(400).json({
				err: new Error("Error: Missing client id"),
			});
		}

		try {
			await connectToDatabase();
			const result = await collections.bookings?.deleteOne({
				_id: new ObjectId(id.toString()),
			});
			if (!result) {
				return res.status(500).json({
					err: new Error("Error: Failed to delete client"),
				});
			}
			return res.status(200).json(result);
		} catch (error: any) {
			console.log(error);

			return res.status(500).send(error);
		}
	}

	return res.status(404).json({
		err: new Error("Error: Not found"),
	});
}
