import { PrismaClient, prismaConfig } from "@bpvs/db";
import { dev } from "@bpvs/types";
import { dbCalendlyEventPayloads } from "./seedData/calendlyEventPayloads";
import { dbClients } from "./seedData/clients";

const prisma = new PrismaClient({ ...prismaConfig });

export const seedDB = async (): Promise<void> => {
	if (!dev)
		throw new Error(
			"Cannot clear database in production. Please use a different environment"
		);

	console.info("SEEDING CALLENDLY EVENT PAYLOADS");
	const payloadEvents = [];
	for (const payload of dbCalendlyEventPayloads) {
		payloadEvents.push(
			prisma.calendlyInviteePayloads.create({
				data: {
					...payload,
				},
			})
		);
	}
	await Promise.all(payloadEvents);

	console.info("SEEDING CLIENTS");
	const clientEvents = [];
	for (const client of dbClients) {
		clientEvents.push(
			prisma.clients.create({
				data: {
					...client,
				},
			})
		);
	}
	await Promise.all(clientEvents);
};

export const clearDB = async (): Promise<void> => {
	if (!dev)
		throw new Error(
			"Cannot clear database in production. Please use a different environment"
		);

	console.info("CLEARING CLIENTS");
	await prisma.clients.deleteMany({});
	console.info("CLEARING CALLENDLY EVENT PAYLOADS");
	await prisma.calendlyInviteePayloads.deleteMany({});
};
