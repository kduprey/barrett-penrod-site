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

const POSTContact: NextApiHandler<AirTableResponse> = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const data = validateRequest(req.body, ContactFormBody);
	const response = await contact(data);

	if (response instanceof Error) {
		throw new createHttpError.InternalServerError(response.message);
	}

	res.status(200).json(response);
};

export default apiHandler({
	POST: POSTContact,
});
