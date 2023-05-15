import { stripe } from "@bpvs/config";
import {
  consultationResponse,
  getEventResponse,
} from "@bpvs/site/data/calendlyResponses/getEventResponse";
import { getInviteeResponse } from "@bpvs/site/data/calendlyResponses/getInviteeResponse";
import { dbCalendlyEventPayloads } from "@bpvs/site/data/seedData/calendlyEventPayloads";
import { dbClients } from "@bpvs/site/data/seedData/clients";
import {
  checkForClient,
  createClient,
  createStripeCustomer,
  updateClient,
} from "@bpvs/utils";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

// eslint-disable-next-line
// @ts-ignore
const prisma = global.prisma || new PrismaClient({ ...prismaConfig });

describe("checkForClient should", () => {
  beforeAll(async () => {
    await prisma.clients.deleteMany({});
    await prisma.calendlyInviteePayloads.deleteMany({});
    await prisma.clients.createMany({
      data: dbClients,
    });
  });

  afterAll(async () => {
    await prisma.clients.deleteMany({});
  });

  it("return a client if one exists by name", async () => {
    const client = await checkForClient("Test User 1", "none@email.com");

    expect(client).not.toBeNull();
    expect(client?.name).toBe("Test User 1");
    expect(client?.email).toBe("test@email.com");
  });

  it("return a client if one exists by email", async () => {
    const client = await checkForClient("none", "test@email.com");

    expect(client).not.toBeNull();
    expect(client?.name).toBe("Test User 1");
    expect(client?.email).toBe("test@email.com");
  });

  it("return null if no client exists", async () => {
    const client = await checkForClient("none", "fake@email.com");

    expect(client).toBeNull();
  });

  it("throw an error if the database returns an error", async () => {
    try {
      const response = await checkForClient("none", "falsy@email.com");
      expect(response).toBeNull();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("error: ", error);
        expect(error).not.toBeNull();
        expect(error.message).toBe("Error searching DB for existing customer");
      }
    }
  });
});

describe("updateClient should", () => {
  beforeEach(async () => {
    await prisma.clients.deleteMany({});
    await prisma.calendlyInviteePayloads.deleteMany({});
    await prisma.clients.createMany({
      data: dbClients,
    });
    await prisma.calendlyInviteePayloads.createMany({
      data: dbCalendlyEventPayloads[1],
    });
  });

  afterEach(async () => {
    await prisma.clients.deleteMany({});
    await prisma.calendlyInviteePayloads.deleteMany({});
  });

  it("update a clients data", async () => {
    await prisma.clients.create({
      data: dbClients[0],
    });
    const payload = await prisma.calendlyInviteePayloads.create({
      data: dbCalendlyEventPayloads[1],
    });
    const client = await prisma.clients.findUnique({
      where: {
        email: dbClients[0].email,
      },
    });

    if (!client) throw new Error("Client not found");
    if (!payload) throw new Error("Payload not found");

    await updateClient(client, consultationResponse, payload.id);
    const updatedClient = await prisma.clients.findUnique({
      where: {
        email: dbClients[0].email,
      },
      include: {
        bookings: true,
      },
    });

    expect(updatedClient).not.toBeNull();
    expect(updatedClient?.name).toBe("Test User 1");
    expect(updatedClient?.nextLesson?.toISOString()).toStrictEqual(
      new Date(consultationResponse.resource.start_time).toISOString()
    );
    expect(updatedClient?.activeMember).toBe(true);
    expect(updatedClient?.archived).toBe(false);
    expect(updatedClient?.lessonsRemaining).toBe(client.lessonsRemaining + 1);
    expect(updatedClient?.bookings[0].uri).toBe(payload.uri);

    await prisma.clients.deleteMany({});
    await prisma.calendlyInviteePayloads.deleteMany({});
  });

  it("throw an error if the database returns an error", async () => {
    await prisma.clients.createMany({
      data: dbClients,
    });
    await prisma.calendlyInviteePayloads.createMany({
      data: dbCalendlyEventPayloads[1],
    });
    try {
      const client = await prisma.clients.findUnique({
        where: {
          email: dbClients[0].email,
        },
      });
      const payload = await prisma.calendlyInviteePayloads.findUnique({
        where: {
          uri: dbCalendlyEventPayloads[1].uri,
        },
      });

      if (!client) throw new Error("Client not found");
      if (!payload) throw new Error("Payload not found");

      await updateClient(client, consultationResponse, "2");
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error).not.toBeNull();
        expect(error.message).toBe("Error updating existing customer");
      }
    }
  });
});

