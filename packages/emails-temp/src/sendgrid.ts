import { dev } from "@bpvs/types";
import sendgridClient from "@sendgrid/mail";

if (dev) {
	sendgridClient.setApiKey(process.env.SENDGRID_DEV_API_KEY as string);
} else {
	sendgridClient.setApiKey(process.env.SENDGRID_API_KEY as string);
}
export const sendgrid = sendgridClient;
