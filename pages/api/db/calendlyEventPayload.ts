import { calendlyInviteePayloads, Prisma } from "@prisma/client";
import prisma from "../../../lib/prisma";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "GET") {
		if (req.query.searchString) {
			const { searchString } = req.query;

			try {
				const result = await prisma.calendlyInviteePayloads.findMany({
					where: {
						OR: [
							{
								email: {
									contains: searchString as string,
								},
							},
							{
								name: {
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
			const result = await prisma.calendlyInviteePayloads.findMany();

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
		const { ...invitee } = req.body as calendlyInviteePayloads;
		if (!invitee) {
			return res.status(400).json({
				err: new Error("Error: Missing client info"),
			});
		}

		try {
			const result = await prisma.calendlyInviteePayloads.create({
				data: invitee,
			});

			if (!result) {
				return res.status(500).json({
					err: new Error("Error: Failed to insert client"),
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
		const { ...invitee } = req.body as calendlyInviteePayloads;
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

		try {
			const result = await prisma.calendlyInviteePayloads.update({
				where: {
					id: id as string,
				},
				data: invitee,
			});

			if (!result) {
				return res.status(400).json({
					err: new Error("Error: Could not update client"),
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
		const id = req.query.id;
		if (!id) {
			return res.status(400).json({
				err: new Error("Error: Missing client id"),
			});
		}

		try {
			const result = await prisma.calendlyInviteePayloads.delete({
				where: {
					id: id as string,
				},
			});

			if (!result) {
				return res.status(400).json({
					err: new Error("Error: Could not delete client"),
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
