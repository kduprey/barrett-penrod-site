import axios from "axios";
import { cancelEventResponse as data } from "data/calendlyResponses/cancelEventResponse";
import { describe, expect, Mocked, vitest as vi } from "vitest";
import { cancelEvent } from "../../../pages/api/calendly/cancelEvent";

vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

describe("cancelEvent should", () => {
	afterEach(() => {
		mockedAxios.post.mockReset();
	});

	it("Should handle a correct data submission", async () => {
		mockedAxios.post.mockResolvedValueOnce({ data });

		try {
			const response = await cancelEvent("test");

			expect(mockedAxios.post).toHaveBeenCalledTimes(1);
			expect(response).toEqual(data);
		} catch (error) {
			expect(error).toBeUndefined();
		}
	});

	it("Should handle an incorrect data submission", async () => {
		mockedAxios.post.mockResolvedValueOnce({ data });

		try {
			const response = await cancelEvent("");

			expect(response).toBeUndefined();
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
			expect(error).toEqual(Error("Invalid URI"));
		}
	});

	it("Should throw an error if axios fails", async () => {
		mockedAxios.post.mockRejectedValueOnce(
			new Error("Error cancelling event")
		);

		try {
			const response = await cancelEvent("test");

			expect(response).toBeUndefined();
		} catch (error: unknown) {
			expect(error).toBeInstanceOf(Error);
			if (error instanceof Error)
				expect(error.message).contain(
					new Error("Error cancelling event")
				);
		}
	});
});
