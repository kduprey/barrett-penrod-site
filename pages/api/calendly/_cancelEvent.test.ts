import axios from "axios";
import { cancelEventResponse as data } from "data/calendlyResponses/cancelEventResponse";
import { beforeEach, describe, expect, Mocked, vitest as vi } from "vitest";
import { cancelEvent } from "./cancelEvent";

vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

describe("Contact should", () => {
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
		mockedAxios.post.mockRejectedValueOnce({ status: 500 });

		try {
			const response = await cancelEvent("test");

			expect(response).toBeUndefined();
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
			expect(error).toEqual(Error("Error cancelling event"));
		}
	});
});
