import axios from "axios";
import createHttpError from "http-errors";
import type {
	NextApiHandler,
	NextApiRequest,
	NextApiResponse,
} from "next/types";
import { AirTableResponse } from "types/airtableTypes";
import apiHandler from "utils/api";
import { validateRequest } from "utils/yup";
import * as Yup from "yup";

const API_KEY = process.env["AIRTABLE_API_KEY"];

export type ContactFormBody = {
	name: string;
	email: string;
	message: string;
	age?: number;
};

const ContactFormBody = Yup.object().shape({
	name: Yup.string().required("Name is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
	message: Yup.string().required("Message is required"),
});

const contact = async ({
	name,
	email,
	message,
	age,
}: ContactFormBody): Promise<AirTableResponse> => {
	const messageData = {
		Name: name,
		Email: email,
		Message: message,
	};

	if (name === "" || email === "" || message === "")
		throw new Error("Not a valid input");

	if (age !== undefined) {
		throw new Error("Not a valid field");
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
	} catch (error: unknown) {
		if (error instanceof Error) throw error;
		throw new Error("Error sending message");
	}
};

export { contact };

const POSTContact: NextApiHandler<AirTableResponse> = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const data = validateRequest(req.body, ContactFormBody);

	try {
		const response = await contact(data);

		res.status(200).json(response);
	} catch (error: unknown) {
		console.error(error);
		if (error instanceof Error)
			throw new createHttpError.InternalServerError(
				JSON.stringify({
					message: "Error sending message",
					error,
				})
			);
		throw new createHttpError.InternalServerError(
			JSON.stringify({
				message: "Error sending message",
				error: "Unknown error",
			})
		);
	}
};

export default apiHandler({
	POST: POSTContact,
});
