import { stripe } from "@bpvs/config";
import Stripe from "stripe";
import { z } from "zod";
import { checkoutSessionCompleted, checkoutSessionExpired } from "@/lib";

export const POST = async (req: Request) => {
	if (!process.env.STRIPE_WEBHOOK_SECRET)
		throw new Error("Missing Stripe webhook secret");

	const body = await req.text();
	const sig = z.string().safeParse(req.headers.get("stripe-signature"));

	if (!sig.success)
		return new Response(`Webhook Error: ${sig.error.message}`, {
			status: 400,
		});

	let event;

	try {
		event = stripe.webhooks.constructEvent(
			body,
			sig.data,
			process.env.STRIPE_WEBHOOK_SECRET
		);
	} catch (err: unknown) {
		if (err instanceof Stripe.errors.StripeSignatureVerificationError)
			return new Response(`Webhook Error: ${err.message}`, { status: 400 });

		return new Response(
			JSON.stringify({
				error: err,
				message: "Webhook error",
			}),
			{ status: 400 }
		);
	}

	try {
		switch (event.type) {
			case "checkout.session.completed": {
				console.info("Checkout session completed");
				const session = event.data.object;

				await checkoutSessionCompleted(session);
				break;
			}
			case "checkout.session.expired": {
				// Handle expired checkout sessions
				const sessionExpired = event.data.object;

				if (sessionExpired.client_reference_id === "test")
					return Response.json(
						{
							message: "Checkout session expired -- Unit test",
						},
						{
							status: 200,
						}
					);

				await checkoutSessionExpired(sessionExpired);
				break;
			}
			default:
				console.error(`Unhandled event type ${event.type}`);
				return new Response(`Unhandled event type ${event.type}`, {
					status: 400,
				});
		}
	} catch (err: unknown) {
		console.error(err);
		return new Response(
			JSON.stringify({
				error: err,
			}),
			{
				status: 500,
			}
		);
	}

	return new Response(
		JSON.stringify({
			received: true,
		}),
		{
			status: 200,
		}
	);
};
