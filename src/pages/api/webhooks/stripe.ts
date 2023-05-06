import { stripe, stripeWebhookSecret } from "config/index";
import type { NextApiRequest, NextApiResponse } from "next";
import getRawBody from "raw-body";
import Stripe from "stripe";
import { createCustomer, updateCustomer } from "utils/webhookUtils/stripe";
import prisma from "../../../lib/prisma";
import sendCheckoutEmails from "../../../utils/sendCheckoutEmails";
import { cancelEvent } from "../calendly/cancelEvent";
import { getEventInfo } from "../calendly/eventInfo";
import { getEventInvitee } from "../calendly/eventInvitee";

const PT_SESSION_PRODUCTS = [
	"Personal Training - 1 Session per week",
	"Personal Training - 2 Session per week",
	"Personal Training - 3 Session per week",
	"Personal Training - 4 Session per week",
	"Personal Training - 5 Session per week",
	"Personal Training - 6 Session per week",
];

// Tell Next.js to disable parsing body by default,
// as Stripe requires the raw body to validate the event
export const config = {
	api: {
		bodyParser: false,
	},
};

const webhookHandler = async (
	req: NextApiRequest,
	res: NextApiResponse
): Promise<void> => {
	if (req.method !== "POST") {
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
			stripeWebhookSecret as string
		);
	} catch (err: any) {
		return res.status(400).send(`Webhook Error: ${err.message}`);
	}

	switch (event.type) {
		case "checkout.session.completed":
			console.info("Checkout session completed");
			const session = event.data.object as Stripe.Checkout.Session;

			try {
				const line_items = (
					await stripe.checkout.sessions.listLineItems(session.id)
				).data;
				const ptSessionItem = line_items.find((item) => {
					return PT_SESSION_PRODUCTS.includes(item.description);
				});

				if (ptSessionItem) {
					try {
						const client = await prisma.clients.findUnique({
							where: {
								stripe_customer_id: session.customer as string,
							},
						});
						if (client)
							await prisma.clients.update({
								where: {
									id: client.id,
								},
								data: {
									totalSpend:
										client.totalSpend +
										(session.amount_total as number),
									activeMember: true,
									lessonsRemaining: Number.parseInt(
										ptSessionItem.description.charAt(
											ptSessionItem.description.indexOf(
												"-"
											) + 2
										)
									),
									nextLesson: null,
								},
							});
						res.status(200).send({
							database: "Database updated",
						});
					} catch (err) {
						console.error(err);
						res.status(500).send({
							message: "Error updating database",
						});
					}
				}

				const bookingData = await getEventInfo(
					session.client_reference_id as string
				);
				const inviteeData = await getEventInvitee(
					session.metadata?.inviteeURI as string
				);

				const customer = session.customer as string;

				// Check database for pre-existing customer
				const existingCustomer = await prisma.clients.findUnique({
					where: {
						stripe_customer_id: customer,
					},
				});

				// If customer exists, update their purchase/booking data
				if (existingCustomer)
					await updateCustomer(
						session,
						existingCustomer,
						bookingData,
						line_items
					);
				// If customer doesn't exist, create a new one
				else
					await createCustomer(
						inviteeData,
						bookingData,
						session,
						line_items
					);

				// Send checkout emails
				try {
					const emailsResponse = await sendCheckoutEmails(session);
					if (emailsResponse === true) {
						return res.status(200).send({
							emails: "Checkout emails sent",
							database: "Database updated",
						});
					} else {
						console.error(emailsResponse);

						return res.status(500).send({
							message: "Error sending checkout emails",
						});
					}
				} catch (err) {
					console.error("Error sending checkout emails", err);
					return res.status(500).send({
						message: "Error sending checkout emails",
					});
				}
			} catch (err) {
				console.error("Error executing webhook", err);
				return res.status(500).send({
					message: "Error executing webhook",
				});
			}
			break;
		case "checkout.session.expired":
			const errors: any[] = [];
			// Handle expired checkout sessions
			const sessionExpired = event.data.object as Stripe.Checkout.Session;

			if (sessionExpired.client_reference_id === "test")
				return res.status(200).send({
					message: "Checkout session expired -- Unit test",
					errors,
				});
			console.log("Checkout session expired", sessionExpired);
			// Pull Calendly event info from API with client_reference_id field
			try {
				const eventInfo = await getEventInfo(
					sessionExpired.client_reference_id as string
				);
				console.log("Event info", eventInfo);

				// Call cancellation Calendly API endpoint
				try {
					const cancellationResponse = await cancelEvent(
						eventInfo.resource.uri
					);
					console.info("Cancelled event", cancellationResponse);
				} catch (err) {
					console.error("Error cancelling event", err);
					errors.push(err);
				}

				try {
					const client = await prisma.clients.findUnique({
						where: {
							stripe_customer_id:
								sessionExpired.customer as string,
						},
					});
					if (!client)
						return res.status(200).send({
							message: "Checkout session expired",
							errors,
						});
				} catch (error) {
					console.error("Error finding client", error);
					errors.push(error);
				}

				// Update client in database respectively
				try {
					const updateClient = await prisma.clients.update({
						where: {
							stripe_customer_id:
								sessionExpired.customer as string,
						},
						data: {
							nextLesson: null,
						},
					});
					console.info("Updated client", updateClient);
					return res.status(200).send({
						message: "Checkout session expired",
						errors,
					});
				} catch (error) {
					console.error("Error updating client", error);
					errors.push(error);
				}
			} catch (err) {
				console.error("Error executing webhook", err);
				return res.status(500).send({
					message: "Error executing webhook",
				});
			}

			break;
		default:
			console.log(`Unhandled event type ${event.type}`);
			return res.status(400).send(`Unhandled event type ${event.type}`);
	}
};

export default webhookHandler;
