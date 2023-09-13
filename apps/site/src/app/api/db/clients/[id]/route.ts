import { prisma } from "@bpvs/db";
import type { NextApiRequest, NextApiResponse } from "next";

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

  if (!id) {
    return res.status(400).json({
      message: "Error: Missing id",
    });
  }

  try {
    const result = await prisma.clients.findUniqueOrThrow({
      where: {
        id: id as string,
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
