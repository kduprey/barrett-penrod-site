import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== "GET") {
		res.setHeader("Allow", "GET");
		return res.status(405).json({
			message: "Error: Invalid method",
		});
	}

	if (!req.query.id) {
		return res.status(400).json({
			message: "Error: Missing id",
		});
	}

	const { id } = req.query;

	try {
		const result = prisma.stripeCustomers.findUniqueOrThrow({
			where: {
				id_: id as string,
			},
		});

		if (!result) {
			return res.status(204);
		}

		return res.status(200).json(result);
	} catch (error) {
		console.error(error);
		return res.status(500).send({
			message: "Error: Internal server error",
			error,
		});
	}
}
