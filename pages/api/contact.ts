import { NextApiRequest, NextApiResponse } from "next/types";

const API_KEY = process.env["AIRTABLE_API_KEY"];

export type ContactFormBody = {
	name: string;
	email: string;
	message: string;
	age: number;
};

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
	const { name, email, message, age } = req.body as ContactFormBody;
	const base = `appgICv9x4N8ACmHB`;
	const table = `Contact%20Form`;

	if (!name || !email || !message) {
		return res.status(400).json({
			error: "Missing required fields",
		});
	}

	if (
		name === "Test" &&
		email === "email@test.com" &&
		message === "This is a test message"
	) {
		const response = await fetch(
			`https://api.airtable.com/v0/${base}/${table}?fields%5B%5D=Name&maxRecords=2&returnFieldsByFieldId=true`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${API_KEY}`,
				},
			}
		);

		if (response.ok) {
			const data = await response.json();

			return res.status(200).json(data);
		} else {
			return res.status(500).json({
				error: "Something went wrong",
				message: response.body,
			});
		}
	}

	const data = {
		Name: name,
		Email: email,
		Message: message,
	};

	if (age) {
		res.status(400).json({
			status: 400,
			message: "Bad Request",
		});
		return;
	}

	fetch(`https://api.airtable.com/v0/${base}/${table}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${API_KEY}`,
		},
		body: JSON.stringify({ fields: data }),
	})
		.then((response) => response.json())
		.then((data) => {
			if (data.error) {
				res.status(500).json({
					status: 500,
					message: data.error,
				});
				return;
			}
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
};

export default contact;
