import axios, { AxiosError } from "axios";
import { beforeEach, describe, expect, it, Mocked, vitest as vi } from "vitest";
import { contact } from "./contact";

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
	afterEach(() => {
		mockedAxios.post.mockReset();
	});

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

		try {
			const response = await contact({
				name: "test",
				email: "",
				message: "test",
			});

			expect(response.records).toBeUndefined();
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
			expect(error).toEqual(Error("Not a valid input"));
		}
	});

	it("Should fail the honeypot", async () => {
		mockedAxios.post.mockResolvedValueOnce({ data });

		try {
			const response = await contact({
				name: "test",
				email: "test@email.com",
				message: "test",
				age: 20,
			});

			expect(response.records).toBeUndefined();
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
			expect(error).toEqual(Error("Not a valid field"));
		}
	});

	it("Should throw an error if axios fails", async () => {
		mockedAxios.post.mockRejectedValueOnce(
			new Error("Error sending message")
		);

		try {
			const response = await contact({
				name: "test",
				email: "test@test.com",
				message: "test",
			});

			expect(response).toBeUndefined();
		} catch (error: any) {
			expect(error).toBeInstanceOf(Error);
			expect(error.message).contain(new Error("Error sending message"));
		}
	});
});
