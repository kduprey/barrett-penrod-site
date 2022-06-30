import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

type Data = {
	customer?: Stripe.Customer | Stripe.DeletedCustomer;
	session?: Stripe.Checkout.Session;
	error?: any;
};

const success = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
		apiVersion: "2020-08-27",
	});

	try {
		const session = await stripe.checkout.sessions.retrieve(
			`${req.query.session_id}`
		);
		const customer = await stripe.customers.retrieve(`${session.customer}`);

		res.status(200).json({
			customer,
			session,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			error,
		});
	}
};

export default success;
