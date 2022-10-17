import { stripeCustomers } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "GET") {
		if (req.query.searchString) {
			const { searchString } = req.query;

			try {
				const result = await prisma.stripeCustomers.findMany({
					where: {
						OR: [
							{
								name: {
									contains: searchString as string,
								},
							},
							{
								email: {
									contains: searchString as string,
								},
							},
							{
								id_: {
									contains: searchString as string,
								},
							},
						],
					},
				});

				if (!result) {
					return res.status(204);
				}

				return res.status(200).json(result);
			} catch (error) {
				console.error(error);
				return res.status(500).json({
					message: "Error: Internal server error",
					error,
				});
			}
		}

		try {
			const result = await prisma.stripeCustomers.findMany();

			if (!result) {
				return res.status(204);
			}

			return res.status(200).json(result);
		} catch (error) {
			console.error(error);
			return res.status(500).json({
				message: "Error: Internal server error",
				error,
			});
		}
	}

	if (req.method === "POST") {
		const { ...stripeCustomer } = req.body as stripeCustomers;
		if (!stripeCustomer) {
			return res.status(400).json({
				err: "Error: Missing client info",
			});
		}

		try {
			const result = await prisma.stripeCustomers.create({
				data: {
					...stripeCustomer,
				},
			});

			if (!result) {
				return res.status(500).json({
					err: "Error: Failed to insert client",
				});
			}

			return res.status(200).json(result);
		} catch (error) {
			console.error(error);
			return res.status(500).json({
				message: "Error: Internal server error",
				error,
			});
		}
	}

	if (req.method === "PUT") {
		const id = req.query.id;
		const { ...stripeCustomer } = req.body as stripeCustomers;

		if (!id) {
			return res.status(400).json({
				err: "Error: Missing client info",
			});
		}
		if (!stripeCustomer) {
			return res.status(400).json({
				err: "Error: Missing client info",
			});
		}

		try {
			const result = await prisma.stripeCustomers.update({
				where: {
					id_: id as string,
				},
				data: {
					...stripeCustomer,
				},
			});

			if (!result) {
				return res.status(500).json({
					err: "Error: Failed to insert client",
				});
			}

			return res.status(200).json(result);
		} catch (error) {
			console.error(error);
			return res.status(500).json({
				message: "Error: Internal server error",
				error,
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
			const result = await prisma.stripeCustomers.delete({
				where: {
					id_: id as string,
				},
			});

			if (!result) {
				return res.status(500).json({
					err: "Error: Failed to delete client",
				});
			}

			return res.status(200).json(result);
		} catch (error) {
			console.error(error);
			return res.status(500).json({
				message: "Error: Internal server error",
				error,
			});
		}
	}
	res.setHeader("Allow", "GET, POST, PUT, DELETE");
	return res.status(405).json({
		message: "Error: Invalid method",
	});
}
