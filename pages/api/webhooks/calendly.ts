import { calendlyInviteePayloads } from "@prisma/client";
import axios from "axios";
import crypto from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";
import { server } from "../../../config/index";
import { CalendlyInviteePayload, Invitee } from "../../../types/types";

type Data = {};

const calendlyWebhook = async (
	req: NextApiRequest,
	res: NextApiResponse<Data>
) => {
	const webhookSigningKey = process.env
		.CALENDLY_WEBHOOK_SIGNING_KEY as string;

	// Extract the timestamp and signature from the header

	const calendlySignature = req.headers[
		"calendly-webhook-signature"
	] as string;
	console.log(req.headers);
	console.log(calendlySignature);

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
