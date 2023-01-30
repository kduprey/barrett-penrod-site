import { getEventResponse } from "data/calendlyResponses/getEventResponse";
import { getInviteeResponse } from "data/calendlyResponses/getInviteeResponse";
import { describe, it, vitest as vi } from "vitest";

vi.mock("getEventInfo", () => {
	return vi.fn().mockResolvedValue(getEventResponse);
});

vi.mock("getEventInvitee", () => {
	return vi.fn().mockResolvedValue(getInviteeResponse);
});

describe("consultationHandler should", () => {
	// afterEach(() => {
	// 	mockedAxios.post.mockReset();
	// });

	it("Should handle a correct data submission", async () => {
		// Mock geteventInfo
		// Mock getInviteeInfo
		// Mock sendEmail
	});
});
