import axios from "axios";
import {
	createWebhookResponse,
	getWebhooks,
} from "data/calendlyResponses/getWebhooks";
import { beforeEach, describe, expect, Mocked, vitest as vi } from "vitest";
import { createWebhook } from "./createWebhook";

vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

describe("CreateWebhook should", () => {
	afterEach(() => {
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
			const response = await createWebhook("");
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
			expect(error).toEqual(Error("Invalid URL"));
		}
	});
});
