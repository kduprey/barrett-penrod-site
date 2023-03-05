import axios from "axios";
import {
	createWebhookResponse,
	getWebhooks,
} from "data/calendlyResponses/getWebhooks";
import { createWebhook } from "pages/api/calendly/createWebhook";
import { describe, expect, Mocked, vitest as vi } from "vitest";

vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

describe("CreateWebhook should", () => {
	afterEach(() => {
		mockedAxios.get.mockReset();
		mockedAxios.delete.mockReset();
		mockedAxios.post.mockReset();
	});

	it("Should handle a correct data submission", async () => {
		mockedAxios.get.mockResolvedValueOnce({ getWebhooks });
		mockedAxios.delete.mockResolvedValueOnce({ status: 204 });
		mockedAxios.post.mockResolvedValueOnce({ createWebhookResponse });

		try {
			const response = await createWebhook("test");
			expect(mockedAxios.post).toHaveBeenCalledTimes(1);
			expect(response).toEqual(createWebhookResponse);
		} catch (error) {
			console.log(error);
		}
	});

	it("Should handle an incorrect data submission", async () => {
		mockedAxios.get.mockResolvedValueOnce({ getWebhooks });
		mockedAxios.delete.mockResolvedValueOnce({ status: 204 });
		mockedAxios.post.mockResolvedValueOnce({ createWebhookResponse });

		try {
			await createWebhook("");
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
			expect(error).toEqual(Error("Invalid URL"));
		}
	});
});
