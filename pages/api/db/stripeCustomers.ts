import { Filter, InsertOneResult, ModifyResult, ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { collections, connectToDatabase } from "../../../lib/database.service";
import { stripeCustomer } from "../../../types";

type Data = {
	err: unknown;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<
		| Data
		| stripeCustomer[]
		| InsertOneResult<stripeCustomer>
		| ModifyResult<stripeCustomer>
		| any
	>
) {
	if (req.method === "GET" && req.query.filter) {
		const query = await JSON.parse(req.query.filter as string);
		console.log(query);

		try {
			await connectToDatabase();
			const client = await collections.stripeCustomers
				?.find(query)
				.toArray();
			if (!client) {
				return res.status(404).json({
					err: "Error: No clients found",
				});
			}

			console.log(client);

			return res.status(200).json(client);
		} catch (error: unknown) {
			console.log(error);

			return res.status(500).send(error);
		}
	}

	if (req.method === "GET") {
		await connectToDatabase();
		const clients = await collections.stripeCustomers?.find({}).toArray();
		if (!clients) {
			return res.status(404).json({
				err: "Error: No clients found",
			});
		}
		return res.status(200).json(clients);
	}

	if (req.method === "POST") {
		const { ...stripeCustomer } = req.body;
		if (!stripeCustomer) {
			return res.status(400).json({
				err: "Error: Missing client info",
			});
		}
		try {
			await connectToDatabase();
			const client = await collections.stripeCustomers?.insertOne(
				stripeCustomer
			);
			if (!client) {
				return res.status(404).json({
					err: "Error: Could not insert client",
				});
			}
			return res.status(200).json(client);
		} catch (err) {
			return res.status(500).send(err);
		}
	}

	if (req.method === "PUT") {
		const id = req.query.id;
		const { ...stripeCustomer } = req.body;

		if (!id) {
			return res.status(400).json({
				err: "Error: Missing client info",
			});
		}
		console.log("Updating Client: " + id);

		if (!stripeCustomer) {
			return res.status(400).json({
				err: "Error: Missing client info",
			});
		}
		try {
			await connectToDatabase();

			const client = await collections.stripeCustomers?.findOneAndUpdate(
				{ _id: new ObjectId(id.toString()) },
				{ $set: stripeCustomer }
			);
			if (!client) {
				return res.status(404).json({
					err: "Error: Could not update client",
				});
			}
			return res.status(200).json(client);
		} catch (err) {
			console.log(err);

			return res.status(500).json({
				err,
			});
		}
	}

	if (req.method === "DELETE") {
		const { id } = req.query;
		if (!id) {
			return res.status(400).json({
				err: "Error: Missing id",
			});
		}
		try {
			await connectToDatabase();
			const query = { _id: new ObjectId(id.toString()) };
			const client = await collections.stripeCustomers?.findOneAndDelete(
				query
			);
			if (!client) {
				return res.status(404).json({
					err: "Error: Could not delete client",
				});
			}
			return res.status(200).json(client);
		} catch (err) {
			return res.status(500).json({
				err,
			});
		}
	}
}
