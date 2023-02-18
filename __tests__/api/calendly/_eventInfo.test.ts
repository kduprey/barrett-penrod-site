import axios from "axios";
import { afterEach, describe, expect, it, Mocked, vitest as vi } from "vitest";
import { getEventResponse as data } from "../../../data/calendlyResponses/getEventResponse";
import { getEventInfo } from "../../../pages/api/calendly/eventInfo";

vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

describe("eventInfo should", () => {
	afterEach(() => {
		mockedAxios.get.mockReset();
	});

	it("Should handle a correct data submission", async () => {
		mockedAxios.get.mockResolvedValueOnce({ data });

		const response = await getEventInfo("test");

		expect(response).toEqual(data);
	});

	it("Should handle an incorrect data submission", async () => {
		mockedAxios.get.mockRejectedValueOnce({ data });

		try {
			const response = await getEventInfo("");
			expect(response).toBeUndefined();
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
			expect(error).toEqual(Error("Invalid URI"));
		}
	});

	it("Should throw an error if axios fails", async () => {
		mockedAxios.post.mockRejectedValue(
			new Error("Error getting event info")
		);

		try {
			const response = await getEventInfo(" ");

			expect(response).toBeUndefined();
		} catch (error: any) {
			expect(error).toBeInstanceOf(Error);
			expect(error.message).contain("Error getting event info");
		}
	});
});
