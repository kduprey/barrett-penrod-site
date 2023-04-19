import axios from "axios";
import { getInviteeResponse as data } from "data/calendlyResponses/getInviteeResponse";
import { getEventInvitee } from "pages/api/calendly/eventInvitee";
import { describe, expect, it, Mocked, vitest as vi } from "vitest";

vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

describe("eventInvitee should", () => {
	afterEach(() => {
		mockedAxios.get.mockReset();
	});

	it("Should handle a correct data submission", async () => {
		mockedAxios.get.mockResolvedValueOnce({ data });

		const response = await getEventInvitee("test");

		expect(response).toEqual(data);
	});

	it("Should handle an incorrect data submission", async () => {
		mockedAxios.get.mockRejectedValueOnce({ data });

		try {
			const response = await getEventInvitee("");
			expect(response).toBeUndefined();
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
			expect(error).toEqual(Error("Invalid URI"));
		}
	});

	it("Should throw an error if axios fails", async () => {
		mockedAxios.post.mockRejectedValueOnce(
			new Error("Error getting invitee")
		);

		try {
			const response = await getEventInvitee("test");

			expect(response).toBeUndefined();
		} catch (error: unknown) {
			expect(error).toBeInstanceOf(Error);
			if (error instanceof Error)
				expect(error.message).contain("Error getting invitee");
		}
	});
});
