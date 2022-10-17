import { stripeCustomers } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import getRawBody from "raw-body";
import { server, stripe } from "../../../config";
import { stripeCustomer } from "../../../types";

type Data = {
	message: string;
	data?: stripeCustomer;
};

// Tell Next.js to disable parsing body by default,
// as Stripe requires the raw body to validate the event
export const config = {
	api: {
		bodyParser: false,
	},
};

const webhookHandler = async (
	req: NextApiRequest,
	res: NextApiResponse<Data | string | Response>
): Promise<void> => {
	if (req.method != "POST") {
		res.setHeader("Allow", "POST");
		res.status(405).end({
			message: "Method not allowed",
		});
	}

	const rawBody = await getRawBody(req);

	const sig = req.headers["stripe-signature"] as string;

	let event;

	try {
		event = stripe.webhooks.constructEvent(
			rawBody,
			sig,
			`${process.env["STRIPE_WEBHOOK_SECRET"]}`
		);
	} catch (err: any) {
		return res.status(400).send(`Webhook Error: ${err.message}`);
	}

	switch (event.type) {
		case "customer.created":
			const customerCreated: stripeCustomer = event.data
				.object as stripeCustomer;
			// Then define and call a function to handle the event customer.created
			console.log(customerCreated);
			const createResponse = await fetch(
				`${server}/api/db/stripeCustomers`,
				{
					method: "POST",
					body: JSON.stringify(customerCreated),
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (!createResponse.ok) {
				return res.status(500).json({
					message: "Error: Could not create customer",
				});
			}
			const createResult = await createResponse.json();
			return res.status(200).json(createResult);

		case "customer.deleted":
			const customerDeleted = event.data.object as stripeCustomers;
			// Then define and call a function to handle the event customer.deleted
			console.log(customerDeleted);
			const customerInfo = await fetch(
				`${server}/api/db/stripeCustomers?filter=${JSON.stringify({
					id: customerDeleted.id,
				})}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (!customerInfo.ok) {
				return res.status(500).json({
					message: "Error: Could not find customer",
				});
			}
			const customerInfoResult =
				(await customerInfo.json()) as stripeCustomers[];
			if (!customerInfoResult) {
				return res.status(404).json({
					message: "Error: Could not parse customer info",
				});
			}
			const deleteResponse = await fetch(
				`${server}/api/db/stripeCustomers?id=${customerInfoResult[0].id_}`,
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (!deleteResponse.ok) {
				return res.status(500).json({
					message: "Error: Could not delete customer",
				});
			}
			const deleteResult = await deleteResponse.json();
			return res.status(200).json(deleteResult);

		case "customer.updated":
			const customerUpdated = event.data.object as stripeCustomers;
			// Then define and call a function to handle the event customer.updated
			console.log("Customer updated: ", customerUpdated);
			const customerInfoToUpdate = await fetch(
				`${server}/api/db/stripeCustomers?filter=${JSON.stringify({
					id: customerUpdated.id,
				})}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (!customerInfoToUpdate.ok) {
				return res.status(500).json(customerInfoToUpdate);
			}
			const customerInfoToUpdateResult =
				(await customerInfoToUpdate.json()) as stripeCustomers[];
			if (!customerInfoToUpdateResult) {
				return res.status(404).json({
					message: "Error: Could not parse customer info",
					data: customerInfoToUpdateResult,
				});
			}

			const updateResponse = await fetch(
				`${server}/api/db/stripeCustomers?id=${customerInfoToUpdateResult[0].id_}`,
				{
					method: "PUT",
					body: JSON.stringify(customerUpdated),
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (!updateResponse.ok) {
				return res.status(500).json({
					message: "Error: Could not update customer",
				});
			}
			const updateResult = await updateResponse.json();
			return res.status(200).json(updateResult);

		// ... handle other event types
		default:
			console.log(`Unhandled event type ${event.type}`);
			return res.status(400).send(`Unhandled event type ${event.type}`);
	}
};

export default webhookHandler;
