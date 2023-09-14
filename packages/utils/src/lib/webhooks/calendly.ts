import { prisma } from "@bpvs/db";
import type { CalendlyEvent, Contact } from "@bpvs/types";

export const createDbClient = async (
	client: Required<Contact>,
	event: CalendlyEvent,
	payloadId: string
) => {
	try {
		// Create new client
		console.info("Creating new customer");
		const newCustomer = await prisma.clients.create({
			data: {
				activeMember: true,
				archived: false,
				email: client.email,
				dateJoined: event.resource.start_time,
				firstLesson: event.resource.start_time,
				lastLesson: event.resource.start_time,
				nextLesson: event.resource.start_time,
				lessonsRemaining: 0,
				name: client.name,
				totalSpend: 0,
				bookings: {
					connect: {
						id: payloadId,
					},
				},
			},
		});
		console.info("Created new client", newCustomer);

		return newCustomer;
	} catch (err) {
		console.error(err);

		throw new Error(`Error creating new client`);
	}
};
