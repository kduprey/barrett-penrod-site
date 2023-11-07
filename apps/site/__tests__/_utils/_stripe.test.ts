import { prisma } from "@bpvs/db";
import {
	createCustomer,
	getNumLessonsFromLineItems,
	updateCustomer,
} from "@bpvs/utils";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { getEventResponse } from "../../src/data/calendlyResponses/getEventResponse";
import { getInviteeResponse } from "../../src/data/calendlyResponses/getInviteeResponse";
import { dbCalendlyEventPayloads } from "../../src/data/seedData/calendlyEventPayloads";
import { dbClients } from "../../src/data/seedData/clients";
import {
	checkoutSessionCompleted,
	lineItems,
} from "../../src/data/stripeResponses/webhooks";

beforeEach(async () => {
	await prisma.calendlyInviteePayloads.deleteMany();
	await prisma.clients.deleteMany();
});
afterEach(async () => {
	await prisma.calendlyInviteePayloads.deleteMany();
	await prisma.clients.deleteMany();
});

describe("updateCustomer after checkout", () => {
	it("should update the customer", async () => {
		await prisma.calendlyInviteePayloads.create({
			data: dbCalendlyEventPayloads[0],
		});
		const client = await prisma.clients.create({
			data: dbClients[0],
		});

		const updatedClient = await updateCustomer(
			checkoutSessionCompleted,
			client,
			getEventResponse,
			lineItems
		);

		const updatedPayload = await prisma.calendlyInviteePayloads.findUnique({
			where: {
				uri: checkoutSessionCompleted.metadata?.inviteeURI!,
			},
		});

		expect(updatedClient).toBeDefined();
		expect(updatedPayload).toBeDefined();
		expect(updatedPayload?.clientId).toBe(updatedClient.id);
		expect(updatedClient.nextLesson?.toISOString()).toStrictEqual(
			new Date(getEventResponse.resource.start_time).toISOString()
		);
		expect(updatedClient.activeMember).toBe(true);
		expect(updatedClient.totalSpend).toBe(
			client.totalSpend + checkoutSessionCompleted.amount_total!
		);
		expect(updatedClient.lessonsRemaining).toBe(
			client.lessonsRemaining + getNumLessonsFromLineItems(lineItems)
		);
	});

	it("should throw an error if the client is not found", async () => {
		await prisma.calendlyInviteePayloads.create({
			data: dbCalendlyEventPayloads[0],
		});
		const client = await prisma.clients.create({
			data: dbClients[0],
		});

		await expect(
			updateCustomer(
				checkoutSessionCompleted,
				{ ...client, id: "334234223234" },
				getEventResponse,
				lineItems
			)
		).rejects.toThrowError();

		await prisma.calendlyInviteePayloads.deleteMany();
		await prisma.clients.deleteMany();
	});
});

describe("createCustomer after checkout", () => {
	it("should create a new customer", async () => {
		await prisma.calendlyInviteePayloads.create({
			data: dbCalendlyEventPayloads[0],
		});
		await prisma.clients.create({
			data: dbClients[0],
		});

		const createdClient = await createCustomer(
			getInviteeResponse,
			getEventResponse,
			checkoutSessionCompleted,
			lineItems
		);

		const updatedPayload = await prisma.calendlyInviteePayloads.findUnique({
			where: {
				uri: checkoutSessionCompleted.client_reference_id!,
			},
		});

		expect(createdClient).toBeDefined();
		expect(updatedPayload).toBeDefined();
		expect(updatedPayload?.clientId).toBe(createdClient.id);
		expect(createdClient.activeMember).toBe(true);
		expect(createdClient.archived).toBe(false);
		expect(createdClient.email).toBe(getInviteeResponse.resource.email);
		expect(createdClient.dateJoined.toISOString()).toStrictEqual(
			new Date(getEventResponse.resource.start_time).toISOString()
		);
		expect(createdClient.firstLesson?.toISOString()).toStrictEqual(
			new Date(getEventResponse.resource.start_time).toISOString()
		);
		expect(createdClient.nextLesson?.toISOString()).toStrictEqual(
			new Date(getEventResponse.resource.start_time).toISOString()
		);
		expect(createdClient.lessonsRemaining).toBe(
			getNumLessonsFromLineItems(lineItems)
		);
		expect(createdClient.name).toBe(getInviteeResponse.resource.name);
		expect(createdClient.totalSpend).toBe(
			checkoutSessionCompleted.amount_total!
		);
		expect(createdClient.stripe_customer_id).toBe(
			checkoutSessionCompleted.customer as string
		);
	});

	it("should throw an error if customer creation fails", async () => {
		await prisma.calendlyInviteePayloads.create({
			data: dbCalendlyEventPayloads[0],
		});
		await prisma.clients.create({
			data: dbClients[0],
		});

		await expect(
			createCustomer(
				getInviteeResponse,
				{
					...getEventResponse,
					resource: {
						...getEventResponse.resource,
						start_time: "not_a_date",
					},
				},
				checkoutSessionCompleted,
				lineItems
			)
		).rejects.toThrowError();
	});
});
