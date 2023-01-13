import axios, { AxiosResponse } from "axios";
import type { NextApiRequest, NextApiResponse } from "next/types";
import { AirTableResponse } from "types/airtableTypes";
import { invalidMethod } from "utils/responseDefaults";

const API_KEY = process.env["AIRTABLE_API_KEY"];

export type ContactFormBody = {
	name: string;
	email: string;
	message: string;
	age?: number;
};

const contact = async ({
	name,
	email,
	message,
	age,
}: ContactFormBody): Promise<AirTableResponse | Error> => {
	const messageData = {
		Name: name,
		Email: email,
		Message: message,
	};

	if (age !== undefined) {
		return new Error("Not a valid field");
	}
	try {
		const { data } = await axios.post<AirTableResponse>(
			process.env["AIRTABLE_API_URL"] as string,
			{
				records: [
					{
						fields: messageData,
					},
				],
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${API_KEY}`,
				},
			}
		);

		return data;
	} catch (error: any) {
		if (axios.isAxiosError(error)) {
			console.error(error);
			return error;
		} else {
			console.error(error);
			return new Error("Unexpected error");
		}
	}
};

export { contact };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	invalidMethod("POST", req, res);

	if (!req.body)
		res.status(400).json({
			status: 400,
			message: "Bad Request",
		});

	try {
		const data = await contact(req.body);
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json(error);
	}
};

export default handler;
