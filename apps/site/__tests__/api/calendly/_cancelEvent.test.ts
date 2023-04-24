import { cancelEventResponse } from "@bpvs/site/src/data/calendlyResponses/cancelEventResponse";
import { cancelCalendlyEvent } from "@bpvs/utils";
import axios from "axios";
import { describe, expect, Mocked, vitest as vi } from "vitest";

vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

describe("cancelEvent should", () => {
	afterEach(() => {
		mockedAxios.post.mockReset();
	});

	it("Should handle a correct data submission", async () => {
		mockedAxios.post.mockResolvedValueOnce({ cancelEventResponse });

		try {
			const response = await cancelCalendlyEvent("test");

			expect(mockedAxios.post).toHaveBeenCalledTimes(1);
			expect(response).toEqual(cancelEventResponse);
		} catch (error) {
			expect(error).toBeUndefined();
		}
	});

	it("Should handle an incorrect data submission", async () => {
		mockedAxios.post.mockResolvedValueOnce({ cancelEventResponse });

		try {
			const response = await cancelCalendlyEvent("");

			expect(response).toBeUndefined();
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
			expect(error).toEqual(Error("Invalid URI"));
		}
	});

	it("Should throw an error if axios fails", async () => {
		mockedAxios.post.mockRejectedValue(new Error("Error cancelling event"));

		try {
			await cancelCalendlyEvent("test");
		} catch (error: unknown) {
			expect(error).toBeInstanceOf(Error);
			if (error instanceof Error)
				expect(error.message).contain("Error cancelling event");
		}
	});
});
