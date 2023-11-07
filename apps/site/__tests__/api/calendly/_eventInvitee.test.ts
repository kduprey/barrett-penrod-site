import { getCalendlyInvitee } from "@bpvs/utils";
import axios from "axios";
import { describe, expect, it, Mocked, vitest as vi } from "vitest";
import { getInviteeResponse as data } from "../../../src/data/calendlyResponses/getInviteeResponse";

vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

describe("eventInvitee should", () => {
	afterEach(() => {
		mockedAxios.get.mockReset();
		mockedAxios.create.mockReset();
	});

	it("Should handle a correct data submission", async () => {
		mockedAxios.create.mockReturnValueOnce(mockedAxios);
		mockedAxios.get.mockResolvedValueOnce({ data });

		const response = await getCalendlyInvitee("test");

		expect(response).toEqual(data);
	});

	it("Should handle an incorrect data submission", async () => {
		mockedAxios.create.mockReturnValueOnce(mockedAxios);
		mockedAxios.get.mockRejectedValueOnce({ data });

		try {
			const response = await getCalendlyInvitee("");
			expect(response).toBeUndefined();
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
			expect(error).toEqual(Error("Invalid URI"));
		}
	});

	it("Should throw an error if axios fails", async () => {
		mockedAxios.create.mockReturnValueOnce(mockedAxios);
		mockedAxios.post.mockRejectedValueOnce(new Error("Error getting invitee"));

		try {
			const response = await getCalendlyInvitee("test");

			expect(response).toBeUndefined();
		} catch (error: unknown) {
			expect(error).toBeInstanceOf(Error);
			if (error instanceof Error)
				expect(error.message).contain("Error getting invitee");
		}
	});
});
