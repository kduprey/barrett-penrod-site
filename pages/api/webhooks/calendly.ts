import { calendlyInviteePayloads, Prisma } from "@prisma/client";
import axios from "axios";
import crypto from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";
import { server } from "../../../config/index";
import prisma from "../../../lib/prisma";
import { CalendlyEvent } from "../../../types/types";
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

	const threeMinutes = 180000;
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
		const invitee: calendlyInviteePayloads = req.body.payload;

		let emailRes,
			eventData: CalendlyEvent | null = null,
			db: calendlyInviteePayloads | null = null;

		// If consultation is booked, send consultation email to client
		try {
			eventData = (await getEventInfo(invitee.event)).data.resource;
			if (eventData.name.includes("Consultation"))
				consultationHandler(invitee.event, invitee.uri);
		} catch (error) {
			console.log(error);
		}

		// Add invitee data to database
		try {
			db = await prisma.calendlyInviteePayloads.create({
				data: invitee,
			});
		} catch (error) {
			console.log(error);
		}

		// Check if invitee is already in database
		try {
			emailRes = await prisma.clients.findMany({
				where: {
					OR: [
						{
							email: invitee.email,
						},
						{
							name: invitee.name,
						},
					],
				},
			});
		} catch (error) {
			console.error(error);
		}

		res.status(200).json({ emailRes, eventData, db });
	}

	if (req.body.event === "invitee.canceled") {
		const invitee: calendlyInviteePayloads = req.body.payload;

		const response = await axios.post(
			`${server}/api/db/calendlyEventPayload`,
			invitee
		);

		if (response.status === 200) {
			return res.status(200).json(response.data);
		}
		return res.status(500).json({
			err: new Error("Error: Failed to insert client"),
			response,
		});
	}
};

export default calendlyWebhook;
