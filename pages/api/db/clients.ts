import { clients } from "@prisma/client";
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
				const result = await prisma.clients.findMany({
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
								stripe_customer_id: {
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
			const result = await prisma.clients.findMany();

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
		const { ...ClientInfo } = req.body as clients;
		if (!ClientInfo) {
			return res.status(400).json({
				message: "Error: Missing client info",
			});
		}

		try {
			const result = await prisma.clients.create({
				data: ClientInfo,
			});

			if (!result) {
				return res.status(500).json({
					message: "Error: Failed to insert client",
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
		const { id } = req.query;
		const { ...ClientInfo } = req.body as clients;
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
			const result = await prisma.clients.update({
				where: {
					id: id as string,
				},
				data: ClientInfo,
			});

			if (!result) {
				return res.status(500).json({
					message: "Error: Failed to update client",
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
				message: "Error: Missing id",
			});
		}

		try {
			const result = await prisma.clients.delete({
				where: {
					id: id as string,
				},
			});

			if (!result) {
				return res.status(500).json({
					message: "Error: Failed to delete client",
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
