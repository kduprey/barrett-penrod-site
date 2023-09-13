import { prisma } from "@bpvs/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
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
    console.log("id: ", id);

    const result = await prisma.calendlyInviteePayloads.findUniqueOrThrow({
      where: {
        id: id as string,
      },
    });

    if (!result) {
      return res.status(204);
    }

    console.log("result", result);

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error: Internal server error",
      error,
    });
  }

  return res.status(204);
}
