import { sendgrid } from "config";
import { sendFirstTimeEmail } from "pages/api/emails/sendFirstTimeEmail";
import { expect, it, vitest as vi } from "vitest";

const client = {
	email: "test@example.com",
	name: "Test User",
};
const bookingDate = new Date();
const zoomLink = "https://example.com";
const sessionType = "Voice Lesson";
const bookingLocation = "Virtual";
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
				sessionType,
				bookingLocation,
				zoomLink,
			},
		},
	],
	templateId: "d-c859a7aa6e04450b952a683aeb9ded1d",
	mailSettings: {
		sandboxMode: {
			enable: true,
		},
	},
};

describe("sendFirstTimeEmail should", () => {
	beforeEach(() => {
		// Mock the sendgrid.send function
		sendgrid.send = vi.fn().mockResolvedValue({});
	});

	afterEach(() => {
		// Clear all mocks
		vi.clearAllMocks();
	});

	it("should send an email with the correct parameters", async () => {
		await sendFirstTimeEmail({
			client,
			bookingDate,
			zoomLink,
			sessionType,
			bookingLocation,
		});

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
			sendFirstTimeEmail({
				client,
				bookingDate,
				zoomLink,
				sessionType,
				bookingLocation,
			})
		).rejects.toThrowError("Error sending email");
	});
});
