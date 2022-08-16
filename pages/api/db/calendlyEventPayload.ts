import {
	DeleteResult,
	InsertOneResult,
	ModifyResult,
	ObjectId,
	WithId,
} from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { collections, connectToDatabase } from "../../../lib/database.service";
import { CalendlyEventPayload } from "../../../types";

type Data = {
	err: Error;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<
		| Data
		| WithId<CalendlyEventPayload>[]
		| InsertOneResult<CalendlyEventPayload>
		| ModifyResult<CalendlyEventPayload>
		| DeleteResult
	>
) {
	if (req.method === "GET") {
		if (req.query.filter) {
			const filter = JSON.parse(req.query.filter as string);
			console.log(filter);

			try {
				await connectToDatabase();
				const client = await collections.eventInvitees
					?.find(filter)
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

				return res.status(500).json(error);
			}
		}

		await connectToDatabase();
		const clients = await collections.eventInvitees?.find({}).toArray();
		if (!clients) {
			return res.status(404).json({
				err: new Error("Error: No clients found"),
			});
		}
		return res.status(200).json(clients);
	}

	if (req.method === "POST") {
		const { ...invitee } = req.body as CalendlyEventPayload;
		if (!invitee) {
			return res.status(400).json({
				err: new Error("Error: Missing client info"),
			});
		}
		invitee.resource.created_at = new Date(invitee.resource.created_at);
		invitee.resource.updated_at = new Date(invitee.resource.updated_at);

		await connectToDatabase();
		const result = await collections.eventInvitees?.insertOne(invitee);
		if (!result) {
			return res.status(500).json({
				err: new Error("Error: Failed to insert client"),
			});
		}
		return res.status(200).json(result);
	}

	if (req.method === "PUT") {
		const id = req.query.id;
		const { ...invitee } = req.body;

		if (!id) {
			return res.status(400).json({
				err: new Error("Error: Missing client id"),
			});
		}

		if (!invitee) {
			return res.status(400).json({
				err: new Error("Error: Missing client info"),
			});
		}

		invitee.event_start_time = new Date(invitee.event_start_time);
		invitee.event_end_time = new Date(invitee.event_end_time);

		try {
			await connectToDatabase();
			const query = { _id: new ObjectId(id.toString()) };
			const result = await collections.eventInvitees?.findOneAndUpdate(
				query,
				{
					$set: invitee,
				}
			);
			if (!result) {
				return res.status(500).json({
					err: new Error("Error: Failed to update client"),
				});
			}
			return res.status(200).json(result);
		} catch (error: any) {
			console.log(error);

			return res.status(500).json(error);
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
			const result = await collections.eventInvitees?.deleteOne({
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

			return res.status(500).json(error);
		}
	}

	return res.status(404).json({
		err: new Error("Error: Not found"),
	});
}
