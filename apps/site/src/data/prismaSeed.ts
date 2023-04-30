import { PrismaClient, prismaConfig } from "@bpvs/db";
import { dev } from "@bpvs/types";
import { dbCalendlyEventPayloads } from "./seedData/calendlyEventPayloads";
import { dbClients } from "./seedData/clients";

const prisma = new PrismaClient({ ...prismaConfig });

export const seedDB = async () => {
	if (!dev)
		throw new Error(
			"Cannot clear database in production. Please use a different environment"
		);

	console.info("SEEDING CALLENDLY EVENT PAYLOADS");
	for (let index = 0; index < dbCalendlyEventPayloads.length; index++) {
		const event = dbCalendlyEventPayloads[index];
		await prisma.calendlyInviteePayloads.create({
			data: {
				...event,
			},
		});
	}

	console.info("SEEDING CLIENTS");
	for (let index = 0; index < dbClients.length; index++) {
		const client = dbClients[index];
		await prisma.clients.create({
			data: {
				...client,
			},
		});
	}
};

export const clearDB = async () => {
	if (!dev)
		throw new Error(
			"Cannot clear database in production. Please use a different environment"
		);

	console.info("CLEARING CLIENTS");
	await prisma.clients.deleteMany({});
	console.info("CLEARING CALLENDLY EVENT PAYLOADS");
	await prisma.calendlyInviteePayloads.deleteMany({});
};
