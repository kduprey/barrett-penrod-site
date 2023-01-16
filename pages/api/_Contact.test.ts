import axios from "axios";
import { beforeEach, describe, expect, Mocked, vitest as vi } from "vitest";
import handler, { contact } from "./contact";

const data = {
	records: [
		{
			fields: {
				Name: "Test",
				Email: "test@email.com",
				Message: "This is a test message",
				Status: "Done",
			},
		},
	],
};

vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

describe("Contact should", () => {
	it("Should handle a correct data submission", async () => {
		mockedAxios.post.mockResolvedValueOnce({ data });

		const response = await contact({
			name: "test",
			email: "test@test.com",
			message: "test",
		});

		expect(mockedAxios.post).toHaveBeenCalledTimes(1);
		expect(response).toEqual(data);
	});

	it("Should handle an incorrect data submission", async () => {
		mockedAxios.post.mockRejectedValueOnce(
			new Error("Error sending message")
		);

		const response = await contact({
			name: "test",
			email: "",
			message: "test",
		});

		expect(response).toBeInstanceOf(Error);
		expect(response).toEqual(Error("Unexpected error"));
	});

	it("Should fail the honeypot", async () => {
		mockedAxios.post.mockResolvedValueOnce({ data });

		const response = await contact({
			name: "test",
			email: "test@email.com",
			message: "test",
			age: 20,
		});

		expect(response).toBeInstanceOf(Error);
		expect(response).toEqual(Error("Not a valid field"));
	});
});
