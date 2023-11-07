import axios from "axios";
import { Mocked, describe, expect, vitest as vi } from "vitest";
import {
	createWebhookResponse,
	getWebhooks,
} from "../../../src/data/calendlyResponses/getWebhooks";
import { createCalendlyWebhook } from "@bpvs/utils";

vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

describe("CreateWebhook should", () => {
	afterEach(() => {
		mockedAxios.get.mockReset();
		mockedAxios.delete.mockReset();
		mockedAxios.post.mockReset();
		mockedAxios.create.mockReset();
	});

	it("Should handle a correct data submission", async () => {
		mockedAxios.get.mockResolvedValueOnce({ getWebhooks });
		mockedAxios.delete.mockResolvedValueOnce({ status: 204 });
		mockedAxios.post.mockResolvedValueOnce({ createWebhookResponse });
		mockedAxios.create.mockReturnValueOnce(mockedAxios);

		try {
			const response = await createCalendlyWebhook("test");
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
		mockedAxios.create.mockReturnValueOnce(mockedAxios);

		try {
			await createCalendlyWebhook("");
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
			expect(error).toEqual(Error("Invalid URL"));
		}
	});
});
