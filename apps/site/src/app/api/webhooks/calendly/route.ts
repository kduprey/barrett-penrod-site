import crypto from "node:crypto";
import type { calendlyInviteePayloads } from "@bpvs/db";
import { prisma } from "@bpvs/db";
import { getCalendlyEvent } from "@bpvs/utils";
import type { NextApiRequest } from "next";
import { z } from "zod";
import { calendlyPayloadDataSchema } from "@bpvs/validation";
import { trytm } from "@bdsqqq/try";
import { fromZodError } from "zod-validation-error";
import { consultationHandler } from "@/lib";

export const POST = async (req: NextApiRequest) => {
	const webhookSigningKey = process.env.CALENDLY_WEBHOOK_SIGNING_KEY;

	// Extract the timestamp and signature from the header
	try {
		const calendlySignature = req.headers[
			"calendly-webhook-signature"
		] as string;
		if (!calendlySignature) throw new Error("No Signature");
		const { t, signature } = calendlySignature.split(",").reduce(
			(acc, currentValue) => {
				const [key, value] = currentValue.split("=");
				if (key === "t") {
					// UNIX timestamp
					acc.t = value as string;
				}
				if (key === "v1") {
					acc.signature = value as string;
				}
				return acc;
			},
			{
				t: "",
				signature: "",
			}
		);

		if (!t || !signature) throw new Error("Invalid Signature");

		// Create the signed payload by concatenating the timestamp (t), the character '.' and the request body's JSON payload.

		const data = `${t}.${JSON.stringify(req.body)}`;

		const expectedSignature = crypto
			.createHmac("sha256", webhookSigningKey as string)
			.update(data, "utf8")
			.digest("hex");

		// Determine the expected signature by computing an HMAC with the SHA256 hash function.

		if (expectedSignature !== signature) {
			// Signature is invalid!

			throw new Error("Invalid Signature");
		}

		const threeMinutes = 360000;
		const tolerance = threeMinutes;
		const timestampMilliseconds = Number(t) * 1000;

		if (timestampMilliseconds < Date.now() - tolerance) {
			// Signature is invalid!
			// The signature's timestamp is outside of the tolerance zone defined above.
			throw new Error(
				"Invalid Signature. The signature's timestamp is outside of the tolerance zone."
			);
		}

		// Signature is valid!

		const bodySchema = z
			.object({
				event: z.enum(["invitee.created", "invitee.canceled"]),
				payload: z.unknown(),
			})
			.safeParse(req.body);

		if (!bodySchema.success) {
			console.error(bodySchema.error);
			return new Response(fromZodError(bodySchema.error).message, {
				status: 400,
			});
		}

		const event = z
			.enum(["invitee.created", "invitee.canceled"])
			.safeParse(bodySchema.data.event);

		if (!event.success) {
			console.error(event.error);
			return new Response(fromZodError(event.error).message, {
				status: 400,
			});
		}

		if (event.data === "invitee.created") {
			const payloadData = calendlyPayloadDataSchema.safeParse(
				bodySchema.data.payload
			);

			if (!payloadData.success) {
				console.error(payloadData.error);
				return new Response(fromZodError(payloadData.error).message, {
					status: 400,
				});
			}

			// Add payload data to database
			console.info("Adding payload to database...");
			const [payloadDbEntry, payloadDbEntryErr] = await trytm(
				prisma.calendlyInviteePayloads.create({
					data: payloadData.data,
				})
			);

			if (payloadDbEntryErr)
				throw new Error("Error adding payload to database");
			console.info("Payload added to database", payloadDbEntry);

			// If consultation is booked, run consultation handler
			console.info("Getting event info...");
			const [eventData, eventDataErr] = await trytm(
				getCalendlyEvent(payloadData.data.event)
			);

			if (eventDataErr) throw new Error("Error getting event info");

			if (eventData.resource.name.includes("Consultation"))
				await consultationHandler(payloadData.data, payloadDbEntry.id);

			return Response.json(payloadDbEntry, {
				status: 200,
			});
		}
		// if event.data === "invitee.canceled"
		const invitee = bodySchema.data.payload as calendlyInviteePayloads;
		await prisma.calendlyInviteePayloads.create({
			data: invitee,
		});
		return Response.json(invitee, {
			status: 200,
		});
	} catch (error) {
		console.error(error);
		return new Response("Internal Server Error", {
			status: 500,
		});
	}
};
