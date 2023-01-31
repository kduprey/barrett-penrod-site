import clientsCreateInput, { clients, Prisma } from ".prisma/client/index";
import createHttpError from "http-errors";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import apiHandler from "utils/api";
import { validateRequest } from "utils/yup";
import * as yup from "yup";
import prisma from "../../../lib/prisma";

const GETHandler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const data = validateRequest(
		req.body,
		new yup.ObjectSchema({
			searchString: yup.string().optional(),
		})
	);
	try {
		const result = await GET(data.searchString);
		return res.status(200).json(result);
	} catch (error: any) {
		console.error(error);
		throw new createHttpError.InternalServerError(error);
	}
};

const GET = async (searchString?: string) => {
	if (!searchString) {
		try {
			const result = await prisma.clients.findMany();
			if (!result) return null;

			return result;
		} catch (error: any) {
			console.error(error);
			throw new Error(error);
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
	} catch (error: any) {
		console.error(error);
		throw new Error(error);
	}
};

const POSTHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	const data = Prisma.validator<Prisma.clientsCreateInput>()(req.body);

	try {
		const result = await POST(data);
		return res.status(200).json(result);
	} catch (error: any) {
		console.error(error);
		throw new createHttpError.InternalServerError(error);
	}
};

const POST = async (ClientInfo: clients): Promise<clients | null> => {
	try {
		const result = await prisma.clients.create({
			data: ClientInfo,
		});

		return result;
	} catch (error: any) {
		console.error(error);
		throw new Error(error);
	}
};

const PUTHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	const data = Prisma.validator<Prisma.clientsUpdateInput>()(req.body);

	try {
		const result = await PUT(data.id, data);
		return res.status(200).json(result);
	} catch (error: any) {
		console.error(error);
		throw new createHttpError.InternalServerError(error);
	}
};

const PUT = async (
	id: string,
	ClientInfo: clients
): Promise<clients | null> => {
	try {
		const result = await prisma.clients.update({
			where: {
				id: id as string,
			},
			data: ClientInfo,
		});

		return result;
	} catch (error: any) {
		console.error(error);
		throw new Error(error);
	}
};

const DELETEHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	const data = validateRequest(
		req.body,
		new yup.ObjectSchema({
			id: yup.string().required(),
		})
	);

	try {
		const result = await DELETE(data.id);
		return res.status(200).json(result);
	} catch (error: any) {
		console.error(error);
		throw new createHttpError.InternalServerError(error);
	}
};

const DELETE = async (id: string): Promise<clients | null> => {
	try {
		const result = await prisma.clients.delete({
			where: {
				id: id as string,
			},
		});

		return result;
	} catch (error: any) {
		console.error(error);
		throw new Error(error);
	}
};

export default apiHandler({
	GET: GETHandler,
	POST: POSTHandler,
	PUT: PUTHandler,
	DELETE: DELETEHandler,
});
