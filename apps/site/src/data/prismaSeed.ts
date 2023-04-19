import { PrismaClient } from "@prisma/client";
import { dev, prismaConfig } from "config/index";
import { dbCalendlyEventPayloads } from "./seedData/calendlyEventPayloads";
import { dbClients } from "./seedData/clients";

const prisma = new PrismaClient({ ...prismaConfig });

export const seedDB = async () => {
	if (!dev)
		throw new Error(
			"Cannot clear database in production. Please use a different environment"
		);

	console.info("SEEDING CALLENDLY EVENT PAYLOADS");
	dbCalendlyEventPayloads.forEach(async (event) => {
		await prisma.calendlyInviteePayloads.create({
			data: {
				...event,
			},
		});
	});
	console.info("SEEDING CLIENTS");
	dbClients.forEach(async (client) => {
		await prisma.clients.create({
			data: {
				...client,
			},
		});
	});
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
