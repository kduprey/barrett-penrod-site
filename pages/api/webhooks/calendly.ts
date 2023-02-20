import { calendlyInviteePayloads, Prisma } from "@prisma/client";
import crypto from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";
import { CalendlyEvent } from "types/calendlyTypes";
import getSessionType from "utils/getSessionType";
import { createDbClient } from "utils/webhookUtils/calendly";
import prisma from "../../../lib/prisma";
import { getEventInfo } from "../calendly/eventInfo";
import { consultationHandler } from "../consultation";
const calendlyWebhook = async (req: NextApiRequest, res: NextApiResponse) => {
	const webhookSigningKey = process.env[
		"CALENDLY_WEBHOOK_SIGNING_KEY"
	] as string;

	// Extract the timestamp and signature from the header

	const calendlySignature = req.headers[
		"calendly-webhook-signature"
	] as string;
	if (!calendlySignature) throw new Error("Invalid Signature");
	const { t, signature } = calendlySignature?.split(",").reduce(
		(acc, currentValue) => {
			const [key, value] = currentValue.split("=");
			if (key === "t") {
				// UNIX timestamp
				acc.t = value;
			}
			if (key === "v1") {
				acc.signature = value;
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

	const data = t + "." + JSON.stringify(req.body);

	const expectedSignature = crypto
		.createHmac("sha256", webhookSigningKey)
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

	if (req.body.event === "invitee.created") {
		const payloadData: calendlyInviteePayloads = req.body.payload;

		let existingClient,
			eventData: CalendlyEvent,
			payloadDbEntry: Prisma.calendlyInviteePayloadsGetPayload<false>;

		// Add payload data to database
		try {
			payloadDbEntry = await prisma.calendlyInviteePayloads.create({
				data: payloadData,
			});
		} catch (error) {
			console.log(error);
			throw new Error("Error adding payload to database");
		}

		// If consultation is booked, run consultation handler
		try {
			eventData = await getEventInfo(payloadData.event);
			if (eventData.resource.name.includes("Consultation"))
				consultationHandler(
					payloadData.event,
					payloadData.uri,
					payloadDbEntry.id
				);
		} catch (error) {
			console.log(error);
			throw new Error("Error getting event info");
		}

		res.status(200).json({
			emailRes: existingClient,
			eventData,
			db: payloadDbEntry,
		});
	}

	if (req.body.event === "invitee.canceled") {
		const invitee: calendlyInviteePayloads = req.body.payload;
		try {
			const response = await prisma.calendlyInviteePayloads.create({
				data: invitee,
			});

			return res.status(200).json(response);
		} catch (error) {
			console.error(error);
			return res.status(500).json({
				err: new Error("Error: Failed to insert client"),
			});
		}
	}
};

export default calendlyWebhook;
