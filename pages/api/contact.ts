import { NextApiRequest, NextApiResponse } from "next/types";

const API_KEY = process.env.AIRTABLE_API_KEY;

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
	const { name, email, message, age } = req.body;
	const base = `appgICv9x4N8ACmHB`;

	const table = `Contact%20Form`;

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
