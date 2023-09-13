import {
  CalendlyGetWebhook,
  CalendlyPostWebhook,
  CalendlyWebhook,
  dev,
} from "@bpvs/types";
import { apiHandler } from "@bpvs/utils";
import axios from "axios";
import createHttpError from "http-errors";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

/**
 * Create a webhook for Calendly
 * @param url The URL to send the webhook to
 * @returns The webhook that was created
 * @throws Error if the webhook could not be created
 */
const createWebhook = async (url: string): Promise<CalendlyWebhook> => {
  // Check if in development
  if (!dev) throw new Error("Not allowed in production");

  // Check if the URL is valid
  if (url === undefined || url === "") throw new Error("Invalid URL");

  const organization =
    "https://api.calendly.com/organizations/ac748a68-67c0-4e4a-b0d8-4bd791a831ac";
  let webhooks: CalendlyWebhook[] = [];

  // Get all current webhooks
  try {
    const { data } = await axios.get<CalendlyGetWebhook>(
      "https://api.calendly.com/webhook_subscriptions",
      {
        headers: {
          Authorization: `Bearer ${process.env["CALENDLY_API_KEY"] || ""}`,
        },
        params: {
          organization,
          scope: "organization",
        },
      }
    );
    webhooks = data.collection;
  } catch (err) {
    console.warn("Error getting webhooks", err);
  }

  // Check if testing webhook already exists
  const oldWebhookURI = webhooks.find((e) =>
    e.callback_url.includes("ngrok") ? e : null
  )?.uri;

  // Remove old webhook
  if (oldWebhookURI)
    try {
      const response = await axios.delete(oldWebhookURI, {
        headers: {
          Authorization: `Bearer ${process.env["CALENDLY_API_KEY"] || ""}`,
        },
      });

      if (response.status === 204)
        console.info("Old webhook deleted", oldWebhookURI);
      else console.warn("Old webhook not deleted", oldWebhookURI);
    } catch (error) {
      console.warn("Error deleting old webhook", { error });
    }
  else console.warn("No old webhook to delete");

  // Create new webhook
  try {
    const {
      data: { resource: webhook },
    } = await axios.post<CalendlyPostWebhook>(
      "https://api.calendly.com/webhook_subscriptions",
      {
        url: url + "/api/webhooks/calendly",
        events: ["invitee.created", "invitee.canceled"],
        organization,
        scope: "organization",
        signing_key: process.env["CALENDLY_WEBHOOK_SIGNING_KEY"],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env["CALENDLY_API_KEY"] || ""}`,
        },
      }
    );

    console.info("New webhook created", webhook);
    return webhook;
  } catch (error: unknown) {
    console.error(error);

    if (error instanceof Error)
      throw new Error("Error creating webhook", error);

    throw new Error("Error creating webhook");
  }

  throw new Error("Error creating webhook");
};

export { createWebhook };

const createWebhookHandler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { url } = req.body as { url: string };
  if (!url || typeof url !== "string") {
    throw new createHttpError[400]("Invalid URL");
  }

  try {
    const webhook = await createWebhook(url);
    res.status(200).json(webhook);
  } catch (err) {
    console.error("Error creating webhook", err);
    throw new createHttpError[500](
      JSON.stringify({
        message: "Error creating webhook",
        error: err,
      })
    );
  }
};

export default apiHandler({ POST: createWebhookHandler });
