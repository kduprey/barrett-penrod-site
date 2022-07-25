import { InsertOneResult, ModifyResult, ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { collections, connectToDatabase } from "../../../lib/database.service";
import { ClientInfo } from "../../../types";

type Data = {
	message: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<
		| Data
		| ClientInfo[]
		| ClientInfo
		| InsertOneResult<ClientInfo>
		| ModifyResult<ClientInfo>
		| unknown
	>
) {
	if (req.method === "GET" && req.query.filter) {
		const query = await JSON.parse(req.query.filter as string);
		console.log(query);

		try {
			await connectToDatabase();
			const client = await collections.clients?.find(query).toArray();
			if (!client) {
				return res.status(404).json({
					message: "Error: No clients found",
				});
			}

			console.log(client);

			return res.status(200).json(client);
		} catch (error: any) {
			console.log(error);

			return res.status(500).json(error);
		}
	}

	if (req.method === "GET") {
		await connectToDatabase();
		const clients = await collections.clients?.find({}).toArray();
		if (!clients) {
			return res.status(404).json({
				message: "Error: No clients found",
			});
		}
		return res.status(200).json(clients);
	}

	if (req.method === "POST") {
		const { ...ClientInfo } = req.body;
		if (!ClientInfo) {
			return res.status(400).json({
				message: "Error: Missing client info",
			});
		}
		try {
			await connectToDatabase();
			const client = await collections.clients?.insertOne(ClientInfo);
			if (!client) {
				return res.status(404).json({
					message: "Error: Could not insert client",
				});
			}
			return res.status(200).json(client);
		} catch (err) {
			return res.status(500).json({
				message: "Error: Could not insert client",
			});
		}
	}

	if (req.method === "PUT") {
		const { id } = req.query;
		const { ...ClientInfo } = req.body;
		if (!id) {
			return res.status(400).json({
				message: "Error: Missing id",
			});
		}
		if (!ClientInfo) {
			return res.status(400).json({
				message: "Error: Missing client info",
			});
		}
		try {
			await connectToDatabase();
			const query = { _id: new ObjectId(id.toString()) };
			const client = await collections.clients?.findOneAndUpdate(query, {
				$set: ClientInfo,
			});
			if (!client) {
				return res.status(404).json({
					message: "Error: Could not update client",
				});
			}
			return res.status(200).json(client);
		} catch (err) {
			return res.status(500).json({
				message: "Error: Could not update client",
			});
		}
	}

	if (req.method === "DELETE") {
		const { id } = req.query;
		if (!id) {
			return res.status(400).json({
				message: "Error: Missing id",
			});
		}
		try {
			await connectToDatabase();
			const query = { _id: new ObjectId(id.toString()) };
			const client = await collections.clients?.findOneAndDelete(query);
			if (!client) {
				return res.status(404).json({
					message: "Error: Could not delete client",
				});
			}
			return res.status(200).json(client);
		} catch (err) {
			return res.status(500).json({
				message: "Error: Could not delete client",
			});
		}
	}
}
