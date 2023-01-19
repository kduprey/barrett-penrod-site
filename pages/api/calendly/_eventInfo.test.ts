import axios from "axios";
import { describe, expect, it, Mocked, vitest as vi } from "vitest";
import { getInviteeResponse as data } from "../../../data/calendlyResponses/getInviteeResponse";
import { getEventInfo } from "./eventInfo";
import eventInvitee, { getEventInvitee } from "./eventInvitee";

vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

describe("eventInfo should", () => {
	it("Should handle a correct data submission", async () => {
		mockedAxios.get.mockResolvedValueOnce({ data });

		const response = await getEventInfo("test");

		expect(mockedAxios.get).toHaveBeenCalledTimes(1);
		expect(response).toEqual(data);
	});

	it("Should handle an incorrect data submission", async () => {
		mockedAxios.get.mockRejectedValueOnce(
			new Error("Error getting event info")
		);

		try {
			const response = await getEventInfo("");
			expect(response).toBeUndefined();
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
			expect(error).toEqual(Error("Invalid URI"));
		}
	});
});
