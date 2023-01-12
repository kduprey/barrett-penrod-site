import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next/types";
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
	const data = {
		Name: name,
		Email: email,
		Message: message,
	};

	if (age) {
		return new Error("Not a valid field");
	}
	try {
		const response = await axios<AirTableResponse>(
			process.env["AIRTABLE_API_URL"] as string,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${API_KEY}`,
				},
				data: {
					records: [
						{
							fields: data,
						},
					],
				},
			}
		);

		return response.data;
	} catch (error) {
		console.log(error);
	}

	return new Error("Error sending message");
};

export { contact };

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	invalidMethod("POST", req, res);

	if (!req.body)
		res.status(400).json({
			status: 400,
			message: "Bad Request",
		});

	try {
		const data = contact(req.body);
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json(error);
	}
};

export default handler;
