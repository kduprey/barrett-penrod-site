import { getEventResponse } from "@bpvs/site/src/data/calendlyResponses/getEventResponse";
import { getCalendlyEvent } from "@bpvs/utils";
import axios from "axios";
import { afterEach, describe, expect, it, Mocked, vitest as vi } from "vitest";

vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

describe("eventInfo should", () => {
	afterEach(() => {
		mockedAxios.get.mockReset();
	});

	it("Should handle a correct getEventResponse submission", async () => {
		mockedAxios.get.mockResolvedValueOnce({ getEventResponse });

		const response = await getCalendlyEvent("test");

		expect(response).toEqual(getEventResponse);
	});

	it("Should handle an incorrect getEventResponse submission", async () => {
		mockedAxios.get.mockRejectedValueOnce({ getEventResponse });

		try {
			const response = await getCalendlyEvent("");
			expect(response).toBeUndefined();
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
			expect(error).toEqual(Error("Invalid URI"));
		}
	});

	it("Should throw an error if axios fails", async () => {
		mockedAxios.post.mockRejectedValue(new Error("Error getting event info"));

		try {
			const response = await getCalendlyEvent(" ");

			expect(response).toBeUndefined();
		} catch (error: unknown) {
			expect(error).toBeInstanceOf(Error);
			if (error instanceof Error)
				expect(error.message).contain("Error getting event info");
		}
	});
});
