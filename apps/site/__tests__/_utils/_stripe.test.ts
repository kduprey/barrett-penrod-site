import { getEventResponse } from "@bpvs/site/src/data/calendlyResponses/getEventResponse";
import { getInviteeResponse } from "@bpvs/site/src/data/calendlyResponses/getInviteeResponse";
import { dbCalendlyEventPayloads } from "@bpvs/site/src/data/seedData/calendlyEventPayloads";
import { dbClients } from "@bpvs/site/src/data/seedData/clients";
import {
	checkout_session_completed,
	line_items,
} from "@bpvs/site/src/data/stripeResponses/webhooks";
import {
	createCustomer,
	getNumLessonsFromLineItems,
	updateCustomer,
} from "@bpvs/utils";
import { PrismaClient } from "@prisma/client";
import { describe, expect, it } from "vitest";

// This is a workaround to make sure the prisma client is only instantiated once
// eslint-disable-next-line
// @ts-ignore
const prisma = global.prisma || new PrismaClient({ ...prismaConfig });

describe("updateCustomer after checkout", () => {
	beforeEach(async () => {
		await prisma.calendlyInviteePayloads.deleteMany();
		await prisma.clients.deleteMany();
	});

	afterEach(async () => {
		await prisma.calendlyInviteePayloads.deleteMany();
		await prisma.clients.deleteMany();
	});

	it("should update the customer", async () => {
		await prisma.calendlyInviteePayloads.create({
			data: dbCalendlyEventPayloads[0],
		});
		const client = await prisma.clients.create({
			data: dbClients[0],
		});

		const updatedClient = await updateCustomer(
			checkout_session_completed,
			client,
			getEventResponse,
			line_items
		);

		const updatedPayload = await prisma.calendlyInviteePayloads.findUnique({
			where: {
				uri: checkout_session_completed.metadata?.inviteeURI as string,
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
			client.totalSpend + (checkout_session_completed.amount_total as number)
		);
		expect(updatedClient.lessonsRemaining).toBe(
			client.lessonsRemaining + getNumLessonsFromLineItems(line_items)
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
				checkout_session_completed,
				{ ...client, id: "not a real id" },
				getEventResponse,
				line_items
			)
		).rejects.toThrowError();

		await prisma.calendlyInviteePayloads.deleteMany();
		await prisma.clients.deleteMany();
	});
});

describe("createCustomer after checkout", () => {
	beforeEach(async () => {
		await prisma.calendlyInviteePayloads.deleteMany();
		await prisma.clients.deleteMany();
		await prisma.calendlyInviteePayloads.create({
			data: dbCalendlyEventPayloads[0],
		});
	});

	afterEach(async () => {
		await prisma.calendlyInviteePayloads.deleteMany();
		await prisma.clients.deleteMany();
	});
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
			checkout_session_completed,
			line_items
		);

		const updatedPayload = await prisma.calendlyInviteePayloads.findUnique({
			where: {
				uri: checkout_session_completed.client_reference_id as string,
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
			getNumLessonsFromLineItems(line_items)
		);
		expect(createdClient.name).toBe(getInviteeResponse.resource.name);
		expect(createdClient.totalSpend).toBe(
			checkout_session_completed.amount_total as number
		);
		expect(createdClient.stripe_customer_id).toBe(
			checkout_session_completed.customer as string
		);
	});

	it("should throw an error if database creation fails", async () => {
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
				checkout_session_completed,
				line_items
			)
		).rejects.toThrowError();
	});
});
