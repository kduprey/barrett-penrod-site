import { sendgrid } from "config";
import { expect, it, vitest as vi } from "vitest";
import { sendConsultationEmail } from "../../../pages/api/emails/sendConsultation";

const client = {
	email: "test@example.com",
	name: "Test User",
};
const bookingDate = new Date();
const zoomLink = "https://example.com";
const sendgridSendBody = {
	from: {
		email: "barrett@barrettpenrod.com",
		name: "Barrett Penrod Voice Studio",
	},
	replyTo: {
		email: "barrettpenrod@gmail.com",
		name: "Barrett Penrod",
	},
	personalizations: [
		{
			to: client,
			dynamicTemplateData: {
				bookingTime: new Date(bookingDate).toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				}),
				bookingDate: new Date(bookingDate).toLocaleDateString([], {
					weekday: "long",
					month: "short",
					day: "numeric",
					year: "numeric",
				}),
				zoomLink,
			},
		},
	],
	templateId: "d-4a2d850cce134d40bdd662e3fe2a96b3",
	mailSettings: {
		sandboxMode: {
			enable: true,
		},
	},
};

describe("sendConsultationEmail", () => {
	beforeEach(() => {
		// Mock the sendgrid.send function
		sendgrid.send = vi.fn().mockResolvedValue({});
	});

	afterEach(() => {
		// Clear all mocks
		vi.clearAllMocks();
	});

	it("should send an email with the correct parameters", async () => {
		await sendConsultationEmail({ client, bookingDate, zoomLink });

		// Expect the sendgrid.send function to have been called with the correct parameters
		expect(sendgrid.send).toHaveBeenCalledWith(sendgridSendBody);

		// Expect the sendgrid.send function to have been called once
		expect(sendgrid.send).toHaveBeenCalledTimes(1);
	});

	it("should throw an error if sending the email fails", async () => {
		// Mock the sendgrid.send function to reject the promise
		sendgrid.send = vi
			.fn()
			.mockRejectedValue(new Error("Error sending email"));

		await expect(
			sendConsultationEmail({ client, bookingDate, zoomLink })
		).rejects.toThrowError("Error sending email");
	});
});
