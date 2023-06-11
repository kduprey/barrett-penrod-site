import { getCalendlyEvent } from "@bpvs/utils";
import axios from "axios";
import { afterEach, describe, expect, it, Mocked, vitest as vi } from "vitest";
import { getEventResponse as data } from "../../../src/data/calendlyResponses/getEventResponse";

vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

describe("eventInfo should", () => {
  afterEach(() => {
    mockedAxios.get.mockReset();
  });

  it("Should handle a correct data submission", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data });

    const response = await getCalendlyEvent("test");

    expect(response).toEqual(data);
  });

  it("Should handle an incorrect data submission", async () => {
    mockedAxios.get.mockRejectedValueOnce({ data });

    try {
      const response = await getCalendlyEvent("");
      expect(response).toBeUndefined();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toEqual(Error("Invalid URI"));
    }
  });

  it("Should throw an error if axios fails", async () => {
    mockedAxios.post.mockRejectedValue(new Error("Error getting event info"));

    try {
      const response = await getCalendlyEvent(" ");

      expect(response).toBeUndefined();
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(Error);
      if (error instanceof Error)
        expect(error.message).contain("Error getting event info");
    }
  });
});
