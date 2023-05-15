import { cancelEventResponse as data } from "@bpvs/site/data/calendlyResponses/cancelEventResponse";
import cancelEvent from "@bpvs/site/pages/api/calendly/cancelEvent";
import axios from "axios";
import { describe, expect, Mocked, vitest as vi } from "vitest";

vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

describe("cancelEvent should", () => {
  afterEach(() => {
    mockedAxios.post.mockReset();
  });

  it("Should handle a correct data submission", async () => {
    mockedAxios.post.mockResolvedValueOnce({ data });

    try {
      const response = await cancelEvent("test");

      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
      expect(response).toEqual(data);
    } catch (error) {
      expect(error).toBeUndefined();
    }
  });

  it("Should handle an incorrect data submission", async () => {
    mockedAxios.post.mockResolvedValueOnce({ data });

    try {
      const response = await cancelEvent("");

      expect(response).toBeUndefined();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toEqual(Error("Invalid URI"));
    }
  });

  it("Should throw an error if axios fails", async () => {
    mockedAxios.post.mockRejectedValue(new Error("Error cancelling event"));

    try {
      await cancelEvent("test");
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(Error);
      if (error instanceof Error)
        expect(error.message).contain("Error cancelling event");
    }
  });
});
