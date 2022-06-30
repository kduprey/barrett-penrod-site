import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

type Data = {
	name: string;
};

const secureBooking = async (
	req: NextApiRequest,
	res: NextApiResponse<Data>
) => {
	const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
		apiVersion: "2020-08-27",
	});

	console.log(req.body);

	if (req.method === "POST") {
		if (req.body.event === "invitee.cancelled") {
			res.status(200).json({ name: "Cancelled" });
		}

		if (req.body.event === "invitee.created") {
			const charge = await stripe.charges.search({
				query: "amount>30 AND amount<35 AND ",
			});
		}
	}

	res.status(200).json(req.body);
};

export default secureBooking;
