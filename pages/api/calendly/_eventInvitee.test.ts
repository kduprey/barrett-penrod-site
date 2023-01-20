import axios from "axios";
import { describe, expect, it, Mocked, vitest as vi } from "vitest";
import { getInviteeResponse as data } from "../../../data/calendlyResponses/getInviteeResponse";
import eventInvitee, { getEventInvitee } from "./eventInvitee";

vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

describe("eventInvitee should", () => {
	afterEach(() => {
		mockedAxios.post.mockReset();
	});

	it("Should handle a correct data submission", async () => {
		mockedAxios.get.mockResolvedValueOnce({ data });

		const response = await getEventInvitee("test");

		expect(mockedAxios.get).toHaveBeenCalledTimes(1);
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
		} catch (error: any) {
			expect(error).toBeInstanceOf(Error);
			expect(error.message).contain("Error getting invitee");
		}
	});
});