describe("createStripeCustomer should", () => {
  it("create a stripe customer", async () => {
    const response = await createStripeCustomer(getInviteeResponse);

    expect(response).not.toBeNull();
    expect(response?.id).not.toBeNull();
    expect(response?.email).toBe(getInviteeResponse.resource.email);
    expect(response?.name).toBe(getInviteeResponse.resource.name);

    stripe.customers.del(response?.id);
  });

  it("throw an error if stripe returns an error", async () => {
    try {
      await createStripeCustomer({
        resource: {
          ...getInviteeResponse.resource,
          email: "fakeemail",
        },
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error).not.toBeNull();
        expect(error.message).toBe("Error creating new Stripe customer");
      }
    }
  });
});

describe("createClient should", () => {
  beforeEach(async () => {
    await prisma.calendlyInviteePayloads.deleteMany();
    await prisma.clients.deleteMany();
  });

  afterEach(async () => {
    await prisma.calendlyInviteePayloads.deleteMany();
    await prisma.clients.deleteMany();
  });

  it("create a new client", async () => {
    await prisma.clients.createMany({
      data: dbClients,
    });
    const payload = await prisma.calendlyInviteePayloads.create({
      data: dbCalendlyEventPayloads[1],
    });
    const stripeCustomer = await createStripeCustomer(getInviteeResponse);

    const client = await createClient(
      getEventResponse,
      getInviteeResponse,
      stripeCustomer,
      payload.id
    );

    expect(client).not.toBeNull();
    expect(client.activeMember).toBe(true);
    expect(client.archived).toBe(false);
    expect(client.email).toBe(getInviteeResponse.resource.email);
    expect(client.name).toBe(getInviteeResponse.resource.name);
    expect(client.stripe_customer_id).toBe(stripeCustomer.id);
    expect(client.nextLesson?.toISOString()).toStrictEqual(
      new Date(consultationResponse.resource.start_time).toISOString()
    );
    expect(client.firstLesson?.toISOString()).toStrictEqual(
      new Date(consultationResponse.resource.start_time).toISOString()
    );
    expect(client.dateJoined?.toISOString()).toStrictEqual(
      new Date(consultationResponse.resource.start_time).toISOString()
    );
    expect(client.lessonsRemaining).toBe(1);
    expect(client.totalSpend).toBe(0);

    const clientWithBookings = await prisma.clients.findUnique({
      where: {
        stripe_customer_id: stripeCustomer.id,
      },
      include: {
        bookings: true,
      },
    });

    expect(clientWithBookings).not.toBeNull();
    expect(clientWithBookings?.bookings[0].uri).toBe(payload.uri);

    await prisma.calendlyInviteePayloads.deleteMany({});
    await prisma.clients.deleteMany({});
    await stripe.customers.del(stripeCustomer.id);
  });

  it("throw an error if the database returns an error", async () => {
    const stripeCustomer = await createStripeCustomer(getInviteeResponse);
    try {
      await createClient(
        getEventResponse,
        getInviteeResponse,
        stripeCustomer,
        "2"
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error).not.toBeNull();
        expect(error.message).toBe("Error creating new client in DB");
      }
    }

    await prisma.calendlyInviteePayloads.deleteMany({});
    await prisma.clients.deleteMany({});
    await stripe.customers.del(stripeCustomer.id);
  });
});
