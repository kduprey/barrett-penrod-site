import { Prisma, clients, prisma } from "@bpvs/db";
import { apiHandler } from "@bpvs/utils";
import createHttpError from "http-errors";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const GETHandler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const data = z
    .object({
      searchString: z.string().optional(),
    })
    .parse(req.query);

  try {
    const result = await GET(data.searchString);
    return res.status(200).json(result);
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error)
      throw new createHttpError.InternalServerError(JSON.stringify(error));
    throw new createHttpError.InternalServerError(
      JSON.stringify({
        message: "Error getting clients",
        error: "Unknown error",
      })
    );
  }
};

const GET = async (searchString?: string) => {
  if (!searchString) {
    try {
      const result = await prisma.clients.findMany();
      if (!result) return null;

      return result;
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error) throw new Error(JSON.stringify(error));
      throw new Error(
        JSON.stringify({
          message: "Error getting clients",
          error: "Unknown error",
        })
      );
    }
  }

  try {
    const result = await prisma.clients.findMany({
      where: {
        OR: [
          {
            name: {
              contains: searchString,
            },
          },

          {
            email: {
              contains: searchString,
            },
          },
          {
            stripe_customer_id: {
              contains: searchString,
            },
          },
        ],
      },
    });
    if (!result) return null;

    return result;
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error)
      throw new createHttpError.InternalServerError(JSON.stringify(error));
    throw new createHttpError.InternalServerError(
      JSON.stringify({
        message: "Error getting clients",
        error: "Unknown error",
      })
    );
  }
};

const POSTHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = Prisma.validator<Prisma.clientsCreateInput>()({
    ...req.body,
  });

  try {
    const result = await POST(data as clients);
    return res.status(200).json(result);
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error)
      throw new createHttpError.InternalServerError(JSON.stringify(error));
    throw new createHttpError.InternalServerError(
      JSON.stringify({
        message: "Error creating client",
        error: "Unknown error",
      })
    );
  }
};

const POST = async (ClientInfo: clients): Promise<clients | null> => {
  try {
    const result = await prisma.clients.create({
      data: ClientInfo,
    });

    return result;
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) throw new Error(error.message);

    throw new Error(
      JSON.stringify({
        message: "Error updating client",
        error: "Unknown error",
      })
    );
  }
};

const PUTHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: clients = Prisma.validator<Prisma.clientsUpdateInput>()({
    ...req.body,
  });

  try {
    const result = await PUT(data.id, data);
    return res.status(200).json(result);
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error)
      throw new createHttpError.InternalServerError(JSON.stringify(error));
    throw new createHttpError.InternalServerError(
      JSON.stringify({
        message: "Error updating client",
        error: "Unknown error",
      })
    );
  }
};

const PUT = async (
  id: string,
  ClientInfo: clients
): Promise<clients | null> => {
  try {
    const result = await prisma.clients.update({
      where: {
        id: id,
      },
      data: ClientInfo,
    });

    return result;
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) throw new Error(error.message);

    throw new Error(
      JSON.stringify({
        message: "Error updating client",
        error: "Unknown error",
      })
    );
  }
};

const DELETEHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = z
    .object({
      id: z.string(),
    })
    .parse(req.body);

  try {
    const result = await DELETE(data.id);
    return res.status(200).json(result);
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error)
      throw new createHttpError.InternalServerError(JSON.stringify(error));
    throw new createHttpError.InternalServerError(
      JSON.stringify({
        message: "Error deleting client",
        error: "Unknown error",
      })
    );
  }
};

const DELETE = async (id: string): Promise<clients | null> => {
  try {
    const result = await prisma.clients.delete({
      where: {
        id: id,
      },
    });

    return result;
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) throw new Error(error.message);

    throw new Error(
      JSON.stringify({
        message: "Error deleting client",
        error: "Unknown error",
      })
    );
  }
};

export default apiHandler({
  GET: GETHandler,
  POST: POSTHandler,
  PUT: PUTHandler,
  DELETE: DELETEHandler,
});
