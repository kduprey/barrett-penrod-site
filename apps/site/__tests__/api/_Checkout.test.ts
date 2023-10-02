// import Stripe from "stripe";
import { bundles, stripe } from "@bpvs/config";
import { CalendlyInvitee } from "@bpvs/types";
import axios from "axios";
import { Mocked, describe, expect, it } from "vitest";
import { getInviteeResponse } from "../../src/data/calendlyResponses/getInviteeResponse";
import { createCheckoutSession } from "../../src/pages/api/checkout";

vi.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

describe("Checkout should", () => {
  afterEach(() => {
    mockedAxios.post.mockReset();
  });

  it("create a successful checkout session for normal downpayment", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: getInviteeResponse });

    const session = await createCheckoutSession({
      service: 0,
      location: 2,
      eventURI: "test",
      inviteeURI: "test",
      origin: "https://test.com",
    });
    // Check for no errors
    expect(session).not.toBeInstanceOf(Error);

    checkValidCheckoutURL(session.url);

    const sessionData = await stripe.checkout.sessions.retrieve(
      session.id as string,
    );
    expect(
      sessionData.amount_total,
      "Checking for accurate downpayment amount",
    ).toBe(6000);

    await stripe.checkout.sessions.expire(session.id as string);
  });

  it("create a successful checkout session with a bundle", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: getInviteeResponse });

    const session = await createCheckoutSession({
      service: 0,
      location: 2,
      bundle: 0,
      eventURI: "test",
      inviteeURI: "test",
      origin: "https://test.com",
    });

    // Check for no errors
    expect(session).not.toBeInstanceOf(Error);

    checkValidCheckoutURL(session.url);

    const sessionData = await stripe.checkout.sessions.retrieve(
      session.id as string,
    );
    expect(
      sessionData.amount_total?.toString(),
      "Checking for accurate bundle total",
    ).toBe(bundles[0].price + "00");

    await stripe.checkout.sessions.expire(session.id as string);
  });

  it("create a successful checkout session with a longer session", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: getInviteeResponse });

    const session = await createCheckoutSession({
      service: 0,
      location: 2,
      isLonger: true,
      eventURI: "test",
      inviteeURI: "test",
      origin: "https://test.com",
    });

    // Check for no errors
    expect(session).not.toBeInstanceOf(Error);

    checkValidCheckoutURL(session.url);

    const sessionData = await stripe.checkout.sessions.retrieve(
      session.id as string,
    );
    expect(
      sessionData.expires_at,
      "Checking expiration is 24 hours from now +/- 3 seconds",
    )
      .greaterThan(
        Math.floor(new Date(Date.now() + 86400000).getTime() / 1000 - 3),
      )
      .lessThan(
        Math.floor(new Date(Date.now() + 86400000).getTime() / 1000 + 3),
      );

    await stripe.checkout.sessions.expire(session.id as string);
  });

  it("create a successful checkout session with SVS session downpayment", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: getInviteeResponse });

    const session = await createCheckoutSession({
      service: 2,
      location: 2,
      eventURI: "test",
      inviteeURI: "test",
      origin: "https://test.com",
    });
    // Check for no errors
    expect(session).not.toBeInstanceOf(Error);

    checkValidCheckoutURL(session.url);
    const sessionData = await stripe.checkout.sessions.retrieve(
      session.id as string,
    );

    expect(
      sessionData.amount_total,
      "Checking for accurate downpayment amount",
    ).toBe(6000);
  });

  it("create a successful checkout session with a lesson downpayment", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: getInviteeResponse });

    const session = await createCheckoutSession({
      service: 1,
      location: 1,
      eventURI: "test",
      inviteeURI: "test",
      origin: "https://test.com",
    });

    // Check for no errors
    expect(session).not.toBeInstanceOf(Error);

    checkValidCheckoutURL(session.url);

    const sessionData = await stripe.checkout.sessions.retrieve(
      session.id as string,
    );

    expect(
      sessionData.amount_total,
      "Checking for accurate downpayment amount",
    ).toBe(8600);

    await stripe.checkout.sessions.expire(session.id as string);
  });

  it("create a successful checkout session with a SVS downpayment", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: getInviteeResponse });

    const session = await createCheckoutSession({
      service: 2,
      location: 1,
      eventURI: "test",
      inviteeURI: "test",
      origin: "https://test.com",
    });

    // Check for no errors
    expect(session).not.toBeInstanceOf(Error);

    checkValidCheckoutURL(session.url);

    const sessionData = await stripe.checkout.sessions.retrieve(
      session.id as string,
    );

    expect(
      sessionData.amount_total,
      "Checking for accurate downpayment amount",
    ).toBe(8600);

    await stripe.checkout.sessions.expire(session.id as string);
  });

  it("create a successful checkout session with bundle and OpenJar fee", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: getInviteeResponse });

    const session = await createCheckoutSession({
      service: 1,
      location: 1,
      bundle: 0,
      eventURI: "test",
      inviteeURI: "test",
      origin: "https://test.com",
    });

    // Check for no errors
    expect(session).not.toBeInstanceOf(Error);

    checkValidCheckoutURL(session.url);

    const sessionData = await stripe.checkout.sessions.retrieve(
      session.id as string,
    );

    expect(sessionData.amount_total, "Checking for accurate bundle total").toBe(
      44600,
    );

    await stripe.checkout.sessions.expire(session.id as string);
  });

  it("session should set customer creation to always if not in Stripe", async () => {
    const responseWithNonExistantEmail: CalendlyInvitee = {
      resource: {
        ...getInviteeResponse.resource,
        name: "Test User 100",
        email: "test100@email.com",
      },
    };

    mockedAxios.get.mockResolvedValueOnce({
      data: { ...responseWithNonExistantEmail },
    });

    const session = await createCheckoutSession({
      service: 0,
      location: 2,
      eventURI: "test",
      inviteeURI: "test",
      origin: "https://test.com",
    });

    // Check for no errors
    expect(session).not.toBeInstanceOf(Error);

    checkValidCheckoutURL(session.url);

    const sessionData = await stripe.checkout.sessions.retrieve(
      session.id as string,
    );

    expect(sessionData.customer_creation).toBe("always");

    await stripe.checkout.sessions.expire(session.id as string);
  });

  it("session should have correct downpayment for trial session", async () => {
    const responseWithNonExistantEmail: CalendlyInvitee = {
      resource: {
        ...getInviteeResponse.resource,
        name: "Test User 100",
        email: "test100@email.com",
      },
    };

    mockedAxios.get.mockResolvedValueOnce({
      data: { ...responseWithNonExistantEmail },
    });

    const session = await createCheckoutSession({
      service: 4, // Trial session
      location: 1, // OpenJar
      eventURI: "test",
      inviteeURI: "test",
      origin: "https://test.com",
    });

    // Check for no errors
    expect(session).not.toBeInstanceOf(Error);

    checkValidCheckoutURL(session.url);

    const sessionData = await stripe.checkout.sessions.retrieve(
      session.id as string,
    );

    expect(sessionData.amount_total).toBe(8600);

    await stripe.checkout.sessions.expire(session.id as string);
  });

  it("session should have correct downpayment for SVS trial session", async () => {
    const responseWithNonExistantEmail: CalendlyInvitee = {
      resource: {
        ...getInviteeResponse.resource,
        name: "Test User 100",
        email: "test100@email.com",
      },
    };

    mockedAxios.get.mockResolvedValueOnce({
      data: { ...responseWithNonExistantEmail },
    });

    const session = await createCheckoutSession({
      service: 5, // Trial SVS session
      location: 1, // OpenJar
      eventURI: "test",
      inviteeURI: "test",
      origin: "https://test.com",
    });

    // Check for no errors
    expect(session).not.toBeInstanceOf(Error);

    checkValidCheckoutURL(session.url);

    const sessionData = await stripe.checkout.sessions.retrieve(
      session.id as string,
    );

    expect(sessionData.amount_total).toBe(8600);

    await stripe.checkout.sessions.expire(session.id as string);
  });

  it("session should throw error for trial session with bundle", async () => {
    const responseWithNonExistantEmail: CalendlyInvitee = {
      resource: {
        ...getInviteeResponse.resource,
        name: "Test User 100",
        email: "test100@email.com",
      },
    };

    mockedAxios.get.mockResolvedValueOnce({
      data: { ...responseWithNonExistantEmail },
    });
    try {
      const session = await createCheckoutSession({
        service: 4, // Trial session
        location: 1, // OpenJar
        bundle: 0,
        eventURI: "test",
        inviteeURI: "test",
        origin: "https://test.com",
      });
      expect(session).to.be.undefined;
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(Error);
      if (error instanceof Error)
        expect(error.message).to.equal(
          "Cannot select bundle with Trial Session",
        );
    }
  });
  it("session should throw error for trial SVS session with bundle", async () => {
    const responseWithNonExistantEmail: CalendlyInvitee = {
      resource: {
        ...getInviteeResponse.resource,
        name: "Test User 100",
        email: "test100@email.com",
      },
    };

    mockedAxios.get.mockResolvedValueOnce({
      data: { ...responseWithNonExistantEmail },
    });
    try {
      const session = await createCheckoutSession({
        service: 5, // Trial SVS session
        location: 1, // OpenJar
        bundle: 0,
        eventURI: "test",
        inviteeURI: "test",
        origin: "https://test.com",
      });
      expect(session).to.be.undefined;
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(Error);
      if (error instanceof Error)
        expect(error.message).to.equal(
          "Cannot select bundle with Trial Session",
        );
    }
  });

  it("session should throw error for trial session with wrong location", async () => {
    const responseWithNonExistantEmail: CalendlyInvitee = {
      resource: {
        ...getInviteeResponse.resource,
        name: "Test User 100",
        email: "test100@email.com",
      },
    };

    mockedAxios.get.mockResolvedValueOnce({
      data: { ...responseWithNonExistantEmail },
    });
    try {
      const session = await createCheckoutSession({
        service: 5, // Trial session
        location: 2,
        bundle: 0,
        eventURI: "test",
        inviteeURI: "test",
        origin: "https://test.com",
      });
      expect(session).to.be.undefined;
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(Error);
      if (error instanceof Error)
        expect(error.message).to.equal(
          "Cannot select bundle with Trial Session",
        );
    }

    try {
      const session = await createCheckoutSession({
        service: 4, // Trial session
        location: 2,
        bundle: 0,
        eventURI: "test",
        inviteeURI: "test",
        origin: "https://test.com",
      });
      expect(session).to.be.undefined;
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(Error);
      if (error instanceof Error)
        expect(error.message).to.equal(
          "Cannot select bundle with Trial Session",
        );
    }
  });

  it("should return error if invalid service", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: getInviteeResponse });
    try {
      const session = await createCheckoutSession({
        service: 6,
        location: 2,
        eventURI: "test",
        inviteeURI: "test",
        origin: "https://test.com",
      });

      expect(session).to.be.undefined;
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(Error);
      if (error instanceof Error)
        expect(error.message).to.equal("Invalid service");
    }
  });

  it("should return error if invalid location", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: getInviteeResponse });

    try {
      const session = await createCheckoutSession({
        service: 0,
        location: 6,
        eventURI: "test",
        inviteeURI: "test",
        origin: "https://test.com",
      });

      expect(session).to.be.undefined;
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(Error);
      if (error instanceof Error)
        expect(error.message).to.equal("Invalid location");
    }
  });

  it("should return error if invalid bundle", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: getInviteeResponse });

    try {
      const session = await createCheckoutSession({
        service: 0,
        location: 2,
        bundle: 6,
        eventURI: "test",
        inviteeURI: "test",
        origin: "https://test.com",
      });

      expect(session).to.be.undefined;
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(Error);
      if (error instanceof Error)
        expect(error.message).to.equal("Invalid bundle");
    }
  });

  it("should return error for SVS session with bundle", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: getInviteeResponse });

    try {
      const session = await createCheckoutSession({
        service: 2,
        location: 2,
        bundle: 0,
        eventURI: "test",
        inviteeURI: "test",
        origin: "https://test.com",
      });

      expect(session).to.be.undefined;
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(Error);
      if (error instanceof Error)
        expect(error.message).to.equal("Cannot select bundle for SVS Session");
    }
  });

  it("should return an error if missing eventURI", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: getInviteeResponse });

    try {
      const session = await createCheckoutSession({
        service: 0,
        location: 2,
        inviteeURI: "test",
        eventURI: "",
        origin: "https://test.com",
      });

      expect(session).to.be.undefined;
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(Error);
      if (error instanceof Error)
        expect(error.message).to.equal("Invalid eventURI");
    }
  });

  it("should return an error if missing inviteeURI", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: getInviteeResponse });

    try {
      const session = await createCheckoutSession({
        service: 0,
        location: 2,
        eventURI: "test",
        inviteeURI: "",
        origin: "https://test.com",
      });

      expect(session).to.be.undefined;
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(Error);
      if (error instanceof Error)
        expect(error.message).to.equal("Invalid inviteeURI");
    }
  });
});

const checkValidCheckoutURL = (url: string | undefined) =>
  expect(url, "Checking for valid checkout URL").match(
    /https:\/\/checkout\.(?:barrettpenrod|stripe)\.com\/c\/pay\/cs_test_[a-zA-Z0-9]+/,
  );
