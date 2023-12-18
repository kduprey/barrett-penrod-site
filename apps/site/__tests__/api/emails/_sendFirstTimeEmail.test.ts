import { sendFirstTimeEmail, sendgrid } from "@bpvs/emails-temp";
import { formatBookingDate } from "packages/emails-temp/src/lib/utils";
import { expect, it, vitest as vi } from "vitest";

const client = {
  email: "test@example.com",
  name: "Test User",
};
const formattedBookingDate = formatBookingDate(
  new Date(Date.now()),
  "America/New_York",
);
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
        ...formattedBookingDate,
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
      formattedBookingDate,
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
    sendgrid.send = vi.fn().mockRejectedValue(new Error("Error sending email"));

    await expect(
      sendFirstTimeEmail({
        client,
        formattedBookingDate,
        zoomLink,
        sessionType,
        bookingLocation,
      }),
    ).rejects.toThrowError("Error sending email");
  });
});
